"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-data";

import { StitchCard, StitchHero, StitchPanel, StitchSection, StitchShell } from "./ui";

const credentials = [
  "Certified in Sensory Integration and Aquatic Therapy",
  "12+ years of pediatric occupational therapy practice",
  "Family-centered intervention model with measurable milestones",
];

export function StitchAboutPage() {
  return (
    <StitchShell>
      <StitchHero
        kicker={`About ${siteConfig.shortName}`}
        title="A warm, evidence-based approach to pediatric occupational therapy"
        description={`${siteConfig.tagline} With over a decade of clinical experience, Dr. Sharuja supports children and families through compassionate, deeply personalized therapy pathways.`}
      />

      <StitchSection className="bg-surface-container-low pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {credentials.map((item, i) => (
            <Reveal key={item} y={16 + i * 6}>
              <StitchCard>
                <p className="text-body-md text-on-surface">{item}</p>
              </StitchCard>
            </Reveal>
          ))}
        </div>
      </StitchSection>

      <StitchSection>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <StitchPanel>
              <h2 className="font-headline-lg text-headline-lg text-on-background">Our Mission</h2>
              <p className="text-body-md mt-4 text-on-surface-variant">
                To build confident, independent children by integrating sensory, motor, emotional, and functional growth
                through meaningful, joyful therapy.
              </p>
            </StitchPanel>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <StitchPanel className="bg-primary-container text-on-primary-container">
              <h2 className="font-headline-lg text-headline-lg">Personal Journey</h2>
              <p className="text-body-md mt-4 text-on-primary-container/90">
                Dr. Sharuja&apos;s work began with one core belief: every child deserves a safe space where effort is
                celebrated and milestones are nurtured with patience.
              </p>
            </StitchPanel>
          </motion.div>
        </div>
      </StitchSection>

      <StitchSection className="bg-surface pb-24">
        <StitchPanel className="text-center">
          <p className="text-primary font-label-md tracking-widest uppercase">Philosophy</p>
          <h2 className="font-headline-lg text-headline-lg mt-3">Regulate · Connect · Participate · Thrive</h2>
          <p className="text-body-md mx-auto mt-4 max-w-2xl text-secondary">
            Our therapy rhythm moves gently from nervous-system regulation to joyful participation in everyday life.
          </p>
        </StitchPanel>
      </StitchSection>
    </StitchShell>
  );
}
