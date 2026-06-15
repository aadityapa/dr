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
        kicker="Your Journey With Us"
        title="From first hello to celebrating small wins"
        description="We keep things simple, warm, and honest — so you always know what comes next."
      />
      <JourneyTimeline />
    </main>
  );
}
