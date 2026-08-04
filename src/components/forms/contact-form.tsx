"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/providers/language-provider";

type ContactInput = {
  parentName: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const { messages } = useLanguage();
  const formCopy = messages.forms.contact;
  const [success, setSuccess] = useState<string | null>(null);

  const contactSchema = useMemo(
    () =>
      z.object({
        parentName: z.string().min(2, formCopy.errors.parentName),
        email: z.string().email(formCopy.errors.email),
        phone: z.string().min(8, formCopy.errors.phone),
        message: z.string().min(10, formCopy.errors.message),
      }),
    [formCopy],
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactInput) => {
    setSuccess(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) return;
    setSuccess(formCopy.success);
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder={formCopy.parentName} {...register("parentName")} aria-invalid={Boolean(errors.parentName)} />
      <p className="text-xs text-red-600">{errors.parentName?.message}</p>
      <Input type="email" placeholder={formCopy.email} {...register("email")} aria-invalid={Boolean(errors.email)} />
      <p className="text-xs text-red-600">{errors.email?.message}</p>
      <Input placeholder={formCopy.phone} {...register("phone")} aria-invalid={Boolean(errors.phone)} />
      <p className="text-xs text-red-600">{errors.phone?.message}</p>
      <Textarea placeholder={formCopy.message} {...register("message")} aria-invalid={Boolean(errors.message)} />
      <p className="text-xs text-red-600">{errors.message?.message}</p>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? messages.common.sending : formCopy.submit}
      </Button>
      {success ? <p className="text-sm text-[color:var(--color-sage-dark)]">{success}</p> : null}
    </form>
  );
}
