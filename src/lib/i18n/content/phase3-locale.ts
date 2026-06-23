import type { OutcomeArea } from "@/components/therapy-outcomes/outcome-comparison";
import type { LibraryResource } from "@/lib/library-resources";
import { siteConfig } from "@/lib/site-data";

import type { Locale } from "../types";

export type TestimonialsPageContent = {
  milestonesTitle: string;
  quotesTitle: string;
  quotesDescription: string;
  videoTitle: string;
  videoDescription: string;
  cta: string;
  milestones: string[];
  testimonials: { parent: string; quote: string; milestone: string }[];
};

export type OutcomesPageContent = {
  beforeLabel: string;
  afterLabel: string;
  tabListLabel: string;
  ctaDescription: (doctor: string) => string;
  areas: OutcomeArea[];
};

export type GalleryPageContent = {
  allCategory: string;
  closeLightbox: string;
  categories: Record<string, string>;
  items: { title: string; category: string; alt?: string }[];
};

export type LibraryPageContent = {
  categories: Record<string, string>;
  resources: Record<string, Pick<LibraryResource, "title" | "description" | "category">>;
  ctaTitle: string;
  ctaDescription: string;
};

export type SystemPagesContent = {
  error: {
    kicker: string;
    title: string;
    description: string;
    tryAgain: string;
    goHome: string;
    call: (phone: string) => string;
  };
  notFound: {
    kicker: string;
    title: string;
    description: string;
    goHome: string;
  };
  loading: string;
};

export type Phase3Content = {
  testimonials: TestimonialsPageContent;
  outcomes: OutcomesPageContent;
  gallery: GalleryPageContent;
  library: LibraryPageContent;
  system: SystemPagesContent;
};

const enOutcomes: OutcomeArea[] = [
  {
    title: "Attention & Learning",
    before: [
      "Difficulty sustaining focus beyond a few minutes",
      "Incomplete homework and classroom assignments",
      "Easily distracted by sounds and movement",
      "Low confidence about academic abilities",
    ],
    after: [
      "Improved sustained attention during seated tasks",
      "Better homework completion with fewer battles",
      "Practical strategies for managing distractions",
      "Renewed confidence in learning and classroom participation",
    ],
  },
  {
    title: "Sensory Regulation",
    before: [
      "Frequent meltdowns in busy environments",
      "Extreme reactions to textures, sounds, or lights",
      "Difficulty calming after excitement or upset",
      "Limited tolerance for daily grooming routines",
    ],
    after: [
      "Reduced meltdown frequency and faster recovery",
      "Greater tolerance of everyday sensory experiences",
      "Personalized sensory strategies for home and school",
      "Calmer participation in family outings and social events",
    ],
  },
  {
    title: "Motor Skills",
    before: [
      "Clumsiness and difficulty with new physical tasks",
      "Avoidance of playground and sports activities",
      "Poor balance and coordination compared to peers",
      "Fatigue during physical activities",
    ],
    after: [
      "Improved balance, coordination, and motor planning",
      "Greater willingness to attempt new physical activities",
      "Better participation in play and sports",
      "Increased physical confidence and body awareness",
    ],
  },
  {
    title: "Independence",
    before: [
      "Dependence on parents for dressing and self-care",
      "Difficulty completing daily routines independently",
      "Resistance to trying new self-care tasks",
      "Slow transitions between daily activities",
    ],
    after: [
      "Greater independence in dressing, feeding, and grooming",
      "Smoother daily routines with less parent prompting",
      "Confidence tackling age-appropriate self-care tasks",
      "Improved transition skills between activities",
    ],
  },
  {
    title: "Handwriting",
    before: [
      "Illegible or painfully slow written work",
      "Active avoidance of writing tasks and homework",
      "Poor pencil grip and hand fatigue",
      "Incomplete exam papers due to writing speed",
    ],
    after: [
      "Legible, more fluent handwriting for school tasks",
      "Functional pencil grip with reduced hand fatigue",
      "Willingness to engage with written assignments",
      "Classroom-ready written work and exam completion",
    ],
  },
  {
    title: "Emotional Regulation",
    before: [
      "Quick frustration and emotional outbursts",
      "Difficulty recovering from disappointment",
      "Low tolerance for changes in routine",
      "Anxiety in new or unpredictable situations",
    ],
    after: [
      "Improved emotional self-awareness and coping strategies",
      "Faster recovery from upsets with co-regulation tools",
      "Better tolerance of transitions and changes",
      "Greater resilience in challenging situations",
    ],
  },
  {
    title: "Social Skills",
    before: [
      "Difficulty engaging in peer play and group activities",
      "Limited turn-taking and shared attention",
      "Social friction from impulsive or withdrawn behavior",
      "Preference for solitary play over group interaction",
    ],
    after: [
      "Increased engagement in peer play and group settings",
      "Improved turn-taking and cooperative play skills",
      "Greater confidence initiating social interactions",
      "More successful participation in birthday parties and events",
    ],
  },
  {
    title: "Communication",
    before: [
      "Limited engagement in conversations and shared activities",
      "Difficulty with non-verbal communication cues",
      "Frustration when unable to express needs",
      "Reduced participation in classroom discussions",
    ],
    after: [
      "Improved readiness for communication through regulation",
      "Better engagement in shared attention activities",
      "Reduced frustration through improved self-expression tools",
      "Greater classroom participation and peer connection",
    ],
  },
  {
    title: "Confidence",
    before: [
      "Low self-esteem from repeated struggles",
      "Avoidance of challenging tasks and new experiences",
      "Negative self-talk about abilities",
      "Reluctance to try activities peers enjoy",
    ],
    after: [
      "Renewed belief in personal abilities and strengths",
      "Willingness to attempt new challenges with support",
      "Celebration of personal progress and milestones",
      "Joyful engagement in therapy, school, and play",
    ],
  },
  {
    title: "School Participation",
    before: [
      "Difficulty sitting through lessons and assemblies",
      "Incomplete classwork and poor classroom tolerance",
      "Teacher concerns about attention and behavior",
      "School avoidance or anxiety about attending",
    ],
    after: [
      "Improved sitting tolerance and classroom engagement",
      "Better task completion and written output",
      "Practical classroom accommodations in place",
      "Confident, positive school experience",
    ],
  },
];

