"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const nextTheme =
    theme === "system" ? "light" : theme === "light" ? "dark" : "system";

  return (
    <Button size="icon" onClick={() => setTheme(nextTheme)}>
      {theme === "light" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:hidden" />
      ) : (
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all hidden dark:block dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  );
}
