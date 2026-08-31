import type { Metadata } from "next";

import { ReadyToStart } from "@/components/sections";
import { Disc } from "@/components/ui";
import { storyAfterPhoto, storyBeforePhoto } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import { AboutHero, Stats, StorySection, TeamPhoto } from "@/views/about";

export const metadata: Metadata = pageMetadata({
  title: "About",
  shareTitle: "About PayAPI",
  description:
    "We empower innovators by delivering access to the financial system. Meet the team building the infrastructure behind modern payments.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="relative overflow-x-clip">
      <Disc className="-top-180.5 -right-119.75 v-drift md:-top-138 md:-right-129.25 lg:-top-153.75 lg:-right-35" />
      <Disc className="hidden v-drift lg:top-133.5 lg:-left-130 lg:block" />

      <div className="relative z-10">
        <AboutHero />
        <StorySection
          rows={storyBeforePhoto}
          className="pt-12 md:pt-16 lg:pt-18"
        />
        <TeamPhoto className="pt-19 md:pt-23 lg:pt-25" />
        <Stats className="pt-12 md:pt-16 lg:pt-18" />
        <StorySection
          rows={storyAfterPhoto}
          className="pt-12 md:pt-16 lg:pt-18"
        />
        <ReadyToStart className="pt-12 md:pt-18 lg:pt-25" />
      </div>
    </div>
  );
}
