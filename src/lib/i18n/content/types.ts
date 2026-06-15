export type SectionCopy = {
  kicker: string;
  title: string;
  description: string;
};

export type ConditionLocaleCopy = {
  title: string;
  reassurance: string;
  intro: string;
  symptoms: string[];
  challenges: string[];
  therapyRole: string[];
  benefits: string[];
  whenToBegin: string;
  faqs: { q: string; a: string }[];
};

export type LocaleContent = {
  common: {
    learnMore: string;
    viewAll: string;
    viewAllArrow: string;
    readFullGuide: string;
    step: string;
    discover: string;
    previousRoom: string;
    nextRoom: string;
    basedOnGoogleReviews: string;
    viewAllGoogleReviews: string;
    orReadMoreOn: string;
    testimonialsPage: string;
    storiesConsent: string;
    learnMoreBtn: string;
    bookConsultation: string;
    startConversation: string;
  };
  parentMessage: {
    kicker: string;
    title: string;
    paragraphs: string[];
    cta: string;
    bookConversation: string;
    askQuestion: string;
  };
  parentWondering: SectionCopy & {
    items: { question: string; answer: string }[];
  };
  servicesPreview: SectionCopy & { viewAllServices: string };
  whoWeHelp: SectionCopy & { seeAllConditions: string };
  therapyJourney: SectionCopy & {
    fullJourney: string;
    steps: { title: string; description: string }[];
  };
  doctor: SectionCopy & {
    bio: string;
    stats: { value: string; label: string }[];
    qualifications: string[];
    fullProfile: string;
    bookConsultation: string;
  };
  certifications: { title: string; description: string; viewAll: string };
  successStories: SectionCopy & {
    consent: string;
    readMore: string;
    items: { parent: string; quote: string; milestone: string }[];
  };
  googleReviews: SectionCopy & {
    basedOnReviews: string;
    viewAll: string;
    orReadMore: string;
    testimonialsLink: string;
    items: { author: string; text: string }[];
  };
  clinicTour: SectionCopy & {
    fullGallery: string;
    bookVisit: string;
    rooms: { title: string; description: string; hotspot: string }[];
  };
  homeFaq: SectionCopy & {
    browseAll: string;
    items: { q: string; a: string }[];
  };
  contact: SectionCopy & {
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    bookFirstVisit: string;
    callbackTitle: string;
    callbackDescription: string;
  };
  heroTrust: { items: { label: string; sub: string }[] };
  heroCard: { years: string; subtitle: string };
  services: Record<string, { title: string; headline: string }>;
  conditions: Record<string, Pick<ConditionLocaleCopy, "title" | "reassurance">>;
  conditionDetails: Record<string, ConditionLocaleCopy>;
  pages: {
    conditionsList: SectionCopy & { cta: string };
    servicesList: SectionCopy & { cta: string };
    conditionsDetail: {
      kicker: string;
      symptoms: string;
      challenges: string;
      therapyRole: string;
      benefits: string;
      whenToReachOut: string;
      whenToBeginTitle: string;
      outcomes: string;
    };
  };
};
