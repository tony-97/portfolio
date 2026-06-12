"use client";

import { useLandingPage } from "@/context/landing_page_context";
import { Menu, X } from "@/lib/icons";

import { AnimatePresence, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Section } from "@/lib/constants";

import dynamic from "next/dynamic";
import Link from "next/link";

const DarkThemeTogle = dynamic(() => import("@/components/toggle_theme"), {
  ssr: false,
});

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
      setNavBarHeight(entry.borderBoxSize[0].blockSize);
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
    let isActive = false;
    if (sectionPath !== "/" && pathname !== "/") {
      isActive = pathname.startsWith(sectionPath);
    } else {
      isActive = pathname === "/" && activeSection === section.id;
    }
    let href = "";
    if (pathname === "/" && sectionPath === "/") {
      href = `#${section.id}`;
    } else if (sectionPath === "/") {
      href = `/#${section.id}`;
    } else {
      href = sectionPath;
    }
    return { isActive, href };
  };

  const features = () => import("@/lib/features").then(({ all }) => all);
  return (
    <LazyMotion features={features} strict>
      <m.header
        ref={ref}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky w-full top-0 z-50 bg-surface-raised/60 backdrop-blur-md border-b border-border"
      >
        <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground hover:opacity-70"
          >
            tony &#123; &#125;
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {sections.map((section, index) => {
              const { href, isActive } = sectionNavigation(section);
              return (
                <li key={section.id} className="relative">
                  <Link
                    href={href}
                    className={`py-1.5 transition-colors ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {section.label}
                  </Link>
                  {isActive && (
                    <m.div
                      layoutId="active-indicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      style={{ originY: "0px" }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full"
                    ></m.div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <DarkThemeTogle />

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative text-muted-foreground hover:text-foreground focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
              {/* Mobile Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <m.nav
                    aria-label="Menú móvil"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden absolute right-1/2 top-1/2 bg-background border border-border px-6 py-4"
                  >
                    <ul className="flex flex-col gap-3 text-sm">
                      {sections.map((section, index) => {
                        const { href, isActive } = sectionNavigation(section);
                        return (
                          <li key={index}>
                            <Link
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
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </m.nav>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </m.header>
    </LazyMotion>
  );
}
