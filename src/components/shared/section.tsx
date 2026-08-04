import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  compact?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, compact, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl px-4 md:px-8",
        compact ? "py-12 md:py-16" : "py-16 md:py-24",
        className,
      )}
    >
      {children}
    </section>
  );
}
