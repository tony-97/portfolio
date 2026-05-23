import type { Metadata } from "next";
import { siteName } from "../resources/content";

type MetadataProps = Metadata & { path: string };

export default function buildPageMetadata({
  title,
  description,
  openGraph,
  twitter,
  path,
}: MetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: path,
      title: title ?? undefined,
      siteName,
      locale: "es",
      description: description ?? undefined,
      images: openGraph?.images ?? [
        { url: "/api/og", width: 1200, height: 630 },
      ],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? undefined,
      description,
      ...twitter,
    },
    alternates: {
      canonical: path,
    },
  };
}
