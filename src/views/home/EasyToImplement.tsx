import { CodeCard } from "@/components/illustrations";
import { Container } from "@/components/layout";

export default function EasyToImplement() {
  return (
    <section>
      <Container className="flex v-rise flex-col items-center pt-20 md:pt-25 lg:flex-row lg:items-center lg:gap-31.25 lg:pt-37.5">
        <CodeCard className="w-full max-w-82 shrink-0 md:w-97.75 md:max-w-none lg:w-111.25" />

        <div className="mt-12 text-center md:max-w-143.25 lg:mt-0 lg:w-111.25 lg:max-w-none lg:text-left">
          <h2 className="font-serif text-h3 leading-9 text-ink md:text-h2 md:leading-14">
            Easy to implement
          </h2>
          <p className="mt-6 text-body-sm text-ink-muted">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </Container>
    </section>
  );
}
