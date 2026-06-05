import type { Metadata } from "next";

import { StitchGalleryPage } from "@/components/stitch/gallery-page";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our therapy room, sensory gym, aquatic sessions, and child-friendly equipment spaces.",
};

export default function GalleryPage() {
  return <StitchGalleryPage />;
}
