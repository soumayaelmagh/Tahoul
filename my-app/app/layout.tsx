import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Tahoul Management Consultancy",
  description: "Transform your business with tailored consulting solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${azerBody.variable} ${azerDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
