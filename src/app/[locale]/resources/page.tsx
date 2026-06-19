import type { Metadata } from "next";

import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionCta } from "@/components/shared/section-cta";
import { ResourceGrid } from "@/components/resources/resource-grid";
import { articles } from "@/lib/articles";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Parent Resources & Articles",
  description: `Expert articles on pediatric OT, autism, ADHD, sensory processing, handwriting & child development from ${siteConfig.doctorName} in Mumbai.`,
  path: "/resources",
  keywords: mumbaiKeywords("parent resources pediatric OT", "child development articles Mumbai"),
});

export default function ResourcesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Resources", url: `${siteConfig.url}/resources` }]} />
      <PageHero
        kicker="Parent Resource Center"
        title="Guides for Your Child's Journey"
        description={`${articles.length}+ evidence-informed articles written for Mumbai parents — covering occupational therapy, development, and everyday strategies.`}
      />

      <Section>
        <ResourceGrid articles={articles} />

        <div className="mt-12">
          <NewsletterSignup className="mx-auto max-w-2xl" />
        </div>

        <div className="mt-10">
          <SectionCta
            title="Explore our digital library"
            description="Download free checklists, parent guides, and screening tools — with instant email delivery."
          />
        </div>
      </Section>
    </main>
  );
}
