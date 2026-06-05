import type { Metadata } from "next";

import { StitchAboutPage } from "@/components/stitch/about-page";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${siteConfig.shortName} — ${siteConfig.tagline} Learn about our mission and child-centered therapy philosophy.`,
};

export default function AboutPage() {
  return <StitchAboutPage />;
}
