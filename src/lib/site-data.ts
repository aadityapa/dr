export const siteConfig = {
  name: "Thrive with sharuja",
  shortName: "Thrive with sharuja",
  doctorName: "Dr. Sharuja Sarap",
  title: "Pediatric Occupational Therapist",
  tagline: "Belonging Without Boundaries",
  heroHeadline: "Helping Children Regulate, Connect, Participate & Thrive",
  heroSubheadline:
    "Compassionate Pediatric Occupational Therapy helping children build confidence, independence, participation, and joyful everyday experiences.",
  description:
    "Thrive with sharuja offers evidence-based pediatric occupational therapy in Mumbai with Dr. Sharuja Sarap — sensory-integrative, movement-based care for children from birth to 14 years.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://drsharujasarap.vercel.app",
  email: "sharujasaraf@gmail.com",
  phone: "+91 9820525197",
  phoneDisplay: "9820525197",
  whatsapp: "919820525197",
  registrationNumber: "051388",
  experienceYears: 16,
  ageRange: "0 – 14 Years",
  address: {
    line1: "Manhar Medical And Jeet Child Development Centre",
    line2: "2-A, Gyan Kutir, S.V.P. Road",
    line3: "Near Municipal Garden, Kandivali (West)",
    city: "Mumbai",
    postalCode: "400067",
    full: "Manhar Medical And Jeet Child Development Centre, 2-A, Gyan Kutir, S.V.P. Road, Near Municipal Garden, Kandivali (West), Mumbai – 400067",
  },
  timings: "9:00 AM – 5:00 PM",
  mapsQuery: "Manhar Medical Jeet Child Development Centre Kandivali West Mumbai",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d72.84!3d19.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzM2LjAiTiA3MsKwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1",
};

