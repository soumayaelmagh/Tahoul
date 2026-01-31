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
      ? "text-white/85"
      : "text-[color:var(--color-ink)]/80";
  const ctaClass =
    tone === "light"
      ? "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[#0f1c27] hover:text-white"
      : "bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[#0f1c27] hover:text-white";

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 bg-transparent border-b border-transparent"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-8 px-8 py-5">
        <div className="flex items-center">
          <Image
            src="/logo-tr.png"
            alt="Tahoul logo"
            width={360}
            height={120}
            priority
            className="block h-12 w-auto md:h-14"
          />
        </div>
        <div
          className={`flex items-center justify-end gap-4 text-lg font-medium leading-none ${linkClass}`}
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
