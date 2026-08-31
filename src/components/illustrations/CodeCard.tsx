import { integrationSnippet } from "@/data";

const dots = ["bg-accent", "bg-ink-soft", "bg-ink"];

export default function CodeCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-panel bg-surface-dark shadow-showcase ${className}`}
    >
      <div className="flex h-7.5 items-center gap-1.25 bg-code-bar px-3 md:h-8.75 md:gap-1.5 md:px-3.5 lg:h-10 lg:px-4">
        {dots.map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className={`size-3 rounded-full md:size-3.5 lg:size-4 ${dot}`}
          />
        ))}
      </div>

      <pre className="overflow-x-auto px-5 pt-4.25 pb-4.5 font-mono text-[0.5625rem]/4 text-ink-inverse md:px-7.25 md:pt-5.5 md:pb-7.75 md:text-[0.6875rem]/4.5 lg:p-8 lg:text-[0.8125rem]/5">
        <code>{integrationSnippet}</code>
      </pre>
    </div>
  );
}
