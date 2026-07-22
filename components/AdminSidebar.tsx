"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Database,
  Award,
  BarChart3,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  Building2,
  FileSpreadsheet,
  GraduationCap,
} from "lucide-react";
import { clsx } from "clsx";

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Super Overview", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "College Dashboard", href: "/admin/college-dashboard", icon: Building2 },
    { name: "User Management", href: "/admin/users", icon: Users },
    { name: "Student Reports", href: "/admin/student-reports", icon: FileSpreadsheet },
    { name: "Question Bank", href: "/admin/question-bank", icon: Database },
    { name: "Certificates", href: "/admin/certificates", icon: Award },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Feedback Desk", href: "/admin/feedback", icon: MessageSquare },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-brand-border/80 flex flex-col justify-between h-screen sticky top-0 shrink-0 select-none">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-brand-border/60">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-brand-dark text-white flex items-center justify-center font-bold text-lg shadow-md">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-brand-dark tracking-tight leading-none">
                PrepWise <span className="text-brand-blue">AI</span>
              </span>
              <span className="text-[10px] text-brand-blue font-semibold uppercase tracking-widest mt-1">
                SUPER ADMIN
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all duration-200",
                  isActive
                    ? "bg-brand-blue-light text-brand-blue font-bold shadow-sm"
                    : "text-slate-600 hover:text-brand-dark hover:bg-slate-50"
                )}
              >
                <Icon className={clsx("w-4 h-4", isActive ? "text-brand-blue" : "text-slate-400")} />
                <span>{item.name}</span>
                {item.name === "Feedback Desk" && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-brand-lime ring-2 ring-brand-lime/30 animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer Actions */}
      <div className="p-4 border-t border-brand-border/60 space-y-2">
        <Link
          href="/student/dashboard"
          className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-brand-lime text-brand-dark hover:bg-brand-lime-dark transition-colors shadow-sm"
        >
          <GraduationCap className="w-4 h-4 text-brand-dark" />
          <span>Student Portal</span>
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </Link>
      </div>
    </aside>
  );
};
