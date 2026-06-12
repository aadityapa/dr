import { doctorProfile, googleReviews, services, siteConfig } from "@/lib/site-data";

export type BreadcrumbItem = { name: string; url: string };
export type FaqItem = { q: string; a: string };

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
    logo: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: postalAddress(),
    founder: personSchema(),
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-IN",
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
    openingHours: "Mo-Sa 09:00-17:00",
    medicalSpecialty: "Pediatric Occupational Therapy",
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
    areaServed: overrides?.areaServed ?? ["Mumbai", "Kandivali West", "Borivali", "Malad", "Goregaon"],
    priceRange: "$$",
    image: `${siteConfig.url}/opengraph-image`,
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.doctorName,
    jobTitle: siteConfig.title,
    description: doctorProfile.bio,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    knowsAbout: [
      "Pediatric Occupational Therapy",
      "Sensory Integration Therapy",
      "Aquatic Therapy",
      "Brain Gym",
      "Handwriting Training",
      ...doctorProfile.certifications,
    ],
    worksFor: { "@id": `${siteConfig.url}/#medicalclinic` },
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
    url: `${siteConfig.url}/services/${service.slug}`,
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

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: personSchema(),
    publisher: organizationSchema(),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: `${siteConfig.url}/resources/${article.slug}`,
    inLanguage: "en-IN",
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
