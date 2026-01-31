import type { ReactNode } from "react";

import { services } from "../content";

export default function Services() {
  const serviceIcons: Record<string, ReactNode> = {
    Strategy: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="6.5" r="3" />
        <path d="M8.5 20h7l-1.3-4H9.8L8.5 20z" />
        <path d="M7.5 16h9c-.7-3-3-5-4.5-5s-3.8 2-4.5 5z" />
      </svg>
    ),
    "Organizational Excellence": (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
        <circle cx="9" cy="7" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="11" cy="17" r="2" />
      </svg>
    ),
    "Corporate Governance": (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    "Marketing & Communication": (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10h4l7-4v12l-7-4H4z" />
        <path d="M15 8.5c1.2 1 2 2.4 2 3.5s-.8 2.5-2 3.5" />
        <path d="M7 14v4a2 2 0 0 0 2 2h1" />
      </svg>
    ),
    "Research & Studies": (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20V6" />
        <path d="M10 20V10" />
        <path d="M16 20V4" />
        <path d="M20 20H3" />
      </svg>
    ),
  };
  const serviceBackgrounds: Record<string, string> = {
    Strategy: "url('/strategy.png')",
    "Organizational Excellence": "url('/excellence.png')",
    "Corporate Governance": "url('/governance.png')",
    "Marketing & Communication": "url('/marketing.png')",
    "Research & Studies": "url('/research.png')",
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="space-y-5">
          <p
            className="section-eyebrow fade-up uppercase tracking-[0.45em]"
            style={{ animationDelay: "0s" }}
          >
            Our Services
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4 md:min-h-[420px] md:flex-row md:gap-6">
        {services.map((service, index) => (
          <article
            key={service.title}
            tabIndex={0}
            className="fade-up group relative flex-1 overflow-hidden rounded-3xl border border-[#0f1c27]/50 shadow-[0_18px_40px_rgba(15,28,39,0.2)] transition-[flex,transform,box-shadow] duration-500 ease-out hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sky)]/60 md:hover:flex-[2.6]"
            style={{ animationDelay: `${0.05 + index * 0.05}s` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  serviceBackgrounds[service.title] ||
                  "linear-gradient(135deg, rgba(47,84,118,0.85), rgba(15,28,39,0.9))",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c27]/35 via-[#0f1c27]/60 to-[#0f1c27]/85" />
            <div className="relative z-10 flex h-full flex-col p-6 text-white md:p-8">
              <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center transition-all duration-400 ease-out group-hover:flex-none group-hover:justify-start group-hover:pt-2 group-focus-within:flex-none group-focus-within:justify-start group-focus-within:pt-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#67b5ff]/20 text-[#67b5ff]">
                  {serviceIcons[service.title]}
                </span>
                <h3 className="font-display text-[clamp(1.1rem,1.5vw,1.65rem)] font-semibold leading-tight text-[#67b5ff]">
                  {service.title}
                </h3>
              </div>
              <div className="mt-4 overflow-hidden transition-all duration-400 ease-out max-h-0 opacity-0 translate-y-3 group-hover:max-h-72 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:max-h-72 group-focus-within:opacity-100 group-focus-within:translate-y-0 max-md:max-h-none max-md:opacity-100 max-md:translate-y-0">
                <ul className="space-y-2 text-base text-white/85">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-sky)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
