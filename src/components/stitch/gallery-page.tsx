"use client";

import { GalleryGrid } from "@/components/shared/gallery-grid";

import { StitchHero, StitchSection, StitchShell } from "./ui";

export function StitchGalleryPage() {
  return (
    <StitchShell>
      <StitchHero
        kicker="Gallery"
        title="Healing spaces designed for confidence and comfort"
        description="An emotionally warm, safe environment where children can regulate, explore, and grow."
      />
      <StitchSection className="stitch-gallery pt-0 pb-24">
        <GalleryGrid />
      </StitchSection>
    </StitchShell>
  );
}
