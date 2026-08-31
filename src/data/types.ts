import type { ComponentType, SVGProps } from "react";

export type NavLink = {
  href: string;
  label: string;
};

export type ClientLogo = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  width: string;
};

export type Feature = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type ContactField = {
  name: "name" | "email" | "company" | "title";
  label: string;
  type: "text" | "email";
  autoComplete: string;
};

export type PricingPlan = {
  name: string;
  blurb: string;
  price: string;
  includedCount: number;
};

export type StoryRow = {
  title: string;
  body: string;
};

export type Stat = {
  label: string;
  count: number;
  suffix: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
