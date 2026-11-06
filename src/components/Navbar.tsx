"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  ["About", "about"], ["Stack", "stack"], ["Experience", "experience"],
  ["Projects", "projects"], ["GitHub", "github"], ["Resume", "resume"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const themeButton = useRef<HTMLButtonElement>(null);

  const applyTheme = useCallback((dark: boolean) => {
    if (dark) document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
    themeButton.current?.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeButton.current?.setAttribute("title", dark ? "Switch to light theme" : "Switch to dark theme");
    themeButton.current?.setAttribute("aria-pressed", String(dark));
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    applyTheme(saved === "dark");
  }, [applyTheme]);

  function toggleTheme() {
    const nextDark = document.documentElement.dataset.theme !== "dark";
    applyTheme(nextDark);
    window.localStorage.setItem("portfolio-theme", nextDark ? "dark" : "light");
  }

  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Adapa SriVatsav, home">AS<span>.</span></a>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={14} /></a>
      </nav>
      <button ref={themeButton} className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Switch to dark theme" aria-pressed={false} title="Switch to dark theme">
        <Moon className="theme-moon" size={16} strokeWidth={1.7} />
        <Sun className="theme-sun" size={16} strokeWidth={1.7} />
      </button>
      <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>
    </header>
  );
}
