export type ClientCondition = {
  slug: string;
  title: string;
  understanding: string;
  whatParentsMayNotice: string[];
  howOtHelps: string[];
  considerSupportIf: string[];
  closingSection: string;
  metaDescription: string;
};

export const clientConditions: ClientCondition[] = [
  {
    slug: "autism-spectrum-disorder",
    title: "Autism Spectrum Disorder",
    understanding:
      "Autism Spectrum Disorder (ASD) means your child experiences the world in their own way — sometimes intensely, sometimes quietly, often beautifully. It affects how they take in sensory information, connect with others, and move through daily routines. This is not a parenting failure, and it is not something to 'fix.' Many children with ASD have remarkable strengths alongside real challenges. Occupational therapy helps with the everyday parts of life: getting dressed without a meltdown, tolerating a noisy classroom, holding a pencil, joining play. We meet your child where they are and build skills that make daily life feel more possible — while honouring who they already are.",
    whatParentsMayNotice: [
      "Strong reactions to sounds, lights, textures, or busy environments",
      "Difficulty with changes in routine — even small ones",
      "Avoidance of certain foods, clothing, or touch",
      "Challenges with fine motor tasks like buttons, writing, or cutting",
      "Play or social interaction that looks different from peers",
      "Need for extra support with dressing, feeding, or toileting",
      "Meltdowns that seem to come out of nowhere",
      "Deep focus on specific interests alongside difficulty with transitions",
    ],
    howOtHelps: [
      "Understanding your child's unique sensory profile — what overwhelms them and what calms them",
      "Play-based sessions that build motor and daily living skills without pressure",
      "Sensory strategies for home: morning routines, transitions, and outings",
      "Support for handwriting, dressing, feeding, and self-care — step by step",
      "Tools to help your child recover faster when things feel too much",
      "School suggestions when you are ready to share them with teachers",
      "Parent coaching so you leave with something practical to try",
    ],
    considerSupportIf: [
      "Daily routines — mornings, meals, bedtime — feel harder than they should",
      "Your child avoids places, activities, or textures that peers manage easily",
      "Sensory overload leads to frequent meltdowns or shutdowns",
      "Fine motor or self-care tasks cause ongoing frustration",
      "You want support while navigating assessment or diagnosis elsewhere",
      "School participation or social outings feel increasingly difficult",
    ],
    closingSection:
      "Your child does not need to become someone else to thrive. With the right support, many families find that daily life becomes calmer, small wins start adding up, and you finally understand the 'why' behind behaviours that once felt confusing. You are not alone in this — and reaching out is a loving first step.",
    metaDescription:
      "Warm, parent-friendly guidance on autism and how pediatric occupational therapy in Kandivali supports sensory regulation, daily routines, and confident participation.",
  },
  {
    slug: "adhd",
    title: "ADHD",
    understanding:
      "ADHD is not laziness, bad behaviour, or a lack of trying. Your child's brain processes attention, impulse control, and movement differently — and tasks that look simple on the outside can feel genuinely hard on the inside. Sitting through homework, waiting their turn, or finishing what they started may take far more effort than you or their teacher realise. The good news: with the right strategies, many children with ADHD learn to work with their energy rather than fight it. Occupational therapy focuses on the practical skills behind daily success — focus, organisation, movement regulation, and the confidence to keep trying.",
    whatParentsMayNotice: [
      "Difficulty sitting through homework without constant redirection",
      "Impulsive actions that affect safety or friendships",
      "Forgetting instructions partway through a task",
      "A restless body — always moving, fidgeting, or climbing",
      "Big emotional reactions when tasks feel overwhelming",
      "Bright in conversation but struggles to show it on paper",
      "Difficulty with organisation — lost items, messy bags, unfinished work",
      "Sleep or screen habits that make the next day even harder",
    ],
    howOtHelps: [
      "Movement-based routines that prepare the brain for seated work",
      "Sensory tools and strategies that support — not shame — a fidgety body",
      "Homework setups and routines that work in real Mumbai homes",
      "Executive function help: breaking tasks down, packing bags, planning ahead",
      "Handwriting and fine motor support for classroom tasks",
      "Calming strategies for big feelings and frustration",
      "Notes and suggestions for teachers when you want classroom support",
    ],
    considerSupportIf: [
      "Homework or schoolwork steals your entire evening",
      "Teachers mention focus, but you know your child is trying hard",
      "Impulsivity is affecting friendships or safety",
      "Your child is starting to believe they are 'bad' or 'stupid'",
      "You want support with or without a formal ADHD diagnosis",
      "Family mornings, mealtimes, or bedtimes feel like daily battles",
    ],
    closingSection:
      "Children with ADHD are often creative, energetic, and deeply capable — they just need tools that fit how their brain works. With patience and the right support, homework can get shorter, mornings can feel calmer, and your child can begin to see themselves as someone who learns differently, not someone who fails. That shift in confidence matters enormously.",
    metaDescription:
      "Understanding ADHD from a parent's perspective and how pediatric OT in Kandivali helps with focus, impulse control, homework, and daily routines.",
  },
  {
    slug: "cerebral-palsy",
    title: "Cerebral Palsy",
    understanding:
      "Cerebral palsy (CP) affects how a child moves, holds their body, and coordinates actions — usually because of early brain development differences or injury. Every child with CP is different: some have stiffness, some have low muscle tone, some use one side of the body more than the other. What parents often want most is for their child to participate in life — to feed themselves, play with siblings, sit in class, feel proud of what their body can do. Occupational therapy focuses on function and independence: the skills that matter at home, at school, and in your community. Progress may be gradual, but every gain — however small it looks to others — can mean a great deal to your family.",
    whatParentsMayNotice: [
      "Muscle stiffness, floppiness, or uneven use of one side of the body",
      "Delayed milestones — sitting, crawling, walking, or hand use",
      "Difficulty with fine motor tasks like grasping, writing, or self-feeding",
      "Balance and coordination challenges during play or movement",
      "Fatigue from the extra effort everyday tasks require",
      "Need for help or adapted equipment for dressing, bathing, or feeding",
      "Difficulty keeping up with peers in physical play",
      "Challenges with oral motor skills or feeding safely",
    ],
    howOtHelps: [
      "Assessment of how your child moves and what daily tasks are hardest",
      "Posture and stability training to support safer, more efficient movement",
      "Fine and gross motor skill building through purposeful, adaptive activities",
      "Self-care training — dressing, feeding, grooming — with techniques that work for your child's body",
      "Aquatic therapy for strength, range of motion, and confidence in movement",
      "Recommendations for adaptive equipment when it would help",
      "Coordination with physiotherapists, speech therapists, and educators",
      "Home programmes so progress continues between sessions",
    ],
    considerSupportIf: [
      "Your child needs significant help with daily self-care",
      "School or play participation feels limited by movement challenges",
      "You want to understand what your child can achieve with the right support",
      "Fatigue or frustration is affecting mood and family life",
      "You are planning for increased independence as your child grows",
      "You would like guidance on equipment, handling, or home exercises",
    ],
    closingSection:
      "CP does not define your child's future. With early, thoughtful therapy and a team that celebrates every functional win, children often achieve far more than families first imagined. Your child's effort deserves recognition — and so does yours. We are here to walk that path with you.",
    metaDescription:
      "Parent-friendly information on cerebral palsy and how pediatric occupational therapy in Kandivali supports posture, motor skills, and daily independence.",
  },
  {
    slug: "developmental-delay",
    title: "Developmental Delay",
    understanding:
      "Developmental delay means your child is taking longer than expected to reach milestones in movement, play, communication, or self-care. It can show up in one area or several — and it is one of the most common reasons parents first reach out for help. Comparing your child to cousins, classmates, or even an older sibling can be painful. Please know: noticing a delay and asking questions is exactly what a loving parent does. Early, play-based support can make a real difference because young brains are remarkably adaptable. Occupational therapy meets your child at their current level and builds the foundational skills for independence, learning, and joyful participation.",
    whatParentsMayNotice: [
      "Late achievement of motor milestones — rolling, sitting, crawling, or walking",
      "Delayed fine motor skills — pointing, grasping, using utensils",
      "Play that looks younger than their age — less pretend or constructive play",
      "Difficulty with self-care compared to peers — feeding, dressing",
      "Reduced attention or engagement in age-appropriate activities",
      "Sensory behaviours that seem beyond the typical range",
      "Difficulty learning new tasks through watching and copying",
      "Concerns across more than one area of development",
    ],
    howOtHelps: [
      "Gentle assessment of motor, sensory, and daily living skills",
      "Play-based intervention that targets specific delayed areas",
      "Parent coaching with simple home activities you can actually do",
      "Sensory activities that support nervous system development",
      "Fine and gross motor building through purposeful, fun tasks",
      "Step-by-step scaffolding for self-care routines",
      "Regular progress check-ins with goals that grow as your child grows",
      "Coordination with your pediatrician and other specialists when needed",
    ],
    considerSupportIf: [
      "You feel your child is falling behind peers in multiple areas",
      "A teacher, doctor, or family member has raised concerns",
      "You want support while waiting for formal assessment",
      "School readiness feels uncertain as entry age approaches",
      "Daily routines take much longer or cause much more frustration than expected",
      "You want clear guidance on what to do at home — not just 'wait and see'",
    ],
    closingSection:
      "Every child develops on their own timeline — but when delays persist, early support gives your child the best chance to catch up and build confidence along the way. You do not need a perfect diagnosis to start. If something feels off, trusting that instinct and reaching out is already an act of love.",
    metaDescription:
      "Understanding developmental delay and how early pediatric occupational therapy in Kandivali supports motor, sensory, and daily living milestones.",
  },
  {
    slug: "sensory-processing-difficulties",
    title: "Sensory Processing Difficulties",
    understanding:
      "Sensory processing difficulties happen when a child's nervous system struggles to organise everyday input — the feel of socks, the noise of a mall, the movement of a swing, the taste of a new food. Some children are overwhelmed easily; others seem to need constant movement or touch to feel regulated. Neither is misbehaviour. These responses are real, often exhausting for the whole family, and frequently misunderstood by people who have not walked in your shoes. Occupational therapy — especially sensory integration-informed care — helps children build a calmer, more regulated nervous system so they can tolerate more of everyday life.",
    whatParentsMayNotice: [
      "Extreme reactions to clothing tags, socks, or certain textures",
      "Covering ears or distress in noisy or busy environments",
      "Avoidance of messy play, sand, or specific foods",
      "Constant movement seeking — spinning, crashing, climbing, fidgeting",
      "Difficulty with transitions and changes in routine",
      "Poor body awareness — bumping into things, personal space issues",
      "Meltdowns that seem unpredictable or disproportionate",
      "Difficulty calming down after excitement or upset",
    ],
    howOtHelps: [
      "A detailed look at your child's sensory profile — what they seek and what they avoid",
      "Sensory-rich, play-based therapy in a supportive gym environment",
      "Personalised sensory strategies — or 'sensory diets' — for home and school",
      "Graded exposure to challenging sensations in a safe, therapeutic context",
      "Movement activities that help the nervous system feel more organised",
      "Parent education so you understand the 'why' behind behaviours",
      "Practical tips for grooming, mealtimes, and outings",
      "School collaboration for sensory-friendly classroom setups when you are ready",
    ],
    considerSupportIf: [
      "Meltdowns or avoidance behaviours limit daily life — eating, dressing, playing, learning",
      "Mealtimes, hair washing, or nail cutting become major battles",
      "Your child cannot tolerate environments that peers manage — malls, parties, classrooms",
      "You feel exhausted from constantly managing sensory triggers",
      "Others treat your child's responses as defiance rather than overwhelm",
      "You want help even without a formal diagnosis — because the struggle is real",
    ],
    closingSection:
      "Sensory challenges can make ordinary days feel extraordinary hard — for your child and for you. With understanding and the right support, many families see fewer meltdowns, wider tolerance for everyday experiences, and a child who finally feels a little more at ease in their own body. That relief is worth pursuing.",
    metaDescription:
      "Sensory processing difficulties explained for parents, and how sensory integration occupational therapy in Kandivali helps children feel calmer and more regulated.",
  },
  {
    slug: "learning-difficulties",
    title: "Learning Disabilities",
    understanding:
      "Learning disabilities mean your child may struggle to acquire, process, or show academic skills — reading, writing, spelling, maths — even when they are bright, curious, and trying their best. Extra tuition sometimes helps a little, but the same struggles keep returning. Often, hidden sensory-motor or processing challenges sit underneath: weak pencil control, poor visual tracking, difficulty sitting still long enough to learn, or trouble organising thoughts on paper. Occupational therapy addresses these foundations so your child can access learning more fully — not by drilling content, but by building the skills that make learning possible.",
    whatParentsMayNotice: [
      "Reading, spelling, or writing that stays difficult despite practice",
      "Slow processing — needing much more time than classmates",
      "Difficulty copying from the board or keeping work organised",
      "Strong verbal ability but weak written output",
      "Avoidance of homework and academic tasks",
      "Frustration, tears, or shutdown during schoolwork",
      "Teachers suggesting the child is careless or not trying",
      "A growing gap between effort and results",
    ],
    howOtHelps: [
      "Assessment of visual-motor, fine motor, and sensory factors affecting learning",
      "Movement-based strategies that support reading and writing pathways",
      "Handwriting intervention for clearer, less painful written work",
      "Visual-perceptual and visual-motor skill training",
      "Attention and executive function strategies for learning tasks",
      "Guidance on home study setup in small spaces",
      "School collaboration for accommodations when appropriate",
      "Building confidence through activities designed for success",
    ],
    considerSupportIf: [
      "Tutoring has not resolved persistent academic struggles",
      "Your child's written work does not reflect what they know verbally",
      "Homework battles are affecting family peace and your child's self-esteem",
      "You suspect motor or attention issues are hiding behind 'learning problems'",
      "School has raised concerns and you want a fuller picture",
      "Your child is starting to avoid school or believe they are 'not smart'",
    ],
    closingSection:
      "A learning disability is not a limit on your child's potential — it is a sign that they may need a different path to get there. When the underlying skills catch up, many children surprise everyone, including themselves. Your belief in them, paired with the right support, can change the story they tell about who they are as a learner.",
    metaDescription:
      "Learning disabilities explained for parents, and how pediatric occupational therapy in Kandivali supports reading, writing, and classroom success through foundational skill building.",
  },
  {
    slug: "motor-coordination-challenges",
    title: "Motor Coordination Challenges",
    understanding:
      "Motor coordination challenges — sometimes called dyspraxia or developmental coordination disorder — affect a child's ability to plan, learn, and carry out physical movements. Your child might be the one who trips often, avoids sports, or takes forever to learn to ride a bike or tie shoelaces. These struggles are not lack of effort. The brain's motor planning system works differently, and repeated practice alone may not be enough. Occupational therapy builds coordination, balance, and body awareness through structured play — helping your child feel more confident in their body and more willing to join in.",
    whatParentsMayNotice: [
      "Frequent tripping, bumping into furniture, or dropping things",
      "Difficulty learning new physical skills — cycling, swimming, sports",
      "Poor ball skills — catching, throwing, kicking",
      "Awkward or hesitant running, jumping, or climbing",
      "Difficulty with two-handed tasks — cutting, buttoning, jumping jacks",
      "Avoidance of PE, playground games, or physical play",
      "Handwriting that is slow or messy due to motor planning difficulties",
      "Tiring quickly during physical activities peers manage easily",
    ],
    howOtHelps: [
      "Assessment of motor planning, balance, and coordination",
      "Balance and postural stability training through engaging activities",
      "Bilateral coordination practice — using both sides of the body together",
      "Aquatic therapy for strength and coordination in a supportive environment",
      "Fine motor work for tool use, buttons, and handwriting",
      "Graded challenges with success built in at each step",
      "Home activities for short, regular practice",
      "School suggestions for PE participation and accommodations",
    ],
    considerSupportIf: [
      "Your child avoids physical play or sports significantly more than peers",
      "Clumsiness affects safety, confidence, or social inclusion",
      "Self-care tasks requiring coordination — shoelaces, buttons — remain very difficult",
      "Teachers or coaches have noticed motor difficulties",
      "Your child compares themselves unfavourably to friends physically",
      "You worry about long-term fitness and willingness to stay active",
    ],
    closingSection:
      "Coordination can improve — often more than families expect — when practice is targeted, playful, and consistent. Watching a child who once sat out of games begin to join in, even cautiously at first, is one of the quiet joys of this work. Your child's body has capacity; sometimes it just needs the right guide.",
    metaDescription:
      "Motor coordination challenges and dyspraxia explained for parents, with guidance on how pediatric OT and aquatic therapy in Kandivali build physical confidence.",
  },
  {
    slug: "handwriting-difficulties",
    title: "Handwriting Difficulties",
    understanding:
      "Handwriting asks a lot of a child — pencil control, hand strength, posture, visual tracking, letter memory, and sustained attention, all at once. When writing is illegible, painfully slow, or avoided entirely, it affects grades, self-esteem, and how teachers see your child's ability. More copying practice at home often increases frustration without fixing the root cause. Occupational therapy looks at grip, strength, visual-motor integration, and posture — then builds handwriting through structured, evidence-based programmes so your child can express what they know on paper.",
    whatParentsMayNotice: [
      "Illegible letter formation or inconsistent letter sizes",
      "Awkward, tight, or inefficient pencil grip",
      "Writing so slowly they cannot finish classwork or exams",
      "Hand pain or fatigue during or after writing",
      "Letter or number reversals beyond early primary years",
      "Active avoidance of writing tasks and homework resistance",
      "Difficulty staying on lines or spacing letters and words evenly",
      "Written work that does not match what your child knows verbally",
    ],
    howOtHelps: [
      "Full assessment of handwriting, grip, strength, and visual-motor skills",
      "Structured handwriting programmes with clear, step-by-step progression",
      "Pencil grip correction and adaptive tool recommendations when helpful",
      "Hand strength and dexterity activities that feel like play",
      "Posture and core stability work for comfortable, sustained writing",
      "Visual-motor activities supporting letter formation and alignment",
      "School collaboration for accommodations or modified tasks",
      "Home practice guidance so progress continues between sessions",
    ],
    considerSupportIf: [
      "Handwriting remains illegible or very slow by age 7–8 or beyond",
      "Your child complains of hand pain or refuses writing tasks",
      "Teachers mark down work despite your child knowing the content",
      "Exam performance suffers because writing cannot keep up",
      "Extra writing practice at home has not improved things",
      "Your child avoids journaling, creative writing, or any pencil-and-paper work",
    ],
    closingSection:
      "Clear handwriting opens doors — in class, in exams, and in how a child sees themselves as a learner. With targeted support, many children move from dreading written work to completing it with growing pride. It is never too late to address persistent difficulties, and the confidence that follows is often the greatest gift.",
    metaDescription:
      "Handwriting difficulties explained for parents, and how specialised pediatric occupational therapy in Kandivali helps children write legibly and with less fatigue.",
  },
  {
    slug: "attention-difficulties",
    title: "Attention, Focus & Concentration Challenges",
    understanding:
      "Attention difficulties affect a child's ability to focus, filter distractions, and stay with a task long enough to finish it — at home, in class, and during play. This is not always ADHD; many children struggle with focus without meeting full diagnostic criteria. A child might daydream quietly and be overlooked, or need constant redirection and still not finish homework. Either way, the impact on learning and family life is real. Occupational therapy builds attention stamina through movement, sensory regulation, and practical strategies — helping your child engage more fully with the world around them.",
    whatParentsMayNotice: [
      "Difficulty sustaining focus for more than a few minutes",
      "Easily distracted by sounds, movement, or their own thoughts",
      "Trouble following multi-step instructions without repetition",
      "Daydreaming or seeming 'somewhere else' during tasks",
      "Incomplete homework, chores, or classroom assignments",
      "Restlessness during seated activities",
      "Inconsistent performance — focused one day, scattered the next",
      "Need for frequent reminders that leave everyone exhausted",
    ],
    howOtHelps: [
      "Assessment of attention patterns and sensory factors that affect focus",
      "Movement-based routines that activate learning readiness",
      "Sensory strategies to reach the 'just right' level of alertness",
      "Graded attention-building activities with slowly increasing duration",
      "Home and study environment modifications that reduce distraction",
      "Movement break protocols for longer tasks",
      "Parent coaching on routines that support sustained focus",
      "School recommendations for seating, task length, and breaks",
    ],
    considerSupportIf: [
      "Focus issues affect school performance or daily routines",
      "Your child needs constant redirection to complete simple tasks",
      "Teachers report inattention despite your child being capable",
      "Homework takes far longer than it should for the amount of work",
      "You want support whether or not ADHD has been diagnosed",
      "Quiet inattention is causing your child to fall through the cracks at school",
    ],
    closingSection:
      "Focus is a skill that can be strengthened — not a fixed trait your child is stuck with. Many families notice meaningful changes within weeks of consistent support and simple home strategies. Your child deserves to experience what it feels like to finish something and feel proud. That moment is closer than it may seem.",
    metaDescription:
      "Attention, focus, and concentration challenges explained for parents, and how pediatric OT and movement-based strategies in Kandivali support learning readiness.",
  },
];

export function getClientCondition(slug: string): ClientCondition | undefined {
  return clientConditions.find((condition) => condition.slug === slug);
}
