"use client";

import { useLandingPage } from "@/context/landing_page_context";
import { LazyMotion, useInView } from "motion/react";
import * as m from "motion/react-m";
import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import { animationFeaturesLoader } from "../lib/lazy_loaders";

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
    <LazyMotion features={animationFeaturesLoader} strict>
      <m.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        style={{
          minHeight: `calc(100svh - ${navBarHeight}px)`,
          scrollMarginTop: `${(isInview ? 0 : 40) + navBarHeight}px`,
          ...style,
        }}
        className={`flex flex-col justify-center ${className ?? ""}`}
      >
        {/* Inner container constrains content width */}
        <div
          className={`max-w-3xl mx-auto px-6 w-full ${innerClassName ?? ""}`}
        >
          {children}
        </div>
      </m.section>
    </LazyMotion>
  );
}
