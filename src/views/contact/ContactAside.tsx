import { ClientLogoStrip } from "@/components/sections";

export default function ContactAside({
  className = "",
}: {
  className?: string;
}) {
  return (
    <aside className={className}>
      <h2 className="mx-auto max-w-111.25 text-center font-serif text-h5 text-ink/75 lg:mx-0 lg:max-w-none lg:text-left">
        Join the thousands of innovators already building with us
      </h2>
      <ClientLogoStrip className="mt-8 w-full text-ink md:mt-10" />
    </aside>
  );
}
