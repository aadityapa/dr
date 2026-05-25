export const siteConfig = {
  name: "Dr. Sharuja Sarap Pediatric Occupational Therapy",
  shortName: "Dr. Sharuja Sarap",
  description:
    "Compassionate pediatric occupational therapy designed to nurture confidence, independence, and joyful participation in everyday life.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://drsharujasarap.com",
  email: "hello@drsharujasarap.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  address: "Aster Wellness Clinic, Baner Road, Pune, Maharashtra 411045",
  timings: "Mon - Sat: 9:00 AM - 7:00 PM",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Milestones", href: "/testimonials-milestones" },
  { label: "Contact", href: "/contact" },
  { label: "Appointment", href: "/appointment" },
];

export const trustStats = [
  { label: "Years of Pediatric Practice", value: 12, suffix: "+" },
  { label: "Families Supported", value: 1800, suffix: "+" },
  { label: "Personalized Therapy Hours", value: 25000, suffix: "+" },
  { label: "Parent Satisfaction", value: 98, suffix: "%" },
];

export const therapyFlow = ["Regulate", "Connect", "Participate", "Thrive"];

export const services = [
  {
    slug: "sensory-integration",
    title: "Sensory Integration",
    summary:
      "Helping children process sensory input for calmer regulation and improved participation.",
    icon: "Sparkles",
    ageGroups: "2 to 12 years",
    benefits: [
      "Improved self-regulation and focus",
      "Better motor planning and body awareness",
      "Reduced sensory overload in daily routines",
    ],
    process: [
      "Comprehensive sensory profile assessment",
      "Play-based activities tailored to sensory needs",
      "Home and school strategy coaching for caregivers",
    ],
    faqs: [
      {
        q: "How soon can we expect changes?",
        a: "Most families notice small regulation improvements within 4-6 sessions, with deeper changes over 3-6 months depending on goals.",
      },
      {
        q: "Is it suitable for non-verbal children?",
        a: "Yes. Therapy is child-led and designed around sensory cues, movement, and non-verbal interaction.",
      },
    ],
    relatedConditions: ["Autism", "ADHD", "Sensory Processing Difficulties"],
  },
  {
    slug: "aquatic-therapy",
    title: "Aquatic Therapy",
    summary:
      "Water-based therapy to strengthen coordination, confidence, and postural control.",
    icon: "Waves",
    ageGroups: "3 to 14 years",
    benefits: [
      "Enhanced core strength and balance",
      "Lower-impact movement for children with physical limitations",
      "Increased confidence through playful success experiences",
    ],
    process: [
      "Water safety and baseline movement assessment",
      "Structured therapeutic movement routines in warm water",
      "Progress reviews with functional carryover planning",
    ],
    faqs: [
      {
        q: "Do children need to know swimming?",
        a: "No. Sessions are therapeutic, supervised, and adapted to comfort and safety levels.",
      },
      {
        q: "Is aquatic therapy only for physical challenges?",
        a: "No, it also supports sensory regulation, emotional confidence, and social engagement.",
      },
    ],
    relatedConditions: ["Cerebral Palsy", "Developmental Delay", "Autism"],
  },
  {
    slug: "feeding-therapy",
    title: "Feeding Therapy",
    summary:
      "Compassionate support for picky eating, oral-motor coordination, and mealtime confidence.",
    icon: "Utensils",
    ageGroups: "1.5 to 10 years",
    benefits: [
      "Expanded food acceptance and variety",
      "Reduced mealtime stress for families",
      "Improved oral-motor control and safe swallowing habits",
    ],
    process: [
      "Feeding history and sensory-mealtime profile",
      "Oral-motor and desensitization activities",
      "Parent-guided mealtime routines for home consistency",
    ],
    faqs: [
      {
        q: "Will my child be forced to eat?",
        a: "Never. We use trust-based, gradual approaches that respect your child's pace and cues.",
      },
      {
        q: "Can this help with food aversion?",
        a: "Yes, especially when sensory, anxiety, or motor factors are involved.",
      },
    ],
    relatedConditions: ["Autism", "Sensory Processing Difficulties", "ADHD"],
  },
  {
    slug: "adl-training",
    title: "ADL Training",
    summary:
      "Building independence in everyday routines like dressing, grooming, writing, and self-care.",
    icon: "Hand",
    ageGroups: "3 to 16 years",
    benefits: [
      "Greater confidence in self-care tasks",
      "Improved hand skills and task sequencing",
      "Smoother school and home routine participation",
    ],
    process: [
      "Functional assessment of daily living skills",
      "Task breakdown with child-friendly skill progression",
      "Practice in clinic with home carryover planning",
    ],
    faqs: [
      {
        q: "Do you include school readiness goals?",
        a: "Yes, ADL plans can include writing posture, classroom transitions, and organization skills.",
      },
      {
        q: "How are parents involved?",
        a: "Parents receive practical coaching and short home plans to build daily consistency.",
      },
    ],
    relatedConditions: ["Developmental Delay", "ADHD", "Cerebral Palsy"],
  },
  {
    slug: "parent-counseling",
    title: "Parent Counseling",
    summary:
      "Empowering caregivers with practical strategies, emotional support, and clear therapy guidance.",
    icon: "HeartHandshake",
    ageGroups: "For parents and caregivers",
    benefits: [
      "Clear understanding of child behavior and sensory needs",
      "Practical home strategies that fit family life",
      "Reduced caregiver stress and stronger parent-child connection",
    ],
    process: [
      "Goal-focused consultation to map concerns",
      "Co-regulation and behavior support coaching",
      "Follow-up strategy refinement and progress review",
    ],
    faqs: [
      {
        q: "Can we attend without the child?",
        a: "Yes. Parent-only sessions can be very effective for planning routines and approaches.",
      },
      {
        q: "Is this only for newly diagnosed children?",
        a: "No. Families at any stage can benefit from guidance and collaborative planning.",
      },
    ],
    relatedConditions: ["Autism", "ADHD", "Developmental Delay"],
  },
  {
    slug: "group-sessions",
    title: "Group Sessions",
    summary:
      "Small-group therapy to develop social participation, communication, and peer confidence.",
    icon: "Users",
    ageGroups: "4 to 14 years",
    benefits: [
      "Improved turn-taking, communication, and social confidence",
      "Real-world peer interaction practice",
      "Motivating and joyful shared learning experiences",
    ],
    process: [
      "Group matching by developmental profile and goals",
      "Structured activity circuits with therapist facilitation",
      "Parent debrief with targeted reinforcement tips",
    ],
    faqs: [
      {
        q: "How many children are in one group?",
        a: "Typically 4-6 children to maintain personalized support and safe participation.",
      },
      {
        q: "Can my child do individual and group therapy together?",
        a: "Yes, blended therapy plans often provide the strongest outcomes.",
      },
    ],
    relatedConditions: ["Autism", "ADHD", "Sensory Processing Difficulties"],
  },
] as const;

