import type { Locale } from "../types";
import { enContent } from "./en";
import { hiContent } from "./hi";
import { mrContent } from "./mr";
import type { ConditionLocaleCopy, LocaleContent } from "./types";

const contentByLocale: Record<Locale, LocaleContent> = {
  en: enContent,
  hi: hiContent,
  mr: mrContent,
};

export type { ConditionLocaleCopy, LocaleContent, SectionCopy } from "./types";

export function getContent(locale: Locale): LocaleContent {
  return contentByLocale[locale] ?? enContent;
}

export function getLocalizedConditionDetail(
  slug: string,
  locale: Locale,
): ConditionLocaleCopy | null {
  const content = getContent(locale);
  return content.conditionDetails[slug] ?? enContent.conditionDetails[slug] ?? null;
}

export function getLocalizedService(slug: string, locale: Locale) {
  const content = getContent(locale);
  return content.services[slug] ?? enContent.services[slug];
}

export function getLocalizedConditionCard(slug: string, locale: Locale) {
  const content = getContent(locale);
  return content.conditions[slug] ?? enContent.conditions[slug];
}
