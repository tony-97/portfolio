"use client";

import React, { createContext, useContext, useState } from "react";

interface LandingPageContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  navBarHeight: number;
  setNavBarHeight: (navBarHeight: number) => void;
}

const LandingPageContext = createContext<LandingPageContextType | undefined>(
  undefined,
);

export function LandingPageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("");
  const [navBarHeight, setNavBarHeight] = useState(0);
  return (
    <LandingPageContext.Provider
      value={{ activeSection, setActiveSection, navBarHeight, setNavBarHeight }}
    >
      {children}
    </LandingPageContext.Provider>
  );
}

export function useLandingPage() {
  const context = useContext(LandingPageContext);
  if (context === undefined) {
    throw new Error("useLandingPage must be used whitin a UserProvider");
  }
  return context;
}
