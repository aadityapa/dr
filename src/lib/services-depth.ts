export type ServiceDepthContent = {
  slug: string;
  overview: string[];
  signsYourChildMayNeed: string[];
  parentGuide: string[];
  researchReferences: { title: string; source: string }[];
  outcomes: string[];
  whenToSeekHelp: string;
};

const clinic = "Thrive with sharuja";
const doctor = "Dr. Sharuja Sarap";

function sharedOverview(serviceName: string): string[] {
  return [
    `${serviceName} at ${clinic} in Kandivali West, Mumbai represents the intersection of clinical expertise and compassionate, child-centered care. ${doctor} brings 18+ years of dedicated pediatric practice, registration number 051388, and advanced international certifications to every session. Families travel from across Mumbai — Borivali, Malad, Goregaon, Andheri, and beyond — because they trust our evidence-informed, play-based approach.`,
    `Our clinic philosophy — Belonging Without Boundaries — guides every intervention. We do not pathologize childhood differences. Instead, we build the sensory, motor, cognitive, and emotional foundations that help children participate meaningfully in the life they choose. Therapy sessions take place in a warm, child-friendly environment equipped with sensory gym equipment, assessment areas, and specialized therapeutic tools.`,
    `Every program begins with comprehensive assessment. ${doctor} conducts child-friendly evaluations that respect each child's communication style, sensory preferences, and developmental stage. Goals are co-created with parents, reviewed regularly, and adjusted as children grow. Home programs and school coordination ensure progress extends beyond the clinic walls.`,
    `Research consistently demonstrates that early, individualized intervention yields the strongest outcomes for pediatric developmental challenges. Whether your child has a formal diagnosis or you simply notice skills falling behind peers, a consultation can clarify whether ${serviceName.toLowerCase()} is appropriate and what realistic outcomes to expect.`,
  ];
}

