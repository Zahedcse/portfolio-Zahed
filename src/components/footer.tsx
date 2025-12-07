"use client";

import { profileData } from "@/lib/profile-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#02000f] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <span>
          © {year} All rights reserved — {profileData.name}
        </span>
        <span className="text-xs uppercase tracking-[0.4em] text-slate-500">
          Quality without compromise
        </span>
      </div>
    </footer>
  );
}

