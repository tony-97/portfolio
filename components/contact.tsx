import { Github, Linkedin, Mail } from "lucide-react";
import ScrollAnimation from "./scroll_animation";

export default function ContactSection({ id }: { id: string }) {
  return (
    <ScrollAnimation id={id}>
      <div className="py-20 text-center">
        <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wide">
          04
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
          I&apos;m currently looking for my first full-time role. If you&apos;re
          looking for someone eager to learn and ready to contribute, I&apos;d
          love to hear from you.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90"
        >
          <Mail className="w-4 h-4" />
          Say hello
        </a>

        <div className="flex justify-center gap-5 mt-10">
          <a
            href="#"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
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
