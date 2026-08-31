import { Container } from "@/components/layout";
import { EmailCapture } from "@/components/ui";

export default function ReadyToStart({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <Container className="flex flex-col items-center pb-20 md:pb-25 lg:flex-row lg:justify-between lg:pb-24">
        <h2 className="font-serif text-h4 leading-9 text-ink md:text-h2 md:leading-14 lg:w-111.25">
          Ready to start?
        </h2>
        <EmailCapture
          label="Ready to start"
          className="mt-8 w-full md:mt-10 lg:mt-0 lg:w-auto"
        />
      </Container>
    </section>
  );
}
