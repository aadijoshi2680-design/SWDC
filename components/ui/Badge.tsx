import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "pink" | "orange" | "blue" | "green" | "dark" | "lime" | "soft" | "success" | "warning" | "error" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "yellow",
  size = "md",
  dot = false,
  className,
}) => {
  const baseStyles = "inline-flex items-center font-extrabold rounded-full tracking-wide backdrop-blur-md transition-all";

  const variants = {
    yellow: "bg-genz-yellow/85 text-genz-dark border border-white/60 shadow-md shadow-genz-yellow/20",
    pink: "bg-genz-pink/85 text-genz-dark border border-white/60 shadow-md shadow-genz-pink/20",
    orange: "bg-genz-orange/90 text-white border border-white/40 shadow-md shadow-genz-orange/25",
    blue: "bg-genz-blue/90 text-white border border-white/40 shadow-md shadow-genz-blue/25",
    green: "bg-genz-green/90 text-white border border-white/40 shadow-md shadow-genz-green/25",
    lime: "bg-genz-yellow/85 text-genz-dark border border-white/60 shadow-md shadow-genz-yellow/20",
    dark: "bg-genz-dark/90 text-white border border-white/20 shadow-md shadow-black/20",
    soft: "bg-genz-pink/20 text-genz-dark border border-genz-pink/40 shadow-sm",
    success: "bg-genz-green/15 text-genz-green border border-genz-green/30 shadow-none",
    warning: "bg-genz-yellow/20 text-yellow-900 border border-genz-yellow/40 shadow-none",
    error: "bg-rose-100/80 text-rose-800 border border-rose-300/60 shadow-none",
    outline: "bg-white/40 text-genz-dark border border-slate-300 shadow-none",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3.5 py-1 gap-2",
  };

  const dotColors = {
    yellow: "bg-genz-dark",
    pink: "bg-genz-dark",
    orange: "bg-white",
    blue: "bg-white",
    green: "bg-white",
    lime: "bg-genz-dark",
    dark: "bg-genz-yellow",
    soft: "bg-genz-orange",
    success: "bg-genz-green",
    warning: "bg-genz-yellow",
    error: "bg-rose-500",
    outline: "bg-genz-blue",
  };

  return (
    <span className={clsx(baseStyles, variants[variant], sizes[size], className)}>
      {dot && (
        <span
          className={clsx(
            "w-1.5 h-1.5 rounded-full shrink-0 animate-pulse",
            dotColors[variant]
          )}
        />
      )}
      {children}
    </span>
  );
};
