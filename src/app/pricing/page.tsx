import type { Metadata } from "next";

import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  shareTitle: "PayAPI pricing",
  description:
    "Start free with 100 API requests, then scale to unlimited requests with no contractual minimums, volume pricing and dedicated support.",
  path: "/pricing",
});

export default function PricingPage() {
  return <h1>Pricing</h1>;
}
