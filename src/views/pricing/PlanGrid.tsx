import type { CSSProperties } from "react";

import { Container } from "@/components/layout";
import { pricingPlans } from "@/data";

import PlanCard from "./PlanCard";

export default function PlanGrid({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <Container className="grid gap-y-12 md:grid-cols-3 md:gap-x-2.5 lg:gap-x-7.5">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.name}
            style={{ "--rise-order": index } as CSSProperties}
            className="v-rise"
          >
            <PlanCard {...plan} />
          </div>
        ))}
      </Container>
    </section>
  );
}
