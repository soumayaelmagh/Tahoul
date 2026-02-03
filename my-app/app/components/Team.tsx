import Image from "next/image";

import { team } from "../content";

export default function Team() {
  return (
    <section className="bg-[#0f1c27] py-12 pt-20 sm:pt-24 md:py-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-5">
          <p
            className="section-eyebrow fade-up uppercase  text-white! tracking-[0.45em]"
            style={{ animationDelay: "0s" }}
          >
            {team.eyebrow}
          </p>
          {team.title ? (
            <h2
              className="section-title fade-up font-display text-3xl text-white md:text-4xl"
              style={{ animationDelay: "0.1s" }}
            >
              {team.title}
            </h2>
          ) : null}
          <p
            className="fade-up max-w-lg text-left text-lg font-semibold text-white/90 lg:whitespace-nowrap"
            style={{ animationDelay: "0.2s" }}
          >
            {team.description}
          </p>
          </div>
        </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {team.members.map((member) => {
          const initials = member.name
            .split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("");

          return (
            <div
              key={member.name}
              className="card-hover rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-[0_18px_40px_rgba(15,28,39,0.45)] transition duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-5 aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/70 bg-[linear-gradient(130deg,rgba(103,181,255,0.55),rgba(47,84,118,0.85))]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-center">
                    <div>
                      <p className="font-display text-3xl text-white/90">
                        {initials}
                      </p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <p className="font-display text-xl text-white">
                  {member.name}
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-white">
                  {member.role}
                </span>
              </div>
              <p className="mt-4 text-base font-semibold text-white/90">
                {member.bio}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
