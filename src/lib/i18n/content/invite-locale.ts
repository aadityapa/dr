import { inviteContent } from "@/lib/client-content/invite";

import type { Locale } from "../types";

export type InviteContent = {
  hero: { kicker: string; title: string; description: string };
  availableFor: { title: string; items: string[] };
  expertiseAreas: { title: string; items: string[] };
  form: { title: string; description: string; success: string };
};

const hi: InviteContent = {
  hero: {
    kicker: "शारुजा को आमंत्रित करें",
    title: "अपने समुदाय में विशेषज्ञ मार्गदर्शन लाएँ",
    description:
      "डॉ. शारुजा सराफ मुंबई और उससे आगे माता-पिता कार्यक्रम, स्कूल कार्यशालाएँ, पेशेवर प्रशिक्षण और सामुदायिक कार्यक्रमों के लिए उपलब्ध हैं।",
  },
  availableFor: {
    title: "उपलब्ध हैं",
    items: [
      "माता-पिता शिक्षा कार्यक्रम",
      "माता-पिता कोचिंग",
      "स्कूल कार्यशालाएँ",
      "शिक्षक प्रशिक्षण",
      "पेशेवर कार्यशालाएँ",
      "सम्मेलन",
      "अतिथि व्याख्यान",
      "सामुदायिक कार्यक्रम",
    ],
  },
  expertiseAreas: {
    title: "विशेषज्ञता के क्षेत्र",
    items: [
      "बाल विकास",
      "Brain Gym®",
      "संवेदी प्रसंस्करण",
      "ऑटिज़म",
      "एडीएचडी",
      "हस्तलेखन",
      "भावनात्मक नियमन",
      "जल चिकित्सा",
      "माता-पिता कोचिंग",
    ],
  },
  form: {
    title: "पूछताछ भेजें",
    description: "अपने कार्यक्रम या प्रोग्राम के बारे में बताएँ। हम 2–3 कार्य दिवसों में जवाब देंगे।",
    success: "धन्यवाद! आपकी पूछताछ भेज दी गई है। हम जल्द संपर्क करेंगे।",
  },
};

const mr: InviteContent = {
  hero: {
    kicker: "शरुजा आमंत्रित करा",
    title: "तुमच्या समुदायात तज्ञ मार्गदर्शन आणा",
    description:
      "डॉ. शरुजा सराफ मुंबई आणि त्याहून पुढे पालक कार्यक्रम, शाळा कार्यशाळा, व्यावसायिक प्रशिक्षण आणि सामुदायिक कार्यक्रमांसाठी उपलब्ध आहेत.",
  },
  availableFor: {
    title: "उपलब्ध आहेत",
    items: [
      "पालक शिक्षण कार्यक्रम",
      "पालक कोचिंग",
      "शाळा कार्यशाळा",
      "शिक्षक प्रशिक्षण",
      "व्यावसायिक कार्यशाळा",
      "परिषदा",
      "अतिथी व्याख्यान",
      "सामुदायिक कार्यक्रम",
    ],
  },
  expertiseAreas: {
    title: "तज्ञतेची क्षेत्रे",
    items: [
      "बाल विकास",
      "Brain Gym®",
      "संवेदी प्रक्रिया",
      "ऑटिज़म",
      "एडीएचडी",
      "हस्तलेखन",
      "भावनिक नियमन",
      "जल चिकित्सा",
      "पालक कोचिंग",
    ],
  },
  form: {
    title: "चौकशी पाठवा",
    description: "तुमच्या कार्यक्रमाबद्दल सांगा. आम्ही 2–3 कामकाजाच्या दिवसांत उत्तर देऊ.",
    success: "धन्यवाद! तुमची चौकशी पाठवली आहे. आम्ही लवकर संपर्क करू.",
  },
};

const content: Record<Locale, InviteContent> = {
  en: inviteContent as unknown as InviteContent,
  hi,
  mr,
};

export function getInviteContent(locale: Locale): InviteContent {
  return content[locale] ?? inviteContent;
}
