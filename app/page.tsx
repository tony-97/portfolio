"use client";

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

import { JSX, useRef } from "react";

import AboutSection from "./about";
import ContactSection from "./contact";
import HeroSection from "./hero";
import Navigation from "./navigation";
import ProjectsSection from "./projects";
import SkillsSection from "./skills";

export default function Home() {
  const projects = [
    {
      title: "CloudCast Weather",
      description: "A real-time weather dashboard",
      goal: "I wanted to build an application that pulls real-time weather data based on user location to practice integrating third-party APIs.",
      stack: ["React", "Tailwind CSS", "OpenWeather API"],
      challenge:
        "The hardest part was handling asynchronous API calls and managing state when the data was loading or if the user denied location access. I solved this by implementing async/await functions and adding a robust error handling/loading state UI.",
      github: "#",
      demo: "#",
    },
    {
      title: "TaskMaster API",
      description: "Secure Task Management Backend",
      goal: "To create a robust backend system where users could securely create, read, update, and delete their daily tasks.",
      stack: ["Node.js", "Express", "MongoDB", "JWT"],
      challenge:
        "I had to figure out how to securely authenticate users. I learned how to hash passwords using bcrypt and issue JSON Web Tokens (JWTs) for secure route access, creating a custom middleware to verify tokens.",
      github: "#",
      demo: "#",
    },
  ];

  const skills: {
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

  const sections = [
    { id: "hero", label: "Home", component: HeroSection },
    {
      id: "skills",
      label: "Skills",
      component: ({ id, ref }: { id: string; ref: React.Ref<HTMLElement> }) => (
        <SkillsSection id={id} ref={ref} skills={skills}></SkillsSection>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      component: ({ id, ref }: { id: string; ref: React.Ref<HTMLElement> }) => (
        <ProjectsSection
          id={id}
          ref={ref}
          projects={projects}
        ></ProjectsSection>
      ),
    },
    { id: "about", label: "About", component: AboutSection },
    { id: "contact", label: "Contact", component: ContactSection },
  ];

  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Navigation sections={sections} sectionRefs={sectionRefs}></Navigation>
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        {sections.map((section) => {
          const Component = section.component;
          return (
            <Component
              key={section.id}
              id={section.id}
              ref={(node) => {
                if (node) {
                  sectionRefs.current.set(section.id, node);
                } else {
                  sectionRefs.current.delete(section.id);
                }
              }}
            ></Component>
          );
        })}
      </main>

      <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-800">
        <p>Built with React & Tailwind CSS. Designed for growth.</p>
      </footer>
    </div>
  );
}
