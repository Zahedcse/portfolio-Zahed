import { AboutSection } from "@/components/about-section";
import { ContactPanel } from "@/components/contact-panel";
import { EducationCertifications } from "@/components/education-certifications";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { FloatingSocialLinks } from "@/components/floating-social-links";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsGrid } from "@/components/projects-grid";
import { SkillsCloud } from "@/components/skills-cloud";
import { AwardsSection } from "@/components/awards-section";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030016]">
      <Navbar />
      <main className="pb-24">
        <Hero />
        <ProjectsGrid />
        <AboutSection />
        <SkillsCloud />
        <ExperienceTimeline />
        <AwardsSection />
        <EducationCertifications />
        <ContactPanel />
      </main>
      <FloatingSocialLinks />
      <Footer />
    </div>
  );
}