export const doctorProfile = {
  bio: "Dr. Sharuja Sarap brings both expertise and heartfelt care to her work as a Pediatric Occupational Therapist. She uses a gentle movement and sensory-based integrative approach to help children grow with confidence and joy. Her therapy philosophy focuses on nurturing each child's strengths while supporting meaningful participation in everyday life.",
  qualifications: [
    "Ph.D. Scholar",
    "Master's in Pediatric Occupational Therapy",
    "Certified Brain Gym Instructor & Practitioner",
  ],
  certifications: [
    "RMTI (Rhythmic Movement Training Integration)",
    "HWT (Handwriting Without Tears)",
    "OPT (Oral Placement Therapy)",
    "Aquatherapy (IATF)",
    "PIASTM (Pediatric Instrument Assisted Soft Tissue Mobilization)",
    "KT (Kinesio Taping – KTI 3)",
    "MNRI (Masgutova Neurosensorimotor Reflex Integration)",
    "KDCT (Kinesio Dry Cupping Therapy)",
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Therapy Journey", href: "/therapy-journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Milestones", href: "/testimonials-milestones" },
  { label: "Contact", href: "/contact" },
  { label: "Appointment", href: "/appointment" },
];

export const trustBadges = [
  "16+ Years Experience",
  "Registration No. 051388",
  "Certified Pediatric Occupational Therapist",
  "Evidence-Based Therapy Programs",
];

export const trustStats = [
  { label: "Years of Experience", value: 16, suffix: "+" },
  { label: "Therapy Programs", value: 4, suffix: "" },
  { label: "Families Supported", value: 2000, suffix: "+" },
  { label: "Specialized Certifications", value: 8, suffix: "+" },
];

export const therapyFlow = [
  { step: "Regulate", description: "Calm the nervous system and build sensory safety" },
  { step: "Connect", description: "Foster trust, engagement, and relational warmth" },
  { step: "Participate", description: "Build skills for daily life, school, and play" },
  { step: "Thrive", description: "Celebrate independence, confidence, and joyful growth" },
];

export const therapyJourneySteps = [
  {
    step: 1,
    title: "Appointment",
    description:
      "Book a consultation to share your concerns. We listen with empathy and guide you on the best next steps for your child.",
    icon: "Calendar",
  },
  {
    step: 2,
    title: "Evaluation",
    description:
      "A comprehensive, child-friendly assessment across sensory, motor, cognitive, and daily living domains to understand your child's unique profile.",
    icon: "ClipboardCheck",
  },
  {
    step: 3,
    title: "Therapy Sessions",
    description:
      "Personalized, evidence-based intervention with regular progress updates — empowering your child at home, school, and in the community.",
    icon: "HeartHandshake",
  },
];

export const services = [
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    headline: "Unlocking Potential Through Meaningful Participation",
    summary:
      "Evidence-based OT helping children develop skills for learning, play, self-care, social interaction, and independence.",
    content:
      "Every child deserves the opportunity to participate confidently in everyday life. Occupational Therapy helps children develop the skills needed for learning, play, self-care, social interaction, and independence. Whether a child struggles with attention, sensory processing, motor coordination, handwriting, daily routines, or school participation, our individualized therapy programs focus on building strengths and overcoming challenges in a supportive and engaging environment. Through evidence-based assessment and intervention, we help children improve their confidence, functional abilities, and overall quality of life—empowering them to succeed at home, in school, and within their community.",
    icon: "Hand",
    ageGroups: "Birth to 14 years",
    areasAddressed: [
      "Sensory Processing",
      "Fine & Gross Motor Skills",
      "Attention & Concentration",
      "Self-Care Skills",
      "Social Participation",
      "School Readiness",
      "Executive Functioning",
      "Emotional Regulation",
    ],
    benefits: [
      "Improved functional independence in daily routines",
      "Better sensory regulation and attention",
      "Stronger motor coordination and school readiness",
      "Greater confidence in social participation",
    ],
    process: [
      "Comprehensive developmental and sensory assessment",
      "Individualized goal-setting with families",
      "Play-based, child-centered therapy sessions",
      "Home and school carryover strategies",
    ],
    faqs: [
      {
        q: "What age groups do you work with?",
        a: "We support children from birth to 14 years with individualized programs for each developmental stage.",
      },
      {
        q: "How long does therapy typically last?",
        a: "Duration varies based on goals. Many families see meaningful progress within 8–12 weeks of consistent sessions.",
      },
    ],
    relatedConditions: [
      "Autism Spectrum Disorder",
      "ADHD",
      "Developmental Delay",
      "Sensory Processing Difficulties",
    ],
  },
  {
    slug: "aquatic-therapy",
    title: "Aquatic Therapy",
    headline: "Transforming Growth Through the Power of Water",
    summary:
      "Water-based therapy supporting physical, sensory, emotional, and social development in a fun, engaging environment.",
    content:
      "Water provides a unique therapeutic environment where children can move, explore, and succeed with greater freedom and confidence. Aquatic Therapy combines the therapeutic benefits of water with individualized intervention to support physical, sensory, emotional, and social development.",
    icon: "Waves",
    ageGroups: "2 to 14 years",
    benefits: [
      "Improved Balance and Coordination",
      "Enhanced Strength and Endurance",
      "Better Sensory Regulation",
      "Increased Body Awareness",
      "Improved Motor Planning",
      "Greater Confidence and Participation",
      "Fun and Engaging Learning Environment",
    ],
    process: [
      "Water safety and baseline movement assessment",
      "Therapeutic activities in a supportive aquatic setting",
      "Progress tracking with functional carryover goals",
    ],
    faqs: [
      {
        q: "Does my child need to know how to swim?",
        a: "No. Sessions are fully supervised and adapted to each child's comfort and ability level.",
      },
      {
        q: "Who benefits from aquatic therapy?",
        a: "Children with motor challenges, sensory needs, low muscle tone, or those who thrive in water-based movement.",
      },
    ],
    relatedConditions: ["Cerebral Palsy", "Developmental Delay", "Motor Coordination Challenges"],
  },
  {
    slug: "brain-gym",
    title: "Brain Gym®",
    headline: "Learning Begins with Movement",
    summary:
      "Movement-based approach supporting learning, attention, coordination, and emotional well-being.",
    content:
      "Brain Gym® is a movement-based approach designed to support learning, attention, coordination, and emotional well-being. As a Certified Brain Gym Instructor & Practitioner, Dr. Sharuja integrates purposeful movement to help children access their full learning potential.",
    icon: "Brain",
    ageGroups: "4 to 14 years",
    brainGymSupports: [
      "Attention and Focus",
      "Learning Readiness",
      "Memory and Processing",
      "Reading and Writing Skills",
      "Coordination and Balance",
      "Emotional Regulation",
      "Confidence and Motivation",
    ],
    benefits: [
      "Improved classroom focus and learning readiness",
      "Better coordination between brain and body",
      "Enhanced reading, writing, and processing skills",
    ],
    process: [
      "Learning profile and movement assessment",
      "Targeted Brain Gym® activities and exercises",
      "Home practice routines for sustained progress",
    ],
    faqs: [
      {
        q: "Is Brain Gym only for children with learning difficulties?",
        a: "No. It benefits any child who needs support with focus, coordination, or academic readiness.",
      },
      {
        q: "Can Brain Gym be combined with OT?",
        a: "Yes. It integrates beautifully with occupational therapy for holistic development.",
      },
    ],
    relatedConditions: ["ADHD", "Learning Difficulties", "Attention Difficulties"],
  },
  {
    slug: "handwriting-training",
    title: "Handwriting Training",
    headline: "Building Confidence One Letter at a Time",
    summary:
      "Specialized handwriting support using HWT and evidence-based techniques for pencil control, formation, and classroom readiness.",
    content:
      "Handwriting is more than putting words on paper—it is a complex skill requiring coordination of visual, motor, sensory, cognitive, and postural abilities. Our Handwriting Without Tears (HWT) certified approach builds confidence through structured, engaging practice.",
    icon: "PenLine",
    ageGroups: "4 to 14 years",
    skillsDeveloped: [
      "Pencil Control and Grip",
      "Letter Formation",
      "Writing Speed and Endurance",
      "Visual-Motor Integration",
      "Hand Strength and Dexterity",
      "Postural Stability",
      "Classroom Readiness",
    ],
    benefits: [
      "Legible, fluent handwriting for school success",
      "Improved hand strength and fine motor control",
      "Greater confidence in written work",
    ],
    process: [
      "Handwriting and fine motor assessment",
      "Structured HWT-based intervention plan",
      "School collaboration and home practice support",
    ],
    faqs: [
      {
        q: "My child avoids writing tasks. Can you help?",
        a: "Yes. We address underlying motor, sensory, and postural factors that make writing difficult or frustrating.",
      },
      {
        q: "Do you work with schools?",
        a: "We provide recommendations and strategies that teachers can use to support your child in the classroom.",
      },
    ],
    relatedConditions: ["Handwriting Difficulties", "Learning Difficulties", "Motor Coordination Challenges"],
  },
] as const;

