import type { Metadata } from "next";

import { ExpertiseListGrid } from "@/components/expertise/expertise-list-grid";
import { PageHero } from "@/components/shared/page-hero";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Pediatric Therapy Expertise Mumbai",
  description: `Explore pediatric occupational therapy expertise with ${siteConfig.doctorName} at ${siteConfig.name}, Kandivali West, Mumbai.`,
  path: "/expertise",
  keywords: mumbaiKeywords(
    "occupational therapy Mumbai",
    "Brain Gym Mumbai",
    "sensory integration Kandivali",
    "handwriting therapy Mumbai",
  ),
});

export default function ExpertisePage() {
  return (
    <main>
      <PageHero
        kicker="Our Expertise"
        title="Support for the everyday moments that matter"
        description="Not programmes on a shelf — real help for mornings, school, mealtimes, play, and the feelings that come with all of it."
      />
      <ExpertiseListGrid />
    </main>
  );
}
