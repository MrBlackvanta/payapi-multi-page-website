export default function Disc({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute size-195 rounded-full bg-ink/15 ${className}`}
    />
  );
}
