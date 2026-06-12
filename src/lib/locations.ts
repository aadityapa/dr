export type LocationPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  headline: string;
  intro: string;
  whyChoose: string[];
  services: string[];
  areaServed: string[];
  localFaqs: { q: string; a: string }[];
};

export const locationPages: LocationPage[] = [
  {
    slug: "occupational-therapist-kandivali",
    title: "Occupational Therapist Kandivali",
    metaTitle: "Occupational Therapist Kandivali West Mumbai",
    metaDescription: "Find a pediatric occupational therapist in Kandivali West. Dr. Sharuja Sarap offers sensory-integrative OT for children 0–14 at Thrive with sharuja.",
    keywords: ["occupational therapist Kandivali", "pediatric OT Kandivali West", "OT clinic Kandivali Mumbai"],
    headline: "Pediatric Occupational Therapist in Kandivali West",
    intro: "Looking for a trusted occupational therapist in Kandivali? Dr. Sharuja Sarap welcomes families from Kandivali West, Kandivali East, and surrounding neighborhoods to Thrive with sharuja — a warm, child-friendly clinic at Manhar Medical And Jeet Child Development Centre on S.V.P. Road, near Municipal Garden.",
    whyChoose: [
      "Convenient Kandivali West location near Municipal Garden",
      "16+ years of pediatric OT experience",
      "Sensory-integrative, play-based approach",
      "Certified in Brain Gym, HWT, Aquatherapy, and more",
      "Personalized programs for children birth to 14 years",
    ],
    services: ["Occupational Therapy", "Aquatic Therapy", "Brain Gym", "Handwriting Training"],
    areaServed: ["Kandivali West", "Kandivali East", "Borivali", "Malad", "Goregaon"],
    localFaqs: [
      { q: "Where exactly is the clinic in Kandivali?", a: "Manhar Medical And Jeet Child Development Centre, 2-A, Gyan Kutir, S.V.P. Road, Near Municipal Garden, Kandivali (West), Mumbai – 400067." },
      { q: "What are the clinic timings?", a: "Monday to Saturday, 9:00 AM – 5:00 PM." },
      { q: "How do I book an appointment in Kandivali?", a: "Call 9820525197, WhatsApp us, or use the online appointment form." },
    ],
  },
  {
    slug: "occupational-therapist-mumbai",
    title: "Occupational Therapist Mumbai",
    metaTitle: "Pediatric Occupational Therapist Mumbai",
    metaDescription: "Expert pediatric occupational therapy in Mumbai with Dr. Sharuja Sarap. Sensory integration, Brain Gym, aquatic & handwriting therapy for children 0–14.",
    keywords: ["occupational therapist Mumbai", "pediatric OT Mumbai", "child OT Mumbai"],
    headline: "Pediatric Occupational Therapist in Mumbai",
    intro: "Families across Mumbai trust Dr. Sharuja Sarap for compassionate, evidence-based pediatric occupational therapy. Based in Kandivali West, Thrive with sharuja serves children from Borivali, Malad, Goregaon, Andheri, and beyond — offering sensory-integrative care that helps children regulate, connect, participate, and thrive.",
    whyChoose: [
      "Central Kandivali West location accessible from across Mumbai",
      "Comprehensive pediatric OT with 8+ specialized certifications",
      "Warm, child-friendly clinic environment",
      "Family-centered approach with home program support",
      "2000+ families supported over 16 years",
    ],
    services: ["Occupational Therapy", "Sensory Integration", "Aquatic Therapy", "Brain Gym", "Handwriting Training"],
    areaServed: ["Mumbai", "Kandivali", "Borivali", "Malad", "Goregaon", "Andheri", "Dahisar"],
    localFaqs: [
      { q: "Do you serve families outside Kandivali?", a: "Yes. Families travel from across Mumbai including Borivali, Malad, Goregaon, Andheri, and Dahisar for Dr. Sharuja Sarap's specialized care." },
      { q: "Is parking available near the clinic?", a: "Street parking is available near S.V.P. Road, Kandivali West. We recommend arriving 10 minutes early." },
      { q: "What makes Thrive with sharuja different?", a: "Dr. Sharuja Sarap combines 16+ years of experience with certifications in Brain Gym, HWT, Aquatherapy, MNRI, and sensory integration for holistic pediatric care." },
    ],
  },
  {
    slug: "pediatric-therapy-kandivali",
    title: "Pediatric Therapy Kandivali",
    metaTitle: "Pediatric Therapy Kandivali West Mumbai",
    metaDescription: "Pediatric therapy in Kandivali West for children 0–14. Dr. Sharuja Sarap offers OT, sensory integration, aquatic therapy & more at Thrive with sharuja.",
    keywords: ["pediatric therapy Kandivali", "child therapy Kandivali West", "developmental therapy Kandivali"],
    headline: "Pediatric Therapy in Kandivali West",
    intro: "Thrive with sharuja is Kandivali West's dedicated pediatric therapy clinic, offering occupational therapy and specialized programs for children from birth to 14 years. Dr. Sharuja Sarap creates individualized therapy plans that address sensory, motor, attention, and daily living challenges in a nurturing environment.",
    whyChoose: [
      "Dedicated pediatric therapy clinic — not a general practice",
      "Programs for autism, ADHD, developmental delay, and more",
      "Play-based, child-led therapeutic approach",
      "Parent coaching and home program support included",
      "Easy access from Kandivali station and Western Express Highway",
    ],
    services: ["Pediatric OT", "Sensory Integration Therapy", "Aquatic Therapy", "Brain Gym", "Handwriting Training"],
    areaServed: ["Kandivali West", "Kandivali East", "Borivali West", "Malad West"],
    localFaqs: [
      { q: "What conditions do you treat in Kandivali?", a: "Autism, ADHD, developmental delay, sensory processing difficulties, cerebral palsy, learning difficulties, motor coordination challenges, and handwriting difficulties." },
      { q: "What age children do you see?", a: "Birth to 14 years with programs tailored to each developmental stage." },
      { q: "Is the clinic child-friendly?", a: "Yes. Our therapy rooms, sensory gym, and play areas are designed to make children feel safe, welcome, and engaged." },
    ],
  },
  {
    slug: "pediatric-therapy-mumbai",
    title: "Pediatric Therapy Mumbai",
    metaTitle: "Pediatric Therapy Mumbai — Thrive with sharuja",
    metaDescription: "Comprehensive pediatric therapy in Mumbai. Dr. Sharuja Sarap provides OT, sensory integration, aquatic therapy & Brain Gym for children 0–14 in Kandivali West.",
    keywords: ["pediatric therapy Mumbai", "child development therapy Mumbai", "pediatric OT Mumbai"],
    headline: "Pediatric Therapy in Mumbai",
    intro: "Mumbai families seeking expert pediatric therapy find a trusted partner in Dr. Sharuja Sarap at Thrive with sharuja. Our Kandivali West clinic offers comprehensive occupational therapy and specialized programs that help children across Mumbai build the skills for confident, joyful participation in daily life.",
    whyChoose: [
      "One of Mumbai's experienced pediatric OT practitioners — 16+ years",
      "Multi-certification expertise: Brain Gym, HWT, Aquatherapy, MNRI, OPT",
      "Evidence-based, sensory-integrative therapy philosophy",
      "Support for 9+ developmental conditions",
      "Belonging Without Boundaries — inclusive, strength-based care",
    ],
    services: ["Occupational Therapy", "Sensory Integration", "Aquatic Therapy", "Brain Gym", "Handwriting Training"],
    areaServed: ["Mumbai", "Mumbai Suburbs", "Western Suburbs", "Kandivali", "Borivali", "Malad"],
    localFaqs: [
      { q: "How do I know if my child needs pediatric therapy?", a: "If your child struggles with sensory processing, motor skills, attention, handwriting, self-care, or school participation compared to peers, a consultation can clarify next steps." },
      { q: "Do you provide reports for schools?", a: "Yes. We provide detailed assessment reports and classroom recommendations upon request." },
      { q: "Can I visit the clinic before booking?", a: "Contact us to arrange a clinic tour or initial phone consultation." },
    ],
  },
  {
    slug: "aquatic-therapy-mumbai",
    title: "Aquatic Therapy Mumbai",
    metaTitle: "Aquatic Therapy for Children Mumbai",
    metaDescription: "Pediatric aquatic therapy in Mumbai with IATF-certified Dr. Sharuja Sarap. Water-based therapy for motor, sensory & emotional development in Kandivali.",
    keywords: ["aquatic therapy Mumbai", "aquatherapy children Mumbai", "water therapy Kandivali"],
    headline: "Aquatic Therapy for Children in Mumbai",
    intro: "Water unlocks therapeutic possibilities that land-based therapy alone cannot offer. Dr. Sharuja Sarap — IATF-certified in aquatherapy — provides pediatric aquatic therapy for Mumbai families, using water's buoyancy, resistance, and warmth to support motor development, sensory regulation, and joyful movement.",
    whyChoose: [
      "IATF-certified aquatherapy practitioner",
      "Safe, supervised water-based sessions",
      "Ideal for low muscle tone, CP, and coordination challenges",
      "Combined with land-based OT for comprehensive progress",
      "Children who resist land therapy often thrive in water",
    ],
    services: ["Aquatic Therapy", "Occupational Therapy", "Sensory Integration"],
    areaServed: ["Mumbai", "Kandivali", "Borivali", "Malad", "Goregaon"],
    localFaqs: [
      { q: "Where are aquatic sessions held?", a: "At partner aquatic facilities accessible from Kandivali West. Location details provided at booking." },
      { q: "Does my child need to swim?", a: "No. All sessions are fully supervised and adapted to each child's comfort level." },
      { q: "What age can start aquatic therapy?", a: "Generally from 2 years, depending on individual readiness and comfort with water." },
    ],
  },
  {
    slug: "sensory-integration-therapy-mumbai",
    title: "Sensory Integration Therapy Mumbai",
    metaTitle: "Sensory Integration Therapy Mumbai & Kandivali",
    metaDescription: "Sensory integration therapy for children in Mumbai. Dr. Sharuja Sarap helps kids regulate sensory input for calmer behavior & better participation in Kandivali.",
    keywords: ["sensory integration therapy Mumbai", "sensory processing therapy Kandivali", "sensory OT Mumbai"],
    headline: "Sensory Integration Therapy in Mumbai",
    intro: "When a child's nervous system struggles to process everyday sensory input, meltdowns, avoidance, and participation difficulties follow. Dr. Sharuja Sarap at Thrive with sharuja specializes in Ayres Sensory Integration®-informed therapy, helping Mumbai children build a calmer, more regulated sensory system for confident daily living.",
    whyChoose: [
      "Specialized sensory integration expertise",
      "Dedicated sensory gym with swings, climbing, and tactile tools",
      "Personalized sensory diets for home and school",
      "Supports autism, ADHD, SPD, and developmental conditions",
      "16+ years experience with sensory-based pediatric OT",
    ],
    services: ["Sensory Integration Therapy", "Occupational Therapy", "Aquatic Therapy"],
    areaServed: ["Mumbai", "Kandivali West", "Borivali", "Malad", "Goregaon"],
    localFaqs: [
      { q: "What is sensory integration therapy?", a: "A specialized OT approach using guided sensory experiences to help the brain organize and respond appropriately to sensory input." },
      { q: "How is it different from regular OT?", a: "Sensory integration therapy specifically targets the sensory processing systems using a sensory-rich gym environment and Ayres-informed techniques." },
      { q: "How many sessions are needed?", a: "Most children attend 1–2 sessions weekly for 3–6 months, with progress reviewed regularly." },
    ],
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((p) => p.slug === slug);
}
