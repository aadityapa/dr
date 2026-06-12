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
      whatIsIt: "Pediatric occupational therapy at Thrive with sharuja helps children develop the skills needed for everyday life — play, learning, self-care, and social participation. Dr. Sharuja Sarap uses sensory-integrative, movement-based approaches in Kandivali West, Mumbai.",
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
      { q: "How is pediatric OT at Thrive with sharuja different?", a: "Dr. Sharuja Sarap combines 16+ years of experience with certifications in Brain Gym, HWT, Aquatherapy, MNRI, and sensory integration for truly holistic care." },
      { q: "Do you coordinate with my child's school?", a: "Yes. We provide written recommendations and are happy to speak with teachers when families request it." },
      { q: "What is your therapy philosophy?", a: "Belonging Without Boundaries — we celebrate each child's strengths while building skills for meaningful participation." },
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
];

export function getServiceExtendedContent(slug: string) {
  return servicesExtendedContent.find((s) => s.slug === slug);
}
