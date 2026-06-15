"use client";

import { useLandingPage } from "@/context/landing_page_context";
import { Menu, X } from "@/lib/icons";

import { AnimatePresence, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import NavLinks, {
  sectionNavigation,
  Sections,
} from "@/components/navigation/nav_links";

import dynamic from "next/dynamic";
import LogoLink from "./logo_link";

const DarkThemeTogle = dynamic(() => import("@/components/toggle_theme"), {
  ssr: false,
});

export default function Navigation({ sections }: { sections: Sections }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, setNavBarHeight } = useLandingPage();
  const pathname = usePathname();

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

  const navItemInfo = (section: Sections[number]) => {
    return sectionNavigation(section, pathname, activeSection);
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
          <LogoLink />
          {/* Desktop Menu */}
          <NavLinks
            sections={sections}
            sectionNavigation={navItemInfo}
            className="hidden md:flex items-center gap-8 text-sm"
          >
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
          </NavLinks>

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
                    <NavLinks
                      sections={sections}
                      sectionNavigation={navItemInfo}
                      className="flex flex-col gap-3 text-sm"
                    ></NavLinks>
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
