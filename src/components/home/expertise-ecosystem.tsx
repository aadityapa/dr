"use client";

import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { expertiseClusters, expertiseEcosystemCopy } from "@/lib/client-content/expertise-clusters";
import { getCardPastel } from "@/lib/pastel-palette";
import { cn } from "@/lib/utils";

type ExpertiseEcosystemProps = {
  id?: string;
  compact?: boolean;
  showHeading?: boolean;
  showViewAll?: boolean;
  className?: string;
};

export function ExpertiseEcosystem({
  id = "expertise",
  compact = false,
  showHeading = true,
  showViewAll = false,
  className,
}: ExpertiseEcosystemProps) {
  return (
    <Section id={id} compact={compact} className={cn("bg-white", className)}>
      {showHeading && (
        <SectionHeading
          title={expertiseEcosystemCopy.title}
          description={expertiseEcosystemCopy.subheading}
          center
        />
      )}

      <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", showHeading ? "mt-10" : "mt-0")}>
        {expertiseClusters.map((cluster, i) => {
          const pastel = getCardPastel(i);
          return (
            <Reveal key={cluster.slug} delay={i * 0.05}>
              <article
                className="group flex h-full flex-col rounded-2xl border p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl sm:p-6"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 shadow-sm transition-transform duration-300 motion-safe:group-hover:scale-110">
                  <ServiceIcon name={cluster.icon} className="h-6 w-6" style={{ color: pastel.accent }} />
                </div>

                <h3 className="font-[family-name:var(--font-serif)] text-lg sm:text-xl" style={{ color: pastel.text }}>
                  {cluster.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {cluster.parentFriendlyExplanation}
                </p>

                {!compact && (
                  <>
                    <div className="mt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: pastel.accent }}>
                        What parents may notice
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {cluster.whatParentsMayNotice.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-[color:var(--color-muted)]">
                            <span className="mt-1 shrink-0 text-[color:var(--color-terracotta)]">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cluster.relatedCertifications.map((cert) => (
                        <span
                          key={cert}
                          className="rounded-full bg-white/60 px-2 py-0.5 text-[10px] font-medium"
                          style={{ color: pastel.accent }}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {compact && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cluster.relatedCertifications.slice(0, 3).map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full bg-white/60 px-2 py-0.5 text-[10px] font-medium"
                        style={{ color: pastel.accent }}
                      >
                        {cert}
                      </span>
                    ))}
                    {cluster.relatedCertifications.length > 3 && (
                      <span className="text-[10px] font-medium text-[color:var(--color-muted)]">
                        +{cluster.relatedCertifications.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-4 w-fit bg-white/60 transition-colors group-hover:bg-white"
                >
                  <Link href={cluster.learnMoreHref}>Learn More</Link>
                </Button>
              </article>
            </Reveal>
          );
        })}
      </div>

      {showViewAll && (
        <Reveal className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/expertise">Explore All Expertise</Link>
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
