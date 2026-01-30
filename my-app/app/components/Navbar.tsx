import Image from "next/image";

import { navCta, navLinks } from "../content";

export default function Navbar() {
  return (
    <nav className="relative z-30 border-b border-white/70 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tahoul logo"
            width={360}
            height={120}
            priority
            className="h-16 w-auto md:h-20"
          />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium text-[color:var(--color-ink)]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="transition hover:text-[var(--color-deep)]"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="sheen hidden items-center rounded-full bg-[linear-gradient(120deg,#4682b4,#305376)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110 lg:inline-flex"
            href={navCta.href}
          >
            {navCta.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
