import NavLinks, {
  sectionNavigation,
  Sections,
} from "@/components/navigation/nav_links";

export function NavSkeleton({ sections }: { sections: Sections }) {
  return (
    <header
      className="sticky w-full top-0 z-50 bg-surface-raised/60 backdrop-blur-md border-b border-border"
      style={{ opacity: 0 }}
    >
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLinks
          sections={sections}
          sectionNavigation={sectionNavigation}
          className="flex items-center gap-8 text-sm"
        ></NavLinks>
      </nav>
    </header>
  );
}