export const conditions = [
  {
    title: "Autism",
    description:
      "We support children in sensory regulation, communication readiness, social participation, and daily routine independence through structured, play-led interventions.",
    reassurance:
      "Your child's unique way of learning is respected, celebrated, and nurtured with consistency.",
  },
  {
    title: "ADHD",
    description:
      "Therapy focuses on attention regulation, impulse modulation, executive function, and emotional self-management to improve school and home functioning.",
    reassurance:
      "With the right strategies, children with ADHD can channel their strengths beautifully.",
  },
  {
    title: "Cerebral Palsy",
    description:
      "We address posture, motor planning, adaptive skills, and functional participation with collaborative family-centered care.",
    reassurance:
      "Small functional gains create meaningful confidence for children and parents alike.",
  },
  {
    title: "Developmental Delay",
    description:
      "Early, goal-focused intervention supports foundational milestones in movement, play, communication readiness, and self-care routines.",
    reassurance:
      "Timely support can significantly improve long-term independence and participation.",
  },
  {
    title: "Sensory Processing Difficulties",
    description:
      "We help children understand and regulate sensory input to reduce overwhelm, improve behavior, and increase daily engagement.",
    reassurance:
      "A calmer nervous system opens the door to learning, connection, and joyful growth.",
  },
];

export const testimonials = [
  {
    parent: "Parent of Aarav, 5",
    quote:
      "Aarav now joins family meals, dresses with minimal help, and smiles through routines that once felt impossible.",
    milestone: "Independent dressing and calmer mornings",
  },
  {
    parent: "Parent of Meera, 7",
    quote:
      "We felt heard from day one. Meera's confidence at school has improved dramatically, and her meltdowns are much less frequent.",
    milestone: "Improved emotional regulation and school participation",
  },
  {
    parent: "Parent of Vihaan, 4",
    quote:
      "The parent coaching changed everything. We finally understand our child's sensory needs and how to support him every day.",
    milestone: "Better sensory regulation and family routines",
  },
];

export const milestones = [
  "First self-fed meal without distress",
  "Independent school bag routine",
  "Participating in birthday parties comfortably",
  "Confident peer play in group settings",
  "Transitioning across daily activities with fewer meltdowns",
];

export const galleryCategories = [
  "Therapy Room",
  "Sensory Gym",
  "Aqua Therapy",
  "Equipment",
  "Parent Interaction",
] as const;

export const galleryItems = [
  { title: "Therapy Room", category: "Therapy Room", imageId: "samples/animals/cat" },
  { title: "Sensory Gym Circuit", category: "Sensory Gym", imageId: "samples/smile" },
  { title: "Aqua Session", category: "Aqua Therapy", imageId: "samples/people/bicycle" },
  { title: "Fine Motor Zone", category: "Equipment", imageId: "samples/animals/reindeer" },
  { title: "Parent Coaching Corner", category: "Parent Interaction", imageId: "samples/people/jazz" },
  { title: "Therapy Play Setup", category: "Therapy Room", imageId: "sample" },
];
