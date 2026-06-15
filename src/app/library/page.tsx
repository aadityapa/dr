import type { Metadata } from "next";

import { LibraryDownloadForm } from "@/components/forms/library-download-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionCta } from "@/components/shared/section-cta";
import { Card, CardContent } from "@/components/ui/card";
import { libraryResources } from "@/lib/library-resources";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Library — Free Parent Guides & Checklists",
  description: `Download free parent guides, checklists, and screening tools from ${siteConfig.doctorName} — pediatric OT in Kandivali West, Mumbai.`,
  path: "/library",
  keywords: mumbaiKeywords("parent guides download", "sensory checklist free", "school readiness checklist Mumbai"),
});

const categories = [...new Set(libraryResources.map((r) => r.category))];

export default function LibraryPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Digital Library", url: `${siteConfig.url}/library` }]} />
      <PageHero
        kicker="Digital Library"
        title="Free Parent Guides & Checklists"
        description="Evidence-informed resources to support your child's development — download instantly after a quick signup."
      />

      <Section>
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
              {category}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {libraryResources
                .filter((r) => r.category === category)
                .map((resource, i) => (
                  <Reveal key={resource.id} delay={i * 0.05}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{resource.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                          {resource.description}
                        </p>
                        <div className="mt-6">
                          <LibraryDownloadForm resource={resource} />
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
            </div>
          </div>
        ))}

        <SectionCta
          title="Need personalized guidance?"
          description="Downloadable guides are a starting point. A consultation with Dr. Sharuja Sarap provides individualized recommendations for your child."
        />
      </Section>
    </main>
  );
}
