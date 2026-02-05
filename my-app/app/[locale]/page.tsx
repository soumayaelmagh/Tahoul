import { useTranslations } from "next-intl";

import FullPageLanding from "../components/FullPageLanding";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <>
      <h1 className="sr-only">{t("title")}</h1>
      <FullPageLanding />
    </>
  );
}
