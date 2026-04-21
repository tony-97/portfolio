"use client";

import * as motion from "motion/react-client";
import { CSSProperties, ReactNode } from "react";

//transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}

export default function ScrollAnimation({
  ref,
  id,
  style,
  children,
}: {
  ref?: React.Ref<HTMLElement>;
  id?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
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
