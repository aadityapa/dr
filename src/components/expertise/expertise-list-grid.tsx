"use client";

import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { expertiseAreas } from "@/lib/client-content/expertise";
import { getServicePastel } from "@/lib/service-colors";

export function ExpertiseListGrid() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {expertiseAreas.map((area, i) => {
          const pastel = getServicePastel(area.slug);
          return (
            <Reveal key={area.slug} delay={i * 0.05}>
              <div
                className="flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm">
                  <ServiceIcon name={area.icon} className="h-7 w-7" style={{ color: pastel.accent }} />
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                  {area.title}
                </h2>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed" style={{ color: pastel.accent }}>
                  {area.tagline}
                </p>
                <Button asChild variant="outline" className="mt-4 w-fit bg-white/60">
                  <Link href={`/expertise/${area.slug}`}>Learn More</Link>
                </Button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 text-center">
        <Button asChild size="lg">
          <Link href="/appointment">Book a Consultation</Link>
        </Button>
      </Reveal>
    </>
  );
}
