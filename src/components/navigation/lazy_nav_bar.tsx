"use client";
import dynamic from "next/dynamic";

export const Navigation = dynamic(
  () => import("@/src/components/navigation/nav_bar"),
  {
    ssr: false,
  },
);
