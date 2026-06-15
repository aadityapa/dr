import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { getCardPastel } from "@/lib/pastel-palette";
import { conditions, siteConfig } from "@/lib/site-data";

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
        kicker="Conditions"
        title="Understanding your child's unique journey"
        description="Every child blooms on their own timeline. We meet you with warmth, clarity, and the expertise to support your family."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition, i) => {
            const pastel = getCardPastel(i);
            return (
              <Reveal key={condition.slug} delay={i * 0.05}>
                <div
                  className="h-full rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                >
                  <h2 className="font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                    <Link href={`/conditions/${condition.slug}`} className="hover:underline">
                      {condition.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)] line-clamp-3">
                    {condition.reassurance}
                  </p>
                  <Link
                    href={`/conditions/${condition.slug}`}
                    className="mt-4 inline-block text-sm font-semibold hover:underline"
                    style={{ color: pastel.accent }}
                  >
                    Read full guide →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/appointment">Schedule a Consultation</Link>
          </Button>
        </Reveal>
      </Section>
    </main>
  );
}
