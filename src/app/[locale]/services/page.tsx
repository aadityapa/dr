import type { Metadata } from "next";

import { ServicesListGrid } from "@/components/services/services-list-grid";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Pediatric Therapy Services Mumbai",
  description: `Explore occupational therapy, aquatic therapy, Brain Gym®, and handwriting training with ${siteConfig.doctorName} at ${siteConfig.name}.`,
  path: "/services",
  keywords: mumbaiKeywords(
    "occupational therapy Mumbai",
    "aquatic therapy Mumbai",
    "Brain Gym Mumbai",
    "handwriting therapy Mumbai",
  ),
});

export default function ServicesPage() {
  return (
    <main>
      <LocalizedPageHero page="servicesList" />
      <ServicesListGrid />
    </main>
  );
}
