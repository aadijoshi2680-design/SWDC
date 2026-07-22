"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, User } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { clsx } from "clsx";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass-nav shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-bold text-xl shadow-glow group-hover:scale-105 transition-transform">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl text-brand-dark tracking-tight leading-none">
              PrepWise <span className="text-brand-blue">AI</span>
            </span>
            <span className="text-[10px] text-brand-muted font-medium tracking-widest uppercase mt-0.5">
              KJ Somaiya
            </span>
          </div>
        </Link>

        {/* Center Menu Links */}
        <nav className="hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-brand-border/60 shadow-sm">
          <Link
            href="/"
            className="text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#certification"
            className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
          >
            Certification
          </Link>
          <Link
            href="#colleges"
            className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
          >
            For Colleges
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <PrimaryButton variant="ghost" size="sm">
              Login
            </PrimaryButton>
          </Link>
          <Link href="/signup">
            <PrimaryButton variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Get Started
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </header>
  );
};
