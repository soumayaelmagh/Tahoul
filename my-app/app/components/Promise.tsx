import { promise } from "../content";

export default function Promise() {
  return (
    <section id="promise" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-[var(--color-deep)] px-8 py-12 text-white md:px-12">
        <div className="pointer-events-none absolute right-10 top-6 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35),transparent_70%)] blur-xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(70,130,180,0.6),transparent_70%)] blur-2xl" />
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            {promise.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl">{promise.title}</h2>
          <div className="flex flex-wrap gap-4">
            <a
              className="sheen rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-deep)] transition hover:bg-white/90"
              href={promise.cta.href}
            >
              {promise.cta.label}
            </a>
            <div className="rounded-full border border-white/30 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white/80">
              {promise.eyebrow}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
