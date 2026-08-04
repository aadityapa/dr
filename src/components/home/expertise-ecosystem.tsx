"use client";

import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { expertiseClusters } from "@/lib/client-content/expertise-clusters";
import { getCardPastel } from "@/lib/pastel-palette";
import { getSiteImage, type SiteImageKey } from "@/lib/site-images";
import { cn } from "@/lib/utils";

type ExpertiseEcosystemProps = {
  id?: string;
  compact?: boolean;
  showHeading?: boolean;
  showViewAll?: boolean;
  className?: string;
};

const CLUSTER_IMAGES: Partial<Record<string, { image: SiteImageKey; alt: string }>> = {
  "movement-motor-development": {
    image: "swingSupport",
    alt: "Therapist-guided sensory swing support in the Thrive With Sharuja gym",
  },
  "sensory-processing-regulation": {
    image: "sensoryPath",
    alt: "Child using colorful tactile stepping pads in a sensory therapy activity",
  },
  "handwriting-learning-readiness": {
    image: "handwritingPractice",
    alt: "Therapist-guided handwriting and fine motor practice on a chalkboard",
  },
  "reflex-integration": {
    image: "sensoryGym",
    alt: "Child using sensory gym equipment with therapist support",
  },
};

export function ExpertiseEcosystem({
  id = "expertise",
  compact = false,
  showHeading = true,
  showViewAll = false,
  className,
}: ExpertiseEcosystemProps) {
  const { content } = useLanguage();
  const copy = content.home.expertiseEcosystem;

  return (
    <Section id={id} compact={compact} className={cn("bg-white", className)}>
      {showHeading && (
        <SectionHeading title={copy.title} description={copy.subheading} center />
      )}

      <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", showHeading ? "mt-10" : "mt-0")}>
        {expertiseClusters.map((cluster, i) => {
          const pastel = getCardPastel(i);
          const localized = copy.clusters[cluster.slug];
          const clusterImage = CLUSTER_IMAGES[cluster.slug];
          return (
            <Reveal key={cluster.slug} delay={i * 0.05}>
              <article
                className="group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                {clusterImage ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/60">
                    <Image
                      src={getSiteImage(clusterImage.image)}
                      alt={clusterImage.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 shadow-sm transition-transform duration-300 motion-safe:group-hover:scale-110">
                    <ServiceIcon name={cluster.icon} className="h-6 w-6" style={{ color: pastel.accent }} />
                  </div>

                  <h3 className="font-[family-name:var(--font-serif)] text-lg sm:text-xl" style={{ color: pastel.text }}>
                    {localized?.title ?? cluster.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {localized?.explanation ?? cluster.parentFriendlyExplanation}
                  </p>

                  {!compact && (
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
                    </div>
                  )}

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 w-fit bg-white/60 transition-colors group-hover:bg-white"
                  >
                    <Link href={cluster.learnMoreHref}>{content.common.learnMoreBtn}</Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {showViewAll && (
        <Reveal className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/expertise">{copy.viewAll}</Link>
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
