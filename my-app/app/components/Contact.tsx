import { contact } from "../content";

export default function Contact() {
  const mapSrc =
    "https://www.google.com/maps?q=6413%20King%20Abdulaziz%20Rd%2C%20Al%20Arid%2C%20Riyadh%2013335%2C%20Saudi%20Arabia&output=embed";

  return (
    <section className="bg-[#0f1c27] py-12 pt-20 text-white sm:pt-24 md:py-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-7">
          <p
            className="section-eyebrow fade-up uppercase tracking-[0.45em] !text-white"
            style={{ animationDelay: "0s" }}
          >
            {contact.eyebrow}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {contact.details.map((detail) => (
              (() => {
                const label = detail.label.toLowerCase();
                let icon = (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11h18" />
                    <path d="M5 11v6h14v-6" />
                    <path d="M7 7h10l2 4H5l2-4z" />
                  </svg>
                );
                if (label.includes("mail")) {
                  icon = (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  );
                } else if (label.includes("address")) {
                  icon = (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  );
                } else if (label.includes("tel")) {
                  icon = (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 5h4l2 5-2.5 1.5a12 12 0 0 0 5 5L14 14l5 2v4c-7 0-13-6-15-15z" />
                    </svg>
                  );
                }

                return (
                  <div
                    key={detail.label}
                    className="card-hover rounded-2xl border border-white/15 bg-white/10 p-4 text-white shadow-[0_18px_40px_rgba(15,28,39,0.45)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-white">
                        {icon}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                          {detail.label}
                        </p>
                        <p className="mt-1 text-base font-semibold text-white">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()
            ))}
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-3 shadow-[0_18px_40px_rgba(15,28,39,0.45)]">
            <div className="overflow-hidden rounded-xl border border-white/20">
              <iframe
                title="Tahoul location map"
                src={mapSrc}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <form className="rounded-2xl border border-white/15 bg-white/10 p-8 text-white shadow-[0_18px_40px_rgba(15,28,39,0.45)]">
          <div className="grid gap-5">
            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-white/70"
                htmlFor="name"
              >
                {contact.form.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base font-semibold text-white outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-white/70"
                htmlFor="email"
              >
                {contact.form.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base font-semibold text-white outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-white/70"
                htmlFor="files"
              >
                {contact.form.filesLabel}
              </label>
              <input
                id="files"
                name="files"
                type="file"
                multiple
                className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base font-semibold text-white outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.2em] file:text-[var(--color-ink)] hover:file:bg-white/80"
              />
            </div>
            <button
              type="submit"
              className="rounded-full border border-white/40 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-white/80"
            >
              {contact.form.submitLabel}
            </button>
            <p className="text-sm font-semibold text-white/70">
              {contact.form.recaptcha}
            </p>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}
