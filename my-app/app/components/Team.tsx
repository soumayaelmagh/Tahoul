import { team } from "../content";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
            {team.eyebrow}
          </p>
          <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
            {team.title}
          </h2>
        </div>
        <p className="max-w-lg text-sm text-[color:var(--color-ink)]/70">
          {team.description}
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {team.members.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-xl text-[var(--color-deep)]">
                {member.name}
              </p>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/60">
                {member.role}
              </span>
            </div>
            <p className="mt-4 text-sm text-[color:var(--color-ink)]/75">
              {member.bio}
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-steel)]">
              View profile
              <span className="h-1.5 w-6 rounded-full bg-[var(--color-steel)]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
