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
    "inline-flex items-center justify-center font-bold rounded-button transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none border-2 border-genz-dark";

  const variants = {
    primary:
      "bg-genz-orange text-white hover:bg-[#e25514] shadow-retro-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    orange:
      "bg-genz-orange text-white hover:bg-[#e25514] shadow-retro-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    blue:
      "bg-genz-blue text-white hover:bg-[#386c96] shadow-retro-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    yellow:
      "bg-genz-yellow text-genz-dark hover:bg-[#e2a706] shadow-retro-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    lime:
      "bg-genz-yellow text-genz-dark hover:bg-[#e2a706] shadow-retro-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    pink:
      "bg-genz-pink text-genz-dark hover:bg-[#f88eb0] shadow-retro-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    green:
      "bg-genz-green text-white hover:bg-[#008f5c] shadow-retro-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    secondary:
      "bg-white text-genz-dark border-2 border-genz-dark hover:bg-genz-cream shadow-retro-hard active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    dark:
      "bg-genz-dark text-white hover:bg-black border-2 border-white/20 shadow-retro-hard-orange active:translate-x-0.5 active:translate-y-0.5",
    outline:
      "bg-transparent text-genz-blue border-2 border-genz-blue hover:bg-genz-blue/10 active:translate-x-0.5 active:translate-y-0.5",
    ghost:
      "bg-transparent text-genz-dark border-transparent hover:bg-genz-dark/5 hover:text-genz-orange border-0 shadow-none",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 rounded-xl",
    md: "text-sm px-5.5 py-2.5 gap-2 rounded-2xl",
    lg: "text-base px-7 py-3.5 gap-2.5 rounded-2xl",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
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