export const servicesDepthContent: ServiceDepthContent[] = [
  {
    slug: "occupational-therapy",
    overview: [
      ...sharedOverview("Pediatric Occupational Therapy"),
      "Pediatric occupational therapy addresses the 'occupations' of childhood — play, learning, self-care, social participation, and rest. When any of these domains is disrupted by sensory processing differences, motor delays, attention challenges, or emotional dysregulation, OT provides structured, evidence-based support tailored to each child's profile.",
      "At Thrive with sharuja, OT integrates Ayres Sensory Integration®-informed therapy, movement-based strategies, fine and gross motor development, executive function training, and daily living skills coaching. Sessions are play-led — children engage in activities that feel like fun while building real functional skills.",
      "Parents frequently report that OT transforms not just their child's abilities but the entire family's daily experience. Reduced meltdowns, smoother morning routines, improved school participation, and greater child confidence are common outcomes when therapy is consistent and home strategies are applied.",
    ],
    signsYourChildMayNeed: [
      "Sensory sensitivities disrupting daily life — extreme reactions to sounds, textures, lights, or movement",
      "Motor delays compared to peers — difficulty running, catching, cutting, or using utensils",
      "Handwriting that remains illegible or painfully slow beyond age 7–8",
      "Difficulty with self-care — dressing, feeding, grooming, or toileting independently",
      "Attention difficulties affecting homework and classroom participation",
      "Frequent meltdowns triggered by environments, transitions, or sensory input",
      "Avoidance of play, social activities, or school tasks peers manage comfortably",
      "Poor body awareness — bumping into things, difficulty with personal space",
    ],
    parentGuide: [
      "Observe your child's responses across different environments — home, school, mall, playground — and note patterns.",
      "Keep a simple log of meltdowns, triggers, and successful strategies for your first consultation.",
      "Talk positively about therapy as 'fun games that help your body feel strong and happy.'",
      "Maintain consistent daily routines to reduce transition-related stress.",
      "Practice recommended home activities 10–15 minutes daily — consistency matters more than duration.",
      "Communicate openly with Dr. Sharuja Sarap about school feedback and home observations.",
      "Celebrate small wins — progress in OT is often gradual but deeply meaningful.",
      "Attend sessions consistently; irregular attendance significantly slows progress.",
    ],
    researchReferences: [
      { title: "Ayres Sensory Integration®: Supporting children with sensory processing challenges", source: "American Occupational Therapy Association (AOTA)" },
      { title: "Effectiveness of sensory integration therapy for children with autism", source: "Journal of Autism and Developmental Disorders" },
      { title: "Early intervention for developmental delay: A systematic review", source: "Developmental Medicine & Child Neurology" },
      { title: "Occupational therapy practice framework: Domain and process", source: "AOTA Practice Framework (4th Edition)" },
    ],
    outcomes: [
      "Improved sensory regulation and reduced meltdown frequency",
      "Greater independence in daily self-care routines",
      "Stronger fine and gross motor skills for play and school",
      "Enhanced attention and classroom participation",
      "Increased social engagement and peer interaction",
      "Parents equipped with practical daily strategies",
      "Improved sleep, mealtime, and transition tolerance",
      "Child builds confidence and self-advocacy skills",
    ],
    whenToSeekHelp: "Seek a consultation if you notice two or more signs persisting for more than 3 months, if teachers raise concerns, or if daily family life is significantly affected. Early intervention — even before a formal diagnosis — yields the best outcomes.",
  },
  {
    slug: "aquatic-therapy",
    overview: [
      ...sharedOverview("Aquatic Therapy"),
      "Water provides a unique therapeutic medium where buoyancy reduces gravity's impact, hydrostatic pressure delivers calming deep touch, and warmth relaxes muscles. These properties create conditions where children who resist land-based therapy often engage eagerly and make rapid motor progress.",
      "Dr. Sharuja Sarap holds IATF (International Aquatic Therapy Foundation) certification and integrates aquatic sessions with land-based OT for comprehensive development. Sessions are fully supervised, adapted to each child's comfort level, and designed to be joyful — not intimidating.",
    ],
    signsYourChildMayNeed: [
      "Low muscle tone affecting posture, endurance, and physical participation",
      "Motor coordination challenges that limit playground and sports engagement",
      "Resistance to land-based therapy or physical activity",
      "Sensory seeking behaviors that water-based movement satisfies effectively",
      "Balance and proprioception difficulties",
      "Cerebral palsy or neurological conditions affecting movement",
      "Recovery from injury requiring low-impact strengthening",
      "Anxiety or fear related to physical activities on land",
    ],
    parentGuide: [
      "Ensure your child is well-rested and fed before aquatic sessions.",
      "Bring swimwear, towel, and change of clothes as advised at booking.",
      "Discuss any water fears or previous experiences at the first consultation.",
      "Reinforce water confidence through supervised play at home if possible.",
      "Combine aquatic sessions with land-based OT for best carryover.",
    ],
    researchReferences: [
      { title: "Aquatic therapy for children with cerebral palsy: Systematic review", source: "Physical Therapy Reviews" },
      { title: "Hydrotherapy effects on motor function in pediatric populations", source: "International Journal of Aquatic Research and Education" },
      { title: "Sensory and motor benefits of aquatic intervention", source: "Journal of Pediatric Rehabilitation Medicine" },
    ],
    outcomes: [
      "Improved balance, coordination, and body awareness",
      "Enhanced muscle strength and endurance",
      "Better sensory regulation through hydrostatic pressure",
      "Increased confidence in physical activities",
      "Joyful engagement that motivates continued therapy",
      "Functional carryover to land-based movement skills",
    ],
    whenToSeekHelp: "Consider aquatic therapy when land-based activities feel too challenging, when your child shows enthusiasm for water, or when low muscle tone or coordination difficulties limit physical participation.",
  },
  {
    slug: "brain-gym",
    overview: [
      ...sharedOverview("Brain Gym®"),
      "Brain Gym® is a movement-based program that activates neural pathways supporting learning, attention, coordination, and emotional regulation. As a Certified Brain Gym Instructor & Practitioner, Dr. Sharuja Sarap integrates specific physical activities that prepare the body-brain system for focused work.",
      "The principle is straightforward: specific movements integrate left and right brain hemispheres, improve eye tracking, enhance midline crossing, and build the neurological foundations essential for reading, writing, and classroom participation.",
    ],
    signsYourChildMayNeed: [
      "Difficulty sustaining attention during homework or classroom tasks",
      "Reading and writing struggles despite adequate instruction",
      "Poor coordination between brain and body — clumsiness, poor sports performance",
      "Homework sessions ending in frustration and tears",
      "Difficulty with eye tracking, letter reversals, or copying from the board",
      "Restlessness and inability to sit still for age-appropriate periods",
      "Slow processing speed — tasks take much longer than peers",
      "Emotional dysregulation during academic demands",
    ],
    parentGuide: [
      "Practice assigned Brain Gym movements for 5–10 minutes before homework.",
      "Create a consistent, distraction-free study environment.",
      "Use movement breaks during long seated tasks — 2 minutes every 20 minutes.",
      "Share Brain Gym progress with teachers for classroom integration.",
      "Avoid framing movement activities as punishment — they are brain preparation.",
    ],
    researchReferences: [
      { title: "Movement and cognition: The relationship between exercise and cognitive performance", source: "Frontiers in Psychology" },
      { title: "Brain Gym® in educational settings: Practitioner perspectives", source: "Educational Psychology Review" },
      { title: "Physical activity and academic achievement in children", source: "Pediatrics (AAP)" },
    ],
    outcomes: [
      "Improved classroom focus and homework completion",
      "Better reading fluency and writing readiness",
      "Enhanced coordination and body awareness",
      "Practical home movement routines for daily use",
      "Reduced homework frustration for child and parents",
      "Increased learning confidence and motivation",
    ],
    whenToSeekHelp: "Seek Brain Gym support when attention or learning difficulties are affecting school performance, especially in primary school years when academic demands increase significantly.",
  },
  {
    slug: "handwriting-training",
    overview: [
      ...sharedOverview("Handwriting Training"),
      "Handwriting is one of the most complex skills children develop — requiring simultaneous coordination of visual perception, fine motor control, sensory processing, postural stability, and cognitive planning. When any system is underdeveloped, handwriting suffers regardless of practice effort.",
      "Dr. Sharuja Sarap is Handwriting Without Tears® (HWT) certified and uses multisensory techniques — wood pieces for letter building, wet-dry-try on chalkboards, and structured progression — to teach formation systematically rather than through repetitive copying.",
    ],
    signsYourChildMayNeed: [
      "Illegible handwriting beyond age 7–8 despite practice",
      "Painfully slow writing speed affecting exam and homework completion",
      "Active avoidance of writing tasks — tears, refusal, meltdowns",
      "Awkward or immature pencil grip causing hand fatigue",
      "Letter reversals persisting beyond age 7–8",
      "Difficulty staying on lines or sizing letters consistently",
      "Writing quality deteriorates as task length increases",
      "Teachers reporting handwriting as a barrier to academic progress",
    ],
    parentGuide: [
      "Do not force extended writing practice — address underlying motor issues first.",
      "Ensure proper desk and chair height for ergonomic writing posture.",
      "Use recommended pencil grips and writing tools as advised by the therapist.",
      "Practice HWT home activities for 10 minutes daily rather than long sessions.",
      "Communicate with teachers about accommodations during improvement phase.",
    ],
    researchReferences: [
      { title: "Handwriting Without Tears: Efficacy for legibility and fluency", source: "Handwriting Without Tears Research Foundation" },
      { title: "Fine motor skills and handwriting performance in school-age children", source: "American Journal of Occupational Therapy" },
      { title: "Visual-motor integration and handwriting legibility", source: "Developmental Neuropsychology" },
    ],
    outcomes: [
      "Legible, fluent handwriting for school success",
      "Improved pencil grip and hand strength",
      "Faster writing speed for exams and homework",
      "Reduced writing-related anxiety and avoidance",
      "Greater academic confidence and classroom participation",
      "Practical strategies teachers can implement",
    ],
    whenToSeekHelp: "Seek professional handwriting support when writing remains illegible after age 7–8, when your child avoids writing tasks, or when teachers identify handwriting as limiting academic progress.",
  },
];

