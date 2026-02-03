 "use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";

import { navCta, navLinks } from "../content";

type NavbarProps = {
  backgroundStyle?: CSSProperties;
  tone?: "light" | "dark";
  bordered?: boolean;
};

export default function Navbar({
  backgroundStyle,
  tone = "dark",
  bordered = true,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const logoSrc = tone === "light" ? "/white-logo.png" : "/logo-tr.png";
  const logoFrameClass =
    "relative h-12 w-[190px] sm:h-14 sm:w-[210px] md:h-16 md:w-[230px]";
  const linkClass =
    tone === "light"
      ? "text-white/85"
      : "text-[color:var(--color-ink)]/80";
  const ctaClass =
    tone === "light"
      ? "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[#0f1c27] hover:text-white"
      : "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[#0f1c27] hover:text-white";

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 w-full border-b border-transparent bg-transparent"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center">
          <div className={logoFrameClass}>
            <Image
              src={logoSrc}
              alt="Tahoul logo"
              fill
              priority
              className="object-contain"
              sizes="190px"
            />
          </div>
        </div>
        <div
          className={`hidden items-center justify-end gap-4 text-lg font-medium leading-none lg:flex ${linkClass}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="flex items-center rounded-full px-3 py-2 transition hover:bg-[#0f1c27] hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className={`cta-animated items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:brightness-110 ${ctaClass}`}
            href={navCta.href}
          >
            <span>{navCta.label}</span>
            <span className="cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className={`mr-[37px] flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden ${
            tone === "light"
              ? "border-white/40 text-white hover:bg-white/10"
              : "border-[var(--color-ink)]/20 text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5"
          }`}
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
      {isOpen ? (
        <div className="absolute left-0 right-0 top-full z-[60] w-full border-b border-black/5 bg-white/95 shadow-lg backdrop-blur lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-full px-4 py-3 transition hover:bg-[var(--color-ink)]/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
