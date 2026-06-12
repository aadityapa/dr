export type FaqCategory = {
  id: string;
  title: string;
  faqs: { q: string; a: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    faqs: [
      { q: "What is pediatric occupational therapy?", a: "Pediatric occupational therapy helps children develop the skills needed for daily life — play, learning, self-care, and social participation. At Thrive with sharuja in Kandivali West, Mumbai, Dr. Sharuja Sarap uses sensory-integrative, movement-based approaches tailored to each child's strengths." },
      { q: "Who needs occupational therapy for children?", a: "Children from birth to 14 years who struggle with sensory processing, motor coordination, attention, handwriting, self-care routines, or school participation may benefit. A consultation helps determine whether OT is the right fit." },
      { q: "How is OT different from physiotherapy for children?", a: "Physiotherapy primarily addresses gross motor function and physical recovery. Pediatric OT focuses on participation in everyday activities — dressing, eating, writing, playing, and learning — through sensory, motor, and cognitive strategies." },
      { q: "What happens in the first OT session?", a: "The first session includes a warm introduction, parent discussion, and child-friendly observation. Dr. Sharuja Sarap explores your concerns, observes your child's responses, and outlines whether a full evaluation or direct therapy is recommended." },
      { q: "How long are OT sessions?", a: "Sessions typically last 45–60 minutes depending on the child's age, attention span, and therapy goals. Consistency and home carryover are emphasized for lasting progress." },
      { q: "How often should my child attend OT?", a: "Most children attend once or twice weekly. Frequency depends on assessment findings, severity of challenges, and family goals. Dr. Sharuja Sarap discusses a realistic plan during evaluation." },
      { q: "Can OT help with school readiness?", a: "Yes. OT supports pencil grip, pre-writing skills, attention, sitting tolerance, and self-regulation — all essential for confident school participation." },
      { q: "Does insurance cover pediatric OT in Mumbai?", a: "Coverage varies by provider and policy. We provide detailed invoices and reports that families can submit to their insurer. Contact us to discuss documentation requirements." },
      { q: "What age is best to start OT?", a: "Earlier is often better when concerns are present, but it is never too late. Dr. Sharuja Sarap works with children from birth through 14 years with age-appropriate programs." },
      { q: "Can siblings attend sessions?", a: "Parents are welcome. Sibling attendance depends on the session focus and clinic space. We recommend discussing this when booking your appointment." },
      { q: "How do you measure progress in OT?", a: "Progress is tracked through standardized assessments, goal reviews, parent feedback, and observable changes in daily functioning — not just clinic performance." },
      { q: "Is OT only for children with diagnoses?", a: "No. Many children without a formal diagnosis benefit from OT for handwriting, coordination, sensory sensitivities, or attention challenges." },
      { q: "What should my child wear to OT?", a: "Comfortable clothing that allows free movement. For aquatic sessions, bring swimwear and a towel as advised at booking." },
      { q: "Do you provide home programs?", a: "Yes. Every family receives practical home strategies and activities to reinforce skills between sessions." },
      { q: "Where is Thrive with sharuja located?", a: "We are at Manhar Medical And Jeet Child Development Centre, 2-A, Gyan Kutir, S.V.P. Road, Near Municipal Garden, Kandivali (West), Mumbai – 400067." },
    ],
  },
  {
    id: "autism",
    title: "Autism & ASD",
    faqs: [
      { q: "How does OT help children with autism?", a: "OT supports sensory regulation, motor planning, daily routines, and social participation for children with ASD. Dr. Sharuja Sarap uses structured, play-led interventions that respect each child's unique communication and learning style." },
      { q: "Can OT reduce meltdowns in autistic children?", a: "Many meltdowns stem from sensory overload or difficulty with transitions. OT identifies triggers and builds regulation strategies, often reducing frequency and intensity over time." },
      { q: "Does my child need an autism diagnosis before starting OT?", a: "No. If you observe sensory, motor, or participation challenges consistent with ASD, therapy can begin while diagnostic processes continue." },
      { q: "How do you handle sensory sensitivities in ASD?", a: "We use graded exposure, sensory diets, and calming strategies tailored to each child's sensory profile — never forcing uncomfortable experiences." },
      { q: "Can OT improve social skills in autism?", a: "OT builds foundational skills — joint attention, turn-taking, body awareness, and emotional regulation — that support meaningful social connection." },
      { q: "Is ABA the same as OT for autism?", a: "No. ABA focuses on behavior modification. OT addresses sensory-motor foundations for participation in daily life. Many families use both complementarily." },
      { q: "What outcomes can parents expect for ASD therapy?", a: "Outcomes vary but often include improved self-regulation, greater independence in routines, better tolerance of environments, and increased confidence in play and learning." },
      { q: "How long does autism-focused OT take?", a: "Progress is individual. Some families see meaningful changes within 8–12 weeks; long-term support may be needed for complex profiles." },
      { q: "Do you work with schools for autistic children?", a: "Yes. We provide classroom recommendations, sensory strategies, and coordination with teachers when families request it." },
      { q: "Can OT help with picky eating in autism?", a: "OT addresses oral-motor skills, sensory aversions, and mealtime routines. Dr. Sharuja Sarap is certified in Oral Placement Therapy (OPT) for feeding-related challenges." },
      { q: "What is a sensory diet for autism?", a: "A personalized schedule of sensory activities that helps a child stay regulated throughout the day — not related to food, but to sensory input needs." },
      { q: "When should we start OT for a child suspected of autism?", a: "As soon as concerns arise. Early sensory-motor support can significantly improve participation and reduce family stress." },
    ],
  },
  {
    id: "adhd",
    title: "ADHD & Attention",
    faqs: [
      { q: "Can OT help children with ADHD?", a: "Yes. OT addresses attention regulation, impulse control, executive function, and motor coordination — common challenges in ADHD that affect school and home life." },
      { q: "How is OT different from medication for ADHD?", a: "Medication addresses neurological attention pathways. OT builds practical skills — organization, movement breaks, sensory strategies, and task completion — for daily functioning." },
      { q: "Does Brain Gym help ADHD?", a: "Brain Gym® movement activities support focus, coordination, and learning readiness. Dr. Sharuja Sarap is a certified Brain Gym Instructor and integrates it with OT." },
      { q: "Can OT improve homework completion for ADHD?", a: "OT teaches environmental modifications, movement strategies, task breakdown, and self-regulation tools that make homework more manageable." },
      { q: "What executive function skills does OT address?", a: "Planning, organization, working memory, task initiation, time management, and emotional regulation — all critical for children with ADHD." },
      { q: "Is OT effective without an ADHD diagnosis?", a: "Yes. Many children with attention difficulties benefit from OT even before or without a formal ADHD diagnosis." },
      { q: "How do you help hyperactive children in sessions?", a: "Sessions incorporate movement, sensory input, and structured breaks. We meet children where they are energetically rather than expecting stillness." },
      { q: "Can OT reduce impulsive behavior?", a: "OT builds body awareness, pause strategies, and environmental supports that help children respond rather than react impulsively." },
      { q: "What classroom strategies do you recommend for ADHD?", a: "Movement breaks, fidget tools, preferential seating, visual schedules, and task chunking — customized to each child's profile." },
      { q: "At what age can ADHD-focused OT begin?", a: "From preschool age when attention and participation challenges become noticeable, through adolescence up to 14 years." },
      { q: "How do parents support ADHD therapy at home?", a: "Consistent routines, movement before seated tasks, visual timers, and celebrating small wins reinforce clinic progress." },
      { q: "Does screen time affect ADHD and OT progress?", a: "Excessive unstructured screen time can impact attention and sleep. We guide families on balanced routines that support therapy goals." },
    ],
  },
  {
    id: "aquatic",
    title: "Aquatic Therapy",
    faqs: [
      { q: "What is pediatric aquatic therapy?", a: "Aquatic therapy uses the therapeutic properties of water — buoyancy, resistance, and warmth — to support motor, sensory, and emotional development in a safe, engaging environment." },
      { q: "Does my child need to know how to swim?", a: "No. All aquatic sessions are fully supervised by Dr. Sharuja Sarap, who is IATF-certified in aquatherapy. Activities are adapted to each child's comfort level." },
      { q: "Who benefits from aquatic therapy in Mumbai?", a: "Children with low muscle tone, motor coordination challenges, cerebral palsy, sensory needs, or those who thrive with water-based movement benefit most." },
      { q: "Where are aquatic sessions held?", a: "Sessions are conducted at partner aquatic facilities accessible from Kandivali West. Location details are shared at booking." },
      { q: "What should we bring to aquatic therapy?", a: "Swimwear, towel, change of clothes, and any specific items discussed during your consultation. Non-slip footwear is recommended." },
      { q: "Is aquatic therapy safe for young children?", a: "Yes, with certified supervision. Water temperature, depth, and activities are carefully selected for each child's age and ability." },
      { q: "How does water help with sensory regulation?", a: "Hydrostatic pressure provides calming deep touch input. Warm water relaxes muscles. Controlled movement in water supports proprioceptive and vestibular needs." },
      { q: "Can aquatic therapy improve balance?", a: "Yes. Water provides a safe environment to practice balance and coordination with reduced fear of falling." },
      { q: "How often are aquatic sessions recommended?", a: "Typically once weekly, often combined with land-based OT for comprehensive progress." },
      { q: "Are there medical conditions that prevent aquatic therapy?", a: "Certain skin conditions, open wounds, seizures without control, or specific cardiac conditions may require medical clearance. Discuss health history at consultation." },
      { q: "Will aquatic skills transfer to land activities?", a: "Yes. Improved strength, coordination, and confidence in water carry over to playground, sports, and daily movement on land." },
      { q: "What age can start aquatic therapy?", a: "Generally from 2 years onward, depending on individual readiness and comfort with water." },
    ],
  },
  {
    id: "brain-gym",
    title: "Brain Gym",
    faqs: [
      { q: "What is Brain Gym®?", a: "Brain Gym® is a movement-based program that supports learning, attention, coordination, and emotional well-being through specific physical activities that integrate brain and body." },
      { q: "Who is Brain Gym suitable for?", a: "Children aged 4–14 who struggle with focus, reading, writing, coordination, or learning readiness — with or without a formal diagnosis." },
      { q: "Is Dr. Sharuja Sarap certified in Brain Gym?", a: "Yes. Dr. Sharuja Sarap is a Certified Brain Gym Instructor & Practitioner with 18+ years of pediatric experience in Mumbai." },
      { q: "How is Brain Gym different from regular exercise?", a: "Brain Gym uses targeted movements designed to activate specific neural pathways for learning, not general fitness." },
      { q: "Can Brain Gym help with reading difficulties?", a: "Yes. Activities address eye tracking, midline crossing, and bilateral coordination — foundational skills for fluent reading." },
      { q: "How long before Brain Gym shows results?", a: "Many families notice improved focus within 4–8 weeks of consistent practice, both in sessions and at home." },
      { q: "Can Brain Gym be done at home?", a: "Yes. Dr. Sharuja Sarap provides home practice routines tailored to each child's learning profile." },
      { q: "Is Brain Gym evidence-based?", a: "Brain Gym is widely used in educational and therapeutic settings globally. Dr. Sharuja Sarap integrates it within her evidence-informed OT framework." },
      { q: "Can Brain Gym be combined with OT?", a: "Absolutely. Brain Gym complements occupational therapy for holistic attention, motor, and learning support." },
      { q: "Does Brain Gym help with exam anxiety?", a: "Movement-based regulation strategies can reduce anxiety and improve focus before and during academic tasks." },
      { q: "What does a Brain Gym session look like?", a: "Sessions include warm-up movements, targeted Brain Gym activities, learning-related tasks, and cool-down — all in a playful, child-friendly format." },
      { q: "Is Brain Gym only for school-age children?", a: "Primarily ages 4–14, when learning demands increase. Younger children may benefit from movement-based OT instead." },
    ],
  },
  {
    id: "handwriting",
    title: "Handwriting",
    faqs: [
      { q: "Why is my child's handwriting messy?", a: "Messy handwriting often reflects underlying challenges — weak hand muscles, poor pencil grip, visual-motor integration difficulties, or postural instability — not laziness." },
      { q: "What is Handwriting Without Tears (HWT)?", a: "HWT is an evidence-based, multisensory handwriting program that teaches letter formation through structured, engaging activities. Dr. Sharuja Sarap is HWT-certified." },
      { q: "At what age should handwriting be legible?", a: "By age 7–8, most children write legibly. Persistent difficulties beyond this age warrant professional assessment." },
      { q: "Can OT fix pencil grip?", a: "Yes. OT assesses grip patterns, hand strength, and tool adaptation to develop a functional, comfortable pencil hold." },
      { q: "My child avoids writing. Can you help?", a: "We address the sensory, motor, and emotional factors that make writing frustrating, rebuilding confidence through success-based practice." },
      { q: "Does handwriting training help with exams?", a: "Yes. Improved speed, legibility, and endurance reduce fatigue during timed written assessments." },
      { q: "How long does handwriting therapy take?", a: "Most children show improvement within 8–16 weeks of consistent sessions and home practice." },
      { q: "Do you work with schools on handwriting?", a: "We provide classroom accommodations and teacher recommendations — preferential seating, grip tools, and modified writing tasks." },
      { q: "Can typing replace handwriting therapy?", a: "Typing is a useful accommodation but does not address underlying motor and sensory foundations. Both may be appropriate depending on goals." },
      { q: "What tools do you recommend for handwriting?", a: "Triangular pencils, grip aids, slant boards, and adaptive paper — selected individually after assessment." },
      { q: "Is poor handwriting linked to learning difficulties?", a: "Often yes. Handwriting requires integration of visual, motor, sensory, and cognitive skills — areas commonly affected in learning difficulties." },
      { q: "Can left-handed children benefit from HWT?", a: "Yes. HWT accommodates left-handed writers with appropriate paper positioning and tool recommendations." },
    ],
  },
  {
    id: "child-development",
    title: "Child Development",
    faqs: [
      { q: "What are developmental milestones?", a: "Developmental milestones are skills most children achieve by certain ages — rolling, sitting, walking, talking, and self-care. Variation is normal, but significant delays warrant evaluation." },
      { q: "When should I worry about developmental delay?", a: "If your child is significantly behind peers in multiple areas — movement, communication, play, or self-care — consult a pediatric specialist. Early intervention at Thrive with sharuja can make a meaningful difference." },
      { q: "What is sensory integration?", a: "Sensory integration is the brain's ability to organize and respond to sensory input — touch, movement, sound, sight. Difficulties can affect behavior, attention, and learning." },
      { q: "What is fine motor development?", a: "Fine motor skills involve small muscle control — grasping, cutting, buttoning, writing. OT builds these through purposeful, play-based activities." },
      { q: "What is gross motor development?", a: "Gross motor skills use large muscles — running, jumping, balancing. OT and aquatic therapy both support gross motor growth." },
      { q: "How does play support development?", a: "Play is a child's primary occupation. Through play, children build motor, cognitive, social, and emotional skills in natural, joyful ways." },
      { q: "What is self-regulation in children?", a: "Self-regulation is the ability to manage emotions, energy, and responses to situations. OT teaches regulation strategies through sensory and movement approaches." },
      { q: "Can premature birth affect development?", a: "Yes. Premature infants may need extra support for motor, sensory, and feeding milestones. Early OT can significantly improve outcomes." },
      { q: "What is motor planning?", a: "Motor planning (praxis) is the ability to conceive, plan, and execute new motor actions. Difficulties appear as clumsiness or difficulty learning new physical tasks." },
      { q: "How do I know if my child has sensory processing difficulties?", a: "Signs include extreme reactions to textures, sounds, or movement; seeking constant motion; difficulty with transitions; or meltdowns in busy environments." },
      { q: "What is the age range for therapy at Thrive with sharuja?", a: "We support children from birth to 14 years with programs tailored to each developmental stage." },
      { q: "How does early intervention help?", a: "The brain is most adaptable in early childhood. Timely therapy can reshape neural pathways, improving long-term independence and participation." },
    ],
  },
  {
    id: "rmti-opt",
    title: "RMTI & OPT",
    faqs: [
      { q: "What is RMTI therapy?", a: "RMTI (Rhythmic Movement Training Integration) uses gentle rhythmic movements to support brain development, integrate retained primitive reflexes, and improve postural and emotional foundations." },
      { q: "What is OPT therapy?", a: "OPT (Oral Placement Therapy) uses targeted exercises and tools to develop oral-motor skills for safe feeding, speech readiness, and oral sensory tolerance." },
      { q: "Who benefits from RMTI?", a: "Children with coordination difficulties, attention challenges, emotional dysregulation, or signs of retained primitive reflexes." },
      { q: "Can OPT help picky eaters?", a: "Yes. OPT addresses oral sensory aversions, motor skills, and mealtime routines that contribute to selective eating." },
      { q: "Is Dr. Sharuja Sarap certified in RMTI and OPT?", a: "Yes. She holds certifications in both RMTI and OPT, integrating them within her pediatric OT framework." },
      { q: "How is RMTI different from MNRI?", a: "Both address reflex integration using different protocols. Dr. Sharuja Sarap selects the most appropriate approach for each child." },
      { q: "Does OPT replace speech therapy?", a: "OPT addresses oral-motor foundations. It complements speech therapy when articulation is affected by oral-motor weakness." },
      { q: "How long does RMTI take to show results?", a: "Many families notice foundational changes within 8–16 weeks of consistent practice at home and clinic." },
      { q: "Is OPT safe for young children?", a: "Yes. OPT uses child-appropriate tools and exercises within a playful, trusting therapeutic relationship." },
      { q: "Can RMTI help with reading difficulties?", a: "Yes. Retained reflexes can affect eye tracking and coordination needed for reading. RMTI addresses these foundations." },
      { q: "Will OPT force my child to eat new foods?", a: "Never. OPT uses gradual, child-led exposure in a safe therapeutic context." },
      { q: "Can RMTI and OPT be combined with regular OT?", a: "Absolutely. They are integrated within Dr. Sharuja Sarap's comprehensive pediatric OT programs." },
    ],
  },
  {
    id: "parent-guidance",
    title: "Parent Guidance",
    faqs: [
      { q: "How do I prepare my child for the first therapy visit?", a: "Talk positively about meeting a friendly doctor who helps children play and learn. Avoid framing it as a test. Bring a comfort item if helpful." },
      { q: "What should I bring to the first appointment?", a: "Previous reports, school feedback, a list of concerns, and any referral letters. Arrive 10 minutes early to complete intake." },
      { q: "Can both parents attend sessions?", a: "Yes. We encourage both parents to attend the initial consultation. Ongoing sessions typically involve one primary caregiver." },
      { q: "How do I explain therapy to my child?", a: "Use simple, positive language: 'We are going to play fun games that help your body and brain feel strong and happy.'" },
      { q: "What if my child refuses to participate?", a: "Resistance is common initially. Dr. Sharuja Sarap uses relationship-based, child-led approaches to build trust before demanding participation." },
      { q: "How do I support therapy progress at home?", a: "Follow home programs consistently, maintain routines, communicate openly with your therapist, and celebrate small wins daily." },
      { q: "When will I see results?", a: "Some families notice changes within weeks; others need longer. Consistency, home practice, and open communication accelerate progress." },
      { q: "How do I talk to my child's school about therapy?", a: "We provide written recommendations you can share with teachers. Many schools welcome OT input for classroom accommodations." },
      { q: "Is it my fault my child needs therapy?", a: "Never. Developmental differences arise from many factors. Seeking support is one of the most loving decisions a parent can make." },
      { q: "How do I manage therapy costs?", a: "Discuss session frequency and priorities with Dr. Sharuja Sarap. We focus on efficient, goal-directed plans and provide documentation for insurance claims." },
      { q: "Can grandparents be involved in therapy?", a: "Yes. Extended family involvement, with parent consent, can reinforce home strategies and provide consistent support." },
      { q: "What questions should I ask at the first consultation?", a: "Ask about assessment process, expected timeline, home activities, school coordination, and how progress will be measured." },
      { q: "How do I book a consultation with Dr. Sharuja Sarap?", a: "Call 9820525197, WhatsApp us, email sharujasaraf@gmail.com, or use the appointment form on our website." },
      { q: "What are your clinic timings?", a: "Monday to Saturday, 9:00 AM – 5:00 PM at Kandivali West, Mumbai." },
      { q: "Do you offer online consultations?", a: "Initial consultations and parent guidance sessions may be available online. Hands-on therapy sessions are in-person at our Kandivali clinic." },
      { q: "What is Thrive with sharuja's therapy philosophy?", a: "Belonging Without Boundaries — we celebrate each child's strengths while building skills for meaningful participation at home, school, and in the community." },
      { q: "How quickly can I get an appointment?", a: "We typically offer consultations within 3–5 business days. Call 9820525197 or WhatsApp for the earliest available slot." },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export function getFaqsByCategory(categoryId: string) {
  return faqCategories.find((c) => c.id === categoryId)?.faqs ?? [];
}

export function getFaqsForKeywords(keywords: string[], limit = 6) {
  const lower = keywords.map((k) => k.toLowerCase());
  return allFaqs.filter((faq) => {
    const text = `${faq.q} ${faq.a}`.toLowerCase();
    return lower.some((kw) => text.includes(kw));
  }).slice(0, limit);
}
