import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";

import { SiteChrome } from "@/components/layout/site-chrome";
import { ClientEnhancements } from "@/components/providers/client-enhancements";
import { ScrollProgress } from "@/components/providers/scroll-progress";
import {
  localBusinessSchema,
  medicalClinicSchema,
  organizationSchema,
  physicianSchema,
  websiteSchema,
} from "@/lib/schema";
import { seoKeywords, siteConfig } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Pediatric Occupational Therapist Mumbai`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.heroSubheadline,
    type: "website",
    url: siteConfig.url,
    locale: "en_IN",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.heroSubheadline,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[color:var(--color-sage-dark)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <ClientEnhancements />
        <SiteChrome>{children}</SiteChrome>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <Script
          id="medical-clinic-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema()) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Script
          id="physician-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema()) }}
        />
      </body>
    </html>
  );
}
