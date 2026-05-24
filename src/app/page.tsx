import JSONLd from "@/components/jsonld";
import { sections } from "@/lib/constants";
import buildPageMetadata from "@/lib/seo";
import { baseURL } from "@/resources/config";
import { home, person, siteName } from "@/resources/content";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  path: baseURL,
  fullTitle: home.fullTitle,
  description: home.description,
  openGraph: {
    type: "profile",
    firstName: person.firstName,
    lastName: person.lastName,
  },
});

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseURL}/#website`,
        url: `${baseURL}`,
        name: siteName,
        description: person.description,
      },
      {
        "@type": "Person",
        "@id": `${baseURL}/#person`,
        name: person.name,
        url: `${baseURL}`,
        jobTitle: person.role,
        sameAs: Object.values(person.socials),
      },
    ],
  };
  return (
    <main>
      <JSONLd json={jsonLd}></JSONLd>
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
