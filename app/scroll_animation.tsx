"use client";

import * as motion from "motion/react-client";
import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import { useLandingPage } from "./landing_page_context";

export default function ScrollAnimation({
  id,
  style,
  children,
}: {
  id?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const { setActiveSection } = useLandingPage();
  const ref = useRef<HTMLElement>(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <motion.section
      id={id}
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`flex flex-col justify-center`}
    >
      {children}
    </motion.section>
  );
}
