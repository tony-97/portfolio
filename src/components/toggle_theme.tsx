"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <button
      onClick={toggleTheme}
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
