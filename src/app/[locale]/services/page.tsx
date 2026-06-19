import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ServicesListGrid } from "@/components/services/services-list-grid";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import type { AppLocale } from "@/i18n/routing";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    title: "Pediatric Therapy Services Mumbai",
    description: `Explore occupational therapy, aquatic therapy, Brain Gym®, and handwriting training with ${siteConfig.doctorName} at ${siteConfig.name}.`,
    path: "/services",
    locale,
    keywords: mumbaiKeywords(
      "occupational therapy Mumbai",
      "aquatic therapy Mumbai",
      "Brain Gym Mumbai",
      "handwriting therapy Mumbai",
    ),
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <LocalizedPageHero page="servicesList" />
      <ServicesListGrid />
    </main>
  );
}
