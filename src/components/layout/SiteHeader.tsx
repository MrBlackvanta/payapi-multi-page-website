import Link from "next/link";

import { Logo } from "@/components/icons";
import { Button } from "@/components/ui";

import Container from "./Container";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function SiteHeader() {
  return (
    <header className="relative z-40 pt-10">
      <Container className="flex h-9.5 items-center md:h-12">
        <Link href="/" aria-label="PayAPI home" className="flex text-ink">
          <Logo className="h-9.5 w-33.75" aria-hidden="true" />
        </Link>

        <nav aria-label="Main" className="ml-16 hidden md:block">
          <NavLinks variant="header" />
        </nav>

        <div className="ml-auto hidden md:block">
          <Button href="/contact" className="w-43.25">
            Schedule a Demo
          </Button>
        </div>

        <MobileMenu className="ml-auto md:hidden" />
      </Container>
    </header>
  );
}
