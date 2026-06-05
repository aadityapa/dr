import type { Metadata } from "next";

import { StitchAppointmentPage } from "@/components/stitch/appointment-page";

export const metadata: Metadata = {
  title: "Appointment Booking",
  description: "Book pediatric occupational therapy consultations with preferred date and time slots.",
};

export default function AppointmentPage() {
  return <StitchAppointmentPage />;
}
