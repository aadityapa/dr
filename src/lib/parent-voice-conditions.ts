import type { ConditionContent } from "./conditions-content";

export const aboutVoice = {
  heroKicker: "About Dr. Sharuja",
  heroTitle: "Someone who listens before she plans",
  heroDescription:
    "For 18+ years, Dr. Sharuja has sat with worried parents in Kandivali — hearing the stories behind the struggles. Mornings that fall apart. Homework that never ends. A child who seems brilliant but can't get through a school day. She doesn't rush you. She explains things plainly. And she builds therapy around your child, not a checklist.",
  storyTitle: "Why parents trust her",
  storyParagraphs: [
    "Parents tell us they feel heard here. Not lectured. Not judged. Just understood.",
    "Dr. Sharuja brings deep training — a Master's in Pediatric OT, Ph.D. scholarship, certifications across sensory integration, handwriting, aquatic therapy, reflex work, and more. But what families remember is how she talks to their child. How she celebrates small wins. How she gives them something practical to try before they leave.",
    "This clinic isn't a hospital ward. It's a warm space in Kandivali West where children play, explore, and slowly build the skills that make daily life feel possible again.",
  ],
  qualificationsTitle: "Learning that backs up the care",
  qualificationsDescription: "Years of study and specialised training — so your family gets thoughtful support, not guesswork.",
  certificationsTitle: "Tools she brings to your child's table",
  certificationsDescription: "Many ways to help — matched to what your child actually needs.",
  journeyKicker: "Her path",
  journeyTitle: "Eighteen years of showing up for children",
  journeyDescription: "From early practice in Mumbai to advanced training across the world — one constant: children and families come first.",
} as const;

type ConditionVoiceOverride = Partial<
  Pick<ConditionContent, "intro" | "symptoms" | "challenges" | "therapyRole" | "benefits" | "whenToBegin" | "faqs">
>;

