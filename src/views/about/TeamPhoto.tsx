import desktopPhoto from "@/assets/about/desktop/team-members.webp";
import mobilePhoto from "@/assets/about/mobile/team-members.webp";
import tabletPhoto from "@/assets/about/tablet/team-members.webp";

export default function TeamPhoto({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <picture>
        <source media="(min-width: 64rem)" srcSet={desktopPhoto.src} />
        <source media="(min-width: 48rem)" srcSet={tabletPhoto.src} />
        <img
          src={mobilePhoto.src}
          width={mobilePhoto.width}
          height={mobilePhoto.height}
          alt="Three teammates reviewing work on a laptop at an outdoor café table."
          className="h-75 w-full object-cover md:h-66.75 lg:h-125"
        />
      </picture>
    </section>
  );
}
