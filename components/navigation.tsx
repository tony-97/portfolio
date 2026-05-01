"use client";

import { useLandingPage } from "@/context/landing_page_context";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
    <motion.header
      ref={ref}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:opacity-70"
        >
          alex.dev
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {sections.map((section, index) => {
            const { href, isActive } = sectionNavigation(section);
            return (
              <li key={index} className="relative">
                <a
                  href={href}
                  className={`py-1.5 transition-colors ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
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
                    className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-foreground rounded-full"
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            aria-label="Mobile Menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border px-6 py-4"
          >
            <ul className="flex flex-col gap-3 text-sm">
              {sections.map((section, index) => {
                const { href, isActive } = sectionNavigation(section);
                return (
                  <li key={index}>
                    <a
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-1 transition-colors ${
                        isActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
