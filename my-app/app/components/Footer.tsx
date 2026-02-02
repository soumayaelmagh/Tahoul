import Image from "next/image";

import { contact, footer, navLinks } from "../content";

export default function Footer() {
  const phone =
    contact.details.find((detail) => detail.label.toLowerCase().includes("tel"))
      ?.value ?? "";
  const email =
    contact.details.find((detail) =>
      detail.label.toLowerCase().includes("mail")
    )?.value ?? "";

  return (
    <footer className="flex min-h-screen w-full items-center bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 text-(--color-ink)/70">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.9fr]">
          <div className="space-y-6">
            <Image
              src="/logo-tr.png"
              alt="Tahoul logo"
              width={380}
              height={130}
              className="h-24 w-auto"
            />
            <p className="max-w-sm text-base font-semibold text-(--color-ink)/65">
              At Tahoul, we create enduring value by partnering with leaders to
              shape resilient organizations and deliver measurable impact.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--color-ink)/70">
              Useful Links
            </p>
            <ul className="space-y-3 text-sm font-semibold text-(--color-ink)/65">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-(--color-deep)">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faqs" className="transition hover:text-(--color-deep)">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--color-ink)/70">
              Find us
            </p>
            <div className="space-y-3 text-sm font-semibold text-(--color-ink)/65">
             
              {phone ? (
                <p className="text-base font-semibold text-(--color-ink)">
                  {phone}
                </p>
              ) : null}
              {email ? (
                <p className="text-base font-semibold text-(--color-ink)">
                  {email}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-(--color-ink)/15 pt-6 text-center text-xs font-semibold text-(--color-ink)/60">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
