"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

import { StitchCard, StitchHero, StitchSection, StitchShell } from "./ui";

export function StitchServicesPage() {
  return (
    <StitchShell>
      <StitchHero
        kicker="Therapy Services"
        title="Premium pediatric occupational therapy services"
        description="Each therapy plan is individualized with measurable goals, parent collaboration, and child-led engagement."
      />

      <StitchSection className="pt-0 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <StitchCard className="flex h-full flex-col">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <ServiceIcon name={service.icon} className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">{service.title}</h3>
                <p className="text-body-md mt-3 flex-1 text-secondary">{service.summary}</p>
                <Button asChild className="squishy-button mt-6 w-fit bg-primary text-on-primary">
                  <Link href={`/services/${service.slug}`}>
                    Read Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </StitchCard>
            </motion.div>
          ))}
        </div>
      </StitchSection>
    </StitchShell>
  );
}
