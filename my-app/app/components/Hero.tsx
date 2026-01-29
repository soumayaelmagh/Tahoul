import { hero, whoWeAre } from "../content";

export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8 fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--color-deep)] md:text-6xl">
            {hero.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              className="sheen rounded-full bg-[linear-gradient(120deg,#4682b4,#305376)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
            </a>
            <a
              className="rounded-full border border-[color:var(--color-ink)]/20 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)] transition hover:border-transparent hover:bg-[var(--color-steel)] hover:text-white"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {hero.tags.map((item) => (
              <span
                key={item}
                className="accent-chip rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="glass-panel rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60">
              {whoWeAre.title}
            </p>
            <h2 className="font-display mt-4 text-3xl text-[var(--color-deep)]">
              {whoWeAre.headline}
            </h2>
            <p className="mt-4 text-sm text-[color:var(--color-ink)]/80">
              {whoWeAre.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {whoWeAre.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--color-ink)]/10 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
