"use client";
import { navBarLoader } from "@/src/lib/lazy_loaders";
import dynamic from "next/dynamic";
import { Sections } from "./nav_links";
import { NavSkeleton } from "./skeleton";

export default function Navigation({ sections }: { sections: Sections }) {
  const LazyNavBar = dynamic(navBarLoader, {
    ssr: false,
    loading: () => <NavSkeleton sections={sections}></NavSkeleton>,
  });
  return <LazyNavBar sections={sections}></LazyNavBar>;
}
