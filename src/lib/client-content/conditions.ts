export type CategorizedItem = {
  text: string;
  category: string;
};

export type ParentsNoticeSection = {
  intro?: string;
  items: CategorizedItem[];
};

export type ClientCondition = {
  slug: string;
  pillLabel: string;
  title: string;
  understandingHeading: string;
  understanding: string;
  whatParentsNotice: {
    intro?: string;
    sections: ParentsNoticeSection[];
  };
  howOtHelps: {
    intro: string;
    items: CategorizedItem[];
  };
  considerSupportIf: string[];
  closing?: {
    heading: string;
    paragraphs: string[];
  };
  metaDescription: string;
};

export const clientConditions: ClientCondition[] = [
  {
    slug: "autism-spectrum-disorder",
    pillLabel: "Autism Spectrum Disorder",
    title: "Autism Spectrum Disorder (ASD)",
    understandingHeading: "Understanding Autism",
    understanding:
      "Every child with autism experiences the world in their own unique way. Some children may communicate differently, respond more strongly to sounds, lights, touch, or movement, prefer predictable routines, or find social situations difficult to understand. While every child is different, understanding their unique needs can help create opportunities for meaningful growth, learning, and participation.",
    whatParentsNotice: {
      intro: "You may notice your child:",
      sections: [
        {
          items: [
            {
              text: "Prefers to play alone or interacts differently with other children",
              category: "Social Communication & Social Interaction",
            },
            {
              text: "Uses fewer words than expected, repeats phrases, or finds it difficult to express needs",
              category: "Communication Difficulties",
            },
            {
              text: "Becomes upset when routines change unexpectedly",
              category: "Cognitive Flexibility & Emotional Regulation",
            },
            {
              text: "Covers ears during everyday sounds such as mixers, hand dryers, school assemblies, or traffic",
              category: "Auditory Sensory Sensitivity",
            },
            {
              text: "Refuses certain foods because of texture, smell, colour, or appearance",
              category: "Sensory Processing Differences",
            },
            {
              text: "Avoids certain clothing, tags, socks, shoes, or haircuts",
              category: "Tactile Sensory Sensitivity",
            },
            {
              text: "Enjoys repeatedly spinning objects, lining up toys, or watching moving objects",
              category: "Repetitive Behaviours & Restricted Interests",
            },
            {
              text: "Has difficulty joining group activities, birthday parties, or playground games",
              category: "Social Participation",
            },
            {
              text: "Finds dressing, feeding, grooming, or toileting more difficult than expected for age",
              category: "Activities of Daily Living Skills",
            },
            {
              text: "Appears overwhelmed, frustrated, or has meltdowns in busy environments",
              category: "Sensory Overload & Self-Regulation Challenges",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy focuses on helping children participate more comfortably, confidently, and independently in everyday life. Support may include:",
      items: [
        {
          text: "Understanding and supporting sensory needs",
          category: "Sensory Processing & Regulation",
        },
        {
          text: "Improving emotional regulation and coping strategies",
          category: "Self-Regulation Skills",
        },
        {
          text: "Developing play skills and social participation",
          category: "Social Engagement & Interaction",
        },
        {
          text: "Building fine motor skills needed for writing, drawing, cutting, and classroom tasks",
          category: "Fine Motor Development",
        },
        {
          text: "Improving coordination, balance, body awareness, and movement confidence",
          category: "Gross Motor Skills & Motor Planning",
        },
        {
          text: "Supporting dressing, feeding, grooming, and toileting skills",
          category: "Daily Living Skills",
        },
        {
          text: "Enhancing attention and participation in school activities",
          category: "School Readiness & Classroom Participation",
        },
        {
          text: "Promoting independence in everyday routines",
          category: "Functional Independence",
        },
      ],
    },
    considerSupportIf: [
      "Family outings often feel stressful because your child becomes overwhelmed",
      "Everyday tasks such as dressing, mealtimes, grooming, or transitions frequently lead to frustration",
      "Sensory sensitivities interfere with participation at home, school, or community settings",
      "Your child avoids age-appropriate play activities or social interaction",
      "Teachers have concerns regarding learning, behaviour, attention, or classroom participation",
      "You feel your child needs additional support to manage everyday activities more comfortably",
      "Your child is not using words as expected, finds conversations difficult, or struggles to express wants and needs",
    ],
    closing: {
      heading: "Every Child's Journey Is Unique",
      paragraphs: [
        "A diagnosis does not define a child.",
        "Every child has their own strengths, interests, personality, and way of experiencing the world. Our goal is not to change who a child is, but to better understand their needs, support their strengths, and help them participate more successfully in the activities that matter most to them and their families.",
      ],
    },
    metaDescription:
      "Understanding autism spectrum disorder (ASD) and how pediatric occupational therapy supports sensory needs, daily routines, and social participation.",
  },
  {
    slug: "adhd",
    pillLabel: "Attention Deficit Hyperactivity Disorder",
    title: "Attention Deficit Hyperactivity Disorder (ADHD)",
    understandingHeading: "Understanding ADHD",
    understanding:
      "Children with ADHD are often bright, curious, creative, and full of energy. However, they may experience challenges with attention, impulse control, organization, emotional regulation, and managing everyday demands. ADHD is a neurodevelopmental condition that affects how the brain regulates attention, activity levels, self-control, and executive functioning skills. These challenges are not caused by laziness, poor parenting, or lack of intelligence. Many children with ADHD want to do well but may find it difficult to consistently manage tasks, emotions, and expectations.",
    whatParentsNotice: {
      sections: [
        {
          items: [
            {
              text: "Starts a task but quickly moves on to something else before finishing",
              category: "Sustained Attention Difficulties",
            },
            {
              text: "Frequently loses water bottles, homework, books, toys, or personal belongings",
              category: "Organization & Executive Functioning Challenges",
            },
            {
              text: "Appears to be listening but misses instructions or forgets what was said",
              category: "Working Memory Difficulties",
            },
            {
              text: "Constantly fidgets, taps, squirms, or struggles to remain seated",
              category: "Hyperactivity",
            },
            {
              text: "Interrupts conversations, blurts out answers, or has difficulty waiting their turn",
              category: "Impulsivity",
            },
            {
              text: "Becomes frustrated quickly when things don't go as expected",
              category: "Emotional Regulation Difficulties",
            },
            {
              text: "Needs frequent reminders to complete simple daily tasks",
              category: "Task Initiation & Task Completion Difficulties",
            },
            {
              text: "Appears disorganized despite understanding the work",
              category: "Executive Function Challenges",
            },
            {
              text: "Finds homework and classroom tasks more difficult than expected",
              category: "Academic Participation Challenges",
            },
            {
              text: "Has difficulty transitioning between activities or routines",
              category: "Self-Regulation Difficulties",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy helps children develop practical skills that support success in everyday life at home, school, and within the community. Support may include:",
      items: [
        { text: "Improving attention and concentration during daily tasks", category: "Attention Regulation" },
        {
          text: "Developing planning, organization, and problem-solving skills",
          category: "Executive Functioning Skills",
        },
        {
          text: "Supporting emotional regulation and frustration management",
          category: "Self-Regulation Skills",
        },
        {
          text: "Building body awareness and movement control",
          category: "Motor Coordination & Proprioceptive Processing",
        },
        { text: "Developing strategies for classroom participation", category: "School Participation" },
        { text: "Improving handwriting and task endurance", category: "Fine Motor & Visual-Motor Skills" },
        { text: "Supporting routine management and independence", category: "Functional Independence" },
        {
          text: "Creating sensory strategies that help children stay regulated and engaged",
          category: "Sensory Regulation",
        },
      ],
    },
    considerSupportIf: [
      "Your child's attention difficulties are affecting learning or daily activities",
      "Homework has become a daily struggle",
      "Emotional outbursts occur frequently",
      "Teachers consistently report concerns regarding focus, behaviour, or organization",
      "Your child becomes frustrated because they know what to do but struggle to do it consistently",
      "Daily routines require constant reminders and supervision",
    ],
    closing: {
      heading: "Every Child Has Strengths Beyond Their Challenges",
      paragraphs: [
        "Children with ADHD often bring creativity, curiosity, enthusiasm, energy, and unique ways of thinking to the world around them. By understanding their needs and supporting skill development, we can help them participate more confidently and successfully in everyday life.",
      ],
    },
    metaDescription:
      "Understanding ADHD and how pediatric occupational therapy supports attention, executive functioning, and daily routines.",
  },
  {
    slug: "cerebral-palsy",
    pillLabel: "Cerebral Palsy",
    title: "Cerebral Palsy (CP)",
    understandingHeading: "Understanding Cerebral Palsy",
    understanding:
      "Cerebral Palsy (CP) is a neurological condition that affects movement, posture, muscle control, and coordination. Every child with cerebral palsy is unique. Some children may experience mild difficulties with movement, while others may require more support with everyday activities. Although cerebral palsy affects movement, it does not define a child's personality, abilities, interests, or potential. With appropriate support and opportunities, children can continue to learn, participate, and develop meaningful skills throughout their lives.",
    whatParentsNotice: {
      sections: [
        {
          items: [
            { text: "Reaches developmental milestones later than expected", category: "Developmental Delay" },
            {
              text: "Appears stiff, tight, or has difficulty relaxing muscles",
              category: "Increased Muscle Tone / Spasticity",
            },
            { text: "Appears floppy or has difficulty maintaining posture", category: "Low Muscle Tone / Hypotonia" },
            {
              text: "Has difficulty sitting, standing, crawling, walking, or maintaining balance",
              category: "Gross Motor Challenges",
            },
            { text: "Tires easily during play or daily activities", category: "Reduced Endurance" },
            {
              text: "Has difficulty using both hands together during activities",
              category: "Bilateral Coordination Difficulties",
            },
            {
              text: "Struggles with dressing, feeding, writing, or manipulating small objects",
              category: "Fine Motor Challenges",
            },
            { text: "Finds playground activities more difficult than peers", category: "Motor Coordination Difficulties" },
            {
              text: "Requires assistance for age-appropriate self-care activities",
              category: "Functional Independence Challenges",
            },
            {
              text: "Shows frustration when physical limitations interfere with participation",
              category: "Participation Challenges",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy focuses on helping children participate as independently and successfully as possible in everyday activities. Support may include:",
      items: [
        { text: "Improving hand function, grasp, and object manipulation", category: "Fine Motor Development" },
        { text: "Enhancing posture, balance, and body control during activities", category: "Postural Control" },
        { text: "Supporting dressing, feeding, grooming, and self-care skills", category: "Activities of Daily Living" },
        { text: "Developing play and leisure participation", category: "Play Skills & Participation" },
        { text: "Improving bilateral coordination and hand use", category: "Upper Limb Function" },
        { text: "Supporting classroom participation and handwriting when appropriate", category: "School Participation" },
        {
          text: "Recommending adaptive equipment or environmental modifications when needed",
          category: "Assistive Technology & Adaptations",
        },
        {
          text: "Working towards greater independence and participation in everyday routines",
          category: "Functional Independence",
        },
      ],
    },
    considerSupportIf: [
      "Your child has trouble participating in daily activities because of movement challenges",
      "Self-care skills such as dressing, feeding, or grooming require significant assistance",
      "Hand function affects play, school activities, or independence",
      "Balance, posture, or coordination difficulties limit participation",
      "You would like support in helping your child become more independent in everyday life",
      "You are looking for strategies that can be incorporated into home, school, or community environments",
    ],
    closing: {
      heading: "Every Achievement Matters",
      paragraphs: [
        "For children with cerebral palsy, progress may look different for every individual. Sometimes it is learning to crawl , stand or walk , hold a spoon independently, button a shirt, participate in a classroom activity, play with friends, or accomplish a personal goal that once felt difficult.",
        "Our focus is on supporting meaningful participation, independence, and opportunities for children to engage in the activities that matter most to them and their families.",
      ],
    },
    metaDescription:
      "Understanding cerebral palsy and how pediatric occupational therapy supports movement, posture, and daily independence.",
  },
  {
    slug: "developmental-delay",
    pillLabel: "Developmental Delay",
    title: "Developmental Delay",
    understandingHeading: "Understanding Developmental Delay",
    understanding:
      "Children develop at their own pace, but there are certain milestones that help us understand how they are progressing. Sometimes, a child may take longer than expected to develop skills related to movement, play, communication, learning, self-care, or social interaction. A developmental delay does not tell us how far a child can go—it simply indicates that they may need additional support to develop certain skills and participate more confidently in everyday activities.",
    whatParentsNotice: {
      sections: [
        {
          items: [
            { text: "Reaches milestones later than other children of a similar age", category: "Developmental Milestone Delays" },
            {
              text: "Takes longer to learn new skills such as dressing, feeding, or using utensils",
              category: "Adaptive Skill Delays",
            },
            { text: "Shows limited interest in age-appropriate play activities", category: "Play Skill Delays" },
            { text: "Has difficulty following simple instructions or routines", category: "Cognitive & Learning Challenges" },
            { text: "Appears less independent than peers of the same age", category: "Functional Independence Delays" },
            {
              text: "Struggles with balance, coordination, running, jumping, or climbing",
              category: "Gross Motor Delays",
            },
            {
              text: "Finds activities such as colouring, drawing, building blocks, or using scissors difficult",
              category: "Fine Motor Delays",
            },
            {
              text: "Has difficulty interacting, sharing, or participating with other children",
              category: "Social Participation Challenges",
            },
            {
              text: "Gets frustrated when tasks seem difficult or require extra effort",
              category: "Reduced Confidence & Task Persistence",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy focuses on helping children develop the foundational skills needed for everyday life. Support may include:",
      items: [
        { text: "Building fine motor skills for play, learning, and self-care", category: "Fine Motor Development" },
        { text: "Improving balance, coordination, and body control", category: "Gross Motor Development" },
        { text: "Developing play skills and social participation", category: "Play & Social Development" },
        { text: "Supporting dressing, feeding, toileting, and daily routines", category: "Activities of Daily Living" },
        { text: "Enhancing attention, learning readiness, and task participation", category: "School Readiness Skills" },
        { text: "Improving confidence and independence during everyday activities", category: "Functional Participation" },
        { text: "Supporting sensory processing and regulation when needed", category: "Sensory Integration Support" },
      ],
    },
    considerSupportIf: [
      "You feel your child is consistently behind in multiple developmental areas",
      "Everyday tasks seem much harder for your child compared to peers",
      "Your child becomes frustrated when trying to learn new skills",
      "Teachers, doctors, or caregivers have raised developmental concerns",
      "You are unsure whether your child's development is progressing as expected",
    ],
    metaDescription:
      "Understanding developmental delay and how pediatric occupational therapy supports motor, sensory, and daily living milestones.",
  },
  {
    slug: "sensory-processing-difficulties",
    pillLabel: "Sensory Processing Difficulties",
    title: "Sensory Processing Difficulties",
    understandingHeading: "Understanding Sensory Processing Difficulties",
    understanding:
      "Every day, our brains receive information from our senses—what we see, hear, touch, taste, smell, and how our bodies move. Most of us automatically process this information without thinking about it. Some children, however, experience sensory information differently. They may be extremely sensitive to certain sensations, actively seek sensory experiences, or find it difficult to interpret sensory information accurately. Sensory processing difficulties can affect attention, behaviour, emotions, learning, movement, sleep, feeding, and participation in everyday activities.",
    whatParentsNotice: {
      sections: [
        {
          intro: "Some children may seem overly sensitive to sensory experiences:",
          items: [
            {
              text: "Covers ears during vacuum cleaners, mixers, school bells, or crowded places",
              category: "Auditory Sensitivity",
            },
            {
              text: "Refuses certain clothes because of tags, seams, socks, or fabric textures",
              category: "Tactile Sensitivity",
            },
            {
              text: "Avoids haircuts, nail trimming, tooth brushing, or face washing",
              category: "Touch Sensitivity",
            },
            {
              text: "Is bothered by bright lights, strong smells, or busy environments",
              category: "Visual & Olfactory Sensitivity",
            },
            {
              text: "Becomes overwhelmed in shopping malls, birthday parties, classrooms, or family gatherings",
              category: "Sensory Over-Responsivity",
            },
          ],
        },
        {
          intro: "Some children constantly seek sensory input:",
          items: [
            {
              text: "Loves spinning, swinging, jumping, climbing, or crashing into furniture",
              category: "Vestibular & Proprioceptive Seeking",
            },
            { text: "Constantly touches people, objects, or surfaces", category: "Sensory Seeking Behaviour" },
            { text: "Chews on clothing, pencils, toys, or other non-food items", category: "Oral Sensory Seeking" },
            { text: 'Appears constantly "on the go" and has difficulty sitting still', category: "Movement Seeking" },
            { text: "Uses excessive force during play, writing, or everyday tasks", category: "Body Awareness Difficulties" },
          ],
        },
        {
          intro: "Some children may have difficulty processing sensory information accurately:",
          items: [
            { text: "Appears clumsy or frequently bumps into objects", category: "Proprioceptive Processing Difficulties" },
            { text: "Has trouble judging personal space", category: "Body Awareness Challenges" },
            { text: "Finds balance activities difficult", category: "Vestibular Processing Difficulties" },
            {
              text: "Struggles to coordinate movements during play and sports",
              category: "Motor Planning Difficulties / Praxis Challenges",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy helps children better understand, process, and respond to sensory information in ways that support everyday participation. Support may include:",
      items: [
        {
          text: "Identifying individual sensory preferences and challenges",
          category: "Sensory Profile Assessment",
        },
        { text: "Developing sensory regulation strategies", category: "Self-Regulation Skills" },
        { text: "Supporting attention, participation, and learning", category: "Sensory-Based Intervention" },
        {
          text: "Improving body awareness, coordination, and motor planning",
          category: "Praxis Development",
        },
        {
          text: "Helping children participate more comfortably in school, social, and community environments",
          category: "Functional Participation",
        },
        {
          text: "Providing practical strategies for home, school, and daily routines",
          category: "Family & Environmental Support",
        },
        { text: "Supporting emotional regulation and coping skills", category: "Co-Regulation & Self-Regulation" },
      ],
    },
    considerSupportIf: [
      "Sensory challenges are affecting family routines, mealtimes, school participation, or sleep",
      "Your child frequently avoids or seeks sensory experiences in ways that interfere with daily life",
      "Everyday environments often lead to overwhelm, distress, or meltdowns",
      "Movement, balance, coordination, or body awareness difficulties affect participation",
      "You feel sensory challenges may be contributing to behavioural or emotional difficulties",
      "Not sure if it's sensory? If your child often says, 'it's too loud', 'it hurts', 'I don't like that', constantly seeks movement, or struggles in busy environments, sensory processing may be worth exploring.",
    ],
    metaDescription:
      "Understanding sensory processing difficulties and how occupational therapy supports regulation and everyday participation.",
  },
  {
    slug: "learning-difficulties",
    pillLabel: "Learning Disabilities",
    title: "Learning Disabilities",
    understandingHeading: "Understanding Learning Disabilities",
    understanding:
      "Every child learns differently. Some children may work harder than their peers to develop skills related to reading, writing, spelling, mathematics, attention, memory, or organization. Despite having average or above-average intelligence, they may continue to struggle with specific academic tasks. Learning disabilities are not a reflection of laziness, lack of effort, or poor parenting. Often, children know the answer but find it difficult to process, organize, remember, or express information in the expected way.",
    whatParentsNotice: {
      sections: [
        {
          items: [
            { text: "Takes much longer than expected to complete homework", category: "Learning & Processing Difficulties" },
            {
              text: "Struggles to remember letters, numbers, spellings, or mathematical concepts",
              category: "Memory & Academic Skill Challenges",
            },
            {
              text: "Reads slowly, skips words, or avoids reading activities",
              category: "Reading Difficulties / Dyslexia-Related Features",
            },
            { text: "Finds writing assignments frustrating and difficult to organize", category: "Written Expression Difficulties" },
            {
              text: "Frequently forgets instructions, even after hearing them several times",
              category: "Working Memory Difficulties",
            },
            {
              text: "Knows answers verbally but struggles to write them on paper",
              category: "Processing & Expression Challenges",
            },
            { text: "Appears intelligent and capable but underperforms academically", category: "Learning Differences" },
            { text: "Avoids homework, reading, or school-related activities", category: "Academic Avoidance" },
            {
              text: "Experiences frustration, low confidence, or anxiety related to schoolwork",
              category: "Self-Esteem & Academic Confidence Concerns",
            },
            {
              text: 'Frequently says, "I\'m not good at school" or "I can\'t do it"',
              category: "Reduced Academic Self-Confidence",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy helps strengthen the foundational skills that support successful learning and participation in school. Support may include:",
      items: [
        {
          text: "Improving attention, concentration, and task persistence",
          category: "Attention & Executive Functioning",
        },
        {
          text: "Developing visual perception and visual-motor integration skills",
          category: "Visual Processing Skills",
        },
        {
          text: "Supporting handwriting, written expression, and classroom participation",
          category: "Academic Participation Skills",
        },
        { text: "Building organization, planning, and study skills", category: "Executive Functioning Development" },
        { text: "Strengthening memory and task management strategies", category: "Learning Readiness Skills" },
        { text: "Improving confidence and independence during academic tasks", category: "Functional School Participation" },
        {
          text: "Collaborating with families and schools to support learning success",
          category: "Environmental & Educational Support",
        },
      ],
    },
    considerSupportIf: [
      "Homework regularly leads to frustration, tears, or conflict",
      "Your child works hard but continues to struggle academically",
      "Teachers have raised concerns about learning, writing, attention, or classroom participation",
      "Academic challenges are affecting confidence and motivation",
      "You feel your child is capable of more but is finding it difficult to demonstrate their abilities",
    ],
    metaDescription:
      "Understanding learning disabilities and how pediatric occupational therapy supports reading, writing, and classroom success.",
  },
  {
    slug: "motor-coordination-challenges",
    pillLabel: "Motor Coordination Challenges",
    title: "Motor Coordination Challenges",
    understandingHeading: "Understanding Motor Coordination Challenges",
    understanding:
      "Some children find it difficult to plan, coordinate, and execute movements efficiently. Tasks that seem simple for other children—such as catching a ball, riding a bicycle, using scissors, climbing playground equipment, or participating in sports—may require significantly more effort. Motor coordination difficulties can affect both large body movements (Gross Motor Skills) and hand skills (Fine Motor Skills), impacting participation at home, school, and during play.",
    whatParentsNotice: {
      sections: [
        {
          items: [
            { text: "Frequently trips, bumps into objects, or appears clumsy", category: "Motor Coordination Difficulties" },
            { text: "Avoids sports, playground activities, or physical games", category: "Gross Motor Challenges" },
            {
              text: "Has difficulty learning new movement-based skills such as cycling, skipping, swimming, or ball games",
              category: "Motor Planning Difficulties / Dyspraxia Features",
            },
            {
              text: "Struggles to catch, throw, kick, or coordinate movements during play",
              category: "Bilateral Coordination Challenges",
            },
            { text: "Appears awkward when running, jumping, climbing, or balancing", category: "Balance & Coordination Difficulties" },
            {
              text: "Has difficulty using scissors, colouring, drawing, or manipulating small objects",
              category: "Fine Motor Challenges",
            },
            { text: "Becomes tired more quickly than peers during physical activities", category: "Reduced Motor Endurance" },
            {
              text: "Avoids activities that require coordination because they feel difficult or embarrassing",
              category: "Reduced Movement Confidence",
            },
            { text: "Takes longer than expected to learn everyday motor skills", category: "Motor Learning Difficulties" },
            {
              text: "Becomes frustrated when physical tasks seem harder than they should",
              category: "Participation Challenges",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy focuses on developing the skills needed for movement, coordination, confidence, and participation. Support may include:",
      items: [
        { text: "Improving balance, coordination, and body awareness", category: "Gross Motor Development" },
        { text: "Strengthening motor planning and movement sequencing skills", category: "Praxis & Motor Planning" },
        {
          text: "Developing hand skills for writing, dressing, feeding, and classroom activities",
          category: "Fine Motor Development",
        },
        { text: "Improving bilateral coordination and postural stability", category: "Postural Control & Coordination" },
        {
          text: "Building confidence during sports, play, and recreational activities",
          category: "Participation & Confidence Building",
        },
        {
          text: "Supporting school-related motor tasks such as handwriting and classroom participation",
          category: "Functional Academic Skills",
        },
        { text: "Encouraging greater independence in everyday activities", category: "Functional Independence" },
      ],
    },
    considerSupportIf: [
      "Your child avoids physical activities because they find them difficult",
      "Coordination challenges are affecting participation in school, sports, or play",
      "Hand skills are making writing, dressing, or self-care tasks difficult",
      "Your child appears significantly less confident in movement-based activities compared to peers",
      "Everyday motor tasks require more effort than expected for their age",
    ],
    metaDescription:
      "Understanding motor coordination challenges and how pediatric occupational therapy builds physical confidence and participation.",
  },
  {
    slug: "handwriting-difficulties",
    pillLabel: "Handwriting Difficulties",
    title: "Handwriting Difficulties",
    understandingHeading: "Understanding Handwriting Difficulties",
    understanding:
      "Handwriting is much more than putting letters on paper. It requires the successful coordination of visual, motor, sensory, cognitive, and postural skills working together at the same time. When handwriting becomes difficult, children often spend so much energy trying to form letters that they struggle to keep up with classroom demands, express their ideas, or complete written work confidently.",
    whatParentsNotice: {
      sections: [
        {
          items: [
            { text: "Uses an awkward or inefficient pencil grasp", category: "Pencil Grip Difficulties" },
            { text: "Writes slowly compared to classmates", category: "Writing Speed Difficulties" },
            {
              text: "Complains of hand pain or fatigue during writing tasks",
              category: "Reduced Hand Strength & Endurance",
            },
            { text: "Forms letters inconsistently or reverses letters and numbers", category: "Letter Formation Difficulties" },
            { text: "Has messy handwriting that is difficult to read", category: "Handwriting Legibility Challenges" },
            {
              text: "Struggles to stay within lines or maintain spacing between words",
              category: "Visual-Motor Integration Difficulties",
            },
            { text: "Avoids writing activities, homework, or written assignments", category: "Reduced Writing Confidence" },
            {
              text: "Knows the answer but finds it difficult to get thoughts onto paper",
              category: "Written Expression Challenges",
            },
            {
              text: "Takes significantly longer to complete schoolwork involving writing",
              category: "Classroom Participation Difficulties",
            },
            {
              text: "Becomes frustrated, anxious, or upset when asked to write",
              category: "Academic Confidence Concerns",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy focuses on developing the underlying skills required for successful handwriting. Support may include:",
      items: [
        { text: "Developing efficient pencil grasp and control", category: "Pencil Skills" },
        { text: "Improving hand strength, dexterity, and endurance", category: "Fine Motor Development" },
        {
          text: "Enhancing visual-motor integration and eye-hand coordination",
          category: "Visual-Motor Skills",
        },
        {
          text: "Improving letter formation, spacing, alignment, and writing organization",
          category: "Handwriting Skills",
        },
        { text: "Supporting posture and body stability during seated work", category: "Postural Control" },
        { text: "Building confidence and participation in classroom writing activities", category: "Academic Participation" },
        {
          text: "Identifying underlying factors contributing to handwriting difficulties",
          category: "Functional Assessment",
        },
      ],
    },
    considerSupportIf: [
      "Handwriting is affecting your child's academic performance",
      "Writing tasks consistently cause frustration or avoidance",
      "Your child struggles to complete written work within expected timeframes",
      "Teachers have raised concerns regarding handwriting quality or speed",
      "Your child appears capable of answering verbally but struggles when writing",
      "Handwriting difficulties are affecting confidence and classroom participation",
    ],
    metaDescription:
      "Understanding handwriting difficulties and how pediatric occupational therapy helps children write legibly and with less fatigue.",
  },
  {
    slug: "attention-difficulties",
    pillLabel: "Attention, Focus & Concentration Challenges",
    title: "Attention, Focus & Concentration Challenges",
    understandingHeading: "Understanding Attention Challenges",
    understanding:
      'Many children find it difficult to stay focused, follow instructions, complete tasks, or remain engaged in activities for extended periods of time. While attention challenges are sometimes associated with ADHD, they can also occur due to sensory processing differences, learning difficulties, emotional factors, executive functioning challenges, developmental delays, or simply because the demands being placed on the child exceed their current skills. Attention is not just about "sitting still." It involves listening, processing information, staying organized, filtering distractions, remembering instructions, and completing tasks successfully.',
    whatParentsNotice: {
      sections: [
        {
          items: [
            { text: "Frequently starts activities but leaves them unfinished", category: "Sustained Attention Difficulties" },
            {
              text: "Needs repeated reminders to complete simple daily tasks",
              category: "Attention & Task Completion Challenges",
            },
            {
              text: "Appears distracted by sounds, people, or activities happening around them",
              category: "Difficulty Filtering Distractions",
            },
            { text: "Forgets instructions shortly after hearing them", category: "Working Memory Difficulties" },
            {
              text: "Takes much longer than expected to complete homework or routine activities",
              category: "Task Persistence Difficulties",
            },
            {
              text: "Loses track of belongings such as water bottles, books, homework, or school materials",
              category: "Organization Challenges",
            },
            {
              text: 'Appears to daydream or "switch off" during conversations or classroom activities',
              category: "Attention Regulation Difficulties",
            },
            {
              text: "Has difficulty following multi-step instructions",
              category: "Processing & Working Memory Challenges",
            },
            {
              text: "Struggles to stay focused during table-top activities, homework, reading, or writing tasks",
              category: "Sustained Concentration Difficulties",
            },
            {
              text: "Becomes frustrated when tasks require prolonged effort or concentration",
              category: "Mental Endurance Challenges",
            },
          ],
        },
      ],
    },
    howOtHelps: {
      intro:
        "Occupational Therapy helps identify the factors contributing to attention difficulties and develops practical strategies that support participation at home, school, and in everyday life. Support may include:",
      items: [
        { text: "Improving attention, concentration, and task engagement", category: "Attention Regulation Skills" },
        {
          text: "Developing planning, organization, and time-management abilities",
          category: "Executive Functioning Skills",
        },
        { text: "Addressing sensory factors that may affect focus and participation", category: "Sensory Processing Support" },
        {
          text: "Building routines and strategies for completing daily tasks successfully",
          category: "Functional Organization Skills",
        },
        { text: "Supporting learning readiness and classroom participation", category: "School Participation Skills" },
        { text: "Developing self-monitoring and self-regulation strategies", category: "Self-Regulation Skills" },
        {
          text: "Collaborating with families and educators to create supportive environments",
          category: "Environmental Modifications & Support",
        },
      ],
    },
    considerSupportIf: [
      "Your child frequently struggles to complete age-appropriate tasks",
      "Homework, reading, or writing activities consistently take much longer than expected",
      "Teachers regularly report concerns regarding attention, participation, or task completion",
      "Daily routines require constant reminders and supervision",
      "Attention difficulties are affecting learning, confidence, independence, or participation in everyday activities",
      "You feel your child understands what to do but finds it difficult to stay engaged long enough to complete it",
    ],
    metaDescription:
      "Understanding attention, focus, and concentration challenges and how pediatric occupational therapy supports learning readiness.",
  },
];

export function getClientCondition(slug: string): ClientCondition | undefined {
  return clientConditions.find((condition) => condition.slug === slug);
}
