"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-canvas/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-foreground font-semibold tracking-tight text-sm hover:text-accent transition-colors"
        >
          Opeyemi<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-canvas border-b border-line px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-base transition-colors",
                    pathname === link.href
                      ? "text-foreground font-medium"
                      : "text-muted"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
