import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-36 md:pb-28">
      <div className="max-w-2xl px-0 sm:px-6 md:px-12">
        <div className="space-y-9">
          <p
            className="section-eyebrow fade-up uppercase tracking-[0.4em]"
            style={{ animationDelay: "0.1s", color: "#ffffff" }}
          >
            {t("eyebrow")}
          </p>
          <h1
            className="fade-up font-display text-[2rem] leading-[1.1] text-white sm:text-[2.6rem] md:text-[4.1rem]"
            style={{ animationDelay: "0.2s" }}
          >
            {t("title")}
          </h1>
          <div
            className="fade-up flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              className="cta-animated w-full rounded-full border border-[rgba(103,181,255,0.5)] bg-[rgba(103,181,255,0.3)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(103,181,255,0.45)] sm:w-auto"
              href="#contact"
            >
              <span>{t("primaryCtaLabel")}</span>
              <span className="cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              className="w-full rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 sm:w-auto"
              href="#services"
            >
              {t("secondaryCtaLabel")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
