import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { LandingPageProvider } from "@/context/landing_page_context";
import { listProjects } from "@/lib/api";
import { sections } from "@/lib/constants";
import Navigation from "@/components/navigation";

export default async function ProjectsPage() {
  const projects = await listProjects();

  return (
    <LandingPageProvider>
      <Navigation
        sections={sections.map(({ component, ...rest }) => rest)}
      ></Navigation>
      <main className="min-h-screen max-w-5xl mx-auto px-6 py-20 md:py-24">
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
            All Projects
          </h1>
          <p className="text-xl text-slate-400">
            A complete list of things I've built and worked on.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ slug, metadata }, index) => (
            <div
              key={index}
              className="bg-slate-800/30 rounded-2xl border border-slate-700 flex flex-col overflow-hidden hover:border-slate-500 transition-colors duration-300 group"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    <Link href={`/projects/${slug}`}>{metadata.title}</Link>
                  </h3>
                  <div className="flex space-x-3 ml-4">
                    {metadata.github && (
                      <a
                        href={metadata.github}
                        className="text-slate-400 hover:text-white transition-colors"
                        title="GitHub Repo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {metadata.demo && (
                      <a
                        href={metadata.demo}
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 font-medium mb-6 flex-1">
                  {metadata.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {metadata.stack?.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-emerald-400 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${slug}`}
                  className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-auto"
                >
                  Read case study{" "}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </LandingPageProvider>
  );
}
