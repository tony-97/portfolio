import { ProjectData } from "@/interfaces/project";
import fg from "fast-glob";

import path from "path";

export async function getProject(slug: string): Promise<ProjectData> {
  const post = await import(`@/content/projects/${slug}.mdx`);
  const metadata = post.metadata;
  return {
    slug,
    metadata,
    component: post.default,
  };
}

export async function listProjects(): Promise<
  Omit<ProjectData, "component">[]
> {
  const files = await fg("src/content/projects/*.mdx", { cwd: process.cwd() });

  return Promise.all(
    files.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const { metadata } = await getProject(slug);
      return {
        slug,
        metadata,
      };
    }),
  );
}
