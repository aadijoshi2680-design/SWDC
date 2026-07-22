import React from "react";
import { StudentNavbar } from "@/components/StudentNavbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <StudentNavbar />
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8">
        {children}
      </main>
      <footer className="bg-white border-t border-brand-border py-8 px-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-dark">PrepWise AI</span>
            <span>© 2026 KJ Somaiya College of Engineering. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Support Center</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Verification Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
