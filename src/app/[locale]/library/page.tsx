import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { LibraryDownloadForm } from "@/components/forms/library-download-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ReadingScene } from "@/components/illustrations/scene-illustrations";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionCta } from "@/components/shared/section-cta";
import { Card, CardContent } from "@/components/ui/card";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getPageShells, getPhase3Content } from "@/lib/i18n/localize";
import { libraryResources } from "@/lib/library-resources";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.library.metaTitle,
    description: shells.library.metaDescription,
    path: "/library",
    locale,
    keywords: mumbaiKeywords("parent guides download", "sensory checklist free", "school readiness checklist Mumbai"),
  });
}

export default async function LibraryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);
  const messages = getMessages(locale);
  const library = getPhase3Content(locale).library;

  const localizedResources = libraryResources.map((resource) => {
    const copy = library.resources[resource.id];
    return {
      ...resource,
      title: copy?.title ?? resource.title,
      description: copy?.description ?? resource.description,
      category: copy ? (library.categories[copy.category] ?? copy.category) : resource.category,
      categoryKey: copy?.category ?? resource.category,
    };
  });

  const categories = [...new Set(localizedResources.map((r) => r.categoryKey))];

  return (
    <main>
      <Breadcrumbs items={[{ name: messages.nav.library, url: `${siteConfig.url}/${locale}/library` }]} />
      <PageHero photoKey="library" art={<ReadingScene />} kicker={shells.library.kicker} title={shells.library.title} description={shells.library.description} />

      <Section>
        {categories.map((categoryKey) => (
          <div key={categoryKey} className="mb-12">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
              {library.categories[categoryKey] ?? categoryKey}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {localizedResources
                .filter((r) => r.categoryKey === categoryKey)
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

        <SectionCta title={library.ctaTitle} description={library.ctaDescription} />
      </Section>
    </main>
  );
}
