"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    className: "absolute -top-48 -right-32 w-[700px] h-[700px] rounded-full",
    colorVar: "var(--orb-a)",
    center: "40% 40%",
    animate: { scale: [1, 1.06, 0.97, 1], x: [0, 30, -15, 0], y: [0, -20, 10, 0] },
    duration: 18, delay: 0,
  },
  {
    className: "absolute -bottom-72 -left-48 w-[600px] h-[600px] rounded-full",
    colorVar: "var(--orb-b)",
    center: "60% 60%",
    animate: { scale: [1, 1.1, 0.95, 1], x: [0, -25, 20, 0], y: [0, 15, -25, 0] },
    duration: 22, delay: 3,
  },
  {
    className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full",
    colorVar: "var(--orb-c)",
    center: "50% 50%",
    animate: { scale: [1, 1.15, 0.92, 1], x: [0, 40, -30, 0], y: [0, -30, 20, 0] },
    duration: 26, delay: 6,
  },
];

export function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none grain">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={orb.className}
          style={{
            background: `radial-gradient(circle at ${orb.center}, ${orb.colorVar} 0%, transparent 65%)`,
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `radial-gradient(circle, var(--dot-grid) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Drifting scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, var(--scan-line), transparent)` }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
