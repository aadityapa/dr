import { siteConfig } from "@/lib/site-data";

import type { Locale } from "../types";

export type PageShell = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  description: string;
};

export type PageShells = {
  appointment: PageShell & { clinicHours: string };
  screening: PageShell & { formTitle: string; formDescription: string; breadcrumb: string };
  contact: PageShell;
  gallery: PageShell;
  resources: PageShell & { readGuide: string; minRead: string };
  library: PageShell;
  outcomes: PageShell;
  testimonials: PageShell;
  faqs: PageShell & {
    stillHaveQuestions: string;
    stillDescription: string;
    searchPlaceholder: string;
    noResults: string;
    questionCount: string;
  };
  invite: PageShell;
  locations: PageShell & { breadcrumb: string };
  expertiseList: PageShell;
  expertise: {
    heroBadge: string;
    illustrationCaption: string;
    illustrationSubcaption: string;
    trustBadges: [string, string, string];
    searchPlaceholder: string;
    clearSearch: string;
    filterLabel: string;
    filterAll: string;
    noResults: string;
    categories: {
      movement: string;
      sensory: string;
      motor: string;
      feeding: string;
      aquatic: string;
      learning: string;
      neurological: string;
    };
    therapyFocusLabel: string;
    therapyFocus: Record<string, string>;
    trustKicker: string;
    trustTitle: string;
    trustCards: [{ title: string; description: string }, { title: string; description: string }, { title: string; description: string }];
    processKicker: string;
    processTitle: string;
    processSteps: [string, string, string, string, string];
    processStepDescriptions: [string, string, string, string, string];
    ctaTitle: string;
    ctaDescription: string;
    callCta: string;
    whatsappCta: string;
  };
  conditions: {
    heroBadge: string;
    illustrationCaption: string;
    illustrationSubcaption: string;
    trustBadges: [string, string, string];
    searchPlaceholder: string;
    clearSearch: string;
    filterLabel: string;
    filterAll: string;
    noResults: string;
    categories: {
      development: string;
      sensory: string;
      motor: string;
      neurological: string;
      learning: string;
      behavioral: string;
    };
    therapyFocusLabel: string;
    therapyFocus: Record<string, string>;
    trustKicker: string;
    trustTitle: string;
    trustCards: [{ title: string; description: string }, { title: string; description: string }, { title: string; description: string }];
    processKicker: string;
    processTitle: string;
    processSteps: [string, string, string, string, string];
    processStepDescriptions: [string, string, string, string, string];
    ctaTitle: string;
    ctaDescription: string;
    callCta: string;
    whatsappCta: string;
  };
  about: Omit<PageShell, "title" | "description"> & {
    title: string;
    description: string;
    credentials: string[];
    bookConversation: string;
    inviteCta: string;
    sections: {
      heroBadge: string;
      watchJourney: string;
      missionKicker: string;
      missionTitle: string;
      journeyKicker: string;
      journeyTitle: string;
      journeySteps: [string, string, string, string];
      trustKicker: string;
      trustTitle: string;
      statsKicker: string;
      statsTitle: string;
      statLabels: {
        years: string;
        expertise: string;
        programs: string;
        partners: string;
      };
      certificationsTitle: string;
      certificationsDescription: string;
      clinicTitle: string;
      clinicDescription: string;
      testimonialsKicker: string;
      testimonialsTitle: string;
      testimonialsDescription: string;
      faqKicker: string;
      faqTitle: string;
      faqDescription: string;
      browseAllFaqs: string;
      ctaTitle: string;
      ctaDescription: string;
      callCta: string;
      whatsappCta: string;
      readMoreStories: string;
      viewGallery: string;
    };
  };
  articleFooter: { title: string; description: string; book: string; more: string };
  geoFaqs: {
    condition: {
      whatIs: (title: string) => string;
      whatIsAnswer: (title: string) => string;
      howOtHelps: (title: string) => string;
      howOtHelpsAnswer: string;
      whenSeek: (title: string) => string;
      whenSeekAnswer: string;
      whatNext: (doctor: string) => string;
      whatNextAnswer: (doctor: string) => string;
    };
    expertise: {
      whatIs: (title: string) => string;
      whatIsAnswer: (title: string) => string;
      howHelps: (title: string) => string;
      howHelpsAnswer: string;
      whenConsider: (title: string) => string;
      whenConsiderAnswer: string;
      whatNext: (doctor: string) => string;
      whatNextAnswer: (area: string, doctor: string) => string;
    };
  };
};

