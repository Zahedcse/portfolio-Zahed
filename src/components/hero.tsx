"use client";

import { profileData } from "@/lib/profile-data";
import { fadeUp } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Github, Linkedin, Mail } from "lucide-react";
import { CTAButton } from "@/components/cta-button";

export function Hero() {
  const { name, role, summary, heroMetrics, highlights, social, email } =
    profileData;

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="sparkle left-12 top-20 hidden lg:block" />
      <div className="sparkle sparkle--secondary right-16 bottom-0 hidden lg:block" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1 space-y-7"
          variants={fadeUp()}
          initial="hidden"
          animate="visible"
        >
          <span className="tag w-fit">QA Leadership & Automation</span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {name} — {role}
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl">
              <Balancer>{summary}</Balancer>
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200 shadow-lg shadow-cyan-500/5"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <CTAButton
              href={`mailto:${email}`}
              label="Book a QA call"
              icon={<Mail size={18} />}
            />
            <CTAButton
              href={social.linkedin}
              label="LinkedIn"
              variant="secondary"
              icon={<Linkedin size={18} />}
            />
            <CTAButton
              href={social.github}
              label="GitHub"
              variant="ghost"
              icon={<Github size={18} />}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center shadow-inner shadow-slate-900/50"
              >
                <p className="text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-1 justify-center"
          variants={fadeUp(0.15)}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-cyan-400/40 via-sky-500/30 to-fuchsia-500/30 blur-3xl" />
            <Image
              src="/images/zahed.jpg"
              alt={`Portrait of ${name}`}
              width={420}
              height={560}
              priority
              className="relative rounded-[36px] border border-white/15 object-cover shadow-2xl shadow-cyan-500/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

