"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, User, Sparkles, Shield, ChevronDown } from "lucide-react";
import { clsx } from "clsx";

export const StudentNavbar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/student/dashboard" },
    { name: "Assessments", href: "/student/assessments" },
    { name: "AI Interview", href: "/student/interview" },
    { name: "ATS Analysis", href: "/student/ats-analysis" },
    { name: "Certificates", href: "/student/certificate" },
    { name: "Profile", href: "/student/profile" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-brand-border/80 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Brand */}
        <Link href="/student/dashboard" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold text-lg shadow-glow">
            P
          </div>
          <span className="font-display font-bold text-lg text-brand-dark tracking-tight">
            PrepWise <span className="text-brand-blue">AI</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1 rounded-2xl border border-slate-200/60">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-white text-brand-blue shadow-sm"
                    : "text-slate-600 hover:text-brand-dark hover:bg-white/50"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Switch to Admin demo link */}
          <Link
            href="/admin/dashboard"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-brand-soft text-brand-dark rounded-full hover:bg-brand-soft/80 transition-colors"
          >
            <Shield className="w-3.5 h-3.5 text-brand-blue" />
            <span>Admin Portal</span>
          </Link>

          {/* Bell Notifications */}
          <button className="relative w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-lime rounded-full border-2 border-white animate-pulse" />
          </button>

          {/* User Profile Dropdown */}
          <Link
            href="/student/profile"
            className="flex items-center gap-2.5 pl-2 hover:opacity-90 transition-opacity"
          >
            <div className="w-9 h-9 rounded-full bg-slate-300 ring-2 ring-brand-blue/20 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                alt="Aaditya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-bold text-brand-dark leading-none">Aaditya</span>
              <span className="text-[10px] text-brand-muted mt-0.5">KJSIEIT CE '25</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
