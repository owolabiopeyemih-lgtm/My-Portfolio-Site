"use client";

import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        el.textContent = prefix + Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, prefix, duration]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
