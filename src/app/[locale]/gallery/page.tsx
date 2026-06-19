import type { Metadata } from "next";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Therapy Gallery & Clinic Environment",
  description:
    "Explore therapy rooms, assessment areas, aquatic therapy facilities, and child-friendly environments at Thrive With Sharuja in Kandivali West, Mumbai.",
  path: "/gallery",
  keywords: mumbaiKeywords("pediatric therapy clinic Mumbai", "OT clinic Kandivali"),
});

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        kicker="Gallery"
        title="Our healing spaces"
        description="A glimpse into the warm, professional environments where children learn, grow, and thrive."
      />
      <Section>
        <GalleryGrid />
      </Section>
    </main>
  );
}
