"use client";

import { SectionHeading } from "@/components/section-heading";
import { SectionWrapper } from "@/components/section-wrapper";
import Balancer from "react-wrap-balancer";

const pillars = [
  {
    title: "Automation Playbooks",
    detail:
      "Selenium & Playwright frameworks with BDD + Allure reporting, reusable page objects, and meaningful dashboards for every deployment.",
  },
  {
    title: "Test Strategy & Coaching",
    detail:
      "Risk-based planning, exploratory heuristics, and pairing rituals that upskill hybrid QA squads while accelerating feedback cycles.",
  },
  {
    title: "Performance & Reliability",
    detail:
      "10M+ concurrent user simulations, WCAG audits, load testing suites, and observability practices that secure launches under pressure.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About"
        title="Human-centered QA leadership"
        description={
          <Balancer>
            I build trust between product, engineering, and customers by pairing
            hands-on testing craft with automation, analytics, and empathetic
            communication. My playbooks elevate quality without slowing down
            shipping velocity.
          </Balancer>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="glass-panel h-full border-white/10 bg-slate-900/50"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
              {pillar.title}
            </div>
            <p className="mt-4 text-sm text-slate-300">{pillar.detail}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