const en: Phase3Content = {
  testimonials: {
    milestonesTitle: "Milestones we've celebrated together",
    quotesTitle: "In their own words",
    quotesDescription: "Shared with permission. Outcomes vary — but hope is real.",
    videoTitle: "Video stories coming soon",
    videoDescription: "Hear directly from parents — in their own voices.",
    cta: "Start With a Conversation",
    milestones: [
      "First independent dressing routine",
      "Confident handwriting in the classroom",
      "Participating in birthday parties comfortably",
      "Self-feeding without distress",
      "Transitioning across daily activities with fewer meltdowns",
      "Successful school readiness milestones",
      "Improved balance and coordination in play",
      "Peer interaction in group settings",
    ],
    testimonials: [
      {
        parent: "Parent of Aarav, 6",
        quote:
          "Dr. Sharuja understood our son from the very first session. His confidence at school and his ability to manage sensory overload have improved tremendously.",
        milestone: "Calmer school participation and improved self-regulation",
      },
      {
        parent: "Parent of Meera, 8",
        quote:
          "The handwriting program was a game-changer. Meera now writes with confidence, and her teachers have noticed a remarkable difference.",
        milestone: "Legible handwriting and classroom readiness",
      },
      {
        parent: "Parent of Vihaan, 5",
        quote:
          "Aquatic therapy brought joy back into our child's life. He looks forward to every session and his balance and strength have grown so much.",
        milestone: "Improved balance and joyful participation in therapy",
      },
      {
        parent: "Parent of Ananya, 7",
        quote:
          "We felt heard, supported, and hopeful from day one. Dr. Sharuja's gentle approach made all the difference for our family.",
        milestone: "Stronger family routines and emotional connection",
      },
    ],
  },
  outcomes: {
    beforeLabel: "Before Therapy",
    afterLabel: "After Therapy",
    tabListLabel: "Therapy outcome areas",
    ctaDescription: (doctor) =>
      `Book a consultation with ${doctor} to discuss your child's unique strengths and goals.`,
    areas: enOutcomes,
  },
  gallery: {
    allCategory: "All",
    closeLightbox: "Close lightbox",
    categories: {
      "Therapy Room": "Therapy Room",
      "Assessment Area": "Assessment Area",
      "Aquatic Therapy": "Aquatic Therapy",
      "Therapy Equipment": "Therapy Equipment",
      "Child-Friendly Environment": "Child-Friendly Environment",
    },
    items: [
      {
        title: "Guided Swing Support",
        category: "Therapy Room",
        alt: "Dr. Sharuja supporting a child on sensory swing equipment inside the pediatric therapy gym",
      },
      {
        title: "Fine Motor Practice",
        category: "Assessment Area",
        alt: "Therapist-guided handwriting and fine motor practice on a chalkboard during pediatric OT",
      },
      {
        title: "Sensory Pathway",
        category: "Child-Friendly Environment",
        alt: "Child using colorful tactile stepping pads with therapist support in a sensory therapy room",
      },
      {
        title: "Sensory Gym Equipment",
        category: "Therapy Equipment",
        alt: "Colorful sensory gym equipment including swing supports, climbing holds, and movement tools",
      },
      {
        title: "Movement Play Zone",
        category: "Child-Friendly Environment",
        alt: "Bright pediatric therapy play zone with climbing wall, tactile pads, and child-friendly movement equipment",
      },
      {
        title: "Sensory Gym",
        category: "Therapy Room",
        alt: "Indoor pediatric sensory gym with a platform swing and colorful climbing equipment for motor development",
      },
    ],
  },
  library: {
    categories: {
      "Screening Tools": "Screening Tools",
      Checklists: "Checklists",
      "Parent Guides": "Parent Guides",
      "Activity Guides": "Activity Guides",
    },
    resources: {
      "sensory-screening": {
        title: "Sensory Screening Questionnaire",
        description:
          "A parent-friendly checklist to identify sensory processing patterns — over-responsivity, under-responsivity, and sensory seeking behaviors.",
        category: "Screening Tools",
      },
      "school-readiness": {
        title: "School Readiness Checklist",
        description:
          "Essential skills checklist for children entering preschool or Grade 1 — motor, sensory, self-care, and social readiness indicators.",
        category: "Checklists",
      },
      handwriting: {
        title: "Handwriting Development Checklist",
        description:
          "Age-appropriate handwriting milestones and red flags — pencil grip, letter formation, speed, and legibility benchmarks.",
        category: "Checklists",
      },
      "autism-guide": {
        title: "Autism Parent Guide",
        description:
          "Understanding autism from an OT perspective — sensory profiles, daily routines, therapy goals, and practical home strategies.",
        category: "Parent Guides",
      },
      "adhd-guide": {
        title: "ADHD Parent Guide",
        description:
          "Movement-based strategies, attention-building routines, homework support, and classroom accommodations for children with ADHD.",
        category: "Parent Guides",
      },
      "sensory-diet": {
        title: "Sensory Diet Guide",
        description:
          "How to create a personalized sensory diet — scheduled activities that help your child stay regulated throughout the day.",
        category: "Parent Guides",
      },
      "fine-motor": {
        title: "Fine Motor Activities Guide",
        description:
          "30+ home activities to build hand strength, pencil control, scissor skills, and dexterity — organized by age group.",
        category: "Activity Guides",
      },
      "gross-motor": {
        title: "Gross Motor Activities Guide",
        description:
          "Movement activities for balance, coordination, body awareness, and strength — suitable for home and outdoor play.",
        category: "Activity Guides",
      },
    },
    ctaTitle: "Need personalized guidance?",
    ctaDescription: `Downloadable guides are a starting point. A consultation with ${siteConfig.doctorName} provides individualized recommendations for your child.`,
  },
  system: {
    error: {
      kicker: "Something went wrong",
      title: "We hit an unexpected snag",
      description:
        "Please try again. If the problem continues, you can reach our clinic directly and we'll be glad to help.",
      tryAgain: "Try again",
      goHome: "Go to Home",
      call: (phone) => `Call ${phone}`,
    },
    notFound: {
      kicker: "Page Not Found",
      title: "Let's bring you home",
      description: "The page you are looking for may have moved, but caring support is always a click away.",
      goHome: "Go to Home",
    },
    loading: "Loading...",
  },
};

