import type { CSSProperties } from "react";

import { Container } from "@/components/layout";
import type { StoryRow } from "@/data";

type StorySectionProps = {
  rows: StoryRow[];
  className?: string;
};

export default function StorySection({
  rows,
  className = "",
}: StorySectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="mx-auto grid max-w-230 gap-12 md:gap-16 lg:gap-14">
          {rows.map(({ title, body }, index) => (
            <div
              key={title}
              style={{ "--rise-order": index } as CSSProperties}
              className="v-rise text-center md:flex md:gap-2.5 md:text-left lg:gap-7.5"
            >
              <h2 className="font-serif text-h5 leading-8 text-ink md:w-55.75 md:shrink-0 md:text-h4 md:leading-10 lg:w-63.75">
                {title}
              </h2>
              <p className="mt-4 text-body-sm text-ink-muted md:mt-0">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
