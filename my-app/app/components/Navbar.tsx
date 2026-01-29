import Image from "next/image";

import { navCta, navLinks } from "../content";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/70 bg-white/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Tahoul logo"
            width={160}
            height={56}
            priority
            className="h-12 w-auto md:h-14"
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
