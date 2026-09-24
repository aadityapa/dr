import { doctorProfile, googleReviews, services, siteConfig } from "@/lib/site-data";

export type BreadcrumbItem = { name: string; url: string };
export type FaqItem = { q: string; a: string };

/** Neighbourhoods families actually travel from — used for local/geo signals. */
export const SERVICE_AREAS = [
  "Kandivali West",
  "Kandivali East",
  "Borivali",
  "Malad",
  "Goregaon",
  "Dahisar",
  "Andheri",
  "Mira Road",
  "Mumbai",
  "Maharashtra",
];

function postalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: `${siteConfig.address.line2}, ${siteConfig.address.line3}`,
    addressLocality: siteConfig.address.city,
    addressRegion: "Maharashtra",
    postalCode: siteConfig.address.postalCode,
    addressCountry: "IN",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    // Square logo — Google rejects non-square Organization logos, so this must
    // not point at the 1200x630 OG image.
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo-512.png`,
      width: 512,
      height: 512,
    },
    alternateName: siteConfig.alternateNames,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: postalAddress(),
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
    founder: personSchema(),
    // Entity-linking signals. Google builds its picture of a brand largely
    // from these cross-platform references, so keep them accurate.
    sameAs: [googleReviews.mapsUrl, ...siteConfig.socialProfiles],
    knowsAbout: [
      "Pediatric occupational therapy",
      "Sensory integration therapy",
      "Autism spectrum disorder support",
      "ADHD support",
      "Developmental delay",
      "Handwriting difficulties",
      "Aquatic therapy for children",
      "Brain Gym",
      "Primitive reflex integration",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: ["en-IN", "hi-IN", "mr-IN"],
  };
}

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}/#medicalclinic`,
    name: `${siteConfig.name} — ${siteConfig.title}`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    address: postalAddress(),
    geo: { "@type": "GeoCoordinates", latitude: 19.21, longitude: 72.84 },
    hasMap: googleReviews.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    openingHours: "Mo-Sa 09:00-17:00",
    priceRange: "$$",
    currenciesAccepted: "INR",
    image: `${siteConfig.url}/opengraph-image`,
    isAcceptingNewPatients: true,
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
    medicalSpecialty: "Pediatric Occupational Therapy",
    availableLanguage: ["English", "Hindi", "Marathi"],
    availableService: services.map((s) => ({
      "@type": "MedicalTherapy",
      name: s.title,
      description: s.summary,
    })),
    founder: personSchema(),
  };
}

export function localBusinessSchema(overrides?: { name?: string; description?: string; areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: overrides?.name ?? siteConfig.name,
    description: overrides?.description ?? siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.21,
      longitude: 72.84,
    },
    openingHours: "Mo-Sa 09:00-17:00",
    areaServed: overrides?.areaServed ?? SERVICE_AREAS,
    availableLanguage: ["English", "Hindi", "Marathi"],
    currenciesAccepted: "INR",
    priceRange: "$$",
    image: `${siteConfig.url}/opengraph-image`,
    sameAs: [googleReviews.mapsUrl],
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.doctorName,
    jobTitle: siteConfig.title,
    description: doctorProfile.bio,
    url: `${siteConfig.url}/en/about`,
    image: `${siteConfig.url}/images/doctor/portrait.jpg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    hasCredential: doctorProfile.qualifications.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      name,
    })),
    knowsAbout: [
      "Pediatric Occupational Therapy",
      "Sensory Integration Therapy",
      "Aquatic Therapy",
      "Brain Gym®",
      "Handwriting Training",
      ...doctorProfile.certifications,
    ],
    knowsLanguage: ["en", "hi", "mr"],
    worksFor: { "@id": `${siteConfig.url}/#medicalclinic` },
    sameAs: siteConfig.socialProfiles,
  };
}

export function physicianSchema() {
  const person = personSchema();
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": person["@id"],
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    email: person.email,
    telephone: person.telephone,
    knowsAbout: person.knowsAbout,
    medicalSpecialty: "Pediatric Occupational Therapy",
    worksFor: {
      "@type": "MedicalClinic",
      name: siteConfig.address.line1,
      address: postalAddress(),
    },
  };
}

export function serviceSchema(service: { title: string; summary: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Place", name: "Mumbai, Maharashtra, India" },
    url: `${siteConfig.url}/expertise/${service.slug}`,
  };
}

export function placeSchema(placeName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: placeName,
    address: postalAddress(),
    geo: { "@type": "GeoCoordinates", latitude: 19.21, longitude: 72.84 },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

const schemaLanguage: Record<string, string> = {
  en: "en-IN",
  hi: "hi-IN",
  mr: "mr-IN",
};

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  /** Locale of the page rendering this schema; drives the URL and inLanguage. */
  locale?: string;
}) {
  const locale = article.locale ?? "en";
  // Must carry the locale prefix — an unprefixed URL here is a redirecting URL,
  // which Google crawls from every article and reports as "not indexed".
  const url = `${siteConfig.url}/${locale}/resources/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: personSchema(),
    publisher: organizationSchema(),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: schemaLanguage[locale] ?? "en-IN",
  };
}

export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}/#medicalclinic`,
    name: `${siteConfig.name} — ${siteConfig.title}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "47",
      reviewCount: "47",
    },
  };
}

export function reviewListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}/#medicalclinic`,
    name: siteConfig.name,
    review: googleReviews.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
    })),
  };
}

/**
 * AEO — marks the passages an answer engine or voice assistant should read
 * aloud when summarising a page.
 */
export function speakableSchema(
  cssSelectors: string[] = ["h1", "h2", "p"],
  path = "",
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: `${siteConfig.url}${path}`,
  };
}
