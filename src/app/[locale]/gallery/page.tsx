import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ClinicMediaShowcase } from "@/components/gallery/clinic-media-showcase";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryScene } from "@/components/illustrations/scene-illustrations";
import { Section } from "@/components/shared/section";
import type { AppLocale } from "@/i18n/routing";
import { getPageShells, getPhase3Content } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { clinicVideos, galleryItems } from "@/lib/site-data";

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
  const gallery = getPhase3Content(locale).gallery;

  const items = gallery.items.map((item, index) => {
    const base = galleryItems[index];
    return {
      title: item.title,
      category: gallery.categories[item.category] ?? item.category,
      categoryKey: base?.category ?? item.category,
      alt: item.alt,
      image: base?.image ?? "",
    };
  });
  const videos = gallery.videos.map((video, index) => {
    const base = clinicVideos[index];
    return {
      ...video,
      src: base.src,
      poster: base.poster,
      category: gallery.categories[base.category] ?? base.category,
    };
  });

  return (
    <main>
      <PageHero photoKey="gallery" art={<GalleryScene />} kicker={shells.gallery.kicker} title={shells.gallery.title} description={shells.gallery.description} />
      <Section>
        <ClinicMediaShowcase slides={items} videos={videos} copy={gallery.mediaShowcase} />
      </Section>
      <Section compact>
        <GalleryGrid
          items={items}
          allCategoryLabel={gallery.allCategory}
          closeLightboxLabel={gallery.closeLightbox}
          categoryLabels={gallery.categories}
        />
      </Section>
    </main>
  );
}
