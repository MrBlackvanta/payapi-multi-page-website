import type { CSSProperties } from "react";

import { Container } from "@/components/layout";
import { aboutStats } from "@/data";

export default function Stats({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <Container>
        <dl className="grid gap-y-8 border-y border-ink/25 py-4 text-center md:grid-cols-3 md:gap-x-2.5 md:border-0 md:py-0 md:text-left lg:gap-x-7.5">
          {aboutStats.map(({ label, count, suffix }) => (
            <div key={label} className="md:border-y md:border-ink/25 md:py-4">
              <dt className="text-body text-ink-muted">{label}</dt>
              <dd className="font-serif text-h1 leading-18 text-accent">
                <span aria-hidden="true">
                  <span
                    className="v-stat"
                    style={{ "--stat-to": count } as CSSProperties}
                  />
                  {suffix}
                </span>
                <span className="sr-only">
                  {count}
                  {suffix}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
