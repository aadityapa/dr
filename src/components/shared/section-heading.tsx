import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({
  kicker,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker ? <Badge>{kicker}</Badge> : null}
      <h2 className="mt-4 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
