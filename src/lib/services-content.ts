export type GeoBlock = {
  whatIsIt: string;
  whoNeedsIt: string;
  howItHelps: string;
  whatHappens: string;
  outcomes: string[];
  whenToBegin: string;
};

export type ServiceExtendedContent = {
  slug: string;
  geoBlock: GeoBlock;
  caseExamples: { title: string; description: string }[];
  parentGuidance: string[];
  additionalFaqs: { q: string; a: string }[];
};

export const servicesExtendedContent: ServiceExtendedContent[] = [
  {
    slug: "occupational-therapy",
    geoBlock: {
      whatIsIt: "Pediatric occupational therapy at Thrive With Sharuja helps children develop the skills needed for everyday life — play, learning, self-care, and social participation. Dr. Sharuja Sarap uses sensory-integrative, movement-based approaches in Kandivali West, Mumbai.",
      whoNeedsIt: "Children from birth to 14 years who struggle with sensory processing, motor coordination, attention, handwriting, self-care routines, or school participation.",
      howItHelps: "Through play-based assessment and intervention, OT builds sensory regulation, motor skills, executive function, and daily living independence — empowering children at home, school, and in the community.",
      whatHappens: "Sessions include warm-up activities, targeted skill-building through play, sensory integration exercises, and parent debrief with home strategies. Initial evaluation spans 1–2 sessions.",
      outcomes: ["Improved daily routine independence", "Better sensory regulation and attention", "Stronger motor coordination", "Greater school readiness", "Increased social participation", "Parent confidence with home strategies"],
      whenToBegin: "As soon as you notice your child falling behind peers in motor, sensory, or daily living skills — early intervention yields the best outcomes.",
    },
    caseExamples: [
      { title: "Sensory regulation breakthrough", description: "A 5-year-old with sensory overload went from daily meltdowns in malls and classrooms to participating in birthday parties and completing school days with minimal distress — after 12 weeks of sensory integration OT." },
      { title: "School readiness success", description: "A 6-year-old struggling with pencil grip, sitting tolerance, and transitions entered Grade 1 confidently after a structured OT program focusing on fine motor and self-regulation skills." },
    ],
    parentGuidance: [
      "Observe your child's responses to sensory input at home — sounds, textures, movement",
      "Maintain consistent daily routines to reduce transition-related stress",
      "Practice recommended home activities 10–15 minutes daily for best results",
      "Communicate openly with Dr. Sharuja Sarap about school feedback and home observations",
      "Celebrate small wins — progress in OT is often gradual but meaningful",
    ],
    additionalFaqs: [
      { q: "How is pediatric OT at Thrive With Sharuja different?", a: "Dr. Sharuja Sarap combines 18+ years of experience with certifications in Brain Gym, HWT, Aquatherapy, MNRI, and sensory integration for truly holistic care." },
      { q: "Do you coordinate with my child's school?", a: "Yes. We provide written recommendations and are happy to speak with teachers when families request it." },
      { q: "What is your therapy philosophy?", a: "Evidence-informed, play-based OT that meets each child where they are and builds skills families can use every day." },
      { q: "How many sessions will my child need?", a: "This varies by goals and severity. After evaluation, Dr. Sharuja Sarap provides a realistic timeline — typically 8–24 weeks for focused goals, with longer support for complex profiles." },
      { q: "Can siblings attend therapy sessions?", a: "Parents are always welcome. Sibling attendance depends on session focus — discuss with us when booking." },
    ],
  },
  {
    slug: "aquatic-therapy",
    geoBlock: {
      whatIsIt: "Aquatic therapy uses water's therapeutic properties — buoyancy, hydrostatic pressure, and warmth — to support children's physical, sensory, and emotional development in a safe, engaging environment.",
      whoNeedsIt: "Children aged 2–14 with low muscle tone, motor coordination challenges, cerebral palsy, sensory needs, or those who thrive with water-based movement.",
      howItHelps: "Water reduces gravity's impact, allowing children to practice movement patterns, build strength, and experience sensory input in a fun, low-pressure setting.",
      whatHappens: "Certified aquatic sessions include water safety assessment, therapeutic activities adapted to each child's ability, and progress tracking with land-based carryover goals.",
      outcomes: ["Improved balance and coordination", "Enhanced strength and endurance", "Better sensory regulation", "Increased body awareness", "Greater confidence in physical activities", "Joyful engagement in therapy"],
      whenToBegin: "When land-based therapy feels challenging or when water's unique properties would accelerate motor and sensory progress.",
    },
    caseExamples: [
      { title: "Building strength through water", description: "A 7-year-old with low muscle tone who avoided playground activities developed the strength and confidence to climb and run after 10 weeks of aquatic therapy combined with land-based OT." },
      { title: "Sensory calm in water", description: "A 4-year-old with sensory seeking behaviors found regulation through aquatic sessions, translating to calmer behavior at home and improved sleep." },
    ],
    parentGuidance: [
      "Ensure your child is well-rested and fed before aquatic sessions",
      "Bring swimwear, towel, and change of clothes as advised",
      "Discuss any water fears or previous experiences at the first consultation",
      "Reinforce water confidence through supervised play at home if possible",
    ],
    additionalFaqs: [
      { q: "Is Dr. Sharuja Sarap certified in aquatherapy?", a: "Yes. She holds IATF (International Aquatic Therapy Foundation) certification for pediatric aquatherapy." },
      { q: "Can aquatic therapy be combined with regular OT?", a: "Absolutely. Most families benefit from a combination of aquatic and land-based sessions for comprehensive progress." },
    ],
  },
  {
    slug: "brain-gym",
    geoBlock: {
      whatIsIt: "Brain Gym® is a movement-based program that activates neural pathways for learning, attention, coordination, and emotional well-being through specific physical activities.",
      whoNeedsIt: "Children aged 4–14 with attention difficulties, learning challenges, reading/writing struggles, or poor coordination — with or without a formal diagnosis.",
      howItHelps: "Targeted movements integrate left and right brain hemispheres, improve eye tracking, enhance midline crossing, and build the body-brain connection essential for learning.",
      whatHappens: "Sessions include Brain Gym warm-up activities, targeted exercises for identified learning challenges, academic task practice, and home routine assignment.",
      outcomes: ["Improved classroom focus", "Better reading and writing readiness", "Enhanced coordination", "Increased learning confidence", "Practical home movement routines", "Reduced homework frustration"],
      whenToBegin: "When attention or learning difficulties are affecting school performance, especially in primary school years when academic demands increase.",
    },
    caseExamples: [
      { title: "Focus transformation", description: "An 8-year-old with ADHD who could not sit through a 10-minute homework session built 25-minute focused work periods after 8 weeks of Brain Gym integrated with OT." },
      { title: "Reading readiness", description: "A 6-year-old struggling with letter recognition and eye tracking showed marked improvement in reading fluency after Brain Gym activities targeting visual-motor integration." },
    ],
    parentGuidance: [
      "Practice assigned Brain Gym movements for 5–10 minutes before homework",
      "Create a consistent study environment with minimal distractions",
      "Use movement breaks during long seated tasks",
      "Share Brain Gym progress with teachers for classroom integration",
    ],
    additionalFaqs: [
      { q: "Is Brain Gym scientifically validated?", a: "Brain Gym is widely used in educational and therapeutic settings globally. Dr. Sharuja Sarap integrates it within her evidence-informed OT framework." },
      { q: "Can Brain Gym replace tutoring?", a: "Brain Gym addresses the body-brain foundations for learning; it complements rather than replaces academic tutoring." },
    ],
  },
  {
    slug: "handwriting-training",
    geoBlock: {
      whatIsIt: "Specialized handwriting training using the Handwriting Without Tears® (HWT) program — a multisensory, evidence-based approach to building legible, fluent writing skills.",
      whoNeedsIt: "Children aged 4–14 with illegible handwriting, poor pencil grip, slow writing speed, hand fatigue, or active avoidance of writing tasks.",
      howItHelps: "HWT addresses underlying fine motor, visual-motor, and postural factors while teaching letter formation through structured, engaging, success-based activities.",
      whatHappens: "Assessment of grip, formation, speed, and underlying motor skills followed by structured HWT sessions with multisensory letter practice and progressive complexity.",
      outcomes: ["Legible, consistent letter formation", "Functional pencil grip", "Improved writing speed", "Reduced hand fatigue", "Classroom-ready written work", "Renewed confidence in writing tasks"],
      whenToBegin: "When handwriting remains illegible or painfully slow by age 7–8, or when writing avoidance is affecting academic performance.",
    },
    caseExamples: [
      { title: "From avoidance to achievement", description: "A 9-year-old who refused all written homework completed her first full assignment independently after 10 weeks of HWT-based handwriting training." },
      { title: "Exam readiness", description: "A 12-year-old whose illegible exam answers cost marks improved writing speed and legibility enough to complete timed papers within the allotted period." },
    ],
    parentGuidance: [
      "Provide a stable writing surface and appropriate pencil at home",
      "Practice recommended HWT activities for 10 minutes daily",
      "Avoid criticizing handwriting — focus on effort and improvement",
      "Share progress with teachers and request appropriate accommodations during transition",
    ],
    additionalFaqs: [
      { q: "Is Dr. Sharuja Sarap HWT-certified?", a: "Yes. She is certified in Handwriting Without Tears®, using the full structured program for assessment and intervention." },
      { q: "How is HWT different from regular handwriting practice?", a: "HWT uses multisensory techniques — wood pieces, wet-dry-try, and music — to teach formation systematically rather than through repetitive copying." },
    ],
  },
  {
    slug: "rmti",
    geoBlock: {
      whatIsIt: "RMTI (Rhythmic Movement Training Integration) uses innate rhythmic movements to stimulate brain development, integrate retained primitive reflexes, and support postural and emotional foundations.",
      whoNeedsIt: "Children with coordination difficulties, attention challenges, emotional dysregulation, reading struggles, or signs of retained primitive reflexes.",
      howItHelps: "Gentle rhythmic movements activate neural pathways, improve postural stability, and support nervous system organization for learning and daily participation.",
      whatHappens: "Sessions include reflex assessment, targeted rhythmic movement activities, and home practice assignment with parent guidance.",
      outcomes: ["Improved postural control", "Better emotional regulation", "Enhanced attention and learning readiness", "Stronger motor coordination", "Foundation for reading and writing", "Reduced anxiety and reactivity"],
      whenToBegin: "When coordination, attention, or emotional challenges persist despite other interventions — reflex integration may be the missing piece.",
    },
    caseExamples: [
      { title: "Reading readiness breakthrough", description: "A 7-year-old with reading struggles and poor posture showed improved eye tracking and letter recognition after 10 weeks of RMTI integrated with OT." },
      { title: "Emotional calm through movement", description: "A 5-year-old with frequent meltdowns developed calmer responses to transitions after consistent rhythmic movement practice at home and clinic." },
    ],
    parentGuidance: [
      "Practice assigned rhythmic movements for 5–10 minutes daily",
      "Create a calm, consistent practice environment",
      "Be patient — reflex integration progress is gradual but foundational",
      "Share observations about posture and attention changes with Dr. Sharuja Sarap",
    ],
    additionalFaqs: [
      { q: "Is RMTI safe for infants?", a: "Yes. Movements are gentle and adapted to each child's age and developmental level." },
      { q: "How is RMTI different from MNRI?", a: "Both address reflex integration. Dr. Sharuja Sarap selects the most appropriate protocol for each child." },
    ],
  },
  {
    slug: "opt",
    geoBlock: {
      whatIsIt: "OPT (Oral Placement Therapy) uses targeted exercises and tools to develop oral-motor skills for safe feeding, speech articulation foundations, and oral sensory tolerance.",
      whoNeedsIt: "Children with picky eating, oral aversions, chewing difficulties, oral hypersensitivity, or speech-related motor challenges.",
      howItHelps: "OPT builds oral strength, coordination, and sensory tolerance through structured, playful activities that make mealtimes safer and more enjoyable.",
      whatHappens: "Sessions include oral-motor assessment, OPT exercises with appropriate tools, sensory activities, and mealtime strategy coaching for parents.",
      outcomes: ["Expanded food acceptance", "Improved oral-motor strength", "Safer chewing and swallowing", "Reduced mealtime battles", "Better oral sensory tolerance", "Foundation for speech articulation"],
      whenToBegin: "When feeding difficulties affect nutrition, growth, or family wellbeing — early OPT support prevents entrenched aversions.",
    },
    caseExamples: [
      { title: "From 5 foods to family meals", description: "A 4-year-old eating only 5 foods gradually accepted 15+ foods over 16 weeks of OPT-based feeding therapy combined with sensory strategies." },
      { title: "Cup drinking success", description: "A 3-year-old unable to transition from bottle to cup developed safe cup drinking skills through targeted OPT exercises." },
    ],
    parentGuidance: [
      "Maintain calm, pressure-free mealtimes at home",
      "Practice recommended oral-motor exercises before meals",
      "Introduce new foods one at a time in low-pressure settings",
      "Communicate openly about mealtime observations and progress",
    ],
    additionalFaqs: [
      { q: "Does OPT replace speech therapy?", a: "OPT addresses oral-motor foundations. It complements speech therapy when articulation is affected by oral-motor weakness." },
      { q: "Is Dr. Sharuja Sarap OPT-certified?", a: "Yes. She is certified in Oral Placement Therapy and integrates it within pediatric OT." },
    ],
  },
  {
    slug: "piastm",
    geoBlock: {
      whatIsIt: "PIASTM (Pediatric Instrument Assisted Soft Tissue Mobilization) uses gentle instrument-assisted techniques to address soft tissue restrictions limiting movement and function.",
      whoNeedsIt: "Children with muscle tension, postural challenges, movement restrictions, or recovery needs following injury or chronic tightness.",
      howItHelps: "PIASTM improves tissue mobility, reduces tension, and supports better movement quality within a comprehensive OT program.",
      whatHappens: "Assessment of movement and tissue restrictions followed by gentle PIASTM application integrated with stretching and strengthening activities.",
      outcomes: ["Improved range of motion", "Reduced muscle tension", "Better postural alignment", "Enhanced movement efficiency", "Greater comfort during activities", "Support for motor training goals"],
      whenToBegin: "When muscle tightness or tissue restrictions are limiting progress in motor or postural goals.",
    },
    caseExamples: [
      { title: "Postural improvement", description: "A 9-year-old with chronic shoulder tension and poor writing posture showed improved alignment and reduced hand fatigue after PIASTM integrated with OT." },
    ],
    parentGuidance: [
      "Follow home stretching programs consistently",
      "Report any discomfort or skin sensitivity promptly",
      "Support good posture habits during homework and screen time",
    ],
    additionalFaqs: [
      { q: "Does PIASTM hurt?", a: "No. Pediatric PIASTM uses gentle pressure appropriate for children within a trusting therapeutic relationship." },
    ],
  },
  {
    slug: "kinesio-taping",
    geoBlock: {
      whatIsIt: "Kinesio Taping (KT Level 1–3) uses elastic therapeutic tape to support muscles, joints, and posture while providing proprioceptive feedback for improved motor control.",
      whoNeedsIt: "Children needing postural support, proprioceptive input, or muscle activation assistance during daily activities, sports, or school participation.",
      howItHelps: "Tape provides sensory feedback and structural support without restricting movement, complementing ongoing motor training.",
      whatHappens: "Functional assessment, tape application tailored to daily goals, parent education on wear time and skin care, and regular reassessment.",
      outcomes: ["Improved postural awareness", "Enhanced proprioceptive feedback", "Support during physical activities", "Better joint stability", "Complement to motor training", "Increased movement confidence"],
      whenToBegin: "When postural support or proprioceptive input would accelerate progress toward functional motor goals.",
    },
    caseExamples: [
      { title: "Sports participation support", description: "A 10-year-old with mild coordination challenges used Kinesio taping during cricket practice, improving throwing accuracy and confidence." },
    ],
    parentGuidance: [
      "Follow tape care instructions — keep dry for first hour after application",
      "Remove tape gently if skin irritation occurs",
      "Report effectiveness and comfort at each session",
    ],
    additionalFaqs: [
      { q: "Is Kinesio tape hypoallergenic?", a: "We use pediatric-appropriate tape. If skin sensitivity is a concern, discuss alternatives at your consultation." },
    ],
  },
  {
    slug: "mnri",
    geoBlock: {
      whatIsIt: "MNRI (Masgutova Neurosensorimotor Reflex Integration) uses specialized reflex integration protocols to rebuild nervous system foundations for movement, regulation, and learning.",
      whoNeedsIt: "Children with retained primitive reflexes, motor planning difficulties, sensory dysregulation, or trauma-related nervous system challenges.",
      howItHelps: "MNRI addresses the neurosensorimotor roots of functional challenges, creating stronger foundations for coordination, attention, and emotional resilience.",
      whatHappens: "Reflex pattern assessment, individualized MNRI protocol within therapy sessions, home reflex activities, and regular progress monitoring.",
      outcomes: ["Stronger nervous system foundations", "Improved motor planning", "Better emotional regulation", "Enhanced learning readiness", "Improved postural stability", "Greater stress resilience"],
      whenToBegin: "When foundational motor, sensory, or regulation challenges suggest retained reflex patterns may be contributing.",
    },
    caseExamples: [
      { title: "Motor planning progress", description: "A 6-year-old who could not learn to ride a bicycle developed the motor planning foundations for cycling after 12 weeks of MNRI-integrated OT." },
    ],
    parentGuidance: [
      "Practice home reflex integration activities daily",
      "Maintain consistent routines to support nervous system regulation",
      "Celebrate small functional gains — MNRI progress builds cumulatively",
    ],
    additionalFaqs: [
      { q: "Is MNRI suitable for children with trauma history?", a: "MNRI includes protocols for stress and trauma recovery. Discuss your child's history at consultation for appropriate planning." },
    ],
  },
  {
    slug: "kdct",
    geoBlock: {
      whatIsIt: "KDCT (Kinesio Dry Cupping Therapy) applies gentle dry cupping techniques adapted for children to support tissue health, circulation, and movement recovery.",
      whoNeedsIt: "Children with muscle tension, postural strain, chronic tightness, or recovery needs alongside motor training goals.",
      howItHelps: "Gentle cupping supports soft tissue recovery and circulation, complementing stretching, strengthening, and motor training within OT.",
      whatHappens: "Assessment of tissue needs, gentle KDCT application within therapy context, integration with movement activities, and parent guidance.",
      outcomes: ["Reduced muscle tension", "Improved tissue mobility", "Support for movement recovery", "Enhanced comfort during activities", "Complement to motor training", "Gentle therapeutic relief"],
      whenToBegin: "When muscle tension or tissue restrictions accompany motor or postural challenges.",
    },
    caseExamples: [
      { title: "Tension relief for active child", description: "An 11-year-old athlete with chronic shoulder tightness experienced improved mobility and reduced discomfort after KDCT combined with OT strengthening." },
    ],
    parentGuidance: [
      "Mild circular marks may appear temporarily — this is normal",
      "Keep cupped areas warm and avoid strenuous activity immediately after",
      "Report any skin sensitivity promptly",
    ],
    additionalFaqs: [
      { q: "Is dry cupping painful for children?", a: "No. Pediatric KDCT uses gentle suction appropriate for children's comfort and tolerance." },
    ],
  },
];

export function getServiceExtendedContent(slug: string) {
  return servicesExtendedContent.find((s) => s.slug === slug);
}
