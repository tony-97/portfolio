import * as motion from "motion/react-client";

import { RefObject, useEffect } from "react";

export default function Navigation({
  sections,
  sectionRefs,
}: {
  sections: { id: string; label: string }[];
  sectionRefs: RefObject<Map<string, HTMLElement>>;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          }
        });
      },
      { threshold: 0.51 },
    );
    sectionRefs.forEach((ref) => {
      observer.observe(ref);
    });

    return observer.disconnect();
  }, []);
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          DevPortfolio
        </span>
        <ul className="flex space-x-6 text-sm font-medium">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                ref={(node) => {
                  if (node) {
                    sectionRefs.current.set(section.id, node);
                  } else {
                    sectionRefs.current.delete(section.id);
                  }
                }}
                href={`#${section.id}`}
                className="hover:text-white transition-colors"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
