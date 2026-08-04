import type { GeoBlock, ServiceExtendedContent } from "@/lib/services-content";
import type { ServiceDepthContent } from "@/lib/services-depth";
import type { Service } from "@/lib/site-data";
import { conditions, services } from "@/lib/site-data";
import { getServiceExtendedContent } from "@/lib/services-content";
import { getServiceDepthContent } from "@/lib/services-depth";

import type { Locale } from "../types";
import { getLocalizedConditionCard } from "./index";
import { hiServiceOverrides } from "./hi-service-overrides";
import { mrServiceOverrides } from "./mr-service-overrides";

export type LocalizedServiceOverride = {
  title: string;
  headline: string;
  summary: string;
  content: string;
  ageGroups: string;
  listItems: string[];
  listKey: "areasAddressed" | "brainGymSupports" | "skillsDeveloped" | "benefits";
  process: string[];
  benefits?: string[];
  faqs: { q: string; a: string }[];
  relatedConditions: string[];
  depth?: Omit<ServiceDepthContent, "slug">;
  extended?: Omit<ServiceExtendedContent, "slug">;
};

export type LocalizedServiceBundle = {
  title: string;
  headline: string;
  summary: string;
  content: string;
  ageGroups: string;
  icon: Service["icon"];
  listItems: string[];
  listKey: LocalizedServiceOverride["listKey"];
  process: string[];
  benefits?: string[];
  faqs: { q: string; a: string }[];
  relatedConditions: { label: string; slug?: string }[];
  depth?: Omit<ServiceDepthContent, "slug">;
  extended?: Omit<ServiceExtendedContent, "slug">;
};

function getListKey(service: Service): LocalizedServiceOverride["listKey"] {
  if ("areasAddressed" in service) return "areasAddressed";
  if ("brainGymSupports" in service) return "brainGymSupports";
  if ("skillsDeveloped" in service) return "skillsDeveloped";
  return "benefits";
}

function getListItems(service: Service): string[] {
  if ("areasAddressed" in service) return [...service.areasAddressed];
  if ("brainGymSupports" in service) return [...service.brainGymSupports];
  if ("skillsDeveloped" in service) return [...service.skillsDeveloped];
  return [...service.benefits];
}

function mapRelatedConditions(labels: string[], locale: Locale) {
  return labels.map((label) => {
    const match = conditions.find((c) => c.title === label);
    if (!match) return { label, slug: undefined };
    const localized = getLocalizedConditionCard(match.slug, locale);
    return { label: localized?.title ?? label, slug: match.slug };
  });
}

function buildFromEnglish(slug: string, locale: Locale): LocalizedServiceBundle | undefined {
  const service = services.find((s) => s.slug === slug);
  if (!service) return undefined;

  const extended = getServiceExtendedContent(slug);
  const depth = getServiceDepthContent(slug);

  return {
    title: service.title,
    headline: service.headline,
    summary: service.summary,
    content: service.content,
    ageGroups: service.ageGroups,
    icon: service.icon,
    listItems: getListItems(service),
    listKey: getListKey(service),
    process: [...service.process],
    benefits: "benefits" in service ? [...service.benefits] : undefined,
    faqs: [...service.faqs],
    relatedConditions: mapRelatedConditions([...service.relatedConditions], locale),
    depth: depth
      ? {
          overview: depth.overview,
          signsYourChildMayNeed: depth.signsYourChildMayNeed,
          parentGuide: depth.parentGuide,
          researchReferences: depth.researchReferences,
          outcomes: depth.outcomes,
          whenToSeekHelp: depth.whenToSeekHelp,
        }
      : undefined,
    extended: extended
      ? {
          geoBlock: extended.geoBlock,
          caseExamples: extended.caseExamples,
          parentGuidance: extended.parentGuidance,
          additionalFaqs: extended.additionalFaqs,
        }
      : undefined,
  };
}

function applyOverride(
  base: LocalizedServiceBundle,
  override: LocalizedServiceOverride,
  locale: Locale,
): LocalizedServiceBundle {
  return {
    ...base,
    title: override.title,
    headline: override.headline,
    summary: override.summary,
    content: override.content,
    ageGroups: override.ageGroups,
    listItems: override.listItems,
    listKey: override.listKey,
    process: override.process,
    benefits: override.benefits ?? base.benefits,
    faqs: override.faqs,
    relatedConditions: mapRelatedConditions(override.relatedConditions, locale),
    depth: override.depth ?? base.depth,
    extended: override.extended ?? base.extended,
  };
}

export function getLocalizedServiceBundle(slug: string, locale: Locale): LocalizedServiceBundle | undefined {
  const base = buildFromEnglish(slug, locale);
  if (!base) return undefined;
  if (locale === "en") return base;

  const overrides = locale === "hi" ? hiServiceOverrides : mrServiceOverrides;
  const override = overrides[slug];
  if (!override) return base;

  return applyOverride(base, override, locale);
}

export type { GeoBlock };
