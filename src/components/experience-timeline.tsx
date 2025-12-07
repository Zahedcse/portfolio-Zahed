"use client";

import { profileData } from "@/lib/profile-data";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Growth through hands-on QA leadership"
        description="From associate QA to leading cross-functional squads, each step reinforced my focus on sustainable quality."
      />

      <div className="relative">
        <span className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/80 via-white/5 to-transparent md:block" />

        <div className="flex flex-col gap-10">
          {profileData.experiences.map((experience, idx) => (
            <motion.article
              key={experience.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.08 }}
              className="relative rounded-3xl border border-white/10 bg-slate-950/50 p-6 shadow-lg shadow-slate-950/60"
            >
              <span className="absolute -left-[11px] top-8 hidden h-4 w-4 rounded-full border border-cyan-400 bg-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.6)] md:inline-flex" />
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {experience.company} • {experience.location}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  {experience.period}
                </span>
              </div>

              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

