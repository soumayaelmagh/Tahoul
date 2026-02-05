import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const tFooter = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const tContact = useTranslations("Contact");
  const links = tNav.raw("links") as Array<{ label: string; href: string }>;
  const details = tContact.raw("details") as Array<{
    type: "address" | "email" | "phone";
    label: string;
    value: string;
  }>;
  const phone = details.find((detail) => detail.type === "phone")?.value ?? "";
  const email = details.find((detail) => detail.type === "email")?.value ?? "";

  return (
    <footer className="flex min-h-screen w-full items-center bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 text-[color:var(--color-ink)]/70 sm:py-16">
        <div className="grid gap-10 text-center lg:grid-cols-[1.2fr_0.7fr_0.9fr] lg:text-start">
          <div className="space-y-6">
            <Image
              src="/logo-tr.png"
              alt={tNav("logoAlt")}
              width={380}
              height={130}
              className="h-24 w-auto"
            />
            <p className="max-w-sm text-base font-semibold text-[color:var(--color-ink)]/65 lg:mx-0 mx-auto">
              {tFooter("blurb")}
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink)]/70">
              {tFooter("usefulLinks")}
            </p>
            <ul className="space-y-3 text-sm font-semibold text-[color:var(--color-ink)]/65">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-[var(--color-deep)]">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faqs" className="transition hover:text-[var(--color-deep)]">
                  {tFooter("faqs")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-ink)]/70">
              {tFooter("findUs")}
            </p>
            <div className="space-y-3 text-sm font-semibold text-[color:var(--color-ink)]/65">
             
              {phone ? (
                <p className="text-base font-semibold text-[color:var(--color-ink)]">
                  <span dir="ltr" className="ltr-number">
                    {phone}
                  </span>
                </p>
              ) : null}
              {email ? (
                <p className="text-base font-semibold text-[color:var(--color-ink)]">
                  {email}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[color:var(--color-ink)]/15 pt-6 text-center text-xs font-semibold text-[color:var(--color-ink)]/60">
          {tFooter("copyright")}
        </div>
      </div>
    </footer>
  );
}
