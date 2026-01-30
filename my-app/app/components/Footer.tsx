import Image from "next/image";

import { footer } from "../content";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/70 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8 text-sm text-[color:var(--color-ink)]/70">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tahoul logo"
            width={140}
            height={48}
            className="h-10 w-auto"
          />
        </div>
        <a
          href={footer.privacyHref}
          className="font-semibold text-[var(--color-deep)] underline"
        >
          {footer.privacyLabel}
        </a>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
