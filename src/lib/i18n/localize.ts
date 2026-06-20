import type { Article } from "@/lib/articles";
import type { ClientCondition } from "@/lib/client-content/conditions";
import type { ExpertiseArea } from "@/lib/client-content/expertise";
import type { ExpertiseCluster } from "@/lib/client-content/expertise-clusters";
import { expertiseClusters } from "@/lib/client-content/expertise-clusters";
import { getExpertise } from "@/lib/client-content/expertise";
import { getClientCondition } from "@/lib/client-content/conditions";
import type { LocationPage } from "@/lib/locations";
import { locationPages } from "@/lib/locations";
import { faqCategories, type FaqCategory } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-data";

import type { Locale } from "./types";
import { getContent } from "./content";
import { getLegalContent } from "./content/legal";
import { getLabels } from "./content/labels";
import { getPageShells } from "./content/page-shells";
import { getAboutContent } from "./content/about-locale";
import { getInviteContent } from "./content/invite-locale";
import { hiExpertiseOverrides, mrExpertiseOverrides } from "./content/expertise-overrides";
import { hiClientConditionOverrides, mrClientConditionOverrides } from "./content/client-conditions-overrides";
import { hiClusterOverrides, mrClusterOverrides } from "./content/cluster-overrides";
import { hiLocationOverrides, mrLocationOverrides } from "./content/locations-overrides";
import { hiFaqCategories, mrFaqCategories } from "./content/faq-overrides";
import { localizeArticle } from "./content/articles-localize";
import { getPhase3Content } from "./content/phase3-locale";
import { getLocalizedServiceBundle } from "./content/service-locale";
import { getServiceDetailShells } from "./content/service-detail-shells";

export {
  getLegalContent,
  getLabels,
  getAboutContent,
  getInviteContent,
  getPageShells,
  getPhase3Content,
  getLocalizedServiceBundle,
  getServiceDetailShells,
};

export function getLocalizedExpertise(slug: string, locale: Locale): ExpertiseArea | undefined {
  const base = getExpertise(slug);
  if (!base) return undefined;
  if (locale === "en") return base;
  const overrides = locale === "hi" ? hiExpertiseOverrides[slug] : mrExpertiseOverrides[slug];
  if (!overrides) return base;
  return { ...base, ...overrides };
}

export function getLocalizedClientCondition(slug: string, locale: Locale): ClientCondition | undefined {
  const base = getClientCondition(slug);
  if (!base) return undefined;
  if (locale === "en") return base;
  const overrides = locale === "hi" ? hiClientConditionOverrides[slug] : mrClientConditionOverrides[slug];
  if (!overrides) return base;
  return { ...base, ...overrides };
}

export function getLocalizedCluster(slug: string, locale: Locale): ExpertiseCluster | undefined {
  const base = expertiseClusters.find((c) => c.slug === slug);
  if (!base) return undefined;
  if (locale === "en") return base;
  const overrides = locale === "hi" ? hiClusterOverrides[slug] : mrClusterOverrides[slug];
  if (!overrides) return base;
  return { ...base, ...overrides };
}

export function getLocalizedLocation(slug: string, locale: Locale): LocationPage | undefined {
  const base = locationPages.find((l) => l.slug === slug);
  if (!base) return undefined;
  if (locale === "en") return base;
  const overrides = locale === "hi" ? hiLocationOverrides[slug] : mrLocationOverrides[slug];
  if (!overrides) return base;
  return { ...base, ...overrides };
}

export function getLocalizedFaqs(locale: Locale): FaqCategory[] {
  if (locale === "hi") return hiFaqCategories;
  if (locale === "mr") return mrFaqCategories;
  return faqCategories;
}

export function getLocalizedArticle(article: Article, locale: Locale): Article {
  return localizeArticle(article, locale);
}

export type GeoFaq = { q: string; a: string };

export function buildLocalizedConditionFaqs(conditionTitle: string, locale: Locale): GeoFaq[] {
  const shells = getPageShells(locale);
  const t = shells.geoFaqs.condition;
  return [
    { q: t.whatIs(conditionTitle), a: t.whatIsAnswer(conditionTitle) },
    { q: t.howOtHelps(conditionTitle), a: t.howOtHelpsAnswer },
    { q: t.whenSeek(conditionTitle), a: t.whenSeekAnswer },
    { q: t.whatNext(siteConfig.doctorName), a: t.whatNextAnswer(siteConfig.doctorName) },
  ];
}

export function buildLocalizedExpertiseFaqs(areaTitle: string, locale: Locale): GeoFaq[] {
  const shells = getPageShells(locale);
  const t = shells.geoFaqs.expertise;
  return [
    { q: t.whatIs(areaTitle), a: t.whatIsAnswer(areaTitle) },
    { q: t.howHelps(areaTitle), a: t.howHelpsAnswer },
    { q: t.whenConsider(areaTitle), a: t.whenConsiderAnswer },
    { q: t.whatNext(siteConfig.doctorName), a: t.whatNextAnswer(areaTitle, siteConfig.doctorName) },
  ];
}

export function getLocaleContent(locale: Locale) {
  return getContent(locale);
}

export { getContent };
