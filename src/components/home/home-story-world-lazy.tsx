"use client";

import dynamic from "next/dynamic";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const HomeStoryWorldLazy = dynamic(
  () => import("@/components/home/home-story-world").then((mod) => mod.HomeStoryWorld),
  {
    ssr: false,
    loading: () => <HomeStoryWorldFallback />,
  },
);

function HomeStoryWorldFallback() {
  return (
    <div className="bg-[color:var(--color-snow)]">
      <Section className="!py-10 md:!py-14">
        <SectionHeading
          kicker="A gentle story of growth"
          title="Scroll through the moments that matter"
          description="Assessment → play-based therapy → confident independence."
          center
        />
      </Section>
      <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center px-4 pb-12 md:min-h-screen">
        <div className="h-[70vh] w-full animate-pulse rounded-[2.5rem] bg-[color:var(--color-soft-sage)]/40 md:h-[78vh]" />
      </div>
    </div>
  );
}

export { HomeStoryWorldLazy };

