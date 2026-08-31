import Link from "next/link";

import { Logo } from "@/components/icons";
import { Disc } from "@/components/ui";
import { socialLinks } from "@/data";

import Container from "./Container";
import NavLinks from "./NavLinks";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-clip bg-surface-dark">
      <Disc className="top-44.25 -left-50.5 v-drift md:-top-34 md:-right-97.5 md:left-auto" />

      <Container className="relative z-10 flex flex-col items-center gap-10 pt-10 pb-13.75 md:h-25 md:flex-row md:gap-0 md:py-0">
        <Link
          href="/"
          aria-label="PayAPI home"
          className="flex text-ink-inverse focus-visible:outline-ink-inverse"
        >
          <Logo className="h-9.5 w-33.75" aria-hidden="true" />
        </Link>

        <nav aria-label="Footer" className="md:ml-16">
          <NavLinks variant="footer" />
        </nav>

        <ul className="flex gap-6 md:ml-auto">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="flex size-6 items-center justify-center text-ink-inverse transition-colors hover:text-accent focus-visible:outline-ink-inverse"
              >
                <Icon className="w-6" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <p className="absolute inset-x-0 bottom-0.5 z-10 text-center text-note text-white/50">
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-white focus-visible:outline-ink-inverse"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </p>
    </footer>
  );
}
