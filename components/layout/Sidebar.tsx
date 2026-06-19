"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/contact", label: "Contact" },
];

const BehanceSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H18.1c.13 2.002 1.35 2.87 2.727 2.87 1.245 0 2.037-.682 2.316-1.84h.583zm-5.069-7c-1.349 0-2.365.977-2.507 2.56h4.96c-.135-1.52-1.018-2.56-2.453-2.56zM8 11.586c.995 0 1.868-.346 1.868-1.586 0-1.24-.873-1.586-1.868-1.586H5v3.172H8zm.217 3.414H5v3.5h3.217c1.275 0 2.25-.489 2.25-1.75s-.975-1.75-2.25-1.75zM5 21H1V4h7.673c2.886 0 4.785 1.418 4.785 4.008C13.458 9.5 12.68 10.75 11.54 11.4c1.483.5 2.46 1.75 2.46 3.4 0 2.977-2.295 4.2-5 4.2H5z" />
  </svg>
);

const LinkedInSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/opeyemi-owolabi-a9b059322/",
    icon: <LinkedInSVG />,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/owolabiopeyemih",
    icon: <X size={15} />,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/opeyemiowolabi3",
    icon: <BehanceSVG />,
  },
  {
    label: "Email",
    href: "mailto:owolabiopeyemih@gmail.com",
    icon: <Mail size={15} />,
  },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-3 py-2 text-sm transition-colors duration-200",
        active ? "text-foreground" : "text-muted hover:text-foreground"
      )}
    >
      <motion.span
        className="absolute left-0 w-px bg-foreground rounded-full"
        animate={{ height: active ? 20 : 0, opacity: active ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <span className={cn("pl-4 transition-transform duration-200", !active && "group-hover:translate-x-0.5")}>
        {label}
      </span>
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 h-screen w-52 flex-col justify-between py-8 px-6 z-40 hidden md:flex"
      style={{
        background: "var(--sidebar-bg)",
        backdropFilter: "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        borderRight: "1px solid var(--sidebar-border)",
      }}
    >
      <div>
        {/* Logo + theme toggle */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="text-foreground font-semibold text-sm tracking-tight hover:text-muted transition-colors"
          >
            Opeyemi<span className="text-muted">.</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Availability pill */}
        <div
          className="flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full w-fit"
          style={{
            border: "1px solid var(--sidebar-border)",
            background: "var(--shimmer-color)",
          }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0"
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.75, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[11px] text-muted tracking-wide leading-none">
            Open to opportunities
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
      </div>

      {/* Social links — bottom of sidebar */}
      <div>
        <div className="h-px bg-line mb-4" />
        <p className="text-[10px] text-muted tracking-widest uppercase mb-3">Find me on</p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              title={s.label}
              className="text-muted hover:text-foreground transition-colors duration-200"
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>

    </aside>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-5 h-14"
        style={{
          background: "var(--sidebar-bg)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          borderBottom: "1px solid var(--sidebar-border)",
        }}
      >
        <Link href="/" className="text-foreground font-semibold text-sm tracking-tight">
          Opeyemi<span className="text-muted">.</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-muted hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-canvas/70 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-14 left-0 bottom-0 w-64 z-50 md:hidden flex flex-col justify-between py-8 px-6"
              style={{
                background: "var(--sidebar-bg)",
                backdropFilter: "blur(32px) saturate(160%)",
                WebkitBackdropFilter: "blur(32px) saturate(160%)",
                borderRight: "1px solid var(--sidebar-border)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} onClick={() => setOpen(false)} />
                ))}
              </nav>

              <div>
                <div className="h-px bg-line mb-4" />
                <div className="flex items-center gap-2 text-xs text-muted mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                  Open to product design roles and freelance projects
                </div>
                <div className="flex items-center gap-4">
                  {socials.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      title={s.label}
                      className="text-muted hover:text-foreground transition-colors duration-200"
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
