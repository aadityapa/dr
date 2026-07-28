"use client";

import dynamic from "next/dynamic";

import { PremiumHero } from "./premium-hero";
import { MissionSection } from "./mission";
import { JourneyTimeline } from "./journey-timeline";
import { ExpertiseGrid } from "./expertise-grid";
import { AboutTestimonials } from "./testimonials";
import { FaqAccordion } from "./faq-accordion";
import { InviteSharujaSection } from "./invite-sharuja-section";
import { BottomCta } from "./bottom-cta";

import type { AboutPageProps } from "./about-types";

const CertCarousel = dynamic(() => import("./cert-carousel").then((m) => ({ default: m.CertCarousel })), {
  loading: () => <div className="mx-auto h-64 max-w-2xl animate-pulse rounded-[2rem] bg-[color:var(--color-soft-green)]/20" />,
});

const ClinicGallery = dynamic(() => import("./clinic-gallery").then((m) => ({ default: m.ClinicGallery })), {
  loading: () => <div className="mx-auto h-96 max-w-7xl animate-pulse rounded-2xl bg-[color:var(--color-almond)]/30" />,
});

export function AboutPageContent(props: AboutPageProps) {
  return (
    <>
      <PremiumHero {...props} />
      <MissionSection {...props} />
      <JourneyTimeline {...props} />
      <ExpertiseGrid {...props} />
      <CertCarousel {...props} />
      <ClinicGallery {...props} />
      <AboutTestimonials {...props} />
      <FaqAccordion {...props} />
      <InviteSharujaSection {...props} />
      <BottomCta {...props} />
    </>
  );
}
