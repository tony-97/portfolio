import { sections } from "@/lib/constants";
import { baseURL } from "@/resources/config";

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseURL}/#website`,
        url: `${baseURL}`,
        name: "Portafolio de Tony Angello Acuña Flores",
        description:
          "Desarrollador de software apasionado por construir aplicaciones web.",
      },
      {
        "@type": "Person",
        "@id": `${baseURL}/#person`,
        name: "Tony Angello Acuña Flores",
        url: `${baseURL}`,
        jobTitle: "Desarrollador de Software",
        sameAs: [
          "https://github.com/tony-97",
          "https://www.linkedin.com/in/tony-acuña-flores-021462400",
        ],
      },
    ],
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
