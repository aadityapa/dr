import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import type { AppLocale } from "@/i18n/routing";
import { getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.gallery.metaTitle,
    description: shells.gallery.metaDescription,
    path: "/gallery",
    locale,
    keywords: mumbaiKeywords("pediatric therapy clinic Mumbai", "OT clinic Kandivali"),
  });
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);

  return (
    <main>
      <PageHero kicker={shells.gallery.kicker} title={shells.gallery.title} description={shells.gallery.description} />
      <Section>
        <GalleryGrid />
      </Section>
    </main>
  );
}
