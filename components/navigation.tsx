"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLandingPage } from "@/context/landing_page_context";

import { Section } from "@/lib/constants";

export default function Navigation<T extends React.ElementType[]>({
  sections,
}: {
  sections: [...{ [K in keyof T]: Omit<Section<T[K]>, "component"> }];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, setNavBarHeight } = useLandingPage();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setNavBarHeight(entry.contentRect.height);
    });

    if (ref.current) {
      ro.observe(ref.current);
    }

    return () => ro.disconnect();
  }, []);

  const pathname = usePathname();
  console.log(pathname);
  const sectionNavigation = (section: {
    id: string;
    label: string;
    path?: string;
  }) => {
    const sectionPath = section.path || "/";
    const isActive =
      activeSection === section.id ||
      (sectionPath !== "/" &&
        pathname.startsWith(sectionPath) &&
        !activeSection);
    const href = sectionPath === "/" ? `/#${section.id}` : sectionPath;
    return { isActive, href };
  };

  return (
    <motion.nav
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky w-full top-0 z-50 bg-slate-900/80 backdrop-blur-sm backdrop-opacity-90 border-b border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          DevPortfolio
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((section, index) => {
            const { href, isActive } = sectionNavigation(section);
            return (
              <li key={index} className="relative">
                <a
                  href={href}
                  className={`block py-2 hover:text-white ${isActive ? "text-white" : ""} transition-colors`}
                >
                  {section.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute bottom-1 left-0 right-0 h-0.5 rounded-full bg-white"
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4"
          >
            <ul className="flex flex-col space-y-4 text-sm font-medium">
              {sections.map((section, index) => {
                const { href, isActive } = sectionNavigation(section);
                return (
                  <li key={index}>
                    <a
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block hover:text-white ${isActive ? "text-white" : "text-slate-400"} transition-colors`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
