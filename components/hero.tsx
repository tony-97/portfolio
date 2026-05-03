import { ArrowDown, ArrowRight } from "lucide-react";

import Link from "next/link";
import ScrollAnimation from "./scroll_animation";

export default function HeroSection({ id }: { id: string }) {
  return (
    <ScrollAnimation
      id={id}
      className={[
        /* Light: warm amber-tinted gradient from top-left */
        "bg-gradient-to-br from-amber-50 via-stone-50 to-stone-100",
        /* Dark: deep radial from near-black to dark stone */
        "dark:from-stone-950 dark:via-stone-950 dark:to-stone-900",
        "relative overflow-hidden",
      ].join(" ")}
    >
      {/* Decorative blurred blob — light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-120 h-120 rounded-full
          bg-amber-200/40 blur-3xl dark:bg-amber-900/20"
      />
      {/* Decorative blurred blob — right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-90 h-w-90 rounded-full
          bg-stone-200/60 blur-3xl dark:bg-stone-800/30"
      />

      <div className="max-w-2xl relative z-10">
        <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wide">
          Hello — I&apos;m
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight leading-[1.1]">
          Alex Developer.
        </h1>
        <h2 className="text-xl sm:text-2xl text-muted-foreground font-normal mb-8 leading-relaxed">
          A junior engineer building my way into software — one thoughtful
          project at a time.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl">
          I recently transitioned into tech. I don&apos;t have a decade of
          corporate experience (yet!), but I bring deep curiosity, a strong
          technical foundation, and a portfolio built from the ground up.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90"
          >
            View my work
            <ArrowDown className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground rounded-lg border border-border hover:bg-surface-raised"
          >
            Get in touch
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
}
