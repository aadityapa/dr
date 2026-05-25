"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const appointmentSchema = z.object({
  parentName: z.string().min(2),
  childName: z.string().min(2),
  childAge: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(8),
  date: z.string().min(1),
  timeSlot: z.string().min(1),
  concerns: z.string().min(8),
});

type AppointmentInput = z.infer<typeof appointmentSchema>;

const slots = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

export function AppointmentForm() {
  const [success, setSuccess] = useState<string | null>(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (values: AppointmentInput) => {
    setSuccess(null);
    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) return;
    setSuccess("Appointment request submitted. We will confirm your slot soon.");
    reset();
  };

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder="Parent name" {...register("parentName")} />
        <p className="text-xs text-red-600">{errors.parentName?.message}</p>
      </div>
      <div>
        <Input placeholder="Child name" {...register("childName")} />
        <p className="text-xs text-red-600">{errors.childName?.message}</p>
      </div>
      <div>
        <Input placeholder="Child age" {...register("childAge")} />
        <p className="text-xs text-red-600">{errors.childAge?.message}</p>
      </div>
      <div>
        <Input type="email" placeholder="Email" {...register("email")} />
        <p className="text-xs text-red-600">{errors.email?.message}</p>
      </div>
      <div>
        <Input placeholder="Phone" {...register("phone")} />
        <p className="text-xs text-red-600">{errors.phone?.message}</p>
      </div>
      <div>
        <Input type="date" {...register("date")} />
        <p className="text-xs text-red-600">{errors.date?.message}</p>
      </div>
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-[color:var(--color-sage-dark)]">Time slot</label>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {slots.map((slot) => (
            <label
              key={slot}
              className="flex cursor-pointer items-center rounded-2xl border border-[color:var(--color-border)] bg-white px-3 py-2 text-sm"
            >
              <input type="radio" value={slot} className="mr-2" {...register("timeSlot")} />
              {slot}
            </label>
          ))}
        </div>
        <p className="text-xs text-red-600">{errors.timeSlot?.message}</p>
      </div>
      <div className="md:col-span-2">
        <Textarea placeholder="Main concerns and goals" {...register("concerns")} />
        <p className="text-xs text-red-600">{errors.concerns?.message}</p>
      </div>
      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Confirm Appointment Request"}
        </Button>
        {success ? <p className="mt-3 text-sm text-[color:var(--color-sage-dark)]">{success}</p> : null}
      </div>
    </form>
  );
}
