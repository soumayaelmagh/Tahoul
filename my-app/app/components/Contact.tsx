import { contact } from "../content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
            {contact.eyebrow}
          </p>
          <h2 className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
            {contact.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {contact.details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60">
                  {detail.label}
                </p>
                <p className="mt-2 text-sm text-[var(--color-deep)]">
                  {detail.value}
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
                {contact.form.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-2xl border border-[color:var(--color-ink)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-steel)] focus:ring-2 focus:ring-[var(--color-steel)]/20"
              />
            </div>
            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60"
                htmlFor="email"
              >
                {contact.form.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-2xl border border-[color:var(--color-ink)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-steel)] focus:ring-2 focus:ring-[var(--color-steel)]/20"
              />
            </div>
            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-ink)]/60"
                htmlFor="files"
              >
                {contact.form.filesLabel}
              </label>
              <input
                id="files"
                name="files"
                type="file"
                multiple
                className="mt-2 w-full rounded-2xl border border-[color:var(--color-ink)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-deep)] file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.2em] file:text-white hover:file:bg-[var(--color-ink)]"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[var(--color-deep)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--color-ink)]"
            >
              {contact.form.submitLabel}
            </button>
            <p className="text-xs text-[color:var(--color-ink)]/60">
              {contact.form.recaptcha}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
