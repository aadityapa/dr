import { getSiteImage } from "@/lib/site-images";

export const siteConfig = {
  name: "Thrive With Sharuja",
  shortName: "Thrive With Sharuja",
  doctorName: "Dr. Sharuja Sarap",
  title: "Pediatric Occupational Therapist",
  tagline: "Belonging Without Boundaries.",
  heroHeadline: "Your child is doing their best. We're here to help the everyday things feel easier.",
  heroSubheadline:
    "From getting dressed and holding a pencil to joining playtime and making friends — we walk alongside Mumbai families with warmth, patience, and care that meets your child where they are.",
  description:
    "Warm pediatric occupational therapy in Kandivali West, Mumbai. Dr. Sharuja Sarap helps children and parents feel more confident in the little things that matter every day.",
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
  bio: "Dr. Sharuja has spent 18 years sitting with worried parents and curious children — in our clinic in Kandivali, and in homes across Mumbai. She doesn't rush. She listens. She explains things in plain language. And she builds therapy around what your child actually needs, not what a checklist says they should do.",
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
  { label: "Gallery", href: "/gallery" },
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
  { label: "Gallery", href: "/gallery" },
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
      text: "We travelled from Borivali for aquatic therapy and it was worth every visit. Our daughter's balance and confidence have grown tremendously. Highly recommend Thrive With Sharuja.",
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
  { year: "Today", title: "500+ Families Supported", description: "Serving children birth to 14 years at Thrive With Sharuja, Kandivali West." },
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
    title: "Let's Get To Know Your Child",
    description:
      "A warm first visit. We listen to your story, watch your child play, and start to understand what daily life feels like for your family.",
    icon: "HeartHandshake",
  },
  {
    step: 2,
    title: "Understanding Strengths & Challenges",
    description:
      "Gentle, play-based observation — no scary tests. We notice what your child does well and where they need a little more support.",
    icon: "ClipboardCheck",
  },
  {
    step: 3,
    title: "Creating A Meaningful Plan",
    description:
      "Clear goals in words you understand. No jargon. We agree together on what matters most — mornings, school, mealtimes, or play.",
    icon: "Target",
  },
  {
    step: 4,
    title: "Building Skills Through Play & Connection",
    description:
      "Sessions feel like play, not pressure. Your child builds real skills while feeling safe, seen, and encouraged.",
    icon: "HeartHandshake",
  },
  {
    step: 5,
    title: "Celebrating Progress Together",
    description:
      "We track the wins — big and small. You leave with simple home ideas. We adjust as your child grows.",
    icon: "Sparkles",
  },
];

