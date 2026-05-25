import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore sensory integration, aquatic therapy, feeding support, ADL training, parent counseling, and group sessions.",
};

export default function ServicesPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          kicker="Therapy Services"
          title="Premium pediatric occupational therapy services"
          description="Each therapy plan is individualized with measurable goals, parent collaboration, and child-led engagement."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--color-soft-green)]">
                    <ServiceIcon name={service.icon} className="h-5 w-5 text-[color:var(--color-sage-dark)]" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[color:var(--color-muted)]">{service.summary}</p>
                  <Button asChild className="mt-4">
                    <Link href={`/services/${service.slug}`}>Read Service Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
