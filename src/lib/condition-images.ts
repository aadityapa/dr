/**
 * Hero illustration for each condition detail page.
 *
 * Custom, brand-coloured artwork (PNG) built for this site — warm and
 * child-friendly, and honest: no stock or AI-generated photos of children that
 * a parent might mistake for real clinic families.
 */
export type ConditionImage = { src: string; alt: string };

export const conditionImages: Record<string, ConditionImage> = {
  "autism-spectrum-disorder": {
    // social connection & communication play
    src: "/images/conditions/autism-spectrum-disorder.png",
    alt: "Illustration of two children connecting, with a heart in a speech bubble between them",
  },
  adhd: {
    // movement-based attention and impulse work
    src: "/images/conditions/adhd.png",
    alt: "Illustration of an energetic child with motion arcs and a focus target",
  },
  "cerebral-palsy": {
    // supported standing, posture and independence
    src: "/images/conditions/cerebral-palsy.png",
    alt: "Illustration of a therapist supporting a child at parallel walking bars",
  },
  "developmental-delay": {
    // early milestones
    src: "/images/conditions/developmental-delay.png",
    alt: "Illustration of a child climbing growth steps beside a young sprout",
  },
  "sensory-processing-difficulties": {
    // calming vestibular and sensory input
    src: "/images/conditions/sensory-processing-difficulties.png",
    alt: "Illustration of a child resting calmly in a sensory swing with gentle waves",
  },
  "learning-difficulties": {
    // seated one-to-one learning work
    src: "/images/conditions/learning-difficulties.png",
    alt: "Illustration of a child beside a large open book",
  },
  "motor-coordination-challenges": {
    // balance, planning and sequencing movement
    src: "/images/conditions/motor-coordination-challenges.png",
    alt: "Illustration of a child crossing a path of colourful stepping stones",
  },
  "handwriting-difficulties": {
    // hand strength and pencil control
    src: "/images/conditions/handwriting-difficulties.png",
    alt: "Illustration of a child beside lined paper and a large pencil",
  },
  "attention-difficulties": {
    // regulation through movement
    src: "/images/conditions/attention-difficulties.png",
    alt: "Illustration of a focused child inside concentric focus rings",
  },
};

export function getConditionImage(slug: string): ConditionImage | undefined {
  return conditionImages[slug];
}
