export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[color:var(--color-ink)]">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-60">
        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,130,180,0.35),transparent_70%)] blur-2xl" />
        <div className="float-slow absolute -right-20 top-48 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(48,83,118,0.28),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,130,180,0.2),transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[520px] grid-dots opacity-50" />
      </div>

      <header id="home" className="relative z-10">
        <nav className="sticky top-0 z-30 border-b border-white/70 bg-white/75 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-deep)] text-lg font-semibold text-white">
                T
              </span>
              <div>
                <p className="font-display text-lg text-[var(--color-deep)]">
                  Tahoul Consulting
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60">
                  Strategy - Growth - Transformation
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium text-[color:var(--color-ink)]/80">
              <a className="transition hover:text-[var(--color-deep)]" href="#home">
                Home
              </a>
              <a
                className="transition hover:text-[var(--color-deep)]"
                href="#mission"
              >
                Our mission
              </a>
              <a
                className="transition hover:text-[var(--color-deep)]"
                href="#services"
              >
                Services
              </a>
              <a className="transition hover:text-[var(--color-deep)]" href="#team">
                Team
              </a>
              <a
                className="transition hover:text-[var(--color-deep)]"
                href="#promise"
              >
                Our promise
              </a>
              <a
                className="transition hover:text-[var(--color-deep)]"
                href="#contact"
              >
                Contact us
              </a>
              <a
                className="hidden items-center rounded-full bg-[var(--color-deep)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--color-ink)] lg:inline-flex"
                href="#contact"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </nav>

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-8 fade-up">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
                Executive advisory for complex markets
              </p>
              <h1 className="font-display text-4xl leading-tight text-[var(--color-deep)] md:text-6xl">
                Clarity, momentum, and measurable impact for modern leadership
                teams.
              </h1>
              <p className="max-w-xl text-lg text-[color:var(--color-ink)]/80 md:text-xl">
                We partner with boards and executive teams to sharpen strategy,
                navigate risk, and unlock confident growth. Every engagement
                delivers a practical roadmap with owners, timelines, and
                board-ready insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-[var(--color-deep)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--color-ink)]"
                  href="#contact"
                >
                  Start a project
                </a>
                <a
                  className="rounded-full border border-[color:var(--color-ink)]/20 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)] transition hover:border-transparent hover:bg-[var(--color-steel)] hover:text-white"
                  href="#services"
                >
                  View capabilities
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["200+", "Engagements delivered globally"],
                  ["12 weeks", "Average strategy to execution cycle"],
                  ["95%", "Client renewal and referral rate"],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm"
                  >
                    <p className="font-display text-2xl text-[var(--color-deep)]">
                      {title}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink)]/60">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="glass-panel rounded-3xl p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60">
                  Focused engagement model
                </p>
                <h2 className="font-display mt-4 text-3xl text-[var(--color-deep)]">
                  From alignment to action in six decisive workstreams.
                </h2>
                <div className="mt-6 grid gap-4">
                  {[
                    "Board-level diagnosis and market mapping",
                    "Strategic options with quantified trade-offs",
                    "Transformation roadmap with measurable milestones",
                    "Capability uplift for leadership and teams",
                    "Risk and governance alignment",
                    "Execution cadence with monthly outcomes review",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="fade-up flex items-start gap-3 rounded-2xl border border-[color:var(--color-ink)]/10 bg-white/80 p-4"
                      style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-steel)]" />
                      <p className="text-sm text-[color:var(--color-ink)]/80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-[color:var(--color-ink)]/10 bg-[var(--color-sand)] px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60">
                      Next step
                    </p>
                    <p className="font-display text-lg text-[var(--color-deep)]">
                      Executive strategy session
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-deep)]">
                    90 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="mission" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 fade-up">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
                Our mission
              </p>
              <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
                Make complex decisions feel actionable and aligned.
              </h2>
              <p className="text-lg text-[color:var(--color-ink)]/80">
                We combine rigorous analysis with board-level facilitation so
                leaders can move from uncertainty to conviction. Every
                recommendation is built to be implemented, tracked, and owned.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Evidence first", "Deep market and customer validation."],
                  ["Outcomes driven", "Clear KPIs, owners, and cadence."],
                  ["People centered", "Engage leadership and frontline teams."],
                  ["Ethics forward", "Responsible growth and governance."],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm"
                  >
                    <p className="font-display text-lg text-[var(--color-deep)]">
                      {title}
                    </p>
                    <p className="text-sm text-[color:var(--color-ink)]/75">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="glass-panel rounded-3xl p-6">
                <h3 className="font-display text-2xl text-[var(--color-deep)]">
                  Our mission in action
                </h3>
                <div className="mt-4 space-y-4 text-sm text-[color:var(--color-ink)]/80">
                  <p>
                    We help leadership teams sharpen their strategic narrative,
                    build momentum across stakeholders, and invest in the
                    capabilities that matter most.
                  </p>
                  <p>
                    The result is a practical transformation plan with clear
                    governance, funding guardrails, and a measurable path to
                    impact.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-[color:var(--color-ink)]/10 bg-white/80 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60">
                  What to expect
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-ink)]/80">
                  {[
                    "Executive interviews and diagnostic workshops",
                    "Scenario planning and quantified options",
                    "Board-ready insights and decision decks",
                    "Embedded change leadership support",
                  ].map((item) => (
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

        <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
                Services
              </p>
              <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
                Practical consulting that moves leadership to action.
              </h2>
            </div>
            <p className="max-w-lg text-sm text-[color:var(--color-ink)]/70">
              Engagements are modular and scalable. We move fast in discovery,
              align in strategy, and stay close through execution.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              [
                "Strategy and transformation",
                "Board-ready strategy, funding models, and transformation plans.",
              ],
              [
                "Market and competitive intelligence",
                "Customer insight, market sizing, and competitive positioning.",
              ],
              [
                "Operational excellence",
                "Process redesign, operating model refresh, and KPI cadence.",
              ],
              [
                "Risk and governance",
                "Enterprise risk assessment, controls, and compliance alignment.",
              ],
              [
                "Digital and data enablement",
                "Capability assessment, roadmap, and value tracking for data.",
              ],
              [
                "M&A value creation",
                "Synergy tracking, integration planning, and value realization.",
              ],
            ].map(([title, copy], index) => (
              <div
                key={title}
                className="fade-up rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${0.05 + index * 0.05}s` }}
              >
                <h3 className="font-display text-xl text-[var(--color-deep)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-ink)]/75">
                  {copy}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-steel)]">
                  Learn more
                  <span className="h-1.5 w-6 rounded-full bg-[var(--color-steel)]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="promise" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="rounded-[32px] bg-[var(--color-deep)] px-8 py-12 text-white md:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                  Our promise
                </p>
                <h2 className="font-display text-3xl md:text-4xl">
                  We deliver clarity you can act on, with accountability built
                  in.
                </h2>
                <p className="text-sm text-white/80">
                  Every engagement includes a clear charter, milestones, and a
                  decision-ready narrative for leadership and boards. We
                  prioritize practical outcomes, transparent governance, and
                  measurable impact.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm">
                    Weekly executive updates
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm">
                    Clear ownership per workstream
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm">
                    Milestone-based outcomes
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Engagement snapshot
                </p>
                <div className="mt-4 grid gap-4 text-sm text-white/85">
                  {[
                    ["Week 1-2", "Discovery and alignment workshops"],
                    ["Week 3-6", "Strategic options and financial modeling"],
                    ["Week 7-10", "Transformation roadmap and governance"],
                    ["Week 11-12", "Board-ready narrative and handover"],
                  ].map(([phase, copy]) => (
                    <div
                      key={phase}
                      className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"
                    >
                      <span className="font-semibold">{phase}</span>
                      <span className="text-white/70">{copy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
                Team
              </p>
              <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
                Senior advisors with hands-on operating experience.
              </h2>
            </div>
            <p className="max-w-lg text-sm text-[color:var(--color-ink)]/70">
              Our team blends consulting rigor with leadership experience across
              financial services, healthcare, and technology.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "Amira Ren",
                "Managing Partner",
                "Former COO and transformation leader across global service firms.",
              ],
              [
                "Jules Becker",
                "Strategy Partner",
                "Market strategy and competitive intelligence specialist.",
              ],
              [
                "Priya Shah",
                "Operations Partner",
                "Operational excellence and governance advisor for scale-ups.",
              ],
            ].map(([name, role, bio]) => (
              <div
                key={name}
                className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl text-[var(--color-deep)]">
                    {name}
                  </p>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/60">
                    {role}
                  </span>
                </div>
                <p className="mt-4 text-sm text-[color:var(--color-ink)]/75">
                  {bio}
                </p>
                <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-steel)]">
                  View profile
                  <span className="h-1.5 w-6 rounded-full bg-[var(--color-steel)]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
                Contact us
              </p>
              <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
                Tell us where you need momentum and we will map the path.
              </h2>
              <p className="text-lg text-[color:var(--color-ink)]/80">
                Share your goals and we will respond within two business days
                with an engagement outline and next steps.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Headquarters", "New York and London"],
                  ["Email", "hello@tahoul.com"],
                  ["Direct", "+1 (212) 555-0199"],
                  ["Availability", "Mon-Fri, 9am-6pm"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60">
                      {label}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-deep)]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <form className="glass-panel rounded-3xl p-8">
              <div className="grid gap-5">
                <div>
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60"
                    htmlFor="name"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-[color:var(--color-ink)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-steel)] focus:ring-2 focus:ring-[var(--color-steel)]/20"
                  />
                </div>
                <div>
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60"
                    htmlFor="email"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="mt-2 w-full rounded-2xl border border-[color:var(--color-ink)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-steel)] focus:ring-2 focus:ring-[var(--color-steel)]/20"
                  />
                </div>
                <div>
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-2xl border border-[color:var(--color-ink)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-steel)] focus:ring-2 focus:ring-[var(--color-steel)]/20"
                  />
                </div>
                <div>
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60"
                    htmlFor="message"
                  >
                    Engagement needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your priorities and timeline."
                    className="mt-2 w-full rounded-2xl border border-[color:var(--color-ink)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-steel)] focus:ring-2 focus:ring-[var(--color-steel)]/20"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-[var(--color-deep)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--color-ink)]"
                >
                  Send inquiry
                </button>
                <p className="text-xs text-[color:var(--color-ink)]/60">
                  By submitting, you agree to our privacy policy and terms.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/70 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8 text-sm text-[color:var(--color-ink)]/70">
          <p className="font-display text-lg text-[var(--color-deep)]">
            Tahoul Consulting
          </p>
          <p>Trusted advisory for strategy, growth, and transformation.</p>
          <p>2026 Tahoul Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
