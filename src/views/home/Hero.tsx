import Link from "next/link";

import { PhoneMockup } from "@/components/illustrations";
import { Container } from "@/components/layout";
import { EmailCapture } from "@/components/ui";

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col items-center pt-8 pb-19.75 md:pt-12 md:pb-24.75 lg:flex-row-reverse lg:justify-between lg:pt-18.5 lg:pb-18.75">
        <div className="flex shrink-0 justify-center lg:w-111.25">
          <PhoneMockup
            aria-hidden="true"
            className="h-auto w-32 overflow-visible md:w-39.75 lg:w-65.75"
          />
        </div>

        <div className="mt-6 w-full text-center md:mt-12 lg:mt-0 lg:w-136.5 lg:text-left">
          <h1 className="font-serif text-h4 leading-9 text-ink md:mx-auto md:max-w-143.25 md:text-h2 md:leading-14 lg:max-w-none lg:text-display lg:leading-18">
            Start building with our APIs for absolutely free.
          </h1>

          <EmailCapture
            label="Schedule a demo"
            className="mt-6 md:mt-8 lg:mt-12"
          />

          <p className="mt-6 text-ui leading-4.5 tracking-normal text-ink-muted md:mt-4 lg:pl-6.75">
            Have any questions?{" "}
            <Link
              href="/contact"
              className="font-bold text-ink underline transition-colors hover:text-accent"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
