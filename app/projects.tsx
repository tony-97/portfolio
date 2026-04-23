"use client";
import { ExternalLink, Github } from "lucide-react";

import ScrollAnimation from "./scroll_animation";

export default function ProjectsSection({
  projects,
  id,
  ref,
}: {
  projects: {
    title: string;
    description: string;
    goal: string;
    stack: string[];
    challenge: string;
    github: string;
    demo: string;
  }[];
  id: string;
  ref: React.Ref<HTMLElement>;
}) {
  return (
    <ScrollAnimation id={id} ref={ref}>
      <section className="py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
          <span className="text-blue-400 mr-3">02.</span> What I've Been
          Building
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
          To me, the best way to learn is by doing. Here are a few recent
          projects I've developed to put my skills to the test.
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-500 transition-colors duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 sm:gap-0">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="text-slate-400 hover:text-white transition-colors"
                      title="GitHub Repo"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm uppercase tracking-wider">
                      The Goal
                    </h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {project.goal}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm uppercase tracking-wider">
                      The Challenge & Solution
                    </h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {project.challenge}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-emerald-400 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
}
