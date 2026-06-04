import type { Metadata } from "next";

import { HomeContent } from "@/components/home/home-content";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description: `${siteConfig.tagline} ${siteConfig.name} — pediatric occupational therapy helping children regulate, connect, participate, and thrive.`,
};

export default function Home() {
  return <HomeContent />;
}
