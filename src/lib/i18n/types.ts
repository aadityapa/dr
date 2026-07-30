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
    subheadline2?: string;
    tagline: string;
    primaryCta?: string;
    secondaryCta?: string;
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
    scrollToLearnMore: string;
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
      fatherName: string;
      motherName: string;
      guardianName: string;
      phone: string;
      email: string;
      childName: string;
      dateOfBirth: string;
      age: string;
      gender: string;
      schoolGrade: string;
      concernsLabel: string;
      concernOptions: string[];
      diagnosisLabel: string;
      yes: string;
      no: string;
      previousTherapiesLabel: string;
      previousTherapyOptions: string[];
      biggestConcern: string;
      preferredTimeLabel: string;
      timeSlots: string[];
      consent: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      whatsappUs: string;
      error: string;
      errors: {
        parentName: string;
        phone: string;
        email: string;
        childName: string;
        age: string;
        concerns: string;
        hasDiagnosis: string;
        biggestConcern: string;
        preferredTime: string;
        consent: string;
      };
    };
    screening: {
      parentName: string;
      childName: string;
      childAge: string;
      email: string;
      phone: string;
      screeningTitle: string;
      questions: { id: string; label: string }[];
      additionalConcerns: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      disclaimer: string;
      error: string;
      errors: {
        parentName: string;
        childName: string;
        childAge: string;
        email: string;
        phone: string;
        concerns: string;
      };
    };
    quickConsultation: {
      formAriaLabel: string;
      parentName: string;
      namePlaceholder: string;
      phone: string;
      dateOfBirth: string;
      dateOfBirthAriaLabel: string;
      concern: string;
      concernPlaceholder: string;
      submit: string;
      successTitle: string;
      successMessage: string;
      error: string;
      errors: {
        name: string;
        phone: string;
        concern: string;
      };
    };
    newsletter: {
      formAriaLabel: string;
      title: string;
      description: string;
      emailLabel: string;
      placeholder: string;
      subscribe: string;
      success: string;
      error: string;
      emailError: string;
    };
    invite: {
      name: string;
      organisation: string;
      email: string;
      phone: string;
      eventType: string;
      message: string;
      consent: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      error: string;
      errors: {
        name: string;
        organisation: string;
        email: string;
        phone: string;
        eventType: string;
        message: string;
        consent: string;
      };
    };
    library: {
      parentName: string;
      email: string;
      phone: string;
      phoneOptional: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      downloadGuide: string;
      sending: string;
      successTemplate: string;
      error: string;
      consentNote: string;
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
