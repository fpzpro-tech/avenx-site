"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { memo, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const navLinks = [
  { href: "#decouvrir", label: "Découvrir" },
  { href: "#spots", label: "Spots" },
  { href: "#coach", label: "Coach IA" },
  { href: "#communaute", label: "Communauté" },
] as const;

function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300"
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(3, 7, 18, 0.88)" : "rgba(3, 7, 18, 0.35)",
        borderColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group inline-flex items-center" aria-label="AVENX — Accueil">
          <BrandLogo priority />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-avenx-muted transition hover:bg-white/5 hover:text-avenx-snow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#telecharger"
          className="hidden rounded-full bg-avenx-primary px-5 py-2.5 text-sm font-semibold text-avenx-bg transition hover:bg-avenx-secondary md:inline-flex"
        >
          Télécharger
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-avenx-snow md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/5 px-4 py-4 md:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-avenx-snow hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#telecharger"
                className="mt-2 block rounded-full bg-avenx-primary px-4 py-3 text-center font-semibold text-avenx-bg"
                onClick={() => setMenuOpen(false)}
              >
                Télécharger
              </a>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
}

export const Navbar = memo(NavbarComponent);
