import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { planFeatures, type PricingPlan } from "@/data";

export default function PlanCard({
  name,
  blurb,
  price,
  includedCount,
}: PricingPlan) {
  return (
    <article className="text-center lg:text-left">
      <h2 className="font-serif text-h5 leading-8 text-accent md:leading-10 lg:text-h4">
        {name}
      </h2>
      <p className="mt-4.25 text-body-sm text-ink-muted md:mt-3.25 lg:mt-4">
        {blurb}
      </p>
      <p className="mt-2 font-serif text-h1 leading-18 text-ink md:mt-4.75 md:text-h2 md:leading-18 lg:mt-2 lg:text-h1">
        {price}
      </p>

      <div className="mt-6 border-y border-ink/25 py-6 md:mt-5.25 lg:mt-6">
        <ul className="mx-auto flex w-33.5 flex-col gap-2 lg:mx-0 lg:w-full">
          {planFeatures.map((feature, index) => {
            const included = index < includedCount;
            return (
              <li key={feature} className="flex h-7 items-center text-left">
                <CheckIcon
                  aria-hidden="true"
                  className={`w-3.5 shrink-0 text-accent ${included ? "" : "invisible"}`}
                />
                <span
                  className={`ml-5.5 text-body ${included ? "text-ink" : "text-ink-muted"}`}
                >
                  {feature}
                </span>
                <span className="sr-only">
                  {included ? "included" : "not included"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <Button href="/contact" variant="dark" className="mt-6 w-42">
        Request Access
      </Button>
    </article>
  );
}
