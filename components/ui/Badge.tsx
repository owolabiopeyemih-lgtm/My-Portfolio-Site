import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "gold";
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-card text-foreground border border-line",
        className
      )}
    >
      {children}
    </span>
  );
}
