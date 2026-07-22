import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "lime" | "dark" | "soft" | "success" | "warning" | "error" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  size = "md",
  dot = false,
  className,
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full tracking-wide";

  const variants = {
    blue: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
    lime: "bg-brand-lime text-brand-dark font-semibold border border-brand-lime-dark/30",
    dark: "bg-brand-dark text-white",
    soft: "bg-brand-soft text-brand-dark font-medium",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    error: "bg-rose-50 text-rose-700 border border-rose-200",
    outline: "bg-transparent text-slate-600 border border-slate-300",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3.5 py-1 gap-2",
  };

  const dotColors = {
    blue: "bg-brand-blue",
    lime: "bg-brand-dark",
    dark: "bg-brand-lime",
    soft: "bg-brand-blue",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    error: "bg-rose-500",
    outline: "bg-slate-400",
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
