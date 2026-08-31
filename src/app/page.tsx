import { ReadyToStart } from "@/components/sections";
import {
  ClientLogos,
  EasyToImplement,
  FeatureTrio,
  Hero,
  SimpleUiUx,
} from "@/views/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <EasyToImplement />
      <SimpleUiUx />
      <FeatureTrio />
      <ReadyToStart className="pt-20 md:pt-25 lg:pt-24" />
    </>
  );
}
