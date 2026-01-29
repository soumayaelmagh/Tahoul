import { faqs } from "../content";

export default function Faqs() {
  return (
    <section id="faqs" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
            {faqs.eyebrow}
          </p>
          <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
            {faqs.title}
          </h2>
          <div className="pulse-line h-1 w-40 rounded-full bg-[rgba(48,83,118,0.12)]" />
        </div>
        <div className="space-y-4">
          {faqs.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--color-deep)]">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-[color:var(--color-ink)]/75">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
