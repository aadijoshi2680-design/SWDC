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
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-genz-yellow border-2 border-genz-dark text-genz-dark flex items-center justify-center font-extrabold text-2xl shadow-retro-hard group-hover:scale-105 transition-transform">
            P
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl text-genz-dark tracking-tight leading-none">
                PrepWise
              </span>
              <span className="bg-genz-pink text-genz-dark font-black text-xs px-2 py-0.5 rounded-full border border-genz-dark shadow-[1.5px_1.5px_0px_#121318]">
                AI
              </span>
            </div>
            <span className="text-[10px] text-genz-blue font-bold tracking-widest uppercase mt-1">
              Gen Z Vintage Prep
            </span>
          </div>
        </Link>

        {/* Center Menu Links */}
        <nav className="hidden md:flex items-center gap-7 bg-white/90 backdrop-blur-md px-7 py-2.5 rounded-2xl border-2 border-genz-dark shadow-retro-hard">
          <Link
            href="/"
            className="text-sm font-bold text-genz-dark hover:text-genz-orange transition-colors"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-sm font-semibold text-slate-700 hover:text-genz-blue transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-semibold text-slate-700 hover:text-genz-blue transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#certification"
            className="text-sm font-semibold text-slate-700 hover:text-genz-blue transition-colors"
          >
            Certification
          </Link>
          <Link
            href="#colleges"
            className="text-sm font-semibold text-slate-700 hover:text-genz-blue transition-colors"
          >
            For Colleges
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <PrimaryButton variant="secondary" size="sm">
              Login
            </PrimaryButton>
          </Link>
          <Link href="/signup">
            <PrimaryButton variant="orange" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Get Started
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </header>
  );
};
