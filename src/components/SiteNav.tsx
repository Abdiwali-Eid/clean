"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const storedPreference = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return storedPreference ? storedPreference === "dark" : prefersDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleLabel = useMemo(
    () => (isDarkMode ? "Switch to light mode" : "Switch to dark mode"),
    [isDarkMode]
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200/80 dark:border-gray-800">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] px-4 md:px-10 py-3 flex items-center justify-between">
          <Link
            className="flex items-center gap-3 text-text-main dark:text-white"
            href="/"
          >
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">eco</span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">
              CCAS
            </h2>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={
                    isActive
                      ? "text-primary text-sm font-bold border-b-2 border-primary pb-0.5"
                      : "text-text-main dark:text-white hover:text-primary text-sm font-medium transition-colors"
                  }
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              className="hidden sm:flex h-10 px-6 items-center justify-center rounded-lg bg-primary hover:bg-primary-dark transition-colors text-text-main font-bold text-sm tracking-wide shadow-sm"
              href="/donate"
            >
              Donate
            </Link>
            <button
              aria-label={toggleLabel}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-text-main/70 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsDarkMode((current) => !current)}
              type="button"
            >
              <span className="material-symbols-outlined text-base">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
              <span>{isDarkMode ? "Light" : "Dark"}</span>
            </button>
            <button
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              className="md:hidden text-text-main dark:text-white"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800" id="mobile-menu">
          <div className="px-4 pb-4 pt-3 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={
                    isActive
                      ? "block rounded-md px-3 py-2 text-base font-semibold text-primary bg-primary/10"
                      : "block rounded-md px-3 py-2 text-base font-medium text-text-main/80 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              className="block rounded-md bg-primary text-text-main px-3 py-2 text-base font-semibold shadow-sm"
              href="/donate"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <button
              aria-label={toggleLabel}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-text-main/70 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsDarkMode((current) => !current)}
              type="button"
            >
              <span className="material-symbols-outlined text-base">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
              <span>{isDarkMode ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
