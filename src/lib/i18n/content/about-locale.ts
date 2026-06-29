import { aboutContent } from "@/lib/client-content/about";

import type { Locale } from "../types";

export type AboutContent = {
  aboutMe: { title: string; greeting: string; paragraphs: string[] };
  inviteSharuja: { title: string; paragraphs: string[] };
  availableFor: { title: string; items: string[] };
  expertise: { title: string; items: string[] };
  suitableFor: { title: string; items: string[] };
};

const hi: AboutContent = {
  aboutMe: {
    title: "मेरे बारे में",
    greeting: "नमस्ते, मैं शारुजा हूँ।",
    paragraphs: aboutContent.aboutMe.paragraphs as unknown as string[],
  },
  inviteSharuja: {
    title: "शारुजा को आमंत्रित करें",
    paragraphs: aboutContent.inviteSharuja.paragraphs as unknown as string[],
  },
  availableFor: {
    title: "उपलब्ध सेवाएँ",
    items: aboutContent.availableFor.items as unknown as string[],
  },
  expertise: {
    title: "विशेषज्ञता के क्षेत्र",
    items: aboutContent.expertise.items as unknown as string[],
  },
  suitableFor: {
    title: "उपयुक्त के लिए",
    items: aboutContent.suitableFor.items as unknown as string[],
  },
};

const mr: AboutContent = {
  aboutMe: {
    title: "माझ्याबद्दल",
    greeting: "नमस्कार, मी शरुजा.",
    paragraphs: aboutContent.aboutMe.paragraphs as unknown as string[],
  },
  inviteSharuja: {
    title: "शरुजाला आमंत्रित करा",
    paragraphs: aboutContent.inviteSharuja.paragraphs as unknown as string[],
  },
  availableFor: {
    title: "उपलब्ध सेवा",
    items: aboutContent.availableFor.items as unknown as string[],
  },
  expertise: {
    title: "तज्ज्ञतेची क्षेत्रे",
    items: aboutContent.expertise.items as unknown as string[],
  },
  suitableFor: {
    title: "योग्य प्रेक्षक",
    items: aboutContent.suitableFor.items as unknown as string[],
  },
};

const content: Record<Locale, AboutContent> = {
  en: aboutContent as unknown as AboutContent,
  hi,
  mr,
};

export function getAboutContent(locale: Locale): AboutContent {
  return content[locale] ?? aboutContent;
}
