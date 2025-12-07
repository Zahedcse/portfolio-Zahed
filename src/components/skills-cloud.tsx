"use client";

import { profileData } from "@/lib/profile-data";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";

export function SkillsCloud() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Toolbox for quality at scale"
        description="Blending manual intuition with automation depth, performance tuning, and collaborative rituals."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {profileData.skills.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/40"
          >
            <h3 className="text-lg font-semibold text-white">
              {skillGroup.title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {skillGroup.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 leading-relaxed"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

