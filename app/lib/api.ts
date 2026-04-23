import fs from "fs/promises";
import path from "path";
import { ProjectData } from "../interfaces/project";

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
  const files = await fs.readdir(path.join(process.cwd(), "content/projects"));

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
