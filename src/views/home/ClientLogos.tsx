import { Container } from "@/components/layout";
import { ClientLogoStrip } from "@/components/sections";
import { Button, Disc } from "@/components/ui";

export default function ClientLogos() {
  return (
    <section className="relative overflow-clip bg-surface-dark">
      <Disc className="-top-150.5 -left-50.5 v-drift md:-top-137 md:-left-1.5 lg:-top-89.75 lg:-left-58.75" />

      <Container className="relative z-10 flex flex-col items-center py-20 md:py-22 lg:flex-row lg:justify-between lg:py-25">
        <ClientLogoStrip className="w-full text-ink-inverse md:w-134 lg:order-2" />

        <div className="mt-14 text-center md:mt-16 md:max-w-114.25 lg:order-1 lg:mt-0 lg:w-111.25 lg:max-w-none lg:text-left">
          <h2 className="font-serif text-h4 leading-9 text-ink-inverse md:text-h2 md:leading-14">
            Who we work with
          </h2>
          <p className="mt-4 text-body-sm text-ink-inverse-muted md:mt-6">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Button
            href="/about"
            variant="light"
            className="mt-15 w-32.25 md:mt-8"
          >
            About Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
