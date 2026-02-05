import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function Testimonials() {
  const locale = useLocale();
  const t = useTranslations("Testimonials");
  const items = t.raw("items") as Array<{
    quote: string;
    name: string;
    title: string;
    company: string;
  }>;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const totalSlides = items.length;

  useEffect(() => {
    if (activeIndex >= totalSlides) {
      setActiveIndex(0);
    }
  }, [activeIndex, totalSlides]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);

    const handleChange = () => setReduceMotion(motionQuery.matches);
    motionQuery.addEventListener?.("change", handleChange);
    return () => motionQuery.removeEventListener?.("change", handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused || totalSlides <= 1) {
      return;
    }
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [reduceMotion, isPaused, totalSlides]);

  const goTo = (index: number) => {
    const nextIndex = (index + totalSlides) % totalSlides;
    setActiveIndex(nextIndex);
  };

  const logoSources = [
    { src: "/clients/1.png", alt: t("logoAlt", { index: 1 }) },
    { src: "/clients/2.png", alt: t("logoAlt", { index: 2 }) },
    { src: "/clients/3.png", alt: t("logoAlt", { index: 3 }) },
    { src: "/clients/4.png", alt: t("logoAlt", { index: 4 }) },
    { src: "/clients/5.png", alt: t("logoAlt", { index: 5 }) },
    { src: "/clients/6.png", alt: t("logoAlt", { index: 6 }) },
    { src: "/clients/7.png", alt: t("logoAlt", { index: 7 }) },
    { src: "/clients/8.png", alt: t("logoAlt", { index: 8 }) },
    { src: "/clients/9.png", alt: t("logoAlt", { index: 9 }) },
    { src: "/clients/10.png", alt: t("logoAlt", { index: 10 }) },
  ];
  const marqueeLogos = [...logoSources, ...logoSources];

  const translatePercent = (locale === "ar" ? activeIndex : -activeIndex) * 100;

  return (
    <section className="flex min-h-screen items-center bg-[#0f1c27] py-12 pt-20 text-white sm:pt-24 md:py-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-5">
          <p
            className="section-eyebrow fade-up uppercase tracking-[0.45em] !text-white"
            style={{ animationDelay: "0s" }}
          >
            {t("eyebrow")}
          </p>
          <h2
            className="section-title fade-up font-display text-3xl text-white md:text-4xl"
            style={{ animationDelay: "0.1s" }}
          >
            {t("title")}
          </h2>
          <p
            className="section-description fade-up !text-white/85"
            style={{ animationDelay: "0.2s" }}
          >
            {t("subtitle")}
          </p>
        </div>
        <div
          className="testimonial-slider overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="testimonial-track flex w-full flex-nowrap transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${translatePercent}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="testimonial-slide w-full flex-none"
              >
                <div className="card-hover relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-7 shadow-[0_18px_45px_rgba(15,28,39,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,28,39,0.6)]">
                  <div className="absolute -right-16 -top-14 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(103,181,255,0.4),transparent_70%)] blur-2xl" />
                  <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(47,84,118,0.35),transparent_70%)] blur-2xl" />
                  <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_65%)]" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-6xl text-white">
                      “
                    </div>
                    <div className="space-y-4">
                      <p className="text-base font-semibold text-white/85">
                        {item.quote}
                      </p>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                          {item.name}
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {item.title} · {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {totalSlides > 1 ? (
            <div className="mt-6 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-white/70">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-white/50"
                aria-label={t("prev")}
              >
                {t("prev")}
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-white/50"
                aria-label={t("next")}
              >
                {t("next")}
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
          {t("trustedBy")}
        </p>
        <div className="mt-6 flex justify-center">
          <div className="logo-marquee marquee-wide" dir="ltr">
            <div className="logo-track">
              {marqueeLogos.map((logo, index) => (
                <div key={`${logo.src}-${index}`} className="logo-item">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={56}
                    className="logo-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
