import { mission } from "../content";

export default function Mission() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="space-y-10">
        <div className="text-left space-y-3">
          <h1 className="section-eyebrow text-[var(--color-eyebrow)] uppercase tracking-[0.4em]">
            {mission.eyebrow}
          </h1>
          <h2 className="section-title font-display text-4xl md:text-5xl">
            {mission.heading}
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel card-hover rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-steel)]/20 text-[var(--color-deep)]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" />
                </svg>
              </span>
              <h3 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
                {mission.visionTitle}
              </h3>
            </div>
            <p className="section-description mt-5 text-[color:var(--color-ink)]/80">
              {mission.visionBody}
            </p>
          </div>
          <div className="glass-panel card-hover rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </span>
              <h3 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
                {mission.title}
              </h3>
            </div>
            <p className="section-description mt-5 text-[color:var(--color-ink)]/80">
              {mission.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}