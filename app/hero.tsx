"use client";
import { ChevronDown, Code2 } from "lucide-react";

import ScrollAnimation from "./scroll_animation";

export default function HeroSection() {
  return (
    <ScrollAnimation>
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 w-fit mb-6 text-sm text-blue-400">
        <Code2 className="w-4 h-4" />
        <span>Hello, World!</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
        I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Alex Developer
        </span>
        .
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-slate-400 mb-8">
        Building my way into Software Engineering.
      </h2>
      <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
        I recently transitioned into tech. I don't have a decade of corporate
        engineering experience (yet!), but I have a deep-rooted passion for
        problem-solving, a freshly honed technical toolkit, and a portfolio of
        projects built from the ground up.
      </p>
      <div className="flex items-center space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center"
        >
          View My Work
          <ChevronDown className="w-4 h-4 ml-2" />
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </ScrollAnimation>
  );
}
