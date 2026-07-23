"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, User } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { clsx } from "clsx";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8",
        scrolled ? "py-2 sm:py-2.5" : "py-4 sm:py-5"
      )}
    >
      <div
        className={clsx(
          "max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5 rounded-3xl transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border border-white/90 shadow-xl shadow-slate-900/5 scale-[0.99]"
            : "bg-white/45 backdrop-blur-xl border border-white/60 shadow-sm"
        )}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-genz-yellow/90 backdrop-blur-md border border-white/70 text-genz-dark flex items-center justify-center font-extrabold text-2xl shadow-md shadow-genz-yellow/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
            P
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl text-genz-dark tracking-tight leading-none">
                PrepWise
              </span>
              <span className="bg-genz-pink/90 text-genz-dark font-black text-xs px-2.5 py-0.5 rounded-full border border-white/60 shadow-sm backdrop-blur-sm">
                AI
              </span>
            </div>
            <span className="text-[10px] text-genz-blue font-bold tracking-widest uppercase mt-1">
              Gen Z Vintage Prep
            </span>
          </div>
        </Link>

        {/* Center Menu Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-xl p-1.5 rounded-full border border-white/70 shadow-sm hover:bg-white/75 transition-all duration-300">
          {[
            { id: "home", label: "Home", href: "/" },
            { id: "features", label: "Features", href: "#features" },
            { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
            { id: "certification", label: "Certification", href: "#certification" },
            { id: "colleges", label: "For Colleges", href: "#colleges" },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={clsx(
                  "px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 relative",
                  isActive
                    ? "bg-white text-genz-orange shadow-sm border border-slate-100"
                    : "text-slate-700 hover:text-genz-dark hover:bg-white/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
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
