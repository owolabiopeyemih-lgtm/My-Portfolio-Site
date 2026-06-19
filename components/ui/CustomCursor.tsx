"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      el.style.opacity = "1";
      const target = document.elementFromPoint(e.clientX, e.clientY);
      el.dataset.hovering = target?.closest("a, button, [data-cursor-hover]") ? "true" : "false";
    };
    const down = () => { el.dataset.clicking = "true"; };
    const up = () => { el.dataset.clicking = "false"; };
    const leave = () => { el.style.opacity = "0"; };
    const enter = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      el.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-shadow"
      style={{ opacity: 0 }}
    />
  );
}
