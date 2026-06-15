export const siteConfig = {
  name: "Thrive With Sharuja",
  shortName: "Thrive With Sharuja",
  doctorName: "Dr. Sharuja Sarap",
  title: "Pediatric Occupational Therapist",
  tagline: "Belonging Without Boundaries.",
  heroHeadline: "Building Abilities. Inspiring Confidence. Transforming Lives.",
  heroSubheadline:
    "We help children feel more confident doing the everyday things that matter most — making friends, holding a pencil, getting dressed independently, or simply enjoying playtime.",
  description:
    "Thrive With Sharuja offers warm, evidence-based pediatric occupational therapy in Mumbai with Dr. Sharuja Sarap — sensory-integrative, movement-based care tailored to each child.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://drsharujasarap.vercel.app",
  email: "sharujasaraf@gmail.com",
  phone: "+91 9820525197",
  phoneDisplay: "9820525197",
  whatsapp: "919820525197",
  registrationNumber: "051388",
  experienceYears: 18,
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
  bio: "For over 18 years, Dr. Sharuja Sarap has walked alongside Mumbai families through the joys and worries of childhood development. She meets each child where they are — with patience, play, and genuine care — and helps them build the skills that make everyday life feel a little easier and a lot more joyful.",
  qualifications: [
    "Ph.D. Scholar",
    "Master's in Pediatric Occupational Therapy",
    "Certified Brain Gym Instructor & Practitioner",
  ],
  certifications: [
    "RMTI (Rhythmic Movement Training Integration)",
    "HWT (Handwriting Without Tears)",
    "OPT (Oral Placement Therapy)",
    "Aquatherapy (IATF, WST, BRRM)",
    "PIASTM (Pediatric Instrument Assisted Soft Tissue Mobilization)",
    "KT Level 1–3 (Kinesio Taping)",
    "MNRI (Masgutova Neurosensorimotor Reflex Integration)",
    "KDCT (Kinesio Dry Cupping Therapy)",
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Appointment", href: "/appointment" },
];

/** Primary links shown in the desktop header */
export const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

/** Secondary links in the "More" dropdown */
export const secondaryNavItems = [
  { label: "Library", href: "/library" },
  { label: "Outcomes", href: "/therapy-outcomes" },
  { label: "Screening", href: "/screening" },
  { label: "FAQs", href: "/faqs" },
  { label: "Therapy Journey", href: "/therapy-journey" },
  { label: "Appointment", href: "/appointment" },
];

export const trustBadges = [
  "18+ Years Experience",
  "10+ Specialized Programs",
  "Registration No. 051388",
  "Certified Pediatric Occupational Therapist",
  "Evidence-Based Therapy Programs",
];

export const trustStats = [
  { label: "Years Experience", value: 18, suffix: "+", icon: "Clock" as const },
  { label: "Specialized Programs", value: 10, suffix: "+", icon: "Award" as const },
  { label: "Therapy Sessions", value: 1000, suffix: "+", icon: "HeartHandshake" as const },
  { label: "Families Supported", value: 500, suffix: "+", icon: "Users" as const },
];

export const googleReviews = {
  rating: 4.9,
  reviewCount: 47,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Manhar+Medical+Jeet+Child+Development+Centre+Kandivali+West+Mumbai",
  reviews: [
    {
      author: "Priya M.",
      rating: 5,
      date: "2025-11-12",
      text: "Dr. Sharuja is incredibly patient and knowledgeable. My son's sensory regulation has improved so much in just a few months. The clinic feels warm and welcoming.",
    },
    {
      author: "Rahul & Anjali K.",
      rating: 5,
      date: "2025-10-28",
      text: "We travelled from Borivali for aquatic therapy and it was worth every visit. Our daughter's balance and confidence have grown tremendously. Highly recommend Thrive with sharuja.",
    },
    {
      author: "Sneha D.",
      rating: 5,
      date: "2025-09-15",
      text: "The handwriting program transformed our 8-year-old's school experience. Dr. Sharuja explains everything clearly and gives practical home strategies. A true professional.",
    },
    {
      author: "Vikram S.",
      rating: 4,
      date: "2025-08-03",
      text: "Excellent pediatric OT in Kandivali. Brain Gym sessions helped our child with focus and coordination. Booking is easy and the team is responsive on WhatsApp.",
    },
  ],
};

export const doctorTimeline = [
  { year: "2006+", title: "Pediatric OT Practice Begins", description: "Started dedicated pediatric occupational therapy practice in Mumbai." },
  { year: "2012", title: "Master's in Pediatric OT", description: "Advanced specialization in pediatric occupational therapy." },
  { year: "2015", title: "Brain Gym Certification", description: "Certified Brain Gym Instructor & Practitioner for learning readiness." },
  { year: "2018", title: "International Certifications", description: "HWT, Aquatherapy (IATF), MNRI, OPT, PIASTM, and Kinesio Taping credentials." },
  { year: "2022", title: "Ph.D. Scholar", description: "Continuing advanced research in pediatric sensory-motor development." },
  { year: "Today", title: "500+ Families Supported", description: "Serving children birth to 14 years at Thrive with sharuja, Kandivali West." },
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
      "Reach out via phone, WhatsApp, or our online form. Share your concerns and we'll schedule a convenient consultation at our Kandivali clinic.",
    icon: "Phone",
  },
  {
    step: 2,
    title: "Evaluation",
    description:
      "A child-friendly assessment across sensory, motor, cognitive, and daily living domains to understand your child's unique strengths and needs.",
    icon: "ClipboardCheck",
  },
  {
    step: 3,
    title: "Therapy Sessions",
    description:
      "Play-based, evidence-informed sessions with Dr. Sharuja Sarap — building skills through engagement, not pressure.",
    icon: "HeartHandshake",
  },
  {
    step: 4,
    title: "Progress Tracking",
    description:
      "Regular goal reviews, home programs, and school coordination ensure measurable progress and adjusted plans as your child grows.",
    icon: "Target",
  },
  {
    step: 5,
    title: "Functional Independence",
    description:
      "Celebrating milestones as your child gains confidence, participation, and independence in daily life — because every step forward matters.",
    icon: "Sparkles",
  },
];

