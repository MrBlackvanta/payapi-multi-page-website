import type { Metadata } from "next";

import { Container } from "@/components/layout";
import { ReadyToStart } from "@/components/sections";
import { Disc } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { ContactAside, ContactForm, ContactHero } from "@/views/contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  shareTitle: "Contact PayAPI",
  description:
    "Submit a help request and we’ll get in touch shortly. Tell us about your project and the team will reply with the right next step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative overflow-x-clip">
      <Disc className="-top-180.5 -right-119.75 v-drift md:-top-138 md:-right-129.25 lg:-top-153.75 lg:-right-35" />

      <div className="relative z-10">
        <ContactHero />

        <section className="pt-12 md:pt-16">
          <Container className="lg:flex lg:justify-between">
            <ContactForm className="md:mx-auto md:w-111.25 lg:mx-0" />
            <ContactAside className="mt-20 md:mx-auto md:mt-16 md:w-135.25 lg:mx-0 lg:mt-30.5" />
          </Container>
        </section>

        <ReadyToStart className="pt-20 md:pt-25 lg:pt-23.25" />
      </div>
    </div>
  );
}
