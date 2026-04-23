import { Metadata } from "next/types";

export type ProjectMetadata = Metadata & {
  title: string;
  description: string;
  goal: string;
  stack: string[];
  challenge: string;
  github: string;
  demo: string;
};

export type ProjectData = {
  slug: string;
  metadata: ProjectMetadata;
  component: React.FC;
};
