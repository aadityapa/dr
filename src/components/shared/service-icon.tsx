import {
  Brain,
  Calendar,
  ClipboardCheck,
  Hand,
  HeartHandshake,
  PenLine,
  Sparkles,
  Users,
  Utensils,
  Waves,
  type LucideProps,
} from "lucide-react";

type ServiceIconProps = LucideProps & {
  name: string;
};

const iconMap = {
  Sparkles,
  Waves,
  Utensils,
  Hand,
  HeartHandshake,
  Users,
  Brain,
  PenLine,
  Calendar,
  ClipboardCheck,
} as const;

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Sparkles;
  return <Icon {...props} />;
}
