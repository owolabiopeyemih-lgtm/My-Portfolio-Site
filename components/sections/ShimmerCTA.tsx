"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ShimmerCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const gradientX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const gradientY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl border border-line overflow-hidden p-12 md:p-16 text-center"
    >
      <div className="absolute inset-0 bg-card pointer-events-none" />

      {/* Mouse spotlight */}
      <motion.div
        className="absolute -inset-px rounded-3xl pointer-events-none"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([gx, gy]) =>
              `radial-gradient(500px circle at ${gx} ${gy}, var(--shimmer-color), transparent 60%)`
          ),
        }}
      />

      {/* Sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%", skewX: -12 }}
        animate={{ x: "400%" }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
        style={{
          background: `linear-gradient(90deg, transparent, var(--shimmer-color), transparent)`,
          width: "60%",
        }}
      />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Let&apos;s build something great
        </h2>
        <p className="text-muted mb-8 max-w-lg mx-auto">
          Whether you&apos;re building a product from scratch or evolving an
          existing one, I&apos;d love to hear about it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" size="lg">
            Start a conversation <ArrowRight size={16} />
          </Button>
          <Button href="/work" variant="ghost" size="lg">
            View case studies
          </Button>
        </div>
      </div>
    </div>
  );
}
