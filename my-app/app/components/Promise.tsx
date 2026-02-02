import Image from "next/image";

import { promise } from "../content";

export default function Promise() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-2xl bg-[#0f1c27] px-8 py-12 text-white md:px-12 slide-in">
        <div className="pointer-events-none absolute right-10 top-6 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35),transparent_70%)] blur-xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(103,181,255,0.6),transparent_70%)] blur-2xl" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p
              className="section-eyebrow fade-up uppercase tracking-[0.45em]"
              style={{ animationDelay: "0s", color: "rgba(255,255,255,0.8)" }}
            >
              {promise.eyebrow}
            </p>
            <h2
              className="section-title fade-up font-display text-3xl md:text-4xl"
              style={{ animationDelay: "0.1s" }}
            >
              {promise.title}
            </h2>
            <p
              className="section-description fade-up !text-white"
              style={{ animationDelay: "0.2s" }}
            >
              {promise.body}
            </p>
            <ul className="grid gap-3 text-sm text-white/80 md:grid-cols-2">
              {promise.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/70" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                className="sheen rounded-full border border-[rgba(103,181,255,0.5)] bg-[rgba(103,181,255,0.28)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(103,181,255,0.45)]"
                href={promise.cta.href}
              >
                {promise.cta.label}
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-[34px] md:h-80 md:w-80 lg:h-[28rem] lg:w-[28rem]">
              <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-white/20" />
              <Image
                src="/promise.png"
                alt="Promise"
                fill
                className="relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
