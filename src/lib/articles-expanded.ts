import type { Article } from "./articles";

type TopicSeed = {
  category: string;
  topic: string;
  keywords: string[];
};

const topicSeeds: TopicSeed[] = [
  { category: "Autism", topic: "autism spectrum disorder", keywords: ["autism Mumbai", "ASD parent guide", "autism OT Kandivali"] },
  { category: "Autism", topic: "autism and sensory processing", keywords: ["autism sensory", "ASD sensory overload", "sensory autism Mumbai"] },
  { category: "Autism", topic: "autism and daily routines", keywords: ["autism routines", "ASD self-care", "autism independence"] },
  { category: "Autism", topic: "autism and social participation", keywords: ["autism social skills", "ASD play therapy", "autism friendship"] },
  { category: "Autism", topic: "autism and school readiness", keywords: ["autism school Mumbai", "ASD classroom", "autism learning"] },
  { category: "Autism", topic: "autism and feeding challenges", keywords: ["autism picky eating", "ASD feeding therapy", "autism oral motor"] },
  { category: "Autism", topic: "autism and sleep difficulties", keywords: ["autism sleep", "ASD bedtime routine", "autism regulation"] },
  { category: "Autism", topic: "autism and meltdowns", keywords: ["autism meltdowns", "ASD emotional regulation", "autism calming strategies"] },
  { category: "Autism", topic: "autism and fine motor skills", keywords: ["autism handwriting", "ASD pencil grip", "autism motor skills"] },
  { category: "Autism", topic: "early signs of autism", keywords: ["autism signs children", "early autism Mumbai", "ASD red flags"] },
  { category: "ADHD", topic: "ADHD and attention", keywords: ["ADHD attention Mumbai", "child focus therapy", "ADHD OT Kandivali"] },
  { category: "ADHD", topic: "ADHD and homework struggles", keywords: ["ADHD homework", "child focus homework", "ADHD school Mumbai"] },
  { category: "ADHD", topic: "ADHD and impulse control", keywords: ["ADHD impulse", "child self-control", "ADHD behavior therapy"] },
  { category: "ADHD", topic: "ADHD and executive function", keywords: ["ADHD executive function", "planning skills children", "ADHD organization"] },
  { category: "ADHD", topic: "ADHD and movement breaks", keywords: ["ADHD movement therapy", "Brain Gym ADHD", "active learning ADHD"] },
  { category: "ADHD", topic: "ADHD and emotional regulation", keywords: ["ADHD emotions", "child frustration ADHD", "ADHD meltdowns"] },
  { category: "ADHD", topic: "ADHD and classroom participation", keywords: ["ADHD classroom Mumbai", "school attention", "ADHD teacher strategies"] },
  { category: "ADHD", topic: "ADHD and sleep", keywords: ["ADHD sleep children", "restless child ADHD", "ADHD bedtime"] },
  { category: "ADHD", topic: "ADHD without medication", keywords: ["ADHD therapy alternatives", "OT for ADHD", "non-medical ADHD support"] },
  { category: "ADHD", topic: "when to seek help for ADHD", keywords: ["ADHD assessment Mumbai", "ADHD signs child", "ADHD consultation"] },
  { category: "Sensory Processing", topic: "sensory processing disorder", keywords: ["SPD Mumbai", "sensory processing children", "sensory OT Kandivali"] },
  { category: "Sensory Processing", topic: "sensory seeking behaviors", keywords: ["sensory seeking child", "crashing jumping child", "sensory input needs"] },
  { category: "Sensory Processing", topic: "sensory avoiding behaviors", keywords: ["sensory avoiding", "texture sensitivity", "sound sensitivity child"] },
  { category: "Sensory Processing", topic: "sensory diets at home", keywords: ["sensory diet", "home sensory activities", "sensory regulation home"] },
  { category: "Sensory Processing", topic: "sensory overload in public", keywords: ["mall meltdown child", "sensory overload Mumbai", "public sensory strategies"] },
  { category: "Sensory Processing", topic: "proprioception and children", keywords: ["proprioception child", "body awareness therapy", "heavy work activities"] },
  { category: "Sensory Processing", topic: "vestibular processing", keywords: ["vestibular child", "balance therapy", "movement sensitivity"] },
  { category: "Sensory Processing", topic: "tactile sensitivity", keywords: ["clothing tags child", "texture aversion", "tactile defensiveness"] },
  { category: "Sensory Processing", topic: "auditory sensitivity", keywords: ["loud sounds child", "auditory processing", "noise sensitivity"] },
  { category: "Sensory Processing", topic: "sensory integration therapy", keywords: ["Ayres sensory integration", "sensory gym Mumbai", "SI therapy children"] },
  { category: "School Readiness", topic: "school readiness skills", keywords: ["school readiness Mumbai", "preschool readiness", "kindergarten readiness"] },
  { category: "School Readiness", topic: "pre-writing skills", keywords: ["pre-writing children", "pencil readiness", "writing preparation"] },
  { category: "School Readiness", topic: "sitting tolerance in class", keywords: ["sitting still child", "classroom attention", "desk posture child"] },
  { category: "School Readiness", topic: "transition skills for school", keywords: ["school transitions", "morning routine child", "classroom transitions"] },
  { category: "School Readiness", topic: "self-care for school", keywords: ["dressing independence", "school self-care", "toileting readiness"] },
  { category: "School Readiness", topic: "social skills for school", keywords: ["school social skills", "making friends child", "playground skills"] },
  { category: "School Readiness", topic: "backpack and organization", keywords: ["school organization child", "backpack skills", "executive function school"] },
  { category: "School Readiness", topic: "separation anxiety and school", keywords: ["school anxiety child", "separation anxiety", "school drop-off"] },
  { category: "School Readiness", topic: "Grade 1 readiness checklist", keywords: ["Grade 1 readiness", "first grade skills", "school checklist Mumbai"] },
  { category: "School Readiness", topic: "when to delay school entry", keywords: ["school delay child", "developmental readiness", "school age decision"] },
  { category: "Emotional Regulation", topic: "emotional regulation in children", keywords: ["emotional regulation child", "self-regulation Mumbai", "child emotions therapy"] },
  { category: "Emotional Regulation", topic: "managing child meltdowns", keywords: ["child meltdowns", "tantrum strategies", "calming child Mumbai"] },
  { category: "Emotional Regulation", topic: "co-regulation for parents", keywords: ["co-regulation", "parent calming child", "emotional connection"] },
  { category: "Emotional Regulation", topic: "anxiety in children", keywords: ["child anxiety Mumbai", "anxiety OT", "worried child therapy"] },
  { category: "Emotional Regulation", topic: "frustration tolerance", keywords: ["frustration child", "perseverance skills", "giving up easily"] },
  { category: "Emotional Regulation", topic: "emotional vocabulary", keywords: ["naming emotions child", "feelings identification", "emotional literacy"] },
  { category: "Emotional Regulation", topic: "breathing and calming techniques", keywords: ["child breathing exercises", "calming techniques", "relaxation child"] },
  { category: "Emotional Regulation", topic: "transitions and emotional outbursts", keywords: ["transition meltdowns", "change difficulty child", "routine changes"] },
  { category: "Emotional Regulation", topic: "building resilience in children", keywords: ["child resilience", "coping skills", "bounce back child"] },
  { category: "Emotional Regulation", topic: "when emotions affect learning", keywords: ["emotions learning", "anxiety school performance", "regulation classroom"] },
  { category: "Fine Motor Development", topic: "fine motor milestones", keywords: ["fine motor milestones", "hand development child", "fine motor Mumbai"] },
  { category: "Fine Motor Development", topic: "pencil grip development", keywords: ["pencil grip child", "tripod grasp", "writing grip therapy"] },
  { category: "Fine Motor Development", topic: "scissor skills", keywords: ["scissor skills child", "cutting practice", "fine motor scissors"] },
  { category: "Fine Motor Development", topic: "buttoning and dressing skills", keywords: ["buttoning child", "dressing skills OT", "fine motor dressing"] },
  { category: "Fine Motor Development", topic: "hand strength activities", keywords: ["hand strength child", "grip strength activities", "fine motor exercises"] },
  { category: "Fine Motor Development", topic: "beading and threading", keywords: ["beading activities", "threading fine motor", "manipulation skills"] },
  { category: "Fine Motor Development", topic: "playdough and tactile play", keywords: ["playdough fine motor", "tactile play therapy", "hand dexterity"] },
  { category: "Fine Motor Development", topic: "visual-motor integration", keywords: ["visual motor child", "eye-hand coordination", "copying shapes"] },
  { category: "Fine Motor Development", topic: "bilateral coordination", keywords: ["bilateral coordination", "two-hand skills", "using both hands"] },
  { category: "Fine Motor Development", topic: "when fine motor delays matter", keywords: ["fine motor delay", "handwriting delay", "fine motor assessment"] },
  { category: "Handwriting", topic: "handwriting development stages", keywords: ["handwriting stages", "writing development child", "HWT Mumbai"] },
  { category: "Handwriting", topic: "letter reversals", keywords: ["letter reversals child", "b and d confusion", "mirror writing"] },
  { category: "Handwriting", topic: "handwriting speed", keywords: ["slow handwriting", "writing speed child", "timed writing"] },
  { category: "Handwriting", topic: "handwriting legibility", keywords: ["messy handwriting", "illegible writing", "handwriting clarity"] },
  { category: "Handwriting", topic: "handwriting and posture", keywords: ["writing posture", "desk setup child", "handwriting ergonomics"] },
  { category: "Handwriting", topic: "Handwriting Without Tears approach", keywords: ["HWT program", "Handwriting Without Tears Mumbai", "multisensory writing"] },
  { category: "Handwriting", topic: "handwriting avoidance", keywords: ["refuses to write", "writing anxiety child", "homework writing struggles"] },
  { category: "Handwriting", topic: "cursive vs print", keywords: ["cursive writing child", "print handwriting", "writing style school"] },
  { category: "Handwriting", topic: "handwriting for exams", keywords: ["exam handwriting", "board exam writing", "writing endurance"] },
  { category: "Handwriting", topic: "left-handed writing", keywords: ["left-handed child", "left hand writing", "lefty pencil grip"] },
  { category: "Learning Difficulties", topic: "learning difficulties overview", keywords: ["learning difficulties Mumbai", "child learning support", "learning OT Kandivali"] },
  { category: "Learning Difficulties", topic: "reading readiness", keywords: ["reading readiness child", "pre-reading skills", "literacy development"] },
  { category: "Learning Difficulties", topic: "visual processing and learning", keywords: ["visual processing child", "visual perception learning", "copying from board"] },
  { category: "Learning Difficulties", topic: "auditory processing and learning", keywords: ["auditory processing child", "following instructions", "listening skills"] },
  { category: "Learning Difficulties", topic: "working memory in children", keywords: ["working memory child", "remembering instructions", "memory strategies"] },
  { category: "Learning Difficulties", topic: "processing speed", keywords: ["slow processing child", "processing speed learning", "homework takes forever"] },
  { category: "Learning Difficulties", topic: "learning and motor skills", keywords: ["motor learning", "movement and learning", "body brain connection"] },
  { category: "Learning Difficulties", topic: "homework strategies", keywords: ["homework help child", "study strategies Mumbai", "learning at home"] },
  { category: "Learning Difficulties", topic: "when to seek learning support", keywords: ["learning assessment child", "learning therapy Mumbai", "school struggles help"] },
  { category: "Learning Difficulties", topic: "dysgraphia and writing", keywords: ["dysgraphia child", "writing learning disorder", "dysgraphia therapy"] },
  { category: "Executive Functioning", topic: "executive function basics", keywords: ["executive function child", "EF skills Mumbai", "planning child"] },
  { category: "Executive Functioning", topic: "planning and organization", keywords: ["child organization", "planning skills", "messy desk child"] },
  { category: "Executive Functioning", topic: "task initiation", keywords: ["procrastination child", "starting tasks", "task initiation ADHD"] },
  { category: "Executive Functioning", topic: "time management for children", keywords: ["time management child", "morning routine slow", "time awareness"] },
  { category: "Executive Functioning", topic: "working memory strategies", keywords: ["memory strategies child", "remembering homework", "visual schedules"] },
  { category: "Executive Functioning", topic: "flexible thinking", keywords: ["rigid thinking child", "flexibility skills", "problem solving child"] },
  { category: "Executive Functioning", topic: "self-monitoring", keywords: ["self-awareness child", "checking work", "self-monitoring skills"] },
  { category: "Executive Functioning", topic: "goal setting for children", keywords: ["child goals therapy", "motivation child", "achievement planning"] },
  { category: "Executive Functioning", topic: "executive function and OT", keywords: ["OT executive function", "therapy planning skills", "EF intervention"] },
  { category: "Executive Functioning", topic: "visual schedules and routines", keywords: ["visual schedule child", "routine charts", "visual supports home"] },
  { category: "Parenting Support", topic: "parenting a child with special needs", keywords: ["special needs parenting Mumbai", "parent support OT", "family therapy child"] },
  { category: "Parenting Support", topic: "understanding therapy goals", keywords: ["therapy goals child", "OT progress parents", "what to expect therapy"] },
  { category: "Parenting Support", topic: "home program consistency", keywords: ["home therapy activities", "carryover therapy home", "parent homework OT"] },
  { category: "Parenting Support", topic: "communicating with schools", keywords: ["school OT coordination", "teacher recommendations", "IEP support Mumbai"] },
  { category: "Parenting Support", topic: "sibling support", keywords: ["sibling special needs", "family balance", "sibling jealousy therapy"] },
  { category: "Parenting Support", topic: "managing parent burnout", keywords: ["parent burnout special needs", "self-care parents", "parent stress Mumbai"] },
  { category: "Parenting Support", topic: "choosing the right therapist", keywords: ["choose OT Mumbai", "pediatric therapist Kandivali", "therapy clinic selection"] },
  { category: "Parenting Support", topic: "celebrating small wins", keywords: ["therapy progress celebrate", "child milestones", "positive parenting therapy"] },
  { category: "Parenting Support", topic: "screen time and development", keywords: ["screen time child", "digital balance", "screen impact development"] },
  { category: "Parenting Support", topic: "building daily routines", keywords: ["child daily routine", "morning evening routine", "structure home child"] },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildParagraphs(topic: string, category: string): string[] {
  const titleCase = topic.replace(/\b\w/g, (c) => c.toUpperCase());
  return [
    `Understanding ${topic} is one of the most common concerns parents bring to Thrive with sharuja in Kandivali West, Mumbai. Dr. Sharuja Sarap has supported hundreds of families navigating ${category.toLowerCase()}-related challenges over 18+ years of pediatric occupational therapy practice. This guide explains what parents need to know — in clear, compassionate language — and when professional support can make a meaningful difference.`,
    `${titleCase} affects how children participate in daily life — at home, in school, and in the community. It is not a reflection of parenting failure or a child's lack of effort. Many underlying factors involve sensory processing, motor development, attention, or nervous system regulation — all areas where evidence-based occupational therapy can help.`,
    `At Thrive with sharuja, assessment begins with understanding your child's unique profile through play-based observation, parent interview, and standardized tools where appropriate. Dr. Sharuja Sarap creates individualized goals that respect your child's strengths while building skills for meaningful participation. Therapy is child-led, play-based, and designed to feel engaging — not clinical or punitive.`,
    `Parents are active partners in every step. You receive practical home strategies, school coordination support when needed, and honest progress updates. Our philosophy — Belonging Without Boundaries — means we celebrate who your child is while building the foundations for greater independence and confidence.`,
    `If ${topic} is affecting your family's daily life, early consultation is recommended. Many families notice meaningful progress within 8–12 weeks of consistent therapy combined with home carryover. Call 9820525197, WhatsApp us, or book an appointment online at drsharujasarap.vercel.app. Dr. Sharuja Sarap welcomes children from birth to 14 years at our Kandivali West clinic, Monday to Saturday, 9 AM – 5 PM.`,
  ];
}

export function generateExpandedArticles(): Article[] {
  const baseDate = new Date("2025-06-01");

  return topicSeeds.map((seed, index) => {
    const slug = slugify(`guide-${seed.topic}`);
    const title = `${seed.topic.replace(/\b\w/g, (c) => c.toUpperCase())}: A Parent Guide`;
    const published = new Date(baseDate);
    published.setDate(published.getDate() + index * 2);

    return {
      slug,
      title,
      description: `Expert parent guide on ${seed.topic} from Dr. Sharuja Sarap — pediatric occupational therapist in Kandivali West, Mumbai.`,
      excerpt: `Evidence-informed guidance on ${seed.topic} for Mumbai parents — what to watch for, how therapy helps, and when to seek support.`,
      category: seed.category,
      publishedAt: published.toISOString().slice(0, 10),
      readTime: "5 min",
      keywords: seed.keywords,
      content: buildParagraphs(seed.topic, seed.category),
    };
  });
}
