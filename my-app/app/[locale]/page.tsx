import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import FullPageLanding from "../components/FullPageLanding";
import { routing } from "../../i18n/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  const title = t("title");
  const description = t("description");

  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, `/${loc}`])
  ) as Record<string, string>;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      siteName: "Tahoul",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations("Home");
  const servicesT = useTranslations("Services");
  const services = servicesT.raw("items") as Array<{ title: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: t("title"),
    url: `https://tahoul.com/${locale}`,
    description: t("description"),
    areaServed: "Saudi Arabia",
    telephone: "+966 56 222 0814",
    email: "Info@tahoul.com",
    address:
      "6413 King Abdulaziz Rd, 13335, Al Arid, Riyadh 13335, Saudi Arabia",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: servicesT("eyebrow"),
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
        },
      })),
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{t("title")}</h1>
      <FullPageLanding />
    </main>
  );
}
