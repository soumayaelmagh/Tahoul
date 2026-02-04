"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { whoWeAre } from "../content";

const stats = [
  {
    value: 100,
    label: "Projects Executed by Our Team",
    icon: (
      <svg
        className="stat-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 7h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M9.5 12h5" />
        <path d="M8.5 15h7" />
      </svg>
    ),
  },
  {
    value: 70,
    label: "Experts in Our Network",
    icon: (
      <svg
        className="stat-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3.25" />
        <path d="M4 19a6.5 6.5 0 0 1 16 0" />
        <path d="M5.5 12.8 3 11.4" />
        <path d="M18.5 12.8 21 11.4" />
        <path d="M12 4V2" />
      </svg>
    ),
  },
  {
    value: 200,
    label: "Frameworks for Public and Private Sectors",
    icon: (
      <svg
        className="stat-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="8" height="8" rx="2" />
        <rect x="13" y="4" width="8" height="8" rx="2" />
        <rect x="3" y="14" width="8" height="7" rx="2" />
        <path d="M13 15h8" />
        <path d="M13 18h6" />
      </svg>
    ),
  },
];

export default function WhoWeAre() {
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const formatter = useMemo(() => new Intl.NumberFormat("en-US"), []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let rafId = 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      if (reduceMotion) {
        setCounts(stats.map((stat) => stat.value));
        return;
      }

      const start = performance.now();
      const duration = 1500;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(stats.map((stat) => Math.round(stat.value * eased)));

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen items-center bg-white py-12 pt-20 sm:pt-24 md:py-24 md:pt-32">
      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        <div className="slide-in">
          <p
            className="section-eyebrow fade-up uppercase tracking-[0.45em]"
            style={{ animationDelay: "0s" }}
          >
            {whoWeAre.title}
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <h2
                className="fade-up font-display text-[2.6rem] leading-[1.12] text-(--color-deep) md:text-[3.2rem]"
                style={{ animationDelay: "0.1s" }}
              >
                {whoWeAre.headline}
              </h2>
              <p
                className="fade-up section-description max-w-lg text-lg font-semibold"
                style={{ animationDelay: "0.22s" }}
              >
                {whoWeAre.body}
              </p>
            </div>
            <div
              className="fade-up flex justify-start lg:justify-end"
              style={{ animationDelay: "0.16s" }}
            >
              <Image
                src="/who_we_are.png"
                alt="Who we are"
                width={420}
                height={140}
                className="h-auto w-full max-w-xs object-contain sm:max-w-sm"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card card-hover fade-up"
                style={{ animationDelay: `${0.28 + index * 0.08}s` }}
              >
                <div className="stat-orbit" aria-hidden="true" />
                <div className="stat-orbit secondary" aria-hidden="true" />
                <div className="stat-spark" aria-hidden="true" />
                <div className="stat-content">
                  <div className="stat-icon-wrap">{stat.icon}</div>
                  <p className="stat-value" aria-hidden="true">
                    <span className="stat-prefix">+</span>
                    <span className="stat-number">
                      {formatter.format(counts[index] ?? 0)}
                    </span>
                  </p>
                  <span className="sr-only">{`+${stat.value} ${stat.label}`}</span>
                  <p className="stat-label">{stat.label}</p>
                  <div className="pulse-line mt-4 h-1 w-full rounded-full bg-[rgba(47,84,118,0.12)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
