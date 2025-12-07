"use client";

import { navLinks, profileData } from "@/lib/profile-data";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/cta-button";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ACTIVE_LAYOUT_ID = "nav-highlight";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const activeHashRef = useRef("#home");

  useEffect(() => {
    activeHashRef.current = activeHash;
  }, [activeHash]);

  const syncHash = (hash: string) => {
    setActiveHash(hash);
    if (typeof window !== "undefined" && window.location.hash !== hash) {
      window.history.replaceState(null, "", hash);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionElements = navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sectionElements.length) return;

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      const firstSection = sectionElements[0];
      const lastSection = sectionElements[sectionElements.length - 1];

      if (!firstSection || !lastSection) {
        return;
      }

      let currentHash = activeHashRef.current;
      const firstRect = firstSection.getBoundingClientRect();
      const lastRect = lastSection.getBoundingClientRect();

      if (viewportCenter < firstRect.top) {
        currentHash = `#${firstSection.id}`;
      } else if (viewportCenter > lastRect.bottom) {
        currentHash = `#${lastSection.id}`;
      } else {
        for (const section of sectionElements) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            currentHash = `#${section.id}`;
            break;
          }
        }
      }

      if (currentHash !== activeHashRef.current) {
        syncHash(currentHash);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-900/60 px-5 py-3 shadow-2xl shadow-slate-900/40 backdrop-blur-2xl">
          <Link
            href="#home"
            className="flex items-center gap-3 text-sm font-semibold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950">
              ZA
            </span>
            <div className="flex flex-col leading-tight">
              <span>Zahed Alam</span>
              <span className="text-xs text-slate-300">QA Leadership</span>
            </div>
          </Link>

          <LayoutGroup>
            <nav className="hidden items-center gap-2 text-sm text-slate-300 md:flex">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => syncHash(link.href)}
                    className={cn(
                      "relative rounded-full px-4 py-2 font-medium transition-colors",
                      isActive ? "text-white" : "text-slate-300 hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId={ACTIVE_LAYOUT_ID}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-500/20 to-fuchsia-500/20"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>
          </LayoutGroup>

          <div className="hidden md:flex">
            <CTAButton
              href={`mailto:${profileData.email}`}
              label="Let’s collaborate"
              icon={<Mail size={18} />}
            />
          </div>

          <button
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-6xl px-4 md:hidden"
          >
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-2xl">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      syncHash(link.href);
                      closeMenu();
                    }}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base font-medium transition",
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 text-white"
                        : "bg-white/5 text-slate-200",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <CTAButton
                href={`mailto:${profileData.email}`}
                label="Email Zahed"
                icon={<Mail size={18} />}
                className="w-full justify-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