const hi: Phase3Content = {
  testimonials: {
    milestonesTitle: "हमने साथ मनाए उपलब्धियाँ",
    quotesTitle: "उनके अपने शब्दों में",
    quotesDescription: "अनुमति से साझा। परिणाम अलग हो सकते हैं — पर आशा वास्तविक है।",
    videoTitle: "वीडियो कहानियाँ जल्द आ रही हैं",
    videoDescription: "माता-पिता से सीधे सुनें — उनकी अपनी आवाज़ में।",
    cta: "एक बातचीत से शुरू करें",
    milestones: [
      "पहली स्वतंत्र कपड़े पहनने की दिनचर्या",
      "कक्षा में आत्मविश्वास से लिखना",
      "जन्मदिन की पार्टियों में आराम से भाग लेना",
      "बिना तनाव के स्वयं खाना",
      "दैनिक गतिविधियों में कम मेल्टडाउन के साथ बदलाव",
      "स्कूल तैयारी की सफल उपलब्धियाँ",
      "खेल में बेहतर संतुलन और समन्वय",
      "समूह सेटिंग में साथियों के साथ बातचीत",
    ],
    testimonials: [
      {
        parent: "आरव, 6 के माता-पिता",
        quote:
          "डॉ. शारुजा ने पहले सत्र से ही हमारे बेटे को समझा। स्कूल में उसका आत्मविश्वास और सेंसरी ओवरलोड संभालने की क्षमता बहुत बढ़ी।",
        milestone: "शांत स्कूल भागीदारी और बेहतर आत्म-नियमन",
      },
      {
        parent: "मीरा, 8 के माता-पिता",
        quote:
          "लिखने का कार्यक्रम बदलाव लाया। मीरा अब आत्मविश्वास से लिखती है, और शिक्षकों ने स्पष्ट अंतर देखा।",
        milestone: "पढ़ने योग्य लिखावट और कक्षा की तैयारी",
      },
      {
        parent: "विहान, 5 के माता-पिता",
        quote:
          "जल चिकित्सा ने हमारे बच्चे के जीवन में खुशी वापस लाई। वह हर सत्र का इंतज़ार करता है और उसका संतुलन व ताकत बहुत बढ़ी।",
        milestone: "बेहतर संतुलन और थेरेपी में खुशी से भागीदारी",
      },
      {
        parent: "अनanya, 7 के माता-पिता",
        quote:
          "पहले दिन से हमें सुना, सहारा और आशा मिली। डॉ. शारुजा के कोमल तरीके ने हमारे परिवार के लिए सब बदल दिया।",
        milestone: "मज़बूत परिवार दिनचर्या और भावनात्मक जुड़ाव",
      },
    ],
  },
  outcomes: {
    beforeLabel: "थेरेपी से पहले",
    afterLabel: "थेरेपी के बाद",
    tabListLabel: "थेरेपी परिणाम क्षेत्र",
    ctaDescription: (doctor) =>
      `${doctor} के साथ परामर्श बुक करें — अपने बच्चे की अनूठी ताकत और लक्ष्यों पर चर्चा करें।`,
    areas: [
      {
        title: "ध्यान और सीखना",
        before: [
          "कुछ मिनट से अधिक ध्यान न रख पाना",
          "अधूरा होमवर्क और कक्षा कार्य",
          "आवाज़ और हलचल से आसानी से विचलित होना",
          "शैक्षणिक क्षमताओं पर कम आत्मविश्वास",
        ],
        after: [
          "बैठे कार्यों में बेहतर निरंतर ध्यान",
          "कम लड़ाई के साथ होमवर्क पूरा करना",
          "विचलन संभालने की व्यावहारिक रणनीतियाँ",
          "सीखने और कक्षा में नया आत्मविश्वास",
        ],
      },
      {
        title: "सेंसरी नियमन",
        before: [
          "भीड़ भरे वातावरण में बार-बार मेल्टडाउन",
          "बनावट, आवाज़ या रोशनी पर तीव्र प्रतिक्रिया",
          "उत्तेजना या परेशानी के बाद शांत होने में कठिनाई",
          "दैनिक सफाई दिनचर्या की कम सहनशीलता",
        ],
        after: [
          "कम मेल्टडाउन और तेज़ी से ठीक होना",
          "रोज़मर्रा की सेंसरी अनुभवों की अधिक सहनशीलता",
          "घर और स्कूल के लिए व्यक्तिगत सेंसरी रणनीतियाँ",
          "पारिवारिक और सामाजिक कार्यक्रमों में शांत भागीदारी",
        ],
      },
      {
        title: "मोटर कौशल",
        before: [
          "नई शारीरिक कार्यों में अनाड़ीपन",
          "खेल के मैदान और खेल से बचना",
          "साथियों की तुलना में खराब संतुलन",
          "शारीरिक गतिविधि में थकान",
        ],
        after: [
          "बेहतर संतुलन, समन्वय और मोटर योजना",
          "नई शारीरिक गतिविधियाँ आज़माने की इच्छा",
          "खेल और खेलकूद में बेहतर भागीदारी",
          "शारीरिक आत्मविश्वास और शरीर जागरूकता",
        ],
      },
      {
        title: "स्वतंत्रता",
        before: [
          "कपड़े और स्व-देखभाल में माता-पिता पर निर्भरता",
          "दैनिक दिनचर्या स्वयं पूरी न कर पाना",
          "नई स्व-देखभाल कार्यों से विरोध",
          "दैनिक गतिविधियों के बीच धीमे बदलाव",
        ],
        after: [
          "कपड़े, खाना और सफाई में अधिक स्वतंत्रता",
          "कम याद दिलाने के साथ सुचारू दिनचर्या",
          "उम्र के अनुसार स्व-देखभाल में आत्मविश्वास",
          "गतिविधियों के बीच बेहतर बदलाव कौशल",
        ],
      },
      {
        title: "लिखावट",
        before: [
          "अपठनीय या बहुत धीमी लिखाई",
          "लिखित कार्य और होमवर्क से सक्रिय बचाव",
          "खराब पेंसिल पकड़ और हाथ थकान",
          "लिखने की गति से अधूरे परीक्षा पत्र",
        ],
        after: [
          "स्कूल कार्यों के लिए पढ़ने योग्य, प्रवाही लिखावट",
          "कम थकान के साथ कार्यात्मक पकड़",
          "लिखित कार्यों में भाग लेने की इच्छा",
          "कक्षा और परीक्षा के लिए तैयार लिखाई",
        ],
      },
      {
        title: "भावनात्मक नियमन",
        before: [
          "जल्दी निराशा और भावनात्मक विस्फोट",
          "निराशा से उबरने में कठिनाई",
          "दिनचर्या बदलाव की कम सहनशीलता",
          "नई या अप्रत्याशित स्थितियों में चिंता",
        ],
        after: [
          "बेहतर भावनात्मक जागरूकता और सामना करने की रणनीतियाँ",
          "सह-नियमन उपकरणों से तेज़ी से ठीक होना",
          "बदलाव और संक्रमण की बेहतर सहनशीलता",
          "चुनौतीपूर्ण स्थितियों में अधिक लचीलापन",
        ],
      },
      {
        title: "सामाजिक कौशल",
        before: [
          "साथियों के साथ खेल और समूह गतिविधियों में कठिनाई",
          "बारी लेने और साझा ध्यान की सीमा",
          "आवेगी या अलग-थलग व्यवहार से सामाजिक घर्षण",
          "समूह के बजाय अकेले खेल की प्राथमिकता",
        ],
        after: [
          "साथियों और समूह में अधिक जुड़ाव",
          "बेहतर बारी लेना और सहकारी खेल",
          "सामाजिक बातचीत शुरू करने में अधिक आत्मविश्वास",
          "जन्मदिन की पार्टियों में सफल भागीदारी",
        ],
      },
      {
        title: "संचार",
        before: [
          "बातचीत और साझा गतिविधियों में सीमित जुड़ाव",
          "गैर-मौखिक संकेतों में कठिनाई",
          "ज़रूरतें व्यक्त न कर पाने पर निराशा",
          "कक्षा चर्चा में कम भागीदारी",
        ],
        after: [
          "नियमन के माध्यम से संचार के लिए बेहतर तैयारी",
          "साझा ध्यान गतिविधियों में बेहतर जुड़ाव",
          "बेहतर अभिव्यक्ति से कम निराशा",
          "कक्षा में अधिक भागीदारी और साथियों से जुड़ाव",
        ],
      },
      {
        title: "आत्मविश्वास",
        before: [
          "बार-बार संघर्ष से कम आत्म-सम्मान",
          "चुनौतीपूर्ण कार्यों और नए अनुभवों से बचना",
          "क्षमताओं के बारे में नकारात्मक आत्म-बात",
          "साथियों के आनंद वाली गतिविधियाँ आज़माने से हिचक",
        ],
        after: [
          "अपनी ताकत और क्षमताओं में नया विश्वास",
          "सहारे के साथ नई चुनौतियाँ आज़माने की इच्छा",
          "व्यक्तिगत प्रगति और उपलब्धियों का जश्न",
          "थेरेपी, स्कूल और खेल में खुशी से जुड़ाव",
        ],
      },
      {
        title: "स्कूल भागीदारी",
        before: [
          "पाठ और सभाओं में बैठने की कठिनाई",
          "अधूरा कक्षा कार्य और कम सहनशीलता",
          "ध्यान और व्यवहार पर शिक्षक की चिंता",
          "स्कूल से बचना या जाने की चिंता",
        ],
        after: [
          "बेहतर बैठने की सहनशीलता और कक्षा जुड़ाव",
          "बेहतर कार्य पूर्णता और लिखित आउटपुट",
          "व्यावहारिक कक्षा समायोजन",
          "आत्मविश्वासी, सकारात्मक स्कूल अनुभव",
        ],
      },
    ],
  },
  gallery: {
    allCategory: "सभी",
    closeLightbox: "बंद करें",
    categories: {
      "Therapy Room": "थेरेपी कक्ष",
      "Assessment Area": "मूल्यांकन क्षेत्र",
      "Aquatic Therapy": "जल चिकित्सा",
      "Therapy Equipment": "थेरेपी उपकरण",
      "Child-Friendly Environment": "बच्चों के अनुकूल वातावरण",
    },
    items: [
      {
        title: "मार्गदर्शित स्विंग सहायता",
        category: "Therapy Room",
        alt: "बाल थेरेपी जिम में सेंसरी स्विंग उपकरण पर बच्चे को सहयोग देतीं डॉ. शारुजा",
      },
      {
        title: "फाइन मोटर अभ्यास",
        category: "Assessment Area",
        alt: "बाल OT सत्र में चॉकबोर्ड पर चिकित्सक-निर्देशित लिखावट और फाइन मोटर अभ्यास",
      },
      {
        title: "सेंसरी पाथवे",
        category: "Child-Friendly Environment",
        alt: "सेंसरी थेरेपी कक्ष में चिकित्सक के सहयोग से रंगीन tactile stepping pads का उपयोग करता बच्चा",
      },
      {
        title: "सेंसरी जिम उपकरण",
        category: "Therapy Equipment",
        alt: "स्विंग सपोर्ट, climbing holds और movement tools सहित रंगीन सेंसरी जिम उपकरण",
      },
      {
        title: "मूवमेंट प्ले ज़ोन",
        category: "Child-Friendly Environment",
        alt: "climbing wall, tactile pads और बच्चों के अनुकूल movement equipment वाला उज्ज्वल बाल थेरेपी play zone",
      },
      {
        title: "सेंसरी जिम",
        category: "Therapy Room",
        alt: "platform swing और रंगीन climbing equipment वाला indoor pediatric sensory gym",
      },
    ],
  },
  library: {
    categories: {
      "Screening Tools": "स्क्रीनिंग उपकरण",
      Checklists: "चेकलिस्ट",
      "Parent Guides": "माता-पिता गाइड",
      "Activity Guides": "गतिविधि गाइड",
    },
    resources: {
      "sensory-screening": {
        title: "सेंसरी स्क्रीनिंग प्रश्नावली",
        description:
          "सेंसरी प्रोसेसिंग पैटर्न पहचानने के लिए माता-पिता के अनुकूल चेकलिस्ट — अति-प्रतिक्रिया, कम-प्रतिक्रिया और सेंसरी seeking व्यवहार।",
        category: "Screening Tools",
      },
      "school-readiness": {
        title: "स्कूल तैयारी चेकलिस्ट",
        description:
          "प्रीस्कूल या कक्षा 1 में प्रवेश के लिए आवश्यक कौशल — मोटर, सेंसरी, स्व-देखभाल और सामाजिक तैयारी संकेतक।",
        category: "Checklists",
      },
      handwriting: {
        title: "लिखावट विकास चेकलिस्ट",
        description:
          "उम्र के अनुसार लिखावट मील के पत्थर और चेतावनी संकेत — पकड़, अक्षर निर्माण, गति और पठनीयता।",
        category: "Checklists",
      },
      "autism-guide": {
        title: "ऑटिज़म माता-पिता गाइड",
        description:
          "OT दृष्टिकोण से ऑटिज़म समझना — सेंसरी प्रोफ़ाइल, दैनिक दिनचर्या, थेरेपी लक्ष्य और व्यावहारिक घरेलू रणनीतियाँ।",
        category: "Parent Guides",
      },
      "adhd-guide": {
        title: "ADHD माता-पिता गाइड",
        description:
          "गति-आधारित रणनीतियाँ, ध्यान बढ़ाने की दिनचर्या, होमवर्क सहायता और ADHD बच्चों के लिए कक्षा समायोजन।",
        category: "Parent Guides",
      },
      "sensory-diet": {
        title: "सेंसरी डाइट गाइड",
        description:
          "व्यक्तिगत सेंसरी डाइट कैसे बनाएँ — निर्धारित गतिविधियाँ जो बच्चे को दिन भर संतुलित रखें।",
        category: "Parent Guides",
      },
      "fine-motor": {
        title: "फाइन मोटर गतिविधि गाइड",
        description:
          "30+ घरेलू गतिविधियाँ — हाथ की ताकत, पेंसिल नियंत्रण, कैंची कौशल और चपलता, उम्र समूह के अनुसार।",
        category: "Activity Guides",
      },
      "gross-motor": {
        title: "ग्रोस मोटर गतिविधि गाइड",
        description:
          "संतुलन, समन्वय, शरीर जागरूकता और ताकत के लिए गति गतिविधियाँ — घर और बाहर खेल के लिए।",
        category: "Activity Guides",
      },
    },
    ctaTitle: "व्यक्तिगत मार्गदर्शन चाहिए?",
    ctaDescription: `डाउनलोड योग्य गाइड शुरुआत हैं। ${siteConfig.doctorName} के साथ परामर्श आपके बच्चे के लिए व्यक्तिगत सिफ़ारिशें देता है।`,
  },
  system: {
    error: {
      kicker: "कुछ गलत हो गया",
      title: "एक अप्रत्याशित समस्या आई",
      description:
        "कृपया फिर से कोशिश करें। अगर समस्या बनी रहे, सीधे क्लिनिक से संपर्क करें — हम मदद के लिए यहाँ हैं।",
      tryAgain: "फिर से कोशिश करें",
      goHome: "होम पर जाएँ",
      call: (phone) => `${phone} पर कॉल करें`,
    },
    notFound: {
      kicker: "पृष्ठ नहीं मिला",
      title: "आइए आपको वापस ले चलें",
      description: "जो पृष्ठ आप ढूँढ रहे हैं वह स्थान बदल गया हो — पर सहायता हमेशा एक क्लिक दूर है।",
      goHome: "होम पर जाएँ",
    },
    loading: "लोड हो रहा है...",
  },
};

