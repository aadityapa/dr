import type { Metadata } from "next";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our therapy rooms, assessment areas, aquatic therapy facilities, and child-friendly environments.",
};

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
