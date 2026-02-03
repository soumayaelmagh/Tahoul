import { faqs } from "../content";

const highlightEmail = (text: string) => {
  const email = "Info@tahoul.com";
  if (!text.includes(email)) {
    return text;
  }
  return text.split(email).map((part, index, parts) => (
    <span key={`${email}-${index}`}>
      {part}
      {index < parts.length - 1 ? (
        <span className="font-semibold text-[var(--color-deep)]">{email}</span>
      ) : null}
    </span>
  ));
};

export default function Faqs() {
  return (
    <section className="flex min-h-screen items-center overflow-visible bg-white py-12 pt-20 sm:pt-24 md:py-24 md:pt-32 lg:h-screen lg:overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid min-h-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
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
            <div className="pulse-line h-1 w-56 rounded-full bg-[rgba(47,84,118,0.12)]" />
          </div>
          <div className="min-h-0 space-y-4 overflow-visible pr-2 lg:h-[60vh] lg:overflow-y-auto">
            {faqs.items.map((item) => (
              <div
                key={item.question}
                className="group card-hover rounded-2xl border border-white/10 bg-[#0f1c27] p-5 text-white shadow-[0_18px_40px_rgba(15,28,39,0.35)]"
              >
                <details>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                    <span>{item.question}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-base text-white/80">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-base font-semibold text-white/85">
                    {highlightEmail(item.answer)}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
