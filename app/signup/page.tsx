"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Check } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    mobile: "+1 (555) 000-0000",
    city: "Mumbai",
    country: "India",
    qualification: "B.Tech",
    college: "KJ Somaiya College of Engineering",
    degree: "B.Tech Computer Engineering",
    gradYear: "2025",
    password: "••••••••",
    confirmPassword: "••••••••",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/signup/step-2");
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Branding Card */}
        <div className="md:col-span-5 hidden md:block">
          <div className="relative rounded-[28px] overflow-hidden shadow-floating group h-[680px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
              alt="PrepWise Students Group"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent flex flex-col justify-end p-8 text-white space-y-3">
              <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center font-bold text-sm text-white">
                P
              </div>
              <h3 className="font-display font-bold text-2xl leading-snug">
                Your placement journey starts here.
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Create your account, upload your resume, and receive a personalized preparation experience designed around your skills and career goals.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="md:col-span-7">
          <GlassCard variant="white" className="p-8 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-display font-bold text-lg text-brand-dark">
                PrepWise <span className="text-brand-blue">AI</span>
              </Link>
              <span className="text-xs text-brand-muted font-medium">Step 1 of 3</span>
            </div>

            <div className="space-y-1">
              <h2 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
                Create Your Account
              </h2>
              <p className="text-xs text-brand-muted">
                Start preparing for placements with AI-powered personalized learning.
              </p>
            </div>

            {/* Login / Register Tab */}
            <div className="flex border-b border-brand-border">
              <Link
                href="/login"
                className="px-6 py-2.5 text-xs font-semibold text-slate-400 hover:text-brand-dark transition-colors"
              >
                Login
              </Link>
              <button className="px-6 py-2.5 text-xs font-bold border-b-2 border-brand-blue text-brand-blue">
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    MOBILE NUMBER *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    CURRENT CITY *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    COUNTRY *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    HIGHEST QUALIFICATION *
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  >
                    <option>B.Tech / B.E.</option>
                    <option>M.Tech</option>
                    <option>B.Sc / BCA</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    COLLEGE / UNIVERSITY *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    GRADUATION YEAR *
                  </label>
                  <select
                    value={formData.gradYear}
                    onChange={(e) => setFormData({ ...formData, gradYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  >
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    CREATE PASSWORD *
                  </label>
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    CONFIRM PASSWORD *
                  </label>
                  <input
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 pt-1">
                <input type="checkbox" defaultChecked required className="rounded text-brand-blue accent-brand-blue" />
                <span>
                  I agree to the <a href="#" className="text-brand-blue underline">Privacy Policy</a> and{" "}
                  <a href="#" className="text-brand-blue underline">Terms of Service</a>.
                </span>
              </label>

              <PrimaryButton type="submit" variant="primary" fullWidth size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Continue
              </PrimaryButton>

              <div className="text-center text-xs text-slate-500 pt-2">
                Already have an account?{" "}
                <Link href="/login" className="font-bold text-brand-blue hover:underline">
                  Login
                </Link>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
