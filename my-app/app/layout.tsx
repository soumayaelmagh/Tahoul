import type { Metadata } from "next";
import localFont from "next/font/local";
import { getLocale } from "next-intl/server";

import "./globals.css";

const azerBody = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/29LTAzer-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/29LTAzer-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/29LTAzer-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/29LTAzer-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/29LTAzer-Medium.ttf", weight: "500", style: "normal" },
  ],
});

const azerDisplay = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/29LTAzer-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/29LTAzer-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/29LTAzer-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/29LTAzer-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/29LTAzer-Medium.ttf", weight: "500", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tahoul.com"),
  title: {
    default: "Tahoul Management Consultancy",
    template: "%s | Tahoul",
  },
  description: "Transform your business with tailored consulting solutions.",
  openGraph: {
    type: "website",
    siteName: "Tahoul",
    url: "https://tahoul.com",
    images: [
      {
        url: "/og-tahoul.png",
        width: 1200,
        height: 630,
        alt: "Tahoul Management Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-tahoul.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body className={`${azerBody.variable} ${azerDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
