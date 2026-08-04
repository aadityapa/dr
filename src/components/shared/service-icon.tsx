import {
  Award,
  Brain,
  Calendar,
  ClipboardCheck,
  Clock,
  Hand,
  HeartHandshake,
  Home,
  PenLine,
  Phone,
  Sparkles,
  Target,
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
  Clock,
  Award,
  Phone,
  Target,
  Home,
} as const;

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Sparkles;
  return <Icon {...props} />;
}
