import type { Locale } from "../types";

export type ServiceDetailShells = {
  kicker: string;
  ageGroup: string;
  relatedConditions: string;
  deepDiveKicker: string;
  deepDiveTitle: string;
  signsTitle: string;
  parentGuideTitle: string;
  researchTitle: string;
  outcomesTitle: string;
  whenToSeekHelp: string;
  overviewKicker: string;
  overviewTitle: string;
  whatAtHome: string;
  mightHelpIf: string;
  familiesNotice: string;
  sessionFeelsLike: string;
  workToward: string;
  whenReachOut: string;
  ourProcess: string;
  caseExamplesTitle: string;
  caseExamplesDescription: string;
  parentGuidanceTitle: string;
  relatedConditionsLearn: string;
  faqTitle: string;
  listTitles: {
    areasAddressed: string;
    brainGymSupports: string;
    skillsDeveloped: string;
    benefits: string;
  };
};

const en: ServiceDetailShells = {
  kicker: "Service",
  ageGroup: "Age group:",
  relatedConditions: "Related Conditions",
  deepDiveKicker: "Deep Dive",
  deepDiveTitle: "Comprehensive Overview",
  signsTitle: "Signs Your Child May Need This Program",
  parentGuideTitle: "Parent Guide",
  researchTitle: "Research & Evidence",
  outcomesTitle: "Expected Outcomes",
  whenToSeekHelp: "When to Seek Help",
  overviewKicker: "Overview",
  overviewTitle: "What you need to know",
  whatAtHome: "What this looks like at home",
  mightHelpIf: "This might help if...",
  familiesNotice: "What families often notice",
  sessionFeelsLike: "What a session feels like",
  workToward: "What we work toward",
  whenReachOut: "When to reach out",
  ourProcess: "Our Process",
  caseExamplesTitle: "Case Examples",
  caseExamplesDescription: "Real progress patterns we see in our Kandivali clinic.",
  parentGuidanceTitle: "Parent Guidance",
  relatedConditionsLearn: "Learn More About Related Conditions",
  faqTitle: "Frequently Asked Questions",
  listTitles: {
    areasAddressed: "Areas Addressed",
    brainGymSupports: "Brain Gym® Supports",
    skillsDeveloped: "Skills Developed",
    benefits: "Benefits",
  },
};

const hi: ServiceDetailShells = {
  kicker: "सेवा",
  ageGroup: "आयु समूह:",
  relatedConditions: "संबंधित स्थितियाँ",
  deepDiveKicker: "गहराई से",
  deepDiveTitle: "विस्तृत अवलोकन",
  signsTitle: "संकेत जब आपके बच्चे को यह कार्यक्रम चाहिए",
  parentGuideTitle: "माता-पिता मार्गदर्शिका",
  researchTitle: "अनुसंधान और साक्ष्य",
  outcomesTitle: "अपेक्षित परिणाम",
  whenToSeekHelp: "कब सहायता लें",
  overviewKicker: "अवलोकन",
  overviewTitle: "जो जानना ज़रूरी है",
  whatAtHome: "घर पर यह कैसा दिखता है",
  mightHelpIf: "यह मदद कर सकता है अगर...",
  familiesNotice: "परिवार अक्सर क्या देखते हैं",
  sessionFeelsLike: "एक सत्र कैसा लगता है",
  workToward: "हम किस ओर काम करते हैं",
  whenReachOut: "कब संपर्क करें",
  ourProcess: "हमारी प्रक्रिया",
  caseExamplesTitle: "उदाहरण",
  caseExamplesDescription: "हमारे कांदिवली क्लिनिक में देखी जाने वाली वास्तविक प्रगति।",
  parentGuidanceTitle: "माता-पिता मार्गदर्शन",
  relatedConditionsLearn: "संबंधित स्थितियों के बारे में और जानें",
  faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
  listTitles: {
    areasAddressed: "कवर किए गए क्षेत्र",
    brainGymSupports: "Brain Gym® सहायता",
    skillsDeveloped: "विकसित कौशल",
    benefits: "फ़ायदे",
  },
};

const mr: ServiceDetailShells = {
  kicker: "सेवा",
  ageGroup: "वयोगट:",
  relatedConditions: "संबंधित स्थिती",
  deepDiveKicker: "सखोल माहिती",
  deepDiveTitle: "सविस्तर आढावा",
  signsTitle: "तुमच्या मुलाला हा कार्यक्रम कधी लागू शकतो",
  parentGuideTitle: "पालकांसाठी मार्गदर्शन",
  researchTitle: "संशोधन आणि पुरावा",
  outcomesTitle: "अपेक्षित परिणाम",
  whenToSeekHelp: "कधी मदत घ्यावी",
  overviewKicker: "आढावा",
  overviewTitle: "माहित असणे महत्त्वाचे",
  whatAtHome: "घरात हे कसे दिसते",
  mightHelpIf: "हे मदत करू शकते जर...",
  familiesNotice: "कुटुंबे अनेकदा काय पाहतात",
  sessionFeelsLike: "सत्र कसे वाटते",
  workToward: "आम्ही कशाकडे काम करतो",
  whenReachOut: "कधी संपर्क साधावा",
  ourProcess: "आमची प्रक्रिया",
  caseExamplesTitle: "उदाहरणे",
  caseExamplesDescription: "कांदिवली क्लिनिकमध्ये आम्ही पाहतो ती प्रगती.",
  parentGuidanceTitle: "पालकांसाठी सल्ला",
  relatedConditionsLearn: "संबंधित स्थितींबद्दल अधिक जाणून घ्या",
  faqTitle: "वारंवार विचारले जाणारे प्रश्न",
  listTitles: {
    areasAddressed: "समाविष्ट क्षेत्रे",
    brainGymSupports: "Brain Gym® सहाय्य",
    skillsDeveloped: "विकसित कौशल्ये",
    benefits: "फायदे",
  },
};

const shells: Record<Locale, ServiceDetailShells> = { en, hi, mr };

export function getServiceDetailShells(locale: Locale): ServiceDetailShells {
  return shells[locale] ?? en;
}
