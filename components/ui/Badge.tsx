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
  const baseStyles = "inline-flex items-center font-bold rounded-full tracking-wide border border-genz-dark/80 shadow-[2px_2px_0px_#121318]";

  const variants = {
    yellow: "bg-genz-yellow text-genz-dark",
    pink: "bg-genz-pink text-genz-dark",
    orange: "bg-genz-orange text-white",
    blue: "bg-genz-blue text-white",
    green: "bg-genz-green text-white",
    lime: "bg-genz-yellow text-genz-dark",
    dark: "bg-genz-dark text-white border-white/20 shadow-[2px_2px_0px_#FE6622]",
    soft: "bg-genz-pink/20 text-genz-dark border-genz-pink/40",
    success: "bg-genz-green/15 text-genz-green border-genz-green/40 shadow-none",
    warning: "bg-genz-yellow/20 text-yellow-900 border-genz-yellow/50 shadow-none",
    error: "bg-rose-100 text-rose-800 border-rose-300 shadow-none",
    outline: "bg-transparent text-genz-dark border-genz-dark shadow-none",
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
