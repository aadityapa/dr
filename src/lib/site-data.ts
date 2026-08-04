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
  phone: "+91 9820505197",
  phoneDisplay: "9820505197",
  whatsapp: "919820505197",
  registrationNumber: "051388",
  experienceYears: 18,
  ageRange: "0 – 14 Years",
  address: {
    line1: "Jeet Child Development Centre, Manhar Medical Centre",
    line2: "Gyan Kutir, Off Subhash Lane, Near Shankar Lane",
    line3: "Ram Galli, Kandivali, Mumbai, Maharashtra-400067",
    city: "Mumbai",
    postalCode: "400067",
    full: "Jeet Child Development Centre, Manhar Medical Centre, Gyan Kutir, Off Subhash Lane, Near Shankar Lane, Ram Galli, Kandivali, Mumbai, Maharashtra-400067",
  },
  timings: "Mon–Fri 9 AM – 5 PM · Sat 9 AM – 12 PM",
  mapsQuery: "Manhar Medical Jeet Child Development Centre Kandivali West Mumbai",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d72.84!3d19.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzM2LjAiTiA3MsKwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1",
};

export const doctorProfile = {
  bio: "Dr. Sharuja has spent 18+ years sitting with worried parents and curious children — in our clinic in Kandivali, and in homes across Mumbai. She doesn't rush. She listens. She explains things in plain language. And she builds therapy around what your child actually needs, not what a checklist says they should do.",
  qualifications: [
    "Ph.D. Scholar",
    "Master's in Pediatric Occupational Therapy",
    "Certified Brain Gym® Instructor & Practitioner",
  ],
  certifications: [
    "RMTI (Rhythmic Movement Training Integration)",
    "HWT (Handwriting Without Tears)",
    "OPT (Oral Placement Therapy)",
    "IATF Aquatherapy (WST,BRRM)",
    "PIASTM (Pediatric Instrument Assisted Soft Tissue Mobilization)",
    "KT Level 1–3 (Kinesio Taping)",
    "MNRI (Masgutova Neurosensorimotor Reflex Integration)",
    "KDCT (Kinesio Dry Cupping Therapy)",
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise & Approaches", href: "/expertise" },
  { label: "Conditions", href: "/conditions" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

/** Primary links shown in the desktop header */
export const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise & Approaches", href: "/expertise" },
  { label: "Conditions", href: "/conditions" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

/** Secondary links in the "More" dropdown */
export const secondaryNavItems = [{ label: "Invite Sharuja", href: "/invite-sharuja" }];

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
      text: "Excellent pediatric OT in Kandivali. Brain Gym® sessions helped our child with focus and coordination. Booking is easy and the team is responsive on WhatsApp.",
    },
  ],
};


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
      "Does your child fidget, lose focus in minutes, or struggle to start homework? Brain Gym® uses brief, purposeful movement — not exercise drills — to help the body and brain work together. Many parents tell us homework gets shorter and calmer once their child has a movement routine they actually enjoy.",
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
        q: "Is Brain Gym® only for children with learning difficulties?",
        a: "No. It benefits any child who needs support with focus, coordination, or academic readiness.",
      },
      {
        q: "Can Brain Gym® be combined with OT?",
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
      "We honour how your child experiences the world — and build skills for calmer days, easier routines, and more confident participation.",
    reassurance:
      "Your child's way of being is respected here. We focus on what makes daily life easier — for them and for you.",
  },
  {
    slug: "adhd",
    title: "ADHD",
    description:
      "We work with your child's energy — not against it — to build focus, routines, and confidence at home and school.",
    reassurance: "Your child isn't lazy. With the right support, they can feel capable again.",
  },
  {
    slug: "cerebral-palsy",
    title: "Cerebral Palsy",
    description:
      "We focus on what matters: dressing, eating, playing, learning — with patience and celebration at every step.",
    reassurance: "Every small gain is a real win. We notice them — and so will you.",
  },
  {
    slug: "developmental-delay",
    title: "Developmental Delay",
    description:
      "Your child is on their own timeline. Gentle, early support can make that path feel less lonely.",
    reassurance: "Trust your instinct. You don't have to wait for a label to ask for help.",
  },
  {
    slug: "sensory-processing-difficulties",
    title: "Sensory Processing Difficulties",
    description:
      "When the world feels too loud, too scratchy, or too much — we help your child's nervous system find calm.",
    reassurance: "It's not bad behaviour. It's a body that needs understanding.",
  },
  {
    slug: "learning-difficulties",
    title: "Learning Difficulties",
    description:
      "When tutoring isn't enough, we look at what's blocking learning — and build foundations that last.",
    reassurance: "Bright children struggle too. That doesn't mean they can't succeed.",
  },
  {
    slug: "motor-coordination-challenges",
    title: "Motor Coordination Challenges",
    description:
      "Clumsy, hesitant, or avoiding sports? We build balance and coordination through play — so movement feels safer.",
    reassurance: "Coordination grows with practice. We make that practice feel like fun, not failure.",
  },
  {
    slug: "handwriting-difficulties",
    title: "Handwriting Difficulties",
    description:
      "When writing hurts, looks messy, or takes forever — we fix the foundations, not just the letters.",
    reassurance: "Legible, comfortable writing is possible. We've seen it happen many times.",
  },
  {
    slug: "attention-difficulties",
    title: "Attention Difficulties",
    description:
      "When focus won't stick — we use movement and structure to help your child's brain stay with the task.",
    reassurance: "Attention is a skill. It can be built, gently and steadily.",
  },
  {
    slug: "primitive-reflex-retention",
    title: "Primitive Reflex Retention",
    description:
      "Sometimes the body holds onto early reflexes that make sitting, writing, and calming down harder than they need to be.",
    reassurance: "These foundations can be strengthened — at any age.",
  },
  {
    slug: "emotional-regulation-difficulties",
    title: "Emotional Regulation Difficulties",
    description:
      "Big feelings that come fast and stay long — we help your child (and you) find calmer ground.",
    reassurance: "Meltdowns aren't manipulation. They're a nervous system asking for help.",
  },
  {
    slug: "school-readiness-concerns",
    title: "School Readiness Concerns",
    description:
      "Not sure they're ready for the classroom? We build the sitting, writing, and self-regulation skills school quietly expects.",
    reassurance: "Readiness isn't a date on the calendar. It's skills — and we can build them together.",
  },
  {
    slug: "down-syndrome",
    title: "Down Syndrome",
    description:
      "We celebrate your child's strengths while building the motor, sensory, and daily-life skills that matter to your family.",
    reassurance: "Progress looks different for every child. We honour every step.",
  },
  {
    slug: "feeding-oral-motor-challenges",
    title: "Feeding & Oral Motor Challenges",
    description:
      "Picky eating, gagging, or mealtime battles — we work patiently toward safer, happier eating.",
    reassurance: "Mealtimes can get easier. We've helped many families get there.",
  },
  {
    slug: "social-participation-challenges",
    title: "Social Participation Challenges",
    description:
      "When play dates feel hard and friendships feel far away — we build the regulation and confidence underneath.",
    reassurance: "Social skills grow from feeling safe in your own body first.",
  },
  {
    slug: "fine-motor-challenges",
    title: "Fine Motor Challenges",
    description:
      "Buttons, scissors, pencils — when small tasks feel big, we strengthen hands through play.",
    reassurance: "Small muscles respond to patient, purposeful practice.",
  },
  {
    slug: "gross-motor-difficulties",
    title: "Gross Motor Difficulties",
    description:
      "Running, climbing, keeping up on the playground — we build strength and confidence in big movement.",
    reassurance: "Physical confidence opens doors to play, sport, and belonging.",
  },
];

