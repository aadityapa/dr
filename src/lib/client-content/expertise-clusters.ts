export type ExpertiseCluster = {
  slug: string;
  title: string;
  icon: string;
  parentFriendlyExplanation: string;
  whatParentsMayNotice: string[];
  howTherapyHelps: string[];
  relatedCertifications: string[];
  learnMoreHref: string;
};

export const expertiseEcosystemCopy = {
  title: "Expertise Ecosystem",
  subheading:
    "Every child is unique. We use a combination of evidence-based approaches to support participation, confidence, independence, and everyday success.",
} as const;

export const expertiseClusters: ExpertiseCluster[] = [
  {
    slug: "movement-motor-development",
    title: "Movement & Motor Development",
    icon: "Hand",
    parentFriendlyExplanation:
      "From crawling and climbing to sitting at a desk and joining playground games — we help children build the strength, coordination, and body awareness that daily life quietly expects. Play-led, never pushy.",
    whatParentsMayNotice: [
      "Clumsiness or hesitation during sports and playground play",
      "Quick fatigue during fine motor tasks like writing or cutting",
      "Slumped posture that doesn't improve with reminders",
      "Avoidance of physical activities peers enjoy",
      "Tension in shoulders, neck, or hands during homework",
    ],
    howTherapyHelps: [
      "Play-based strengthening for gross and fine motor skills",
      "Postural support through movement, taping, and soft tissue work",
      "Brain Gym® routines that prepare the body for seated learning",
      "Gentle hands-on techniques when tightness blocks progress",
      "Goals that carry from clinic to school, sports, and home",
    ],
    relatedCertifications: [
      "Brain Gym",
      "RMTI",
      "PIASTM",
      "Kinesio Taping",
      "KDCT",
      "Occupational Therapy",
    ],
    learnMoreHref: "/expertise/looking-beyond-a-diagnosis",
  },
  {
    slug: "sensory-processing-regulation",
    title: "Sensory Processing & Regulation",
    icon: "Sparkles",
    parentFriendlyExplanation:
      "When the world feels too loud, too scratchy, or too much — we help your child's nervous system find calm. Sensory integration isn't about fixing behaviour. It's about understanding what the body needs to feel safe and ready.",
    whatParentsMayNotice: [
      "Meltdowns in malls, classrooms, or birthday parties",
      "Refusal of certain clothes, foods, or haircuts",
      "Constant movement, crashing, or fidgeting",
      "Extreme reactions to sounds, lights, or textures",
      "Exhaustion after social outings or school days",
    ],
    howTherapyHelps: [
      "Safe, guided sensory experiences in our equipped gym",
      "Personalised sensory plans for home and classroom",
      "Self-regulation tools children can use outside clinic",
      "Movement routines that help before difficult tasks",
      "Plain-language guidance so you understand the 'why' behind behaviour",
    ],
    relatedCertifications: ["Occupational Therapy", "Brain Gym"],
    learnMoreHref: "/expertise/sensory-integration",
  },
  {
    slug: "feeding-oral-motor-skills",
    title: "Feeding & Oral Motor Skills",
    icon: "Utensils",
    parentFriendlyExplanation:
      "Picky eating, gagging, or mealtime battles aren't always 'behaviour problems.' Often the mouth needs patient, playful preparation. We go at your child's pace — no forcing, no shame — so family meals can feel less stressful.",
    whatParentsMayNotice: [
      "A child who eats only a handful of familiar foods",
      "Gagging, coughing, or choking on certain textures",
      "Refusal of cups, straws, or chewy foods",
      "Mealtimes that end in tears for everyone",
      "Anxiety around birthday parties, tiffins, or restaurant outings",
    ],
    howTherapyHelps: [
      "Playful oral-motor exercises that build strength and tolerance",
      "Gradual expansion of textures and temperatures",
      "Pressure-free mealtime strategies for the whole family",
      "Coordination with speech therapists when needed",
      "Support woven into broader OT goals when feeding affects the whole day",
    ],
    relatedCertifications: ["OPT"],
    learnMoreHref: "/expertise/oral-placement-therapy",
  },
  {
    slug: "handwriting-learning-readiness",
    title: "Handwriting & Learning Readiness",
    icon: "PenLine",
    parentFriendlyExplanation:
      "Messy handwriting isn't laziness. Often it's tired hands, weak grip, or a body that isn't ready to sit and write. We build foundations step by step — through play, not endless copying — so school tasks feel more possible.",
    whatParentsMayNotice: [
      "Refusal of written homework or journal tasks",
      "Complaints of sore hands or tired arms",
      "Writing so messy that teachers can't read it",
      "Homework that takes far longer than it should",
      "A bright child whose marks don't reflect what they know",
    ],
    howTherapyHelps: [
      "Handwriting Without Tears® — multisensory, step-by-step letter learning",
      "Brain Gym® and Double Doodle Play® warm-ups before seated work",
      "Grip, posture, and visual-motor support together — not in isolation",
      "Practical home routines that fit busy Mumbai evenings",
      "School collaboration when you're ready to share strategies with teachers",
    ],
    relatedCertifications: ["HWT", "Brain Gym"],
    learnMoreHref: "/expertise/handwriting-without-tears",
  },
  {
    slug: "aquatic-therapy",
    title: "Aquatic Therapy",
    icon: "Waves",
    parentFriendlyExplanation:
      "In warm water, gravity softens and movement often feels possible for the first time. Children who avoid playgrounds or tire quickly on land frequently shine in the pool — supervised, playful, and always therapeutic.",
    whatParentsMayNotice: [
      "Avoidance of sports, climbing, or playground play",
      "Low muscle tone or quick fatigue during physical tasks",
      "A child who comes alive near water but struggles on land",
      "Balance and coordination that don't match their age",
      "Fear or hesitation around physical activities at school",
    ],
    howTherapyHelps: [
      "Strength and endurance building with less joint stress",
      "Balance and body awareness through buoyancy",
      "Calming sensory input for dysregulated nervous systems",
      "Confidence that carries over to land-based activities",
      "Fully supervised sessions — no swimming ability required",
    ],
    relatedCertifications: ["Aquatic Therapy"],
    learnMoreHref: "/expertise/aquatic-therapy",
  },
  {
    slug: "reflex-integration",
    title: "Reflex Integration",
    icon: "Brain",
    parentFriendlyExplanation:
      "Sometimes the body holds onto early reflex patterns that make sitting, writing, and calming down harder than they need to be. RMTI® and MNRI® help rebuild those foundations — gently, respectfully, and always at your child's pace.",
    whatParentsMayNotice: [
      "A child who slumps, fidgets, or tires quickly during seated work",
      "Clumsiness that doesn't match their intelligence",
      "Big emotional reactions to small changes",
      "Difficulty with reading, writing, or copying from the board",
      "A sense that something 'foundational' still needs support",
    ],
    howTherapyHelps: [
      "Gentle rhythmic movement to support nervous system organisation",
      "Primitive reflex integration for better posture and coordination",
      "Calmer transitions and improved sitting tolerance",
      "Foundations for attention, reading, and writing readiness",
      "Simple home practice — often five to ten minutes a day",
    ],
    relatedCertifications: ["RMTI", "MNRI"],
    learnMoreHref: "/expertise/mnri",
  },
];

export function getExpertiseCluster(slug: string): ExpertiseCluster | undefined {
  return expertiseClusters.find((c) => c.slug === slug);
}
