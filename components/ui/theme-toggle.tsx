"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

type Theme = "dark" | "light";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function applyTheme(next: Theme) {
  if (next === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  try {
    localStorage.setItem("theme", next);
  } catch {
    // localStorage unavailable (private mode, disabled storage) - theme still applies for this session
  }

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", next === "light" ? "#fafafa" : "#08080b");

  listeners.forEach((listener) => listener());
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => applyTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={
        className ??
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-dim transition-colors hover:border-crimson-400/60 hover:text-ink"
      }
    >
      {theme === "light" ? <Moon size={16} weight="bold" /> : <Sun size={16} weight="bold" />}
    </button>
  );
}
