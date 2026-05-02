"use client";

import { useLandingPage } from "@/context/landing_page_context";
import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import { CSSProperties, ReactNode, useEffect, useRef } from "react";

export default function ScrollAnimation({
  id,
  style,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /** Applied to the full-bleed <section> wrapper (background, etc.) */
  className?: string;
  /** Applied to the inner content container (max-width, padding, etc.) */
  innerClassName?: string;
}) {
  const { setActiveSection, navBarHeight } = useLandingPage();
  const ref = useRef<HTMLElement>(null);
  const isInview = useInView(ref, {
    amount: "some",
    margin: "-30% 0px -30% 0px",
  });
  useEffect(() => {
    if (isInview && ref.current) {
      setActiveSection(ref.current.id);
    }
  }, [isInview]);
  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ minHeight: `calc(100svh - ${navBarHeight}px)`, ...style }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`${isInview ? "" : "scroll-mt-10"} flex flex-col justify-center ${className ?? ""}`}
    >
      {/* Inner container constrains content width */}
      <div className={`max-w-3xl mx-auto px-6 w-full ${innerClassName ?? ""}`}>
        {children}
      </div>
    </motion.section>
  );
}
