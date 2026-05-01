import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { listProjects } from "@/lib/api";
import ScrollAnimation from "./scroll_animation";

export default async function ProjectsSection({ id }: { id: string }) {
  const projects = await listProjects();
  return (
    <ScrollAnimation id={id}>
      <div className="py-20">
        <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wide">
          02
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          What I&apos;ve Built
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl leading-relaxed">
          The best way to learn is by doing. Here are projects I&apos;ve built
          from scratch to sharpen my skills.
        </p>

        <div className="space-y-6">
          {projects.map(({ metadata }, index) => (
            <article
              key={index}
              className="group p-6 sm:p-8 bg-surface rounded-xl border border-border hover:border-border-subtle transition-colors"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {metadata.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {metadata.description}
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a
                    href={metadata.github}
                    className="text-muted hover:text-foreground transition-colors"
                    title="GitHub Repo"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href={metadata.demo}
                    className="text-muted hover:text-foreground transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    The Goal
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {metadata.goal}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Challenge & Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {metadata.challenge}
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-1.5">
                {metadata.stack.map((tech, i) => (
                  <li
                    key={i}
                    className="px-2.5 py-0.5 bg-surface-raised rounded-full text-xs font-medium text-muted-foreground border border-border"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-foreground rounded-full border border-border hover:bg-surface-raised transition-colors group"
          >
            See all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
}
