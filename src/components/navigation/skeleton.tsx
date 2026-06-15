import NavLinks, {
  sectionNavigation,
  Sections,
} from "@/components/navigation/nav_links";

export function NavSkeleton({ sections }: { sections: Sections }) {
  return (
    <header className="hidden sticky w-full top-0 z-50 bg-surface-raised/60 backdrop-blur-md border-b border-border h-14">
      <nav>
        <NavLinks
          sections={sections}
          sectionNavigation={sectionNavigation}
        ></NavLinks>
      </nav>
    </header>
  );
}
