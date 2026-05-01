"use client";

import { useInView } from "motion/react";
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
      style={style}
      animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