export const services = [
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    headline: "Unlocking Potential Through Meaningful Participation",
    summary:
      "We help children feel more confident doing everyday things — making friends, holding a pencil, getting dressed, or enjoying playtime.",
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
      "Water brings out the best in many children — building strength, balance, and joy in a safe, playful environment.",
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
      "When the body and brain move together, learning clicks — we use purposeful movement to unlock focus and confidence.",
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
      "Messy handwriting isn't laziness — we build the motor foundations so writing feels natural, not frustrating.",
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
  {
    slug: "rmti",
    title: "RMTI",
    headline: "Rhythmic Movement for Nervous System Development",
    summary:
      "Rhythmic Movement Training Integration supports primitive reflex integration, postural stability, and emotional regulation through gentle, rhythmic movements.",
    content:
      "RMTI (Rhythmic Movement Training Integration) uses innate rhythmic movements to stimulate brain development, integrate retained primitive reflexes, and support postural and emotional foundations. Dr. Sharuja Sarap applies RMTI within a holistic pediatric OT framework for children who struggle with coordination, attention, emotional regulation, or developmental foundations.",
    icon: "Sparkles",
    ageGroups: "Birth to 14 years",
    areasAddressed: [
      "Primitive Reflex Integration",
      "Postural Stability",
      "Emotional Regulation",
      "Motor Coordination",
      "Attention & Focus",
      "Reading Readiness",
      "Balance & Bilateral Integration",
      "Nervous System Organization",
    ],
    benefits: [
      "Improved postural control and motor coordination",
      "Better emotional regulation and reduced anxiety",
      "Enhanced attention and learning readiness",
      "Foundation for reading, writing, and classroom success",
    ],
    process: [
      "Reflex and movement pattern assessment",
      "Individualized rhythmic movement program",
      "Home practice routines with parent guidance",
      "Progress review and program advancement",
    ],
    faqs: [
      { q: "What is RMTI?", a: "Rhythmic Movement Training Integration uses gentle, rhythmic movements to support brain development and integrate retained primitive reflexes." },
      { q: "Who benefits from RMTI?", a: "Children with coordination difficulties, attention challenges, emotional dysregulation, or signs of retained primitive reflexes." },
    ],
    relatedConditions: ["Motor Coordination Challenges", "Attention Difficulties", "Learning Difficulties"],
  },
  {
    slug: "opt",
    title: "OPT",
    headline: "Oral Placement Therapy for Feeding & Speech Readiness",
    summary:
      "Oral Placement Therapy addresses oral-motor skills, feeding challenges, and speech articulation foundations through targeted sensory-motor activities.",
    content:
      "OPT (Oral Placement Therapy) is a specialized approach that uses tools and exercises to develop the oral-motor skills needed for safe feeding, speech articulation, and oral sensory tolerance. Dr. Sharuja Sarap is certified in OPT and integrates it with occupational therapy for children with feeding difficulties, oral aversions, and speech-related motor challenges.",
    icon: "Utensils",
    ageGroups: "Birth to 14 years",
    areasAddressed: [
      "Oral-Motor Strength",
      "Feeding & Swallowing Safety",
      "Tongue & Jaw Coordination",
      "Oral Sensory Tolerance",
      "Speech Articulation Foundations",
      "Picky Eating & Food Aversions",
      "Cup & Straw Drinking Skills",
      "Chewing & Biting Patterns",
    ],
    benefits: [
      "Safer, more enjoyable mealtimes",
      "Expanded food acceptance and oral tolerance",
      "Improved oral-motor strength for speech readiness",
      "Reduced mealtime stress for families",
    ],
    process: [
      "Oral-motor and feeding assessment",
      "Targeted OPT exercises and sensory activities",
      "Home mealtime strategies and practice routines",
      "Coordination with speech therapists when needed",
    ],
    faqs: [
      { q: "Is OPT the same as speech therapy?", a: "OPT addresses oral-motor foundations. It complements speech therapy and is often integrated within OT for feeding and oral sensory challenges." },
      { q: "Can OPT help picky eaters?", a: "Yes. OPT addresses oral sensory aversions, motor skills, and mealtime routines that contribute to selective eating." },
    ],
    relatedConditions: ["Autism Spectrum Disorder", "Developmental Delay", "Sensory Processing Difficulties"],
  },
  {
    slug: "piastm",
    title: "PIASTM",
    headline: "Pediatric Soft Tissue Mobilization for Movement",
    summary:
      "PIASTM uses instrument-assisted soft tissue techniques adapted for children to improve mobility, reduce tension, and support motor function.",
    content:
      "PIASTM (Pediatric Instrument Assisted Soft Tissue Mobilization) applies gentle, instrument-assisted techniques to address soft tissue restrictions that limit movement, posture, and functional participation. Dr. Sharuja Sarap uses PIASTM as part of a comprehensive pediatric OT approach for children with muscle tension, postural challenges, and movement restrictions.",
    icon: "Hand",
    ageGroups: "2 to 14 years",
    areasAddressed: [
      "Soft Tissue Mobility",
      "Postural Alignment",
      "Muscle Tension Release",
      "Range of Motion",
      "Motor Function Support",
      "Recovery After Injury",
      "Chronic Tightness Patterns",
      "Movement Efficiency",
    ],
    benefits: [
      "Improved range of motion and movement quality",
      "Reduced muscle tension and discomfort",
      "Better postural alignment for daily activities",
      "Enhanced participation in play and physical tasks",
    ],
    process: [
      "Movement and soft tissue assessment",
      "Gentle PIASTM techniques within therapy sessions",
      "Stretching and strengthening home program",
      "Integration with OT motor goals",
    ],
    faqs: [
      { q: "Is PIASTM safe for children?", a: "Yes. Pediatric PIASTM uses gentle, child-appropriate pressure and is always applied within a playful, trusting therapeutic relationship." },
      { q: "What conditions benefit from PIASTM?", a: "Children with muscle tightness, postural challenges, cerebral palsy, or movement restrictions often benefit." },
    ],
    relatedConditions: ["Cerebral Palsy", "Motor Coordination Challenges", "Developmental Delay"],
  },
  {
    slug: "kinesio-taping",
    title: "Kinesio Taping",
    headline: "KT Level 1–3 Support for Posture & Function",
    summary:
      "Kinesio Taping provides sensory and postural support through elastic therapeutic tape — certified KT Level 1–3 application for pediatric needs.",
    content:
      "Kinesio Taping (KT Level 1–3) uses elastic therapeutic tape to support muscles and joints, provide proprioceptive input, and assist postural alignment without restricting movement. Dr. Sharuja Sarap applies pediatric-appropriate taping techniques to support functional goals in daily activities, sports, and school participation.",
    icon: "Award",
    ageGroups: "3 to 14 years",
    areasAddressed: [
      "Postural Support",
      "Proprioceptive Input",
      "Muscle Activation",
      "Joint Stability",
      "Pain & Discomfort Management",
      "Sports & Play Participation",
      "Hand & Wrist Support",
      "Sensory Awareness",
    ],
    benefits: [
      "Improved postural awareness and alignment",
      "Enhanced proprioceptive feedback for motor control",
      "Support during physical activities and sports",
      "Complement to ongoing OT and motor training",
    ],
    process: [
      "Functional and postural assessment",
      "Taping application tailored to daily goals",
      "Parent education on wear time and care",
      "Reassessment and technique adjustment",
    ],
    faqs: [
      { q: "How long does Kinesio tape stay on?", a: "Typically 3–5 days depending on activity level and skin sensitivity. Dr. Sharuja Sarap provides full care instructions." },
      { q: "Is taping painful for children?", a: "No. Pediatric Kinesio taping is gentle and most children adapt quickly. Hypoallergenic tape options are available." },
    ],
    relatedConditions: ["Cerebral Palsy", "Motor Coordination Challenges", "Handwriting Difficulties"],
  },
  {
    slug: "mnri",
    title: "MNRI",
    headline: "Masgutova Neurosensorimotor Reflex Integration",
    summary:
      "MNRI uses reflex integration techniques to rebuild nervous system foundations for movement, regulation, and learning.",
    content:
      "MNRI (Masgutova Neurosensorimotor Reflex Integration) is a specialized reflex integration approach that addresses retained or emerging primitive reflexes affecting motor, sensory, and emotional development. Dr. Sharuja Sarap integrates MNRI within pediatric OT for children whose nervous system foundations need support for confident participation.",
    icon: "Brain",
    ageGroups: "Birth to 14 years",
    areasAddressed: [
      "Primitive Reflex Integration",
      "Nervous System Regulation",
      "Motor Planning & Coordination",
      "Sensory Processing",
      "Emotional & Behavioral Regulation",
      "Postural & Core Stability",
      "Learning Readiness",
      "Trauma & Stress Recovery",
    ],
    benefits: [
      "Stronger nervous system foundations for learning and movement",
      "Improved emotional regulation and stress resilience",
      "Better motor planning and coordination",
      "Enhanced readiness for academic and social demands",
    ],
    process: [
      "Reflex pattern and neurosensorimotor assessment",
      "Individualized MNRI protocol within sessions",
      "Home reflex integration activities",
      "Regular progress monitoring and program updates",
    ],
    faqs: [
      { q: "What are primitive reflexes?", a: "Automatic movement patterns present in infancy that should integrate as the brain matures. Retained reflexes can affect posture, coordination, and learning." },
      { q: "How is MNRI different from RMTI?", a: "Both address reflex integration. MNRI uses specific Masgutova protocols; Dr. Sharuja Sarap selects the most appropriate approach for each child." },
    ],
    relatedConditions: ["Motor Coordination Challenges", "Attention Difficulties", "Sensory Processing Difficulties"],
  },
  {
    slug: "kdct",
    title: "KDCT",
    headline: "Kinesio Dry Cupping Therapy for Pediatric Recovery",
    summary:
      "KDCT uses gentle dry cupping techniques adapted for children to support tissue health, circulation, and movement recovery.",
    content:
      "KDCT (Kinesio Dry Cupping Therapy) applies gentle cupping techniques to support soft tissue health, circulation, and recovery from movement challenges. Dr. Sharuja Sarap uses pediatric-adapted KDCT as a complementary technique within occupational therapy for children with muscle tension, postural strain, or recovery needs.",
    icon: "HeartHandshake",
    ageGroups: "4 to 14 years",
    areasAddressed: [
      "Soft Tissue Recovery",
      "Circulation Support",
      "Muscle Tension Relief",
      "Postural Strain",
      "Movement Recovery",
      "Chronic Tightness",
      "Sports-Related Discomfort",
      "Complementary OT Support",
    ],
    benefits: [
      "Reduced muscle tension and improved tissue mobility",
      "Support for recovery alongside motor training",
      "Gentle, child-appropriate therapeutic technique",
      "Enhanced comfort during daily activities",
    ],
    process: [
      "Assessment of tissue and movement needs",
      "Gentle KDCT application within therapy context",
      "Integration with stretching and strengthening",
      "Parent guidance on complementary home care",
    ],
    faqs: [
      { q: "Is dry cupping safe for children?", a: "Yes, when applied by a certified practitioner using pediatric-appropriate techniques and pressure levels." },
      { q: "Does cupping leave marks?", a: "Mild circular marks may appear temporarily. Dr. Sharuja Sarap uses gentle pressure appropriate for children." },
    ],
    relatedConditions: ["Cerebral Palsy", "Motor Coordination Challenges", "Developmental Delay"],
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
  {
    slug: "primitive-reflex-retention",
    title: "Primitive Reflex Retention",
    description:
      "RMTI and MNRI-based interventions help integrate retained reflexes that affect posture, coordination, attention, and emotional regulation.",
    reassurance: "With targeted reflex integration, nervous system foundations can strengthen at any age.",
  },
  {
    slug: "emotional-regulation-difficulties",
    title: "Emotional Regulation Difficulties",
    description:
      "Sensory-integrative OT and movement-based strategies help children understand, express, and manage emotions for calmer daily participation.",
    reassurance: "Regulation is a skill that grows with the right support, structure, and compassionate guidance.",
  },
  {
    slug: "school-readiness-concerns",
    title: "School Readiness Concerns",
    description:
      "Comprehensive OT prepares children for classroom success — pencil grip, sitting tolerance, self-regulation, and social participation.",
    reassurance: "School readiness builds gradually; early support creates confident, capable learners.",
  },
  {
    slug: "down-syndrome",
    title: "Down Syndrome",
    description:
      "Family-centered OT supports motor development, self-care skills, sensory regulation, and meaningful participation for children with Down syndrome.",
    reassurance: "Every child with Down syndrome has unique strengths — therapy celebrates progress at every step.",
  },
  {
    slug: "feeding-oral-motor-challenges",
    title: "Feeding & Oral Motor Challenges",
    description:
      "OPT-certified intervention addresses picky eating, oral aversions, chewing difficulties, and mealtime stress through sensory-motor strategies.",
    reassurance: "Mealtimes can become enjoyable again with patient, specialized oral-motor support.",
  },
  {
    slug: "social-participation-challenges",
    title: "Social Participation Challenges",
    description:
      "OT builds the sensory, motor, and regulation foundations children need for confident peer interaction, play, and group activities.",
    reassurance: "Social confidence grows when children feel regulated, capable, and supported.",
  },
  {
    slug: "fine-motor-challenges",
    title: "Fine Motor Challenges",
    description:
      "Targeted OT develops hand strength, dexterity, tool use, and precision for writing, self-care, and classroom tasks.",
    reassurance: "Fine motor skills improve steadily with purposeful, play-based practice.",
  },
  {
    slug: "gross-motor-difficulties",
    title: "Gross Motor Difficulties",
    description:
      "OT and aquatic therapy improve balance, strength, coordination, and confidence in large movement activities and physical play.",
    reassurance: "With practice and support, children gain the physical confidence to participate fully.",
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
    alt: "Calm, naturally lit pediatric occupational therapy room with soft seating and organized therapy tools",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAszxr_aw7t2MBMC5q7Zdqqdz8C8Ha0zWn8ssz-mL9RU0cThEtPr055IlAYzGk-RFbotjgKGOCTNig_SQTeYmHk-bj-qhRzbsLVjUTMhgjMY8pOKrOaY0QxZOw9OreLZ2JpXVi2reTXBYgW_28gLkkmEO52fFiD2pCy4WIQea6LsvLKIC7SIVOe18xylTbcBE2DEj1dfNiBzZcSD9qe0AWaRbyc1O-a6GhdqvB9XaS7WZa-lZfF8ef6_59aDZcckn1vkLedvBlK4",
  },
  {
    title: "Assessment & Evaluation Space",
    category: "Assessment Area",
    alt: "Child-friendly assessment and evaluation area used for developmental and sensory-motor screening",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeoZkBYzn93ZY5eHYUUVXZKScDqSl4PilFvk0YMZi7yu3lIqh9KXLHADwpsnMvceBYYu6UR2bZUrv9KQYVwNvnE92ZZpbHcJLKLCxB80CEA13jwP7A6sjZ0GT5LFUn9d7OrsX3MK6-1eKi69xngkuoLl7Wos_8Xva82ZTiFzWKb2696wF702noRassWo_iPwVmpbj-45zzcxcBBvWZUtJN0h7QSWmYY-VGxNoSADl7wzyN0wF6jajP7hmQsjvg7pULU-fceNNYYUc",
  },
  {
    title: "Aquatic Therapy Session",
    category: "Aquatic Therapy",
    alt: "Supervised pediatric aquatic therapy session supporting balance, strength, and sensory regulation in water",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1tGtJdDw-86lEdpx-I69_MlMGwrBW_XudUkEM3fusMOYLjKWRBGhxlQXcJR4mhDJxpx1ySvxAwQEZqUlk3JHxsG-gqsmEzKKnkQRTL3KY3UcxWGUXiear5U9ppi84HnEiKs3cgsp3IMON5-swfmKiIeu3u3pukQyWIxAxcI8Sfthn2m04HLMGiBml4ymcem3d8o8PDYtb7ZQ-kZSY9iWaPfjay2RoYV5RT-o-EU5zjCZx1gof8J8eAj0oIRssT38aasQo6NxrRSc",
  },
  {
    title: "Sensory Equipment",
    category: "Therapy Equipment",
    alt: "Pediatric sensory integration equipment including swings, textured tools, and weighted supports",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD64jn5OFwenkccgK2NlqJOvDh9H9CxtBDZhju6lbekQ8OIi_-WJfZhTCup3Hj3RRP1rro1sfhBsHWkqVcWYUnQnvmVkjpAiputk_ytiPQRxf1QwvrpkXhdl196BO9KLUuLeK-QP6460pPQjyyMlu6k1UTRNa84k3Kj2RwPb-BBS6XUtw6oi9t_fDSBTpLfMQv4v1TFE8hUbKJVXHajE2MNqTAHbWV3Wh91B7SaC0AHMfBC0Klyok_BwrPOHRaL2tpQQ9mcpWXutRw",
  },
  {
    title: "Child-Friendly Play Zone",
    category: "Child-Friendly Environment",
    alt: "Bright, child-friendly play zone designed to make therapy feel safe, playful, and engaging",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm8al5naOx-QQ-lNFcajeZGEjjiIGhO-kj_rAIxSvkEFrAW-2DEaxpjwDUhEfYFwZ40gTWfaq2Uz3DCzE2YUT9ndY30fpKW0PcTojUJpU6-QpyvGQKA4rkSV6IHdFxxPyZBf3QlQRnykgsxKp2-zyhQn3Z5aNOgUacjeoBbm7fu6xhG2CNF0Ng-o1Hrq2y2D4Udu_MV4nirnsKhnlACWz4PO6xOvZBv5skM9KrBsONS02KWLcGnAYAxCn4MlEnlwO2HsJ_rlwgb5g",
  },
  {
    title: "Sensory Gym",
    category: "Therapy Room",
    alt: "Indoor pediatric sensory gym with climbing structures and movement equipment for motor development",
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
