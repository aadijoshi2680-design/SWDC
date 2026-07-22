"use client";

import React from "react";
import { Search, Bell, HelpCircle, Plus, Sparkles } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

interface AdminHeaderProps {
  title?: string;
  subtitle?: string;
  onNewEntry?: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  title,
  subtitle,
  onNewEntry,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-brand-border/80 px-8 py-4 flex items-center justify-between gap-4">
      {/* Search Input Bar */}
      <div className="relative flex-1 max-w-md">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search students, topics, certificates, or docs..."
          className="w-full pl-10 pr-4 py-2 text-xs bg-slate-100/80 border border-slate-200 rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:bg-white transition-all"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <button className="relative w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-lime ring-2 ring-white" />
        </button>

        <button className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
          <HelpCircle className="w-4 h-4" />
        </button>

        <PrimaryButton
          variant="dark"
          size="sm"
          icon={<Plus className="w-4 h-4" />}
          onClick={onNewEntry}
        >
          New Entry
        </PrimaryButton>

        {/* Admin Profile */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
            alt="Alex Rivera Admin"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-brand-blue/30"
          />
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-brand-dark leading-none">Alex Rivera</span>
            <span className="text-[10px] text-brand-muted mt-0.5">ADMIN</span>
          </div>
        </div>
      </div>
    </header>
  );
};
