export type ExpertiseArea = {
  slug: string;
  title: string;
  tagline: string;
  pillLabel: string;
  icon: string;
  understanding: string;
  whatParentsNoticeIntro?: string;
  whatParentsMayNotice: string[];
  approachSummary?: string[];
  areasCommonlySupported: string[];
  closingLine?: string;
  metaDescription: string;
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "looking-beyond-a-diagnosis",
    title: "Looking Beyond a Diagnosis",
    tagline: "Children are much more than a diagnosis. They are learners, explorers, problem-solvers, family members, friends, and individuals with unique strengths and potential.",
    pillLabel: "Whole Child",
    icon: "HeartHandshake",
    understanding: "That is why our approach focuses on seeing the whole child. We look beyond difficulties to understand how sensory processing, movement, attention, emotions, learning, communication, and everyday experiences work together to influence a child's participation and development.\n\nBy combining different evidence-informed therapeutic approaches, we create individualized intervention programs that reflect each child's unique needs, strengths, and goals. The aim is not simply to improve isolated skills, but to support children in participating more comfortably, confidently, and independently in the activities that matter most to them and their families.\n\nEvery child is unique, and their therapy journey should be too.",
    whatParentsMayNotice: [],
    areasCommonlySupported: [],
    metaDescription: "Pediatric OT in Kandivali that sees the whole child — not just a diagnosis. Family-centred care with Dr. Sharuja Sarap, Mumbai.",
  },
  {
    slug: "brain-gym",
    title: "Brain Gym®",
    tagline: "Learning Through Movement",
    pillLabel: "Brain Gym",
    icon: "Brain",
    understanding: "Children learn best when their bodies, minds, and emotions are working together. Brain Gym® is a movement-based educational approach that uses simple, purposeful activities to support learning readiness, attention, coordination, self-regulation, and overall participation in everyday activities.\n\nMany children experience challenges with focus, organization, emotional regulation, coordination, handwriting, reading, listening, or managing classroom demands. Sometimes these difficulties are not simply related to academic skills—they may also involve how the brain and body work together to process information, organize responses, and engage effectively in learning.\n\nBrain Gym activities are designed to support whole-child development by encouraging better integration of movement, sensory processing, attention, and learning. Through carefully selected movements and activities, children are provided opportunities to improve body awareness, coordination, concentration, confidence, and readiness for learning.",
    whatParentsNoticeIntro: "Parents often seek support when they notice that their child:",
    whatParentsMayNotice: [
      "Finds it difficult to focus or sustain attention",
      "Appears restless or easily distracted",
      "Struggles with handwriting, reading, or classroom tasks",
      "Experiences difficulties with coordination and motor planning",
      "Becomes frustrated during learning activities",
      "Finds it challenging to organize thoughts and complete tasks",
      "Has difficulty managing emotions during everyday situations"
    ],
    approachSummary: [
      "Brain Gym activities are individualized and integrated into therapy in a playful, engaging, and child-friendly manner. The focus is not simply on academic performance, but on helping children participate more comfortably, confidently, and successfully in everyday life."
    ],
    areasCommonlySupported: [
      "Attention and Concentration",
      "Learning Readiness",
      "Coordination and Balance",
      "Motor Planning",
      "Visual-Motor Integration",
      "Handwriting Readiness",
      "Emotional Regulation",
      "Self-Confidence",
      "Listening and Participation Skills",
      "Organization and Learning Skills"
    ],
    closingLine: "Because learning becomes easier when the brain and body work together.",
    metaDescription: "Brain Gym® for children in Mumbai & Kandivali. Movement-based support for focus, learning readiness, and participation with Dr. Sharuja Sarap.",
  },
  {
    slug: "double-doodle-play",
    title: "Double Doodle Play®",
    tagline: "Building Skills Through Creativity, Movement, and Fun",
    pillLabel: "Double Doodle",
    icon: "PenLine",
    understanding: "Double Doodle Play® is a unique, creative approach that encourages children to draw, write, and create using both hands together at the same time. While it may look like a simple art activity, it provides valuable opportunities for the brain and body to work together in new and meaningful ways.\n\nWhen children use both hands simultaneously, they engage both sides of the body while supporting coordination between the left and right hemispheres of the brain. This playful experience can help strengthen the foundational skills required for handwriting, visual-motor integration, coordination, creativity, and self-expression.\n\nMany children who struggle with handwriting, attention, coordination, body awareness, or confidence during written activities may benefit from experiences that encourage bilateral coordination and integrated movement.",
    whatParentsNoticeIntro: "Parents may notice that their child:",
    whatParentsMayNotice: [
      "Avoids drawing, colouring, or writing activities",
      "Finds handwriting tiring or frustrating",
      "Has difficulty coordinating both sides of the body",
      "Struggles with hand-eye coordination",
      "Experiences challenges with pencil control",
      "Finds it difficult to organize ideas on paper",
      "Lacks confidence during classroom writing tasks"
    ],
    approachSummary: [
      "Through guided Double Doodle Play activities, children are encouraged to explore movement, creativity, imagination, and expression in a relaxed and enjoyable environment. There is no pressure to be perfect. Instead, the focus is on participation, exploration, confidence-building, and skill development."
    ],
    areasCommonlySupported: [
      "Improved Bilateral Coordination",
      "Enhanced Hand-Eye Coordination",
      "Better Visual-Motor Integration",
      "Increased Body Awareness",
      "Improved Pencil Control",
      "Pre-Writing and Handwriting Readiness",
      "Greater Creativity and Self-Expression",
      "Improved Focus and Attention",
      "Increased Confidence During Learning Activities",
      "Enjoyment of Drawing and Writing Experiences"
    ],
    closingLine: "Children often learn best when they are moving, creating, exploring, and having fun—and Double Doodle Play® provides opportunities for all these experiences while supporting important developmental skills.",
    metaDescription: "Double Doodle Play® in Kandivali — playful bilateral drawing that supports handwriting and coordination. Pediatric OT with Dr. Sharuja Sarap.",
  },
  {
    slug: "sensory-integration",
    title: "Sensory Integration",
    tagline: "Helping Children Understand, Organize, and Respond to the World Around Them",
    pillLabel: "Sensory Integration",
    icon: "Sparkles",
    understanding: "Every moment of the day, a child's brain receives information from the senses—what they see, hear, touch, taste, smell, and how their body moves and positions itself in space. For most children, the brain automatically organizes this information and helps them respond appropriately. However, for some children, processing sensory information can be more challenging.\n\nSensory Integration is an approach that helps children better process, organize, and respond to sensory information so they can participate more successfully in everyday activities. When sensory processing becomes difficult, it can affect attention, behaviour, emotional regulation, movement, learning, play, self-care skills, and social participation.\n\nChildren may experience sensory challenges in different ways. Some children may be highly sensitive to sounds, touch, movement, or certain environments, while others may constantly seek sensory experiences such as jumping, spinning, crashing, or touching everything around them. Some children may appear clumsy, have difficulty sitting still, struggle with body awareness, or become easily overwhelmed by everyday situations.",
    whatParentsNoticeIntro: "Parents often seek support when they notice that their child:",
    whatParentsMayNotice: [
      "Covers their ears in response to everyday sounds",
      "Avoids certain clothing textures, food textures, or touch",
      "Constantly seeks movement through jumping, climbing, spinning, or crashing",
      "Has difficulty sitting still and attending to tasks",
      "Becomes overwhelmed in crowded, noisy, or busy environments",
      "Experiences frequent meltdowns during transitions or routine activities",
      "Appears clumsy, awkward, or unaware of personal space",
      "Has difficulty with balance, coordination, or motor planning",
      "Struggles with emotional regulation and coping with everyday demands",
      "Finds school, social situations, or community outings challenging"
    ],
    approachSummary: [
      "At our centre, Sensory Integration-based intervention is designed to provide children with meaningful sensory experiences in a safe, supportive, and engaging environment. Through carefully planned activities, children are encouraged to explore movement, develop body awareness, improve self-regulation, strengthen motor skills, and build confidence in everyday situations.",
      "The goal is not to eliminate sensory differences, but to help children better understand their bodies, manage sensory experiences more effectively, and participate more comfortably in the activities that matter most to them."
    ],
    areasCommonlySupported: [
      "Sensory Processing and Sensory Regulation",
      "Attention and Concentration",
      "Emotional Regulation",
      "Motor Planning and Coordination",
      "Balance and Body Awareness",
      "Postural Control",
      "Fine and Gross Motor Development",
      "Self-Care and Daily Living Skills",
      "School Participation and Learning Readiness",
      "Social Participation and Play Skills",
      "Confidence and Independence"
    ],
    closingLine: "When children feel more regulated, comfortable, and connected to their environment, learning, play, relationships, and everyday participation often become more meaningful and enjoyable.",
    metaDescription: "Sensory integration therapy in Mumbai & Kandivali for children who struggle with noise, texture, or overwhelm. Warm OT with Dr. Sharuja Sarap.",
  },
  {
    slug: "rmti",
    title: "Rhythmic Movement Training International® (RMTI)",
    tagline: "Supporting Development Through Foundational Movement",
    pillLabel: "RMTI",
    icon: "Target",
    understanding: "Movement plays an important role in a child's development. Long before children learn to sit, walk, write, or concentrate in school, their bodies develop through a series of natural movement patterns that help build the foundation for learning, coordination, attention, balance, and emotional regulation.\n\nRMTI® (Rhythmic Movement Training International) uses gentle, rhythmic movements designed to support the integration of early developmental movement patterns that may influence a child's ability to learn, focus, move, and participate confidently in everyday activities.\n\nSome children may experience challenges when these foundational movement patterns have not fully developed or integrated. This may impact posture, balance, coordination, attention, body awareness, emotional regulation, and learning readiness.",
    whatParentsNoticeIntro: "Parents may notice that their child:",
    whatParentsMayNotice: [
      "Finds it difficult to sit still for extended periods",
      "Appears clumsy or uncoordinated",
      "Struggles with attention and concentration",
      "Has poor posture or tires easily",
      "Experiences challenges with handwriting",
      "Appears restless or constantly seeks movement",
      "Has difficulty with balance and body awareness",
      "Becomes easily overwhelmed or emotionally reactive"
    ],
    approachSummary: [
      "Through individualized movement experiences, RMTI® aims to support the neurological foundations that contribute to learning, regulation, coordination, and participation."
    ],
    areasCommonlySupported: [
      "Primitive Reflex Integration",
      "Attention and Concentration",
      "Balance and Coordination",
      "Postural Control",
      "Motor Planning",
      "Learning Readiness",
      "Emotional Regulation",
      "Body Awareness",
      "Handwriting Readiness",
      "Confidence and Participation"
    ],
    metaDescription: "RMTI® rhythmic movement training for children in Kandivali. Gentle reflex integration for posture, focus, and calm with Dr. Sharuja Sarap.",
  },
  {
    slug: "handwriting-without-tears",
    title: "Handwriting Without Tears® (HWT)",
    tagline: "Building Confident Writers Through Developmentally Appropriate Learning",
    pillLabel: "HWT",
    icon: "PenLine",
    understanding: "Handwriting is a skill that develops over time and requires much more than simply holding a pencil. Children need strong visual-motor skills, hand strength, coordination, body awareness, attention, and postural stability to write comfortably and efficiently.\n\nHandwriting Without Tears® is a structured, child-friendly handwriting program that makes learning to write easier, more enjoyable, and developmentally appropriate. The program uses multisensory learning experiences that help children understand letter formation, spacing, pencil control, and writing organization in a fun and engaging way.",
    whatParentsNoticeIntro: "Parents often seek support when they notice that their child:",
    whatParentsMayNotice: [
      "Struggles with letter formation",
      "Uses an inefficient pencil grasp",
      "Writes slowly or tires easily",
      "Has messy handwriting",
      "Avoids writing activities",
      "Experiences frustration during homework",
      "Finds classroom writing tasks challenging"
    ],
    approachSummary: [
      "The program focuses on building confidence while supporting the skills necessary for successful participation in school and everyday learning activities."
    ],
    areasCommonlySupported: [
      "Pencil Grip and Control",
      "Letter Formation",
      "Writing Readiness",
      "Visual-Motor Integration",
      "Fine Motor Skills",
      "Hand Strength and Dexterity",
      "Writing Endurance",
      "Classroom Participation",
      "Academic Confidence"
    ],
    metaDescription: "Handwriting Without Tears® in Mumbai & Kandivali. Multisensory handwriting support for children who struggle with legibility and endurance.",
  },
  {
    slug: "oral-placement-therapy",
    title: "Oral Placement Therapy® (OPT)",
    tagline: "Supporting Feeding, Oral Motor Development, and Functional Communication",
    pillLabel: "OPT",
    icon: "Utensils",
    understanding: "The mouth plays an important role in feeding, chewing, drinking, swallowing, speech production, and overall oral awareness. Some children may experience difficulties with the strength, coordination, stability, or awareness of the muscles involved in these activities.\n\nOral Placement Therapy® (OPT) is a structured approach that uses carefully selected activities and tools to support the development of oral motor skills required for feeding and functional communication.",
    whatParentsNoticeIntro: "Parents may notice that their child:",
    whatParentsMayNotice: [
      "Is an extremely selective eater",
      "Has difficulty chewing certain foods",
      "Prefers only specific textures",
      "Experiences challenges drinking from cups or straws",
      "Has reduced oral awareness",
      "Avoids trying new foods",
      "Has difficulty managing food within the mouth",
      "Demonstrates oral motor weakness"
    ],
    approachSummary: [
      "Therapy is individualized to support improved oral motor function, feeding skills, and participation during mealtimes."
    ],
    areasCommonlySupported: [
      "Feeding Skills",
      "Oral Motor Development",
      "Chewing and Drinking Skills",
      "Oral Awareness",
      "Food Exploration",
      "Mealtime Participation",
      "Oral Strength and Coordination",
      "Functional Oral Motor Skills"
    ],
    metaDescription: "Oral Placement Therapy® for picky eaters and feeding challenges in Kandivali. Gentle pediatric OT feeding support with Dr. Sharuja Sarap.",
  },
  {
    slug: "aquatic-therapy",
    title: "Aquatic Therapy (IATF Certified)",
    tagline: "Unlocking Potential Through the Therapeutic Power of Water",
    pillLabel: "Aquatic Therapy",
    icon: "Waves",
    understanding: "Water provides a unique environment where children can move, explore, learn, and participate in ways that may feel difficult on land. The natural properties of water offer support, resistance, sensory input, and opportunities for movement that can be both therapeutic and enjoyable.\n\nAquatic Therapy combines evidence-informed therapeutic principles with purposeful water-based activities to support physical, sensory, emotional, and functional development.",
    whatParentsNoticeIntro: "Aquatic Therapy may be beneficial for children who experience:",
    whatParentsMayNotice: [
      "Motor coordination difficulties",
      "Balance and postural challenges",
      "Sensory processing differences",
      "Low muscle tone or weakness",
      "Neurological conditions",
      "Physical disabilities",
      "Reduced confidence in movement",
      "Difficulties with body awareness"
    ],
    approachSummary: [
      "Parents often notice that children feel more confident, motivated, and successful when learning through water-based experiences.",
      "Sessions are designed to be engaging, goal-directed, and individualized according to each child's needs and abilities."
    ],
    areasCommonlySupported: [
      "Strength and Endurance",
      "Balance and Coordination",
      "Motor Planning",
      "Sensory Regulation",
      "Body Awareness",
      "Postural Control",
      "Confidence in Movement",
      "Social Participation",
      "Functional Independence",
      "Overall Physical Wellbeing"
    ],
    metaDescription: "Pediatric aquatic therapy in Mumbai for strength, balance, and sensory calm. Certified water-based OT with Dr. Sharuja Sarap in Kandivali.",
  },
  {
    slug: "piastm",
    title: "Pediatric Instrument Assisted Soft Tissue Mobilization (PIASTM)",
    tagline: "Supporting Comfortable Movement and Functional Participation",
    pillLabel: "PIASTM",
    icon: "Hand",
    understanding: "Children's bodies are constantly growing and developing. Sometimes muscle tightness, tissue restrictions, discomfort, postural challenges, or movement limitations can affect their ability to participate comfortably in everyday activities.\n\nPIASTM is a gentle therapeutic approach that uses specialized instruments to support soft tissue mobility, flexibility, movement quality, and overall physical function.\n\nThis approach may be incorporated into therapy when appropriate to help support movement efficiency and participation.",
    whatParentsMayNotice: [],
    areasCommonlySupported: [
      "Soft Tissue Mobility",
      "Range of Motion",
      "Movement Quality",
      "Postural Alignment",
      "Physical Function",
      "Comfort During Movement",
      "Participation in Daily Activities"
    ],
    metaDescription: "PIASTM soft tissue therapy for children in Kandivali. Gentle support for muscle tension, posture, and movement with Dr. Sharuja Sarap.",
  },
  {
    slug: "kinesio-taping",
    title: "Kinesio Taping® (KT)",
    tagline: "Supporting Movement, Stability, and Functional Performance",
    pillLabel: "Kinesio Taping",
    icon: "Award",
    understanding: "Kinesio Taping® is a therapeutic technique that uses specially designed elastic tape to support muscles, joints, posture, and movement while allowing natural motion to continue.\n\nWhen used as part of a comprehensive therapy program, taping may provide additional support during movement-based activities and functional tasks.\n\nDepending on the child's needs, Kinesio Taping may be used to support posture, body awareness, muscle activation, stability, and participation in everyday activities.",
    whatParentsMayNotice: [],
    areasCommonlySupported: [
      "Postural Control",
      "Muscle Activation",
      "Joint Stability",
      "Body Awareness",
      "Movement Efficiency",
      "Functional Performance",
      "Motor Development",
      "Participation in Daily Activities"
    ],
    metaDescription: "Kinesio Taping® for children in Mumbai & Kandivali. Postural and movement support for school, sports, and daily activities.",
  },
  {
    slug: "mnri",
    title: "Masgutova Neurosensorimotor Reflex Integration® (MNRI)",
    tagline: "Building Strong Foundations for Learning, Movement, and Regulation",
    pillLabel: "MNRI",
    icon: "Brain",
    understanding: "Primitive reflexes are automatic movement patterns that emerge during early development and provide the foundation for future motor, sensory, emotional, and learning skills. As children grow, these reflexes are expected to gradually integrate into more mature movement patterns.\n\nFor some children, retained reflex patterns may influence posture, balance, coordination, attention, learning, emotional regulation, and everyday participation.\n\nMNRI® is an approach that focuses on supporting the maturation and integration of reflex patterns through individualized activities and therapeutic experiences.",
    whatParentsNoticeIntro: "Parents may notice:",
    whatParentsMayNotice: [
      "Poor posture",
      "Difficulty sitting still",
      "Balance and coordination challenges",
      "Handwriting difficulties",
      "Attention and concentration concerns",
      "Emotional regulation challenges",
      "Motor planning difficulties"
    ],
    areasCommonlySupported: [
      "Reflex Integration",
      "Motor Development",
      "Balance and Coordination",
      "Postural Control",
      "Learning Readiness",
      "Emotional Regulation",
      "Attention and Concentration",
      "Body Awareness",
      "Functional Participation"
    ],
    metaDescription: "MNRI® reflex integration for children in Kandivali. Foundational nervous system support for movement, regulation, and learning.",
  },
  {
    slug: "kdct",
    title: "Kinesio Dry Cupping Therapy (KDCT)",
    tagline: "Supporting Mobility, Recovery, and Functional Movement",
    pillLabel: "KDCT",
    icon: "HeartHandshake",
    understanding: "Kinesio Dry Cupping Therapy is a gentle therapeutic technique that may be used as part of a comprehensive intervention plan to support tissue mobility, circulation, movement quality, and physical comfort.\n\nWhen clinically appropriate, this approach may assist in addressing movement restrictions and supporting overall physical participation.\n\nKDCT is always integrated within a broader therapy program and tailored according to the child's individual needs.",
    whatParentsMayNotice: [],
    areasCommonlySupported: [
      "Tissue Mobility",
      "Flexibility",
      "Movement Quality",
      "Physical Function",
      "Postural Support",
      "Comfort During Movement",
      "Participation in Everyday Activities"
    ],
    metaDescription: "KDCT gentle dry cupping for children in Kandivali. Pediatric muscle tension relief alongside OT with Dr. Sharuja Sarap, Mumbai.",
  },
];

/** Eleven specialised programme pages — excludes the landing-only intro. */
export const expertiseCategorySlugs = [
  "brain-gym",
  "double-doodle-play",
  "sensory-integration",
  "rmti",
  "handwriting-without-tears",
  "oral-placement-therapy",
  "aquatic-therapy",
  "piastm",
  "kinesio-taping",
  "mnri",
  "kdct",
] as const;

export type ExpertiseCategorySlug = (typeof expertiseCategorySlugs)[number];

export const expertiseCategories = expertiseCategorySlugs
  .map((slug) => expertiseAreas.find((area) => area.slug === slug))
  .filter((area): area is ExpertiseArea => Boolean(area));

export const lookingBeyondExpertise = expertiseAreas.find(
  (area) => area.slug === "looking-beyond-a-diagnosis",
)!;

export function getExpertise(slug: string): ExpertiseArea | undefined {
  return expertiseAreas.find((area) => area.slug === slug);
}

export function isExpertiseCategory(slug: string): slug is ExpertiseCategorySlug {
  return (expertiseCategorySlugs as readonly string[]).includes(slug);
}
