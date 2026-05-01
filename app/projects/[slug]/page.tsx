import { LandingPageProvider } from "@/context/landing_page_context";
import { getProject } from "@/lib/api";
import { sections } from "@/lib/constants";
import Navigation from "@/components/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, component: MDXComponent } = await getProject(
    decodeURIComponent(slug),
  );

  return (
    <LandingPageProvider>
      <Navigation
        sections={sections.map(({ component, ...rest }) => rest)}
      ></Navigation>
      <main className="min-h-screen max-w-3xl mx-auto px-6 py-20 md:py-24">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
              {metadata.title}
            </h1>
            {metadata.description && (
              <p className="text-xl text-slate-400 mb-6">
                {metadata.description}
              </p>
            )}
            {metadata.stack && metadata.stack.length > 0 && (
              <ul className="flex flex-wrap gap-2 mb-8">
                {metadata.stack.map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-slate-300 ring-1 ring-inset ring-slate-700/50"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex gap-6">
              {metadata.github && (
                <a
                  href={metadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View on GitHub <span aria-hidden="true">&rarr;</span>
                </a>
              )}
              {metadata.demo && (
                <a
                  href={metadata.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Demo <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          </header>
          <section className="prose prose-invert prose-slate max-w-none prose-lg prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl">
            <MDXComponent></MDXComponent>
          </section>
        </article>
      </main>
    </LandingPageProvider>
  );
}
