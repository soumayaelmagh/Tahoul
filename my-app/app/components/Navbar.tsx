import type { CSSProperties } from "react";
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
  const linkClass =
    tone === "light"
      ? "text-white/85 hover:text-white"
      : "text-[color:var(--color-ink)]/80 hover:text-[var(--color-accent)]";
  const ctaClass =
    tone === "light"
      ? "bg-[var(--color-accent)] text-[var(--color-ink)]"
      : "bg-[var(--color-accent)] text-[var(--color-ink)]";

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-transparent ${
        bordered ? "border-b border-white/30" : "border-b border-transparent"
      }`}
      style={backgroundStyle}
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 px-6 py-5">
        <div className="flex items-center">
          <Image
            src="/logo-tr.png"
            alt="Tahoul logo"
            width={360}
            height={120}
            priority
            className="h-12 w-auto md:h-14"
          />
        </div>
        <div
          className={`flex flex-wrap items-center justify-end gap-4 text-lg font-medium ${linkClass}`}
        >
          {navLinks.map((link) => (
            <a key={link.href} className="transition" href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className={`sheen hidden items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:brightness-110 lg:inline-flex ${ctaClass}`}
            href={navCta.href}
          >
            {navCta.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
