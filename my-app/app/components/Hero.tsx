import Image from "next/image";

import { hero } from "../content";

export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8 fade-up">
          <p className="section-eyebrow text-xs uppercase tracking-[0.4em]">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-(--color-deep) md:text-6xl">
            {hero.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              className="sheen rounded-full bg-(--color-accent) px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
            </a>
            <a
              className="rounded-full border border-(--color-ink)/20 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-ink) transition hover:border-transparent hover:bg-(--color-steel) hover:text-white"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {hero.tags.map((item) => (
              <span
                key={item}
                className="accent-chip rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-deep)"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative aspect-4/5 w-full">
            <div className="pointer-events-none absolute -inset-10 rounded-[48px] bg-[radial-gradient(circle,rgba(77,175,162,0.28),transparent_65%)] blur-3xl" />
            <Image
              src="/hero.jpg"
              alt="Consulting team in session"
              fill
              className="object-cover opacity-85 mask-[radial-gradient(ellipse_at_center,black_45%,transparent_100%)]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
