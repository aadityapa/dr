export type ServicePastel = {
  bg: string;
  border: string;
  icon: string;
  text: string;
};

export const servicePastels: Record<string, ServicePastel> = {
  "occupational-therapy": { bg: "#D6E8F5", border: "#A8CCE8", icon: "#3D7AB5", text: "#1E4A6E" },
  "aquatic-therapy": { bg: "#C8EEF0", border: "#9ADEE3", icon: "#2A9DA8", text: "#1A5F66" },
  "brain-gym": { bg: "#E4DDF5", border: "#C9BCE8", icon: "#7B5BB5", text: "#4A3570" },
  "handwriting-training": { bg: "#FCE8DC", border: "#F5C9B0", icon: "#D4845C", text: "#8B4A2A" },
  "rmti": { bg: "#D8F0E4", border: "#B5E0CC", icon: "#4A9B73", text: "#2D6047" },
  "opt": { bg: "#FDF3D4", border: "#F5E09A", icon: "#C9A020", text: "#7A6010" },
  "piastm": { bg: "#D9EDFA", border: "#B3D9F2", icon: "#4A90C4", text: "#2A5580" },
  "kinesio-taping": { bg: "#E0EBE0", border: "#BFD4BF", icon: "#5A8A5A", text: "#3A5A3A" },
  "mnri": { bg: "#FADED4", border: "#F0B8A8", icon: "#D47058", text: "#8B4030" },
  "kdct": { bg: "#F5E0E8", border: "#E8B8CC", icon: "#C45A82", text: "#7A3048" },
};

export function getServicePastel(slug: string): ServicePastel {
  return (
    servicePastels[slug] ?? {
      bg: "#E8EDE8",
      border: "#C5D4C5",
      icon: "#5A7A5A",
      text: "#2F4D3B",
    }
  );
}
