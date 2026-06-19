export type ExpertiseArea = {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  understanding: string;
  whatParentsMayNotice: string[];
  howThisHelps: string[];
  benefits: string[];
  details: { title: string; content: string }[];
  metaDescription: string;
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "looking-beyond-a-diagnosis",
    title: "Looking Beyond a Diagnosis",
    tagline: "Your child is more than a label on a report.",
    icon: "HeartHandshake",
    understanding:
      "A diagnosis can open doors — to school support, to understanding, to a sense of direction. But it can also feel heavy. Parents sometimes arrive carrying a folder of reports and a heart full of worry, wondering if that's all anyone will see. Here, we start with your child as a whole person: what they love, what frustrates them, what a good day looks like, and what makes them light up. The label may guide us. It never defines them.",
    whatParentsMayNotice: [
      "Relief when someone asks about strengths, not just struggles",
      "Therapy goals that match real life — mornings, meals, playtime — not just clinic tasks",
      "Less pressure to 'fix' everything at once",
      "Honest conversations without medical jargon",
      "A plan that grows with your child, not a rigid checklist",
      "Feeling like a partner in the process, not a passenger",
    ],
    howThisHelps: [
      "Builds therapy around what matters to your family right now",
      "Reduces shame — for children and parents alike",
      "Connects clinic work to home, school, and community",
      "Uses diagnosis as one piece of a bigger picture",
      "Celebrates small wins that parents actually see",
      "Creates space for children who don't fit neatly into boxes",
    ],
    benefits: [
      "A child who feels seen, not sorted",
      "Parents who leave with clarity — not more confusion",
      "Goals that feel doable on busy weekdays",
      "Therapy that respects your child's personality and pace",
      "Progress measured in daily life, not just test scores",
      "Trust that grows session by session",
    ],
    details: [
      {
        title: "What this looks like in practice",
        content:
          "We listen to your story first — before forms, before assessments. We watch how your child plays, responds, and connects. Then we build a plan that honours who they are today, while gently supporting who they're becoming.",
      },
      {
        title: "With or without a diagnosis",
        content:
          "You don't need a perfect label to start. Many families come with a gut feeling that something feels harder than it should. That's enough. If you have reports, we read them carefully — and then we look at the child in front of us.",
      },
      {
        title: "Working with schools and doctors",
        content:
          "When you're ready, we can share plain-language summaries with teachers or paediatricians. Always with your permission. Always focused on what helps your child participate — not on boxes to tick.",
      },
    ],
    metaDescription:
      "Pediatric OT in Kandivali that sees the whole child — not just a diagnosis. Warm, family-centred care with Dr. Sharuja Sarap for children in Mumbai.",
  },
  {
    slug: "brain-gym",
    title: "Brain Gym®",
    tagline: "Simple movement before seated work can change the whole mood.",
    icon: "Brain",
    understanding:
      "Brain Gym® uses short, purposeful movements to help the body and brain work together — before homework, before reading, before anything that usually ends in frustration. It's not exercise drills. It's a gentle wake-up for focus, coordination, and calm. Many children who fidget, rush, or shut down during seated tasks find that a few minutes of movement makes the next twenty minutes actually possible.",
    whatParentsMayNotice: [
      "Homework that used to take an hour now finishes sooner",
      "A child who can sit a little longer without melting down",
      "Better letter formation or fewer reversals over time",
      "Mornings that feel less chaotic before school",
      "Willingness to try reading or writing after a movement break",
      "A simple routine you can repeat at home — often under five minutes",
    ],
    howThisHelps: [
      "Activates both sides of the body for smoother learning",
      "Supports eye tracking and visual focus for reading",
      "Helps children feel alert without feeling wired",
      "Gives families a tool before difficult tasks — not after tears",
      "Builds body awareness that supports posture and handwriting",
      "Integrates easily with regular occupational therapy goals",
    ],
    benefits: [
      "Homework with fewer battles",
      "Better focus in short, realistic bursts",
      "A movement routine parents can actually stick to",
      "More confidence about school tasks",
      "Teachers who understand what helps your child settle",
      "Skills that carry from clinic to kitchen table",
    ],
    details: [
      {
        title: "Who it's for",
        content:
          "Children who can't sit still, reverse letters, lose focus quickly, or resist reading and writing — with or without ADHD or learning differences. Brain Gym® also supports children who simply need a bridge between active play and seated learning.",
      },
      {
        title: "What a session involves",
        content:
          "We find which movements help your child feel both alert and calm. You practise together in session, then take home a short routine. Playful, never forced — and always explained in plain language.",
      },
      {
        title: "Brain Gym at home and school",
        content:
          "The best results come from small, consistent use — before homework, before tests, or during long car rides before activities. We share tips for teachers when families want classroom support.",
      },
    ],
    metaDescription:
      "Brain Gym® for children in Mumbai & Kandivali. Movement-based support for focus, learning readiness, and calmer homework with Dr. Sharuja Sarap.",
  },
  {
    slug: "double-doodle-play",
    title: "Double Doodle Play®",
    tagline: "Drawing with both hands — and both sides of the brain.",
    icon: "PenLine",
    understanding:
      "Double Doodle Play® is a joyful Brain Gym® activity where children draw simultaneously with both hands. It looks like art. It feels like play. Underneath, it gently supports bilateral coordination, relaxed grip, eye teaming, and the kind of whole-brain integration that reading and writing depend on. No perfection required — scribbles welcome.",
    whatParentsMayNotice: [
      "A child who usually avoids paper tasks actually enjoying drawing",
      "Looser shoulders and less white-knuckle pencil grip",
      "Smoother eye movement when reading or copying from the board",
      "More willingness to try writing after doodling warm-ups",
      "Calmer mood during creative activities",
      "Surprising pride in symmetrical or colourful designs",
    ],
    howThisHelps: [
      "Encourages both hemispheres of the brain to communicate",
      "Reduces tension in hands, shoulders, and jaw during fine motor work",
      "Supports visual-motor skills needed for handwriting",
      "Offers a low-pressure entry point for children who fear 'getting it wrong'",
      "Builds rhythm and flow that transfers to letter formation",
      "Fits naturally before homework or handwriting sessions",
    ],
    benefits: [
      "More relaxed approach to paper-and-pencil tasks",
      "Better bilateral coordination for daily activities",
      "Improved visual tracking for reading and copying",
      "A fun home activity that doesn't feel like homework",
      "Confidence through creative success, not drill sheets",
      "Gentle preparation for Handwriting Without Tears® work",
    ],
    details: [
      {
        title: "What Double Doodle Play looks like",
        content:
          "Using chalk, crayons, or markers, your child draws mirror-image shapes, patterns, or free scribbles with both hands at once. We start simple — hearts, loops, rainbows — and follow your child's interest. Laughter is part of the plan.",
      },
      {
        title: "Who benefits most",
        content:
          "Children with messy handwriting, reading fatigue, tight grip, coordination challenges, or anxiety around written work. Also wonderful for children who learn best through movement and creativity rather than repetition.",
      },
      {
        title: "Using it at home",
        content:
          "A few minutes on a chalkboard, easel, or large paper before seated homework can shift the whole evening. We show you easy setups that fit small Mumbai flats — no fancy equipment needed.",
      },
    ],
    metaDescription:
      "Double Doodle Play® in Kandivali — playful bilateral drawing that supports handwriting, reading, and coordination. Pediatric OT with Dr. Sharuja Sarap.",
  },
  {
    slug: "sensory-integration",
    title: "Sensory Integration",
    tagline: "When the world feels too loud, too scratchy, or too much.",
    icon: "Sparkles",
    understanding:
      "Sensory integration is about how the brain receives and responds to everyday input — touch, sound, movement, taste, and sight. Some children seek more sensation. Some avoid it. Some swing between both in the same afternoon. Neither is misbehaviour. It's a nervous system doing its best. In our sensory-rich gym, we help children explore, regulate, and build skills for calmer participation at home, school, and out in Mumbai's busy world.",
    whatParentsMayNotice: [
      "Meltdowns in malls, classrooms, or birthday parties",
      "Refusal of certain clothes, foods, or haircuts",
      "Constant movement, crashing, or fidgeting",
      "Extreme reactions to sounds, lights, or textures",
      "Difficulty transitioning between activities",
      "Exhaustion after social outings or school days",
    ],
    howThisHelps: [
      "Provides safe, guided sensory experiences in a equipped gym",
      "Teaches the nervous system to process input more efficiently",
      "Builds self-regulation tools children can use outside clinic",
      "Reduces fight-or-flight responses to everyday triggers",
      "Supports better sleep, eating, and emotional recovery",
      "Gives parents a sensory 'language' for understanding behaviour",
    ],
    benefits: [
      "Calmer responses to busy environments",
      "More willingness to try new textures, foods, or activities",
      "Better focus once the body feels regulated",
      "Fewer meltdowns during transitions",
      "Improved participation in family outings and school",
      "A personalised sensory plan for home and classroom",
    ],
    details: [
      {
        title: "Our sensory gym",
        content:
          "Swings, climbing structures, textured materials, and movement tools — all used playfully with therapist guidance. Activities are chosen for your child's unique sensory profile, not a one-size-fits-all circuit.",
      },
      {
        title: "Ayres-informed approach",
        content:
          "Dr. Sharuja's work is informed by Ayres Sensory Integration® principles — evidence-respected methods that address how sensory processing affects learning, behaviour, and daily life.",
      },
      {
        title: "Sensory diets for home",
        content:
          "We design simple, realistic sensory activities for mornings, school, and bedtime — so progress continues between sessions. Short, practical, and tailored to your family's routine.",
      },
    ],
    metaDescription:
      "Sensory integration therapy in Mumbai & Kandivali for children who struggle with noise, texture, or overwhelm. Warm OT with Dr. Sharuja Sarap.",
  },
  {
    slug: "rmti",
    title: "RMTI®",
    tagline: "Gentle rhythmic movement for a steadier body and mind.",
    icon: "Target",
    understanding:
      "Rhythmic Movement Training Integration (RMTI®) uses soothing, innate movements — like those babies make naturally — to support how the brain and body organise themselves. Some children carry early reflex patterns longer than expected, which can show up as poor posture, clumsiness, anxiety, or difficulty sitting still. RMTI is never forceful. It's rhythmic, calming, and often done with a parent close by.",
    whatParentsMayNotice: [
      "A child who slumps, fidgets, or tires quickly during seated work",
      "Clumsiness that doesn't match their intelligence",
      "Big emotional reactions to small changes",
      "Difficulty with reading, writing, or copying from the board",
      "Restless sleep or trouble settling at bedtime",
      "A sense that something 'foundational' still needs support",
    ],
    howThisHelps: [
      "Supports integration of early movement patterns",
      "Improves postural stability for desk work and play",
      "Calms the nervous system through rhythmic input",
      "Builds foundations for attention and learning readiness",
      "Offers simple home practice — often five to ten minutes",
      "Complements sensory integration and Brain Gym® work",
    ],
    benefits: [
      "Calmer transitions between activities",
      "Better sitting tolerance for school and homework",
      "Improved balance and coordination over time",
      "Less anxiety before new situations",
      "Stronger base for reading and writing skills",
      "Parents who feel they have a gentle tool that works",
    ],
    details: [
      {
        title: "What RMTI sessions look like",
        content:
          "Slow, rocking, rolling, or crawling patterns practised on a mat — always adapted to your child's age and comfort. We explain what we're doing and why, so home practice feels natural, not mysterious.",
      },
      {
        title: "From infancy through school age",
        content:
          "Movements are gentle enough for young children and adapted thoughtfully for older kids who need postural and reflex support. Safety and trust come first.",
      },
      {
        title: "RMTI and other therapies",
        content:
          "RMTI often works alongside occupational therapy, Brain Gym®, and handwriting support. Dr. Sharuja weaves approaches together rather than sending you to five different places.",
      },
    ],
    metaDescription:
      "RMTI® rhythmic movement training for children in Kandivali. Gentle reflex integration for posture, focus, and calm with Dr. Sharuja Sarap.",
  },
  {
    slug: "handwriting-without-tears",
    title: "Handwriting Without Tears®",
    tagline: "Writing that works for school — without the daily battles.",
    icon: "PenLine",
    understanding:
      "Handwriting Without Tears® (HWT) is a step-by-step, multisensory programme that teaches letter formation through play — wood pieces, wet-dry-try, music, and movement — not endless lined-paper copying. Messy writing is rarely laziness. Often it's weak grip, poor posture, visual-motor gaps, or a body that isn't ready to sit and write. HWT meets children where they are and builds confidence one letter at a time.",
    whatParentsMayNotice: [
      "Refusal of written homework or journal tasks",
      "Complaints of sore hands or tired arms",
      "Writing so messy that teachers can't read it",
      "Incomplete tests because writing takes too long",
      "Embarrassment about notebooks or board work",
      "A bright child whose marks don't reflect what they know",
    ],
    howThisHelps: [
      "Teaches letters in a developmental, logical sequence",
      "Uses multisensory tools before pencil-on-paper pressure",
      "Addresses grip, posture, and visual-motor skills together",
      "Builds speed and endurance gradually — not overnight",
      "Reduces shame through structured, achievable steps",
      "Provides clear home practice that fits busy evenings",
    ],
    benefits: [
      "Legible writing teachers can actually read",
      "Less hand pain and fatigue during exams",
      "Willingness to attempt written tasks",
      "Faster completion during timed school work",
      "Better desk setup and habits at home",
      "A child who doesn't hide their notebook anymore",
    ],
    details: [
      {
        title: "Certified HWT approach",
        content:
          "Dr. Sharuja is certified in Handwriting Without Tears® and uses the full structured programme — assessment, intervention, and home carryover — adapted to each child's needs.",
      },
      {
        title: "More than handwriting practice",
        content:
          "We look at what's underneath — sensory processing, core strength, visual tracking, attention. Handwriting improves when the whole system is supported, not when a child is told to 'write neater.'",
      },
      {
        title: "School collaboration",
        content:
          "We share practical classroom strategies and can speak with teachers when you request it — so support continues beyond our Kandivali clinic.",
      },
    ],
    metaDescription:
      "Handwriting Without Tears® in Mumbai & Kandivali. Multisensory handwriting support for children who struggle with legibility, speed, or pain.",
  },
  {
    slug: "oral-placement-therapy",
    title: "Oral Placement Therapy®",
    tagline: "When mealtimes feel stressful — we start with the mouth, gently.",
    icon: "Utensils",
    understanding:
      "Oral Placement Therapy® (OPT) supports the strength, coordination, and sensory skills behind eating, drinking, and speech readiness. Picky eating, gagging, bottle dependence, or refusing textures aren't always 'behaviour problems.' Often the mouth needs patient, playful preparation. We go at your child's pace — no forcing, no shame — and work alongside broader OT goals when feeding affects the whole family's day.",
    whatParentsMayNotice: [
      "A child who eats only a handful of familiar foods",
      "Gagging, coughing, or choking on certain textures",
      "Refusal of cups, straws, or chewy foods",
      "Mealtimes that end in tears for everyone",
      "Difficulty with articulation or mouth coordination",
      "Anxiety around birthday parties, tiffins, or restaurant outings",
    ],
    howThisHelps: [
      "Builds oral-motor strength through targeted, playful exercises",
      "Gradually expands tolerance for new textures and temperatures",
      "Supports safer chewing, swallowing, and cup drinking",
      "Reduces mealtime pressure with practical home strategies",
      "Addresses sensory aversions without battles at the table",
      "Coordinates with speech therapists when families need both",
    ],
    benefits: [
      "More foods accepted over time — at your child's pace",
      "Safer, more comfortable eating and drinking",
      "Less stress at breakfast, lunch, and dinner",
      "Better oral skills for speech readiness",
      "Mealtime routines that feel manageable again",
      "Parents who stop dreading every meal",
    ],
    details: [
      {
        title: "Playful, not clinical",
        content:
          "OPT exercises use horns, straws, bubbles, and games — never scary tools or forced bites. Sessions feel like play. Progress is measured in small, real steps at home.",
      },
      {
        title: "Picky eating vs. feeding difficulties",
        content:
          "We assess whether challenges are sensory, motor, or both — and build a plan accordingly. Not every picky eater needs OPT, but many families find missing pieces they couldn't see before.",
      },
      {
        title: "Family-centred mealtime support",
        content:
          "You get honest guidance on pressure-free introduction of foods, seating, timing, and routines — because progress happens at the dining table as much as in clinic.",
      },
    ],
    metaDescription:
      "Oral Placement Therapy® for picky eaters and feeding challenges in Kandivali. Gentle pediatric OT feeding support with Dr. Sharuja Sarap.",
  },
  {
    slug: "aquatic-therapy",
    title: "Aquatic Therapy",
    tagline: "Where movement feels lighter — and many children finally relax.",
    icon: "Waves",
    understanding:
      "Aquatic therapy brings OT goals into warm water, where gravity softens and movement often feels possible for the first time. Children who avoid playgrounds, tire quickly on land, or carry anxiety about physical tasks frequently shine in the pool. It's supervised, playful, and tailored — never a swim lesson, always therapeutic movement with purpose and joy.",
    whatParentsMayNotice: [
      "Avoidance of sports, climbing, or playground play",
      "Low muscle tone or quick fatigue during physical tasks",
      "A child who comes alive near water but struggles on land",
      "Balance and coordination that don't match their age",
      "Sensory seeking or overload that movement on land can't satisfy",
      "Fear or hesitation around physical activities at school",
    ],
    howThisHelps: [
      "Builds strength and endurance with less joint stress",
      "Improves balance and body awareness through buoyancy",
      "Provides calming sensory input for dysregulated nervous systems",
      "Boosts confidence before trying land-based activities",
      "Supports motor planning in a forgiving environment",
      "Makes therapy feel like play — which keeps children engaged",
    ],
    benefits: [
      "More willingness to move and participate in play",
      "Better balance and coordination outside the pool",
      "Calmer mood and improved sleep after sessions",
      "Strength that shows up on stairs, sports, and school PE",
      "Less fear around physical challenges",
      "Joy — which matters more than most people realise",
    ],
    details: [
      {
        title: "Certified aquatherapy",
        content:
          "Dr. Sharuja holds IATF (International Aquatic Therapy Foundation) certification and integrates water-based work with land OT for comprehensive progress.",
      },
      {
        title: "No swimming required",
        content:
          "Sessions are fully supervised and adapted to each child's comfort level. We meet children at the pool steps if needed — safety and trust always come first.",
      },
      {
        title: "Combining water and land",
        content:
          "Most families benefit from a mix of aquatic and clinic-based sessions. We discuss what ratio fits your child's goals, schedule, and energy.",
      },
    ],
    metaDescription:
      "Pediatric aquatic therapy in Mumbai for strength, balance, and sensory calm. Certified water-based OT with Dr. Sharuja Sarap in Kandivali.",
  },
  {
    slug: "piastm",
    title: "PIASTM",
    tagline: "Gentle hands-on relief when tightness gets in the way.",
    icon: "Hand",
    understanding:
      "PIASTM — Pediatric Instrument Assisted Soft Tissue Mobilization — uses child-appropriate tools and gentle pressure to ease muscle tension that makes movement, writing, or play uncomfortable. Some children carry tightness in shoulders, neck, or hands without anyone noticing until homework hurts or sports feel impossible. It's woven into playful therapy sessions — never cold, never rough, always within trust.",
    whatParentsMayNotice: [
      "Complaints of sore shoulders or hands during writing",
      "Slumped posture that doesn't improve with reminders",
      "Quick fatigue during fine motor or physical tasks",
      "A body that seems 'stuck' or stiff without a clear injury",
      "Tension that blocks progress in other therapy goals",
      "Discomfort after sports, dance, or long school days",
    ],
    howThisHelps: [
      "Releases soft tissue restrictions that limit movement",
      "Improves range of motion for daily activities",
      "Reduces pain during handwriting and self-care",
      "Supports better postural alignment at desk and play",
      "Complements strengthening and motor skill work",
      "Offers relief within sessions children already know and trust",
    ],
    benefits: [
      "Less pain during homework and classroom tasks",
      "More comfortable movement for play and sports",
      "Improved posture without constant nagging",
      "Better endurance for fine motor activities",
      "A body that feels looser and more capable",
      "Progress that unlocks other OT goals faster",
    ],
    details: [
      {
        title: "Gentle by design",
        content:
          "Pediatric PIASTM uses light pressure suited to children's tissues and tolerance. We watch comfort every moment and stop or adjust immediately if needed.",
      },
      {
        title: "Part of a bigger plan",
        content:
          "Soft tissue work supports — not replaces — strengthening, sensory integration, and skill building. It's one tool in a thoughtful, individualised programme.",
      },
      {
        title: "Home stretching support",
        content:
          "We teach simple stretches and posture habits for homework and screen time — realistic for busy Mumbai families, not twenty-minute routines nobody keeps.",
      },
    ],
    metaDescription:
      "PIASTM soft tissue therapy for children in Kandivali. Gentle relief for muscle tension, posture, and writing discomfort with Dr. Sharuja Sarap.",
  },
  {
    slug: "kinesio-taping",
    title: "Kinesio Taping®",
    tagline: "Subtle support your child can wear during the activities that matter.",
    icon: "Award",
    understanding:
      "Kinesio Taping® uses elastic therapeutic tape to give the body gentle feedback — for posture, writing, sports, or simply sitting through a school day. It doesn't restrict movement like a brace. It reminds muscles and joints how to align during real life: cricket practice, carrying a school bag, or staying upright at a desk. Dr. Sharuja applies it safely for children and teaches families how to care for it.",
    whatParentsMayNotice: [
      "Slumping or leaning during homework and meals",
      "Fatigue during PE, sports, or playground play",
      "A child who doesn't know where their body is in space",
      "Wrist or hand strain during long writing tasks",
      "Need for extra sensory or postural support outside clinic",
      "Confidence dips during physical activities with peers",
    ],
    howThisHelps: [
      "Provides proprioceptive input for better body awareness",
      "Supports postural muscles during functional tasks",
      "Offers subtle stability for sports and play",
      "Complements ongoing OT without replacing active therapy",
      "Can be worn during school — discreet and comfortable",
      "Adjusted as goals and seasons change",
    ],
    benefits: [
      "Better postural awareness during desk work",
      "More stable, confident movement during play",
      "Support during sports without feeling 'medical'",
      "Less fatigue during writing and carrying bags",
      "A bridge between clinic gains and daily life",
      "Hypoallergenic options when skin sensitivity is a concern",
    ],
    details: [
      {
        title: "Applied with purpose",
        content:
          "Tape placement follows a functional assessment — we tape for specific goals like shoulder alignment, wrist support, or core awareness, not as a generic fix.",
      },
      {
        title: "Wear and care",
        content:
          "Tape typically stays on three to five days. We explain skin care, when to remove it, and what to watch for — so parents feel confident, not nervous.",
      },
      {
        title: "KT Level 1–3 certified",
        content:
          "Dr. Sharuja is certified across Kinesio Taping levels and selects pediatric-appropriate techniques for each child and activity.",
      },
    ],
    metaDescription:
      "Kinesio Taping® for children in Mumbai & Kandivali. Postural and movement support for school, sports, and daily activities with Dr. Sharuja Sarap.",
  },
  {
    slug: "mnri",
    title: "MNRI®",
    tagline: "When the nervous system needs a stronger foundation first.",
    icon: "Brain",
    understanding:
      "Masgutova Neurosensorimotor Reflex Integration (MNRI®) addresses early reflex patterns that sometimes remain active longer than expected — affecting posture, coordination, emotional regulation, and learning readiness. If skills feel 'almost there' but never quite click, the foundation may need attention first. MNRI uses specialised, respectful protocols within warm, playful sessions — never forceful, always paced to your child.",
    whatParentsMayNotice: [
      "Coordination that improves briefly then slips back",
      "Big emotional reactions disproportionate to the situation",
      "Difficulty with bike riding, swimming, or complex motor tasks",
      "Learning challenges that haven't shifted with tutoring alone",
      "Overwhelm in busy sensory environments",
      "Slow recovery after upsets, transitions, or surprises",
    ],
    howThisHelps: [
      "Integrates retained reflexes that block higher-level skills",
      "Strengthens nervous system regulation and resilience",
      "Supports motor planning for complex physical tasks",
      "Builds readiness for reading, writing, and classroom demands",
      "Includes trauma-sensitive protocols when history requires it",
      "Offers simple home reflex activities for daily consistency",
    ],
    benefits: [
      "Steadier emotional responses over time",
      "Smoother motor skills for play and self-care",
      "Better readiness for school expectations",
      "Less overwhelm in malls, classrooms, and parties",
      "A child who recovers faster from difficult moments",
      "Parents who finally see a path that makes sense",
    ],
    details: [
      {
        title: "What are primitive reflexes?",
        content:
          "Automatic movement patterns present in infancy — like rooting or grasping — that should integrate as the brain matures. When they linger, they can affect how a child sits, writes, runs, or handles stress.",
      },
      {
        title: "MNRI vs. RMTI",
        content:
          "Both address reflex integration through different methods. Dr. Sharuja selects the approach — or combination — that fits your child's profile after careful assessment.",
      },
      {
        title: "Gradual, cumulative progress",
        content:
          "Changes often start small — an easier morning, a calmer transition, homework without tears. We celebrate those signs and adjust the programme as foundations strengthen.",
      },
    ],
    metaDescription:
      "MNRI® reflex integration for children in Kandivali. Foundational nervous system support for movement, regulation, and learning with Dr. Sharuja Sarap.",
  },
  {
    slug: "kdct",
    title: "KDCT",
    tagline: "Very gentle cupping — when muscles hold too much tension.",
    icon: "HeartHandshake",
    understanding:
      "Kinesio Dry Cupping Therapy (KDCT) adapts traditional cupping for children using very gentle suction to ease muscle tightness, support circulation, and help bodies recover. Active children sometimes carry tension in shoulders, backs, or legs that slows progress elsewhere. KDCT is always brief, explained clearly, and delivered within sessions your child already trusts — never scary, never standalone.",
    whatParentsMayNotice: [
      "Persistent tightness in shoulders, back, or legs",
      "Soreness after sports, dance, or long school days",
      "Tension that seems to block handwriting or posture goals",
      "Recovery that takes longer than peers after activity",
      "Discomfort sitting for exams or lengthy homework",
      "A child who feels 'heavy' or stiff in their body",
    ],
    howThisHelps: [
      "Eases muscle tightness with gentle, controlled suction",
      "Supports tissue mobility alongside stretching work",
      "Helps active children recover between physical demands",
      "Complements strengthening and motor training goals",
      "Offers relief within a familiar therapeutic relationship",
      "Explains marks, comfort, and aftercare honestly to families",
    ],
    benefits: [
      "Looser, more comfortable movement",
      "Better recovery after sports and long school days",
      "Support for posture and writing endurance goals",
      "A technique that feels manageable — not hospital-like",
      "Progress that carries into daily activities",
      "Integration with a wider OT plan, not a quick fix",
    ],
    details: [
      {
        title: "Gentle pediatric technique",
        content:
          "KDCT for children uses light suction and short application times. We check comfort throughout and never proceed if a child is anxious or unwilling.",
      },
      {
        title: "About cupping marks",
        content:
          "Mild circular marks may appear temporarily — this is normal and fades within days. We explain what to expect before the first application so there are no surprises.",
      },
      {
        title: "Aftercare at home",
        content:
          "Keep cupped areas warm, avoid strenuous activity immediately after, and report any skin sensitivity. Simple guidance that fits into ordinary evenings.",
      },
    ],
    metaDescription:
      "KDCT gentle dry cupping for children in Kandivali. Pediatric muscle tension relief alongside OT with Dr. Sharuja Sarap, Mumbai.",
  },
];

export function getExpertise(slug: string): ExpertiseArea | undefined {
  return expertiseAreas.find((area) => area.slug === slug);
}
