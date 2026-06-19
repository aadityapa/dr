import type { Metadata } from "next";

import { ParentsReadingSection } from "@/components/home/parents-reading-section";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ExpertisePreview } from "@/components/home/expertise-preview";
import { HeroSection } from "@/components/home/hero-section";
import { HomeFaqSection } from "@/components/home/home-faq-section";
import { HomeFinalCtaSection } from "@/components/home/home-final-cta-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { WhoWeHelpSection } from "@/components/home/who-we-help-section";
import { homeContent } from "@/lib/client-content/home";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Pediatric Occupational Therapist Mumbai",
  description: homeContent.hero.subheadline,
  path: "/",
  keywords: mumbaiKeywords("pediatric OT Kandivali", "Dr. Sharuja Sarap occupational therapist"),
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ParentsReadingSection />
      <AboutPreviewSection />
      <ExpertisePreview />
      <WhoWeHelpSection />
      <SuccessStoriesSection />
      <HomeFaqSection />
      <HomeFinalCtaSection />
    </main>
  );
}
