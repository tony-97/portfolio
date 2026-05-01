import { LandingPageProvider } from "@/context/landing_page_context";
import { sections } from "@/lib/constants";
import Navigation from "@/components/navigation";

export default async function Home() {
  return (
    <LandingPageProvider>
      <Navigation
        sections={sections.map(({ component, ...rest }) => rest)}
      ></Navigation>
      <main className="max-w-5xl mx-auto px-6">
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
    </LandingPageProvider>
  );
}
