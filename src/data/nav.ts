import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";

import type { NavLink, SocialLink } from "./types";

export const navLinks: NavLink[] = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
];
