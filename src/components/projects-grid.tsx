"use client";

import { profileData } from "@/lib/profile-data";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProjectsGrid() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Impact across SaaS, events, and marketplaces"
        description="Selected programs where I owned QA strategy, automation maturity, and launch readiness."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {profileData.projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="tag bg-white/10 text-xs">{project.badge}</span>
              <span className="text-xs uppercase tracking-widest text-slate-400">
                {project.period}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {project.impact.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-white"
              >
                Explore project <ArrowUpRight size={16} />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

