import Image from "next/image";

import { navCta, navLinks } from "../content";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/30 bg-transparent">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 px-6 py-5">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tahoul logo"
            width={360}
            height={120}
            priority
            className="h-12 w-auto md:h-14"
          />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 text-lg font-medium text-(--color-ink)/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="transition hover:text-(--color-accent)"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="sheen hidden items-center rounded-full bg-(--color-accent) px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110 lg:inline-flex"
            href={navCta.href}
          >
            {navCta.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
