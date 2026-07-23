"use client";

import React from "react";
import { clsx } from "clsx";
import { motion, HTMLMotionProps } from "framer-motion";

interface PrimaryButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "orange" | "blue" | "yellow" | "pink" | "green" | "lime" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  variant = "orange",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none backdrop-blur-md";

  const variants = {
    primary:
      "bg-genz-orange/95 text-white border border-white/30 shadow-lg shadow-genz-orange/25 hover:bg-genz-orange hover:shadow-xl hover:shadow-genz-orange/35",
    orange:
      "bg-genz-orange/95 text-white border border-white/30 shadow-lg shadow-genz-orange/25 hover:bg-genz-orange hover:shadow-xl hover:shadow-genz-orange/35",
    blue:
      "bg-genz-blue/95 text-white border border-white/30 shadow-lg shadow-genz-blue/25 hover:bg-genz-blue hover:shadow-xl hover:shadow-genz-blue/35",
    yellow:
      "bg-genz-yellow/95 text-genz-dark border border-white/50 shadow-lg shadow-genz-yellow/25 hover:bg-genz-yellow hover:shadow-xl hover:shadow-genz-yellow/35",
    lime:
      "bg-genz-yellow/95 text-genz-dark border border-white/50 shadow-lg shadow-genz-yellow/25 hover:bg-genz-yellow hover:shadow-xl hover:shadow-genz-yellow/35",
    pink:
      "bg-genz-pink/95 text-genz-dark border border-white/50 shadow-lg shadow-genz-pink/25 hover:bg-genz-pink hover:shadow-xl hover:shadow-genz-pink/35",
    green:
      "bg-genz-green/95 text-white border border-white/30 shadow-lg shadow-genz-green/25 hover:bg-genz-green hover:shadow-xl hover:shadow-genz-green/35",
    secondary:
      "bg-white/80 text-genz-dark border border-white/80 shadow-md shadow-slate-900/5 hover:bg-white hover:shadow-lg hover:shadow-slate-900/10",
    dark:
      "bg-genz-dark/90 text-white border border-white/15 shadow-lg shadow-black/20 hover:bg-genz-dark hover:shadow-xl",
    outline:
      "bg-white/40 text-genz-blue border border-genz-blue/40 shadow-sm hover:bg-genz-blue/10 hover:border-genz-blue/60",
    ghost:
      "bg-transparent text-genz-dark hover:bg-slate-900/5 hover:text-genz-orange shadow-none",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5 rounded-xl",
    md: "text-sm px-6 py-2.5 gap-2 rounded-2xl",
    lg: "text-base px-8 py-3.5 gap-2.5 rounded-2xl",
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
