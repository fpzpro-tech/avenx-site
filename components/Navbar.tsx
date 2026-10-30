import { memo } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const navLinks = [
  { href: "#spots", label: "Spots" },
  { href: "#communaute", label: "Communauté" },
  { href: "#programmes", label: "Programmes" },
  { href: "#faq", label: "Questions" },
] as const;

function NavbarComponent() {
  return (
    <header className="nav">
      <div className="wrap">
        <BrandLogo priority />
        <nav aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn small" href="#beta">
          Rejoindre la bêta
        </a>
      </div>
    </header>
  );
}

export const Navbar = memo(NavbarComponent);
