import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";

import { SiteChrome } from "@/components/layout/site-chrome";
import { ClientEnhancements } from "@/components/providers/client-enhancements";
import { ScrollProgress } from "@/components/providers/scroll-progress";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";
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
    default: "Thrive with sharuja | Pediatric Occupational Therapy",
    template: "%s | Thrive with sharuja",
  },
  description: siteConfig.description,
  keywords: [
    "Pediatric Occupational Therapist",
    "Sensory Integration Therapy",
    "Occupational Therapy for Autism",
    "Child Development Therapy",
    "Pediatric Therapy Clinic",
  ],
  openGraph: {
    title: "Thrive with sharuja | Pediatric Occupational Therapy",
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
  },
  alternates: {
    canonical: "/",
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
        <ScrollProgress />
        <ClientEnhancements />
        <SiteChrome>{children}</SiteChrome>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </body>
    </html>
  );
}
