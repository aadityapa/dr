import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AboutPageContent } from "@/components/about/about-page-content";
import { JsonLd } from "@/components/shared/json-ld";
import type { AppLocale } from "@/i18n/routing";
import {
  getAboutContent,
  getLabels,
  getPageShells,
  getPhase3Content,
} from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, physicianSchema } from "@/lib/schema";
import { galleryItems, siteConfig } from "@/lib/site-data";
import { getSiteImage } from "@/lib/site-images";

type Props = { params: Promise<{ locale: AppLocale }> };

const FALLBACK_CLINIC_TITLES: Record<string, { hi: string; mr: string }> = {
  "Sensory Gym": { hi: "सेंसरी जिम", mr: "सेंसरी जिम" },
  "Assessment Room": { hi: "मूल्यांकन कक्ष", mr: "मूल्यमापन कक्ष" },
  "Climbing Wall": { hi: "क्लाइम्बिंग वॉल", mr: "क्लाइम्बिंग वॉल" },
};

function getAboutClinicImages(locale: AppLocale) {
  const galleryCopy = getPhase3Content(locale).gallery.items;
  const titleByEn = new Map(
    getPhase3Content("en").gallery.items.map((item, i) => [item.title, galleryCopy[i] ?? item]),
  );

  const sources = [
    ...galleryItems.filter((item) => item.image.includes("/gallery/") || item.image.includes("/therapy")),
    {
      title: "Sensory Gym",
      alt: "Indoor pediatric sensory gym with colorful climbing equipment",
      image: getSiteImage("sensoryGym"),
    },
    {
      title: "Assessment Room",
      alt: "Calm assessment room for pediatric occupational therapy evaluations",
      image: getSiteImage("assessmentRoom"),
    },
    {
      title: "Climbing Wall",
      alt: "Pediatric therapy climbing wall for balance and motor development",
      image: getSiteImage("climbingWall"),
    },
  ].slice(0, 9);

  return sources.map((item) => {
    const localized = titleByEn.get(item.title);
    if (localized) {
      return { title: localized.title, alt: localized.alt ?? item.alt, image: item.image };
    }
    const fallback = FALLBACK_CLINIC_TITLES[item.title];
    if (fallback && locale !== "en") {
      return { ...item, title: fallback[locale] };
    }
    return item;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.about.metaTitle,
    description: shells.about.metaDescription,
    path: "/about",
    locale,
    keywords: mumbaiKeywords(
      "Pediatric Occupational Therapist Mumbai",
      "OT Kandivali",
      "Dr. Sharuja Sarap OT",
      "Brain Gym Mumbai",
      "Sensory Integration Mumbai",
    ),
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const about = getAboutContent(locale);
  const shells = getPageShells(locale);
  const labels = getLabels(locale);
  const faqs = about.faqs;
  const testimonials = getPhase3Content(locale).testimonials.testimonials;
  const clinicImages = getAboutClinicImages(locale);

  return (
    <main>
      <JsonLd
        id="about-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: about.aboutMe.title, url: `${siteConfig.url}/${locale}/about` },
        ])}
      />
      <JsonLd id="about-person-schema" data={physicianSchema()} />
      <AboutPageContent
        about={about}
        shells={shells.about}
        homeLabel={labels.home}
        faqs={faqs}
        testimonials={testimonials}
        clinicImages={clinicImages}
      />
    </main>
  );
}
