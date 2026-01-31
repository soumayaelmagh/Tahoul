import { hero } from "../content";

export default function Hero() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl px-4 sm:px-8 md:px-12">
        <div className="space-y-9">
          <p
            className="section-eyebrow fade-up uppercase tracking-[0.4em]"
            style={{ animationDelay: "0s", color: "#ffffff" }}
          >
            {hero.eyebrow}
          </p>
          <h1
            className="fade-up font-display text-[2.6rem] leading-[1.1] text-white md:text-[4.1rem]"
            style={{ animationDelay: "0.1s" }}
          >
            {hero.title}
          </h1>
          <div
            className="fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              className="sheen rounded-full border border-[rgba(103,181,255,0.5)] bg-[rgba(103,181,255,0.3)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(103,181,255,0.45)]"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
            </a>
            <a
              className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div
            className="fade-up flex flex-wrap gap-3"
            style={{ animationDelay: "0.32s" }}
          >
            {hero.tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85"
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
