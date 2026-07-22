"use client";

import React from "react";
import { clsx } from "clsx";
import { motion, HTMLMotionProps } from "framer-motion";

interface PrimaryButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "lime" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-button transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-glow hover:shadow-floating-hover active:scale-[0.98]",
    secondary:
      "bg-white text-brand-dark border border-brand-border hover:border-slate-300 hover:bg-slate-50 shadow-sm active:scale-[0.98]",
    dark:
      "bg-brand-dark text-white hover:bg-black shadow-md hover:shadow-lg active:scale-[0.98]",
    lime:
      "bg-brand-lime text-brand-dark hover:bg-brand-lime-dark font-semibold shadow-lime-glow active:scale-[0.98]",
    outline:
      "bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue-light active:scale-[0.98]",
    ghost:
      "bg-transparent text-brand-dark hover:bg-slate-100 hover:text-brand-blue active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 rounded-[20px]",
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
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
