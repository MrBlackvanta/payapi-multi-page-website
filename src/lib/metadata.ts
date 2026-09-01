import type { Metadata } from "next";

const siteName = "PayAPI";

const images = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Two phones showing the PayAPI checkout, an itemised payment total and a completed payment, beside the headline “Payment APIs for developers”.",
  },
];

type PageMetadata = {
  title: string;
  shareTitle: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  shareTitle,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName,
      locale: "en_US",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images,
    },
  };
}