const en: PageShells = {
  appointment: {
    metaTitle: "Book Pediatric OT Consultation",
    metaDescription: `Book a pediatric occupational therapy consultation with ${siteConfig.doctorName} at ${siteConfig.name}, Kandivali West, Mumbai.`,
    kicker: "Consultation",
    title: "Tell us about your child",
    description: "Fill in the form below and we'll reach out within 24 hours. No pressure — just a warm first step.",
    clinicHours: "Clinic hours: Mon–Fri 9 AM – 5 PM · Sat 9 AM – 12 PM",
  },
  screening: {
    metaTitle: "Basic Sensory Screening Questionnaire",
    metaDescription: `Free basic sensory screening for children in Mumbai from ${siteConfig.doctorName}.`,
    kicker: "Lead Screening",
    title: "Basic Sensory Screening Questionnaire",
    description: "A helpful starting point for parents wondering whether their child may benefit from occupational therapy.",
    breadcrumb: "Sensory Screening",
    formTitle: "Tell Us About Your Child",
    formDescription: "This questionnaire is not a diagnosis — it helps us understand your concerns and recommend next steps.",
  },
  contact: {
    metaTitle: "Contact Us",
    metaDescription: "Contact Thrive With Sharuja for pediatric OT in Kandivali West, Mumbai.",
    kicker: "Get in Touch",
    title: "We're here when you're ready",
    description: "Share your concern — we'll call or WhatsApp you within 24 hours.",
  },
  gallery: {
    metaTitle: "Clinic Gallery",
    metaDescription: "Tour our child-friendly pediatric OT clinic in Kandivali West, Mumbai.",
    kicker: "Our Space",
    title: "A place where children feel safe to explore",
    description: "Soft colours, room to move, and corners for quiet when it's all too much.",
  },
  resources: {
    metaTitle: "Parent Resources & Articles",
    metaDescription: "Expert parent guides on pediatric OT, autism, ADHD, and child development from Dr. Sharuja Sarap.",
    kicker: "Resources",
    title: "Guides for thoughtful parents",
    description: "Evidence-informed articles to help you understand what you're seeing.",
    readGuide: "Read guide →",
    minRead: "min read",
  },
  library: {
    metaTitle: "Parent Library",
    metaDescription: "Downloadable parent resources from Thrive With Sharuja, Kandivali West, Mumbai.",
    kicker: "Library",
    title: "Resources you can take home",
    description: "Practical guides for parents navigating sensory, motor, and developmental concerns.",
  },
  outcomes: {
    metaTitle: "Therapy Outcomes",
    metaDescription: "What families often experience through pediatric OT at Thrive With Sharuja, Mumbai.",
    kicker: "Outcomes",
    title: "Progress looks different for every child",
    description: "Common areas where families notice meaningful change — always individual, always celebrated in small steps.",
  },
  testimonials: {
    metaTitle: "Testimonials & Milestones",
    metaDescription: "Stories shared by families at Thrive With Sharuja, Kandivali West, Mumbai.",
    kicker: "Stories",
    title: "Words that mean a lot to us",
    description: "Shared with parental consent. Every child's path is different.",
  },
  faqs: {
    metaTitle: "FAQs — Pediatric OT Questions Answered",
    metaDescription: `100+ answers about pediatric OT from ${siteConfig.doctorName} in Mumbai.`,
    kicker: "FAQs",
    title: "Questions Parents Ask Us",
    description: `Honest answers from ${siteConfig.doctorName} — OT, autism, ADHD, aquatic therapy, Brain Gym, and more.`,
    stillHaveQuestions: "Still have questions?",
    stillDescription: "Dr. Sharuja Sarap and our team are happy to help. Book a consultation or call us directly.",
    searchPlaceholder: "Search FAQs...",
    noResults: "No FAQs match your search. Try different keywords.",
    questionCount: "questions across categories",
  },
  invite: {
    metaTitle: "Invite Sharuja",
    metaDescription: "Invite Dr. Sharuja Sarap for parent programs and school workshops in Mumbai.",
    kicker: "Invite Sharuja",
    title: "Bring expert guidance to your community",
    description: "Available for parent programs, school workshops, and community events.",
  },
  locations: {
    metaTitle: "Locations We Serve",
    metaDescription: "Pediatric OT in Kandivali West and across Mumbai with Dr. Sharuja Sarap.",
    kicker: "Locations",
    title: "Serving families across Mumbai",
    description: "Based in Kandivali West — welcoming families from across the city.",
    breadcrumb: "Locations",
  },
  expertiseList: {
    metaTitle: "Expertise & Approaches — Pediatric OT Mumbai",
    metaDescription:
      "Eleven certified pediatric OT approaches at Thrive With Sharuja, Kandivali — Brain Gym, sensory integration, aquatic therapy, handwriting, and more.",
    kicker: "Expertise & Approaches",
    title: "Looking Beyond a Diagnosis",
    description:
      "Evidence-informed therapeutic approaches tailored to each child's strengths — explained in plain language for Mumbai families.",
  },
  expertise: {
    heroBadge: "Expertise & Approaches",
    illustrationCaption: "Every child is unique",
    illustrationSubcaption: "Individualised, evidence-informed pediatric OT",
    trustBadges: ["Certified Programmes", "Whole-Child Focus", "Family-Centred Care"],
    searchPlaceholder: "Search approaches…",
    clearSearch: "Clear search",
    filterLabel: "Filter by category",
    filterAll: "All",
    noResults: "No approaches match your search. Try a different term or category.",
    categories: {
      movement: "Movement",
      sensory: "Sensory",
      motor: "Motor",
      feeding: "Feeding",
      aquatic: "Aquatic",
      learning: "Learning",
      neurological: "Neurological",
    },
    therapyFocusLabel: "Focus",
    therapyFocus: {
      "brain-gym": "Learning & Movement",
      "double-doodle-play": "Creativity & Writing",
      "sensory-integration": "Sensory Regulation",
      rmti: "Foundational Movement",
      "handwriting-without-tears": "Handwriting",
      "oral-placement-therapy": "Feeding & Oral Motor",
      "aquatic-therapy": "Water-Based Therapy",
      piastm: "Soft Tissue",
      "kinesio-taping": "Posture & Stability",
      mnri: "Reflex Integration",
      kdct: "Mobility & Recovery",
    },
    trustKicker: "Our Philosophy",
    trustTitle: "Why Families Choose These Approaches",
    trustCards: [
      {
        title: "Evidence-Informed Care",
        description:
          "Each programme is grounded in specialised training and integrated thoughtfully into your child's individual therapy plan.",
      },
      {
        title: "Whole-Child Perspective",
        description:
          "We look beyond isolated skills to understand how movement, sensory processing, attention, and emotions work together in daily life.",
      },
      {
        title: "Family Partnership",
        description:
          "Parents receive practical guidance and warm support — so progress continues beyond the clinic into everyday routines.",
      },
    ],
    processKicker: "Our Approach",
    processTitle: "The Therapy Process",
    processSteps: [
      "Assessment",
      "Personalised Plan",
      "Therapy Sessions",
      "Home Program",
      "Progress Review",
    ],
    processStepDescriptions: [
      "A warm first visit to understand your child's strengths, needs, and daily routines.",
      "A tailored plan built around your child's goals and your family's priorities.",
      "Play-based, evidence-informed sessions in our child-friendly Kandivali clinic.",
      "Practical activities and strategies you can weave into everyday life at home.",
      "Regular check-ins to celebrate progress and adjust support as your child grows.",
    ],
    ctaTitle: "Let's Support Your Child Together",
    ctaDescription: `Book a consultation with ${siteConfig.doctorName} at our Kandivali West clinic.`,
    callCta: "Call Us",
    whatsappCta: "WhatsApp",
  },
  conditions: {
    heroBadge: "Supporting Every Child's Journey",
    illustrationCaption: "Every child is unique",
    illustrationSubcaption: "Personalised, evidence-based pediatric OT",
    trustBadges: ["Early Identification", "Evidence-Based Therapy", "Individual Care Plans"],
    searchPlaceholder: "Search conditions…",
    clearSearch: "Clear search",
    filterLabel: "Filter by category",
    filterAll: "All",
    noResults: "No conditions match your search. Try a different term or category.",
    categories: {
      development: "Development",
      sensory: "Sensory",
      motor: "Motor",
      neurological: "Neurological",
      learning: "Learning",
      behavioral: "Behavioral",
    },
    therapyFocusLabel: "Therapy Focus",
    therapyFocus: {
      "autism-spectrum-disorder": "Sensory & Social",
      adhd: "Executive Function",
      "cerebral-palsy": "Motor & Independence",
      "developmental-delay": "Foundational Skills",
      "sensory-processing-difficulties": "Sensory Regulation",
      "learning-difficulties": "Academic Skills",
      "motor-coordination-challenges": "Motor Planning",
      "handwriting-difficulties": "Fine Motor & Writing",
      "attention-difficulties": "Focus & Regulation",
    },
    trustKicker: "Early Intervention",
    trustTitle: "Why Early Intervention Matters",
    trustCards: [
      {
        title: "Earlier Support",
        description:
          "Recognising concerns early opens more opportunities for skill-building during the years when children's brains are most adaptable.",
      },
      {
        title: "Better Outcomes",
        description:
          "Targeted therapy during key developmental windows helps children participate more confidently in school, play, and daily routines.",
      },
      {
        title: "Family Guidance",
        description:
          "Parents receive practical strategies and warm support — so progress continues beyond the clinic into everyday life at home.",
      },
    ],
    processKicker: "Our Approach",
    processTitle: "The Therapy Process",
    processSteps: [
      "Assessment",
      "Personalised Plan",
      "Therapy Sessions",
      "Home Program",
      "Progress Review",
    ],
    processStepDescriptions: [
      "A warm first visit to understand your child's strengths, needs, and daily routines.",
      "A tailored plan built around your child's goals and your family's priorities.",
      "Play-based, evidence-informed sessions in our child-friendly Kandivali clinic.",
      "Practical activities and strategies you can weave into everyday life at home.",
      "Regular check-ins to celebrate progress and adjust support as your child grows.",
    ],
    ctaTitle: "Let's Support Your Child Together",
    ctaDescription: `Book a consultation with ${siteConfig.doctorName} at our Kandivali West clinic.`,
    callCta: "Call Us",
    whatsappCta: "WhatsApp",
  },
  about: {
    metaTitle: "About Dr. Sharuja Sarap",
    metaDescription: "Pediatric OT in Kandivali West, Mumbai — 18+ years supporting children and families.",
    kicker: "About Me",
    title: "Hello,",
    description: "",
    credentials: [
      "I am Dr. Sharuja",
      "Paediatric occupational therapist",
      "Aquatic therapist",
      "Brain gym instructor",
    ],
    bookConversation: "Book a Conversation",
    inviteCta: "Invite Sharuja to Your Program",
    sections: {
      heroBadge: "Meet Your Therapist",
      watchJourney: "Watch My Journey",
      missionKicker: "Philosophy",
      missionTitle: "My Mission",
      journeyKicker: "Background",
      journeyTitle: "My Journey",
      journeySteps: [
        "Years of Clinical Practice",
        "Academic Foundation",
        "Specialized Training",
        "Research & Community",
      ],
      trustKicker: "Family-Centered Care",
      trustTitle: "Why Parents Trust Me",
      statsKicker: "Experience",
      statsTitle: "Numbers That Reflect Real Work",
      statLabels: {
        years: "Years of Experience",
        expertise: "Areas of Expertise",
        programs: "Program Types",
        partners: "Partner Settings",
      },
      certificationsTitle: "Certifications & Training",
      certificationsDescription:
        "Advanced international certifications woven into evidence-based pediatric care.",
      clinicTitle: "A Day At My Clinic",
      clinicDescription:
        "Warm, child-friendly spaces designed for play-led therapy and confident participation.",
      testimonialsKicker: "Family Stories",
      testimonialsTitle: "What Parents Say",
      testimonialsDescription: "Real stories from families who found hope, support, and meaningful growth.",
      faqKicker: "Questions",
      faqTitle: "Common Questions About Me",
      faqDescription: "Honest answers about working with Dr. Sharuja Sarap.",
      browseAllFaqs: "Browse All FAQs",
      ctaTitle: "Ready to take the next step?",
      ctaDescription: `Book a consultation with ${siteConfig.doctorName} at our Kandivali West clinic.`,
      callCta: "Call Us",
      whatsappCta: "WhatsApp",
      readMoreStories: "Read More Stories",
      viewGallery: "View Full Gallery",
    },
  },
  articleFooter: {
    title: "Ready to take the next step?",
    description: `Book a consultation with ${siteConfig.doctorName} at our Kandivali West clinic.`,
    book: "Book Consultation",
    more: "More Articles",
  },
  geoFaqs: {
    condition: {
      whatIs: (title) => `What is ${title}?`,
      whatIsAnswer: (title) =>
        `${title} affects how children experience daily life. At ${siteConfig.name} in Kandivali West, Mumbai, we help parents understand what they're seeing.`,
      howOtHelps: (title) => `How can OT help a child with ${title}?`,
      howOtHelpsAnswer: "Pediatric OT focuses on everyday skills through play-based, family-centred sessions.",
      whenSeek: (title) => `When should we seek support for ${title}?`,
      whenSeekAnswer: "If daily routines feel harder than they should, that's enough to start a conversation.",
      whatNext: (doctor) => `What happens after we contact ${doctor}?`,
      whatNextAnswer: () => "We begin with a warm first visit: listening, gentle observation, and plain-language explanation.",
    },
    expertise: {
      whatIs: (title) => `What is ${title}?`,
      whatIsAnswer: (title) => `${title} is one of the approaches Dr. Sharuja Sarap uses at her Kandivali West clinic.`,
      howHelps: (title) => `How does ${title} help my child?`,
      howHelpsAnswer: "We match techniques to what your child needs for participation and confidence.",
      whenConsider: (title) => `When should we consider ${title}?`,
      whenConsiderAnswer: "If daily life feels harder than it should, a consultation can help.",
      whatNext: () => "What happens next if we book a consultation in Kandivali?",
      whatNextAnswer: (area, doctor) => `You'll meet ${doctor} and we outline how ${area} may fit your child's plan.`,
    },
  },
};

