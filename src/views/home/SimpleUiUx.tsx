import { PaymentScreens } from "@/components/illustrations";
import { Container } from "@/components/layout";
import { Disc } from "@/components/ui";

export default function SimpleUiUx() {
  return (
    <section className="relative">
      <Disc className="hidden v-drift lg:top-2.5 lg:-right-97.5 lg:left-auto lg:block" />

      <Container className="relative z-10 flex v-rise flex-col items-center pt-20 md:pt-25 lg:flex-row lg:items-center lg:justify-between lg:pt-37.5">
        <PaymentScreens
          aria-hidden="true"
          className="order-1 h-auto w-full max-w-82 shrink-0 overflow-visible md:w-90.5 md:max-w-none lg:order-2 lg:w-141.5"
        />

        <div className="order-2 mt-12 text-center md:max-w-143.25 lg:order-1 lg:mt-0 lg:w-111.25 lg:max-w-none lg:text-left">
          <h2 className="font-serif text-h3 leading-9 text-ink md:text-h2 md:leading-14">
            Simple UI &amp; UX
          </h2>
          <p className="mt-6 text-body-sm text-ink-muted">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </Container>
    </section>
  );
}
