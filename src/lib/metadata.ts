import type { Metadata } from "next";

import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-data";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  locale?: string;
};

const ogLocaleMap: Record<string, string> = {
  en: "en_IN",
  hi: "hi_IN",
  mr: "mr_IN",
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  noIndex = false,
  locale = routing.defaultLocale,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const localePath = `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
  const url = `${siteConfig.url}${localePath}`;
  const image = ogImage ?? `${siteConfig.url}/opengraph-image`;

  const languages = Object.fromEntries(
    routing.locales.map((code) => [
      code,
      `${siteConfig.url}/${code}${normalizedPath === "/" ? "" : normalizedPath}`,
    ]),
  );

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: localePath,
      languages,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: ogLocaleMap[locale] ?? "en_IN",
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function mumbaiKeywords(...extra: string[]): string[] {
  return [
    "Pediatric Occupational Therapist Mumbai",
    "OT Kandivali",
    "Brain Gym Mumbai",
    "Aquatic Therapy Mumbai",
    "Sensory Integration Mumbai",
    "Autism Support Mumbai",
    "ADHD Support Mumbai",
    "pediatric occupational therapy Mumbai",
    "occupational therapist Kandivali West",
    "child development therapy Mumbai",
    ...extra,
  ];
}