const mr: Phase3Content = {
  testimonials: {
    milestonesTitle: "आम्ही एकत्र साजरे केलेले टप्पे",
    quotesTitle: "त्यांच्या स्वतःच्या शब्दांत",
    quotesDescription: "परवानगीने सामायिक. परिणाम वेगळे असू शकतात — पण आशा खरी आहे.",
    videoTitle: "व्हिडिओ कथा लवकरच येत आहेत",
    videoDescription: "पालकांकडून थेट ऐका — त्यांच्या स्वतःच्या आवाजात.",
    cta: "संभाषणाने सुरुवात करा",
    milestones: [
      "पहिली स्वतंत्र कपडे घालण्याची दिनचर्या",
      "वर्गात आत्मविश्वासाने लेखन",
      "वाढदिवसाच्या पार्ट्यांमध्ये आरामाने सहभाग",
      "ताणाशिवाय स्वतः जेवण",
      "दैनंदिन कामांमध्ये कमी रडणे",
      "शाळेच्या तयारीचे यशस्वी टप्पे",
      "खेळात चांगले संतुलन आणि समन्वय",
      "गटात मित्रांशी संवाद",
    ],
    testimonials: [
      {
        parent: "आरव, 6 चे पालक",
        quote:
          "डॉ. शरुजा पहिल्याच सत्रात आमच्या मुलाला समजल्या. शाळेत आत्मविश्वास आणि sensory overload हाताळण्याची क्षमता खूप वाढली.",
        milestone: "शांत शाळा सहभाग आणि चांगले self-regulation",
      },
      {
        parent: "मीरा, 8 चे पालक",
        quote:
          "लेखन कार्यक्रमाने फरक पाडला. मीरा आता आत्मविश्वासाने लिहite आणि शिक्षकांनी स्पष्ट फरक पाहिला.",
        milestone: "वाचनीय लेखन आणि वर्गासाठी तयारी",
      },
      {
        parent: "विहान, 5 चे पालक",
        quote:
          "जलचिकित्सेने आमच्या मुलाच्या जीवनात आनंद परत आणला. तो प्रत्येक सत्राची वाट पाहतो आणि संतुलन व शक्ती खूप वाढली.",
        milestone: "चांगले संतुलन आणि थेरपीमध्ये आनंदाने सहभाग",
      },
      {
        parent: "अनanya, 7 चे पालक",
        quote:
          "पहिल्या दिवसापासून आम्हाला ऐकले, सहारा आणि आशा मिळाली. डॉ. शरुजांच्या सौम्य पद्धतीने आमच्या कुटुंबासाठी सर्व बदलले.",
        milestone: "मजबूत कुटुंब दिनचर्या आणि भावनिक जोड",
      },
    ],
  },
  outcomes: {
    beforeLabel: "थेरपीपूर्वी",
    afterLabel: "थेरपीनंतर",
    tabListLabel: "थेरपी परिणाम क्षेत्रे",
    ctaDescription: (doctor) =>
      `${doctor} यांच्यासोबत सल्ला बुक करा — तुमच्या मुलाच्या अद्वितीय ताकद आणि ध्येयांवर चर्चा करा.`,
    areas: [
      {
        title: "लक्ष आणि शिकणे",
        before: [
          "काही मिनिटांपेक्षा जास्त लक्ष ठेवण्यात अडचण",
          "अपूर्ण गृहपाठ आणि वर्ग काम",
          "आवाज आणि हालचालीने सहज विचलित होणे",
          "शैक्षणिक क्षमतांवर कमी आत्मविश्वास",
        ],
        after: [
          "बसलेल्या कामांमध्ये चांगले सतत लक्ष",
          "कमी वादांसह गृहपाठ पूर्ण करणे",
          "विचलितता हाताळण्याची व्यावहारिक रणनीती",
          "शिकण्यात आणि वर्गात नवीन आत्मविश्वास",
        ],
      },
      {
        title: "Sensory नियमन",
        before: [
          "गर्दीच्या ठिकाणी वारंवार रडणे",
          "वस्तू, आवाज किंवा प्रकाशावर तीव्र प्रतिक्रिया",
          "उत्तेजना किंवा अडचणीनंतर शांत होण्यात अडचण",
          "दैनंदिन स्वच्छतेची कमी सहनशक्ती",
        ],
        after: [
          "कमी रडणे आणि लवकर सावरणे",
          "रोजच्या sensory अनुभवांची अधिक सहनशक्ती",
          "घर आणि शाळेसाठी वैयक्तिक sensory रणनीती",
          "कुटुंब आणि सामाजिक कार्यक्रमांमध्ये शांत सहभाग",
        ],
      },
      {
        title: "Motor कौशल्ये",
        before: [
          "नवीन शारीरिक कामांमध्ये अनाडीपणा",
          "खेळाच्या मैदानात आणि खेळांपासून टाळणे",
          "वयस्कांपेक्षा खराब संतुलन",
          "शारीरिक क्रियांमध्ये थकवा",
        ],
        after: [
          "चांगले संतुलन, समन्वय आणि motor planning",
          "नवीन शारीरिक क्रिया करण्याची इच्छा",
          "खेळ आणि क्रीडांमध्ये चांगला सहभाग",
          "शारीरिक आत्मविश्वास आणि शरीर जागरूकता",
        ],
      },
      {
        title: "स्वतंत्रता",
        before: [
          "कपडे आणि self-care साठी पालकांवर अवलंबून",
          "दैनंदिन दिनचर्या स्वतः पूर्ण न करणे",
          "नवीन self-care कामांना विरोध",
          "दैनंदिन कामांमध्ये हळू बदल",
        ],
        after: [
          "कपडे, जेवण आणि स्वच्छतेत अधिक स्वतंत्रता",
          "कमी आठवणांसह सुरळीत दिनचर्या",
          "वयानुसार self-care मध्ये आत्मविश्वास",
          "कामांमध्ये चांगले transition कौशल्य",
        ],
      },
      {
        title: "लेखन",
        before: [
          "वाचता न येणारे किंवा खूप मंद लेखन",
          "लेखन काम आणि गृहपाठापासून सक्रिय टाळणे",
          "खराब pencil grip आणि हात थकवा",
          "लेखन गतीमुळे अपूर्ण परीक्षा पत्र",
        ],
        after: [
          "शाळेच्या कामांसाठी वाचनीय, प्रवाही लेखन",
          "कमी थकव्यासह कार्यात्मक grip",
          "लेखन कामांमध्ये सहभागाची इच्छा",
          "वर्ग आणि परीक्षेसाठी तयार लेखन",
        ],
      },
      {
        title: "भावनिक नियमन",
        before: [
          "लवकर निराशा आणि भावनिक विस्फोट",
          "निराशेतून सावरण्यात अडचण",
          "दिनचर्या बदलाची कमी सहनशक्ती",
          "नवीन किंवा अनपेक्षित परिस्थितीत चिंता",
        ],
        after: [
          "चांगली भावनिक जागरूकता आणि coping रणनीती",
          "co-regulation साधनांनी लवकर सावरणे",
          "बदल आणि transitions ची चांगली सहनशक्ती",
          "आव्हानात्मक परिस्थितीत अधिक लवचिकता",
        ],
      },
      {
        title: "सामाजिक कौशल्ये",
        before: [
          "मित्रांसोबत खेळ आणि गट क्रियांमध्ये अडचण",
          "पाळी घेणे आणि shared attention मर्यादित",
          "आवेगी किंवा एकटे राहण्याच्या वर्तनामुळे friction",
          "गटापेक्षा एकटे खेळाला प्राधान्य",
        ],
        after: [
          "मित्र आणि गटात अधिक engagement",
          "चांगले turn-taking आणि सहकारी खेळ",
          "सामाजिक संवाद सुरू करण्यात अधिक आत्मविश्वास",
          "वाढदिवसाच्या पार्ट्यांमध्ये यशस्वी सहभाग",
        ],
      },
      {
        title: "संवाद",
        before: [
          "संभाषण आणि shared क्रियांमध्ये मर्यादित engagement",
          "non-verbal संकेतांमध्ये अडचण",
          "गरज व्यक्त न करता निराशा",
          "वर्ग चर्चेत कमी सहभाग",
        ],
        after: [
          "regulation द्वारे संवादासाठी चांगली तयारी",
          "shared attention क्रियांमध्ये चांगले engagement",
          "चांगल्या अभिव्यक्तीने कमी निराशा",
          "वर्गात अधिक सहभाग आणि मित्रांशी जोड",
        ],
      },
      {
        title: "आत्मविश्वास",
        before: [
          "वारंवार संघर्षामुळे कमी self-esteem",
          "आव्हानात्मक काम आणि नवीन अनुभवांपासून टाळणे",
          "क्षमतांबद्दल नकारात्मक self-talk",
          "मित्रांना आवडणाऱ्या क्रिया करण्यात संकोच",
        ],
        after: [
          "स्वतःच्या ताकद आणि क्षमतांवर नवीन विश्वास",
          "सहार्यासह नवीन आव्हाने करण्याची इच्छा",
          "वैयक्तिक प्रगती आणि टप्प्यांचा उत्सव",
          "थेरपी, शाळा आणि खेळात आनंदाने engagement",
        ],
      },
      {
        title: "शाळा सहभाग",
        before: [
          "धडे आणि सभांमध्ये बसण्यात अडचण",
          "अपूर्ण वर्ग काम आणि कमी tolerance",
          "लक्ष आणि वर्तनावर शिक्षकांची चिंता",
          "शाळा टाळणे किंवा जाण्याची चिंता",
        ],
        after: [
          "चांगली sitting tolerance आणि वर्ग engagement",
          "चांगले काम पूर्णता आणि लेखन output",
          "व्यावहारिक वर्ग accommodations",
          "आत्मविश्वासी, सकारात्मक शाळा अनुभव",
        ],
      },
    ],
  },
  gallery: {
    allCategory: "सर्व",
    closeLightbox: "बंद करा",
    categories: {
      "Therapy Room": "थेरपी खोली",
      "Assessment Area": "मूल्यांकन क्षेत्र",
      "Aquatic Therapy": "जलचिकित्सा",
      "Therapy Equipment": "थेरपी उपकरण",
      "Child-Friendly Environment": "मुलांसाठी अनुकूल वातावरण",
    },
    items: [
      {
        title: "मार्गदर्शित स्विंग सपोर्ट",
        category: "Therapy Room",
        alt: "बाल थेरपी जिममध्ये sensory swing equipment वर मुलाला आधार देताना डॉ. शरुजा",
      },
      {
        title: "Fine Motor सराव",
        category: "Assessment Area",
        alt: "बाल OT सत्रात chalkboard वर therapist-guided handwriting आणि fine motor सराव",
      },
      {
        title: "Sensory Pathway",
        category: "Child-Friendly Environment",
        alt: "sensory therapy room मध्ये therapist च्या मदतीने रंगीत tactile stepping pads वापरत असलेले मूल",
      },
      {
        title: "Sensory Gym उपकरण",
        category: "Therapy Equipment",
        alt: "swing supports, climbing holds आणि movement tools असलेले रंगीत sensory gym equipment",
      },
      {
        title: "Movement Play Zone",
        category: "Child-Friendly Environment",
        alt: "climbing wall, tactile pads आणि मुलांसाठी अनुकूल movement equipment असलेला उजळ pediatric therapy play zone",
      },
      {
        title: "Sensory Gym",
        category: "Therapy Room",
        alt: "platform swing आणि रंगीत climbing equipment असलेला indoor pediatric sensory gym",
      },
    ],
  },
  library: {
    categories: {
      "Screening Tools": "स्क्रीनिंग साधने",
      Checklists: "चेकलिस्ट",
      "Parent Guides": "पालक मार्गदर्शक",
      "Activity Guides": "क्रिया मार्गदर्शक",
    },
    resources: {
      "sensory-screening": {
        title: "Sensory स्क्रीनिंग प्रश्नावली",
        description:
          "Sensory processing patterns ओळखण्यासाठी पालकांसाठी चेकलिस्ट — over-responsivity, under-responsivity आणि sensory seeking वर्तन.",
        category: "Screening Tools",
      },
      "school-readiness": {
        title: "शाळेच्या तयारीची चेकलिस्ट",
        description:
          "Preschool किंवा इयत्ता 1 साठी आवश्यक कौशल्ये — motor, sensory, self-care आणि social readiness.",
        category: "Checklists",
      },
      handwriting: {
        title: "लेखन विकास चेकलिस्ट",
        description:
          "वयानुसार लेखन milestones आणि red flags — grip, अक्षर रचना, गती आणि वाचनीयता.",
        category: "Checklists",
      },
      "autism-guide": {
        title: "Autism पालक मार्गदर्शक",
        description:
          "OT दृष्टikonne autism समजून घेणे — sensory profiles, दैनंदिन दिनचर्या, थेरपी ध्येय आणि घरातील रणनीती.",
        category: "Parent Guides",
      },
      "adhd-guide": {
        title: "ADHD पालक मार्गदर्शक",
        description:
          "Movement-based रणनीती, लक्ष वाढवण्याची दिनचर्या, गृहपाठ सहाय्य आणि ADHD मुलांसाठी वर्ग accommodations.",
        category: "Parent Guides",
      },
      "sensory-diet": {
        title: "Sensory Diet मार्गदर्शक",
        description:
          "वैयक्तिक sensory diet कशी तयार करावी — नियोजित क्रिया ज्या मुलाला दिवसभर regulated ठेवतात.",
        category: "Parent Guides",
      },
      "fine-motor": {
        title: "Fine Motor क्रिया मार्गदर्शक",
        description:
          "30+ घरातील क्रिया — हाताची शक्ती, pencil control, scissor skills आणि dexterity, वयोगटानुसार.",
        category: "Activity Guides",
      },
      "gross-motor": {
        title: "Gross Motor क्रिया मार्गदर्शक",
        description:
          "संतुलन, समन्वय, शरीर जागरूकता आणि शक्तीसाठी movement क्रिया — घर आणि बाहेर खेळासाठी.",
        category: "Activity Guides",
      },
    },
    ctaTitle: "वैयक्तिक मार्गदर्शन हवे?",
    ctaDescription: `डाउनलोड करता येणारे मार्गदर्शक सुरुवात आहेत. ${siteConfig.doctorName} यांच्यासोबत सल्ला तुमच्या मुलासाठी वैयक्तिक शिफारसी देतो.`,
  },
  system: {
    error: {
      kicker: "काहीतरी चूक झाली",
      title: "अनपेक्षित अडचण आली",
      description:
        "कृपया पुन्हा प्रयत्न करा. समस्या कायम राहिल्यास थेट क्लिनिकशी संपर्क साधा — आम्ही मदतीसाठी येथे आहोत.",
      tryAgain: "पुन्हा प्रयत्न करा",
      goHome: "होमवर जा",
      call: (phone) => `${phone} वर कॉल करा`,
    },
    notFound: {
      kicker: "पृष्ठ सापडले नाही",
      title: "चला तुम्हाला परत घरी नेऊ",
      description: "तुम्ही शोधत असलेले पृष्ठ हलले असू शकते — पण काळजी नेहमी एका क्लिकवर आहे.",
      goHome: "होमवर जा",
    },
    loading: "लोड होत आहे...",
  },
};

const content: Record<Locale, Phase3Content> = { en, hi, mr };

export function getPhase3Content(locale: Locale): Phase3Content {
  return content[locale] ?? en;
}
