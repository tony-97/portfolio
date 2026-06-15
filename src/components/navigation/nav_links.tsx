import { SectionBase } from "@/lib/constants";
import Link from "next/link";
import { ReactNode } from "react";

export type Sections = SectionBase[];
type NavItemInfo = { href: string; isActive: boolean };

export function sectionNavigation(
  section: Sections[number],
  pathName: string = "",
  activeSection: string = "",
): NavItemInfo {
  const sectionPath = section.path || "/";
  let isActive = false;
  if (sectionPath !== "/" && pathName !== "/") {
    isActive = pathName.startsWith(sectionPath);
  } else {
    isActive = pathName === "/" && activeSection === section.id;
  }
  let href = "";
  if (pathName === "/" && sectionPath === "/") {
    href = `#${section.id}`;
  } else if (sectionPath === "/") {
    href = `/#${section.id}`;
  } else {
    href = sectionPath;
  }
  return { isActive, href };
}

export default function NavLinks({
  sections,
  className,
  children,
  sectionNavigation,
}: {
  sections: Sections;
  className?: string;
  children?: ReactNode;
  sectionNavigation: (section: (typeof sections)[number]) => NavItemInfo;
}) {
  return (
    <ul className={className}>
      {sections.map((section) => {
        const { href, isActive } = sectionNavigation(section);
        return (
          <li key={section.id} className="relative">
            <Link
              href={href}
              className={`py-1.5 transition-colors ${
                isActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {section.label}
            </Link>
            {isActive && children}
          </li>
        );
      })}
    </ul>
  );
}
