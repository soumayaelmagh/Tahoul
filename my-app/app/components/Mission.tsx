"use client";

import { mission } from "../content";

export default function Mission() {
  return (
    <section className="relative flex min-h-screen items-center bg-[#0f1c27] py-16 pt-28 md:py-24 md:pt-32">
      <div className="pointer-events-none absolute -right-12 -top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(103,181,255,0.18),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,84,118,0.28),transparent_70%)] blur-3xl" />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[40%] bg-right bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/section-bg.png')",
          backgroundSize: "contain",
        }}
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="slide-in text-white">
          <p className="section-eyebrow text-white!">{mission.eyebrow}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-white">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em]">
              Vision → Mission
            </span>
            <span className="h-px flex-1 bg-white/15" />
            <p className="max-w-xl text-sm text-white">
              Vision defines the destination; Mission turns it into commitments,
              priorities, and measurable delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7l-3 7 7-3 3-7-7 3z" />
                    <path d="M12 12l-3 7 7-3" />
                  </svg>
                </span>
                <h3 className="font-display text-3xl text-white md:text-4xl">
                  {mission.visionTitle}
                </h3>
              </div>
              <p className="text-xl font-semibold leading-relaxed text-white">
                {mission.visionBody}
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  </svg>
                </span>
                <h3 className="font-display text-3xl text-white md:text-4xl">
                  {mission.title}
                </h3>
              </div>
              <p className="text-xl font-semibold leading-relaxed text-white">
                {mission.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
