import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Public_Sans } from "next/font/google";

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
      className={`${publicSans.variable} ${dmSerifDisplay.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col font-sans">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
