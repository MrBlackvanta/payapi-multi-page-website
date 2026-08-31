import type { PricingPlan } from "./types";

export const planFeatures = [
  "Transactions",
  "Auth",
  "Identity",
  "Investments",
  "Assets",
  "Liabilities",
  "Income",
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free Plan",
    blurb:
      "Build and test using our core set of products with up to 100 API requests",
    price: "$0.00",
    includedCount: 3,
  },
  {
    name: "Basic Plan",
    blurb:
      "Launch your project with unlimited requests and no contractual minimums",
    price: "$249.00",
    includedCount: 5,
  },
  {
    name: "Premium Plan",
    blurb:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: "$499.00",
    includedCount: 7,
  },
];
