"use client";

import { profileData } from "@/lib/profile-data";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: profileData.social.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: profileData.social.linkedin,
    icon: Linkedin,
  },
];

export function FloatingSocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed bottom-10 right-6 hidden flex-col gap-3 xl:flex"
    >
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-900/70 text-white shadow-lg shadow-slate-950/40 transition hover:-translate-y-1 hover:border-white/60"
          aria-label={social.label}
        >
          <social.icon size={20} />
        </a>
      ))}
      <span className="text-xs uppercase tracking-[0.5em] text-slate-500">
        Connect
      </span>
    </motion.div>
  );
}

