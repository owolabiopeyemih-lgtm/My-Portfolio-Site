"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/mdx";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
  compact?: boolean;
  className?: string;
}

const SPRING = { type: "spring", stiffness: 350, damping: 28 } as const;
const TILT_SPRING = { stiffness: 400, damping: 30 } as const;

export function CaseStudyCard({ caseStudy, featured, compact, className }: CaseStudyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), TILT_SPRING);
  const rotateY = useSpring(useMotionValue(0), TILT_SPRING);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const liftY = useSpring(useMotionValue(0), SPRING);
  const shadow = useMotionValue("0 0 0 0 rgba(0,0,0,0)");

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    rotateX.set((ny - 0.5) * -10);
    rotateY.set((nx - 0.5) * 10);
    glowX.set(nx * 100);
    glowY.set(ny * 100);
    liftY.set(-6);
    shadow.set("0 24px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)");
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
    liftY.set(0);
    shadow.set("0 0 0 0 rgba(0,0,0,0)");
  }

  return (
    <div
      ref={cardRef}
      className={cn("group relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      {/* Hover border highlight */}
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08), transparent 60%)", opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      />

      <motion.div
        style={{ rotateX, rotateY, y: liftY, boxShadow: shadow, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl"
      >
        <Link
          href={`/work/${caseStudy.slug}`}
          className="relative flex flex-col bg-card border border-line rounded-2xl overflow-hidden"
        >
          {/* Cover */}
          <div className={cn(
            "relative w-full overflow-hidden bg-surface flex items-center justify-center",
            featured ? "h-60" : compact ? "h-36" : "h-44"
          )}>
            {caseStudy.coverImage ? (
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.title}
                fill
                className="object-cover object-top"
              />
            ) : null}

            {/* Mouse-tracking spotlight */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(280px circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.04), transparent 65%)` }}
            />

            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ x: "-100%", skewX: -12, opacity: 0 }}
              whileHover={{ x: "220%", opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)", width: "60%" }}
            />

            {!caseStudy.coverImage && (
              <motion.div
                className="flex flex-col items-center justify-center gap-2 px-6 text-center"
                style={{ transform: "translateZ(8px)" }}
              >
                <motion.span
                  className="font-semibold text-foreground/60 group-hover:text-foreground/90 transition-colors duration-300 leading-tight"
                  style={{
                    fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
                    letterSpacing: "-0.04em",
                    fontStyle: "italic",
                  }}
                >
                  {caseStudy.title}
                </motion.span>
                <motion.div
                  className="h-px bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-300"
                  style={{ width: "32px" }}
                />
              </motion.div>
            )}
          </div>

          {/* Content */}
          <div className={cn("flex flex-col gap-2", compact ? "p-3" : "gap-2 p-5")}>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.tags.slice(0, compact ? 2 : 3).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <div>
              <motion.h3
                className={cn("font-semibold leading-snug text-foreground", compact ? "text-sm" : "text-base")}
                whileHover={{ color: "rgba(255,255,255,0.7)" }}
                transition={{ duration: 0.15 }}
              >
                {caseStudy.title}
              </motion.h3>
              <p className="text-muted text-sm mt-1 line-clamp-2">{caseStudy.description}</p>
            </div>

            <div className={cn("flex items-center justify-between mt-auto", compact ? "pt-1" : "pt-2")}>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span>{caseStudy.company}</span>
                <span>·</span>
                <span>{caseStudy.year}</span>
                <span>·</span>
                <span>{caseStudy.readingTime}</span>
              </div>
              <motion.div
                whileHover={{ x: 3, y: -3, color: "rgba(255,255,255,1)" }}
                transition={SPRING}
                style={{ color: "rgba(102,102,102,1)" }}
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
