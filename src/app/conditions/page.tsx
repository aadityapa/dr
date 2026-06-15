import type { Metadata } from "next";

import { ConditionsGrid } from "@/components/conditions/conditions-grid";
import { ConditionsPageCta } from "@/components/conditions/conditions-page-cta";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Section } from "@/components/shared/section";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Conditions We Support",
  description: `Parent-friendly guidance on developmental conditions supported by ${siteConfig.name} — pediatric OT in Kandivali West, Mumbai.`,
  path: "/conditions",
  keywords: mumbaiKeywords("autism therapy Mumbai", "ADHD OT Kandivali", "developmental delay therapy"),
});

export default function ConditionsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Conditions", url: `${siteConfig.url}/conditions` }]} />
      <LocalizedPageHero page="conditionsList" />

      <Section>
        <ConditionsGrid />
        <ConditionsPageCta />
      </Section>
    </main>
  );
}
