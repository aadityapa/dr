"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const screeningQuestions = [
  { id: "soundSensitivity", label: "Reacts strongly to loud sounds or covers ears frequently" },
  { id: "textureAvoidance", label: "Avoids certain clothing textures, tags, or messy play" },
  { id: "movementSeeking", label: "Seeks constant movement — spinning, crashing, climbing" },
  { id: "transitionDifficulty", label: "Has difficulty with transitions or changes in routine" },
  { id: "attentionSpan", label: "Struggles to sustain attention during age-appropriate tasks" },
  { id: "motorClumsiness", label: "Appears clumsy or avoids new physical activities" },
  { id: "handwritingConcern", label: "Handwriting is illegible, slow, or avoided" },
  { id: "meltdowns", label: "Experiences frequent meltdowns in busy environments" },
  { id: "selfCareDelay", label: "Behind peers in self-care skills (dressing, feeding)" },
  { id: "socialWithdrawal", label: "Withdraws from or struggles with peer play" },
] as const;

const screeningSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  childName: z.string().min(2, "Child name is required"),
  childAge: z.string().min(1, "Child age is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  concerns: z.string().min(8, "Please describe your main concerns"),
  soundSensitivity: z.boolean(),
  textureAvoidance: z.boolean(),
  movementSeeking: z.boolean(),
  transitionDifficulty: z.boolean(),
  attentionSpan: z.boolean(),
  motorClumsiness: z.boolean(),
  handwritingConcern: z.boolean(),
  meltdowns: z.boolean(),
  selfCareDelay: z.boolean(),
  socialWithdrawal: z.boolean(),
});

type ScreeningInput = z.infer<typeof screeningSchema>;

export function ScreeningForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ScreeningInput>({
    resolver: zodResolver(screeningSchema),
    defaultValues: {
      soundSensitivity: false,
      textureAvoidance: false,
      movementSeeking: false,
      transitionDifficulty: false,
      attentionSpan: false,
      motorClumsiness: false,
      handwritingConcern: false,
      meltdowns: false,
      selfCareDelay: false,
      socialWithdrawal: false,
    },
  });

  const onSubmit = async (values: ScreeningInput) => {
    setError(null);
    const res = await fetch("/api/screening", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      setError("Something went wrong. Please call us directly or try again.");
      return;
    }
    setSuccess(true);
    reset();
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6 text-center">
        <p className="font-semibold text-[color:var(--color-sage-dark)]">Screening submitted successfully!</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Thank you. Dr. Sharuja Sarap&apos;s team will review your responses and contact you within 24–48 hours with
          guidance on next steps.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Input placeholder="Parent name *" {...register("parentName")} />
          <p className="text-xs text-red-600">{errors.parentName?.message}</p>
        </div>
        <div>
          <Input placeholder="Child name *" {...register("childName")} />
          <p className="text-xs text-red-600">{errors.childName?.message}</p>
        </div>
        <div>
          <Input placeholder="Child age *" {...register("childAge")} />
          <p className="text-xs text-red-600">{errors.childAge?.message}</p>
        </div>
        <div>
          <Input type="email" placeholder="Email *" {...register("email")} />
          <p className="text-xs text-red-600">{errors.email?.message}</p>
        </div>
        <div className="md:col-span-2">
          <Input placeholder="Contact number *" {...register("phone")} />
          <p className="text-xs text-red-600">{errors.phone?.message}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[color:var(--color-sage-dark)]">
          Basic Sensory Screening — check all that apply
        </h3>
        <div className="mt-4 space-y-3">
          {screeningQuestions.map((q) => (
            <label
              key={q.id}
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white/70 px-4 py-3 text-sm"
            >
              <input type="checkbox" className="mt-1" {...register(q.id)} />
              <span className="text-[color:var(--color-muted)]">{q.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Textarea placeholder="Additional concerns or observations *" rows={4} {...register("concerns")} />
        <p className="text-xs text-red-600">{errors.concerns?.message}</p>
      </div>

      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Submitting..." : "Submit Screening"}
        </Button>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
        <p className="mt-3 text-xs text-[color:var(--color-muted)]">
          This screening is not a diagnosis. It helps us understand your concerns and recommend appropriate next steps.
        </p>
      </div>
    </form>
  );
}
