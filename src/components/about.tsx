import ScrollAnimation from "./scroll_animation";

export default function AboutSection({ id }: { id: string }) {
  return (
    <ScrollAnimation id={id} className="bg-background">
      <div className="py-20">
        <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wide">
          03
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Más Allá del Código
        </h2>
        <div className="max-w-xl space-y-5 text-muted-foreground leading-relaxed">
          <p>
            El desarrollo de software se trata principalmente de comunicación,
            resiliencia y la disposición para aprender — la sintaxis es la
            parte fácil.
          </p>
          <p>
            Ser autodidacta significa que me siento cómodo sin saber la
            respuesta de inmediato. Sé cómo leer documentación, hacer las
            preguntas correctas y dividir problemas intimidantes en pasos
            pequeños y resolubles.
          </p>
          <p>
            Busco un equipo donde pueda aportar entusiasmo, contribuir de
            manera significativa y aprender de ingenieros que llevan más
            tiempo en esto que yo.
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
}
