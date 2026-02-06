import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true; // Default to dark is safer for initial render
    const stored = window.localStorage.getItem("theme");
    return stored === "dark"; // Only "dark" is explicitly dark, else light
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/10 cursor-pointer"
    >
      <span className="text-[10px] uppercase tracking-wider">
        {isDark ? "Dark" : "Light"}
      </span>
      <span
        className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
          isDark ? "bg-blue-400" : "bg-yellow-400"
        }`}
      />
    </button>
  );
};
