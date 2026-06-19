export type Locale = "en" | "hi" | "mr";

export const locales: Locale[] = ["en", "hi", "mr"];

export type Messages = {
  nav: {
    home: string;
    about: string;
    services: string;
    conditions: string;
    resources: string;
    gallery: string;
    library: string;
    outcomes: string;
    screening: string;
    faqs: string;
    therapyJourney: string;
    inviteSharuja: string;
    contact: string;
    appointment: string;
    more: string;
  };
  cta: {
    bookConsultation: string;
    exploreServices: string;
    callNow: string;
    whatsapp: string;
    book: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    tagline: string;
  };
  site: {
    title: string;
    description: string;
  };
  footer: {
    explore: string;
    services: string;
    conditions: string;
    locations: string;
    contact: string;
    viewAll: string;
    allLocations: string;
    disclaimer: string;
    readDisclaimer: string;
    privacy: string;
    terms: string;
    medicalDisclaimer: string;
    accessibility: string;
    rights: string;
  };
  common: {
    skipToContent: string;
    selectLanguage: string;
    openMenu: string;
    closeMenu: string;
    learnMore: string;
    sending: string;
    sendMessage: string;
  };
  forms: {
    contact: {
      parentName: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
      errors: {
        parentName: string;
        email: string;
        phone: string;
        message: string;
      };
    };
    appointment: {
      parentName: string;
      childName: string;
      childAge: string;
      phone: string;
      email: string;
      concern: string;
      preferredDate: string;
      submit: string;
      success: string;
    };
  };
  languageTransition: {
    switching: string;
  };
};

export const navHrefKeys: Record<string, keyof Messages["nav"]> = {
  "/": "home",
  "/about": "about",
  "/expertise": "services",
  "/conditions": "conditions",
  "/gallery": "gallery",
  "/resources": "resources",
  "/library": "library",
  "/therapy-outcomes": "outcomes",
  "/screening": "screening",
  "/faqs": "faqs",
  "/therapy-journey": "therapyJourney",
  "/invite-sharuja": "inviteSharuja",
  "/contact": "contact",
  "/appointment": "appointment",
};
