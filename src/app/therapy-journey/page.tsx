import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { JourneyTimeline } from "@/components/therapy-journey/journey-timeline";

export const metadata: Metadata = {
  title: "Therapy Journey",
  description:
    "Understand the therapy process — from appointment booking to comprehensive evaluation and personalized therapy sessions.",
};

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
