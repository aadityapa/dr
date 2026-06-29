import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ExpertiseEcosystem } from "@/components/home/expertise-ecosystem";
import { HeroSection } from "@/components/home/hero-section";
import { HomeFaqSection } from "@/components/home/home-faq-section";
import { HomeFinalCtaSection } from "@/components/home/home-final-cta-section";
import { HowICanHelpSection } from "@/components/home/how-i-can-help-section";
import { ParentsReadingSection } from "@/components/home/parents-reading-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { WhoWeHelpSection } from "@/components/home/who-we-help-section";
import type { AppLocale } from "@/i18n/routing";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return buildPageMetadata({
    title: "Pediatric Occupational Therapist Mumbai",
    description: t("subheadline"),
    path: "/",
    locale,
    keywords: mumbaiKeywords(
      "Pediatric Occupational Therapist Mumbai",
      "OT Kandivali",
      "pediatric OT Kandivali",
      "Dr. Sharuja Sarap occupational therapist",
    ),
  });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <ParentsReadingSection />
      <AboutPreviewSection />
      <HowICanHelpSection />
      <ExpertiseEcosystem compact showViewAll />
      <WhoWeHelpSection />
      <SuccessStoriesSection />
      <HomeFaqSection />
      <HomeFinalCtaSection />
    </main>
  );
}
