import type { Metadata } from "next";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Appointment Booking",
  description: "Book pediatric occupational therapy consultations with preferred date and time slots.",
};

export default function AppointmentPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          kicker="Appointment Booking"
          title="Book a consultation session"
          description="Share parent and child details, choose your preferred date and slot, and we will confirm quickly."
        />
        <Card className="mt-8">
          <CardContent className="p-6 md:p-8">
            <AppointmentForm />
          </CardContent>
        </Card>
      </Section>
    </main>
  );
}
