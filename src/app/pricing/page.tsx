import type { Metadata } from "next";

import { ReadyToStart } from "@/components/sections";
import { pageMetadata } from "@/lib/metadata";
import { PlanGrid, PricingHero } from "@/views/pricing";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  shareTitle: "PayAPI Pricing",
  description:
    "Start free with 100 API requests, or move to unlimited requests with no contractual minimums. Compare the Free, Basic and Premium plans.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PlanGrid className="pt-12 md:pt-17.25 lg:pt-18" />
      <ReadyToStart className="pt-20 md:pt-25 lg:pt-24" />
    </>
  );
}
