"use client";
import dynamic from "next/dynamic";
import { Sections } from "./nav_links";
import { NavSkeleton } from "./skeleton";

export default function Navigation({ sections }: { sections: Sections }) {
  const LazyNavBar = dynamic(
    () => import("@/src/components/navigation/nav_bar"),
    {
      ssr: false,
      loading: () => <NavSkeleton sections={sections}></NavSkeleton>,
    },
  );
  return <LazyNavBar sections={sections}></LazyNavBar>;
}
