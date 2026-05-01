import { Github, Linkedin, Mail } from "lucide-react";
import ScrollAnimation from "./scroll_animation";

export default function ContactSection({ id }: { id: string }) {
  return (
    <ScrollAnimation id={id}>
      <div className="py-20 border-t border-slate-800 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect!</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
          I am currently looking for my first full-time role as a Junior
          Developer. If you're looking for someone who is eager to learn, ready
          to tackle bugs, and excited to contribute to a great product, I would
          love to chat.
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
      </div>
    </ScrollAnimation>
  );
}
