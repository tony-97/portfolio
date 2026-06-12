import { Github, Linkedin, Mail } from "@/lib/icons";
import { person } from "../resources/content";
import ScrollAnimation from "./scroll_animation";

export default function ContactSection({ id }: { id: string }) {
  return (
    <ScrollAnimation id={id} className="bg-surface">
      <div className="py-20 text-center">
        <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wide">
          04
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Conectemos
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
          Actualmente estoy buscando mi primer empleo a tiempo completo. Si
          buscas a alguien con ganas de aprender y listo para contribuir, me
          encantaría saber de ti.
        </p>
        <a
          href={`mailto:${person.email}`}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90"
        >
          <Mail className="w-4 h-4" />
          Escríbeme
        </a>

        <div className="flex justify-center gap-5 mt-10">
          <a
            href={`${person.socials.github}`}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`${person.socials.linkedin}`}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
}
