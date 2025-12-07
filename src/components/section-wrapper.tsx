"use client";

import { cn, fadeUp } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={cn("relative py-20 sm:py-24", className)}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

