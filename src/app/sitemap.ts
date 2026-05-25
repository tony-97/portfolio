import { listProjects } from "@/lib/api";
import { baseURL } from "@/resources/config";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await listProjects();
  return [
    {
      url: baseURL,
      lastModified: new Date("2026-05-09"),
      priority: 1.0,
    },
    {
      url: `${baseURL}/projects`,
      lastModified: new Date("2026-05-09"),
      priority: 0.8,
    },
    ...projects.map(
      ({ slug, metadata: { lastModified } }): MetadataRoute.Sitemap[number] => {
        return {
          url: `${baseURL}/projects/${slug}`,
          lastModified,
          priority: 0.7,
        };
      },
    ),
  ];
}
