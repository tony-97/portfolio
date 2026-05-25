export type ProjectMetadata = {
  title: string;
  description: string;
  goal: string;
  stack: string[];
  challenge: string;
  github?: string;
  demo?: string;
  publishedAt: Date;
  lastModified: Date;
  image: string;
};

export type ProjectData = {
  slug: string;
  metadata: ProjectMetadata;
  component: React.FC;
};