export const testimonials = [
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
    parent: "Kintu Gandhi (Mother of Ridhan)",
    quote:
      "My son is on the autism spectrum, and we have been taking occupational therapy sessions with Dr. Sharuja for the last 4.5 years. The doctor, her team of trained therapists, and the supporting staff are all helpful, co-operative, and very motivating. They try their best to make my child independent in every way — and they counsel us parents too, giving us the confidence to face the social world outside. Whenever my son enters the session room, he is greeted with a sweet smile and a peppy hello to lift his mood. Me and my child are lucky to have them.",
    milestone: "4.5 years of steady progress towards independence",
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
  "Early Intervention",
] as const;

export const galleryItems = [
  {
    title: "Guided Swing Support",
    category: "Therapy Room",
    alt: "Dr. Sharuja supporting a child on sensory swing equipment inside the pediatric therapy gym",
    image: getSiteImage("swingSupport"),
  },
  {
    title: "Fine Motor Practice",
    category: "Assessment Area",
    alt: "Therapist-guided handwriting and fine motor practice on a chalkboard during pediatric OT",
    image: getSiteImage("fineMotor"),
  },
  {
    title: "Sensory Pathway",
    category: "Child-Friendly Environment",
    alt: "Child using colorful tactile stepping pads with therapist support in a sensory therapy room",
    image: getSiteImage("sensoryPath"),
  },
  {
    title: "Sensory Gym Equipment",
    category: "Therapy Equipment",
    alt: "Colorful sensory gym equipment including swing supports, climbing holds, and movement tools",
    image: getSiteImage("sensoryTools"),
  },
  {
    title: "Movement Play Zone",
    category: "Child-Friendly Environment",
    alt: "Bright pediatric therapy play zone with climbing wall, tactile pads, and child-friendly movement equipment",
    image: getSiteImage("climbingWall"),
  },
  {
    title: "Sensory Gym",
    category: "Therapy Room",
    alt: "Indoor pediatric sensory gym with a platform swing and colorful climbing equipment for motor development",
    image: getSiteImage("sensoryGym"),
  },
  {
    title: "Supported Stepping Practice",
    category: "Child-Friendly Environment",
    alt: "Child practicing careful stepping on colorful sensory floor pads in the pediatric therapy gym",
    image: "/images/gallery/sensory-pathway-stepping-practice.jpg",
  },
  {
    title: "Therapist-Guided Balance Play",
    category: "Therapy Equipment",
    alt: "Therapist guiding a child through a playful balance and coordination activity with clinic equipment",
    image: "/images/gallery/therapist-guided-balance-play.jpg",
  },
  {
    title: "Climbing Wall Step Practice",
    category: "Child-Friendly Environment",
    alt: "Child practicing movement planning near a colorful climbing wall and sensory stepping pads",
    image: "/images/gallery/climbing-wall-step-practice.jpg",
  },
  {
    title: "Ring Swing Movement Play",
    category: "Therapy Room",
    alt: "Child using a ring swing in a supervised pediatric sensory gym session",
    image: "/images/gallery/ring-swing-movement-play.jpg",
  },
  {
    title: "Supported Swing Session",
    category: "Therapy Room",
    alt: "Therapist supporting a child during a sensory swing activity in the clinic gym",
    image: "/images/gallery/supported-swing-session.jpg",
  },
  {
    title: "Sensory Rattle Play",
    category: "Early Intervention",
    alt: "Dr. Sharuja smiling with a baby seated on a textured therapy ball while playing with a bell rattle",
    image: "/images/gallery/rattle-play-gym-ball.jpg",
  },
  {
    title: "Finger Puppet Engagement",
    category: "Early Intervention",
    alt: "Dr. Sharuja engaging a baby face-to-face with colorful animal finger puppets during early intervention play",
    image: "/images/gallery/finger-puppet-engagement.jpg",
  },
  {
    title: "Crawling Milestone Practice",
    category: "Early Intervention",
    alt: "Baby practicing crawling on a padded therapy mat while Dr. Sharuja guards and encourages the movement",
    image: "/images/gallery/infant-crawling-guidance.jpg",
  },
  {
    title: "Hands-On Crawling Support",
    category: "Early Intervention",
    alt: "Therapist supporting an infant's hips during crawling practice on a soft blue mat in the therapy room",
    image: "/images/gallery/infant-crawling-support.jpg",
  },
  {
    title: "Supported Standing Practice",
    category: "Early Intervention",
    alt: "Infant practicing supported standing at a textured therapy ball in the spacious pediatric gym",
    image: "/images/gallery/supported-standing-gym.jpg",
  },
  {
    title: "Standing at the Ball",
    category: "Early Intervention",
    alt: "Baby pulling up to stand against a textured therapy ball with gentle therapist support",
    image: "/images/gallery/supported-standing-ball.jpg",
  },
  {
    title: "Reach and Grasp Wall Play",
    category: "Early Intervention",
    alt: "Baby reaching for colorful balls fixed to the wall, building shoulder strength and hand-eye coordination",
    image: "/images/gallery/wall-ball-reaching-activity.jpg",
  },
  {
    title: "Infant Leg Strengthening",
    category: "Early Intervention",
    alt: "Therapist guiding a gentle leg-strengthening and rolling exercise for an infant on the therapy mat",
    image: "/images/gallery/infant-leg-strengthening.jpg",
  },
  {
    title: "Blanket Swing Calming",
    category: "Early Intervention",
    alt: "Infant relaxing in a soft pink blanket swing held by two therapists for vestibular input",
    image: "/images/gallery/blanket-swing-vestibular.jpg",
  },
  {
    title: "Ball Pit Music Play",
    category: "Child-Friendly Environment",
    alt: "Baby playing a colorful xylophone in the ball pit with Dr. Sharuja during a sensory play session",
    image: "/images/gallery/ball-pit-xylophone-play.jpg",
  },
  {
    title: "Balance Beam Coordination",
    category: "Therapy Equipment",
    alt: "Young girl walking a wavy tactile balance beam while balancing a disc game with therapist guidance",
    image: "/images/gallery/balance-beam-coordination-game.jpg",
  },
  {
    title: "Trampoline Gross Motor Play",
    category: "Therapy Equipment",
    alt: "Girl jumping on a mini trampoline with hand support from a smiling therapist",
    image: "/images/gallery/trampoline-jumping-gross-motor.jpg",
  },
  {
    title: "Assisted Wall Climbing",
    category: "Child-Friendly Environment",
    alt: "Young girl climbing a colorful climbing wall with close therapist support for motor planning and strength",
    image: "/images/gallery/climbing-wall-assisted-climb.jpg",
  },
  {
    title: "Vestibular Swing Session",
    category: "Therapy Room",
    alt: "Girl seated on a therapy swing beside the climbing wall with a smiling therapist providing support",
    image: "/images/gallery/therapy-swing-vestibular-play.jpg",
  },
  {
    title: "Motor Planning Ring Jumps",
    category: "Therapy Room",
    alt: "Boy jumping through a course of colorful floor rings while the therapist cheers him on",
    image: "/images/gallery/jumping-rings-motor-planning.jpg",
  },
];

export const clinicVideos = [
  {
    src: "/images/videos/handwriting-board-practice.mp4",
    poster: getSiteImage("handwritingPractice"),
    category: "Assessment Area",
  },
  {
    src: "/images/videos/sensory-pathway-guided-play.mp4",
    poster: getSiteImage("sensoryPath"),
    category: "Child-Friendly Environment",
  },
  {
    src: "/images/videos/climbing-wall-balance-practice.mp4",
    poster: getSiteImage("climbingWall"),
    category: "Child-Friendly Environment",
  },
  {
    src: "/images/videos/sensory-swing-session.mp4",
    poster: getSiteImage("sensoryGym"),
    category: "Therapy Room",
  },
] as const;

export const seoKeywords = [
  "Pediatric Occupational Therapist Mumbai",
  "OT Kandivali",
  "Brain Gym® Mumbai",
  "Aquatic Therapy Mumbai",
  "Sensory Integration Mumbai",
  "Autism Support Mumbai",
  "ADHD Support Mumbai",
  "Occupational Therapy Mumbai",
  "Handwriting Training Mumbai",
  "Child Development Therapy Mumbai",
  "Pediatric OT Kandivali",
];

export type Service = (typeof services)[number];
