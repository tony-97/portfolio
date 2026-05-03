import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { listProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const projects = await listProjects();

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-20 md:py-24">
      <header className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
          All Projects
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          A complete list of things I&apos;ve built and worked on.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(({ slug, metadata }, index) => (
          <article
            key={index}
            className="group p-6 bg-surface rounded-xl border border-border flex flex-col hover:border-border-subtle transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:opacity-70 transition-opacity">
                <Link href={`/projects/${slug}`}>{metadata.title}</Link>
              </h3>
              <div className="flex gap-2.5 ml-3 shrink-0">
                {metadata.github && (
                  <a
                    href={metadata.github}
                    className="text-muted hover:text-foreground transition-colors"
                    title="GitHub Repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {metadata.demo && (
                  <a
                    href={metadata.demo}
                    className="text-muted hover:text-foreground transition-colors"
                    title="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
              {metadata.description}
            </p>

            <ul className="flex flex-wrap gap-1.5 mb-5">
              {metadata.stack?.map((tech: string, i: number) => (
                <li
                  key={i}
                  className="px-2.5 py-0.5 bg-surface-raised rounded-full text-xs font-medium text-muted-foreground border border-border"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center text-sm font-medium text-foreground hover:opacity-70 transition-opacity mt-auto"
            >
              Read case study{" "}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
