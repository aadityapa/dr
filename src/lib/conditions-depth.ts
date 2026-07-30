export type ConditionDepthContent = {
  slug: string;
  parentExplanation: string[];
  whenToSeeDoctor: string[];
  successOutcomes: string[];
  internalLinks: { label: string; href: string }[];
};

function baseExplanation(condition: string): string[] {
  return [
    `If you're reading about ${condition}, you're probably carrying worry you haven't said out loud yet. That's okay. Dr. Sharuja has walked alongside hundreds of Mumbai families who felt exactly the same.`,
  ];
}

export const conditionsDepthContent: ConditionDepthContent[] = [
  {
    slug: "autism-spectrum-disorder",
    parentExplanation: [
      ...baseExplanation("Autism Spectrum Disorder (ASD)"),
      "Autism is a neurodevelopmental difference — not an illness to cure. Many children with autism experience the world intensely through their senses, communicate and connect in unique ways, and develop deep passions that reflect their individual strengths. OT supports the skills for navigating a world that is not always designed for neurodivergent children.",
      "Common areas where OT makes a difference for children with autism include sensory regulation (reducing overwhelm in busy environments), daily living skills (dressing, feeding, grooming), fine motor skills (handwriting, cutting, buttoning), gross motor coordination (playground participation, sports), and emotional regulation (managing transitions and unexpected changes).",
    ],
    whenToSeeDoctor: [
      "Sensory sensitivities causing meltdowns in everyday environments",
      "Motor delays or clumsiness compared to peers",
      "Difficulty with self-care independence for age",
      "Avoidance of social play or group activities",
      "Sleep disruption linked to sensory dysregulation",
      "Pediatrician or teacher raising developmental concerns",
      "Regression in previously acquired skills",
    ],
    successOutcomes: [
      "Reduced meltdown frequency and intensity",
      "Greater tolerance of malls, classrooms, and social gatherings",
      "Improved independence in daily routines",
      "Stronger motor skills for play and school tasks",
      "Parents equipped with practical sensory strategies",
      "Child builds confidence in their own abilities",
    ],
    internalLinks: [
      { label: "Occupational Therapy", href: "/services/occupational-therapy" },
      { label: "Brain Gym", href: "/services/brain-gym" },
      { label: "Handwriting Training", href: "/services/handwriting-training" },
      { label: "Sensory Screening", href: "/screening" },
      { label: "Therapy Outcomes", href: "/therapy-outcomes" },
    ],
  },
  {
    slug: "adhd",
    parentExplanation: [
      ...baseExplanation("ADHD (Attention Deficit Hyperactivity Disorder)"),
      "ADHD affects a child's ability to sustain focus, regulate impulses, and manage executive functions — the mental skills that organize, plan, and execute tasks. These are not willpower issues. The ADHD brain processes stimulation differently, and strategies must work with — not against — that neurology.",
      "Dr. Sharuja Sarap integrates Brain Gym® movement strategies with sensory-integrative OT to help children with ADHD channel energy productively, build attention stamina, and develop self-management skills. Movement before homework, sensory breaks during seated tasks, and environmental modifications often transform the homework and classroom experience.",
    ],
    whenToSeeDoctor: [
      "Attention difficulties persisting across home and school settings",
      "Homework taking significantly longer than peers require",
      "Impulsive behavior affecting safety or relationships",
      "Teacher reporting consistent focus challenges",
      "Emotional dysregulation during academic demands",
      "Difficulty with organization, planning, or time management",
    ],
    successOutcomes: [
      "Improved homework completion with less frustration",
      "Better classroom focus and participation",
      "Practical movement routines for home and school",
      "Enhanced emotional regulation during challenging tasks",
      "Increased academic confidence and self-esteem",
    ],
    internalLinks: [
      { label: "Brain Gym", href: "/services/brain-gym" },
      { label: "Occupational Therapy", href: "/services/occupational-therapy" },
      { label: "Handwriting Training", href: "/services/handwriting-training" },
      { label: "Free Screening", href: "/screening" },
    ],
  },
];

function genericConditionDepth(slug: string, condition: string): ConditionDepthContent {
  return {
    slug,
    parentExplanation: baseExplanation(condition),
    whenToSeeDoctor: [
      `Functional challenges related to ${condition.toLowerCase()} affecting daily participation`,
      "Skills falling significantly behind same-age peers",
      "Teacher or pediatrician recommending professional evaluation",
      "Family daily routines significantly disrupted",
      "Child showing frustration, avoidance, or low self-esteem",
    ],
    successOutcomes: [
      "Improved functional skills in targeted areas",
      "Greater participation in home, school, and community",
      "Reduced family stress through practical strategies",
      "Child builds confidence and independence",
    ],
    internalLinks: [
      { label: "Occupational Therapy", href: "/services/occupational-therapy" },
      { label: "Expertise & Approaches", href: "/expertise" },
      { label: "Book Consultation", href: "/appointment" },
      { label: "Parent Resources", href: "/resources" },
    ],
  };
}

const additionalConditions = [
  { slug: "cerebral-palsy", name: "Cerebral Palsy" },
  { slug: "developmental-delay", name: "Developmental Delay" },
  { slug: "sensory-processing-difficulties", name: "Sensory Processing Difficulties" },
  { slug: "learning-difficulties", name: "Learning Difficulties" },
  { slug: "motor-coordination-challenges", name: "Motor Coordination Challenges" },
  { slug: "handwriting-difficulties", name: "Handwriting Difficulties" },
  { slug: "attention-difficulties", name: "Attention Difficulties" },
  { slug: "primitive-reflex-retention", name: "Primitive Reflex Retention" },
  { slug: "emotional-regulation-difficulties", name: "Emotional Regulation Difficulties" },
  { slug: "school-readiness-concerns", name: "School Readiness Concerns" },
  { slug: "down-syndrome", name: "Down Syndrome" },
  { slug: "feeding-oral-motor-challenges", name: "Feeding & Oral Motor Challenges" },
  { slug: "social-participation-challenges", name: "Social Participation Challenges" },
  { slug: "fine-motor-challenges", name: "Fine Motor Challenges" },
  { slug: "gross-motor-difficulties", name: "Gross Motor Difficulties" },
];

additionalConditions.forEach(({ slug, name }) => {
  if (!conditionsDepthContent.find((c) => c.slug === slug)) {
    conditionsDepthContent.push(genericConditionDepth(slug, name));
  }
});

export function getConditionDepthContent(slug: string): ConditionDepthContent | undefined {
  return conditionsDepthContent.find((c) => c.slug === slug);
}
