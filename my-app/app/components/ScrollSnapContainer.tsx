"use client";

import { useEffect, useRef } from "react";

type ScrollSnapContainerProps = {
  children: React.ReactNode;
};

const DESKTOP_MIN_WIDTH = 1024;
const DELTA_THRESHOLD = 40;
const DELTA_RESET_MS = 120;
const SCROLL_LOCK_MS = 800;

export default function ScrollSnapContainer({
  children,
}: ScrollSnapContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const enabledRef = useRef(false);
  const lockedRef = useRef(false);
  const lockTimerRef = useRef<number | null>(null);
  const deltaRef = useRef(0);
  const deltaTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const isDesktop = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);

    const updateEnabled = () => {
      enabledRef.current = isDesktop.matches && !prefersReducedMotion.matches;
    };

    updateEnabled();

    const clearLock = () => {
      lockedRef.current = false;
      if (lockTimerRef.current !== null) {
        window.clearTimeout(lockTimerRef.current);
        lockTimerRef.current = null;
      }
    };

    const lockScroll = () => {
      lockedRef.current = true;
      if (lockTimerRef.current !== null) {
        window.clearTimeout(lockTimerRef.current);
      }
      lockTimerRef.current = window.setTimeout(clearLock, SCROLL_LOCK_MS);
    };

    const resetDelta = () => {
      deltaRef.current = 0;
      if (deltaTimerRef.current !== null) {
        window.clearTimeout(deltaTimerRef.current);
        deltaTimerRef.current = null;
      }
    };

    const getSections = () =>
      Array.from(container.querySelectorAll<HTMLElement>(".snap-section"));

    const getSectionTop = (section: HTMLElement) => {
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      return sectionRect.top - containerRect.top + container.scrollTop;
    };

    const getClosestSectionIndex = (sections: HTMLElement[]) => {
      const scrollTop = container.scrollTop;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      sections.forEach((section, index) => {
        const top = getSectionTop(section);
        const distance = Math.abs(top - scrollTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      return closestIndex;
    };

    const scrollToIndex = (index: number) => {
      const sections = getSections();
      if (!sections.length) {
        return;
      }
      const clampedIndex = Math.max(0, Math.min(index, sections.length - 1));
      const targetTop = getSectionTop(sections[clampedIndex]);
      container.scrollTo({
        top: targetTop,
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      });
    };

    const hasScrollableParent = (node: EventTarget | null) => {
      let current = node as HTMLElement | null;
      while (current && current !== container) {
        const style = window.getComputedStyle(current);
        const overflowY = style.overflowY;
        const canScroll =
          (overflowY === "auto" || overflowY === "scroll") &&
          current.scrollHeight > current.clientHeight;
        if (canScroll) {
          return true;
        }
        current = current.parentElement;
      }
      return false;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!enabledRef.current) {
        return;
      }
      if (hasScrollableParent(event.target)) {
        return;
      }
      event.preventDefault();

      if (lockedRef.current) {
        return;
      }

      let delta = event.deltaY;
      if (event.deltaMode === 1) {
        delta *= 16;
      } else if (event.deltaMode === 2) {
        delta *= window.innerHeight;
      }

      deltaRef.current += delta;
      if (deltaTimerRef.current !== null) {
        window.clearTimeout(deltaTimerRef.current);
      }
      deltaTimerRef.current = window.setTimeout(resetDelta, DELTA_RESET_MS);

      if (Math.abs(deltaRef.current) < DELTA_THRESHOLD) {
        return;
      }

      const direction = deltaRef.current > 0 ? 1 : -1;
      resetDelta();

      const sections = getSections();
      if (!sections.length) {
        return;
      }

      const currentIndex = getClosestSectionIndex(sections);
      const nextIndex = Math.max(
        0,
        Math.min(currentIndex + direction, sections.length - 1)
      );

      if (nextIndex === currentIndex) {
        return;
      }

      lockScroll();
      scrollToIndex(nextIndex);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!enabledRef.current || lockedRef.current) {
        return;
      }
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      if (target?.isContentEditable || tag === "input" || tag === "textarea" || tag === "select") {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      let direction = 0;
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        direction = 1;
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        direction = -1;
      }

      if (event.key === "Home") {
        event.preventDefault();
        lockScroll();
        scrollToIndex(0);
        return;
      }

      if (event.key === "End") {
        const sections = getSections();
        if (!sections.length) {
          return;
        }
        event.preventDefault();
        lockScroll();
        scrollToIndex(sections.length - 1);
        return;
      }

      if (!direction) {
        return;
      }

      event.preventDefault();
      const sections = getSections();
      if (!sections.length) {
        return;
      }

      const currentIndex = getClosestSectionIndex(sections);
      const nextIndex = Math.max(
        0,
        Math.min(currentIndex + direction, sections.length - 1)
      );

      if (nextIndex === currentIndex) {
        return;
      }

      lockScroll();
      scrollToIndex(nextIndex);
    };

    const handleMediaChange = () => {
      updateEnabled();
      clearLock();
      resetDelta();
    };

    const addMediaListener = (
      media: MediaQueryList,
      handler: () => void
    ) => {
      if (media.addEventListener) {
        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
      }
      media.addListener(handler);
      return () => media.removeListener(handler);
    };

    const removeDesktopListener = addMediaListener(isDesktop, handleMediaChange);
    const removeMotionListener = addMediaListener(
      prefersReducedMotion,
      handleMediaChange
    );

    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      removeDesktopListener();
      removeMotionListener();
      clearLock();
      resetDelta();
    };
  }, []);

  return (
    <div ref={containerRef} className="snap-container relative z-10">
      {children}
    </div>
  );
}
