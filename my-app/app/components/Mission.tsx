import { mission } from "../content";

export default function Mission() {
  return (
    <section
      id="mission"
      className="section-offset mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6 fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
            {mission.eyebrow}
          </p>
          <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
            {mission.title}
          </h2>
          <p className="text-lg text-[color:var(--color-ink)]/80">
            {mission.body}
          </p>
        </div>
        <div className="grid gap-6 fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="glass-panel rounded-3xl p-6">
            <h3 className="font-display text-2xl text-[var(--color-deep)]">
              {mission.visionTitle}
            </h3>
            <p className="mt-4 text-sm text-[color:var(--color-ink)]/80">
              {mission.visionBody}
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--color-ink)]/10 bg-white/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60">
              {mission.focusTitle}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-ink)]/80">
              {mission.focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-steel)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
