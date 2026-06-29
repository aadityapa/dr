import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutMeSection } from "@/components/home/about-me-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowICanHelpSection } from "@/components/home/how-i-can-help-section";
import { ParentsReadingSection } from "@/components/home/parents-reading-section";
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
      <HowICanHelpSection />
      <AboutMeSection />
    </main>
  );
}
