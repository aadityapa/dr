import { generateExpandedArticles } from "./articles-expanded";

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  keywords: string[];
  content: string[];
};

const seedArticles: Article[] = [
  {
    slug: "signs-your-child-may-need-occupational-therapy",
    title: "7 Signs Your Child May Need Occupational Therapy",
    description: "Learn the key signs that your child may benefit from pediatric occupational therapy in Mumbai — from sensory sensitivities to handwriting struggles.",
    excerpt: "Not sure if your child needs OT? Here are seven common signs parents notice before seeking help from a pediatric occupational therapist.",
    category: "Parent Guidance",
    publishedAt: "2025-11-15",
    readTime: "6 min",
    keywords: ["occupational therapy signs", "when to seek OT", "pediatric OT Mumbai"],
    content: [
      "As parents, we often wonder whether our child's struggles are 'just a phase' or something that needs professional support. Pediatric occupational therapy helps children who face challenges with sensory processing, motor skills, attention, and daily living activities. Here are seven signs that may indicate your child would benefit from a consultation with Dr. Sharuja Sarap at Thrive with sharuja in Kandivali West, Mumbai.",
      "First, sensory sensitivities that disrupt daily life — extreme reactions to clothing tags, loud sounds, certain food textures, or bright lights — often signal sensory processing difficulties that OT can address. Second, motor delays compared to peers, such as difficulty running, catching a ball, or using scissors, may indicate coordination challenges.",
      "Third, handwriting that remains illegible or painfully slow beyond age 7–8, despite practice, often reflects underlying fine motor or visual-motor issues. Fourth, difficulty with self-care tasks like dressing, buttoning, or feeding independently compared to same-age peers.",
      "Fifth, attention difficulties that affect homework completion and classroom participation — even without an ADHD diagnosis. Sixth, frequent meltdowns or emotional dysregulation that seem triggered by environments, transitions, or sensory input. Seventh, avoidance of play, social activities, or school tasks that peers manage comfortably.",
      "If you recognize two or more of these signs, a consultation can clarify whether occupational therapy is appropriate. Early intervention at Thrive with sharuja can prevent secondary issues like low self-esteem and academic disengagement. Call 9820525197 or book online to speak with Dr. Sharuja Sarap.",
    ],
  },
  {
    slug: "understanding-sensory-processing-in-children",
    title: "Understanding Sensory Processing in Children",
    description: "A parent-friendly guide to sensory processing — what it is, how it affects behavior, and how sensory integration therapy helps children in Mumbai.",
    excerpt: "Why does your child cover their ears in a mall? Understanding sensory processing is the first step to helping them thrive.",
    category: "Child Development",
    publishedAt: "2025-11-22",
    readTime: "8 min",
    keywords: ["sensory processing children", "sensory integration Mumbai", "SPD parent guide"],
    content: [
      "Every moment, your child's brain receives information from their senses — touch, movement, sound, sight, taste, and smell. Sensory processing is the brain's ability to organize this input and respond appropriately. For many children, this process works smoothly. For others, the brain either over-responds (hypersensitivity) or under-responds (hyposensitivity) to sensory input, leading to behaviors that can be confusing and frustrating for parents.",
      "A child who covers their ears in a shopping mall may be experiencing auditory hypersensitivity — ordinary sounds feel painfully loud. A child who constantly crashes into furniture may be seeking proprioceptive input their nervous system craves. A child who refuses certain foods may be reacting to texture sensitivities that make eating genuinely uncomfortable, not defiant.",
      "These are not behavioral choices — they are neurological responses. Understanding this shift in perspective is transformative for parents. At Thrive with sharuja, Dr. Sharuja Sarap uses Ayres Sensory Integration®-informed therapy to help children in Kandivali and across Mumbai build a more regulated sensory system.",
      "Sensory integration therapy takes place in a sensory-rich gym with swings, climbing structures, tactile materials, and movement tools. Through guided activities, the child's nervous system learns to process input more efficiently. Combined with personalized sensory diets — scheduled sensory activities for home and school — many families see reduced meltdowns, better sleep, and increased participation in everyday activities within weeks.",
      "If sensory behaviors are limiting your child's life, a consultation with Dr. Sharuja Sarap can provide clarity and a path forward. Belonging Without Boundaries means every child deserves to participate fully — and sensory integration therapy makes that possible.",
    ],
  },
  {
    slug: "brain-gym-for-children-with-adhd",
    title: "How Brain Gym Helps Children with ADHD",
    description: "Discover how Brain Gym movement activities support focus, learning readiness, and emotional regulation for children with ADHD in Mumbai.",
    excerpt: "Movement before homework? Brain Gym activities can activate the focus pathways your child with ADHD needs for learning success.",
    category: "ADHD",
    publishedAt: "2025-12-01",
    readTime: "7 min",
    keywords: ["Brain Gym ADHD", "ADHD movement therapy", "focus therapy children Mumbai"],
    content: [
      "Children with ADHD often hear 'sit still' and 'pay attention' — instructions their nervous system struggles to follow. Brain Gym® offers a different approach: instead of fighting the body's need for movement, it uses targeted physical activities to activate the neural pathways that support focus, learning, and emotional regulation.",
      "Dr. Sharuja Sarap, a Certified Brain Gym Instructor & Practitioner at Thrive with sharuja in Kandivali West, integrates Brain Gym activities into pediatric occupational therapy for children with ADHD across Mumbai. The principle is simple — specific movements integrate the left and right brain hemispheres, improve eye tracking, enhance midline crossing, and prepare the body-brain system for learning tasks.",
      "Common Brain Gym activities include cross-crawl movements (touching opposite elbow to knee), lazy eights (figure-eight eye tracking), and hook-ups (crossing arms and legs for calming). These take just 2–5 minutes but can significantly shift a child's readiness for focused work.",
      "Research and clinical experience show that children who practice Brain Gym before homework sessions often complete tasks faster, with less frustration and fewer redirections. Teachers who integrate brief Brain Gym breaks in classrooms report improved attention during subsequent lessons.",
      "Brain Gym is not a replacement for ADHD medication or behavioral strategies — it complements them by addressing the body-brain connection that underlies attention and learning. If your child struggles with focus, consider a consultation with Dr. Sharuja Sarap to explore how Brain Gym integrated with OT can support your family's goals.",
    ],
  },
  {
    slug: "handwriting-m struggles-when-to-seek-help",
    title: "Handwriting Struggles: When to Seek Professional Help",
    description: "Is messy handwriting normal or a sign of underlying motor issues? Learn when to seek Handwriting Without Tears therapy in Mumbai.",
    excerpt: "Illegible handwriting after age 7–8 often signals underlying motor challenges — not laziness. Here's when to seek help.",
    category: "Handwriting",
    publishedAt: "2025-12-08",
    readTime: "5 min",
    keywords: ["handwriting help children", "HWT Mumbai", "messy handwriting therapy"],
    content: [
      "Handwriting is one of the most complex skills children develop. It requires simultaneous coordination of visual perception, fine motor control, sensory processing, postural stability, and cognitive planning. When any of these systems is underdeveloped, handwriting suffers — and no amount of 'practice harder' will fix the underlying issue.",
      "So when is messy handwriting normal, and when does it warrant professional help? By age 7–8, most children should write legibly enough for teachers to read their work. If your child's writing remains consistently illegible, painfully slow, or they actively avoid writing tasks, an assessment is recommended.",
      "Other red flags include an awkward or immature pencil grip that causes hand fatigue, letter reversals beyond age 7–8, difficulty staying on lines, and writing that deteriorates as task length increases. These patterns often reflect fine motor, visual-motor, or postural issues that occupational therapy — specifically Handwriting Without Tears® (HWT) — addresses effectively.",
      "Dr. Sharuja Sarap at Thrive with sharuja is HWT-certified and has helped hundreds of Mumbai children transform their relationship with writing. The HWT program uses multisensory techniques — wood pieces for letter building, wet-dry-try on chalkboards, and structured progression — to teach formation systematically rather than through repetitive copying.",
      "Most children show meaningful improvement within 8–16 weeks of consistent HWT sessions combined with home practice. If handwriting is affecting your child's academic confidence, book a consultation at our Kandivali West clinic.",
    ],
  },
  {
    slug: "benefits-of-aquatic-therapy-for-children",
    title: "Benefits of Aquatic Therapy for Children",
    description: "Explore how water-based therapy supports motor development, sensory regulation, and confidence for children in Mumbai.",
    excerpt: "Water therapy offers unique benefits for children with motor challenges, low muscle tone, and sensory needs. Here's what parents should know.",
    category: "Aquatic Therapy",
    publishedAt: "2025-12-15",
    readTime: "6 min",
    keywords: ["aquatic therapy benefits", "water therapy children Mumbai", "aquatherapy Kandivali"],
    content: [
      "Water is one of nature's most therapeutic environments for children. Its unique properties — buoyancy reducing gravity's impact, hydrostatic pressure providing calming deep touch, and warmth relaxing muscles — create conditions where movement, sensory processing, and confidence can flourish in ways land-based therapy sometimes cannot match.",
      "At Thrive with sharuja, Dr. Sharuja Sarap provides IATF-certified pediatric aquatherapy for families across Mumbai. Aquatic therapy is particularly beneficial for children with low muscle tone, cerebral palsy, motor coordination challenges, and sensory processing difficulties.",
      "Buoyancy supports the body, allowing children to practice movement patterns — kicking, reaching, balancing — that would be difficult or impossible on land. This builds strength, range of motion, and motor planning in a safe, low-fear environment. Many children who resist land-based therapy eagerly engage in water sessions.",
      "Hydrostatic pressure provides constant, evenly distributed sensory input that many children find deeply calming. Combined with the proprioceptive and vestibular input from water movement, aquatic sessions often lead to improved regulation that carries over to land-based activities and daily life.",
      "Aquatic therapy at Thrive with sharuja is always fully supervised, adapted to each child's comfort level, and typically combined with land-based OT for comprehensive progress. No swimming ability is required. If you think your child might benefit, contact Dr. Sharuja Sarap at 9820525197 for a consultation.",
    ],
  },
  {
    slug: "preparing-child-for-first-ot-appointment",
    title: "Preparing Your Child for Their First OT Appointment",
    description: "Practical tips for parents preparing a child for their first pediatric occupational therapy visit in Mumbai.",
    excerpt: "First therapy visit coming up? Here's how to prepare your child — and yourself — for a positive experience at Thrive with sharuja.",
    category: "Parent Guidance",
    publishedAt: "2026-01-05",
    readTime: "4 min",
    keywords: ["first OT appointment", "prepare child therapy", "pediatric OT visit Mumbai"],
    content: [
      "The first occupational therapy appointment can feel uncertain for both parents and children. At Thrive with sharuja in Kandivali West, Dr. Sharuja Sarap creates a warm, welcoming environment designed to put children at ease from the moment they arrive.",
      "Before the visit, talk positively about meeting a friendly doctor who helps children play and learn fun games. Avoid framing it as a test or something is 'wrong.' Use simple language: 'We are going to play some fun games that help your body feel strong and happy.'",
      "Bring previous reports, school feedback, a list of your concerns, and any referral letters. A comfort item — a favorite toy or blanket — is welcome. Both parents are encouraged to attend the initial consultation.",
      "During the first session, Dr. Sharuja Sarap will discuss your concerns, observe your child in a play-based setting, and outline whether a full evaluation or direct therapy is recommended. There is no pressure — the goal is understanding your child's needs and building a relationship.",
      "After the visit, maintain consistent routines at home and follow any initial recommendations. Progress in OT is a partnership between therapist, child, and family. Book your first consultation by calling 9820525197 or using our online appointment form.",
    ],
  },
  {
    slug: "autism-and-occupational-therapy-guide",
    title: "Autism and Occupational Therapy: A Parent's Guide",
    description: "How occupational therapy supports children with autism in sensory regulation, daily routines, and social participation in Mumbai.",
    excerpt: "OT doesn't try to change who your child is — it builds the skills for meaningful participation. A guide for autism families in Mumbai.",
    category: "Autism",
    publishedAt: "2026-01-12",
    readTime: "9 min",
    keywords: ["autism occupational therapy", "ASD therapy Mumbai", "autism OT Kandivali"],
    content: [
      "For families navigating an autism diagnosis — or the journey toward one — occupational therapy often becomes an essential pillar of support. At Thrive with sharuja, Dr. Sharuja Sarap's philosophy is clear: Belonging Without Boundaries. We do not try to make autistic children 'normal.' We build the sensory, motor, and daily living foundations that help them participate more fully in the life they choose.",
      "Many autistic children experience sensory processing differences that make everyday environments overwhelming. OT addresses these through sensory integration therapy — guided activities in a sensory-rich gym that help the nervous system organize input more efficiently. Combined with personalized sensory diets, many families see reduced meltdowns and increased tolerance of malls, classrooms, and social gatherings.",
      "Daily living skills — dressing, feeding, grooming, toileting — are core OT domains. Structured, play-based intervention helps autistic children build independence in routines that reduce family stress and increase autonomy. Fine and gross motor skills support classroom participation, from pencil grip to playground engagement.",
      "Social participation is supported through guided play, turn-taking activities, and building the regulation skills that make social connection possible. OT does not teach social scripts — it builds the foundational skills that enable authentic interaction.",
      "Dr. Sharuja Sarap brings 18+ years of experience working with autistic children in Mumbai, with certifications in sensory integration, MNRI, OPT, and more. If your child has autism or you suspect sensory-motor challenges, a consultation at our Kandivali West clinic can clarify how OT can support your family's goals.",
    ],
  },
  {
    slug: "early-intervention-developmental-delay",
    title: "Why Early Intervention Matters for Developmental Delay",
    description: "The science and practice of early intervention for developmental delay — why starting OT early in Mumbai makes a lasting difference.",
    excerpt: "The earlier support begins, the greater the impact. Here's why early intervention for developmental delay is so critical.",
    category: "Child Development",
    publishedAt: "2026-01-20",
    readTime: "7 min",
    keywords: ["early intervention Mumbai", "developmental delay therapy", "early OT Kandivali"],
    content: [
      "Developmental delay — when a child takes longer than expected to reach milestones in movement, communication, play, or self-care — affects many families. The question every parent asks is: will they catch up? While outcomes depend on many factors, one thing is consistently clear in research and clinical practice: early intervention makes a significant difference.",
      "The brain is most adaptable in the first years of life — a concept called neuroplasticity. Neural pathways that form during early childhood lay the foundation for lifelong skills. When intervention begins early, therapy can shape these pathways before compensatory patterns and secondary challenges (low self-esteem, behavioral issues, academic gaps) take hold.",
      "At Thrive with sharuja, Dr. Sharuja Sarap provides early intervention occupational therapy for children from birth through 14 years in Kandivali West, Mumbai. Assessment identifies specific delayed skill areas — fine motor, gross motor, sensory processing, self-care — and intervention targets them through play-based, child-centered activities.",
      "Parents are active partners in early intervention. Home programs, daily routines, and environmental modifications reinforce clinic progress. Regular progress monitoring ensures goals evolve as your child grows.",
      "If you notice your child falling behind peers in multiple developmental areas, do not wait for a formal diagnosis to seek support. A consultation with Dr. Sharuja Sarap can begin the intervention process immediately. Call 9820525197 or book online today.",
    ],
  },
];

export const articles: Article[] = [...seedArticles, ...generateExpandedArticles()];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export const articleCategories = [...new Set(articles.map((a) => a.category))];
