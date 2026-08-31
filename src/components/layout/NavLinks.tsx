"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/data";

export type NavVariant = "header" | "footer" | "drawer";

const lists: Record<NavVariant, string> = {
  header: "flex items-center gap-10",
  footer: "flex flex-col items-center gap-7.75 md:flex-row md:gap-10",
  drawer: "flex flex-col gap-8",
};

const items: Record<NavVariant, string> = {
  header:
    "text-ui block leading-4.5 font-bold tracking-normal text-ink-muted transition-colors hover:text-ink",
  footer:
    "text-ui block leading-4.5 font-bold tracking-normal text-ink-inverse-muted transition-colors hover:text-ink-inverse focus-visible:outline-ink-inverse",
  drawer:
    "block text-center text-xl leading-6 font-bold text-ink-inverse-muted transition-colors hover:text-ink-inverse focus-visible:outline-ink-inverse",
};

function currentRoute(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

type NavLinksProps = {
  variant: NavVariant;
  className?: string;
  onNavigate?: () => void;
};

export default function NavLinks({
  variant,
  className = "",
  onNavigate,
}: NavLinksProps) {
  const here = currentRoute(usePathname());

  return (
    <ul className={`${lists[variant]} ${className}`}>
      {navLinks.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={items[variant]}
            aria-current={here === href ? "page" : undefined}
            onClick={onNavigate}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
