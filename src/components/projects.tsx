import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { listProjects } from "@/lib/api";
import ScrollAnimation from "./scroll_animation";

export default async function ProjectsSection({ id }: { id: string }) {
  const projects = await listProjects();
  return (
    /* Warm stone-50 / dark stone-900 — clearly different from the white skills section */
    <ScrollAnimation id={id} className="bg-surface">
      <div className="py-20">
        <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wide">
          02
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Lo Que He Construido
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl leading-relaxed">
          La mejor forma de aprender es haciendo. Estos son proyectos que
          construí desde cero para fortalecer mis habilidades.
        </p>

        <div className="space-y-6">
          {projects.map(({ metadata, slug }, index) => (
            <article
              key={index}
              className="group relative p-6 sm:p-8 bg-background rounded-xl border border-border hover:border-border-subtle transition-colors shadow-xs dark:shadow-none"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    <Link href={`/projects/${slug}`} className="after:absolute after:inset-0">
                      {metadata.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {metadata.description}
                  </p>
                </div>
                <div className="relative z-10 flex gap-3 shrink-0">
                  {metadata.github && (
                    <a
                      href={metadata.github}
                      className="text-muted hover:text-foreground transition-colors"
                      title="Repositorio en GitHub"
                    >
                      <Github className="w-4.5 h-4.5" />
                    </a>
                  )}

                  {metadata.demo && (
                    <a
                      href={metadata.demo}
                      className="text-muted hover:text-foreground transition-colors"
                      title="Demo en vivo"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    El Objetivo
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {metadata.goal}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Desafío y Solución
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
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
}
