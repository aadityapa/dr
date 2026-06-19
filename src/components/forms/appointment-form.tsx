"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-data";

type AppointmentInput = {
  parentName: string;
  fatherName?: string;
  motherName?: string;
  guardianName?: string;
  phone: string;
  email: string;
  childName: string;
  dateOfBirth?: string;
  age: string;
  gender?: string;
  schoolGrade?: string;
  concerns: string[];
  hasDiagnosis: "yes" | "no";
  previousTherapies?: string[];
  biggestConcern: string;
  preferredTime: string;
  consent: true;
};

export function AppointmentForm() {
  const { messages } = useLanguage();
  const formCopy = messages.forms.appointment;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const appointmentSchema = useMemo(
    () =>
      z.object({
        parentName: z.string().min(2, formCopy.errors.parentName),
        fatherName: z.string().optional(),
        motherName: z.string().optional(),
        guardianName: z.string().optional(),
        phone: z.string().min(10, formCopy.errors.phone),
        email: z.string().email(formCopy.errors.email),
        childName: z.string().min(2, formCopy.errors.childName),
        dateOfBirth: z.string().optional(),
        age: z.string().min(1, formCopy.errors.age),
        gender: z.string().optional(),
        schoolGrade: z.string().optional(),
        concerns: z.array(z.string()).min(1, formCopy.errors.concerns),
        hasDiagnosis: z.enum(["yes", "no"], { message: formCopy.errors.hasDiagnosis }),
        previousTherapies: z.array(z.string()).optional(),
        biggestConcern: z.string().min(10, formCopy.errors.biggestConcern),
        preferredTime: z.string().min(1, formCopy.errors.preferredTime),
        consent: z.literal(true, { message: formCopy.errors.consent }),
      }),
    [formCopy],
  );

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { concerns: [], previousTherapies: [], hasDiagnosis: undefined },
  });

  const selectedConcerns = watch("concerns") ?? [];
  const selectedTherapies = watch("previousTherapies") ?? [];

  function toggleConcern(value: string) {
    const next = selectedConcerns.includes(value)
      ? selectedConcerns.filter((c) => c !== value)
      : [...selectedConcerns, value];
    setValue("concerns", next, { shouldValidate: true });
  }

  function toggleTherapy(value: string) {
    const next = selectedTherapies.includes(value)
      ? selectedTherapies.filter((t) => t !== value)
      : [...selectedTherapies, value];
    setValue("previousTherapies", next);
  }

  const onSubmit = async (values: AppointmentInput) => {
    setError(null);
    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      setError(formCopy.error);
      return;
    }
    setSuccess(true);
    reset();
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6 text-center">
        <p className="font-semibold text-[color:var(--color-sage-dark)]">{formCopy.successTitle}</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">{formCopy.successMessage}</p>
        <Button asChild className="mt-4" variant="outline">
          <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            {formCopy.whatsappUs}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder={formCopy.parentName} {...register("parentName")} />
        <p className="text-xs text-red-600">{errors.parentName?.message}</p>
      </div>
      <div>
        <Input placeholder={formCopy.fatherName} {...register("fatherName")} />
      </div>
      <div>
        <Input placeholder={formCopy.motherName} {...register("motherName")} />
      </div>
      <div>
        <Input placeholder={formCopy.guardianName} {...register("guardianName")} />
      </div>
      <div>
        <Input placeholder={formCopy.phone} {...register("phone")} />
        <p className="text-xs text-red-600">{errors.phone?.message}</p>
      </div>
      <div>
        <Input type="email" placeholder={formCopy.email} {...register("email")} />
        <p className="text-xs text-red-600">{errors.email?.message}</p>
      </div>
      <div>
        <Input placeholder={formCopy.childName} {...register("childName")} />
        <p className="text-xs text-red-600">{errors.childName?.message}</p>
      </div>
      <div>
        <Input type="date" placeholder={formCopy.dateOfBirth} {...register("dateOfBirth")} />
      </div>
      <div>
        <Input placeholder={formCopy.age} {...register("age")} />
        <p className="text-xs text-red-600">{errors.age?.message}</p>
      </div>
      <div>
        <Input placeholder={formCopy.gender} {...register("gender")} />
      </div>
      <div>
        <Input placeholder={formCopy.schoolGrade} {...register("schoolGrade")} />
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">{formCopy.concernsLabel}</p>
        <div className="flex flex-wrap gap-2">
          {formCopy.concernOptions.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => toggleConcern(c)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                selectedConcerns.includes(c)
                  ? "border-[color:var(--color-sage)] bg-[color:var(--color-sage)] text-white"
                  : "border-[color:var(--color-border)] bg-white text-[color:var(--color-muted)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="text-xs text-red-600">{errors.concerns?.message}</p>
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">{formCopy.diagnosisLabel}</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" value="yes" {...register("hasDiagnosis")} />
            {formCopy.yes}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" value="no" {...register("hasDiagnosis")} />
            {formCopy.no}
          </label>
        </div>
        <p className="text-xs text-red-600">{errors.hasDiagnosis?.message}</p>
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">{formCopy.previousTherapiesLabel}</p>
        <div className="flex flex-wrap gap-2">
          {formCopy.previousTherapyOptions.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => toggleTherapy(t)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                selectedTherapies.includes(t)
                  ? "border-[color:var(--color-sage)] bg-[color:var(--color-sage)]/10 text-[color:var(--color-sage-dark)]"
                  : "border-[color:var(--color-border)] bg-white text-[color:var(--color-muted)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <Textarea placeholder={formCopy.biggestConcern} rows={3} {...register("biggestConcern")} />
        <p className="text-xs text-red-600">{errors.biggestConcern?.message}</p>
      </div>

      <div className="md:col-span-2">
        <p className="mb-2 text-sm font-medium text-[color:var(--color-sage-dark)]">{formCopy.preferredTimeLabel}</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {formCopy.timeSlots.map((slot) => (
            <label
              key={slot}
              className="flex cursor-pointer items-center rounded-xl border border-[color:var(--color-border)] bg-white px-3 py-2.5 text-sm"
            >
              <input type="radio" value={slot} className="mr-2" {...register("preferredTime")} />
              {slot}
            </label>
          ))}
        </div>
        <p className="text-xs text-red-600">{errors.preferredTime?.message}</p>
      </div>

      <div className="md:col-span-2">
        <label className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
          <input type="checkbox" className="mt-1" {...register("consent")} />
          <span>{formCopy.consent}</span>
        </label>
        <p className="text-xs text-red-600">{errors.consent?.message}</p>
      </div>

      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
          {isSubmitting ? formCopy.submitting : formCopy.submit}
        </Button>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      </div>
    </form>
  );
}
