import { localeLabels } from "@/i18n/routing";

import { en } from "./en";
import { hi } from "./hi";
import { mr } from "./mr";
import type { Locale, Messages } from "./types";
import { navHrefKeys } from "./types";

export type { Locale, Messages };
export { en, hi, mr, navHrefKeys, localeLabels };

export type { AppLocale } from "@/i18n/routing";
export { routing, LOCALE_COOKIE, LOCALE_STORAGE_KEY } from "@/i18n/routing";

const dictionaries: Record<Locale, Messages> = { en, hi, mr };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale] ?? en;
}

export function isValidLocale(value: string): value is Locale {
  return value === "en" || value === "hi" || value === "mr";
}

export function getNavLabel(messages: Messages, href: string): string {
  const key = navHrefKeys[href];
  return key ? messages.nav[key] : href;
}

export { getContent, getLocalizedConditionDetail, getLocalizedConditionCard, getLocalizedService } from "./content";
