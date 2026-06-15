import { en } from "./en";
import { hi } from "./hi";
import { mr } from "./mr";
import type { Locale, Messages } from "./types";
import { localeLabels, locales, navHrefKeys } from "./types";

export type { Locale, Messages };
export { en, hi, mr, locales, localeLabels, navHrefKeys };

const dictionaries: Record<Locale, Messages> = { en, hi, mr };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale] ?? en;
}

export const LOCALE_STORAGE_KEY = "thrive-locale";

export function isValidLocale(value: string): value is Locale {
  return value === "en" || value === "hi" || value === "mr";
}

export function getNavLabel(messages: Messages, href: string): string {
  const key = navHrefKeys[href];
  return key ? messages.nav[key] : href;
}
