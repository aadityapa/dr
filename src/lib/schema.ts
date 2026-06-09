import { doctorProfile, siteConfig } from "@/lib/site-data";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${siteConfig.name} — ${siteConfig.title}`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line2,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-17:00",
    medicalSpecialty: "Pediatric Occupational Therapy",
    founder: {
      "@type": "Person",
      name: siteConfig.doctorName,
      jobTitle: siteConfig.title,
      description: doctorProfile.bio,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.full,
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.21,
      longitude: 72.84,
    },
    openingHours: "Mo-Sa 09:00-17:00",
    areaServed: ["Mumbai", "Kandivali", "Borivali", "Malad"],
    priceRange: "$$",
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: siteConfig.doctorName,
    jobTitle: siteConfig.title,
    description: doctorProfile.bio,
    medicalSpecialty: "Pediatric Occupational Therapy",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    worksFor: {
      "@type": "MedicalClinic",
      name: siteConfig.address.line1,
    },
    knowsAbout: doctorProfile.certifications,
  };
}
