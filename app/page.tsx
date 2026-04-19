"use client";
import {
  Binary,
  Blocks,
  Box,
  Braces,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileCode,
  FileCode2,
  GitBranch,
  Github,
  Layers,
  Layout,
  Leaf,
  Linkedin,
  Mail,
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

import Navigation from "./navigation";
import ScrollAnimation from "./scroll_animation";

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
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <Navigation sections={sections} sectionRefs={sectionRefs}></Navigation>

        {/* Skills Section */}
        <ScrollAnimation>
          <section id="skills" className="py-20 border-t border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
              <span className="text-blue-400 mr-3">01.</span> My Technical
              Toolkit
            </h2>
            <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
              I've focused on building a strong foundation in modern web
              development. Rather than trying to learn every language under the
              sun, I've focused on deeply understanding a core stack.
            </p>

            <div className="flex flex-col max-w-4xl space-y-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col group border-b border-slate-800/60 pb-5 last:border-0 last:pb-0"
                >
                  {/* Category Label (Now on top) */}
                  <div className="flex items-center space-x-4 mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2.5 bg-slate-800/40 rounded-xl group-hover:bg-slate-800/80 border border-slate-800 group-hover:border-slate-700 transition-all">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {skill.category}
                    </h3>
                  </div>

                  {/* Open Skill Pills with Icons */}
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="group/pill flex items-center px-4 py-2 bg-slate-900/80 border border-slate-700/60 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:border-blue-500/60 hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(59,130,246,0.15)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        <span className="mr-2.5 text-slate-400 group-hover/pill:text-blue-400 transition-colors duration-300">
                          {item.icon}
                        </span>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Projects Section */}
        <ScrollAnimation>
          <section id="projects" className="py-20 border-t border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
              <span className="text-blue-400 mr-3">02.</span> What I've Been
              Building
            </h2>
            <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
              To me, the best way to learn is by doing. Here are a few recent
              projects I've developed to put my skills to the test.
            </p>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-500 transition-colors duration-300"
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          className="text-slate-400 hover:text-white transition-colors"
                          title="GitHub Repo"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                        <a
                          href={project.demo}
                          className="text-slate-400 hover:text-white transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-1 text-sm uppercase tracking-wider">
                          The Goal
                        </h4>
                        <p className="text-slate-400 leading-relaxed text-sm">
                          {project.goal}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1 text-sm uppercase tracking-wider">
                          The Challenge & Solution
                        </h4>
                        <p className="text-slate-400 leading-relaxed text-sm">
                          {project.challenge}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-emerald-400 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* About Section */}
        <ScrollAnimation>
          <section id="about" className="py-20 border-t border-slate-800">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="text-blue-400 mr-3">03.</span> Beyond the Code
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                <p>
                  While writing syntax is important, I've learned that software
                  development is mostly about communication, resilience, and the
                  ability to learn.
                </p>
                <p>
                  Because I am self-taught, I am incredibly comfortable not
                  knowing the answer right away. I know how to read
                  documentation, how to write effective queries, and how to
                  break a massive, intimidating problem down into small,
                  solvable steps.
                </p>
                <p>
                  I am looking for a team where I can bring my enthusiasm,
                  contribute to a codebase, and absorb knowledge like a sponge
                  from senior engineers.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation>
          <section
            id="contact"
            className="py-20 border-t border-slate-800 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Connect!
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
              I am currently looking for my first full-time role as a Junior
              Developer. If you're looking for someone who is eager to learn,
              ready to tackle bugs, and excited to contribute to a great
              product, I would love to chat.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Say Hello
            </a>

            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="#"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Github className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-800">
        <p>Built with React & Tailwind CSS. Designed for growth.</p>
      </footer>
    </div>
  );
}
