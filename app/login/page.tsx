"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Lock, Mail, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("aaditya@kjsieit.edu");
  const [password, setPassword] = useState("••••••••");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 font-sans">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Image Branding Card */}
        <div className="md:col-span-5 hidden md:block">
          <div className="relative rounded-[28px] overflow-hidden shadow-floating group h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
              alt="PrepWise Student"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent flex flex-col justify-end p-8 text-white space-y-2">
              <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center font-bold text-sm text-white">
                P
              </div>
              <h3 className="font-display font-bold text-xl leading-snug">
                Master Your Career Journey
              </h3>
              <p className="text-xs text-slate-300">
                Personalized AI placement preparation for the world's most ambitious students.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="md:col-span-7">
          <GlassCard variant="white" className="p-8 sm:p-10 space-y-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-display font-bold text-lg text-brand-dark">
                PrepWise <span className="text-brand-blue">AI</span>
              </Link>
              <a href="#" className="text-xs font-semibold text-brand-blue hover:underline">
                Need Help?
              </a>
            </div>

            <div className="space-y-1">
              <h2 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
                Welcome Back
              </h2>
              <p className="text-xs text-brand-muted">
                Sign in to continue your placement preparation.
              </p>
            </div>

            {/* Login / Register Tab */}
            <div className="flex border-b border-brand-border">
              <button className="px-6 py-2.5 text-xs font-bold border-b-2 border-brand-blue text-brand-blue">
                Login
              </button>
              <Link
                href="/signup"
                className="px-6 py-2.5 text-xs font-semibold text-slate-400 hover:text-brand-dark transition-colors"
              >
                Register
              </Link>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@university.edu"
                    className="w-full pl-10 pr-4 py-3 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  PASSWORD
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input type="checkbox" defaultChecked className="rounded text-brand-blue accent-brand-blue" />
                  <span>Remember Me</span>
                </label>
                <a href="#" className="font-semibold text-brand-blue hover:underline">
                  Forgot Password?
                </a>
              </div>

              <PrimaryButton type="submit" variant="primary" fullWidth size="lg">
                Login
              </PrimaryButton>
            </form>

            <div className="relative flex items-center justify-center py-2">
              <div className="border-t border-brand-border w-full" />
              <span className="bg-white px-3 text-[10px] uppercase font-bold text-slate-400 absolute">
                OR
              </span>
            </div>

            <PrimaryButton
              variant="secondary"
              fullWidth
              size="md"
              onClick={() => router.push("/student/dashboard")}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Continue with Google
              </span>
            </PrimaryButton>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
