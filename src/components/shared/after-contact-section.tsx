import Link from "next/link";
import { Calendar, ClipboardCheck, HeartHandshake, Phone } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-data";

const steps = [
  {
    icon: Phone,
    title: "We Reach Out",
    description: "Our team calls or WhatsApps you within 24 hours to understand your concerns and answer initial questions.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduled",
    description: "We find a convenient time for your first visit at our Kandivali West clinic — Monday to Saturday, 9 AM – 5 PM.",
  },
  {
    icon: ClipboardCheck,
    title: "Warm Evaluation",
    description: "Dr. Sharuja Sarap meets your child in a play-based, child-friendly setting to understand their unique profile.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Plan",
    description: "You receive a clear therapy plan with goals, session frequency, and practical home strategies to begin immediately.",
  },
];

export function AfterContactSection() {
  return (
    <Section className="rounded-[2rem] bg-white/70">
      <SectionHeading
        kicker="What to Expect"
        title="What Happens After You Contact Us"
        description="We know reaching out takes courage. Here is exactly what happens next — no surprises, just warm, professional support."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-soft-green)]">
                  <step.icon className="h-6 w-6 text-[color:var(--color-sage-dark)]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{step.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <Button asChild size="lg">
          <Link href="/appointment">Book Your First Consultation</Link>
        </Button>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]">
          Or call{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-medium text-[color:var(--color-sage-dark)]">
            {siteConfig.phoneDisplay}
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