function generateGenericDepth(slug: string, title: string): ServiceDepthContent {
  return {
    slug,
    overview: sharedOverview(title),
    signsYourChildMayNeed: [
      `Developmental or functional challenges related to ${title.toLowerCase()} affecting daily participation`,
      "Difficulty keeping pace with same-age peers in relevant skill areas",
      "Frustration, avoidance, or meltdowns during related activities",
      "Teacher or pediatrician recommendations for specialized support",
      "Previous therapy showing partial progress needing specialized approach",
    ],
    parentGuide: [
      "Document specific challenges and triggers before your consultation.",
      "Maintain consistent routines and practice recommended home activities.",
      "Communicate openly with Dr. Sharuja Sarap about progress and concerns.",
      "Celebrate incremental improvements — specialized therapy progress is often gradual.",
    ],
    researchReferences: [
      { title: "Pediatric occupational therapy: Evidence-based practice", source: "American Occupational Therapy Association" },
      { title: "Individualized intervention for developmental challenges", source: "Developmental Medicine & Child Neurology" },
    ],
    outcomes: [
      "Improved functional skills in targeted areas",
      "Greater confidence and participation in daily activities",
      "Practical home and school strategies for families",
      "Measurable progress tracked through regular goal reviews",
    ],
    whenToSeekHelp: `Consult Dr. Sharuja Sarap if ${title.toLowerCase()}-related challenges are affecting your child's daily participation, school performance, or family wellbeing.`,
  };
}

const additionalSlugs = [
  { slug: "rmti", title: "RMTI (Rhythmic Movement Training Integration)" },
  { slug: "opt", title: "Oral Placement Therapy (OPT)" },
  { slug: "piastm", title: "PIASTM (Pediatric Instrument Assisted Soft Tissue Mobilization)" },
  { slug: "kinesio-taping", title: "Kinesio Taping" },
  { slug: "mnri", title: "MNRI (Masgutova Neurosensorimotor Reflex Integration)" },
  { slug: "kdct", title: "KDCT (Kinesio Dry Cupping Therapy)" },
];

additionalSlugs.forEach(({ slug, title }) => {
  servicesDepthContent.push(generateGenericDepth(slug, title));
});

export function getServiceDepthContent(slug: string): ServiceDepthContent | undefined {
  return servicesDepthContent.find((s) => s.slug === slug);
}
