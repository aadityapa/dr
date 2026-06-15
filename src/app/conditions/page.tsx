import type { Metadata } from "next";
import Link from "next/link";

import { ConditionsGrid } from "@/components/conditions/conditions-grid";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
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
      <PageHero
        kicker="For parents"
        title="When something feels harder than it should"
        description="You don't need a diagnosis to have questions. Whether it's meltdowns, handwriting, attention, or simply a gut feeling — we're here to listen and help you understand what support might look like."
      />

      <Section>
        <ConditionsGrid />

        <Reveal className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/appointment">Start With a Conversation</Link>
          </Button>
        </Reveal>
      </Section>
    </main>
  );
}
