/** Central image paths — all real clinic photography in public/images/. */

export const siteImagePaths = {
  doctorPortrait: "/images/doctor/portrait.jpg",
  heroMain: "/images/hero/main.jpg",
  sensoryGym: "/images/therapy-rooms/sensory-gym.jpg",
  assessmentRoom: "/images/therapy-rooms/assessment-room.jpg",
  aquaticArea: "/images/therapy-rooms/aquatic-area.jpg",
  reception: "/images/clinic/reception.jpg",
  exterior: "/images/clinic/exterior.jpg",
  hallway: "/images/clinic/hallway.jpg",
  sensoryTools: "/images/equipment/sensory-tools.jpg",
  fineMotor: "/images/equipment/fine-motor.jpg",
  climbingWall: "/images/therapy-rooms/climbing-wall.jpg",
  sensoryPath: "/images/therapy/sensory-pathway.jpg",
  swingSupport: "/images/therapy/guided-swing-support.jpg",
  handwritingPractice: "/images/therapy/handwriting-practice.jpg",
} as const;

export type SiteImageKey = keyof typeof siteImagePaths;

export function getSiteImage(key: SiteImageKey): string {
  return siteImagePaths[key];
}
