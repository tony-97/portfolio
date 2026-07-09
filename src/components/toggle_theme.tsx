"use client";

import { Moon, Sun } from "@/lib/icons";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  const toggleThemeTransition = () => {
    if (!document.startViewTransition) {
      toggleTheme();
    } else {
      document.startViewTransition(toggleTheme);
    }
  };
  return (
    <button
      onClick={toggleThemeTransition}
      aria-label="Cambiar modo oscuro"
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-raised transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}
