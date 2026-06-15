export type SeoExpansionSection = {
  heading: string;
  paragraphs: string[];
};

export type MythFact = { myth: string; fact: string };

export type SeoExpansion = {
  sections: SeoExpansionSection[];
  mythsAndFacts?: MythFact[];
  homeStrategies?: string[];
};

export type SeoPageType = "service" | "condition";

const serviceExpansions: Record<string, SeoExpansion> = {
  "occupational-therapy": {
    sections: [
      {
        heading: "Why Families in Mumbai Choose Pediatric OT",
        paragraphs: [
          "Pediatric occupational therapy sits at the heart of childhood development. Unlike adult OT, which often focuses on injury recovery, pediatric OT addresses the foundational skills children need to explore, learn, connect, and care for themselves. In a city like Mumbai — where school pressure begins early, commutes are long, and sensory environments are intense — many children struggle with skills that peers seem to master effortlessly.",
          "Parents in Kandivali West, Borivali, Malad, Goregaon, and Andheri regularly seek OT when daily life feels harder than it should: mornings that end in tears, homework battles that last hours, birthday parties avoided, or teachers flagging concerns about attention and handwriting. These are not parenting failures. They are signals that a child's nervous system, motor systems, or sensory processing may need structured, compassionate support.",
          "Dr. Sharuja Sarap has dedicated 18+ years exclusively to pediatric practice. Her clinic at Manhar Medical and Jeet Child Development Centre combines a fully equipped sensory gym, private assessment spaces, and specialized tools for fine motor, gross motor, and sensory integration work. Families appreciate the warmth of the environment — therapy feels like play, not clinical pressure.",
          "Occupational therapy is not a quick fix. Meaningful change typically unfolds over weeks and months of consistent sessions paired with home strategies. What families gain is practical progress: a child who can tolerate the school uniform, sit through a meal, hold a pencil without pain, or join a game on the playground. These wins compound into greater independence and family peace.",
        ],
      },
      {
        heading: "What Happens in Your First Visit",
        paragraphs: [
          "Your first appointment begins with a parent conversation. Dr. Sarap listens to your concerns, reviews any school or medical reports, and asks about daily routines — sleep, meals, play, screen time, and transitions. This context shapes every decision that follows.",
          "The child-friendly assessment uses play-based observation rather than formal testing pressure. Your child might climb, swing, draw, cut, dress dolls, or navigate obstacle courses while the therapist notes sensory responses, motor quality, attention span, and emotional regulation. Parents are welcome to stay and often gain immediate insight from what they observe.",
          "Within the first or second session, you receive a clear summary of findings and a proposed plan. Goals are written in plain language — not clinical jargon — and reviewed with you before therapy begins. Home activities are always manageable: 10–15 minutes daily, integrated into existing routines rather than added as another chore.",
          "School coordination is offered when families want it. Dr. Sarap can suggest classroom accommodations, sensory breaks, or seating adjustments that help your child succeed without stigma. Many Mumbai schools are receptive when recommendations are specific and evidence-based.",
        ],
      },
      {
        heading: "How Sessions Are Structured",
        paragraphs: [
          "A typical OT session runs 45–60 minutes. The first segment often includes sensory-based warm-up — swinging, jumping, deep pressure, or tactile play — to help your child's nervous system reach an optimal state for learning. This is especially important for children who arrive overstimulated from school or under-stimulated from long sedentary periods.",
          "The core of each session targets agreed goals: fine motor work for handwriting readiness, gross motor circuits for coordination, self-care practice for dressing and feeding, or social play for turn-taking and joint attention. Activities are chosen for your child's interests — a child who loves animals might practice cutting by preparing feed for a toy farm; a child who loves vehicles might build tracks that require bilateral coordination.",
          "Sessions close with calming or organizing activities and a brief parent check-in. You leave knowing what was worked on, what to practice at home, and what to watch for before the next visit. Progress notes are maintained and shared at regular review points.",
          "Frequency is typically one to two sessions per week, depending on severity and family capacity. Intensive blocks may be recommended before school transitions or after long breaks. Dr. Sarap adjusts the plan as your child grows — OT for a three-year-old looks very different from OT for a twelve-year-old.",
        ],
      },
      {
        heading: "Occupational Therapy and School Success",
        paragraphs: [
          "School is where developmental challenges become most visible. Illegible handwriting, inability to copy from the board, fatigue during exams, difficulty sitting on the floor for assembly, and social withdrawal during group work are common referral triggers. OT addresses the underlying motor and sensory systems that make classroom participation possible.",
          "Handwriting difficulties often reflect weak postural control, poor visual-motor integration, or sensory defensiveness in the hands — not laziness. Attention challenges may stem from an under-responsive vestibular system that craves movement, or an over-responsive auditory system that cannot filter classroom noise. OT identifies the root pattern and builds targeted interventions.",
          "For children preparing for Grade 1, OT supports school readiness: pencil grip, scissor skills, following two-step instructions, toileting independence, and tolerance of uniform textures. Starting before formal schooling prevents the confidence damage that comes from falling behind in the first term.",
          "Dr. Sarap's certifications in Handwriting Without Tears, Brain Gym, and sensory integration mean school-related goals can be addressed holistically within one clinic rather than through fragmented referrals across the city.",
        ],
      },
    ],
    mythsAndFacts: [
      { myth: "OT is only for children with diagnosed disabilities.", fact: "Many children benefit from OT based on functional challenges alone — no diagnosis required." },
      { myth: "More practice at home will fix handwriting.", fact: "Without addressing underlying motor and sensory foundations, extra copying often increases frustration." },
      { myth: "Sensory issues are just behavioural.", fact: "Sensory processing differences are neurological. Strategies must match the child's sensory profile." },
      { myth: "Therapy should show results in two weeks.", fact: "Neurological and motor change takes consistent work over months. Small wins matter." },
      { myth: "OT will cure autism or ADHD.", fact: "OT builds functional skills for daily life. It does not remove neurodevelopmental differences." },
      { myth: "Older children are too old for OT.", fact: "Dr. Sarap works with children up to 14 years. Older children benefit from executive function and self-care support." },
    ],
    homeStrategies: [
      "Create a visual morning routine chart to reduce transition stress.",
      "Offer movement breaks before homework — jumping, wall pushes, or animal walks.",
      "Use a quiet, clutter-free homework corner with proper desk height.",
      "Introduce new textures gradually during meals — never force.",
      "Celebrate effort, not perfection, during self-care practice.",
    ],
  },
  "aquatic-therapy": {
    sections: [
      {
        heading: "Why Water Changes Everything for Pediatric Therapy",
        paragraphs: [
          "Aquatic therapy harnesses properties of water that simply cannot be replicated on land. Buoyancy supports body weight, allowing children with low muscle tone or coordination difficulties to move in ways gravity normally prevents. Hydrostatic pressure delivers calming deep-touch input that helps sensory-seeking and sensory-avoidant children alike find regulation. Warmth relaxes tight muscles and reduces pain during movement.",
          "Many children who resist land-based physiotherapy or OT engage eagerly in water. The playfulness of aquatic sessions — splashing, floating, reaching for toys, walking on underwater treadmills — lowers anxiety and builds intrinsic motivation. For families in Mumbai where outdoor play space is limited and summer heat is intense, aquatic therapy offers a year-round movement opportunity in a controlled, therapeutic setting.",
          "Dr. Sharuja Sarap holds IATF (International Aquatic Therapy Foundation) certification and integrates aquatic sessions with land-based OT. This dual approach ensures skills built in water transfer to daily function — climbing stairs, playground participation, classroom sitting, and sports engagement.",
          "Aquatic therapy is particularly valuable for children with cerebral palsy, hypotonia, balance difficulties, sensory regulation challenges, and fear of physical activity. It is not swimming lessons — though water confidence is a welcome side benefit. Every activity is selected for therapeutic purpose and fully supervised.",
        ],
      },
      {
        heading: "Safety and Session Structure",
        paragraphs: [
          "Safety is non-negotiable. Sessions are one-on-one or small-group with constant therapist supervision. Water temperature, depth, and entry methods are adapted to each child's comfort and medical status. Parents receive clear guidance on what to bring, what to expect, and how to support water confidence between sessions.",
          "A typical aquatic session begins with poolside warm-up and entry ritual — helping anxious children predict what comes next. In-water activities progress from supported floating and walking to reaching, kicking, breath control games, and resistance exercises using pool equipment. Sessions close with calming floating or gentle exit to avoid overstimulation.",
          "Land-based carryover is discussed at every session end. A child who practised bilateral reaching in water might practise similar patterns with therapy balls on land. Parents learn which home activities complement aquatic work without requiring pool access.",
          "Medical clearance is obtained when needed. Children with seizure history, open wounds, or specific cardiac conditions require physician approval before aquatic therapy begins.",
        ],
      },
      {
        heading: "Aquatic Therapy in the Mumbai Context",
        paragraphs: [
          "Accessing quality aquatic therapy in Mumbai can be challenging. Few pediatric OT clinics combine land and water programs under one roof with certified practitioners. Families in Kandivali West benefit from not needing separate referrals across the city — assessment, land OT, and aquatic sessions are coordinated by one clinician who knows the child's full profile.",
          "Monsoon season and air quality often limit outdoor physical activity for Mumbai children. Aquatic therapy provides consistent, climate-controlled movement regardless of weather. For children who spend long hours in tuition and screen-based learning, water sessions offer essential proprioceptive and vestibular input.",
          "Travel from Borivali, Malad, and Goregaon to Kandivali West is manageable for most families, and many parents report that the improvement in their child's physical confidence justifies the commute. Session scheduling accommodates school hours with morning and afternoon slots.",
        ],
      },
    ],
    mythsAndFacts: [
      { myth: "My child must know how to swim.", fact: "Aquatic therapy does not require swimming ability. Activities are adapted to each child's comfort level." },
      { myth: "Aquatic therapy replaces land OT.", fact: "Water and land sessions complement each other. Land-based work ensures functional carryover." },
      { myth: "Pool water will worsen skin conditions.", fact: "Medical history is reviewed before starting. Many children with eczema tolerate therapeutic pools with proper care." },
      { myth: "Aquatic therapy is only for physical disabilities.", fact: "Sensory regulation, anxiety around movement, and low tone also respond well to water-based intervention." },
    ],
  },
  "brain-gym": {
    sections: [
      {
        heading: "Movement as a Foundation for Learning",
        paragraphs: [
          "Brain Gym® is a structured movement program designed to activate neural pathways that support attention, reading, writing, coordination, and emotional balance. Developed from educational kinesiology, it rests on a simple insight: the body and brain are not separate systems. When the body is poorly integrated — when left and right sides do not communicate smoothly, when eyes do not track across midline, when postural reflexes remain immature — learning suffers regardless of intelligence or effort.",
          "Dr. Sharuja Sarap is a Certified Brain Gym Instructor and Practitioner. She integrates specific Brain Gym movements into pediatric OT sessions and teaches families short routines to use before homework, exams, and challenging transitions. For children with ADHD, learning difficulties, and coordination challenges common in Mumbai's academically demanding school culture, these tools offer practical relief without medication.",
          "Brain Gym is not exercise for fitness. Movements are precise, brief, and purposeful — often taking less than five minutes. A child might do cross-crawl marching, lazy eights for eye tracking, or hook-ups for calming before a test. The goal is neurological readiness, not physical exhaustion.",
        ],
      },
      {
        heading: "Who Benefits Most from Brain Gym",
        paragraphs: [
          "Children who struggle to start homework, lose focus within minutes, reverse letters and numbers beyond age seven, or become emotionally flooded during academic tasks are strong candidates. Brain Gym also supports children with dyspraxia, visual-motor integration difficulties, and retained primitive reflexes that affect posture and coordination.",
          "Teachers in Mumbai schools increasingly notice children who cannot sit still, copy from the board, or complete written work in time. Brain Gym gives these children bodily tools they can use independently — in the classroom, at the tuition desk, or before cricket practice. Empowerment matters: children learn that they can shift their own state with movement.",
          "Brain Gym works best as part of a broader OT plan. Sensory regulation, fine motor foundations, and environmental modifications are addressed alongside movement-based learning readiness. Dr. Sarap assesses which Brain Gym activities match each child's profile rather than applying a generic sequence.",
        ],
      },
      {
        heading: "What a Brain Gym-Informed Session Looks Like",
        paragraphs: [
          "Sessions begin with observation of postural tone, midline crossing ability, eye tracking, and attention baseline. The therapist selects four to six Brain Gym movements targeted to the child's needs — perhaps activities that integrate the vestibular system, activate bilateral coordination, or calm an over-aroused nervous system.",
          "Children practise movements with coaching on quality rather than speed. Parents observe and learn the sequence for home use. A written or illustrated home card is provided for consistency. Schools may receive a one-page summary of recommended classroom movement breaks if parents request it.",
          "Progress is tracked through functional measures: homework duration, teacher reports, reading fluency, and the child's own sense of readiness before tasks. Brain Gym is not a standalone miracle — but families consistently report that short movement routines reduce homework battles and morning school stress.",
        ],
      },
      {
        heading: "Brain Gym and Mumbai School Pressure",
        paragraphs: [
          "Mumbai's competitive academic environment places enormous demand on children's executive function long before they are developmentally ready. Tuition culture, early testing, and large class sizes mean children with attention and coordination differences fall behind quickly — often labelled as lazy or unmotivated when the real issue is neurological readiness.",
          "Brain Gym offers a non-pharmaceutical, child-friendly complement to other supports. It does not replace paediatric assessment for ADHD or learning disorders. It gives children active strategies they can use daily while other interventions proceed.",
          "Dr. Sarap's dual expertise in Brain Gym and sensory-integrative OT means families do not need to choose between movement for learning and movement for regulation — both are woven into one coherent plan at Thrive With Sharuja.",
        ],
      },
    ],
    mythsAndFacts: [
      { myth: "Brain Gym is just stretching.", fact: "Movements are selected for specific neurological purposes — midline integration, eye tracking, or calming." },
      { myth: "It only helps hyperactive children.", fact: "Children with slow processing, poor coordination, and reading difficulties also benefit." },
      { myth: "Teachers will not allow movement breaks.", fact: "Brief, discreet Brain Gym activities can be done at the desk or before exams with teacher cooperation." },
      { myth: "Brain Gym replaces tutoring.", fact: "It prepares the brain for learning. Academic instruction still matters." },
    ],
  },
  "handwriting-training": {
    sections: [
      {
        heading: "Why Handwriting Still Matters in a Digital Age",
        paragraphs: [
          "Despite tablets and keyboards, handwriting remains essential in Indian schools — from primary worksheets to board examinations written by hand. When a child's writing is illegible, painfully slow, or physically uncomfortable, academic performance and self-esteem both suffer. Teachers may misread answers. Children avoid written homework. Exam anxiety intensifies when they cannot finish papers in time.",
          "Handwriting is one of the most complex motor skills children develop. It requires postural stability, shoulder and arm control, fine motor precision, visual perception, visual-motor integration, sensory tolerance in the hands, and sustained attention — all simultaneously. A weakness in any layer shows up on the page.",
          "Dr. Sharuja Sarap is Handwriting Without Tears® (HWT) certified. HWT teaches letter formation through multisensory progression: building letters with wood pieces, writing in sand and on chalkboards, then transferring to paper — rather than endless copying of lined worksheets that reinforce bad habits.",
        ],
      },
      {
        heading: "Signs That Professional Support Is Needed",
        paragraphs: [
          "Beyond age seven or eight, persistent letter reversals, inability to stay on lines, grip that causes hand cramping, writing that deteriorates as assignments lengthen, and active refusal of written tasks all warrant assessment. These patterns rarely resolve with more practice alone because the underlying motor or sensory systems have not been addressed.",
          "Many Mumbai parents first notice handwriting problems when tuition teachers comment or when exam marks drop despite the child knowing the content. OT assessment distinguishes between cognitive understanding and motor output problems — a critical difference for effective intervention.",
          "Left-handed children and children with hypermobility or low tone often need specific ergonomic guidance that generic school instruction does not provide. Dr. Sarap adapts grip, paper position, and seating for each child's biomechanics.",
        ],
      },
      {
        heading: "The HWT Approach Step by Step",
        paragraphs: [
          "Assessment evaluates pencil grip, hand strength, visual-motor integration, letter knowledge, spacing, sizing, and writing endurance. The therapist identifies which systems need support before formation work intensifies.",
          "Intervention follows HWT's developmental sequence: capital letters before lowercase, top-to-bottom and left-to-right habits embedded from the start, and sizing taught through consistent double lines. Multisensory activities make abstract letter shapes concrete — critical for children who learn through touch and movement.",
          "Sessions include hand strengthening through play — theraputty, tongs, spray bottles — not boring drills. Postural exercises ensure the shoulder girdle supports fine hand control. Visual tracking activities connect eye movement to fluent copying from the board.",
          "Home practice is structured: ten minutes daily using assigned HWT pages, not unstructured copying. Parents receive grip corrections and desk setup guidance. Teachers may be advised on acceptable accommodations during the improvement phase — such as reduced copying volume or extended exam time.",
        ],
      },
      {
        heading: "Long-Term Outcomes for School and Beyond",
        paragraphs: [
          "Legible, fluent handwriting supports exam performance, note-taking in secondary school, and the confidence to participate in written classroom activities. Children who once hid their notebooks begin volunteering answers and completing homework without battles.",
          "OT does not promise calligraphy. The goal is functional, readable, efficient writing that meets school demands without pain or avoidance. For some children, keyboard accommodations remain appropriate for lengthy assignments — OT helps families and schools make informed decisions.",
          "Handwriting training at Thrive With Sharuja is integrated with broader OT when needed. A child working on handwriting may also need sensory regulation for sitting tolerance or Brain Gym for visual tracking — all coordinated under one treatment plan.",
        ],
      },
    ],
    mythsAndFacts: [
      { myth: "Bad handwriting means low intelligence.", fact: "Handwriting is a motor skill. Many bright children struggle due to sensory-motor differences." },
      { myth: "More lined paper practice will fix it.", fact: "Without correcting grip, posture, and formation habits, practice reinforces errors." },
      { myth: "Keyboards make handwriting irrelevant.", fact: "Indian schools still require extensive handwritten work, especially in exams." },
      { myth: "Left-handers should write the same way as right-handers.", fact: "Paper angle, grip, and seating need left-specific adjustments." },
    ],
  },
};

