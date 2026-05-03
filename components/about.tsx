import ScrollAnimation from "./scroll_animation";

export default function AboutSection({ id }: { id: string }) {
  return (
    <ScrollAnimation id={id} className="bg-background">
      <div className="py-20">
        <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wide">
          03
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Beyond the Code
        </h2>
        <div className="max-w-xl space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Software development is mostly about communication, resilience, and
            the willingness to learn — the syntax is the easy part.
          </p>
          <p>
            Being self-taught means I&apos;m comfortable not knowing the answer
            right away. I know how to read documentation, ask the right
            questions, and break intimidating problems into small, solvable
            steps.
          </p>
          <p>
            I&apos;m looking for a team where I can bring enthusiasm, contribute
            meaningfully, and learn from engineers who&apos;ve been doing this
            longer than I have.
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
}
