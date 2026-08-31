import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Public_Sans } from "next/font/google";
import localFont from "next/font/local";

import { SiteFooter, SiteHeader } from "@/components/layout";
import { siteUrl } from "@/data";
import { pageMetadata } from "@/lib/metadata";

import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const robotoMono = localFont({
  src: "../assets/fonts/roboto-mono-subset.woff2",
  variable: "--font-roboto-mono",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});

const homeTitle = "PayAPI | Payment APIs for developers";
const description =
  "PayAPI connects apps to the financial system. Build payments, account onboarding and transaction insights on one developer-friendly API, free to start.";

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    shareTitle: homeTitle,
    description,
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: "%s | PayAPI" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#edf3f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${dmSerifDisplay.variable} ${robotoMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col font-sans">
        <a
          href="#main"
          className="sr-only rounded-full bg-accent px-6 py-3 text-ui font-bold text-ink-inverse focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
