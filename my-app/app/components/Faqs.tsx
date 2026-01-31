import { faqs } from "../content";

export default function Faqs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-5">
          <p
            className="section-eyebrow fade-up uppercase tracking-[0.45em]"
            style={{ animationDelay: "0s" }}
          >
            {faqs.eyebrow}
          </p>
          <h2
            className="section-title fade-up font-display text-3xl md:text-4xl"
            style={{ animationDelay: "0.1s" }}
          >
            {faqs.title}
          </h2>
          <div className="pulse-line h-1 w-40 rounded-full bg-[rgba(47,84,118,0.12)]" />
        </div>
        <div className="space-y-4">
          {faqs.items.map((item) => (
            <details
              key={item.question}
              className="group card-hover rounded-2xl border border-white/10 bg-[#0f1c27] p-5 text-white shadow-[0_18px_40px_rgba(15,28,39,0.35)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                <span>{item.question}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-base text-white/80">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">-</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-white/75">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
