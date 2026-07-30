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
  videos: { title: string; description: string }[];
  mediaShowcase: {
    kicker: string;
    title: string;
    description: string;
    photoLabel: string;
    previous: string;
    next: string;
    goToSlideLabel: string;
    videoTitle: string;
    videoDescription: string;
    playVideoLabel: string;
  };
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
        parent: "Mother of Anup Mehta",
        quote:
          "Finding the right support for a child with Down syndrome makes all the difference, and we found that at Jeet Child Development Center. After three years of continuous occupational therapy, we have seen immense growth in our son's daily skills and confidence. Dr. Sharuja and her team are exceptionally skilled, deeply compassionate, and completely invested in every child's success.",
        milestone: "Three years of growth in daily skills and confidence",
      },
      {
        parent: "Mother of Mehaan Gandhi",
        quote:
          "We are very happy with the progress Mehaan has made through occupational therapy at JEET CDC. Since starting therapy with Dr. Sharuja, he has become calmer, more attentive, and listens to instructions much better. We are grateful for the care, patience, and support provided throughout his journey.",
        milestone: "Calmer, more attentive, and following instructions better",
      },
      {
        parent: "Kintu Gandhi (Ridhan's Mom)",
        quote:
          "My son is on the autism spectrum, and we have been taking occupational therapy sessions with Dr. Sharuja for the last 4.5 years. The doctor, her team of trained therapists, and the supporting staff are all helpful, co-operative, and very motivating. They try their best to make my child independent in every way — and they counsel us parents too, giving us the confidence to face the social world outside. Whenever my son enters the session room, he is greeted with a sweet smile and a peppy hello to lift his mood. Me and my child are lucky to have them.",
        milestone: "4.5 years of steady progress towards independence",
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
      "Early Intervention": "Early Intervention",
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
      {
        title: "Supported Stepping Practice",
        category: "Child-Friendly Environment",
        alt: "Child practicing careful stepping on colorful sensory floor pads in the pediatric therapy gym",
      },
      {
        title: "Therapist-Guided Balance Play",
        category: "Therapy Equipment",
        alt: "Therapist guiding a child through a playful balance and coordination activity with clinic equipment",
      },
      {
        title: "Climbing Wall Step Practice",
        category: "Child-Friendly Environment",
        alt: "Child practicing movement planning near a colorful climbing wall and sensory stepping pads",
      },
      {
        title: "Ring Swing Movement Play",
        category: "Therapy Room",
        alt: "Child using a ring swing in a supervised pediatric sensory gym session",
      },
      {
        title: "Supported Swing Session",
        category: "Therapy Room",
        alt: "Therapist supporting a child during a sensory swing activity in the clinic gym",
      },
      {
        title: "Sensory Rattle Play",
        category: "Early Intervention",
        alt: "Dr. Sharuja smiling with a baby seated on a textured therapy ball while playing with a bell rattle",
      },
      {
        title: "Finger Puppet Engagement",
        category: "Early Intervention",
        alt: "Dr. Sharuja engaging a baby face-to-face with colorful animal finger puppets during early intervention play",
      },
      {
        title: "Crawling Milestone Practice",
        category: "Early Intervention",
        alt: "Baby practicing crawling on a padded therapy mat while Dr. Sharuja guards and encourages the movement",
      },
      {
        title: "Hands-On Crawling Support",
        category: "Early Intervention",
        alt: "Therapist supporting an infant's hips during crawling practice on a soft blue mat in the therapy room",
      },
      {
        title: "Supported Standing Practice",
        category: "Early Intervention",
        alt: "Infant practicing supported standing at a textured therapy ball in the spacious pediatric gym",
      },
      {
        title: "Standing at the Ball",
        category: "Early Intervention",
        alt: "Baby pulling up to stand against a textured therapy ball with gentle therapist support",
      },
      {
        title: "Reach and Grasp Wall Play",
        category: "Early Intervention",
        alt: "Baby reaching for colorful balls fixed to the wall, building shoulder strength and hand-eye coordination",
      },
      {
        title: "Infant Leg Strengthening",
        category: "Early Intervention",
        alt: "Therapist guiding a gentle leg-strengthening and rolling exercise for an infant on the therapy mat",
      },
      {
        title: "Blanket Swing Calming",
        category: "Early Intervention",
        alt: "Infant relaxing in a soft pink blanket swing held by two therapists for vestibular input",
      },
      {
        title: "Ball Pit Music Play",
        category: "Child-Friendly Environment",
        alt: "Baby playing a colorful xylophone in the ball pit with Dr. Sharuja during a sensory play session",
      },
      {
        title: "Balance Beam Coordination",
        category: "Therapy Equipment",
        alt: "Young girl walking a wavy tactile balance beam while balancing a disc game with therapist guidance",
      },
      {
        title: "Trampoline Gross Motor Play",
        category: "Therapy Equipment",
        alt: "Girl jumping on a mini trampoline with hand support from a smiling therapist",
      },
      {
        title: "Assisted Wall Climbing",
        category: "Child-Friendly Environment",
        alt: "Young girl climbing a colorful climbing wall with close therapist support for motor planning and strength",
      },
      {
        title: "Vestibular Swing Session",
        category: "Therapy Room",
        alt: "Girl seated on a therapy swing beside the climbing wall with a smiling therapist providing support",
      },
      {
        title: "Motor Planning Ring Jumps",
        category: "Therapy Room",
        alt: "Boy jumping through a course of colorful floor rings while the therapist cheers him on",
      },
    ],
    videos: [
      {
        title: "Handwriting Board Practice",
        description: "Therapist-guided handwriting practice on the chalkboard — building letter formation, pencil control, and visual-motor skills.",
      },
      {
        title: "Sensory Pathway Guided Play",
        description: "Child navigating a sensory pathway with therapist support, building body awareness, balance, and motor planning.",
      },
      {
        title: "Climbing Wall Balance Practice",
        description: "Movement-based therapy on the climbing wall — supporting coordination, strength, and confidence.",
      },
      {
        title: "Sensory Swing Session",
        description: "Sensory swing therapy session supporting vestibular processing, regulation, and body awareness.",
      },
    ],
    mediaShowcase: {
      kicker: "Inside Our Clinic",
      title: "A warm space designed for children to move, explore, and grow",
      description: "Our therapy gym and clinic spaces are thoughtfully designed for pediatric play-based intervention — safe, sensory-rich, and child-friendly.",
      photoLabel: "Photo",
      previous: "Previous",
      next: "Next",
      goToSlideLabel: "Go to slide",
      videoTitle: "Therapy in Motion",
      videoDescription: "Watch how our play-based sessions look in practice.",
      playVideoLabel: "Play video",
    },
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
        parent: "अनुप मेहता की माँ",
        quote:
          "डाउन सिंड्रोम वाले बच्चे के लिए सही सहायता मिलना बहुत मायने रखता है, और वह हमें जीत चाइल्ड डेवलपमेंट सेंटर में मिली। तीन साल की निरंतर ऑक्यूपेशनल थेरेपी के बाद हमारे बेटे के दैनिक कौशल और आत्मविश्वास में अपार वृद्धि देखी है। डॉ. शारुजा और उनकी टीम अत्यंत कुशल, करुणामय और हर बच्चे की सफलता के लिए समर्पित हैं।",
        milestone: "तीन वर्षों में दैनिक कौशल और आत्मविश्वास में वृद्धि",
      },
      {
        parent: "मेहान गांधी की माँ",
        quote:
          "ऑक्यूपेशनल थेरेपी से मेहान की प्रगति से हम बहुत खुश हैं। डॉ. शारुजा के साथ थेरेपी शुरू करने के बाद वह शांत और अधिक एकाग्र हुआ है, और निर्देशों को बेहतर सुनता है। पूरी यात्रा में मिली देखभाल, धैर्य और सहयोग के लिए हम आभारी हैं।",
        milestone: "शांत, अधिक एकाग्र और निर्देशों का बेहतर पालन",
      },
      {
        parent: "किंतु गांधी (रिधान की माँ)",
        quote:
          "मेरा बेटा ऑटिज़्म स्पेक्ट्रम पर है, और हम पिछले साढ़े चार वर्षों से डॉ. शारुजा के साथ ऑक्यूपेशनल थेरेपी कर रहे हैं। डॉक्टर, उनकी प्रशिक्षित थेरेपिस्ट टीम और सहायक स्टाफ — सभी बहुत सहयोगी और प्रेरणादायक हैं। वे मेरे बच्चे को हर तरह से आत्मनिर्भर बनाने की पूरी कोशिश करते हैं — और हम माता-पिता का भी मार्गदर्शन कर बाहरी दुनिया का सामना करने का आत्मविश्वास देते हैं। जब भी मेरा बेटा सत्र कक्ष में आता है, मीठी मुस्कान से उसका स्वागत होता है। हम भाग्यशाली हैं कि वे हमारे साथ हैं।",
        milestone: "आत्मनिर्भरता की ओर साढ़े चार वर्षों की निरंतर प्रगति",
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
      "Early Intervention": "प्रारंभिक हस्तक्षेप",
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
      {
        title: "सहारे के साथ कदम अभ्यास",
        category: "Child-Friendly Environment",
        alt: "बाल थेरेपी जिम में रंगीन सेंसरी पैड पर सावधानी से कदम रखता बच्चा",
      },
      {
        title: "थेरेपिस्ट-निर्देशित संतुलन खेल",
        category: "Therapy Equipment",
        alt: "क्लिनिक उपकरणों के साथ बच्चे को संतुलन और समन्वय गतिविधि कराती थेरेपिस्ट",
      },
      {
        title: "क्लाइम्बिंग वॉल अभ्यास",
        category: "Child-Friendly Environment",
        alt: "रंगीन क्लाइम्बिंग वॉल और सेंसरी पैड के पास मूवमेंट प्लानिंग का अभ्यास करता बच्चा",
      },
      {
        title: "रिंग झूला खेल",
        category: "Therapy Room",
        alt: "पर्यवेक्षित सेंसरी जिम सत्र में रिंग झूले का उपयोग करता बच्चा",
      },
      {
        title: "सहारे के साथ झूला सत्र",
        category: "Therapy Room",
        alt: "क्लिनिक जिम में सेंसरी झूला गतिविधि के दौरान बच्चे को सहारा देती थेरेपिस्ट",
      },
      {
        title: "सेंसरी झुनझुना खेल",
        category: "Early Intervention",
        alt: "टेक्सचर्ड थेरेपी बॉल पर बैठे शिशु के साथ झुनझुने से खेलतीं मुस्कुराती डॉ. शारुजा",
      },
      {
        title: "फिंगर पपेट जुड़ाव",
        category: "Early Intervention",
        alt: "प्रारंभिक हस्तक्षेप खेल के दौरान रंगीन फिंगर पपेट से शिशु से संवाद करतीं डॉ. शारुजा",
      },
      {
        title: "रेंगने का अभ्यास",
        category: "Early Intervention",
        alt: "गद्देदार थेरेपी मैट पर रेंगने का अभ्यास करता शिशु, प्रोत्साहित करतीं डॉ. शारुजा",
      },
      {
        title: "रेंगने में सहायता",
        category: "Early Intervention",
        alt: "थेरेपी कक्ष में नरम मैट पर रेंगने के अभ्यास में शिशु के कूल्हों को सहारा देती थेरेपिस्ट",
      },
      {
        title: "सहारे के साथ खड़ा होना",
        category: "Early Intervention",
        alt: "विशाल बाल जिम में टेक्सचर्ड थेरेपी बॉल के सहारे खड़े होने का अभ्यास करता शिशु",
      },
      {
        title: "बॉल के सहारे खड़ा होना",
        category: "Early Intervention",
        alt: "थेरेपिस्ट के कोमल सहारे से टेक्सचर्ड बॉल पकड़कर खड़ा होता शिशु",
      },
      {
        title: "पहुंचना और पकड़ना",
        category: "Early Intervention",
        alt: "दीवार पर लगी रंगीन गेंदों तक पहुंचता शिशु — कंधे की मजबूती और हाथ-आंख समन्वय",
      },
      {
        title: "शिशु पैर मजबूती",
        category: "Early Intervention",
        alt: "थेरेपी मैट पर शिशु के लिए कोमल पैर-मजबूती और करवट व्यायाम करातीं थेरेपिस्ट",
      },
      {
        title: "कंबल झूला शांति",
        category: "Early Intervention",
        alt: "वेस्टिबुलर इनपुट के लिए दो थेरेपिस्ट द्वारा पकड़े नरम कंबल झूले में आराम करता शिशु",
      },
      {
        title: "बॉल पिट संगीत खेल",
        category: "Child-Friendly Environment",
        alt: "सेंसरी खेल सत्र में डॉ. शारुजा के साथ बॉल पिट में रंगीन जाइलोफोन बजाता शिशु",
      },
      {
        title: "संतुलन बीम समन्वय",
        category: "Therapy Equipment",
        alt: "थेरेपिस्ट के मार्गदर्शन में लहरदार बैलेंस बीम पर चलते हुए डिस्क गेम संभालती बच्ची",
      },
      {
        title: "ट्रैम्पोलिन खेल",
        category: "Therapy Equipment",
        alt: "मुस्कुराती थेरेपिस्ट के हाथों के सहारे मिनी ट्रैम्पोलिन पर कूदती बच्ची",
      },
      {
        title: "सहायता से दीवार चढ़ाई",
        category: "Child-Friendly Environment",
        alt: "मोटर प्लानिंग और मजबूती के लिए थेरेपिस्ट के करीबी सहयोग से रंगीन दीवार चढ़ती बच्ची",
      },
      {
        title: "वेस्टिबुलर झूला सत्र",
        category: "Therapy Room",
        alt: "क्लाइम्बिंग वॉल के पास थेरेपी झूले पर बैठी बच्ची, सहारा देतीं मुस्कुराती थेरेपिस्ट",
      },
      {
        title: "मोटर प्लानिंग रिंग कूद",
        category: "Therapy Room",
        alt: "रंगीन रिंगों के रास्ते पर कूदता बच्चा, उत्साह बढ़ातीं थेरेपिस्ट",
      },
    ],
    videos: [
      {
        title: "हस्तलेखन बोर्ड अभ्यास",
        description: "चॉकबोर्ड पर थेरेपिस्ट-निर्देशित हस्तलेखन अभ्यास — अक्षर बनावट, पेंसिल नियंत्रण और दृश्य-मोटर कौशल का विकास।",
      },
      {
        title: "सेंसरी पाथवे निर्देशित खेल",
        description: "थेरेपिस्ट के सहयोग से सेंसरी पाथवे पार करता बच्चा — शरीर-जागरूकता, संतुलन और मोटर प्लानिंग का विकास।",
      },
      {
        title: "क्लाइम्बिंग वॉल संतुलन अभ्यास",
        description: "क्लाइम्बिंग वॉल पर गति-आधारित थेरेपी — समन्वय, मजबूती और आत्मविश्वास को सहारा।",
      },
      {
        title: "सेंसरी झूला सत्र",
        description: "वेस्टिबुलर प्रोसेसिंग, नियमन और शरीर-जागरूकता को सहारा देता सेंसरी झूला थेरेपी सत्र।",
      },
    ],
    mediaShowcase: {
      kicker: "हमारे क्लिनिक के अंदर",
      title: "बच्चों के हिलने-डुलने, खोजने और बढ़ने के लिए बना एक स्नेहभरा स्थान",
      description: "हमारा थेरेपी जिम और क्लिनिक स्थान बाल खेल-आधारित हस्तक्षेप के लिए सोच-समझकर बनाए गए हैं — सुरक्षित, संवेदी-समृद्ध और बच्चों के अनुकूल।",
      photoLabel: "फोटो",
      previous: "पिछला",
      next: "अगला",
      goToSlideLabel: "स्लाइड पर जाएँ",
      videoTitle: "गति में थेरेपी",
      videoDescription: "देखें हमारे खेल-आधारित सत्र व्यवहार में कैसे दिखते हैं।",
      playVideoLabel: "वीडियो चलाएँ",
    },
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
        parent: "अनुप मेहताची आई",
        quote:
          "डाउन सिंड्रोम असलेल्या मुलासाठी योग्य आधार मिळणे खूप महत्त्वाचे असते, आणि तो आम्हाला जीत चाइल्ड डेव्हलपमेंट सेंटरमध्ये मिळाला. तीन वर्षांच्या सातत्यपूर्ण ऑक्युपेशनल थेरपीनंतर आमच्या मुलाच्या दैनंदिन कौशल्यांत आणि आत्मविश्वासात प्रचंड वाढ झाली आहे. डॉ. शरुजा आणि त्यांची टीम अत्यंत कुशल, करुणामय आणि प्रत्येक मुलाच्या यशासाठी समर्पित आहे.",
        milestone: "तीन वर्षांत दैनंदिन कौशल्ये आणि आत्मविश्वासात वाढ",
      },
      {
        parent: "मेहान गांधीची आई",
        quote:
          "ऑक्युपेशनल थेरपीमुळे मेहानच्या प्रगतीने आम्ही खूप आनंदी आहोत. डॉ. शरुजांसोबत थेरपी सुरू केल्यापासून तो शांत आणि अधिक लक्ष देणारा झाला आहे, आणि सूचना चांगल्या ऐकतो. संपूर्ण प्रवासात मिळालेल्या काळजी, संयम आणि आधाराबद्दल आम्ही कृतज्ञ आहोत.",
        milestone: "शांत, अधिक लक्ष देणारा आणि सूचनांचे चांगले पालन",
      },
      {
        parent: "किंतु गांधी (रिधानची आई)",
        quote:
          "माझा मुलगा ऑटिझम स्पेक्ट्रमवर आहे, आणि गेली साडेचार वर्षे आम्ही डॉ. शरुजांकडे ऑक्युपेशनल थेरपी घेत आहोत. डॉक्टर, त्यांची प्रशिक्षित थेरपिस्ट टीम आणि सहाय्यक कर्मचारी — सर्व अतिशय सहकार्यशील आणि प्रेरणादायक आहेत. ते माझ्या मुलाला प्रत्येक बाबतीत स्वावलंबी बनवण्याचा पूर्ण प्रयत्न करतात — आणि आम्हा पालकांचेही समुपदेशन करून बाहेरच्या जगाला सामोरे जाण्याचा आत्मविश्वास देतात. माझा मुलगा सत्र कक्षात येताच गोड हास्याने त्याचे स्वागत होते. ते आमच्यासोबत आहेत हे आमचे भाग्य.",
        milestone: "स्वावलंबनाकडे साडेचार वर्षांची सातत्यपूर्ण प्रगती",
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
      "Early Intervention": "लवकर हस्तक्षेप",
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
        title: "हालचाल खेळ क्षेत्र",
        category: "Child-Friendly Environment",
        alt: "climbing wall, tactile pads आणि मुलांसाठी अनुकूल movement equipment असलेला उजळ pediatric therapy play zone",
      },
      {
        title: "Sensory Gym",
        category: "Therapy Room",
        alt: "platform swing आणि रंगीत climbing equipment असलेला indoor pediatric sensory gym",
      },
      {
        title: "आधारासह पाऊल सराव",
        category: "Child-Friendly Environment",
        alt: "बाल थेरपी जिममध्ये रंगीत सेन्सरी पॅडवर काळजीपूर्वक पाऊल टाकणारे मूल",
      },
      {
        title: "थेरपिस्ट-मार्गदर्शित संतुलन खेळ",
        category: "Therapy Equipment",
        alt: "क्लिनिक उपकरणांसह मुलाला संतुलन आणि समन्वय क्रिया करून घेणाऱ्या थेरपिस्ट",
      },
      {
        title: "क्लाइंबिंग वॉल सराव",
        category: "Child-Friendly Environment",
        alt: "रंगीत क्लाइंबिंग वॉल आणि सेन्सरी पॅडजवळ हालचाल नियोजनाचा सराव करणारे मूल",
      },
      {
        title: "रिंग झोका खेळ",
        category: "Therapy Room",
        alt: "पर्यवेक्षित सेन्सरी जिम सत्रात रिंग झोक्याचा वापर करणारे मूल",
      },
      {
        title: "आधारासह झोका सत्र",
        category: "Therapy Room",
        alt: "क्लिनिक जिममध्ये सेन्सरी झोका क्रियेदरम्यान मुलाला आधार देणाऱ्या थेरपिस्ट",
      },
      {
        title: "सेन्सरी खुळखुळा खेळ",
        category: "Early Intervention",
        alt: "टेक्श्चर्ड थेरपी बॉलवर बसलेल्या बाळासोबत खुळखुळ्याने खेळणाऱ्या हसतमुख डॉ. शारुजा",
      },
      {
        title: "फिंगर पपेट संवाद",
        category: "Early Intervention",
        alt: "लवकर हस्तक्षेप खेळादरम्यान रंगीत फिंगर पपेटने बाळाशी संवाद साधणाऱ्या डॉ. शारुजा",
      },
      {
        title: "रांगण्याचा सराव",
        category: "Early Intervention",
        alt: "गादीच्या थेरपी मॅटवर रांगण्याचा सराव करणारे बाळ, प्रोत्साहन देणाऱ्या डॉ. शारुजा",
      },
      {
        title: "रांगण्यास मदत",
        category: "Early Intervention",
        alt: "थेरपी कक्षात मऊ मॅटवर रांगण्याच्या सरावात बाळाच्या कमरेला आधार देणाऱ्या थेरपिस्ट",
      },
      {
        title: "आधाराने उभे राहणे",
        category: "Early Intervention",
        alt: "प्रशस्त बाल जिममध्ये टेक्श्चर्ड थेरपी बॉलच्या आधाराने उभे राहण्याचा सराव करणारे बाळ",
      },
      {
        title: "बॉलच्या आधाराने उभे राहणे",
        category: "Early Intervention",
        alt: "थेरपिस्टच्या हळुवार आधाराने टेक्श्चर्ड बॉल धरून उभे राहणारे बाळ",
      },
      {
        title: "पोहोचणे आणि पकडणे",
        category: "Early Intervention",
        alt: "भिंतीवरील रंगीत चेंडूंपर्यंत पोहोचणारे बाळ — खांद्याची ताकद आणि हात-डोळा समन्वय",
      },
      {
        title: "बाळाच्या पायांचे बळकटीकरण",
        category: "Early Intervention",
        alt: "थेरपी मॅटवर बाळासाठी हळुवार पाय-बळकटीकरण आणि कूस व्यायाम करून घेणाऱ्या थेरपिस्ट",
      },
      {
        title: "ब्लँकेट झोका शांतता",
        category: "Early Intervention",
        alt: "व्हेस्टिब्युलर इनपुटसाठी दोन थेरपिस्टनी धरलेल्या मऊ ब्लँकेट झोक्यात विसावलेले बाळ",
      },
      {
        title: "बॉल पिट संगीत खेळ",
        category: "Child-Friendly Environment",
        alt: "सेन्सरी खेळ सत्रात डॉ. शारुजांसोबत बॉल पिटमध्ये रंगीत झायलोफोन वाजवणारे बाळ",
      },
      {
        title: "संतुलन बीम समन्वय",
        category: "Therapy Equipment",
        alt: "थेरपिस्टच्या मार्गदर्शनाखाली नागमोडी बॅलन्स बीमवर चालत डिस्क गेम सांभाळणारी मुलगी",
      },
      {
        title: "ट्रॅम्पोलिन खेळ",
        category: "Therapy Equipment",
        alt: "हसतमुख थेरपिस्टच्या हातांच्या आधाराने मिनी ट्रॅम्पोलिनवर उड्या मारणारी मुलगी",
      },
      {
        title: "मदतीने भिंत चढणे",
        category: "Child-Friendly Environment",
        alt: "मोटर नियोजन आणि ताकदीसाठी थेरपिस्टच्या जवळच्या आधाराने रंगीत भिंत चढणारी मुलगी",
      },
      {
        title: "व्हेस्टिब्युलर झोका सत्र",
        category: "Therapy Room",
        alt: "क्लाइंबिंग वॉलजवळ थेरपी झोक्यावर बसलेली मुलगी, आधार देणाऱ्या हसतमुख थेरपिस्ट",
      },
      {
        title: "मोटर नियोजन रिंग उड्या",
        category: "Therapy Room",
        alt: "रंगीत रिंगांच्या मार्गावर उड्या मारणारा मुलगा, प्रोत्साहन देणाऱ्या थेरपिस्ट",
      },
    ],
    videos: [
      {
        title: "लेखन बोर्ड सराव",
        description: "चॉकबोर्डवर थेरपिस्ट-मार्गदर्शित लेखन सराव — अक्षर रचना, पेन्सिल नियंत्रण आणि दृश्य-मोटर कौशल्यांची बांधणी.",
      },
      {
        title: "सेन्सरी पाथवे मार्गदर्शित खेळ",
        description: "थेरपिस्टच्या आधाराने सेन्सरी पाथवे पार करणारे मूल — शरीर-जाणीव, संतुलन आणि मोटर नियोजनाची बांधणी.",
      },
      {
        title: "क्लाइंबिंग वॉल संतुलन सराव",
        description: "क्लाइंबिंग वॉलवर हालचाल-आधारित थेरपी — समन्वय, ताकद आणि आत्मविश्वासाला आधार.",
      },
      {
        title: "सेन्सरी झोका सत्र",
        description: "व्हेस्टिब्युलर प्रक्रिया, नियमन आणि शरीर-जाणिवेला आधार देणारे सेन्सरी झोका थेरपी सत्र.",
      },
    ],
    mediaShowcase: {
      kicker: "आमच्या क्लिनिकच्या आत",
      title: "मुलांना हालचाल, शोध आणि वाढीसाठी घडवलेली एक उबदार जागा",
      description: "आमची थेरपी जिम आणि क्लिनिक जागा बाल खेळ-आधारित हस्तक्षेपासाठी विचारपूर्वक घडवलेल्या आहेत — सुरक्षित, संवेदी-समृद्ध आणि बालस्नेही.",
      photoLabel: "फोटो",
      previous: "मागील",
      next: "पुढील",
      goToSlideLabel: "स्लाइडवर जा",
      videoTitle: "गतीमधील थेरपी",
      videoDescription: "आमची खेळ-आधारित सत्रे प्रत्यक्षात कशी दिसतात ते पहा.",
      playVideoLabel: "व्हिडिओ प्ले करा",
    },
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
