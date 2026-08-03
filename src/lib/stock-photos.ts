/**
 * Hero imagery — all real clinic photography.
 *
 * `stockPhotos` powers the full-bleed banner on the Invite Sharuja page.
 * `heroClusters` powers the homepage-style organic photo cluster used on every
 * other page. Assignments are deliberately spread so no photo repeats within a
 * page and no two pages share the same trio.
 */

export type HeroPhoto = { src: string; alt: string; wide?: boolean };

export const stockPhotos = {
  "invite-sharuja": {
    src: "/images/gallery/speaking-engagement-seminar.jpg",
    alt: "Dr. Sharuja Sarap addressing an audience of parents and professionals at a seminar",
    wide: true,
  },
} satisfies Record<string, HeroPhoto>;

export type ClusterPhotos = [HeroPhoto, HeroPhoto, HeroPhoto];

export const heroClusters = {
  "resources": [
    { src: "/images/gallery/infant-crawling-support.jpg", alt: "Therapist supporting an infant during crawling practice" },
    { src: "/images/gallery/infant-leg-strengthening.jpg", alt: "Gentle leg-strengthening exercise for an infant on the therapy mat" },
    { src: "/images/gallery/ring-swing-movement-play.jpg", alt: "A boy on a hoop swing in the sensory gym with therapist support" },
  ],
  "library": [
    { src: "/images/gallery/sensory-pathway-stepping-practice.jpg", alt: "A toddler stepping across colourful sensory floor pads" },
    { src: "/images/gallery/supported-standing-ball.jpg", alt: "A baby pulling up to stand against a textured therapy ball" },
    { src: "/images/gallery/supported-standing-gym.jpg", alt: "Supported standing practice in the spacious pediatric therapy gym" },
  ],
  "contact": [
    { src: "/images/gallery/supported-swing-session.jpg", alt: "Dr. Sharuja supporting a boy during a therapy swing session" },
    { src: "/images/gallery/therapist-guided-balance-play.jpg", alt: "A toddler placing objects into colourful cups during a guided game" },
    { src: "/images/gallery/therapy-swing-vestibular-play.jpg", alt: "A girl on a therapy swing beside the climbing wall with a smiling therapist" },
  ],
  "faqs": [
    { src: "/images/gallery/trampoline-jumping-gross-motor.jpg", alt: "A girl jumping on a mini trampoline with therapist hand support" },
    { src: "/images/gallery/wall-ball-reaching-activity.jpg", alt: "A baby reaching for colourful balls fixed to the wall" },
    { src: "/images/equipment/fine-motor.jpg", alt: "Dr. Sharuja playing a chalkboard game one-on-one with a young boy" },
  ],
  "gallery": [
    { src: "/images/equipment/sensory-tools.jpg", alt: "A toddler on sensory stepping pads with therapist guidance" },
    { src: "/images/therapy-rooms/climbing-wall.jpg", alt: "A toddler exploring sensory stepping pads by the colourful climbing wall" },
    { src: "/images/therapy-rooms/sensory-gym.jpg", alt: "Dr. Sharuja supporting a child on hoop swing equipment in the sensory gym" },
  ],
  "locations": [
    { src: "/images/therapy/guided-swing-support.jpg", alt: "Therapist guiding a child through a supported swing activity" },
    { src: "/images/hero/main.jpg", alt: "Dr. Sharuja smiling with a baby on a textured therapy ball during a playful sensory session" },
    { src: "/images/gallery/finger-puppet-engagement.jpg", alt: "Dr. Sharuja engaging a baby with colourful animal finger puppets" },
  ],
  "screening": [
    { src: "/images/gallery/jumping-rings-motor-planning.jpg", alt: "A boy jumping through colourful floor rings as the therapist cheers him on" },
    { src: "/images/gallery/balance-beam-coordination-game.jpg", alt: "A young girl walking a tactile balance beam with therapist guidance" },
    { src: "/images/gallery/ball-pit-xylophone-play.jpg", alt: "A baby playing a colourful xylophone in the clinic ball pit" },
  ],
  "testimonials-milestones": [
    { src: "/images/gallery/blanket-swing-vestibular.jpg", alt: "An infant relaxing in a soft blanket swing held by two therapists" },
    { src: "/images/gallery/climbing-wall-assisted-climb.jpg", alt: "A young girl climbing the colourful climbing wall with therapist support" },
    { src: "/images/gallery/climbing-wall-step-practice.jpg", alt: "A child practising movement planning beside the climbing wall" },
  ],
  "therapy-outcomes": [
    { src: "/images/gallery/infant-crawling-guidance.jpg", alt: "A baby practising crawling on a padded mat with Dr. Sharuja encouraging" },
    { src: "/images/gallery/infant-crawling-support.jpg", alt: "Therapist supporting an infant during crawling practice" },
    { src: "/images/gallery/infant-leg-strengthening.jpg", alt: "Gentle leg-strengthening exercise for an infant on the therapy mat" },
  ],
  "appointment": [
    { src: "/images/gallery/ring-swing-movement-play.jpg", alt: "A boy on a hoop swing in the sensory gym with therapist support" },
    { src: "/images/gallery/sensory-pathway-stepping-practice.jpg", alt: "A toddler stepping across colourful sensory floor pads" },
    { src: "/images/gallery/supported-standing-ball.jpg", alt: "A baby pulling up to stand against a textured therapy ball" },
  ],
} satisfies Record<string, ClusterPhotos>;

/** Clusters used by the Conditions and Expertise landing panels. */
export const panelClusters = {
  "expertise": [
    { src: "/images/gallery/climbing-wall-assisted-climb.jpg", alt: "A young girl climbing the colourful climbing wall with therapist support" },
    { src: "/images/gallery/climbing-wall-step-practice.jpg", alt: "A child practising movement planning beside the climbing wall" },
    { src: "/images/gallery/infant-crawling-guidance.jpg", alt: "A baby practising crawling on a padded mat with Dr. Sharuja encouraging" },
  ],
} satisfies Record<string, ClusterPhotos>;

export type StockPhotoKey = keyof typeof stockPhotos | keyof typeof heroClusters;
