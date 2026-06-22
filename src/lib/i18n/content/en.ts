import { parentMessage, parentWondering } from "@/lib/parent-voice";
import { conditionVoiceOverrides } from "@/lib/parent-voice-conditions";
import { conditions, doctorProfile, googleReviews, services, siteConfig, testimonials, therapyJourneySteps } from "@/lib/site-data";

import { buildHomeLocaleContent } from "./home-locale";
import { expertiseLandingEn } from "./expertise-locale";
import type { ConditionLocaleCopy, LocaleContent } from "./types";

function buildConditionDetails(): Record<string, ConditionLocaleCopy> {
  const result: Record<string, ConditionLocaleCopy> = {};
  for (const condition of conditions) {
    const override = conditionVoiceOverrides[condition.slug];
    if (!override?.intro) continue;
    result[condition.slug] = {
      title: condition.title,
      reassurance: condition.reassurance,
      intro: override.intro,
      symptoms: override.symptoms ?? [],
      challenges: override.challenges ?? [],
      therapyRole: override.therapyRole ?? [],
      benefits: override.benefits ?? [],
      whenToBegin: override.whenToBegin ?? "",
      faqs: override.faqs ?? [],
    };
  }
  return result;
}

export const enContent: LocaleContent = {
  common: {
    learnMore: "Learn more →",
    viewAll: "View All →",
    viewAllArrow: "View All →",
    readFullGuide: "Read full guide →",
    step: "Step",
    discover: "Discover",
    previousRoom: "Previous room",
    nextRoom: "Next room",
    basedOnGoogleReviews: "Based on {count}+ Google reviews",
    viewAllGoogleReviews: "View All Reviews on Google",
    orReadMoreOn: "Or read more on our",
    testimonialsPage: "testimonials page",
    storiesConsent: "Stories shared with parental consent. Individual outcomes vary.",
    learnMoreBtn: "Learn More",
    bookConsultation: "Book Consultation",
    startConversation: "Start With a Conversation",
  },
  parentMessage: {
    kicker: "A note for parents",
    title: parentMessage.title,
    paragraphs: [...parentMessage.paragraphs],
    cta: parentMessage.cta,
    bookConversation: "Book a Conversation",
    askQuestion: "Ask a Question",
  },
  parentWondering: {
    kicker: "Maybe You're Wondering...",
    title: "Questions every parent carries quietly",
    description:
      "You're not alone in thinking these things. Here are honest answers — from someone who's sat with hundreds of Mumbai families just like yours.",
    items: parentWondering.map((item) => ({ question: item.question, answer: item.answer })),
  },
  servicesPreview: {
    kicker: "How We Can Help",
    title: "Support for the moments that matter",
    description:
      "Every family comes to us with a different story. Here are some of the ways we walk alongside children and parents in Kandivali and across Mumbai.",
    viewAllServices: "View Expertise & Approaches",
  },
  whoWeHelp: {
    kicker: "Is This Your Child?",
    title: "Every story is different. Every one matters.",
    description:
      "You don't need a diagnosis to reach out. If something feels harder than it should — for your child or for you — we're here to listen.",
    seeAllConditions: "See All Conditions We Support",
  },
  therapyJourney: {
    kicker: "Your Journey With Us",
    title: "Here's what working together looks like",
    description: "No surprises. Just warmth, clarity, and someone in your corner at every step.",
    fullJourney: "Full Therapy Journey →",
    steps: therapyJourneySteps.map((step) => ({
      title: step.title,
      description: step.description,
    })),
  },
  doctor: {
    kicker: "Someone who gets it",
    title: `Hi, I'm ${siteConfig.doctorName}`,
    description: "Pediatric occupational therapist · Kandivali West, Mumbai",
    bio: doctorProfile.bio,
    stats: [
      { value: `${siteConfig.experienceYears}+`, label: "Years Experience" },
      { value: `Reg. ${siteConfig.registrationNumber}`, label: "Allied Health Council" },
      { value: "Ph.D. Scholar", label: "Pediatric OT Research" },
      { value: "10+ Programs", label: "International Certs" },
    ],
    qualifications: doctorProfile.qualifications.slice(0, 4),
    fullProfile: "Full Profile & Certifications",
    bookConsultation: "Book Consultation",
  },
  certifications: {
    title: "Training that backs up the care",
    description:
      "Dr. Sharuja brings specialised skills — so your child gets thoughtful support, not guesswork.",
    viewAll: "View All →",
  },
  successStories: {
    kicker: "Stories We Are Grateful To Be Part Of",
    title: "Families who trusted us with their journey",
    description:
      "These words are shared with permission. Every child's path is different — but hope shows up in small, real moments.",
    consent: "Stories shared with parental consent. Individual outcomes vary.",
    readMore: "Read More Stories →",
    items: testimonials.map((t) => ({
      parent: t.parent,
      quote: t.quote,
      milestone: t.milestone,
    })),
  },
  googleReviews: {
    kicker: "What parents say",
    title: "Words that mean a lot to us",
    description:
      "Real reviews from families who've walked through our doors in Kandivali. Your trust is something we never take lightly.",
    basedOnReviews: "Based on {count}+ Google reviews",
    viewAll: "View All Reviews on Google",
    orReadMore: "Or read more on our",
    testimonialsLink: "testimonials page",
    items: googleReviews.reviews.map((r) => ({ author: r.author, text: r.text })),
  },
  clinicTour: {
    kicker: "Our space",
    title: "A place where children feel safe to explore",
    description:
      "Soft colours. Room to move. Corners for quiet when it's all too much. Come see it before your first visit — many parents say it puts them at ease.",
    fullGallery: "Full Gallery",
    bookVisit: "Book a Visit",
    rooms: [
      {
        title: "Sensory Gym",
        description: "Swings, climbing structures, and tactile materials — where regulation meets play.",
        hotspot: "Therapeutic equipment for sensory integration",
      },
      {
        title: "Assessment Room",
        description: "A calm, child-friendly space for understanding your child's unique strengths.",
        hotspot: "Play-based evaluation areas",
      },
      {
        title: "Therapy Rooms",
        description: "Warm, inviting rooms designed to help children feel safe and ready to engage.",
        hotspot: "One-on-one therapy spaces",
      },
      {
        title: "Waiting Area",
        description: "Comfortable for parents — because your peace of mind matters too.",
        hotspot: "Family-friendly reception",
      },
    ],
  },
  homeFaq: {
    kicker: "FAQ",
    title: "Questions parents ask us most",
    description: "Honest answers — and a full library of 100+ FAQs if you want to dig deeper.",
    browseAll: "Browse All FAQs →",
    items: [
      {
        q: "What is pediatric occupational therapy?",
        a: "Pediatric occupational therapy helps children develop the skills needed for daily life — play, learning, self-care, and social participation. At Thrive With Sharuja in Kandivali West, Mumbai, Dr. Sharuja Sarap uses sensory-integrative, movement-based approaches tailored to each child's strengths.",
      },
      {
        q: "Who needs occupational therapy for children?",
        a: "Children from birth to 14 years who struggle with sensory processing, motor coordination, attention, handwriting, self-care routines, or school participation may benefit. A consultation helps determine whether OT is the right fit.",
      },
      {
        q: "How does OT help children with autism?",
        a: "OT supports sensory regulation, motor planning, daily routines, and social participation for children with ASD. Dr. Sharuja Sarap uses structured, play-led interventions that respect each child's unique communication and learning style.",
      },
      {
        q: "Can OT reduce meltdowns in autistic children?",
        a: "Many meltdowns stem from sensory overload or difficulty with transitions. OT identifies triggers and builds regulation strategies, often reducing frequency and intensity over time.",
      },
      {
        q: "Can OT help children with ADHD?",
        a: "Yes. OT addresses attention regulation, impulse control, executive function, and motor coordination — common challenges in ADHD that affect school and home life.",
      },
      {
        q: "How is OT different from medication for ADHD?",
        a: "Medication addresses neurological attention pathways. OT builds practical skills — organization, movement breaks, sensory strategies, and task completion — for daily functioning.",
      },
    ],
  },
  contact: {
    kicker: "Get in Touch",
    title: "We're here when you're ready",
    description:
      "Share your concern — we'll call or WhatsApp you within 24 hours. No pressure, just a warm conversation.",
    phoneLabel: "Phone & WhatsApp",
    emailLabel: "Email",
    addressLabel: "Clinic Address",
    bookFirstVisit: "Book Your First Visit",
    callbackTitle: "Request a Call Back",
    callbackDescription: "Tell us a little about your child — we'll reach out soon.",
  },
  heroTrust: {
    items: [
      { label: `${siteConfig.experienceYears}+ Years`, sub: "Experience" },
      { label: "Ph.D. Scholar", sub: "Pediatric OT" },
      { label: "Reg. No. 051388", sub: "Allied Health" },
      { label: "10+ Programs", sub: "Certified" },
    ],
  },
  heroCard: {
    years: `${siteConfig.experienceYears}+ Years Experience`,
    subtitle: "Pediatric OT · Mumbai",
  },
  home: buildHomeLocaleContent(),
  expertiseLanding: expertiseLandingEn,
  services: Object.fromEntries(
    services.map((s) => [s.slug, { title: s.title, headline: s.headline }]),
  ),
  conditions: Object.fromEntries(
    conditions.map((c) => [c.slug, { title: c.title, reassurance: c.reassurance }]),
  ),
  conditionDetails: buildConditionDetails(),
  pages: {
    conditionsList: {
      kicker: "For parents",
      title: "When something feels harder than it should",
      description:
        "You don't need a diagnosis to have questions. Whether it's meltdowns, handwriting, attention, or simply a gut feeling — we're here to listen and help you understand what support might look like.",
      cta: "Start With a Conversation",
    },
    servicesList: {
      kicker: "Expertise & Approaches",
      title: "How we support growth and participation",
      description:
        "Eleven certified programmes — sensory integration, movement, handwriting, feeding, aquatic therapy, and more — woven into plans that fit your child's real life.",
      cta: "Book a Consultation",
    },
    conditionsDetail: {
      kicker: "For parents",
      symptoms: "You might notice...",
      challenges: "What this can feel like at home",
      therapyRole: "How we walk alongside you",
      benefits: "What families often see",
      whenToReachOut: "When to reach out",
      whenToBeginTitle: "When to Begin",
      outcomes: "Progress we're grateful to witness",
    },
  },
};
