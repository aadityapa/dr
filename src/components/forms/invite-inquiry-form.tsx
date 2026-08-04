"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
  consent: true;
};

export function InviteInquiryForm() {
  const { messages } = useLanguage();
  const formCopy = messages.forms.invite;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, formCopy.errors.name),
        organisation: z.string().min(2, formCopy.errors.organisation),
        email: z.string().email(formCopy.errors.email),
        phone: z.string().min(10, formCopy.errors.phone),
        eventType: z.string().min(2, formCopy.errors.eventType),
        message: z.string().min(20, formCopy.errors.message),
        consent: z.literal(true, { message: formCopy.errors.consent }),
      }),
    [formCopy],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName: data.name,
          phone: data.phone,
          email: data.email,
          message: `Invite Sharuja Inquiry\nOrganisation: ${data.organisation}\nEvent type: ${data.eventType}\n\n${data.message}`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-[color:var(--color-soft-green)]/50 p-6 text-center">
        <p className="font-semibold text-[color:var(--color-sage-dark)]">{formCopy.successTitle}</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">{formCopy.successMessage}</p>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={formCopy.name} {...register("name")} />
      <p className="text-xs text-red-600">{errors.name?.message}</p>
      <Input placeholder={formCopy.organisation} {...register("organisation")} />
      <p className="text-xs text-red-600">{errors.organisation?.message}</p>
      <Input type="email" placeholder={formCopy.email} {...register("email")} />
      <p className="text-xs text-red-600">{errors.email?.message}</p>
      <Input placeholder={formCopy.phone} {...register("phone")} />
      <p className="text-xs text-red-600">{errors.phone?.message}</p>
      <Input placeholder={formCopy.eventType} {...register("eventType")} />
      <p className="text-xs text-red-600">{errors.eventType?.message}</p>
      <Textarea placeholder={formCopy.message} rows={5} {...register("message")} />
      <p className="text-xs text-red-600">{errors.message?.message}</p>
      <label className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
        <input type="checkbox" className="mt-1" {...register("consent")} />
        {formCopy.consent}
      </label>
      <p className="text-xs text-red-600">{errors.consent?.message}</p>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? formCopy.submitting : formCopy.submit}
      </Button>
      {status === "error" && <p className="text-sm text-red-600">{formCopy.error}</p>}
    </form>
  );
}
