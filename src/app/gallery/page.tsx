import type { Metadata } from "next";

import { GalleryGrid } from "@/components/shared/gallery-grid";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our therapy room, sensory gym, aquatic sessions, and child-friendly equipment spaces.",
};

export default function GalleryPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          kicker="Gallery"
          title="Healing spaces designed for confidence and comfort"
          description="An emotionally warm, safe environment where children can regulate, explore, and grow."
        />
        <div className="mt-8">
          <GalleryGrid />
        </div>
      </Section>
    </main>
  );
}
