"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

export default function LocaleHtmlUpdater() {
  const locale = useLocale();

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const direction = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [locale]);

  return null;
}