export const conditionVoiceOverrides: Record<string, ConditionVoiceOverride> = {
  "autism-spectrum-disorder": {
    intro:
      "Your child experiences the world in their own way — intensely, beautifully, sometimes overwhelmingly. We're not here to change who they are. We're here to help daily life feel more manageable: quieter malls, smoother mornings, a child who can join the birthday party instead of dreading it.",
    symptoms: [
      "Covers ears or melts down in noisy, busy places",
      "Struggles with changes in routine — even small ones",
      "Avoids certain textures in clothes, food, or touch",
      "Finds fine motor tasks frustrating — buttons, writing, cutting",
      "Prefers solo play or interacts differently from peers",
      "Needs extra support with dressing, feeding, or toileting",
    ],
    challenges: [
      "Birthday parties and malls feel impossible",
      "Teachers don't always understand sensory needs",
      "You feel judged when your child melts down in public",
      "Homework and handwriting become daily battles",
      "Sleep and mealtimes affect the whole family",
    ],
    therapyRole: [
      "We learn your child's sensory profile — what overwhelms them, what calms them",
      "Play-based sessions that build skills without pressure",
      "Simple home strategies for mornings, transitions, and outings",
      "Support for dressing, feeding, writing, and play — step by step",
      "School suggestions when you're ready to share them",
    ],
    benefits: [
      "Fewer meltdowns. Faster recovery when they happen",
      "A child who can tolerate more of everyday life",
      "Parents who finally understand the 'why' behind behaviours",
      "Small wins — a haircut, a school day, a family meal",
    ],
    whenToBegin:
      "You don't need a diagnosis to reach out. If daily life feels harder than it should — for your child or for you — a conversation can help.",
    faqs: [
      { q: "Does my child need an autism diagnosis first?", a: "No. If you're seeing sensory, motor, or daily living challenges, we can start while you navigate assessment elsewhere." },
      { q: "Will you try to make my child 'normal'?", a: "Never. We build skills for participation while honouring who your child is." },
      { q: "How is this different from ABA?", a: "We focus on sensory-motor foundations for daily life. Many families use both. We're happy to coordinate." },
    ],
  },
  adhd: {
    intro:
      "Your child isn't lazy. Their brain processes the world differently — and sitting still, finishing homework, or waiting their turn can feel genuinely hard. We work with that energy, not against it. Movement, structure, and strategies your child can actually use.",
    symptoms: [
      "Can't sit through homework without endless redirection",
      "Impulsive in ways that affect safety or friendships",
      "Forgets instructions halfway through",
      "Restless body — always moving, fidgeting, climbing",
      "Big feelings when tasks feel too hard",
      "Bright in conversation but struggles on paper",
    ],
    challenges: [
      "Homework steals your entire evening",
      "Teacher notes about focus — but you know they try",
      "You've wondered if you're failing as a parent",
      "Sleep and screens make the next day harder",
      "Your child is starting to believe they're 'bad'",
    ],
    therapyRole: [
      "Brain Gym® and movement routines before seated work",
      "Sensory tools that help — not shame — fidgety bodies",
      "Homework setups that work in small Mumbai apartments",
      "Executive function help: packing bags, breaking tasks down",
      "Notes for teachers when you want classroom support",
    ],
    benefits: [
      "Shorter homework battles",
      "A child with tools they can use independently",
      "Calmer mornings and bedtimes",
      "Parents who stop feeling like the homework police",
    ],
    whenToBegin:
      "If focus is affecting school, friendships, or family peace — with or without an ADHD label — early support prevents confidence from crumbling.",
    faqs: [
      { q: "Can OT replace medication?", a: "No — and we don't prescribe it. Many families use both. We focus on skills for daily life." },
      { q: "Will my child have to sit still in sessions?", a: "No. We use movement. Sessions match their energy." },
      { q: "Will this help at school?", a: "Yes. We give practical strategies for home and classroom when you're ready." },
    ],
  },
  "cerebral-palsy": {
    intro:
      "Your child may move differently — and that's okay. What matters is participation: eating lunch independently, joining play, feeling proud of their body. We focus on real life, celebrating every gain along the way.",
    symptoms: [
      "Stiff or floppy muscles affecting posture and movement",
      "Delayed milestones — sitting, walking, using hands",
      "Tires quickly during physical activities",
      "Needs help with dressing, feeding, or grooming",
      "Avoids playground or PE because it's too hard",
    ],
    challenges: [
      "Extra care tasks exhaust parents",
      "School and playground feel inaccessible",
      "Worry about long-term independence",
      "Coordinating multiple therapists feels overwhelming",
    ],
    therapyRole: [
      "Play-based strengthening and posture work",
      "Self-care skills broken into small, achievable steps",
      "Aquatic therapy when water helps movement click",
      "Equipment ideas for home and school",
      "Coordination with your physio and speech team",
    ],
    benefits: [
      "More independence in daily routines",
      "A child who participates — not just watches",
      "Parents trained in safe, practical home support",
      "Every small functional win celebrated",
    ],
    whenToBegin: "Earlier is wonderful. It's never too late. Progress is possible at every age.",
    faqs: [
      { q: "Do you work with other therapists?", a: "Yes. We coordinate with your team — always family-centred." },
      { q: "Is water therapy safe?", a: "Yes, with certified supervision. Many children thrive in water." },
      { q: "Can you help with hand skills?", a: "Yes. Fine motor work for self-care, school, and play." },
    ],
  },
  "developmental-delay": {
    intro:
      "Your child is on their own timeline. That can feel scary when everyone else's baby is walking, talking, or playing differently. Early, gentle support can change the path — not by rushing, but by meeting your child exactly where they are.",
    symptoms: [
      "Motor milestones later than friends or cousins",
      "Play looks different for their age",
      "Needs more help with feeding or dressing than peers",
      "Gets overwhelmed or withdraws in groups",
      "You sense 'something' even if doctors say wait",
    ],
    challenges: [
      "Comparing to other children at family gatherings",
      "Uncertainty about what comes next",
      "School admission worries on the horizon",
      "Balancing therapy with being a family",
    ],
    therapyRole: [
      "Play-based assessment — no scary testing",
      "Skills built through what your child already enjoys",
      "Home activities that fit into bath time and meals",
      "Clear updates so you know what's changing",
      "Coordination with your paediatrician",
    ],
    benefits: [
      "Steady progress toward milestones",
      "Less parental anxiety — you have a plan",
      "A child who experiences therapy as play",
      "School readiness when the time comes",
    ],
    whenToBegin: "Trust your instinct. If you're worried, a conversation costs nothing and can bring clarity.",
    faqs: [
      { q: "Will they catch up to peers?", a: "Many children make meaningful progress. We focus on function and confidence, not labels." },
      { q: "Can we start before a diagnosis?", a: "Yes. Please don't wait if you're concerned." },
      { q: "How often are sessions?", a: "We'll recommend what fits your child and your family — honestly." },
    ],
  },
  "sensory-processing-difficulties": {
    intro:
      "For your child, a tag on a shirt or the noise of a mall isn't minor — it can feel unbearable. Or they might crave movement so intensely that sitting still is torture. Neither is bad behaviour. It's a nervous system that needs understanding and support.",
    symptoms: [
      "Meltdowns in shops, parties, or classrooms",
      "Refuses certain foods, clothes, or haircuts",
      "Seeks constant movement — crashing, spinning, climbing",
      "Takes forever to calm down after upset",
      "Avoids messy play or certain textures",
    ],
    challenges: [
      "You plan outings around possible meltdowns",
      "Mealtimes are a battleground",
      "Others see 'tantrums' — you see overload",
      "School calls about behaviour you understand but can't fix alone",
    ],
    therapyRole: [
      "We map your child's sensory profile together",
      "A sensory gym where they can explore safely",
      "A sensory 'diet' — simple activities for home and school",
      "Gradual exposure to hard things, never flooding",
      "Parent coaching so you feel equipped, not helpless",
    ],
    benefits: [
      "Fewer meltdowns. Shorter recoveries",
      "Family outings become possible again",
      "You understand the why — and have tools",
      "Better sleep, meals, and school days",
    ],
    whenToBegin: "If sensory struggles are shrinking your child's world, support helps — the earlier, the gentler the path.",
    faqs: [
      { q: "Is this a real thing?", a: "Yes. Occupational therapists see it every day. The struggle is real even without a formal label." },
      { q: "Will they outgrow it?", a: "Some children adapt. Many benefit from explicit strategies that last." },
      { q: "What's a sensory gym?", a: "A playful therapy space with swings, textures, and movement — designed to help regulation." },
    ],
  },
  "learning-difficulties": {
    intro:
      "Your child might be clever in conversation but fall apart on paper. Or tutoring hasn't helped despite real effort. Sometimes the body and brain aren't ready for learning — and no amount of extra worksheets will fix that alone.",
    symptoms: [
      "Reading or writing far behind effort and intelligence",
      "Homework takes three times longer than peers",
      "Avoids schoolwork — not because they're lazy",
      "Can't copy from the board or organise work on a page",
      "Tutors say 'try harder' but nothing shifts",
    ],
    challenges: [
      "Report cards that don't reflect your child's ability",
      "Your child starting to say 'I'm stupid'",
      "Expensive tuition with little return",
      "School meetings that leave you confused",
    ],
    therapyRole: [
      "We check what's blocking learning — motor, sensory, attention",
      "Brain Gym® and movement before seated work",
      "Handwriting support when writing is the bottleneck",
      "Home study setups that actually work",
      "School letters when you need accommodations",
    ],
    benefits: [
      "Homework gets shorter and calmer",
      "Writing and reading feel more possible",
      "Your child understands their strengths too",
      "You can advocate at school with clarity",
    ],
    whenToBegin: "If tutoring isn't enough, look at foundations. Primary school is the best time to intervene.",
    faqs: [
      { q: "Is this tutoring?", a: "No. We build the body-brain readiness that makes learning stick." },
      { q: "Can you diagnose dyslexia?", a: "We identify functional gaps. Formal diagnosis is done by psychologists." },
      { q: "Will school take your recommendations seriously?", a: "We write clearly and practically. Most schools cooperate." },
    ],
  },
  "motor-coordination-challenges": {
    intro:
      "Your child might be the one who sits out at cricket, trips on nothing, or says 'I can't' before trying. Clumsiness isn't carelessness — often it's a body that needs help learning new movement patterns.",
    symptoms: [
      "Avoids sports, playground, or PE",
      "Can't learn to ride a bike or catch a ball",
      "Handwriting messy because motor planning is hard",
      "Buttons and shoelaces still a daily struggle",
      "Tires quickly during physical play",
    ],
    challenges: [
      "Peer exclusion from games",
      "Low confidence about their body",
      "You worry they'll never be 'sporty'",
      "School written work suffers too",
    ],
    therapyRole: [
      "Motor planning through play — not gym drills",
      "Aquatic therapy when water unlocks movement",
      "Hand skills linked to coordination",
      "Gradual challenges with success built in",
      "PE strategies for school",
    ],
    benefits: [
      "Willingness to try physical activities",
      "Better balance and fewer bumps",
      "Improved handwriting and tool use",
      "A child proud of their body again",
    ],
    whenToBegin: "If avoidance is setting in, early support prevents years of 'I'm not good at that.'",
    faqs: [
      { q: "Is it dyspraxia?", a: "Maybe. Persistent coordination gaps across activities warrant assessment." },
      { q: "Does water really help?", a: "For many children, yes. Movement feels freer and safer." },
      { q: "Can older kids improve?", a: "Absolutely. We've seen meaningful gains at every age we serve." },
    ],
  },
  "handwriting-difficulties": {
    intro:
      "When your child hides their notebook or cries over homework, it's not laziness. Writing asks a lot of a developing body — grip, posture, patience, confidence. We build those pieces gently.",
    symptoms: [
      "Illegible writing despite practice",
      "Complains of hand pain or fatigue",
      "Refuses written homework",
      "Teacher says 'careless' but you know they try",
      "Can't finish tests in time",
    ],
    challenges: [
      "Marks lost despite knowing answers",
      "Evening battles over written work",
      "Child's confidence eroding",
      "Tuition focused on content, not writing",
    ],
    therapyRole: [
      "Handwriting Without Tears — multisensory, not copying lines",
      "Grip and posture fixes that stick",
      "Hand strengthening through play",
      "School accommodations during improvement",
      "Ten minutes daily home practice — manageable",
    ],
    benefits: [
      "Readable writing teachers can mark fairly",
      "Child willing to pick up a pencil again",
      "Less pain, more speed",
      "Exam readiness when it matters",
    ],
    whenToBegin: "After age 7–8, if writing is still a battle, targeted help beats more worksheets.",
    faqs: [
      { q: "Will more practice at home fix it?", a: "Not if grip and motor foundations are wrong. We fix the root." },
      { q: "Is it too late for my 12-year-old?", a: "No. Older children often improve quickly with the right approach." },
      { q: "Can they use a laptop instead?", a: "Sometimes. We help you decide — and build skills either way." },
    ],
  },
  "attention-difficulties": {
    intro:
      "Not every distracted child has ADHD. Some simply can't filter classroom noise, or their body needs movement before their brain can focus. We help without labels — just practical support.",
    symptoms: [
      "Drifts off mid-conversation or mid-task",
      "Needs constant reminders for simple routines",
      "Daydreams in class but sparks at home topics",
      "Inconsistent — great one day, scattered the next",
      "Restless when asked to sit and work",
    ],
    challenges: [
      "Teacher says 'capable but inattentive'",
      "You repeat yourself until you're exhausted",
      "Homework forgotten or half-done",
      "Quiet kids overlooked because they're not disruptive",
    ],
    therapyRole: [
      "Attention profile and sensory check",
      "Short movement routines before work",
      "Timers, breaks, and desk setups",
      "Gradual focus-building through engaging tasks",
      "Teacher tips when you want them shared",
    ],
    benefits: [
      "Tasks actually get finished",
      "Fewer reminders from you",
      "Child learns what helps them focus",
      "Teachers see improvement",
    ],
    whenToBegin: "Before gaps widen at school — whether or not anyone has used the word ADHD.",
    faqs: [
      { q: "Is this only for ADHD?", a: "No. Any child whose focus affects daily life can benefit." },
      { q: "How fast will we see change?", a: "Many families notice shifts in 4–8 weeks with consistency." },
      { q: "Should we cut screen time?", a: "We'll talk honestly about routines — balance matters." },
    ],
  },
  "primitive-reflex-retention": {
    intro:
      "Sometimes a child's body seems 'stuck' — poor posture, clumsiness, reading struggles — and no one can explain why. Retained early reflexes can be part of that story. Gentle movement can help the nervous system catch up.",
    symptoms: [
      "Slumps at the desk or W-sits on the floor",
      "Clumsy despite practice",
      "Reading or tracking feels harder than it should",
      "Big reactions to small frustrations",
      "Other therapies helped — but plateaued",
    ],
    challenges: [
      "Feeling like you've tried everything",
      "School struggles despite tutoring",
      "Child tired of failing at new skills",
      "Not sure what else to try",
    ],
    therapyRole: [
      "Reflex and movement assessment",
      "Gentle RMTI and MNRI protocols in play",
      "Home movements — minutes a day",
      "Integrated with broader OT goals",
      "Honest progress reviews",
    ],
    benefits: [
      "Better posture and coordination",
      "Calmer emotional responses",
      "Reading and writing feel easier",
      "Parents understand the 'why' at last",
    ],
    whenToBegin: "When progress has stalled elsewhere, it's worth asking if foundations need attention.",
    faqs: [
      { q: "Can older children benefit?", a: "Yes. The nervous system remains adaptable up to 14." },
      { q: "How long does it take?", a: "Foundations shift gradually — often weeks to months." },
      { q: "Is this proven?", a: "Reflex integration is used worldwide in paediatric OT. Dr. Sharuja integrates it thoughtfully." },
    ],
  },
  "emotional-regulation-difficulties": {
    intro:
      "When meltdowns are bigger than the moment deserves — or recovery takes forever — your child isn't giving you a hard time. They're having a hard time. We teach regulation through play, movement, and connection.",
    symptoms: [
      "Explosive reactions to small changes",
      "Long time to calm after upset",
      "Frustration shuts down tasks quickly",
      "Anxiety in new situations",
      "You feel like you're walking on eggshells",
    ],
    challenges: [
      "Whole family on edge",
      "School calls about behaviour",
      "Siblings affected too",
      "You've tried discipline — it doesn't help",
    ],
    therapyRole: [
      "Understanding triggers — often sensory",
      "Co-regulation strategies for you and your child",
      "Movement and deep pressure that calm",
      "Visual routines for predictability",
      "School environments that support regulation",
    ],
    benefits: [
      "Shorter meltdowns. Faster repair",
      "Tools your child can use — not just you",
      "Less parent exhaustion",
      "Better days at school",
    ],
    whenToBegin: "If emotions are shrinking your child's world, support early prevents anxiety and withdrawal.",
    faqs: [
      { q: "Is this my fault?", a: "Never. Regulation often has neurological roots. Seeking help is love." },
      { q: "Without medication?", a: "Many children improve with OT strategies. We collaborate with doctors when needed." },
      { q: "How do you teach little kids?", a: "Through play, movement, and visuals — never punishment." },
    ],
  },
  "school-readiness-concerns": {
    intro:
      "School readiness isn't ABCs and 123s alone. It's sitting tolerance, pencil grip, following instructions, managing a uniform, and feeling brave enough to walk through the gate. We prepare the whole child — not just the workbook.",
    symptoms: [
      "Can't hold a pencil comfortably yet",
      "Restless during table activities",
      "Shy or overwhelmed in groups",
      "Needs help with lunchbox, shoes, toilet",
      "Anxious when you mention 'big school'",
    ],
    challenges: [
      "Admission stress and comparisons",
      "Fear they'll 'fail' on day one",
      "Teachers already flagging concerns",
      "You want them to love learning — not fear it",
    ],
    therapyRole: [
      "School readiness check — play-based",
      "Pre-writing and grip through HWT",
      "Sitting stamina built gradually",
      "Social play in small, safe steps",
      "School visit advice and teacher notes",
    ],
    benefits: [
      "Confident first days",
      "Practical skills for classroom independence",
      "You feel prepared — not panicked",
      "Teachers know how to support",
    ],
    whenToBegin: "Six to twelve months before school is ideal. Already in school and struggling? We can still help.",
    faqs: [
      { q: "What age to start?", a: "Around 3–4 for prep, or anytime concerns appear." },
      { q: "Do you teach academics?", a: "We build the body and brain readiness that makes academics possible." },
      { q: "Reports for admission?", a: "Yes, when families need them." },
    ],
  },
  "down-syndrome": {
    intro:
      "Your child has strengths you see every day — warmth, humour, persistence. Therapy celebrates those while building muscle tone, hand skills, and independence for school and home. Every milestone matters.",
    symptoms: [
      "Low muscle tone affecting movement and posture",
      "Fine motor tasks need extra help",
      "Feeding or speech readiness challenges",
      "Sensory preferences that affect daily life",
      "Slower to dress, feed, or use tools independently",
    ],
    challenges: [
      "Navigating school and therapies",
      "Worry about long-term independence",
      "Finding practitioners who see your child's potential",
      "Mealtime and self-care taking extra time",
    ],
    therapyRole: [
      "Strength-building through joyful play",
      "Self-care broken into achievable steps",
      "Feeding support when needed",
      "Aquatic therapy for confidence in movement",
      "Family coaching and school collaboration",
    ],
    benefits: [
      "More independence at home",
      "Stronger hands for school tasks",
      "Parents with clear home programs",
      "Every gain celebrated — genuinely",
    ],
    whenToBegin: "From infancy is wonderful. Meaningful progress happens at every age.",
    faqs: [
      { q: "OT vs physiotherapy?", a: "Physio focuses on gross motor. OT on daily life — dressing, school, play." },
      { q: "Aquatic therapy?", a: "Often brilliant for low tone. Fully supervised." },
      { q: "Work with other specialists?", a: "Always. Your team should talk to each other." },
    ],
  },
  "feeding-oral-motor-challenges": {
    intro:
      "If your child eats only five foods — or mealtimes end in tears — you're not alone. Feeding is one of the hardest parenting battles. We go slowly, without force, building skills and trust bite by bite.",
    symptoms: [
      "Extremely limited diet",
      "Gags or refuses textures",
      "Mealtimes last forever or end in battles",
      "Distress with toothbrushing or utensils",
      "Growth concerns from selective eating",
    ],
    challenges: [
      "Worry about nutrition every single day",
      "Avoiding family meals and social eating",
      "Pressure from relatives to 'just make them eat'",
      "Exhaustion from the daily fight",
    ],
    therapyRole: [
      "Oral-motor assessment — playful, not clinical",
      "OPT exercises for strength and coordination",
      "Sensory steps toward new foods",
      "Responsive feeding coaching for parents",
      "Coordination with your paediatrician",
    ],
    benefits: [
      "Gradually wider food acceptance",
      "Calmer mealtimes",
      "Safer chewing and swallowing",
      "Parents with a plan — not guilt",
    ],
    whenToBegin: "When feeding affects health, growth, or family peace — don't wait years hoping they'll grow out of it.",
    faqs: [
      { q: "Will you force new foods?", a: "Never. Child-led, gradual, respectful exposure only." },
      { q: "Picky vs disorder?", a: "When nutrition or distress is significant, assessment helps." },
      { q: "Speech therapy too?", a: "OPT builds oral foundations. We coordinate with speech teams." },
    ],
  },
  "social-participation-challenges": {
    intro:
      "Your child might want friends but not know how to start. Or group noise sends them retreating. Social struggle is often sensory, motor, or regulation — not personality flaws. We build the skills behind connection.",
    symptoms: [
      "Prefers playing alone",
      "Difficulty with turn-taking or sharing",
      "Avoids parties and group activities",
      "Misreads personal space or social cues",
      "Anxious before playdates",
    ],
    challenges: [
      "Loneliness you feel for them",
      "Birthday party invitations that never come",
      "School group work is painful",
      "You cancel outings to avoid distress",
    ],
    therapyRole: [
      "Structured social play in clinic — safe practice",
      "Regulation tools for busy environments",
      "Turn-taking and joint attention through games",
      "Parent ideas for facilitating friendships",
      "School support for group participation",
    ],
    benefits: [
      "More willingness to join peers",
      "Successful play experiences to build on",
      "Confidence in groups",
      "You know how to support — not push",
    ],
    whenToBegin: "If social isolation is growing, early support prevents years of avoidance.",
    faqs: [
      { q: "Social skills groups?", a: "We work individually on foundations that make groups possible later." },
      { q: "Shy children?", a: "Yes. We expand comfort zones gently — never force." },
      { q: "Autism?", a: "Social support is central to our work with neurodivergent children." },
    ],
  },
  "fine-motor-challenges": {
    intro:
      "When buttons won't button and pencils won't cooperate, your child may avoid tasks altogether. Hand skills grow through play — not shame. We make the small muscles strong enough for daily life.",
    symptoms: [
      "Weak or awkward pencil grip",
      "Can't use scissors, zippers, or utensils well",
      "Avoids crafts, Lego, or drawing",
      "Hand tires quickly during writing",
      "Needs help with grooming older peers manage alone",
    ],
    challenges: [
      "School work suffers",
      "Dependency on you for dressing",
      "Child says 'I can't' before trying",
      "Art class becomes humiliating",
    ],
    therapyRole: [
      "Hand strengthening through fun activities",
      "Grip correction and adaptive tools",
      "Self-care practice — real buttons, real zips",
      "HWT when writing is affected",
      "Home games — not boring drills",
    ],
    benefits: [
      "Independence in dressing and grooming",
      "Willingness to write and create",
      "Classroom tools managed confidently",
      "Pride in 'I did it myself'",
    ],
    whenToBegin: "By 4–5, if hands clearly lag behind peers, targeted help prevents school struggles.",
    faqs: [
      { q: "Will it feel like homework?", a: "No. Play-based — children often ask to do activities." },
      { q: "Just handwriting?", a: "All hand skills. Writing is one piece." },
      { q: "Older children?", a: "Yes. Rapid progress is common with the right approach." },
    ],
  },
  "gross-motor-difficulties": {
    intro:
      "When your child sits out while others run, it's not lack of interest — often it's a body that hasn't found confidence yet. We build strength, balance, and bravery through play — and water when it helps.",
    symptoms: [
      "Frequent falling or unsteadiness",
      "Can't keep up in running games",
      "Avoids climbing, bikes, or sports",
      "Poor endurance — tires in minutes",
      "Awkward movement compared to peers",
    ],
    challenges: [
      "PE becomes traumatic",
      "Fitness and health concerns",
      "Left out of peer play",
      "Posture at desk suffers too",
    ],
    therapyRole: [
      "Strength and balance through obstacle play",
      "Aquatic therapy for fearless movement practice",
      "Ball skills in graded steps",
      "Home activities that feel like games",
      "PE accommodations at school",
    ],
    benefits: [
      "Joining playground games",
      "Physical confidence",
      "Better posture for sitting and writing",
      "A child who moves with less fear",
    ],
    whenToBegin: "Before avoidance becomes identity — 'I'm just not sporty.'",
    faqs: [
      { q: "Same as physiotherapy?", a: "Overlap exists. OT ties movement to daily participation." },
      { q: "Water therapy?", a: "Wonderful for many children. Safe and joyful." },
      { q: "After age 8?", a: "Yes. Consistent work still pays off." },
    ],
  },
};

export function applyParentVoiceToCondition(condition: ConditionContent): ConditionContent {
  const override = conditionVoiceOverrides[condition.slug];
  if (!override) return condition;
  return { ...condition, ...override };
}
