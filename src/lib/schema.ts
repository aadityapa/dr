import { siteConfig } from "@/lib/site-data";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411045",
      addressCountry: "IN",
    },
    medicalSpecialty: "Pediatric occupational therapy",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    telephone: siteConfig.phone,
    openingHours: "Mo-Sa 09:00-19:00",
    areaServed: "Pune",
  };
}
