"use client";

import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/navigation";

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const nextLocale = locale === "en" ? "ar" : "en";
  const label = locale === "en" ? t("switchToAr") : t("switchToEn");
  const combinedClassName = className
    ? `inline-flex items-center justify-center gap-2 ${className}`
    : "inline-flex items-center justify-center gap-2";

  const handleSwitch = () => {
    const search = searchParams?.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const safePathname = pathname || "/";
    const href = `${safePathname}${search ? `?${search}` : ""}${hash}`;
    router.replace(href, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className={combinedClassName}
      aria-label={t("label")}
    >
      {label}
    </button>
  );
}
