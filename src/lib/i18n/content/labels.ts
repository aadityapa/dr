import type { Locale } from "../types";

export type SharedLabels = {
  home: string;
  understanding: string;
  whatParentsNotice: string;
  howThisHelps: string;
  howOtHelps: string;
  benefits: string;
  learnMore: string;
  questionsParentsAsk: string;
  considerSupportIf: string;
  forParents: string;
  expertise: string;
  conditions: string;
  resources: string;
  bookConsultation: string;
  askQuestion: string;
  exploreExpertise: string;
  moreArticles: string;
  readyNextStep: string;
  byAuthor: string;
  readTime: string;
  lastUpdated: string;
  whyChoose: string;
  servicesOffered: string;
  areasServed: string;
  localQuestions: string;
  certifications: string;
  stillHaveQuestions: string;
  viewAllExpertise: string;
};

const en: SharedLabels = {
  home: "Home",
  understanding: "Understanding",
  whatParentsNotice: "What Parents May Notice",
  howThisHelps: "How This Helps",
  howOtHelps: "How Occupational Therapy Can Help",
  benefits: "Benefits",
  learnMore: "Learn More",
  questionsParentsAsk: "Questions Parents Ask",
  considerSupportIf: "Consider Seeking Support If",
  forParents: "For Parents",
  expertise: "Expertise",
  conditions: "Conditions",
  resources: "Resources",
  bookConsultation: "Book a Consultation",
  askQuestion: "Ask a Question",
  exploreExpertise: "Explore Our Expertise",
  moreArticles: "More Articles",
  readyNextStep: "Ready to take the next step?",
  byAuthor: "By",
  readTime: "read",
  lastUpdated: "Last updated",
  whyChoose: "Why Families Choose Us",
  servicesOffered: "Services We Offer",
  areasServed: "Areas We Serve",
  localQuestions: "Local Questions",
  certifications: "Certifications",
  stillHaveQuestions: "Still have questions?",
  viewAllExpertise: "View All Expertise",
};

const hi: SharedLabels = {
  home: "होम",
  understanding: "समझना",
  whatParentsNotice: "माता-पिता क्या देख सकते हैं",
  howThisHelps: "यह कैसे मदद करता है",
  howOtHelps: "व्यावसायिक चिकित्सा कैसे मदद कर सकती है",
  benefits: "फ़ायदे",
  learnMore: "और जानें",
  questionsParentsAsk: "माता-पिता के सवाल",
  considerSupportIf: "सहायता पर विचार करें अगर",
  forParents: "माता-पिता के लिए",
  expertise: "विशेषज्ञता",
  conditions: "स्थितियाँ",
  resources: "संसाधन",
  bookConsultation: "परामर्श बुक करें",
  askQuestion: "सवाल पूछें",
  exploreExpertise: "हमारी विशेषज्ञता देखें",
  moreArticles: "और लेख",
  readyNextStep: "अगला कदम उठाने के लिए तैयार?",
  byAuthor: "लेखक",
  readTime: "पढ़ें",
  lastUpdated: "अंतिम अपडेट",
  whyChoose: "परिवार हमें क्यों चुनते हैं",
  servicesOffered: "हमारी सेवाएँ",
  areasServed: "हम जहाँ सेवा देते हैं",
  localQuestions: "स्थानीय सवाल",
  certifications: "प्रमाणपत्र",
  stillHaveQuestions: "अभी भी सवाल हैं?",
  viewAllExpertise: "सभी विशेषज्ञता देखें",
};

const mr: SharedLabels = {
  home: "होम",
  understanding: "समजून घेणे",
  whatParentsNotice: "पालक काय पाहू शकतात",
  howThisHelps: "हे कसे मदत करते",
  howOtHelps: "व्यावसायिक चिकित्सा कशी मदत करू शकते",
  benefits: "फायदे",
  learnMore: "अधिक जाणून घ्या",
  questionsParentsAsk: "पालकांचे प्रश्न",
  considerSupportIf: "साहाय्याचा विचार करा जर",
  forParents: "पालकांसाठी",
  expertise: "तज्ज्ञता",
  conditions: "स्थिती",
  resources: "संसाधने",
  bookConsultation: "सल्ला बुक करा",
  askQuestion: "प्रश्न विचारा",
  exploreExpertise: "आमची तज्ज्ञता पहा",
  moreArticles: "अधिक लेख",
  readyNextStep: "पुढचा पाऊल उचलण्यास तयार?",
  byAuthor: "लेखक",
  readTime: "वाचा",
  lastUpdated: "शेवटचे अपडेट",
  whyChoose: "कुटुंबे आम्हाला का निवडतात",
  servicesOffered: "आमच्या सेवा",
  areasServed: "आम्ही जिथे सेवा देतो",
  localQuestions: "स्थानिक प्रश्न",
  certifications: "प्रमाणपत्रे",
  stillHaveQuestions: "अजून प्रश्न आहेत?",
  viewAllExpertise: "सर्व तज्ज्ञता पहा",
};

export function getLabels(locale: Locale): SharedLabels {
  if (locale === "hi") return hi;
  if (locale === "mr") return mr;
  return en;
}
