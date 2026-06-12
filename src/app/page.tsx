import type { Metadata } from "next";

import { AgeBanner } from "@/components/home/age-banner";
import { ConditionsPreview } from "@/components/home/conditions-preview";
import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { PhilosophySection } from "@/components/home/philosophy-section";
import {
  ClinicEnvironmentSection,
  DevelopmentalChecklistCta,
  DownloadableGuidesSection,
  MeetDoctorPreviewSection,
  ParentReassuranceSection,
  WhyParentsChooseSection,
} from "@/components/home/premium-sections";
import { ServicesPreview } from "@/components/home/services-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { TrustSection } from "@/components/home/trust-section";
import { AfterContactSection } from "@/components/shared/after-contact-section";
import { QuickConsultationForm } from "@/components/forms/quick-consultation-form";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Pediatric Occupational Therapist Mumbai",
  description: siteConfig.description,
  path: "/",
  keywords: mumbaiKeywords("pediatric OT Kandivali", "Dr. Sharuja Sarap occupational therapist"),
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <WhyParentsChooseSection />
      <PhilosophySection />
      <MeetDoctorPreviewSection />
      <ServicesPreview />
      <AgeBanner />
      <ConditionsPreview />
      <ClinicEnvironmentSection />
      <TestimonialsPreview />
      <ParentReassuranceSection />
      <AfterContactSection />
      <Section className="rounded-[2rem] bg-white/70">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            kicker="Quick Enquiry"
            title="Request a Call Back"
            description="Share your concern and we'll reach out within 24 hours."
          />
          <QuickConsultationForm />
        </div>
      </Section>
      <DevelopmentalChecklistCta />
      <DownloadableGuidesSection />
      <CtaSection />
    </main>
  );
}
