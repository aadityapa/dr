import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { getServicePastel } from "@/lib/service-colors";
import { services } from "@/lib/site-data";

export function ServicesPreview() {
  return (
    <Section id="services" compact className="bg-white">
      <SectionHeading
        kicker="Our Services"
        title="Programs designed around your child"
        description="Each therapy has its own approach — and its own colour. Find the right fit for your family."
        center
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const pastel = getServicePastel(service.slug);
          return (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: pastel.bg,
                  borderColor: pastel.border,
                }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 shadow-sm transition-transform group-hover:scale-110"
                >
                  <ServiceIcon name={service.icon} className="h-6 w-6" style={{ color: pastel.accent }} />
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed" style={{ color: pastel.accent }}>
                  {service.headline}
                </p>
                <span className="mt-4 text-xs font-semibold" style={{ color: pastel.accent }}>
                  Learn more →
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
