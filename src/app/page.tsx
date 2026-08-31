import { ReadyToStart } from "@/components/sections";
import { Disc } from "@/components/ui";
import {
  ClientLogos,
  EasyToImplement,
  FeatureTrio,
  Hero,
  SimpleUiUx,
} from "@/views/home";

export default function HomePage() {
  return (
    <div className="relative overflow-x-clip">
      <Disc className="-top-157 -left-50.5 v-drift md:-top-187.75 md:-left-22.75 md:size-237.25 lg:-top-65 lg:-right-35 lg:left-auto lg:size-195" />

      <div className="relative z-10">
        <Hero />
        <ClientLogos />
        <EasyToImplement />
        <SimpleUiUx />
        <FeatureTrio />
        <ReadyToStart className="pt-20 md:pt-25 lg:pt-24" />
      </div>
    </div>
  );
}
