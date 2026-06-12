import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { conditions, siteConfig } from "@/lib/site-data";
import { Heart } from "lucide-react";

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
        description="Every child blooms on their own timeline. We provide the expertise and empathy needed to navigate developmental complexities with confidence."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition, i) => (
            <Reveal key={condition.slug} delay={i * 0.05}>
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <h2 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
                    <Link href={`/conditions/${condition.slug}`} className="hover:underline">
                      {condition.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {condition.description}
                  </p>
                  <div className="mt-4 flex items-start gap-2 rounded-xl bg-[color:var(--color-soft-green)]/40 p-3">
                    <Heart className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-terracotta)]" aria-hidden="true" />
                    <p className="text-xs italic text-[color:var(--color-sage-dark)]">{condition.reassurance}</p>
                  </div>
                  <Link
                    href={`/conditions/${condition.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-[color:var(--color-sage-dark)] hover:underline"
                  >
                    Read full guide →
                  </Link>
                </CardContent>
              </Card>
            </Reveal>
          ))}
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
