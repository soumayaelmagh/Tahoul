"use client";

import Image from "next/image";

import { whoWeAre } from "../content";

export default function WhoWeAre() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 pt-28 md:py-24 md:pt-32">
      <div className="glass-panel card-hover slide-in rounded-2xl p-8 md:p-12">
        <p
          className="section-eyebrow fade-up uppercase tracking-[0.45em]"
          style={{ animationDelay: "0s" }}
        >
          {whoWeAre.title}
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <h2
              className="fade-up font-display text-[2.6rem] leading-[1.12] text-[var(--color-deep)] md:text-[3.2rem]"
              style={{ animationDelay: "0.1s" }}
            >
              {whoWeAre.headline}
            </h2>
            <p
              className="fade-up section-description max-w-lg"
              style={{ animationDelay: "0.22s" }}
            >
              {whoWeAre.body}
            </p>
          </div>
          <div
            className="fade-up flex justify-start lg:justify-end"
            style={{ animationDelay: "0.16s" }}
          >
            <Image
              src="/who_we_are.png"
              alt="Who we are"
              width={420}
              height={140}
              className="h-auto w-full max-w-xs object-contain sm:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
