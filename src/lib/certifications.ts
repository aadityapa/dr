export type CertificationGroup = "movement" | "sensory" | "feeding" | "handwriting" | "aquatic" | "reflex";

export type CertificationCard = {
  id: string;
  shortName: string;
  fullName: string;
  description: string;
  group: CertificationGroup;
  bg: string;
  border: string;
  icon: string;
  iconName: string;
};

export const certificationGroupLabels: Record<CertificationGroup, string> = {
  movement: "Movement",
  sensory: "Sensory",
  feeding: "Feeding",
  handwriting: "Handwriting",
  aquatic: "Aquatic",
  reflex: "Reflex Integration",
};

export const certificationCards: CertificationCard[] = [
  {
    id: "brain-gym",
    shortName: "Brain Gym",
    fullName: "Certified Brain Gym Instructor & Practitioner",
    description: "Movement-based activities that support focus, learning readiness, and mind-body connection.",
    group: "movement",
    bg: "#E8F4EC",
    border: "#B8DCC4",
    icon: "#4A8B62",
    iconName: "Brain",
  },
  {
    id: "rmti",
    shortName: "RMTI",
    fullName: "Rhythmic Movement Training Integration",
    description: "Gentle rhythmic movements that support nervous system development and reflex integration.",
    group: "movement",
    bg: "#D8F0E4",
    border: "#B5E0CC",
    icon: "#4A9B73",
    iconName: "Target",
  },
  {
    id: "mnri",
    shortName: "MNRI",
    fullName: "Masgutova Neurosensorimotor Reflex Integration",
    description: "Reflex integration techniques that rebuild foundations for movement, regulation, and learning.",
    group: "reflex",
    bg: "#FADED4",
    border: "#F0B8A8",
    icon: "#D47058",
    iconName: "Sparkles",
  },
  {
    id: "kdct",
    shortName: "KDCT",
    fullName: "Kinesio Dry Cupping Therapy",
    description: "Adapted dry cupping for pediatric tissue health, circulation, and movement recovery.",
    group: "reflex",
    bg: "#F5E0E8",
    border: "#E8B8CC",
    icon: "#C45A82",
    iconName: "HeartHandshake",
  },
  {
    id: "sensory",
    shortName: "Sensory OT",
    fullName: "Sensory Integration & Processing",
    description: "Advanced training in sensory integration to help children regulate and participate in daily life.",
    group: "sensory",
    bg: "#EDE4F5",
    border: "#D4C4E8",
    icon: "#6B4F9B",
    iconName: "Sparkles",
  },
  {
    id: "hwt",
    shortName: "HWT",
    fullName: "Handwriting Without Tears",
    description: "Multisensory handwriting program that builds confident, legible writing from the ground up.",
    group: "handwriting",
    bg: "#FCE8DC",
    border: "#F5C9B0",
    icon: "#D4845C",
    iconName: "PenLine",
  },
  {
    id: "opt",
    shortName: "OPT",
    fullName: "Oral Placement Therapy",
    description: "Targeted oral-motor support for feeding, speech readiness, and oral sensory skills.",
    group: "feeding",
    bg: "#FDF3D4",
    border: "#F5E09A",
    icon: "#C9A020",
    iconName: "Utensils",
  },
  {
    id: "aquatherapy",
    shortName: "Aquatic",
    fullName: "IATF · WST · BRRM Aquatic Therapy",
    description: "Water-based therapy that builds strength, balance, and sensory calm in a joyful environment.",
    group: "aquatic",
    bg: "#C8EEF0",
    border: "#9ADEE3",
    icon: "#2A9DA8",
    iconName: "Waves",
  },
  {
    id: "piastm",
    shortName: "PIASTM",
    fullName: "Pediatric Instrument Assisted Soft Tissue Mobilization",
    description: "Gentle soft-tissue techniques adapted for children to improve mobility and reduce tension.",
    group: "sensory",
    bg: "#D9EDFA",
    border: "#B3D9F2",
    icon: "#4A90C4",
    iconName: "Hand",
  },
  {
    id: "kt",
    shortName: "KT 1–3",
    fullName: "Kinesio Taping",
    description: "Elastic therapeutic taping for postural support, sensory input, and functional movement.",
    group: "movement",
    bg: "#E0EBE0",
    border: "#BFD4BF",
    icon: "#5A8A5A",
    iconName: "Award",
  },
];

export const certificationGroups: CertificationGroup[] = [
  "movement",
  "sensory",
  "feeding",
  "handwriting",
  "aquatic",
  "reflex",
];
