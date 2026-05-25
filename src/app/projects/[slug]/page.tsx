import JSONLd from "@/components/jsonld";
import { getProject } from "@/lib/api";
import { baseURL } from "@/resources/config";
import buildPageMetadata from "@/src/lib/seo";
import { person } from "@/src/resources/content";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

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
  return buildPageMetadata({
    title: metadata.title,
    fullTitle: metadata.title,
    description: metadata.description,
    path: url,
    openGraph: {
      type: "article",
      authors: [person.name],
      publishedTime: metadata.publishedAt.toDateString(),
      modifiedTime: metadata.lastModified.toDateString(),
      tags: metadata.stack,
      section: "Casos de Estudio",
      images: [{ url: metadata.image }],
    },
  });
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
  const dynamicPart = metadata.image.replace("/images/projects/", "");
  const { default: image } = await import(
    `@/public/images/projects/${dynamicPart}`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    image: `${baseURL}${metadata.image}`,
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
      <JSONLd json={jsonLd}></JSONLd>
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
          {metadata.image && (
            <div className="relative w-full mb-6 overflow-hidden rounded-xl border border-border">
              <Image src={image} alt={metadata.title} loading="eager" />
            </div>
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
        <section
          className="prose prose-stone max-w-none prose-lg prose-headings:text-foreground prose-headings:font-semibold prose-a:text-foreground prose-a:underline hover:prose-a:opacity-70 prose-img:rounded-xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground 
          prose-code:bg-surface-raised 
          prose-code:text-accent 
          prose-code:px-1.5 
          prose-code:py-0.5 
          prose-code:rounded-md 
          prose-code:before:hidden 
          prose-code:after:hidden"
        >
          <MDXComponent></MDXComponent>
        </section>
      </article>
    </main>
  );
}