export const services = [
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    headline: "When everyday things feel harder than they should",
    summary:
      "Getting dressed. Holding a pencil. Sitting through dinner. We help with the real moments — so your child can feel capable, not left behind.",
    content:
      "You might notice your child avoiding certain tasks, melting down at transitions, or falling behind their friends in small ways that add up. That's exhausting for everyone. In our sessions, we work on the skills behind those moments — through play, patience, and a plan that fits your child's pace. Not a one-size-fits-all program. Just support that makes daily life feel a little lighter.",
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
    headline: "When land feels too hard, water can help",
    summary:
      "Some children open up in water in ways they never do on land. We use that — gently, safely — to build strength, balance, and joy.",
    content:
      "If your child resists physical activities, has low muscle tone, or just lights up near water, aquatic therapy might be the right fit. Sessions are fully supervised. There's no pressure to swim. Just movement that feels freeing — and skills that carry over to playground, school, and home.",
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
    headline: "When homework ends in tears — movement can help",
    summary:
      "Short, simple movements before seated work can change everything. We teach your child (and you) routines that help the brain feel ready to learn.",
    content:
      "Does your child fidget, lose focus in minutes, or struggle to start homework? Brain Gym uses brief, purposeful movement — not exercise drills — to help the body and brain work together. Many parents tell us homework gets shorter and calmer once their child has a movement routine they actually enjoy.",
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
    headline: "When writing hurts, slows down, or gets avoided",
    summary:
      "Messy handwriting isn't laziness. Often it's tired hands, weak grip, or a body that isn't ready to sit and write. We fix the foundation — gently.",
    content:
      "If your child refuses written homework, complains of hand pain, or gets marks deducted for illegible answers, we can help. Using Handwriting Without Tears®, we build letter formation step by step — through play, not endless copying. The goal isn't perfect calligraphy. It's writing that works for school and doesn't feel like a battle.",
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
    headline: "Gentle movement for a calmer, steadier body",
    summary:
      "Some children need rhythmic, soothing movement to feel settled in their own skin. RMTI helps with posture, focus, and big feelings — softly.",
    content:
      "If your child seems clumsy, wiggly, anxious, or stuck in patterns that don't quite make sense, rhythmic movement training may help. We use gentle, innate movements — never force — to support how the brain and body work together. Many parents notice calmer transitions and better attention over time.",
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
    headline: "When mealtimes feel like a battle",
    summary:
      "Picky eating, gagging, or refusing textures? We work on the mouth and sensory skills behind feeding — so family meals can feel less stressful.",
    content:
      "Feeding struggles affect the whole family. Oral Placement Therapy uses playful, targeted exercises to build the strength and tolerance children need for safer, more enjoyable eating. We go at your child's pace. No forcing. No shame. Just patient support — often alongside broader OT goals.",
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
    headline: "When tight muscles make movement uncomfortable",
    summary:
      "Gentle hands-on techniques help release tension so your child can move with more ease — during play, school, and daily activities.",
    content:
      "Some children carry tension in their shoulders, neck, or hands without anyone realising it — until writing, sports, or self-care becomes painful. PIASTM uses child-appropriate soft tissue techniques within playful therapy sessions. It's never rough. Always within trust.",
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
    headline: "A little extra support for posture and movement",
    summary:
      "Therapeutic tape can give children subtle feedback — helping them sit, write, or play sports with more awareness and confidence.",
    content:
      "Kinesio tape isn't about restricting movement. It gently reminds the body how to align and activate muscles during the activities that matter — homework, cricket, climbing, carrying a school bag. Dr. Sharuja applies it safely for children and teaches you how to care for it at home.",
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
    headline: "When the nervous system needs a stronger foundation",
    summary:
      "Some learning and movement challenges start deeper — in early reflex patterns. MNRI helps rebuild those foundations, gently and respectfully.",
    content:
      "If your child struggles with coordination, emotional ups and downs, or skills that seem 'almost there' but never quite click, reflex integration may be part of the answer. MNRI uses specialised protocols within warm, playful sessions. Progress is gradual — but the changes often show up in daily life: calmer mornings, easier homework, more confident movement.",
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
    headline: "Gentle relief when muscles hold too much tension",
    summary:
      "Dry cupping — adapted carefully for children — can ease tightness and support recovery alongside movement goals.",
    content:
      "Active children sometimes carry tension in shoulders, backs, or legs that slows progress elsewhere. KDCT uses very gentle cupping within therapy sessions. It's never scary. We explain everything. And it's always part of a bigger plan — not a standalone fix.",
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
    image: getSiteImage("sensoryGym"),
  },
  {
    title: "Assessment & Evaluation Space",
    category: "Assessment Area",
    alt: "Child-friendly assessment and evaluation area used for developmental and sensory-motor screening",
    image: getSiteImage("doctorPortrait"),
  },
  {
    title: "Aquatic Therapy Session",
    category: "Aquatic Therapy",
    alt: "Supervised pediatric aquatic therapy session supporting balance, strength, and sensory regulation in water",
    image: getSiteImage("aquaticArea"),
  },
  {
    title: "Sensory Equipment",
    category: "Therapy Equipment",
    alt: "Pediatric sensory integration equipment including swings, textured tools, and weighted supports",
    image: getSiteImage("sensoryTools"),
  },
  {
    title: "Child-Friendly Play Zone",
    category: "Child-Friendly Environment",
    alt: "Bright, child-friendly play zone designed to make therapy feel safe, playful, and engaging",
    image: getSiteImage("heroMain"),
  },
  {
    title: "Sensory Gym",
    category: "Therapy Room",
    alt: "Indoor pediatric sensory gym with climbing structures and movement equipment for motor development",
    image: getSiteImage("reception"),
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
