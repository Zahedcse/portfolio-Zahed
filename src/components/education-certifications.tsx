"use client";

import { profileData } from "@/lib/profile-data";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function EducationCertifications() {
  const { education, certifications } = profileData;

  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="Education & Credentials"
        title="Foundation that powers quality leadership"
        description="Continuous learning keeps me sharp—whether through formal education or curated certifications."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50"
        >
          <div className="flex items-center gap-3 text-cyan-200">
            <GraduationCap size={24} />
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-100/80">
              Education
            </p>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            {education.degree}
          </h3>
          <p className="text-sm text-slate-300">
            {education.school} • {education.period}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {education.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/60"
        >
          <div className="flex items-center gap-3 text-fuchsia-200">
            <Award size={24} />
            <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-100/80">
              Certifications
            </p>
          </div>
          <ul className="mt-4 space-y-4 text-sm text-slate-200">
            {certifications.map((cert) => (
              <li
                key={`${cert.title}-${cert.org}`}
                className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                <div>
                  <span className="text-base font-semibold text-white">
                    {cert.title}
                  </span>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">
                    {cert.org} • {cert.year}
                  </span>
                </div>
                {cert.description && (
                  <p className="text-slate-300">{cert.description}</p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

