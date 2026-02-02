"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import Background from "./Background";
import Contact from "./Contact";
import Faqs from "./Faqs";
import Footer from "./Footer";
import Hero from "./Hero";
import Mission from "./Mission";
import Navbar from "./Navbar";
import Promise from "./Promise";
import Services from "./Services";
import Team from "./Team";
import Testimonials from "./Testimonials";
import WhoWeAre from "./WhoWeAre";

const DESKTOP_MIN_WIDTH = 1024;
const DELTA_THRESHOLD = 40;
const DELTA_RESET_MS = 120;
const SCROLL_LOCK_MS = 900;

const baseSectionBackground =
  "linear-gradient(180deg, rgba(103, 181, 255, 0.08) 0%, rgba(47, 84, 118, 0.12) 100%)";

const sectionsConfig = [
  {
    id: "home",
    label: "Home",
    navBackground: "url('/hero-v3.jpg')",
    navTone: "light",
  },
  { id: "who-we-are", label: "Who We Are", navBackground: baseSectionBackground },
  {
    id: "vision-mission",
    label: "Vision & Mission",
    navBackground: baseSectionBackground,
    navTone: "light",
  },
  { id: "services", label: "Services", navBackground: baseSectionBackground },
  {
    id: "our-leadership",
    label: "Our Leadership",
    navBackground: baseSectionBackground,
    navTone: "light",
  },
  {
    id: "our-promise",
    label: "Our Promise",
    navBackground: baseSectionBackground,
  },
  {
    id: "testimonials",
    label: "Testimonials",
    navBackground: baseSectionBackground,
    navTone: "light",
  },
  { id: "faqs", label: "FAQs", navBackground: baseSectionBackground },
  {
    id: "contact",
    label: "Contact",
    navBackground: baseSectionBackground,
    navTone: "light",
  },
];

export default function FullPageLanding() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const enabledRef = useRef(false);
  const lockedRef = useRef(false);
  const lockTimerRef = useRef<number | null>(null);
  const deltaRef = useRef(0);
  const deltaTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const numbers = useMemo(
    () => sectionsConfig.map((_, index) => String(index + 1).padStart(2, "0")),
    []
  );

  const activeSection = sectionsConfig[activeIndex] ?? sectionsConfig[0];
  const navBackground = activeSection?.navBackground ?? baseSectionBackground;
  const navTone = activeSection?.navTone === "light" ? "light" : "dark";
  const isHome = activeSection?.id === "home";
  const navStyle = isHome
    ? undefined
    : navBackground.startsWith("url(")
      ? {
          backgroundImage: navBackground,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : {
          backgroundImage: navBackground,
        };

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
      Array.from(
        container.querySelectorAll<HTMLElement>(".fullpage-section")
      );

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

    const scrollToIndex = (index: number, behavior?: ScrollBehavior) => {
      const sections = getSections();
      if (!sections.length) {
        return;
      }
      const clampedIndex = Math.max(0, Math.min(index, sections.length - 1));
      const targetTop = getSectionTop(sections[clampedIndex]);
      container.scrollTo({
        top: targetTop,
        behavior:
          behavior ?? (prefersReducedMotion.matches ? "auto" : "smooth"),
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

    const updateActiveIndex = () => {
      const sections = getSections();
      if (!sections.length) {
        return;
      }
      const closestIndex = getClosestSectionIndex(sections);
      setActiveIndex(closestIndex);
    };

    const handleScroll = () => {
      if (rafRef.current !== null) {
        return;
      }
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        updateActiveIndex();
      });
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
      if (
        target?.isContentEditable ||
        tag === "input" ||
        tag === "textarea" ||
        tag === "select"
      ) {
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
      updateActiveIndex();
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

    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    updateActiveIndex();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      removeDesktopListener();
      removeMotionListener();
      clearLock();
      resetDelta();
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleNavClick = (index: number, event: MouseEvent<HTMLAnchorElement>) => {
    if (!containerRef.current) {
      return;
    }
    if (!enabledRef.current) {
      return;
    }
    event.preventDefault();
    const target = containerRef.current.querySelector<HTMLElement>(
      `.fullpage-section[data-index="${index}"]`
    );
    if (!target) {
      return;
    }
    const containerRect = containerRef.current.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetTop =
      targetRect.top - containerRect.top + containerRef.current.scrollTop;
    containerRef.current.scrollTo({
      top: targetTop,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const totalLabel = String(sectionsConfig.length).padStart(2, "0");

  return (
    <div className="relative min-h-screen text-[color:var(--color-ink)]">
      <Background />

      <nav className="pp-nav" aria-label="Section navigation">
        <div className="pp-nav-inner">
          <div className="pp-nav-current" aria-hidden="true">
            <div
              className="pp-nav-roller"
              style={{
                transform: `translateY(calc(${activeIndex} * var(--pp-nav-step) * -1))`,
              }}
            >
              {numbers.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
          <ul className="pp-nav-list">
            {sectionsConfig.map((section, index) => (
              <li
                key={section.id}
                className={index === activeIndex ? "active" : undefined}
              >
                <a
                  className="pp-nav-link"
                  href={`#${section.id}`}
                  onClick={(event) => handleNavClick(index, event)}
                  aria-current={index === activeIndex ? "true" : undefined}
                >
                  <svg
                    className="pp-nav-dot"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <circle cx="5" cy="5" r="4" />
                  </svg>
                  <span className="pp-nav-tooltip">{section.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="pp-nav-total" aria-hidden="true">
            {totalLabel}
          </div>
        </div>
      </nav>

      <div ref={containerRef} className="fullpage-container relative z-10">
        <header
          id="home"
          className="fullpage-section relative overflow-hidden"
          data-index={0}
          data-active={activeIndex === 0 ? "true" : "false"}
        >
          <Image
            src="/hero-v3.jpg"
            alt="Tahoul consulting leadership"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,28,39,0.78)_0%,rgba(15,28,39,0.55)_38%,rgba(15,28,39,0.1)_100%)]" />
          <Navbar
            backgroundStyle={navStyle}
            tone={navTone}
            bordered={!isHome}
          />
          <Hero />
        </header>

        <section
          id="who-we-are"
          className="fullpage-section"
          data-index={1}
          data-active={activeIndex === 1 ? "true" : "false"}
        >
          <WhoWeAre />
        </section>

        <section
          id="vision-mission"
          className="fullpage-section"
          data-index={2}
          data-active={activeIndex === 2 ? "true" : "false"}
        >
          <Mission />
        </section>

        <section
          id="services"
          className="fullpage-section"
          data-index={3}
          data-active={activeIndex === 3 ? "true" : "false"}
        >
          <Services />
        </section>

        <section
          id="our-leadership"
          className="fullpage-section"
          data-index={4}
          data-active={activeIndex === 4 ? "true" : "false"}
        >
          <Team />
        </section>

        <section
          id="our-promise"
          className="fullpage-section"
          data-index={5}
          data-active={activeIndex === 5 ? "true" : "false"}
        >
          <Promise />
        </section>

        <section
          id="testimonials"
          className="fullpage-section"
          data-index={6}
          data-active={activeIndex === 6 ? "true" : "false"}
        >
          <Testimonials />
        </section>

        <section
          id="faqs"
          className="fullpage-section"
          data-index={7}
          data-active={activeIndex === 7 ? "true" : "false"}
        >
          <Faqs />
        </section>

        <section
          id="contact"
          className="fullpage-section"
          data-index={8}
          data-active={activeIndex === 8 ? "true" : "false"}
        >
          <Contact />
          <Footer />
        </section>
      </div>
    </div>
  );
}
