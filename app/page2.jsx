"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// 1. Helper Component: Each section tracks its own visibility
const ScrollSection = ({
  id,
  activeSection,
  setActiveSection,
  children,
  className,
}) => {
  const ref = useRef(null);

  // Triggers when 50% of the section is in the viewport
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <section id={id} ref={ref} className={`section ${className}`}>
      {children}
    </section>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const links = ["home", "about", "services", "contact"];

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className="nav-link">
                {link.charAt(0).toUpperCase() + link.slice(1)}

                {/* 2. The Framer Motion Magic: Sliding Underline */}
                {activeSection === link && (
                  <motion.div
                    layoutId="active-indicator" // Ties the animations together
                    className="active-line"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Page Sections */}
      <main>
        <ScrollSection
          id="home"
          setActiveSection={setActiveSection}
          className="bg-light"
        >
          <h1>Home Section</h1>
        </ScrollSection>

        <ScrollSection
          id="about"
          setActiveSection={setActiveSection}
          className="bg-dark"
        >
          <h1>About Section</h1>
        </ScrollSection>

        <ScrollSection
          id="services"
          setActiveSection={setActiveSection}
          className="bg-light"
        >
          <h1>Services Section</h1>
        </ScrollSection>

        <ScrollSection
          id="contact"
          setActiveSection={setActiveSection}
          className="bg-dark"
        >
          <h1>Contact Section</h1>
        </ScrollSection>
      </main>
    </div>
  );
};

export default App;
