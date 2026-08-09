"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import portfolio from "@/data/portfolio.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { personal, navLinks } = portfolio;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-shadow ${
        scrolled ? "border-border shadow-[0_8px_30px_-20px_rgba(0,0,0,0.6)]" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border bg-surface"
        >
          <Image src="/ravishankar.png" alt={personal.name} fill sizes="36px" className="object-cover" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative pb-1 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-[1px] h-[1.5px] origin-center rounded-full bg-accent transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`h-1 w-1 rounded-full bg-accent transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-accent px-5 py-2 text-sm font-medium text-background"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
