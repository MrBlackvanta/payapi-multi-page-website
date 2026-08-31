import {
  BankingCoverageIcon,
  ConsumerPaymentsIcon,
  GoogleLogo,
  HewlettPackardLogo,
  MicrosoftLogo,
  NvidiaLogo,
  OracleLogo,
  PersonalFinancesIcon,
  TeslaLogo,
} from "@/components/icons";

import type { ClientLogo, Feature } from "./types";

export const clientLogos: ClientLogo[] = [
  { label: "Tesla", icon: TeslaLogo, width: "w-27.25 md:w-32.75" },
  { label: "Microsoft", icon: MicrosoftLogo, width: "w-30.5 md:w-37" },
  {
    label: "Hewlett Packard",
    icon: HewlettPackardLogo,
    width: "w-29.25 md:w-35.5",
  },
  { label: "Oracle", icon: OracleLogo, width: "w-27.5 md:w-33.25" },
  { label: "Google", icon: GoogleLogo, width: "w-20 md:w-24.25" },
  { label: "Nvidia", icon: NvidiaLogo, width: "w-28.75 md:w-34.75" },
];

export const homeFeatures: Feature[] = [
  {
    title: "Personal Finances",
    body: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
    icon: PersonalFinancesIcon,
  },
  {
    title: "Banking & Coverage",
    body: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
    icon: BankingCoverageIcon,
  },
  {
    title: "Consumer Payments",
    body: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    icon: ConsumerPaymentsIcon,
  },
];
