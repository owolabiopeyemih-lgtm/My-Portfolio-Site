"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const wordVariants = {
  hidden: { y: 40, opacity: 0, filter: "blur(6px)" },
  visible: {
    y: 0, opacity: 1, filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -90]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="flex flex-col items-center">
      {children}
    </motion.div>
  );
}

export function HeroName() {
  const words = ["Opeyemi", "Owolabi"];
  return (
    <motion.h1
      className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-none mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span variants={wordVariants} className="inline-block">{w}</motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

export function HeroBadge() {
  return (
    <motion.span
      className="inline-flex items-center gap-2 text-xs text-muted border border-line rounded-full px-4 py-1.5 mb-8 bg-card"
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <motion.span
        className="w-1.5 h-1.5 rounded-full bg-white"
        animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      Open to product design roles
    </motion.span>
  );
}

export function HeroTagline() {
  return (
    <motion.p
      className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed mb-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.42, ease: EASE }}
    >
      Designer transitioning into product design — bringing a background in{" "}
      <motion.span
        className="text-foreground font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
      >
        creative direction and team leadership
      </motion.span>{" "}
      to craft purposeful digital experiences.
    </motion.p>
  );
}

export function HeroCTAs({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function HeroScrollHint() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.1 }}
    >
      <span className="text-xs text-subtle tracking-widest uppercase">Scroll</span>
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-subtle to-transparent"
        animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
