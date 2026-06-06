import {
  AppWindow,
  Binary,
  Blocks,
  Braces,
  Brackets,
  Code2,
  Cpu,
  Database,
  FileCode,
  FileCode2,
  GitBranch,
  Github,
  Layers,
  Layout,
  Network,
  Package,
  Palette,
  Send,
  Server,
  ServerCog,
  Terminal,
  TerminalSquare,
  Wind,
  Workflow,
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
    icon: <Layout className="w-5 h-5" />,
    items: [
      { name: "HTML5", icon: <FileCode2 className="w-3.5 h-3.5" /> },
      { name: "CSS3", icon: <Palette className="w-3.5 h-3.5" /> },
      { name: "JavaScript", icon: <Braces className="w-3.5 h-3.5" /> },
      { name: "TypeScript", icon: <Brackets className="w-3.5 h-3.5" /> },
      { name: "React.js", icon: <Blocks className="w-3.5 h-3.5" /> },
      { name: "Next.js", icon: <AppWindow className="w-3.5 h-3.5" /> },
      { name: "Tailwind CSS", icon: <Wind className="w-3.5 h-3.5" /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    items: [
      { name: "Node.js", icon: <ServerCog className="w-3.5 h-3.5" /> },
      { name: "Express", icon: <Zap className="w-3.5 h-3.5" /> },
      { name: "PHP", icon: <FileCode className="w-3.5 h-3.5" /> },
      { name: "Laravel", icon: <Layers className="w-3.5 h-3.5" /> },
      { name: "Python", icon: <TerminalSquare className="w-3.5 h-3.5" /> },
      { name: "REST APIs", icon: <Network className="w-3.5 h-3.5" /> },
    ],
  },
  {
    category: "Sistemas y Datos",
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "C++", icon: <Cpu className="w-3.5 h-3.5" /> },
      { name: "C", icon: <Binary className="w-3.5 h-3.5" /> },
      { name: "MySQL", icon: <Database className="w-3.5 h-3.5" /> },
    ],
  },
  {
    category: "Herramientas",
    icon: <Terminal className="w-5 h-5" />,
    items: [
      { name: "Git", icon: <GitBranch className="w-3.5 h-3.5" /> },
      { name: "GitHub", icon: <Github className="w-3.5 h-3.5" /> },
      {
        name: "CI/CD GitHub Actions",
        icon: <Workflow className="w-3.5 h-3.5" />,
      },
      { name: "VS Code", icon: <Code2 className="w-3.5 h-3.5" /> },
      { name: "Postman", icon: <Send className="w-3.5 h-3.5" /> },
      { name: "NPM", icon: <Package className="w-3.5 h-3.5" /> },
    ],
  },
];

export const sections = defineSections([
  { id: "hero", label: "Inicio", component: HeroSection },
  {
    id: "skills",
    label: "Habilidades",
    component: SkillsSection,
    props: { skills },
  },
  {
    id: "projects",
    label: "Proyectos",
    path: "/projects",
    component: ProjectsSection,
  },
  { id: "about", label: "Sobre Mí", component: AboutSection },
  { id: "contact", label: "Contacto", component: ContactSection },
]);
