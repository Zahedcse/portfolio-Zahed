"use client";

import { profileData } from "@/lib/profile-data";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function AwardsSection() {
  const { awards } = profileData;

  if (!awards?.length) return null;

  return (
    <SectionWrapper id="awards">
      <SectionHeading
        eyebrow="Awards"
        title="Recognition for quality excellence"
        description="Highlights of the impact and leadership acknowledged by the organizations I support."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {awards.map((award, index) => (
          <motion.article
            key={`${award.title}-${award.year}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 text-cyan-200">
              <Trophy size={22} />
              <span className="text-xs uppercase tracking-[0.4em] text-cyan-100/80">
                {award.year}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {award.title}
            </h3>
            <p className="text-sm text-slate-300">{award.org}</p>
            {award.description && (
              <p className="mt-3 text-sm text-slate-300">{award.description}</p>
            )}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

