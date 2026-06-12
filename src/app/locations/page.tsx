import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { locationPages } from "@/lib/locations";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { MapPin } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Pediatric Therapy Locations in Mumbai",
  description:
    "Find Dr. Sharuja Sarap at Thrive with sharuja in Kandivali West. Local pediatric occupational therapy, aquatic therapy, and child development services across Mumbai.",
  path: "/locations",
  keywords: mumbaiKeywords(
    "occupational therapist Kandivali",
    "pediatric therapy Mumbai",
    "OT clinic Kandivali West",
  ),
});

export default function LocationsIndexPage() {
  return (
    <main>
      <PageHero
        kicker="Locations"
        title="Pediatric therapy in Kandivali & Mumbai"
        description="Families across Mumbai trust Thrive with sharuja for evidence-based pediatric occupational therapy close to home."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {locationPages.map((location, i) => (
            <Reveal key={location.slug} delay={i * 0.05}>
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-[color:var(--color-sage)]">
                    <MapPin className="h-4 w-4" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-widest">Local SEO</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
                    {location.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)] line-clamp-3">
                    {location.intro}
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-4">
                    <Link href={`/locations/${location.slug}`}>View local page</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
