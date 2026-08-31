import type { CSSProperties } from "react";

import { Container } from "@/components/layout";
import { homeFeatures } from "@/data";

export default function FeatureTrio() {
  return (
    <section>
      <Container className="pt-20 md:pt-25 lg:pt-36.5">
        <ul className="grid gap-12 text-center md:grid-cols-3 md:gap-x-2.5 lg:gap-x-7.5">
          {homeFeatures.map(({ title, body, icon: Icon }, index) => (
            <li
              key={title}
              style={{ "--rise-order": index } as CSSProperties}
              className="flex v-rise flex-col items-center"
            >
              <Icon
                aria-hidden="true"
                className="h-auto w-26.5 md:w-22 lg:w-26.5"
              />
              <h3 className="mt-8 text-lead font-bold text-ink">{title}</h3>
              <p className="mt-4 text-ui text-ink-muted">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
