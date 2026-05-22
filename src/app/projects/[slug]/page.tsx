import { getProject } from "@/lib/api";
import { baseURL } from "@/resources/config";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getProject(decodeURIComponent(slug));
  const url = `/projects/${slug}`;
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      locale: "es",
      type: "article",
      url: url,
      title: metadata.title,
      description: metadata.description,
      authors: ["Tony Angello Acuña Flores"],
      publishedTime: metadata.publishedAt.toDateString(),
      modifiedTime: metadata.lastModified.toDateString(),
      tags: metadata.stack,
      section: "Casos de Estudio",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, component: MDXComponent } = await getProject(
    decodeURIComponent(slug),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    image: `${baseURL}/projects/${slug}/opengraph-image`,
    author: {
      "@id": `${baseURL}/#person`,
    },
    datePublished: metadata.publishedAt,
    dateModified: metadata.lastModified,
    publisher: {
      "@id": `${baseURL}/#person`,
    },
  };
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-20 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {metadata.title}
          </h1>
          {metadata.description && (
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {metadata.description}
            </p>
          )}
          {metadata.stack && metadata.stack.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 mb-6">
              {metadata.stack.map((tech) => (
                <li
                  key={tech}
                  className="inline-flex items-center rounded-full bg-surface-raised px-3 py-1 text-sm font-medium text-muted-foreground border border-border"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
          <div className="flex gap-5">
            {metadata.github && (
              <a
                href={metadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                Ver en GitHub <span aria-hidden="true">&rarr;</span>
              </a>
            )}
            {metadata.demo && (
              <a
                href={metadata.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                Demo en vivo <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </header>
        <section className="prose prose-stone max-w-none prose-lg prose-headings:text-foreground prose-headings:font-semibold prose-a:text-foreground prose-a:underline hover:prose-a:opacity-70 prose-img:rounded-xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <MDXComponent></MDXComponent>
        </section>
      </article>
    </main>
  );
}
