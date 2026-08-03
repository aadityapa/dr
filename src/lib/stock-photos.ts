/**
 * Real clinic photography (Dr. Sharuja's own sessions) used as warm hero
 * imagery on inner pages. Each entry maps to a page hero.
 *
 * Reliability: if any image fails to load, the <HeroPhoto> component falls
 * back to the page's colourful illustration, so the live site never shows a
 * broken image.
 */

export type HeroPhoto = { src: string; alt: string; wide?: boolean };

export const stockPhotos = {
  resources: {
    src: "/images/therapy-rooms/climbing-wall.jpg",
    alt: "A toddler on sensory stepping pads beside the colourful climbing wall",
  },
  library: {
    src: "/images/gallery/therapist-guided-balance-play.jpg",
    alt: "A toddler placing objects into colourful cups during a playful learning game",
  },
  contact: {
    src: "/images/therapy/handwriting-practice.jpg",
    alt: "Dr. Sharuja playing a chalkboard game one-on-one with a young boy",
  },
  faqs: {
    src: "/images/gallery/balance-beam-coordination-game.jpg",
    alt: "A young girl walking a tactile balance beam with therapist guidance",
  },
  gallery: {
    src: "/images/gallery/trampoline-jumping-gross-motor.jpg",
    alt: "A girl jumping on a mini trampoline with therapist hand support",
  },
  locations: {
    src: "/images/gallery/supported-standing-gym.jpg",
    alt: "Supported standing practice in the spacious pediatric therapy gym",
  },
  screening: {
    src: "/images/gallery/sensory-pathway-stepping-practice.jpg",
    alt: "A toddler on sensory stepping pads doing a guided pom-pom sorting activity",
  },
  "testimonials-milestones": {
    src: "/images/gallery/jumping-rings-motor-planning.jpg",
    alt: "A boy joyfully jumping through colourful floor rings as the therapist cheers",
  },
  "therapy-outcomes": {
    src: "/images/gallery/climbing-wall-assisted-climb.jpg",
    alt: "A young girl climbing the clinic climbing wall with close therapist support",
  },
  "invite-sharuja": {
    src: "/images/gallery/speaking-engagement-seminar.jpg",
    alt: "Dr. Sharuja Sarap addressing an audience of parents and professionals at a seminar",
    wide: true,
  },
  appointment: {
    src: "/images/gallery/infant-crawling-support.jpg",
    alt: "Dr. Sharuja supporting a baby during crawling practice on a soft mat",
  },
} satisfies Record<string, HeroPhoto>;

export type StockPhotoKey = keyof typeof stockPhotos;
