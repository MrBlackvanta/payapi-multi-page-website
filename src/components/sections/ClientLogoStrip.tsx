import { clientLogos } from "@/data";

export default function ClientLogoStrip({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul
      className={`grid grid-cols-[repeat(2,auto)] items-center justify-between justify-items-center gap-y-9.75 px-6 md:grid-cols-[repeat(3,auto)] md:px-0 ${className}`}
    >
      {clientLogos.map(({ label, icon: Icon, width }) => (
        <li key={label}>
          <Icon aria-hidden="true" className={`h-auto ${width}`} />
          <span className="sr-only">{label}</span>
        </li>
      ))}
    </ul>
  );
}
