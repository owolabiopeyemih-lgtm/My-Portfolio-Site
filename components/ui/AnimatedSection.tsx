"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
}

// ease-out-expo — fast start, long gentle tail
const EASE = [0.16, 1, 0.3, 1] as const;

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const initialY = direction === "up" ? 20 : 0;
  const initialX = direction === "left" ? -20 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
