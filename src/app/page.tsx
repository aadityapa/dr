import type { Metadata } from "next";

import { ChildJourneyScroll } from "@/components/home/child-journey-scroll";
import { ClinicTourSection } from "@/components/home/clinic-tour-section";
import { DoctorAuthoritySection } from "@/components/home/doctor-authority-section";
import { HeroSection } from "@/components/home/hero-section";
import { HomeContactSection } from "@/components/home/home-contact-section";
import { HomeFaqSection } from "@/components/home/home-faq-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { TherapyJourneyHome } from "@/components/home/therapy-journey-home";
import { WhoWeHelpSection } from "@/components/home/who-we-help-section";
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
      <ChildJourneyScroll />
      <DoctorAuthoritySection />
      <WhoWeHelpSection />
      <ServicesPreview />
      <TherapyJourneyHome />
      <SuccessStoriesSection />
      <ClinicTourSection />
      <HomeFaqSection />
      <HomeContactSection />
    </main>
  );
}
