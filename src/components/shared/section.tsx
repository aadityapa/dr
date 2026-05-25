import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24", className)}>
      {children}
    </section>
  );
}