export const conditions = [
  {
    slug: "autism-spectrum-disorder",
    title: "Autism Spectrum Disorder",
    description:
      "We support children with ASD in sensory regulation, communication readiness, social participation, and daily routine independence through structured, play-led interventions.",
    reassurance:
      "Every child's unique way of learning is respected, celebrated, and nurtured with consistency and warmth.",
  },
  {
    slug: "adhd",
    title: "ADHD",
    description:
      "Therapy focuses on attention regulation, impulse modulation, executive function, and emotional self-management to improve school and home functioning.",
    reassurance: "With the right strategies, children with ADHD can channel their strengths beautifully.",
  },
  {
    slug: "cerebral-palsy",
    title: "Cerebral Palsy",
    description:
      "We address posture, motor planning, adaptive skills, and functional participation with collaborative family-centered care.",
    reassurance: "Small functional gains create meaningful confidence for children and parents alike.",
  },
  {
    slug: "developmental-delay",
    title: "Developmental Delay",
    description:
      "Early, goal-focused intervention supports foundational milestones in movement, play, communication readiness, and self-care routines.",
    reassurance: "Timely support can significantly improve long-term independence and participation.",
  },
  {
    slug: "sensory-processing-difficulties",
    title: "Sensory Processing Difficulties",
    description:
      "We help children understand and regulate sensory input to reduce overwhelm, improve behavior, and increase daily engagement.",
    reassurance: "A calmer nervous system opens the door to learning, connection, and joyful growth.",
  },
  {
    slug: "learning-difficulties",
    title: "Learning Difficulties",
    description:
      "Movement-based and sensory-integrative approaches support reading, writing, processing, and classroom participation.",
    reassurance: "Learning becomes possible when the body and brain work together with confidence.",
  },
  {
    slug: "motor-coordination-challenges",
    title: "Motor Coordination Challenges",
    description:
      "Targeted intervention improves balance, motor planning, bilateral coordination, and confidence in physical activities.",
    reassurance: "With practice and the right support, coordination skills grow steadily over time.",
  },
  {
    slug: "handwriting-difficulties",
    title: "Handwriting Difficulties",
    description:
      "Certified HWT-based training addresses grip, formation, speed, and the underlying motor skills needed for fluent writing.",
    reassurance: "Clear, confident handwriting is achievable with the right foundation and practice.",
  },
  {
    slug: "attention-difficulties",
    title: "Attention Difficulties",
    description:
      "Brain Gym® and OT strategies help children sustain focus, manage distractions, and build learning readiness.",
    reassurance: "Attention skills can be strengthened through movement, structure, and compassionate support.",
  },
];

export const testimonials = [
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
];

export const milestones = [
  "First independent dressing routine",
  "Confident handwriting in the classroom",
  "Participating in birthday parties comfortably",
  "Self-feeding without distress",
  "Transitioning across daily activities with fewer meltdowns",
  "Successful school readiness milestones",
  "Improved balance and coordination in play",
  "Peer interaction in group settings",
];

export const galleryCategories = [
  "Therapy Room",
  "Assessment Area",
  "Aquatic Therapy",
  "Therapy Equipment",
  "Child-Friendly Environment",
] as const;

