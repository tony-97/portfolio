import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { RefObject, useEffect, useState } from "react";

export default function Navigation({
  ref,
  sections,
  sectionRefs,
}: {
  ref?: React.Ref<HTMLElement>;
  sections: { id: string; label: string }[];
  sectionRefs: RefObject<Map<string, HTMLElement>>;
}) {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.51 },
    );
    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
          {sections.map((section, index) => (
            <li key={index} className="relative">
              <a
                href={`#${section.id}`}
                className={`block py-2 hover:text-white ${activeSection === section.id ? "text-white" : ""} transition-colors`}
              >
                {section.label}
              </a>
              {activeSection === section.id && (
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
          ))}
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
              {sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block hover:text-white ${activeSection === section.id ? "text-white" : "text-slate-400"} transition-colors`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
