import type { Metadata } from "next";

import { ClinicTourSection } from "@/components/home/clinic-tour-section";
import { DoctorAuthoritySection } from "@/components/home/doctor-authority-section";
import { GoogleReviewsSection } from "@/components/home/google-reviews-section";
import { HeroSection } from "@/components/home/hero-section";
import { HomeCertificationsPreview } from "@/components/home/home-certifications-preview";
import { HomeContactSection } from "@/components/home/home-contact-section";
import { HomeFaqSection } from "@/components/home/home-faq-section";
import { MaybeYoureWonderingSection } from "@/components/home/maybe-youre-wondering-section";
import { ParentMessageSection } from "@/components/home/parent-message-section";
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
      <ParentMessageSection />
      <MaybeYoureWonderingSection />
      <DoctorAuthoritySection />
      <HomeCertificationsPreview />
      <ServicesPreview />
      <WhoWeHelpSection />
      <TherapyJourneyHome />
      <GoogleReviewsSection />
      <SuccessStoriesSection />
      <ClinicTourSection />
      <HomeFaqSection />
      <HomeContactSection />
    </main>
  );
}
