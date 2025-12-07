"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type CTAButtonProps = {
  href: string;
  label: string;
  icon?: ReactNode;
  variant?: Variant;
  className?: string;
};

export function CTAButton({
  href,
  label,
  icon,
  variant = "primary",
  className,
}: CTAButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 text-slate-950 shadow-lg shadow-cyan-500/30",
    secondary:
      "border border-white/30 bg-white/5 text-white hover:border-white/60",
    ghost:
      "text-slate-200 hover:text-white hover:bg-white/10 border border-transparent",
  } as const;

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span>{label}</span>
      {icon}
    </motion.a>
  );
}