export const galleryItems = [
  {
    title: "Warm Therapy Room",
    category: "Therapy Room",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAszxr_aw7t2MBMC5q7Zdqqdz8C8Ha0zWn8ssz-mL9RU0cThEtPr055IlAYzGk-RFbotjgKGOCTNig_SQTeYmHk-bj-qhRzbsLVjUTMhgjMY8pOKrOaY0QxZOw9OreLZ2JpXVi2reTXBYgW_28gLkkmEO52fFiD2pCy4WIQea6LsvLKIC7SIVOe18xylTbcBE2DEj1dfNiBzZcSD9qe0AWaRbyc1O-a6GhdqvB9XaS7WZa-lZfF8ef6_59aDZcckn1vkLedvBlK4",
  },
  {
    title: "Assessment & Evaluation Space",
    category: "Assessment Area",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeoZkBYzn93ZY5eHYUUVXZKScDqSl4PilFvk0YMZi7yu3lIqh9KXLHADwpsnMvceBYYu6UR2bZUrv9KQYVwNvnE92ZZpbHcJLKLCxB80CEA13jwP7A6sjZ0GT5LFUn9d7OrsX3MK6-1eKi69xngkuoLl7Wos_8Xva82ZTiFzWKb2696wF702noRassWo_iPwVmpbj-45zzcxcBBvWZUtJN0h7QSWmYY-VGxNoSADl7wzyN0wF6jajP7hmQsjvg7pULU-fceNNYYUc",
  },
  {
    title: "Aquatic Therapy Session",
    category: "Aquatic Therapy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1tGtJdDw-86lEdpx-I69_MlMGwrBW_XudUkEM3fusMOYLjKWRBGhxlQXcJR4mhDJxpx1ySvxAwQEZqUlk3JHxsG-gqsmEzKKnkQRTL3KY3UcxWGUXiear5U9ppi84HnEiKs3cgsp3IMON5-swfmKiIeu3u3pukQyWIxAxcI8Sfthn2m04HLMGiBml4ymcem3d8o8PDYtb7ZQ-kZSY9iWaPfjay2RoYV5RT-o-EU5zjCZx1gof8J8eAj0oIRssT38aasQo6NxrRSc",
  },
  {
    title: "Sensory Equipment",
    category: "Therapy Equipment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD64jn5OFwenkccgK2NlqJOvDh9H9CxtBDZhju6lbekQ8OIi_-WJfZhTCup3Hj3RRP1rro1sfhBsHWkqVcWYUnQnvmVkjpAiputk_ytiPQRxf1QwvrpkXhdl196BO9KLUuLeK-QP6460pPQjyyMlu6k1UTRNa84k3Kj2RwPb-BBS6XUtw6oi9t_fDSBTpLfMQv4v1TFE8hUbKJVXHajE2MNqTAHbWV3Wh91B7SaC0AHMfBC0Klyok_BwrPOHRaL2tpQQ9mcpWXutRw",
  },
  {
    title: "Child-Friendly Play Zone",
    category: "Child-Friendly Environment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm8al5naOx-QQ-lNFcajeZGEjjiIGhO-kj_rAIxSvkEFrAW-2DEaxpjwDUhEfYFwZ40gTWfaq2Uz3DCzE2YUT9ndY30fpKW0PcTojUJpU6-QpyvGQKA4rkSV6IHdFxxPyZBf3QlQRnykgsxKp2-zyhQn3Z5aNOgUacjeoBbm7fu6xhG2CNF0Ng-o1Hrq2y2D4Udu_MV4nirnsKhnlACWz4PO6xOvZBv5skM9KrBsONS02KWLcGnAYAxCn4MlEnlwO2HsJ_rlwgb5g",
  },
  {
    title: "Sensory Gym",
    category: "Therapy Room",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA79cJAmtLdSx0b822x31t77ABNVo2UpWxWBOmFfakt3tQ6owyMMw8r8TtBUXYGzROV9xodjRQ6I_RpH7Tr7zp3R6ITT-ao-rBDZbC-7d3w68luZv0d7z7iXAyc2zOWAb8xneDXsX_KwkJCn7waH_kip3cct7Opxf-iYKl-bZ4OjkREohRNNxVZ3tdmNQp-YO5MlWs4W2SJRlshpMFw26UNnyju34Gq3T1IzaWXkY7_NHvWO_1JfB7LocCtKP8aKLlOf67GxWfmqfI",
  },
];

export const seoKeywords = [
  "Pediatric Occupational Therapist Mumbai",
  "Occupational Therapy Mumbai",
  "Aquatic Therapy Mumbai",
  "Brain Gym Mumbai",
  "Handwriting Training Mumbai",
  "Child Development Therapy Mumbai",
  "Pediatric OT Kandivali",
  "Sensory Integration Therapy Mumbai",
];

export type Service = (typeof services)[number];
