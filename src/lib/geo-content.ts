import { siteConfig } from "@/lib/site-data";

export const localSeoKeywords = [
  "Pediatric Occupational Therapist Mumbai",
  "OT Kandivali",
  "Brain Gym® Mumbai",
  "Aquatic Therapy Mumbai",
  "Sensory Integration Mumbai",
  "Autism Support Mumbai",
  "ADHD Support Mumbai",
] as const;

export const geoEntitySnippet = {
  name: siteConfig.name,
  doctor: siteConfig.doctorName,
  locality: "Kandivali West",
  city: "Mumbai",
  region: "Maharashtra",
  fullAddress: siteConfig.address.full,
  phone: siteConfig.phoneDisplay,
  description: siteConfig.description,
} as const;

export type GeoFaq = { q: string; a: string };

export function buildConditionFaqs(conditionTitle: string): GeoFaq[] {
  return [
    {
      q: `What is ${conditionTitle}?`,
      a: `${conditionTitle} affects how children experience daily life — routines, school, play, and relationships. At ${siteConfig.name} in Kandivali West, Mumbai, we help parents understand what they're seeing and what thoughtful support can look like for their child.`,
    },
    {
      q: `How can occupational therapy help a child with ${conditionTitle}?`,
      a: `Pediatric OT focuses on the everyday skills behind participation — sensory regulation, motor skills, self-care, handwriting, and emotional recovery. We use play-based, family-centred sessions tailored to your child's strengths and your family's priorities.`,
    },
    {
      q: `When should we seek support for ${conditionTitle}?`,
      a: `If daily routines feel harder than they should — mornings, homework, mealtimes, or social outings — that's enough to start a conversation. You don't need a perfect diagnosis. Many Kandivali and Mumbai families reach out with a gut feeling before any formal label.`,
    },
    {
      q: `What happens after we contact ${siteConfig.doctorName}?`,
      a: `We begin with a warm first visit: listening to your story, gentle observation, and plain-language explanation of what we notice. Together we agree on goals that matter at home and school, then build a plan — often combining sensory, movement, and skill-building approaches.`,
    },
  ];
}

export function buildExpertiseFaqs(
  areaTitle: string,
  options?: { tagline?: string; slug?: string },
): GeoFaq[] {
  const answerFirst =
    options?.tagline ??
    `${areaTitle} is one of the evidence-based approaches Dr. Sharuja Sarap uses at her pediatric OT clinic in Kandivali West, Mumbai.`;

  const helpQuestion =
    options?.slug === "sensory-integration"
      ? "How can Sensory Integration help my child?"
      : `How can ${areaTitle} help my child?`;

  return [
    {
      q: `What is ${areaTitle}?`,
      a: `${answerFirst} It supports children and families with practical, play-led strategies for daily life — not programmes on a shelf.`,
    },
    {
      q: helpQuestion,
      a: `We match ${areaTitle} techniques to what your child actually needs — building skills for participation, confidence, and independence at home and school. Parents leave with something practical to try, not just clinic exercises.`,
    },
    {
      q: `When should we consider ${areaTitle} for our child?`,
      a: `If something in daily life feels harder than it should — focus, movement, feeding, writing, or regulation — a consultation can help you understand whether this approach fits. Many families in Mumbai start without a formal diagnosis.`,
    },
  ];
}

export function buildClusterFaqs(clusterTitle: string): GeoFaq[] {
  return buildExpertiseFaqs(clusterTitle);
}

export function mumbaiMetaSuffix(topic: string): string {
  return `${topic} with ${siteConfig.doctorName} at ${siteConfig.name}, Kandivali West, Mumbai.`;
}
