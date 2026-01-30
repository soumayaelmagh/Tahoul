import { hero } from "../content";

export default function Hero() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl px-4 sm:px-8 md:px-12">
        <div className="space-y-8 fade-up">
          <h1 className="section-eyebrow uppercase tracking-[0.4em] text-white">
            {hero.eyebrow}
          </h1>
          <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
            {hero.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              className="sheen rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)] transition hover:brightness-110"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
            </a>
            <a
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-transparent hover:bg-white/90 hover:text-[var(--color-ink)]"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {hero.tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
