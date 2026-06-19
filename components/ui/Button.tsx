"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

// Uses CSS vars so dark/light both work:
// --fg is #fff (dark) / #000 (light), --canvas is inverse
const variantClasses: Record<Variant, string> = {
  primary:
    "bg-foreground text-canvas border border-foreground hover:opacity-90 disabled:opacity-40 disabled:pointer-events-none",
  ghost:
    "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/50 hover:bg-foreground/[0.05] disabled:opacity-40 disabled:pointer-events-none",
  outline:
    "bg-transparent text-foreground border border-foreground/50 hover:bg-foreground hover:text-canvas disabled:opacity-40 disabled:pointer-events-none",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm font-medium px-4 py-2 rounded-lg gap-1.5",
  md: "text-sm font-medium px-5 py-2.5 rounded-lg gap-2",
  lg: "text-[15px] font-semibold px-7 py-3.5 rounded-xl gap-2",
};

const tapTransition = { type: "spring", stiffness: 500, damping: 30 } as const;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center transition-all duration-150 cursor-pointer select-none tracking-tight leading-none whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <motion.div
        whileTap={{ scale: 0.97 }}
        transition={tapTransition}
        className="inline-flex"
      >
        <Link
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      whileTap={{ scale: 0.97 }}
      transition={tapTransition}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
