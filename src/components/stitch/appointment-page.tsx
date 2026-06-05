"use client";

import { AppointmentForm } from "@/components/forms/appointment-form";

import { StitchCard, StitchHero, StitchSection, StitchShell } from "./ui";

export function StitchAppointmentPage() {
  return (
    <StitchShell>
      <StitchHero
        kicker="Appointment Booking"
        title="Book a consultation session"
        description="Share parent and child details, choose your preferred date and slot, and we will confirm quickly."
      />

      <StitchSection className="pt-0 pb-24">
        <StitchCard className="md:p-10">
          <AppointmentForm />
        </StitchCard>
      </StitchSection>
    </StitchShell>
  );
}
