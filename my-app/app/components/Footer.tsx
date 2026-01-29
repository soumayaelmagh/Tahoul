import { footer } from "../content";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/70 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8 text-sm text-[color:var(--color-ink)]/70">
        <p className="font-display text-lg text-[var(--color-deep)]">
          {footer.brand}
        </p>
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
