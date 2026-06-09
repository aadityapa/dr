import type { Metadata } from "next";

import { AgeBanner } from "@/components/home/age-banner";
import { ConditionsPreview } from "@/components/home/conditions-preview";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { TrustSection } from "@/components/home/trust-section";
import { seoKeywords, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pediatric Occupational Therapist Mumbai",
  description: siteConfig.description,
  keywords: seoKeywords,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.heroSubheadline,
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <PhilosophySection />
      <ServicesPreview />
      <AgeBanner />
      <ConditionsPreview />
      <TestimonialsPreview />
      <CtaSection />
    </main>
  );
}
