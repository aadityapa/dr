/**
 * Real clinic photography (Dr. Sharuja's own sessions) used as warm hero
 * imagery on inner pages. Each entry maps to a page hero.
 *
 * Reliability: if any image fails to load, the <HeroPhoto> component falls
 * back to the page's colourful illustration, so the live site never shows a
 * broken image.
 */

export type HeroPhoto = { src: string; alt: string };

export const stockPhotos = {
  resources: {
    src: "/images/gallery/ball-pit-xylophone-play.jpg",
    alt: "Dr. Sharuja and a baby playing a colourful xylophone in the clinic ball pit",
  },
  library: {
    src: "/images/gallery/finger-puppet-engagement.jpg",
    alt: "Dr. Sharuja engaging a baby with colourful animal finger puppets",
  },
  contact: {
    src: "/images/gallery/rattle-play-gym-ball.jpg",
    alt: "Dr. Sharuja smiling with a baby on a therapy ball during a session",
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
    src: "/images/gallery/wall-ball-reaching-activity.jpg",
    alt: "A baby reaching for colourful balls on the wall during a guided activity",
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
    src: "/images/gallery/therapy-swing-vestibular-play.jpg",
    alt: "A girl on a therapy swing beside the climbing wall with a smiling therapist",
  },
  appointment: {
    src: "/images/gallery/infant-crawling-support.jpg",
    alt: "Dr. Sharuja supporting a baby during crawling practice on a soft mat",
  },
} satisfies Record<string, HeroPhoto>;

export type StockPhotoKey = keyof typeof stockPhotos;
