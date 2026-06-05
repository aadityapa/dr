export const STITCH_PROJECT_ID = "16093142512687109662";

/** Latest Stitch screen IDs mapped to site routes */
export const stitchScreenMap = {
  home: "e57ef8000d064af2a26a3d92cb9bb44c",
  about: "eb18c3820e9345808d3dc29313379227",
  services: "013f1b368b9047db9cdb6ee59e298bcb",
  conditions: "96624b6b778d4a00952b63dea43e6b04",
  gallery: "53ba6c9e2b594240aaedc314d0bce3ab",
  milestones: "a80f27f83f87458287b392c8ad350a57",
  contact: "552b2090152345fb92f1cc41fd00847c",
  appointment: "cd919464a2a64c2d8737d35d3ac18dfd",
} as const;

export type StitchPageKey = keyof typeof stitchScreenMap;