const conditionExpansions: Record<string, SeoExpansion> = {
  "autism-spectrum-disorder": {
    sections: [
      {
        heading: "Understanding Autism Through a Strengths-Based Lens",
        paragraphs: [
          "Autism Spectrum Disorder (ASD) is a neurodevelopmental difference that shapes how a child perceives sensory input, communicates, interacts socially, and engages with routines. It is not an illness to cure. Autistic children often experience the world with extraordinary intensity — sounds that others filter out, textures that feel unbearable, changes that feel catastrophic, and interests that become passionate expertise.",
          "Families in Mumbai face unique pressures: crowded malls, noisy festivals, competitive schooling, and social expectations that do not accommodate neurodivergent children. OT does not try to make autistic children appear neurotypical. It builds the sensory, motor, and daily living skills that help them participate in the life they and their family choose — with less overwhelm and more autonomy.",
          "Dr. Sharuja Sarap approaches ASD with 18+ years of pediatric experience and advanced training in sensory integration, Brain Gym, MNRI reflex integration, and Handwriting Without Tears. Her clinic provides a predictable, sensory-aware environment where autistic children can regulate before being asked to perform.",
        ],
      },
      {
        heading: "How OT Addresses Core Challenges in ASD",
        paragraphs: [
          "Sensory processing differences are central for many autistic children. OT begins with a sensory profile assessment — identifying whether your child seeks or avoids movement, touch, sound, and visual input. This profile drives every recommendation: a sensory diet of scheduled input, environmental modifications at home and school, and therapy activities that build tolerance gradually rather than through flooding.",
          "Motor differences are equally important. Many autistic children have coordination challenges, low muscle tone, or difficulty with motor planning — making playground participation, handwriting, and self-care frustrating. Structured, play-based OT builds these skills without the social pressure of group sports or crowded classrooms.",
          "Daily living skills — dressing, feeding, grooming, toileting — are often overlooked in medical models of autism care. OT breaks these tasks into manageable steps, adapts tools when needed, and teaches parents how to scaffold independence without nightly battles.",
          "Emotional regulation support uses movement, deep pressure, visual schedules, and co-regulation strategies. Transitions — leaving home, ending screen time, shifting between activities — are practised with predictable routines that reduce meltdown frequency over time.",
        ],
      },
      {
        heading: "Working With Schools and Families in Mumbai",
        paragraphs: [
          "School is often the hardest environment for autistic children: fluorescent lights, assembly noise, unpredictable schedules, and social complexity. Dr. Sarap collaborates with parents to suggest practical classroom accommodations — seating away from doors, movement breaks, reduced handwriting load, or sensory tools — that many Mumbai schools accept when presented clearly.",
          "Parent coaching is central. You learn to read early signs of overload, implement sensory strategies before meltdowns escalate, and advocate for your child without apology. Siblings and extended family benefit when daily routines become more predictable.",
          "Therapy frequency is tailored to need — typically one to two sessions weekly, with home programs adjusted as your child develops. Progress is reviewed every few months with honest conversation about what is working and what needs adjustment.",
        ],
      },
      {
        heading: "When to Start and What to Expect",
        paragraphs: [
          "Early intervention produces the strongest outcomes, but it is never too late to begin. If your child is struggling with sensory overwhelm, motor delays, self-care, or school participation — with or without a formal autism diagnosis — a consultation clarifies whether OT is appropriate.",
          "Realistic expectations matter. OT will not eliminate autism. It will help your child tolerate a birthday party, write their name legibly, dress independently, or sleep more peacefully. These functional gains transform family life even when core neurodevelopmental differences remain.",
          "Many families combine OT with speech therapy, developmental paediatrics, or educational support. Dr. Sarap coordinates with your existing team when you request it, ensuring consistent messaging across providers.",
        ],
      },
    ],
    mythsAndFacts: [
      { myth: "Autistic children cannot improve functional skills.", fact: "With consistent OT, many children make significant gains in daily participation." },
      { myth: "OT tries to eliminate autistic behaviours.", fact: "Our approach builds skills for participation while respecting each child's identity." },
      { myth: "A diagnosis is required before starting.", fact: "Therapy can begin based on observed sensory and motor challenges during evaluation." },
      { myth: "More exposure to overwhelming environments will help.", fact: "Gradual, supported sensory exposure works. Flooding typically increases distress." },
    ],
    homeStrategies: [
      "Use visual schedules for morning and bedtime routines.",
      "Offer noise-cancelling headphones for malls and festivals.",
      "Introduce one new food texture at a time without pressure.",
      "Build a calm corner with favourite sensory tools at home.",
      "Warn before transitions — 'five more minutes' with a visual timer.",
    ],
  },
  adhd: {
    sections: [
      {
        heading: "ADHD Is a Brain Difference, Not a Behaviour Choice",
        paragraphs: [
          "Attention Deficit Hyperactivity Disorder affects executive function — the brain's ability to plan, prioritise, sustain attention, regulate impulses, and manage time. Children with ADHD are not lazy, defiant, or unmotivated. Their neurology processes stimulation differently, making sustained focus on non-preferred tasks genuinely difficult.",
          "In Mumbai's high-pressure school culture, ADHD often becomes visible when homework takes three hours, teachers report constant distraction, or impulsive behaviour creates social and safety problems. Without support, children internalise shame — believing they are 'bad' when the real issue is unsupported neurology.",
          "Dr. Sharuja Sarap combines sensory-integrative OT with Brain Gym® movement strategies to help children with ADHD channel energy productively, build attention stamina, and develop self-management tools that work with their brain rather than against it.",
        ],
      },
      {
        heading: "OT Strategies That Work for ADHD",
        paragraphs: [
          "Movement before seated work is non-negotiable for many children with ADHD. Brain Gym routines, heavy work activities, and proprioceptive input help the nervous system reach a state where focus is possible. These are taught to children and parents for daily use — not only in the clinic.",
          "Environmental modification reduces distraction: homework stations away from TV, clear desk surfaces, timers for work blocks, and movement breaks every 15–20 minutes. OT helps families design setups that work in small Mumbai apartments.",
          "Sensory tools — fidget items, wobble cushions, resistance bands on chair legs — can be used discreetly in classrooms when schools cooperate. Dr. Sarap provides written recommendations that parents can share with teachers.",
          "Executive function coaching through OT addresses organisation: packing school bags, planning homework order, using checklists, and breaking large tasks into steps. These are life skills that tutoring alone does not teach.",
        ],
      },
      {
        heading: "Medication, School, and Family Life",
        paragraphs: [
          "OT does not prescribe medication. Many families use OT alongside paediatric management of ADHD. Dr. Sarap supports whatever informed choice families make, focusing on functional skill building regardless of medication status.",
          "School collaboration is often essential. Accommodations such as preferential seating, extended test time, movement breaks, and reduced copying load can prevent academic confidence from collapsing in primary years.",
          "Family stress decreases when homework battles shorten, morning routines smooth out, and children gain tools they can use independently. Parents learn to separate the child they love from the challenges ADHD creates — reducing guilt and conflict at home.",
        ],
      },
    ],
    mythsAndFacts: [
      { myth: "ADHD is caused by screen time or poor parenting.", fact: "ADHD has strong neurological and genetic components. Environment matters but does not cause ADHD." },
      { myth: "Children will outgrow ADHD.", fact: "Many learn to manage symptoms with support. Early skill building prevents secondary anxiety and low self-esteem." },
      { myth: "Only medication helps.", fact: "OT, Brain Gym, and environmental strategies provide meaningful benefits for many children." },
      { myth: "Boys and girls show ADHD the same way.", fact: "Girls often present with inattention rather than hyperactivity and may be underdiagnosed." },
    ],
    homeStrategies: [
      "Do Brain Gym or jumping jacks before homework — every day.",
      "Use a visual timer for 15-minute work blocks.",
      "Pack the school bag the night before together.",
      "Praise starting tasks, not only finishing them.",
      "Keep a consistent sleep schedule — fatigue worsens attention.",
    ],
  },
  "developmental-delay": {
    sections: [
      {
        heading: "What Developmental Delay Really Means for Your Family",
        paragraphs: [
          "Developmental delay means a child is not meeting expected milestones in one or more areas — motor skills, speech and language, social interaction, cognition, or daily living — at the rate typical for their age. Delay does not mean permanent limitation. With early, targeted intervention, many children close gaps significantly or learn adaptive strategies that support lifelong independence.",
          "Parents in Mumbai often first notice delay when comparing their child to cousins, neighbours, or classmates — or when a paediatrician flags concerns at a routine check. The wait-and-see approach feels tempting, especially when well-meaning relatives say 'every child develops differently.' While variation is normal, persistent gaps across settings warrant professional evaluation.",
          "Dr. Sharuja Sarap provides comprehensive developmental assessment through play-based observation, identifying which systems need support and which strengths can be leveraged. OT at Thrive With Sharuja addresses motor, sensory, and daily living domains — often in coordination with speech therapy and developmental paediatrics when families have multi-disciplinary needs.",
        ],
      },
      {
        heading: "How Early OT Changes Trajectories",
        paragraphs: [
          "The brain's plasticity is highest in early childhood. Sensory integration, motor practice, and daily living scaffolding during these years produce disproportionate gains compared to waiting until school failure forces action.",
          "OT for developmental delay is highly individualised. One child may need gross motor strengthening for playground participation. Another may need fine motor work for self-feeding. A third may need sensory regulation before any skill learning is possible. Assessment determines the sequence.",
          "Parent coaching ensures progress continues between sessions. Home programs are realistic for busy Mumbai families — embedded into bath time, meals, and play rather than added as separate therapy homework.",
          "Regular goal reviews track measurable change: Can the child climb stairs independently? Use a spoon? Tolerate hair washing? Sit for a story? These functional markers matter more than arbitrary milestone charts.",
        ],
      },
      {
        heading: "Navigating Diagnosis and School in Mumbai",
        paragraphs: [
          "Formal diagnosis processes in Mumbai can be slow and fragmented. OT can begin while evaluation continues — there is no need to wait for a label when functional challenges are clear.",
          "School admission and classroom support often require documentation. Dr. Sarap provides progress reports that schools understand, describing accommodations and current skill levels in practical terms.",
          "Families from Borivali, Malad, Goregaon, and across the western suburbs access the Kandivali West clinic for consistent, relationship-based care rather than rotating through different therapists at large hospitals.",
        ],
      },
    ],
    mythsAndFacts: [
      { myth: "Delayed children will always catch up on their own.", fact: "Some do. Many benefit significantly from early OT and related therapies." },
      { myth: "Delay equals intellectual disability.", fact: "Delay can affect motor or sensory domains while cognition remains strong." },
      { myth: "Therapy should wait until school starts.", fact: "Early childhood intervention produces the strongest outcomes." },
      { myth: "More activities and classes will speed development.", fact: "Over-scheduling can overwhelm a child. Targeted OT addresses specific gaps." },
    ],
    homeStrategies: [
      "Practice one self-care skill at a time — buttons before zippers.",
      "Use songs and routines to make transitions predictable.",
      "Offer movement play daily — crawling, climbing, pushing/pulling.",
      "Limit structured classes if your child shows fatigue or meltdowns.",
      "Document small wins to share at therapy reviews.",
    ],
  },
  "sensory-processing-difficulties": {
    sections: [
      {
        heading: "When the World Feels Too Much — or Not Enough",
        paragraphs: [
          "Sensory processing difficulties occur when the brain struggles to organise and respond to information from the senses — touch, sound, movement, sight, taste, smell, and internal body signals. Some children are over-responsive, fleeing tags, covering ears, or melting down in busy environments. Others are under-responsive, seeking constant movement, crashing, or mouthing objects. Many show mixed profiles.",
          "These are not behaviour problems or parenting failures. They are neurological differences that affect how children experience Mumbai's intense sensory world — honking traffic, crowded local trains, festival noise, uniform textures, and chaotic school corridors.",
          "Dr. Sharuja Sarap uses Ayres Sensory Integration®-informed assessment and intervention to understand each child's unique sensory profile and build regulation skills that work in real environments, not only in the therapy gym.",
        ],
      },
      {
        heading: "Sensory Integration Therapy Explained",
        paragraphs: [
          "Sensory integration therapy provides controlled sensory experiences that help the brain process input more efficiently over time. A child who fears movement might swing with therapist support. A child who craves crashing might get that input through structured obstacle courses rather than unsafe behaviour. A child who cannot tolerate clothing textures practises gradual exposure with sensory supports.",
          "The sensory gym at Thrive With Sharuja includes swings, climbing equipment, tactile bins, balance tools, and quiet spaces — allowing the therapist to match activities to your child's needs each session.",
          "A personalised sensory diet — a schedule of organising activities throughout the day — is provided for home and school. This might include morning jumping, afternoon heavy work, or calming deep pressure before bed.",
        ],
      },
      {
        heading: "Sensory Challenges Across Daily Life",
        paragraphs: [
          "Mealtimes suffer when texture aversions limit nutrition. Mornings collapse when uniform fabrics feel unbearable. Haircuts and nail trimming become traumatic. Malls and weddings trigger meltdowns that embarrass and exhaust parents. Sleep disruption often links to sensory dysregulation that families do not recognise.",
          "OT addresses each domain practically: adaptive clothing strategies, food chaining for picky eating, haircut desensitisation plans, and mall outing preparation with sensory kits. Progress is incremental but life-changing.",
          "School sensory challenges — assembly noise, chalk dust, crowded corridors — are addressed through accommodations and in-body strategies children learn to use independently.",
        ],
      },
      {
        heading: "Long-Term Outlook With Consistent Support",
        paragraphs: [
          "Sensory processing differences often persist across the lifespan, but children learn to recognise their needs, request breaks, use tools, and recover faster from overload. The goal is self-awareness and functional participation — not elimination of sensory sensitivity.",
          "Families report that consistent OT reduces meltdown frequency, improves sleep, restores mealtime peace, and makes public outings possible again. Parent stress drops when they understand the 'why' behind behaviour and have strategies that work.",
          "Dr. Sarap's training across sensory integration, Brain Gym, MNRI, and aquatic therapy allows complex sensory-motor profiles to be addressed holistically in one clinic.",
        ],
      },
    ],
    mythsAndFacts: [
      { myth: "Sensory issues are not real.", fact: "Sensory processing differences are well documented in occupational therapy research." },
      { myth: "Children will adapt if forced to tolerate stimuli.", fact: "Flooding without support typically increases anxiety and avoidance." },
      { myth: "Only autistic children have sensory issues.", fact: "Sensory processing difficulties occur in many developmental profiles." },
      { myth: "They will grow out of it.", fact: "Some improve with maturity. Many benefit from explicit OT strategies." },
    ],
    homeStrategies: [
      "Build a sensory kit for outings — headphones, fidget, chew tool.",
      "Warn before touch — 'I am going to help with your sleeve.'",
      "Schedule heavy work before seated tasks.",
      "Keep lighting soft in the homework area.",
      "Respect food aversions while gently expanding choices.",
    ],
  },
};

export function getSeoExpansion(slug: string, type: SeoPageType): SeoExpansion | undefined {
  return type === "service" ? serviceExpansions[slug] : conditionExpansions[slug];
}
