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
    tagline: "Children are much more than a diagnosis.",
    icon: "HeartHandshake",
    understanding:
      "Children are much more than a diagnosis. They are learners, explorers, problem-solvers, family members, friends, and individuals with unique strengths and potential. That is why our approach focuses on seeing the whole child. We look beyond difficulties to understand how sensory processing, movement, attention, emotions, learning, communication, and everyday experiences work together to influence a child's participation and development. By combining different evidence-informed therapeutic approaches, we create individualized intervention programs that reflect each child's unique needs, strengths, and goals. The aim is not simply to improve isolated skills, but to support children in participating more comfortably, confidently, and independently in the activities that matter most to them and their families. Every child is unique, and their therapy journey should be too.",
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
    tagline: "Learning Through Movement",
    icon: "Brain",
    understanding:
      "Children learn best when their bodies, minds, and emotions are working together. Brain Gym® is a movement-based educational approach that uses simple, purposeful activities to support learning readiness, attention, coordination, self-regulation, and overall participation in everyday activities. Many children experience challenges with focus, organization, emotional regulation, coordination, handwriting, reading, listening, or managing classroom demands. Sometimes these difficulties are not simply related to academic skills—they may also involve how the brain and body work together to process information, organize responses, and engage effectively in learning. Brain Gym activities are designed to support whole-child development by encouraging better integration of movement, sensory processing, attention, and learning. Through carefully selected movements and activities, children are provided opportunities to improve body awareness, coordination, concentration, confidence, and readiness for learning.",
    whatParentsMayNotice: [
      "Finds it difficult to focus or sustain attention",
      "Appears restless or easily distracted",
      "Struggles with handwriting, reading, or classroom tasks",
      "Experiences difficulties with coordination and motor planning",
      "Becomes frustrated during learning activities",
      "Finds it challenging to organize thoughts and complete tasks",
      "Has difficulty managing emotions during everyday situations",
    ],
    howThisHelps: [
      "Attention and Concentration",
      "Learning Readiness",
      "Coordination and Balance",
      "Motor Planning",
      "Visual-Motor Integration",
      "Handwriting Readiness",
      "Emotional Regulation",
      "Self-Confidence",
      "Listening and Participation Skills",
      "Organization and Learning Skills",
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
          "Brain Gym activities are individualized and integrated into therapy in a playful, engaging, and child-friendly manner. The focus is not simply on academic performance, but on helping children participate more comfortably, confidently, and successfully in everyday life.",
      },
      {
        title: "What a session involves",
        content:
          "We find which movements help your child feel both alert and calm. You practise together in session, then take home a short routine. Playful, never forced — and always explained in plain language.",
      },
      {
        title: "Brain Gym at home and school",
        content:
          "Because learning becomes easier when the brain and body work together. The best results come from small, consistent use — before homework, before tests, or during long car rides before activities. We share tips for teachers when families want classroom support.",
      },
    ],
    metaDescription:
      "Brain Gym® for children in Mumbai & Kandivali. Movement-based support for focus, learning readiness, and calmer homework with Dr. Sharuja Sarap.",
  },
  {
    slug: "double-doodle-play",
    title: "Double Doodle Play®",
    tagline: "Building Skills Through Creativity, Movement, and Fun",
    icon: "PenLine",
    understanding:
      "Double Doodle Play® is a unique, creative approach that encourages children to draw, write, and create using both hands together at the same time. While it may look like a simple art activity, it provides valuable opportunities for the brain and body to work together in new and meaningful ways. When children use both hands simultaneously, they engage both sides of the body while supporting coordination between the left and right hemispheres of the brain. This playful experience can help strengthen the foundational skills required for handwriting, visual-motor integration, coordination, creativity, and self-expression. Many children who struggle with handwriting, attention, coordination, body awareness, or confidence during written activities may benefit from experiences that encourage bilateral coordination and integrated movement.",
    whatParentsMayNotice: [
      "Avoids drawing, colouring, or writing activities",
      "Finds handwriting tiring or frustrating",
      "Has difficulty coordinating both sides of the body",
      "Struggles with hand-eye coordination",
      "Experiences challenges with pencil control",
      "Finds it difficult to organize ideas on paper",
      "Lacks confidence during classroom writing tasks",
    ],
    howThisHelps: [
      "Improved Bilateral Coordination",
      "Enhanced Hand-Eye Coordination",
      "Better Visual-Motor Integration",
      "Increased Body Awareness",
      "Improved Pencil Control",
      "Pre-Writing and Handwriting Readiness",
      "Greater Creativity and Self-Expression",
      "Improved Focus and Attention",
      "Increased Confidence During Learning Activities",
      "Enjoyment of Drawing and Writing Experiences",
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
          "Through guided Double Doodle Play activities, children are encouraged to explore movement, creativity, imagination, and expression in a relaxed and enjoyable environment. There is no pressure to be perfect. Instead, the focus is on participation, exploration, confidence-building, and skill development.",
      },
      {
        title: "Who benefits most",
        content:
          "Children often learn best when they are moving, creating, exploring, and having fun—and Double Doodle Play® provides opportunities for all these experiences while supporting important developmental skills.",
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
    tagline: "Helping Children Understand, Organize, and Respond to the World Around Them",
    icon: "Sparkles",
    understanding:
      "Every moment of the day, a child's brain receives information from the senses—what they see, hear, touch, taste, smell, and how their body moves and positions itself in space. For most children, the brain automatically organizes this information and helps them respond appropriately. However, for some children, processing sensory information can be more challenging. Sensory Integration is an approach that helps children better process, organize, and respond to sensory information so they can participate more successfully in everyday activities. When sensory processing becomes difficult, it can affect attention, behaviour, emotional regulation, movement, learning, play, self-care skills, and social participation. Children may experience sensory challenges in different ways. Some children may be highly sensitive to sounds, touch, movement, or certain environments, while others may constantly seek sensory experiences such as jumping, spinning, crashing, or touching everything around them. Some children may appear clumsy, have difficulty sitting still, struggle with body awareness, or become easily overwhelmed by everyday situations.",
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
      "Finds school, social situations, or community outings challenging",
    ],
    howThisHelps: [
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
      "Confidence and Independence",
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
          "At our centre, Sensory Integration-based intervention is designed to provide children with meaningful sensory experiences in a safe, supportive, and engaging environment. Through carefully planned activities, children are encouraged to explore movement, develop body awareness, improve self-regulation, strengthen motor skills, and build confidence in everyday situations.",
      },
      {
        title: "The goal",
        content:
          "The goal is not to eliminate sensory differences, but to help children better understand their bodies, manage sensory experiences more effectively, and participate more comfortably in the activities that matter most to them.",
      },
      {
        title: "When children feel regulated",
        content:
          "When children feel more regulated, comfortable, and connected to their environment, learning, play, relationships, and everyday participation often become more meaningful and enjoyable.",
      },
    ],
    metaDescription:
      "Sensory integration therapy in Mumbai & Kandivali for children who struggle with noise, texture, or overwhelm. Warm OT with Dr. Sharuja Sarap.",
  },
  {
    slug: "rmti",
    title: "Rhythmic Movement Training International® (RMTI)",
    tagline: "Supporting Development Through Foundational Movement",
    icon: "Target",
    understanding:
      "Movement plays an important role in a child's development. Long before children learn to sit, walk, write, or concentrate in school, their bodies develop through a series of natural movement patterns that help build the foundation for learning, coordination, attention, balance, and emotional regulation. RMTI® (Rhythmic Movement Training International) uses gentle, rhythmic movements designed to support the integration of early developmental movement patterns that may influence a child's ability to learn, focus, move, and participate confidently in everyday activities. Some children may experience challenges when these foundational movement patterns have not fully developed or integrated. This may impact posture, balance, coordination, attention, body awareness, emotional regulation, and learning readiness.",
    whatParentsMayNotice: [
      "Finds it difficult to sit still for extended periods",
      "Appears clumsy or uncoordinated",
      "Struggles with attention and concentration",
      "Has poor posture or tires easily",
      "Experiences challenges with handwriting",
      "Appears restless or constantly seeks movement",
      "Has difficulty with balance and body awareness",
      "Becomes easily overwhelmed or emotionally reactive",
    ],
    howThisHelps: [
      "Primitive Reflex Integration",
      "Attention and Concentration",
      "Balance and Coordination",
      "Postural Control",
      "Motor Planning",
      "Learning Readiness",
      "Emotional Regulation",
      "Body Awareness",
      "Handwriting Readiness",
      "Confidence and Participation",
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
          "Through individualized movement experiences, RMTI® aims to support the neurological foundations that contribute to learning, regulation, coordination, and participation. Slow, rocking, rolling, or crawling patterns practised on a mat — always adapted to your child's age and comfort.",
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
    title: "Handwriting Without Tears® (HWT)",
    tagline: "Building Confident Writers Through Developmentally Appropriate Learning",
    icon: "PenLine",
    understanding:
      "Handwriting is a skill that develops over time and requires much more than simply holding a pencil. Children need strong visual-motor skills, hand strength, coordination, body awareness, attention, and postural stability to write comfortably and efficiently. Handwriting Without Tears® is a structured, child-friendly handwriting program that makes learning to write easier, more enjoyable, and developmentally appropriate. The program uses multisensory learning experiences that help children understand letter formation, spacing, pencil control, and writing organization in a fun and engaging way.",
    whatParentsMayNotice: [
      "Struggles with letter formation",
      "Uses an inefficient pencil grasp",
      "Writes slowly or tires easily",
      "Has messy handwriting",
      "Avoids writing activities",
      "Experiences frustration during homework",
      "Finds classroom writing tasks challenging",
    ],
    howThisHelps: [
      "Pencil Grip and Control",
      "Letter Formation",
      "Writing Readiness",
      "Visual-Motor Integration",
      "Fine Motor Skills",
      "Hand Strength and Dexterity",
      "Writing Endurance",
      "Classroom Participation",
      "Academic Confidence",
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
          "The program focuses on building confidence while supporting the skills necessary for successful participation in school and everyday learning activities. Dr. Sharuja is certified in Handwriting Without Tears® and uses the full structured programme — assessment, intervention, and home carryover — adapted to each child's needs.",
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
    title: "Oral Placement Therapy® (OPT)",
    tagline: "Supporting Feeding, Oral Motor Development, and Functional Communication",
    icon: "Utensils",
    understanding:
      "The mouth plays an important role in feeding, chewing, drinking, swallowing, speech production, and overall oral awareness. Some children may experience difficulties with the strength, coordination, stability, or awareness of the muscles involved in these activities. Oral Placement Therapy® (OPT) is a structured approach that uses carefully selected activities and tools to support the development of oral motor skills required for feeding and functional communication.",
    whatParentsMayNotice: [
      "Is an extremely selective eater",
      "Has difficulty chewing certain foods",
      "Prefers only specific textures",
      "Experiences challenges drinking from cups or straws",
      "Has reduced oral awareness",
      "Avoids trying new foods",
      "Has difficulty managing food within the mouth",
      "Demonstrates oral motor weakness",
    ],
    howThisHelps: [
      "Feeding Skills",
      "Oral Motor Development",
      "Chewing and Drinking Skills",
      "Oral Awareness",
      "Food Exploration",
      "Mealtime Participation",
      "Oral Strength and Coordination",
      "Functional Oral Motor Skills",
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
        title: "Individualized therapy",
        content:
          "Therapy is individualized to support improved oral motor function, feeding skills, and participation during mealtimes.",
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
    title: "Aquatic Therapy (IATF Certified)",
    tagline: "Unlocking Potential Through the Therapeutic Power of Water",
    icon: "Waves",
    understanding:
      "Water provides a unique environment where children can move, explore, learn, and participate in ways that may feel difficult on land. The natural properties of water offer support, resistance, sensory input, and opportunities for movement that can be both therapeutic and enjoyable. Aquatic Therapy combines evidence-informed therapeutic principles with purposeful water-based activities to support physical, sensory, emotional, and functional development. Parents often notice that children feel more confident, motivated, and successful when learning through water-based experiences.",
    whatParentsMayNotice: [
      "Motor coordination difficulties",
      "Balance and postural challenges",
      "Sensory processing differences",
      "Low muscle tone or weakness",
      "Neurological conditions",
      "Physical disabilities",
      "Reduced confidence in movement",
      "Difficulties with body awareness",
    ],
    howThisHelps: [
      "Strength and Endurance",
      "Balance and Coordination",
      "Motor Planning",
      "Sensory Regulation",
      "Body Awareness",
      "Postural Control",
      "Confidence in Movement",
      "Social Participation",
      "Functional Independence",
      "Overall Physical Wellbeing",
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
          "Sessions are designed to be engaging, goal-directed, and individualized according to each child's needs and abilities. Dr. Sharuja holds IATF (International Aquatic Therapy Foundation) certification and integrates water-based work with land OT for comprehensive progress.",
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
    title: "Pediatric Instrument Assisted Soft Tissue Mobilization (PIASTM)",
    tagline: "Supporting Comfortable Movement and Functional Participation",
    icon: "Hand",
    understanding:
      "Children's bodies are constantly growing and developing. Sometimes muscle tightness, tissue restrictions, discomfort, postural challenges, or movement limitations can affect their ability to participate comfortably in everyday activities. PIASTM is a gentle therapeutic approach that uses specialized instruments to support soft tissue mobility, flexibility, movement quality, and overall physical function. This approach may be incorporated into therapy when appropriate to help support movement efficiency and participation.",
    whatParentsMayNotice: [
      "Complaints of sore shoulders or hands during writing",
      "Slumped posture that doesn't improve with reminders",
      "Quick fatigue during fine motor or physical tasks",
      "A body that seems 'stuck' or stiff without a clear injury",
      "Tension that blocks progress in other therapy goals",
      "Discomfort after sports, dance, or long school days",
    ],
    howThisHelps: [
      "Soft Tissue Mobility",
      "Range of Motion",
      "Movement Quality",
      "Postural Alignment",
      "Physical Function",
      "Comfort During Movement",
      "Participation in Daily Activities",
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
    title: "Kinesio Taping® (KT)",
    tagline: "Supporting Movement, Stability, and Functional Performance",
    icon: "Award",
    understanding:
      "Kinesio Taping® is a therapeutic technique that uses specially designed elastic tape to support muscles, joints, posture, and movement while allowing natural motion to continue. When used as part of a comprehensive therapy program, taping may provide additional support during movement-based activities and functional tasks. Depending on the child's needs, Kinesio Taping may be used to support posture, body awareness, muscle activation, stability, and participation in everyday activities.",
    whatParentsMayNotice: [
      "Slumping or leaning during homework and meals",
      "Fatigue during PE, sports, or playground play",
      "A child who doesn't know where their body is in space",
      "Wrist or hand strain during long writing tasks",
      "Need for extra sensory or postural support outside clinic",
      "Confidence dips during physical activities with peers",
    ],
    howThisHelps: [
      "Postural Control",
      "Muscle Activation",
      "Joint Stability",
      "Body Awareness",
      "Movement Efficiency",
      "Functional Performance",
      "Motor Development",
      "Participation in Daily Activities",
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
    title: "Masgutova Neurosensorimotor Reflex Integration® (MNRI)",
    tagline: "Building Strong Foundations for Learning, Movement, and Regulation",
    icon: "Brain",
    understanding:
      "Primitive reflexes are automatic movement patterns that emerge during early development and provide the foundation for future motor, sensory, emotional, and learning skills. As children grow, these reflexes are expected to gradually integrate into more mature movement patterns. For some children, retained reflex patterns may influence posture, balance, coordination, attention, learning, emotional regulation, and everyday participation. MNRI® is an approach that focuses on supporting the maturation and integration of reflex patterns through individualized activities and therapeutic experiences.",
    whatParentsMayNotice: [
      "Poor posture",
      "Difficulty sitting still",
      "Balance and coordination challenges",
      "Handwriting difficulties",
      "Attention and concentration concerns",
      "Emotional regulation challenges",
      "Motor planning difficulties",
    ],
    howThisHelps: [
      "Reflex Integration",
      "Motor Development",
      "Balance and Coordination",
      "Postural Control",
      "Learning Readiness",
      "Emotional Regulation",
      "Attention and Concentration",
      "Body Awareness",
      "Functional Participation",
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
    title: "Kinesio Dry Cupping Therapy (KDCT)",
    tagline: "Supporting Mobility, Recovery, and Functional Movement",
    icon: "HeartHandshake",
    understanding:
      "Kinesio Dry Cupping Therapy is a gentle therapeutic technique that may be used as part of a comprehensive intervention plan to support tissue mobility, circulation, movement quality, and physical comfort. When clinically appropriate, this approach may assist in addressing movement restrictions and supporting overall physical participation. KDCT is always integrated within a broader therapy program and tailored according to the child's individual needs.",
    whatParentsMayNotice: [
      "Persistent tightness in shoulders, back, or legs",
      "Soreness after sports, dance, or long school days",
      "Tension that seems to block handwriting or posture goals",
      "Recovery that takes longer than peers after activity",
      "Discomfort sitting for exams or lengthy homework",
      "A child who feels 'heavy' or stiff in their body",
    ],
    howThisHelps: [
      "Tissue Mobility",
      "Flexibility",
      "Movement Quality",
      "Physical Function",
      "Postural Support",
      "Comfort During Movement",
      "Participation in Everyday Activities",
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

/** Eleven specialised programme pages — excludes the landing-only "Looking Beyond" intro. */
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
