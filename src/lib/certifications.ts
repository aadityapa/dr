export type CertificationCard = {
  id: string;
  shortName: string;
  fullName: string;
  description: string;
  bg: string;
  border: string;
  icon: string;
};

export const certificationCards: CertificationCard[] = [
  {
    id: "rmti",
    shortName: "RMTI",
    fullName: "Rhythmic Movement Training Integration",
    description: "Gentle rhythmic movements that support nervous system development and reflex integration.",
    bg: "#D8F0E4",
    border: "#B5E0CC",
    icon: "#4A9B73",
  },
  {
    id: "hwt",
    shortName: "HWT",
    fullName: "Handwriting Without Tears",
    description: "Multisensory handwriting program that builds confident, legible writing from the ground up.",
    bg: "#FCE8DC",
    border: "#F5C9B0",
    icon: "#D4845C",
  },
  {
    id: "opt",
    shortName: "OPT",
    fullName: "Oral Placement Therapy",
    description: "Targeted oral-motor support for feeding, speech readiness, and oral sensory skills.",
    bg: "#FDF3D4",
    border: "#F5E09A",
    icon: "#C9A020",
  },
  {
    id: "aquatherapy",
    shortName: "Aquatherapy",
    fullName: "IATF · WST · BRRM",
    description: "Water-based therapy that builds strength, balance, and sensory calm in a joyful environment.",
    bg: "#C8EEF0",
    border: "#9ADEE3",
    icon: "#2A9DA8",
  },
  {
    id: "piastm",
    shortName: "PIASTM",
    fullName: "Pediatric Instrument Assisted Soft Tissue Mobilization",
    description: "Gentle soft-tissue techniques adapted for children to improve mobility and reduce tension.",
    bg: "#D9EDFA",
    border: "#B3D9F2",
    icon: "#4A90C4",
  },
  {
    id: "kt",
    shortName: "KT Level 1–3",
    fullName: "Kinesio Taping",
    description: "Elastic therapeutic taping for postural support, sensory input, and functional movement.",
    bg: "#E0EBE0",
    border: "#BFD4BF",
    icon: "#5A8A5A",
  },
  {
    id: "mnri",
    shortName: "MNRI",
    fullName: "Masgutova Neurosensorimotor Reflex Integration",
    description: "Reflex integration techniques that rebuild foundations for movement, regulation, and learning.",
    bg: "#FADED4",
    border: "#F0B8A8",
    icon: "#D47058",
  },
  {
    id: "kdct",
    shortName: "KDCT",
    fullName: "Kinesio Dry Cupping Therapy",
    description: "Adapted dry cupping for pediatric tissue health, circulation, and movement recovery.",
    bg: "#F5E0E8",
    border: "#E8B8CC",
    icon: "#C45A82",
  },
];