const hi: PageShells = {
  appointment: {
    metaTitle: "बाल OT परामर्श बुक करें",
    metaDescription: `${siteConfig.name}, कांदिवली में ${siteConfig.doctorName} के साथ बाल व्यावसायिक चिकित्सा परामर्श बुक करें।`,
    kicker: "परामर्श",
    title: "अपने बच्चे के बारे में बताएँ",
    description: "नीचे फ़ॉर्म भरें — 24 घंटे में संपर्क करेंगे। कोई दबाव नहीं, बस एक गर्म पहला कदम।",
    clinicHours: "क्लिनिक समय: सोम–शुक्र 9–5 · शनि 9–12",
  },
  screening: {
    metaTitle: "बुनियादी संवेदी स्क्रीनिंग प्रश्नावली",
    metaDescription: `मुंबई में बच्चों के लिए मुफ़्त संवेदी स्क्रीनिंग — ${siteConfig.doctorName}।`,
    kicker: "स्क्रीनिंग",
    title: "बुनियादी संवेदी स्क्रीनिंग प्रश्नावली",
    description: "उन माता-पिता के लिए जो सोच रहे हैं कि OT फायदेमंद हो सकती है।",
    breadcrumb: "संवेदी स्क्रीनिंग",
    formTitle: "अपने बच्चे के बारे में बताएँ",
    formDescription: "यह निदान नहीं — आपकी चिंताओं को समझने और अगले कदम सुझाने में मदद करता है।",
  },
  contact: {
    metaTitle: "संपर्क करें",
    metaDescription: "कांदिवली, मुंबई में थ्राइव विथ शारुजा से संपर्क करें।",
    kicker: "संपर्क",
    title: "जब आप तैयार हों, हम यहाँ हैं",
    description: "अपनी चिंता साझा करें — 24 घंटे में कॉल या WhatsApp करेंगे।",
  },
  gallery: {
    metaTitle: "क्लिनिक गैलरी",
    metaDescription: "कांदिवली में हमारे बच्चों के अनुकूल OT क्लिनिक की झलक।",
    kicker: "हमारी जगह",
    title: "जहाँ बच्चे सुरक्षित महसूस करें",
    description: "कोमल रंग, हिलने की जगह, और शांति के कोने।",
  },
  resources: {
    metaTitle: "माता-पिता संसाधन और लेख",
    metaDescription: "बाल OT, ऑटिज़म, ADHD पर विशेषज्ञ मार्गदर्शन — डॉ. शारुजा सराफ।",
    kicker: "संसाधन",
    title: "विचारशील माता-पिता के लिए गाइड",
    description: "आप जो देख रहे हैं उसे समझने में मदद करने वाले लेख।",
    readGuide: "गाइड पढ़ें →",
    minRead: "मिनट पढ़ें",
  },
  library: {
    metaTitle: "माता-पिता पुस्तकालय",
    metaDescription: "कांदिवली से डाउनलोड योग्य माता-पिता संसाधन।",
    kicker: "पुस्तकालय",
    title: "घर ले जाने योग्य संसाधन",
    description: "संवेदी, मोटर और विकास संबंधी चिंताओं के लिए व्यावहारिक गाइड।",
  },
  outcomes: {
    metaTitle: "थेरेपी परिणाम",
    metaDescription: "थ्राइव विथ शारुजा में परिवार अक्सर क्या अनुभव करते हैं।",
    kicker: "परिणाम",
    title: "हर बच्चे की प्रगति अलग दिखती है",
    description: "जहाँ परिवार सार्थक बदलाव देखते हैं — हमेशा व्यक्तिगत, हमेशा छोटे कदमों में।",
  },
  testimonials: {
    metaTitle: "प्रशंसापत्र और उपलब्धियाँ",
    metaDescription: "थ्राइव विथ शारुजा परिवारों की कहानियाँ।",
    kicker: "कहानियाँ",
    title: "शब्द जो हमारे लिए बहुत मायने रखते हैं",
    description: "माता-पिता की सहमति से साझा। हर बच्चे का रास्ता अलग है।",
  },
  faqs: {
    metaTitle: "सामान्य प्रश्न — बाल OT",
    metaDescription: `${siteConfig.doctorName} से 100+ जवाब, मुंबई।`,
    kicker: "सामान्य प्रश्न",
    title: "माता-पिता के सवाल",
    description: `${siteConfig.doctorName} से ईमानदार जवाब — OT, ऑटिज़म, ADHD, जल चिकित्सा, Brain Gym और अधिक।`,
    stillHaveQuestions: "अभी भी सवाल हैं?",
    stillDescription: "डॉ. शारुजा और हमारी टीम मदद के लिए तैयार हैं। परामर्श बुक करें या सीधे कॉल करें।",
    searchPlaceholder: "सामान्य प्रश्न खोजें...",
    noResults: "कोई प्रश्न नहीं मिला। अलग कीवर्ड आज़माएँ।",
    questionCount: "श्रेणियों में प्रश्न",
  },
  invite: {
    metaTitle: "शारुजा को आमंत्रित करें",
    metaDescription: "मुंबई में माता-पिता कार्यक्रम और स्कूल कार्यशालाओं के लिए डॉ. शारुजा को आमंत्रित करें।",
    kicker: "शारुजा को आमंत्रित करें",
    title: "अपने समुदाय में विशेषज्ञ मार्गदर्शन लाएँ",
    description: "माता-पिता शिक्षा, स्कूल कार्यशालाएँ और सामुदायिक कार्यक्रमों के लिए उपलब्ध।",
  },
  locations: {
    metaTitle: "हम जहाँ सेवा देते हैं",
    metaDescription: "कांदिवली और पूरे मुंबई में बाल OT — डॉ. शारुजा सराफ।",
    kicker: "स्थान",
    title: "पूरे मुंबई के परिवारों की सेवा",
    description: "कांदिवली पश्चिम में आधारित — पूरे शहर से परिवारों का स्वागत।",
    breadcrumb: "स्थान",
  },
  expertiseList: {
    metaTitle: "विशेषज्ञता और दृष्टिकोण — बाल OT मुंबई",
    metaDescription:
      "कांदिवली में थ्राइव विथ शारुजा पर ग्यारह प्रमाणित बाल OT दृष्टिकोण — ब्रेन जिम, संवेदी एकीकरण, जल चिकित्सा, हस्तलेखन और अधिक।",
    kicker: "विशेषज्ञता और दृष्टिकोण",
    title: "निदान से आगे देखना",
    description: "हर बच्चे की ताकत के अनुसार साक्ष्य-सूचित दृष्टिकोण — मुंबई के परिवारों के लिए सादी भाषा में।",
  },
  expertise: {
    heroBadge: "विशेषज्ञता और दृष्टिकोण",
    illustrationCaption: "हर बच्चा अनोखा है",
    illustrationSubcaption: "व्यक्तिगत, साक्ष्य-आधारित बाल OT",
    trustBadges: ["प्रमाणित कार्यक्रम", "पूरे बच्चे पर ध्यान", "परिवार-केंद्रित देखभाल"],
    searchPlaceholder: "दृष्टिकोण खोजें…",
    clearSearch: "खोज साफ़ करें",
    filterLabel: "श्रेणी से फ़िल्टर करें",
    filterAll: "सभी",
    noResults: "कोई दृष्टिकोण आपकी खोज से मेल नहीं खाता। दूसरा शब्द या श्रेणी आज़माएँ।",
    categories: {
      movement: "गति",
      sensory: "संवेदी",
      motor: "मोटर",
      feeding: "खिलाना",
      aquatic: "जल चिकित्सा",
      learning: "सीखना",
      neurological: "न्यूरोलॉजिकल",
    },
    therapyFocusLabel: "फ़ोकस",
    therapyFocus: {
      "brain-gym": "सीखना और गति",
      "double-doodle-play": "रचनात्मकता और लेखन",
      "sensory-integration": "संवेदी नियमन",
      rmti: "मूलभूत गति",
      "handwriting-without-tears": "हस्तलेखन",
      "oral-placement-therapy": "खिलाना और मौखिक मोटर",
      "aquatic-therapy": "जल-आधारित थेरेपी",
      piastm: "सॉफ्ट टिशू",
      "kinesio-taping": "मुद्रा और स्थिरता",
      mnri: "रिफ्लेक्स एकीकरण",
      kdct: "गतिशीलता और रिकवरी",
    },
    trustKicker: "हमारा दर्शन",
    trustTitle: "परिवार इन दृष्टिकोणों को क्यों चुनते हैं",
    trustCards: [
      {
        title: "साक्ष्य-आधारित देखभाल",
        description: "प्रत्येक कार्यक्रम विशेष प्रशिक्षण पर आधारित है और आपके बच्चे की व्यक्तिगत योजना में सोच-समझकर जोड़ा जाता है।",
      },
      {
        title: "पूरे बच्चे का दृष्टिकोण",
        description: "हम अलग-अलग कौशलों से आगे देखते हैं — गति, संवेदी प्रसंस्करण, ध्यान और भावनाएँ दैनिक जीवन में कैसे जुड़ती हैं।",
      },
      {
        title: "परिवार के साथ साझेदारी",
        description: "माता-पिता को व्यावहारिक मार्गदर्शन और गर्म सहायता मिलती है — ताकि प्रगति क्लिनिक से आगे घर में भी जारी रहे।",
      },
    ],
    processKicker: "हमारा दृष्टिकोण",
    processTitle: "थेरेपी प्रक्रिया",
    processSteps: ["मूल्यांकन", "व्यक्तिगत योजना", "थेरेपी सत्र", "घरेलू कार्यक्रम", "प्रगति समीक्षा"],
    processStepDescriptions: [
      "आपके बच्चे की ताकत, ज़रूरतें और दैनिक दिनचर्या समझने के लिए एक गर्म पहली मुलाकात।",
      "आपके बच्चे के लक्ष्यों और परिवार की प्राथमिकताओं के आसपास बनी योजना।",
      "हमारे बच्चों के अनुकूल कांदिवली क्लिनिक में खेल-आधारित, साक्ष्य-सूचित सत्र।",
      "घरेलू जीवन में शामिल करने योग्य व्यावहारिक गतिविधियाँ और रणनीतियाँ।",
      "प्रगति का जश्न और बढ़ते बच्चे के अनुसार सहायता समायोजित करने के नियमित चेक-इन।",
    ],
    ctaTitle: "आइए मिलकर आपके बच्चे का साथ दें",
    ctaDescription: `कांदिवली पश्चिम क्लिनिक में ${siteConfig.doctorName} के साथ परामर्श बुक करें।`,
    callCta: "कॉल करें",
    whatsappCta: "व्हाट्सऐप",
  },
  conditions: {
    heroBadge: "हर बच्चे की यात्रा का साथ",
    illustrationCaption: "हर बच्चा अनोखा है",
    illustrationSubcaption: "व्यक्तिगत, साक्ष्य-आधारित बाल OT",
    trustBadges: ["शीघ्र पहचान", "साक्ष्य-आधारित थेरेपी", "व्यक्तिगत देखभाल योजनाएँ"],
    searchPlaceholder: "स्थितियाँ खोजें…",
    clearSearch: "खोज साफ़ करें",
    filterLabel: "श्रेणी से फ़िल्टर करें",
    filterAll: "सभी",
    noResults: "कोई स्थिति आपकी खोज से मेल नहीं खाती। दूसरा शब्द या श्रेणी आज़माएँ।",
    categories: {
      development: "विकास",
      sensory: "संवेदी",
      motor: "मोटर",
      neurological: "न्यूरोलॉजिकल",
      learning: "सीखना",
      behavioral: "व्यवहार",
    },
    therapyFocusLabel: "थेरेपी फ़ोकस",
    therapyFocus: {
      "autism-spectrum-disorder": "संवेदी और सामाजिक",
      adhd: "कार्यकारी कार्य",
      "cerebral-palsy": "मोटर और स्वतंत्रता",
      "developmental-delay": "मूलभूत कौशल",
      "sensory-processing-difficulties": "संवेदी नियमन",
      "learning-difficulties": "शैक्षणिक कौशल",
      "motor-coordination-challenges": "मोटर योजना",
      "handwriting-difficulties": "सूक्ष्म मोटर और लेखन",
      "attention-difficulties": "ध्यान और नियमन",
    },
    trustKicker: "शीघ्र हस्तक्षेप",
    trustTitle: "शीघ्र हस्तक्षेप क्यों महत्वपूर्ण है",
    trustCards: [
      {
        title: "पहले सहायता",
        description:
          "चिंताओं को जल्दी पहचानने से उन वर्षों में कौशल विकास के अधिक अवसर मिलते हैं जब बच्चों का मस्तिष्क सबसे अनुकूलनीय होता है।",
      },
      {
        title: "बेहतर परिणाम",
        description:
          "मुख्य विकासात्मक अवधि में लक्षित थेरेपी बच्चों को स्कूल, खेल और दैनिक दिनचर्या में अधिक आत्मविश्वास से भाग लेने में मदद करती है।",
      },
      {
        title: "परिवार मार्गदर्शन",
        description:
          "माता-पिता को व्यावहारिक रणनीतियाँ और गर्म सहायता मिलती है — ताकि प्रगति क्लिनिक से परे घर की रोज़मर्रा की ज़िंदगी में जारी रहे।",
      },
    ],
    processKicker: "हमारा दृष्टिकोण",
    processTitle: "थेरेपी प्रक्रिया",
    processSteps: [
      "मूल्यांकन",
      "व्यक्तिगत योजना",
      "थेरेपी सत्र",
      "घरेलू कार्यक्रम",
      "प्रगति समीक्षा",
    ],
    processStepDescriptions: [
      "आपके बच्चे की ताकत, ज़रूरतों और दैनिक दिनचर्या को समझने के लिए एक गर्म पहली मुलाकात।",
      "आपके बच्चे के लक्ष्यों और परिवार की प्राथमिकताओं के आसपास एक अनुकूलित योजना।",
      "हमारे बच्चों के अनुकूल कांदिवली क्लिनिक में खेल-आधारित, साक्ष्य-सूचित सत्र।",
      "व्यावहारिक गतिविधियाँ और रणनीतियाँ जिन्हें आप घर की रोज़मर्रा की ज़िंदगी में शामिल कर सकते हैं।",
      "प्रगति का जश्न मनाने और बच्चे के बढ़ने के साथ सहायता समायोजित करने के लिए नियमित जाँच।",
    ],
    ctaTitle: "आइए मिलकर आपके बच्चे का साथ दें",
    ctaDescription: `कांदिवली क्लिनिक में ${siteConfig.doctorName} के साथ परामर्श बुक करें।`,
    callCta: "कॉल करें",
    whatsappCta: "WhatsApp",
  },
  about: {
    metaTitle: "डॉ. शारुजा सराफ के बारे में",
    metaDescription: "कांदिवली में बाल OT — 18+ वर्षों से बच्चों और परिवारों की सेवा।",
    kicker: "मेरे बारे में",
    title: "नमस्ते,",
    description: "",
    credentials: [
      "मैं डॉ. शारुजा हूँ",
      "बाल चिकित्सा व्यावसायिक चिकित्सक",
      "जल चिकित्सक",
      "Brain gym प्रशिक्षक",
    ],
    bookConversation: "बातचीत बुक करें",
    inviteCta: "अपने कार्यक्रम में शारुजा को आमंत्रित करें",
    sections: {
      heroBadge: "अपनी थेरेपिस्ट से मिलें",
      watchJourney: "मेरी यात्रा देखें",
      missionKicker: "दर्शन",
      missionTitle: "मेरा मिशन",
      journeyKicker: "पृष्ठभूमि",
      journeyTitle: "मेरी यात्रा",
      journeySteps: [
        "वर्षों का नैदानिक अभ्यास",
        "शैक्षणिक आधार",
        "विशेष प्रशिक्षण",
        "अनुसंधान और समुदाय",
      ],
      trustKicker: "परिवार-केंद्रित देखभाल",
      trustTitle: "माता-पिता मुझ पर क्यों भरोसा करते हैं",
      statsKicker: "अनुभव",
      statsTitle: "वास्तविक काम को दर्शाने वाले आँकड़े",
      statLabels: {
        years: "वर्षों का अनुभव",
        expertise: "विशेषज्ञता के क्षेत्र",
        programs: "कार्यक्रम प्रकार",
        partners: "साझेदार सेटिंग्स",
      },
      certificationsTitle: "प्रमाणपत्र और प्रशिक्षण",
      certificationsDescription:
        "साक्ष्य-आधारित बाल देखभाल में उन्नत अंतर्राष्ट्रीय प्रमाणपत्र।",
      clinicTitle: "मेरे क्लिनिक में एक दिन",
      clinicDescription:
        "खेल-आधारित थेरेपी और आत्मविश्वास भरी भागीदारी के लिए बनाए गए गर्म, बच्चों के अनुकूल स्थान।",
      testimonialsKicker: "परिवार की कहानियाँ",
      testimonialsTitle: "माता-पिता क्या कहते हैं",
      testimonialsDescription: "उन परिवारों की वास्तविक कहानियाँ जिन्होंने आशा, सहारा और सार्थक विकास पाया।",
      faqKicker: "प्रश्न",
      faqTitle: "मेरे बारे में सामान्य प्रश्न",
      faqDescription: "डॉ. शारुजा सराफ के साथ काम करने के बारे में ईमानदार जवाब।",
      browseAllFaqs: "सभी FAQs देखें",
      ctaTitle: "अगला कदम उठाने के लिए तैयार?",
      ctaDescription: `कांदिवली क्लिनिक में ${siteConfig.doctorName} के साथ परामर्श बुक करें।`,
      callCta: "कॉल करें",
      whatsappCta: "WhatsApp",
      readMoreStories: "और कहानियाँ पढ़ें",
      viewGallery: "पूरी गैलरी देखें",
    },
  },
  articleFooter: {
    title: "अगला कदम उठाने के लिए तैयार?",
    description: `कांदिवली क्लिनिक में ${siteConfig.doctorName} के साथ परामर्श बुक करें।`,
    book: "परामर्श बुक करें",
    more: "और लेख",
  },
  geoFaqs: {
    condition: {
      whatIs: (title) => `${title} क्या है?`,
      whatIsAnswer: (title) =>
        `${title} बच्चों की रोज़मर्रा की ज़िंदगी — दिनचर्या, स्कूल, खेल — को प्रभावित करता है। ${siteConfig.name}, कांदिवली में हम माता-पिता को समझने में मदद करते हैं।`,
      howOtHelps: (title) => `${title} वाले बच्चे को OT कैसे मदद कर सकती है?`,
      howOtHelpsAnswer: "बाल OT खेल-आधारित, परिवार-केंद्रित सत्रों के माध्यम से रोज़मर्रा के कौशल पर ध्यान देती है।",
      whenSeek: (title) => `${title} के लिए सहायता कब लें?`,
      whenSeekAnswer: "अगर दिनचर्या जितनी आसान होनी चाहिए उससे कठिन लगे — बातचीत शुरू करने के लिए यही काफी है।",
      whatNext: (doctor) => `${doctor} से संपर्क के बाद क्या होता है?`,
      whatNextAnswer: () => "गर्म पहली मुलाकात: सुनना, कोमल अवलोकन, और सादी भाषा में समझाना।",
    },
    expertise: {
      whatIs: (title) => `${title} क्या है?`,
      whatIsAnswer: (title) => `${title} डॉ. शारुजा सराफ कांदिवली क्लिनिक में उपयोग करने वाले दृष्टिकोणों में से एक है।`,
      howHelps: (title) => `${title} मेरे बच्चे की कैसे मदद करता है?`,
      howHelpsAnswer: "हम तकनीकें आपके बच्चे की ज़रूरतों के अनुसार मिलाते हैं — भागीदारी और आत्मविश्वास के लिए।",
      whenConsider: (title) => `${title} कब विचार करें?`,
      whenConsiderAnswer: "अगर रोज़मर्रा की ज़िंदगी कठिन लगे — परामर्श मदद कर सकता है।",
      whatNext: () => "कांदिवली में परामर्श बुक करने पर आगे क्या?",
      whatNextAnswer: (area, doctor) => `${doctor} से मिलेंगे और ${area} आपके बच्चे की योजना में कैसे फिट हो, समझाएँगे।`,
    },
  },
};

