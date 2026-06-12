import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { JourneyTimeline } from "@/components/therapy-journey/journey-timeline";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Your Child's Therapy Journey",
  description:
    "Understand the therapy process at Thrive with sharuja — from appointment and evaluation to personalized sessions and progress review in Mumbai.",
  path: "/therapy-journey",
  keywords: mumbaiKeywords("pediatric therapy process", "OT evaluation Mumbai"),
});

export default function TherapyJourneyPage() {
  return (
    <main>
      <PageHero
        kicker="Therapy Journey"
        title="Your path from first call to thriving progress"
        description="A transparent, family-centered process designed to make you feel supported at every step."
      />
      <JourneyTimeline />
    </main>
  );
}
