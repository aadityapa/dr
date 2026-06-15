import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { ConditionLocalizedHero } from "@/components/shared/localized-page-hero";
import {
  ConditionLocalizedGuide,
  ConditionRelatedServices,
} from "@/components/conditions/condition-localized-guide";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { allConditionsContent, getConditionContent } from "@/lib/conditions-content";
import { getConditionDepthContent } from "@/lib/conditions-depth";
import { buildPageMetadata } from "@/lib/metadata";
import { faqPageSchema, serviceSchema } from "@/lib/schema";
import { services, siteConfig } from "@/lib/site-data";
import { getSeoExpansion } from "@/lib/seo/expansions";
import { SeoExpansionBlocks } from "@/components/seo/seo-expansion-blocks";

type ConditionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allConditionsContent.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionContent(slug);
  if (!condition) return {};

  return buildPageMetadata({
    title: `${condition.title} — Pediatric OT Mumbai`,
    description: condition.metaDescription,
    path: `/conditions/${slug}`,
    keywords: condition.keywords,
  });
}

export default async function ConditionDetailPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = getConditionContent(slug);
  if (!condition) notFound();

  const depth = getConditionDepthContent(slug);
  const seoExpansion = getSeoExpansion(slug, "condition");
  const relatedServiceItems = services.filter((s) => condition.relatedServices.includes(s.slug));

  return (
    <main>
      <JsonLd data={faqPageSchema(condition.faqs)} id="condition-faq-schema" />
      {relatedServiceItems.map((s) => (
        <JsonLd key={s.slug} data={serviceSchema(s)} id={`condition-service-${s.slug}`} />
      ))}
      <Breadcrumbs
        items={[
          { name: "Conditions", url: `${siteConfig.url}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/conditions/${slug}` },
        ]}
      />
      <ConditionLocalizedHero slug={slug} />

      <Section>
        <div className="prose-custom mx-auto max-w-4xl space-y-12">
          {depth?.parentExplanation.map((para) => (
            <p key={para.slice(0, 40)} className="leading-relaxed text-[color:var(--color-muted)]">
              {para}
            </p>
          ))}

          <ConditionLocalizedGuide
            slug={slug}
            whenToSeeDoctor={depth?.whenToSeeDoctor}
            successOutcomes={depth?.successOutcomes}
          />

          {depth && (
            <article>
              <SectionHeading title="Related Resources" />
              <div className="mt-4 flex flex-wrap gap-3">
                {depth.internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-sm text-[color:var(--color-sage-dark)] hover:bg-[color:var(--color-soft-green)]/40"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          )}
          {seoExpansion && <SeoExpansionBlocks expansion={seoExpansion} />}
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-white/70">
        <SectionHeading title="Related Services" />
        <ConditionRelatedServices
          serviceSlugs={relatedServiceItems.map((s) => s.slug)}
          summaries={Object.fromEntries(relatedServiceItems.map((s) => [s.slug, s.summary]))}
        />
      </Section>
    </main>
  );
}
