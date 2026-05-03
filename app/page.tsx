import { sections } from "@/lib/constants";

export default async function Home() {
  return (
    <main>
      {sections.map((section) => {
        const Component = section.component as React.ElementType;
        return (
          <Component
            key={section.id}
            id={section.id}
            {...(section.props ?? {})}
          ></Component>
        );
      })}
    </main>
  );
}
