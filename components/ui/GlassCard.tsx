"use client";

import React from "react";
import { clsx } from "clsx";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "glass" | "white" | "soft" | "dark" | "gradient";
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = "white",
  hoverEffect = true,
  padding = "md",
  className,
  ...props
}) => {
  const baseStyles = "rounded-card overflow-hidden transition-all duration-300 relative";

  const variants = {
    glass: "glass-card",
    white: "bg-white border border-brand-border/80 shadow-floating",
    soft: "bg-brand-soft/30 border border-brand-soft/60 shadow-sm",
    dark: "bg-brand-dark text-white border border-white/10 shadow-xl",
    gradient: "bg-gradient-to-br from-white via-slate-50 to-brand-soft/20 border border-brand-border shadow-floating",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-7",
    lg: "p-9",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        baseStyles,
        variants[variant],
        paddings[padding],
        hoverEffect && "hover:shadow-floating-hover",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
