import type { Metadata } from "next";
import { siteName } from "../resources/content";

type MetadataProps = Metadata & { path: string; fullTitle?: string };

export default function buildPageMetadata({
  title,
  fullTitle,
  description,
  openGraph,
  twitter,
  path,
}: MetadataProps): Metadata {
  return {
    ...(title && { title }),
    description,
    openGraph: {
      type: "website",
      url: path,
      title: fullTitle,
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
      title: fullTitle,
      description,
      images: openGraph?.images ?? [
        { url: "/api/og", width: 1200, height: 630 },
      ],
      ...twitter,
    },
    alternates: {
      canonical: path,
    },
  };
}
