import { whoWeAre } from "../content";

export default function WhoWeAre() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="glass-panel card-hover rounded-3xl p-8 md:p-12">
        <h1 className="section-eyebrow text-[var(--color-eyebrow)] uppercase tracking-[0.3em]">
          {whoWeAre.title}
        </h1>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="font-display text-4xl text-[var(--color-deep)] md:text-5xl">
            {whoWeAre.headline}
          </h2>
          <p className="section-description text-[var(--color-ink)]/80">
            {whoWeAre.body}
          </p>
        </div>
      </div>
    </section>
  );
}