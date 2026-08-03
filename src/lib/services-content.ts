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
      whatIsIt: "This is hands-on support for the everyday moments — getting dressed, sitting at school, playing with friends, finishing homework. We meet your child where they are and build skills through play, not drills.",
      whoNeedsIt: "Children who seem to struggle more than their friends with routines, attention, writing, movement, or big feelings — with or without a diagnosis.",
      howItHelps: "Families often tell us mornings are calmer, homework is shorter, and their child seems more willing to try new things. That's what we're aiming for — real life, not just clinic progress.",
      whatHappens: "Your child plays, moves, and explores while we learn what they need. You get a clear plan in plain language and simple ideas to try at home. No pressure. No judgment.",
      outcomes: ["Easier mornings and bedtimes", "More willingness to try writing and school tasks", "Calmer responses to busy places", "A child who feels capable — not 'behind'", "Parents who know what to do on hard days", "Skills that show up at home, not just in sessions"],
      whenToBegin: "Whenever you notice daily life feeling harder than it should — for your child or for your whole family. Earlier support often means gentler progress.",
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
      { q: "How is pediatric OT at Thrive With Sharuja different?", a: "Dr. Sharuja Sarap combines 18+ years of experience with certifications in Brain Gym®, HWT, Aquatherapy, MNRI, and sensory integration for truly holistic care." },
      { q: "Do you coordinate with my child's school?", a: "Yes. We provide written recommendations and are happy to speak with teachers when families request it." },
      { q: "What is your therapy philosophy?", a: "Evidence-informed, play-based OT that meets each child where they are and builds skills families can use every day." },
      { q: "How many sessions will my child need?", a: "This varies by goals and severity. After evaluation, Dr. Sharuja Sarap provides a realistic timeline — typically 8–24 weeks for focused goals, with longer support for complex profiles." },
      { q: "Can siblings attend therapy sessions?", a: "Parents are always welcome. Sibling attendance depends on session focus — discuss with us when booking." },
    ],
  },
  {
    slug: "aquatic-therapy",
    geoBlock: {
      whatIsIt: "Therapy in water — where movement feels lighter and many children relax in ways they can't on land. It's playful, supervised, and tailored to your child.",
      whoNeedsIt: "Children who avoid playground activities, have low tone, feel anxious about physical tasks, or simply come alive near water.",
      howItHelps: "Parents often see their child move with more freedom in the pool — then carry that confidence to stairs, sports, and school.",
      whatHappens: "We start at your child's comfort level. Sessions include safe entry, guided activities, and a quick chat with you afterward about what to try at home.",
      outcomes: ["More willingness to move and play", "Better balance and body awareness", "Calmer mood after sessions", "Strength that shows up outside the pool", "Less fear around physical activities", "Joy — which matters more than you'd think"],
      whenToBegin: "When land-based activities feel too hard, or when your child lights up around water and you'd like to use that as a bridge to progress.",
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
      whatIsIt: "Short movement breaks that help the brain feel ready for focus — before homework, before school, before anything that usually ends in frustration.",
      whoNeedsIt: "Children who can't sit still, rush through work, reverse letters, or shut down when asked to read and write.",
      howItHelps: "Homework gets shorter. Mornings feel less chaotic. Teachers sometimes notice before you do. The goal is a child who has tools — not a child who tries harder and still fails.",
      whatHappens: "We find which movements help your child feel alert and calm. You get a simple routine to use at home. Often less than five minutes.",
      outcomes: ["Homework with fewer tears", "Better focus in short bursts", "A movement routine you can actually stick to", "Less resistance to seated tasks", "More confidence about school", "Teachers who understand what helps"],
      whenToBegin: "When school or homework is becoming a daily battle — especially in primary years when expectations jump quickly.",
    },
    caseExamples: [
      { title: "Focus transformation", description: "An 8-year-old with ADHD who could not sit through a 10-minute homework session built 25-minute focused work periods after 8 weeks of Brain Gym® integrated with OT." },
      { title: "Reading readiness", description: "A 6-year-old struggling with letter recognition and eye tracking showed marked improvement in reading fluency after Brain Gym® activities targeting visual-motor integration." },
    ],
    parentGuidance: [
      "Practice assigned Brain Gym® movements for 5–10 minutes before homework",
      "Create a consistent study environment with minimal distractions",
      "Use movement breaks during long seated tasks",
      "Share Brain Gym® progress with teachers for classroom integration",
    ],
    additionalFaqs: [
      { q: "Is Brain Gym® scientifically validated?", a: "Brain Gym® is widely used in educational and therapeutic settings globally. Dr. Sharuja Sarap integrates it within her evidence-informed OT framework." },
      { q: "Can Brain Gym® replace tutoring?", a: "Brain Gym® addresses the body-brain foundations for learning; it complements rather than replaces academic tutoring." },
    ],
  },
  {
    slug: "handwriting-training",
    geoBlock: {
      whatIsIt: "Patient, step-by-step help for children whose writing is messy, slow, painful, or avoided — using the Handwriting Without Tears® approach.",
      whoNeedsIt: "Children who refuse written homework, complain of sore hands, can't finish tests in time, or feel embarrassed about their work.",
      howItHelps: "We work on grip, posture, and letter formation through multisensory play — not endless lined-paper copying. Writing becomes doable, not dreadful.",
      whatHappens: "We assess what's getting in the way — often it's more than 'practice more.' Sessions are structured but never shaming. You get clear home practice that fits busy evenings.",
      outcomes: ["Writing that teachers can read", "Less hand pain and fatigue", "Willingness to try written tasks", "Faster completion during exams", "A child who doesn't hide their notebook", "Practical tips for desk setup at home"],
      whenToBegin: "When writing is affecting school marks, self-esteem, or family peace — especially after age 7–8 when expectations increase.",
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
      whatIsIt: "Gentle rhythmic movements that help some children feel more settled, steady, and ready to learn — especially when big feelings or clumsiness get in the way.",
      whoNeedsIt: "Children who seem always on the go, struggle with posture, have trouble focusing, or melt down during small transitions.",
      howItHelps: "Parents describe calmer bedtimes, easier mornings, and a child who seems more 'in their body.' Changes are gradual — but they stick.",
      whatHappens: "Simple movements practised together in session, then at home for a few minutes a day. Always gentle. Never forced.",
      outcomes: ["Calmer responses to change", "Better sitting and posture", "Easier attention during tasks", "Less anxiety before school", "Stronger foundation for reading and writing", "Parents who feel they have a tool that works"],
      whenToBegin: "When coordination, attention, or emotional ups and downs persist — and you sense something deeper might need support.",
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
      whatIsIt: "Support for the mouth and sensory skills behind eating — when mealtimes feel stressful, limited, or scary for your child.",
      whoNeedsIt: "Picky eaters, children who gag, refuse textures, or eat only a handful of foods — and parents who dread every meal.",
      howItHelps: "Mealtimes slowly become less of a fight. New foods are introduced without pressure. You get strategies that respect your child's pace.",
      whatHappens: "Playful oral exercises, sensory activities, and honest conversation about what's working at home. We coordinate with speech therapists when needed.",
      outcomes: ["More foods accepted over time", "Safer chewing and swallowing", "Less stress at the dinner table", "Better cup and straw skills", "A child who doesn't dread meals", "Parents who stop dreading them too"],
      whenToBegin: "When feeding is affecting nutrition, growth, family harmony, or your child's confidence around food.",
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
      whatIsIt: "Gentle hands-on techniques for children who carry tension that makes movement, writing, or play uncomfortable.",
      whoNeedsIt: "Children who complain of sore shoulders, tire quickly during writing, or seem 'tight' in their body without a clear injury.",
      howItHelps: "Movement feels easier. Writing sessions last longer. Sports and playground play become less of a struggle.",
      whatHappens: "Soft tissue work woven into regular therapy play — never cold or clinical. We watch your child's comfort every step.",
      outcomes: ["Less pain during daily tasks", "Better range of movement", "Improved posture at the desk", "More endurance for play", "Comfort alongside motor goals", "A body that feels less 'stuck'"],
      whenToBegin: "When tension seems to be blocking progress in other areas — handwriting, sports, or self-care.",
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
      whatIsIt: "Elastic tape that gives gentle reminders to the body — for posture, writing, sports, or simply sitting through a school day.",
      whoNeedsIt: "Children who slump, fatigue quickly, or need extra sensory feedback to know where their body is in space.",
      howItHelps: "It's subtle support your child can wear during the activities that matter — not a brace that holds them still.",
      whatHappens: "We assess how your child moves, apply tape for specific goals, and teach you how to care for it. Reassessed as needs change.",
      outcomes: ["Better awareness of posture", "More stable movement during play", "Support during sports or PE", "Less fatigue during writing", "Confidence trying physical activities", "A complement to ongoing therapy — not a replacement"],
      whenToBegin: "When postural or sensory support could help your child participate more comfortably in school or play.",
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
      whatIsIt: "A deeper layer of support for children whose nervous system seems to need a stronger foundation before skills can grow.",
      whoNeedsIt: "Children with coordination that 'almost' clicks, big emotional reactions, or learning challenges that haven't shifted with other help.",
      howItHelps: "Families notice small shifts first — a calmer transition, a new willingness to try, homework that doesn't end in tears.",
      whatHappens: "Specialised reflex-based activities within warm, playful sessions. Simple home practice. Honest check-ins about what's changing.",
      outcomes: ["Steadier emotional responses", "Smoother motor skills over time", "Better readiness for school demands", "Less overwhelm in busy places", "A child who recovers faster from upsets", "Parents who see a path forward"],
      whenToBegin: "When you've tried other support and sense something foundational still needs attention.",
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
      whatIsIt: "Very gentle cupping — adapted for children — to ease muscle tightness when it gets in the way of movement and comfort.",
      whoNeedsIt: "Children with persistent tension, soreness after activity, or tightness that slows progress in therapy goals.",
      howItHelps: "Bodies feel looser. Recovery after sports or long school days gets easier. It's always part of a wider plan.",
      whatHappens: "Brief, gentle application within a session your child already knows and trusts. We explain marks, comfort, and aftercare clearly.",
      outcomes: ["Less muscle tightness", "More comfortable movement", "Better recovery after physical activity", "Support alongside strengthening work", "A technique that feels manageable, not medical", "Progress that carries into daily life"],
      whenToBegin: "When tension or discomfort seems to be holding your child back from other goals.",
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
