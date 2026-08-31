import { Container } from "@/components/layout";

export default function ContactHero() {
  return (
    <section>
      <Container className="pt-12 md:pt-18.75 lg:pt-20.5">
        <h1 className="text-center font-serif text-h4 leading-9 text-ink md:mx-auto md:max-w-120 md:text-h2 md:leading-14 lg:mx-0 lg:max-w-182.5 lg:text-left lg:text-h1">
          Submit a help request and we’ll get in touch shortly.
        </h1>
      </Container>
    </section>
  );
}