const mr: PageShells = {
  ...hi,
  appointment: {
    ...hi.appointment,
    metaTitle: "बाल OT सल्ला बुक करा",
    kicker: "सल्ला",
    title: "तुमच्या मुलाबद्दल सांगा",
    description: "खालील फॉर्म भरा — 24 तासांत संपर्क करू. कोणताही दबाव नाही.",
    clinicHours: "क्लिनिक वेळ: सोम–शुक्र 9–5 · शनि 9–12",
  },
  screening: {
    ...hi.screening,
    metaTitle: "मूलभूत संवेदी स्क्रीनिंग प्रश्नावली",
    breadcrumb: "संवेदी स्क्रीनिंग",
    formTitle: "तुमच्या मुलाबद्दल सांगा",
    formDescription: "हे निदान नाही — तुमच्या चिंता समजण्यास आणि पुढचे पाऊल सुचवण्यास मदत करते.",
  },
  resources: {
    ...hi.resources,
    title: "विचारशील पालकांसाठी मार्गदर्शक",
    readGuide: "मार्गदर्शक वाचा →",
    minRead: "मिनिट वाचा",
  },
  faqs: {
    ...hi.faqs,
    title: "पालक विचारतात ते प्रश्न",
    searchPlaceholder: "प्रश्न शोधा...",
    noResults: "कोणतेही प्रश्न सापडले नाहीत.",
  },
  conditions: {
    ...hi.conditions,
    heroBadge: "प्रत्येक मुलाच्या प्रवासास साथ",
    illustrationCaption: "प्रत्येक मूल अद्वितीय आहे",
    illustrationSubcaption: "वैयक्तिक, पुरावा-आधारित बाल OT",
    trustBadges: ["लवकर ओळख", "पुरावा-आधारित थेरपी", "वैयक्तिक काळजी योजना"],
    searchPlaceholder: "स्थिती शोधा…",
    clearSearch: "शोध साफ करा",
    filterLabel: "श्रेणीनुसार फिल्टर करा",
    filterAll: "सर्व",
    noResults: "कोणतीही स्थिती तुमच्या शोधाशी जुळत नाही. दुसरा शब्द किंवा श्रेणी वापरून पहा.",
    categories: {
      development: "विकास",
      sensory: "संवेदी",
      motor: "मोटर",
      neurological: "न्यूरोलॉजिकल",
      learning: "शिकणे",
      behavioral: "वर्तन",
    },
    therapyFocusLabel: "थेरपी फोकस",
    trustKicker: "लवकर हस्तक्षेप",
    trustTitle: "लवकर हस्तक्षेप का महत्त्वाचा आहे",
    trustCards: [
      {
        title: "लवकर मदत",
        description:
          "चिंता लवकर ओळखल्यास मुलांचे मेंदू सर्वात अनुकूल असताना कौशल्ये विकसित करण्याची अधिक संधी मिळते.",
      },
      {
        title: "चांगले परिणाम",
        description:
          "मुख्य विकासाच्या टप्प्यात लक्ष्यित थेरपी मुलांना शाळा, खेळ आणि दैनंदिन दिनचर्येत अधिक आत्मविश्वासाने सहभागी होण्यास मदत करते.",
      },
      {
        title: "कुटुंब मार्गदर्शन",
        description:
          "पालकांना व्यावहारिक धोरणे आणि उबदार आधार मिळतो — जेणेकरून प्रगती क्लिनिकच्या बाहेर घरातील रोजच्या जीवनात सुरू राहते.",
      },
    ],
    processKicker: "आमचा दृष्टिकोन",
    processTitle: "थेरपी प्रक्रिया",
    processSteps: [
      "मूल्यांकन",
      "वैयक्तिक योजना",
      "थेरपी सत्रे",
      "घरातील कार्यक्रम",
      "प्रगती पुनरावलोकन",
    ],
    processStepDescriptions: [
      "तुमच्या मुलाची ताकद, गरजा आणि दैनंदिन दिनचर्या समजण्यासाठी उबदार पहिली भेट.",
      "तुमच्या मुलाच्या ध्येयांभोवती आणि कुटुंबाच्या प्राधान्यांभोवती तयार केलेली योजना.",
      "आमच्या मुलांसाठी अनुकूल कांदिवली क्लिनिकमध्ये खेळ-आधारित, पुरावा-आधारित सत्रे.",
      "घरातील रोजच्या जीवनात समाविष्ट करता येणाऱ्या व्यावहारिक क्रियाकलाप आणि धोरणे.",
      "प्रगती साजरी करण्यासाठी आणि मूल वाढत असताना मदत समायोजित करण्यासाठी नियमित तपासणी.",
    ],
    ctaTitle: "चला एकत्र तुमच्या मुलाला आधार देऊया",
    ctaDescription: `कांदिवली क्लिनिकमध्ये ${siteConfig.doctorName} यांच्यासोबत सल्ला बुक करा.`,
    callCta: "कॉल करा",
    whatsappCta: "WhatsApp",
  },
  about: {
    ...hi.about,
    title: "नमस्कार,",
    description: "",
    credentials: [
      "मी डॉ. शरुजा आहे",
      "बाल वैद्यकीय व्यावसायिक थेरपिस्ट",
      "जल चिकित्सक",
      "Brain gym प्रशिक्षक",
    ],
    bookConversation: "संभाषण बुक करा",
    inviteCta: "तुमच्या कार्यक्रमात शरुजा आमंत्रित करा",
    sections: {
      heroBadge: "तुमच्या थेरपिस्टला भेटा",
      watchJourney: "माझा प्रवास पहा",
      missionKicker: "तत्त्वज्ञान",
      missionTitle: "माझे ध्येय",
      journeyKicker: "पार्श्वभूमी",
      journeyTitle: "माझा प्रवास",
      journeySteps: [
        "वर्षांचा नैदानिक सराव",
        "शैक्षणिक पाया",
        "विशेष प्रशिक्षण",
        "संशोधन आणि समुदाय",
      ],
      trustKicker: "कुटुंब-केंद्रित काळजी",
      trustTitle: "पालक माझ्यावर का विश्वास ठेवतात",
      statsKicker: "अनुभव",
      statsTitle: "वास्तविक काम दर्शवणारे आकडे",
      statLabels: {
        years: "वर्षांचा अनुभव",
        expertise: "तज्ज्ञतेची क्षेत्रे",
        programs: "कार्यक्रम प्रकार",
        partners: "भागीदार सेटिंग्ज",
      },
      certificationsTitle: "प्रमाणपत्रे आणि प्रशिक्षण",
      certificationsDescription:
        "पुरावा-आधारित बाल काळजीमध्ये प्रगत आंतरराष्ट्रीय प्रमाणपत्रे.",
      clinicTitle: "माझ्या क्लिनिकमध्ये एक दिवस",
      clinicDescription:
        "खेळ-आधारित थेरपी आणि आत्मविश्वासपूर्ण सहभागासाठी तयार केलेली उबदार, मुलांसाठी अनुकूल जागा.",
      testimonialsKicker: "कुटुंबाच्या कथा",
      testimonialsTitle: "पालक काय म्हणतात",
      testimonialsDescription: "आशा, आधार आणि अर्थपूर्ण प्रगती मिळवलेल्या कुटुंबांच्या खऱ्या कथा.",
      faqKicker: "प्रश्न",
      faqTitle: "माझ्याबद्दल सामान्य प्रश्न",
      faqDescription: "डॉ. शरुजा सराफ यांच्यासोबत काम करण्याबद्दल प्रामाणिक उत्तरे.",
      browseAllFaqs: "सर्व FAQs पहा",
      ctaTitle: "पुढचा पाऊल उचलण्यास तयार?",
      ctaDescription: `कांदिवली क्लिनिकमध्ये ${siteConfig.doctorName} यांच्यासोबत सल्ला बुक करा.`,
      callCta: "कॉल करा",
      whatsappCta: "WhatsApp",
      readMoreStories: "अधिक कथा वाचा",
      viewGallery: "संपूर्ण गॅलरी पहा",
    },
  },
  articleFooter: {
    title: "पुढचा पाऊल उचलण्यास तयार?",
    description: `कांदिवली क्लिनिकमध्ये ${siteConfig.doctorName} यांच्यासोबत सल्ला बुक करा.`,
    book: "सल्ला बुक करा",
    more: "अधिक लेख",
  },
};

const shells: Record<Locale, PageShells> = { en, hi, mr };

export function getPageShells(locale: Locale): PageShells {
  return shells[locale] ?? en;
}
