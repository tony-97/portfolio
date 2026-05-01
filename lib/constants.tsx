import {
  Binary,
  Blocks,
  Box,
  Braces,
  Code2,
  Cpu,
  Database,
  FileCode,
  FileCode2,
  GitBranch,
  Github,
  Layers,
  Layout,
  Leaf,
  Network,
  Package,
  Palette,
  Send,
  Server,
  ServerCog,
  Terminal,
  TerminalSquare,
  Wind,
  Zap,
} from "lucide-react";

import { JSX } from "react";

import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/skills";

export type Section<T extends React.ElementType> = {
  id: string;
  label: string;
  path?: string;
  component: T;
  props?: Partial<React.ComponentProps<T>>;
};

function defineSections<T extends React.ElementType[]>(
  sections: [...{ [K in keyof T]: Section<T[K]> }],
) {
  return sections;
}

export const skills: {
  category: string;
  icon: JSX.Element;
  items: { name: string; icon: JSX.Element }[];
}[] = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "HTML5", icon: <FileCode2 className="w-4 h-4" /> },
      { name: "CSS3", icon: <Palette className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Braces className="w-4 h-4" /> },
      { name: "React.js", icon: <Blocks className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <Wind className="w-4 h-4" /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    items: [
      { name: "Node.js", icon: <ServerCog className="w-4 h-4" /> },
      { name: "Express", icon: <Zap className="w-4 h-4" /> },
      { name: "PHP", icon: <FileCode className="w-4 h-4" /> },
      { name: "Laravel", icon: <Layers className="w-4 h-4" /> },
      { name: "Python", icon: <TerminalSquare className="w-4 h-4" /> },
      { name: "REST APIs", icon: <Network className="w-4 h-4" /> },
    ],
  },
  {
    category: "Systems & Data",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    items: [
      { name: "C++", icon: <Cpu className="w-4 h-4" /> },
      { name: "C", icon: <Binary className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "MongoDB", icon: <Leaf className="w-4 h-4" /> },
      { name: "Mongoose", icon: <Box className="w-4 h-4" /> },
    ],
  },
  {
    category: "Tools",
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    items: [
      { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
      { name: "GitHub", icon: <Github className="w-4 h-4" /> },
      { name: "VS Code", icon: <Code2 className="w-4 h-4" /> },
      { name: "Postman", icon: <Send className="w-4 h-4" /> },
      { name: "NPM", icon: <Package className="w-4 h-4" /> },
    ],
  },
];

export const sections = defineSections([
  { id: "hero", label: "Home", component: HeroSection },
  {
    id: "skills",
    label: "Skills",
    component: SkillsSection,
    props: { skills },
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    component: ProjectsSection,
  },
  { id: "about", label: "About", component: AboutSection },
  { id: "contact", label: "Contact", component: ContactSection },
]);
