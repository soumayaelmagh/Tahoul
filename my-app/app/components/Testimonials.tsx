import { testimonials } from "../content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-offset mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
            {testimonials.eyebrow}
          </p>
          <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
            {testimonials.title}
          </h2>
          <p className="text-sm text-[var(--color-ink)]/70">
            {testimonials.subtitle}
          </p>
        </div>
        <div className="grid gap-6">
          {testimonials.items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(70,130,180,0.35),transparent_70%)] blur-xl" />
              <div className="absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(48,83,118,0.35),transparent_70%)] blur-xl" />
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-deep)] text-5xl text-white">
                  “
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-[var(--color-ink)]/80">
                    {item.quote}
                  </p>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink)]/50">
                      {item.name}
                    </p>
                    <p className="text-sm text-[var(--color-deep)]">
                      {item.title} · {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
