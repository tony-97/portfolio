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
    <ScrollAnimation id={id}>
      <section className="py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
          <span className="text-blue-400 mr-3">01.</span> My Technical Toolkit
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
          I've focused on building a strong foundation in modern web
          development. Rather than trying to learn every language under the sun,
          I've focused on deeply understanding a core stack.
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
  );
}
