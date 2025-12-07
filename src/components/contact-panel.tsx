"use client";

import { useState, type FormEvent } from "react";
import { profileData } from "@/lib/profile-data";
import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { CTAButton } from "@/components/cta-button";
import { Clock3, Mail, MapPin } from "lucide-react";

type ContactFormState = {
  name: string;
  company: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  company: "",
  message: "",
};

export function ContactPanel() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);

  const handleChange = (
    field: keyof ContactFormState,
    value: string,
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Quality partnership with ${formState.company || "your team"}`;
    const body = `Hi Zahed,\n\n${formState.message || "I'd love to connect regarding QA opportunities."}\n\nThanks,\n${formState.name || "A prospective partner"}`;
    const url = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = url;
    setFormState(initialState);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build resilient releases"
        description="Reach out for senior QA leadership, automation strategy, or short-term consulting to unblock your delivery roadmap."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 shadow-lg shadow-slate-950/50">
          <h3 className="text-2xl font-semibold text-white">
            {profileData.contact.availability}
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            {profileData.contact.note}
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-200">
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-300" size={18} />
              <a
                href={`mailto:${profileData.email}`}
                className="underline-offset-4 hover:underline"
              >
                {profileData.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-fuchsia-300" size={18} />
              <span>{profileData.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="text-slate-300" size={18} />
              <span>{profileData.contact.responseTime}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href={profileData.social.linkedin} label="LinkedIn" variant="secondary" />
            <CTAButton href={profileData.social.github} label="GitHub" variant="ghost" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/50"
        >
          <div className="grid gap-4">
            <label className="text-sm text-slate-200">
              Name
              <input
                type="text"
                value={formState.name}
                onChange={(event) => handleChange("name", event.target.value)}
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
              />
            </label>

            <label className="text-sm text-slate-200">
              Company / Product
              <input
                type="text"
                value={formState.company}
                onChange={(event) =>
                  handleChange("company", event.target.value)
                }
                placeholder="Where you’re building quality"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-300 focus:outline-none"
              />
            </label>

            <label className="text-sm text-slate-200">
              Project details
              <textarea
                value={formState.message}
                onChange={(event) => handleChange("message", event.target.value)}
                placeholder="Timeline, stack, goals, or blockers…"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.01]"
          >
            Compose email
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}

