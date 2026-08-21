"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "glossy-btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-cream)]",
  {
    variants: {
      variant: {
        default: "btn-vibrant text-white",
        outline:
          "btn-lift border border-[color:var(--color-sage)] text-[color:var(--color-sage-dark)] hover:bg-[color:var(--color-soft-green)]",
        ghost: "btn-lift text-[color:var(--color-sage-dark)] hover:bg-[color:var(--color-soft-green)]",
        warm: "btn-vibrant bg-[color:var(--color-terracotta)] text-white [--grad-a:#b86a4e] [--grad-b:#8a4531] [--grad-glow:rgba(168,90,66,0.4)]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
