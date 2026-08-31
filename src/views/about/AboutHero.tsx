import { Container } from "@/components/layout";

export default function AboutHero() {
  return (
    <section>
      <Container className="pt-12 md:pt-18.75 lg:pt-20.5">
        <div className="mx-auto max-w-230">
          <h1 className="text-center font-serif text-h4 leading-9 text-ink md:mx-auto md:max-w-143.25 md:text-h2 md:leading-14 lg:mx-0 lg:max-w-182.5 lg:text-left lg:text-h1">
            We empower innovators
            <br />
            by delivering access to the financial system
          </h1>
        </div>
      </Container>
    </section>
  );
}
