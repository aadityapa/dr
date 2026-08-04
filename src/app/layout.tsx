import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Noto_Sans_Devanagari, Playfair_Display } from "next/font/google";
import { getLocale } from "next-intl/server";

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
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  display: "swap",
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
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.heroSubheadline,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2f4d3b",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${devanagari.variable} antialiased`}>
        <script
          // Applies saved dark/light mode + accent colour before first paint (no flash).
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("tws-theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var e=document.documentElement;if(d){e.classList.add("dark");}e.style.colorScheme=d?"dark":"light";var a=localStorage.getItem("tws-accent");if(a&&a!=="sage"){e.setAttribute("data-accent",a);}}catch(_){}})();`,
          }}
        />
        {children}
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

