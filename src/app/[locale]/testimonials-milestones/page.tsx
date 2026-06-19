import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getPageShells } from "@/lib/i18n/localize";
import { milestones, testimonials } from "@/lib/site-data";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { Sparkles, Star, Video } from "lucide-react";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.testimonials.metaTitle,
    description: shells.testimonials.metaDescription,
    path: "/testimonials-milestones",
    locale,
    keywords: mumbaiKeywords("pediatric OT testimonials Mumbai", "child therapy success stories"),
  });
}

export default async function TestimonialsMilestonesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);

  return (
    <main>
      <PageHero kicker={shells.testimonials.kicker} title={shells.testimonials.title} description={shells.testimonials.description} />

      <Section>
        <SectionHeading title="Milestones we've celebrated together" center />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, i) => (
            <Reveal key={milestone} delay={i * 0.04}>
              <div className="flex items-start gap-3 rounded-2xl border border-[color:var(--color-border)]/60 bg-gradient-to-br from-white to-[color:var(--color-soft-green)]/20 p-4">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-terracotta)]" />
                <p className="text-sm text-[color:var(--color-sage-dark)]">{milestone}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-white/70">
        <SectionHeading
          title="In their own words"
          description="Shared with permission. Outcomes vary — but hope is real."
          center
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal key={item.parent} delay={i * 0.08}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 text-[color:var(--color-terracotta)]">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm italic leading-relaxed text-[color:var(--color-muted)]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-4 font-semibold text-[color:var(--color-sage-dark)]">{item.parent}</p>
                  <p className="text-xs text-[color:var(--color-terracotta)]">{item.milestone}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-cream)]/50 p-8 text-center">
            <Video className="h-10 w-10 text-[color:var(--color-sage)]" />
            <p className="mt-3 font-medium text-[color:var(--color-sage-dark)]">Video stories coming soon</p>
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">
              Hear directly from parents — in their own voices.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="text-center">
        <Button asChild size="lg">
          <Link href="/appointment">Start With a Conversation</Link>
        </Button>
      </Section>
    </main>
  );
}
