import ScrollAnimation from "./scroll_animation";

export default function AboutSection({ id }: { id: string }) {
  return (
    <ScrollAnimation id={id}>
      <div className="py-20 border-t border-slate-800">
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
              Because I am self-taught, I am incredibly comfortable not knowing
              the answer right away. I know how to read documentation, how to
              write effective queries, and how to break a massive, intimidating
              problem down into small, solvable steps.
            </p>
            <p>
              I am looking for a team where I can bring my enthusiasm,
              contribute to a codebase, and absorb knowledge like a sponge from
              senior engineers.
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
