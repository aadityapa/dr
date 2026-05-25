"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  parentName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  message: z.string().min(10, "Please share a little more detail"),
});

type ContactInput = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [success, setSuccess] = useState<string | null>(null);
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
    setSuccess("Thank you. We will reach out shortly.");
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Parent name" {...register("parentName")} aria-invalid={Boolean(errors.parentName)} />
      <p className="text-xs text-red-600">{errors.parentName?.message}</p>
      <Input type="email" placeholder="Email address" {...register("email")} aria-invalid={Boolean(errors.email)} />
      <p className="text-xs text-red-600">{errors.email?.message}</p>
      <Input placeholder="Phone number" {...register("phone")} aria-invalid={Boolean(errors.phone)} />
      <p className="text-xs text-red-600">{errors.phone?.message}</p>
      <Textarea placeholder="How can we help your child?" {...register("message")} aria-invalid={Boolean(errors.message)} />
      <p className="text-xs text-red-600">{errors.message?.message}</p>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {success ? <p className="text-sm text-[color:var(--color-sage-dark)]">{success}</p> : null}
    </form>
  );
}
