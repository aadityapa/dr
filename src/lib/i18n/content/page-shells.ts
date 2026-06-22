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
  about: PageShell & { bookConversation: string; inviteCta: string };
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
    title: "How we support growth and participation",
    description:
      "Evidence-informed approaches tailored to each child's strengths — explained in plain language for Mumbai families.",
  },
  about: {
    metaTitle: "About Dr. Sharuja Sarap",
    metaDescription: "Pediatric OT in Kandivali West, Mumbai — 18+ years supporting children and families.",
    kicker: "About Me",
    title: "Hello, I'm Sharuja.",
    description: "Pediatric occupational therapist in Kandivali West — walking alongside children and families for over 18 years.",
    bookConversation: "Book a Conversation",
    inviteCta: "Invite Sharuja to Your Program",
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
    title: "हम विकास और भागीदारी को कैसे सहारा देते हैं",
    description: "हर बच्चे की ताकत के अनुसार साक्ष्य-सूचित दृष्टिकोण — मुंबई के परिवारों के लिए सादी भाषा में।",
  },
  about: {
    metaTitle: "डॉ. शारुजा सराफ के बारे में",
    metaDescription: "कांदिवली में बाल OT — 18+ वर्षों से बच्चों और परिवारों की सेवा।",
    kicker: "मेरे बारे में",
    title: "नमस्ते, मैं शारुजा हूँ।",
    description: "कांदिवली में बाल व्यावसायिक चिकित्सक — 18+ वर्षों से बच्चों और परिवारों के साथ।",
    bookConversation: "बातचीत बुक करें",
    inviteCta: "अपने कार्यक्रम में शारुजा को आमंत्रित करें",
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
  about: {
    ...hi.about,
    title: "नमस्कार, मी शरुजा.",
    bookConversation: "संभाषण बुक करा",
    inviteCta: "तुमच्या कार्यक्रमात शरुजा आमंत्रित करा",
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
