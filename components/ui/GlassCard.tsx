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
  const baseStyles = "rounded-card overflow-hidden transition-all duration-300 relative border-2 border-genz-dark";

  const variants = {
    glass: "glass-card",
    white: "bg-white border-2 border-genz-dark shadow-retro-hard",
    soft: "bg-genz-cream border-2 border-genz-dark shadow-retro-hard-yellow",
    dark: "bg-genz-dark text-white border-2 border-genz-dark shadow-retro-hard-orange",
    gradient: "bg-gradient-to-br from-white via-genz-cream to-genz-pink/20 border-2 border-genz-dark shadow-retro-hard-blue",
    retro: "bg-white border-2 border-genz-dark shadow-retro-hard-pink",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-7",
    lg: "p-9",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : undefined}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
