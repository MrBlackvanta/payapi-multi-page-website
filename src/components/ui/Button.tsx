import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "light" | "dark";

const base =
  "inline-flex h-12 items-center justify-center rounded-full px-6 text-ui leading-4.5 font-bold transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-ink-inverse shadow-card hover:bg-accent-hover",
  light:
    "border border-ink-inverse text-ink-inverse hover:bg-white hover:text-surface-dark focus-visible:outline-ink-inverse",
  dark: "border border-ink text-ink hover:bg-ink hover:text-ink-inverse",
};

type Shared = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type AsLink = Shared &
  Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children"> & {
    href: string;
  };

type AsButton = Shared &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: never;
  };

export default function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...rest
}: AsLink | AsButton) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as ComponentPropsWithoutRef<"a">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
