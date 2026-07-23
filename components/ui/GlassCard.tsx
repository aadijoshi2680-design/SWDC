"use client";

import React from "react";
import { clsx } from "clsx";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "glass" | "white" | "soft" | "dark" | "gradient" | "retro";
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
  const baseStyles = "rounded-3xl overflow-hidden transition-all duration-300 relative";

  const variants = {
    glass: "glass-card",
    white: "bg-white/75 backdrop-blur-xl border border-white/80 shadow-xl shadow-slate-900/5 hover:bg-white/90 hover:shadow-2xl hover:shadow-slate-900/10",
    soft: "bg-genz-cream/80 backdrop-blur-xl border border-genz-yellow/30 shadow-xl shadow-genz-yellow/10 hover:bg-genz-cream/95 hover:shadow-2xl hover:shadow-genz-yellow/20",
    dark: "bg-genz-dark/85 backdrop-blur-2xl text-white border border-white/12 shadow-2xl shadow-black/30 hover:bg-genz-dark/95",
    gradient: "bg-gradient-to-br from-white/90 via-white/70 to-genz-pink/20 backdrop-blur-2xl border border-white/80 shadow-xl shadow-genz-pink/15 hover:shadow-2xl hover:shadow-genz-pink/25",
    retro: "bg-white/80 backdrop-blur-xl border border-genz-pink/30 shadow-xl shadow-genz-pink/15 hover:bg-white/95 hover:shadow-2xl hover:shadow-genz-pink/25",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-7",
    lg: "p-9",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, scale: 1.015 } : undefined}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        baseStyles,
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
