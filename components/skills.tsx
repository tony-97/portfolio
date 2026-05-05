import ScrollAnimation from "./scroll_animation";

import { JSX } from "react";

export default function SkillsSection({
  skills,
  id,
}: {
  skills: {
    category: string;
    icon: JSX.Element;
    items: {
      name: string;
      icon: JSX.Element;
    }[];
  }[];
  id: string;
}) {
  return (
    /* White / dark stone-950 — clean contrast after the hero gradient */
    <ScrollAnimation id={id} className="bg-background">
      <div className="py-20">
        <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wide">
          01
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Herramientas Técnicas
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl leading-relaxed">
          Me he enfocado en construir una base sólida en lugar de perseguir
          cada nuevo framework. Esto es con lo que trabajo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-surface-raised rounded-lg border border-border text-muted-foreground">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {skill.category}
                </h3>
              </div>

              {/* Skill Items */}
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface rounded-full text-sm text-muted-foreground border border-border hover:border-border-subtle hover:text-foreground transition-colors cursor-default"
                  >
                    <span className="text-muted">{item.icon}</span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
}
