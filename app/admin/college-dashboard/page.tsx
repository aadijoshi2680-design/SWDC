"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  CheckCircle2,
  TrendingUp,
  Award,
  Calendar,
  Download,
  Sparkles,
  UserPlus,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function CollegeDashboardPage() {
  const stats = [
    { label: "Total Registered", val: "1,248", sub: "+12% vs last mo" },
    { label: "Active This Week", val: "842", sub: "+5% vs last week" },
    { label: "Completion Rate", val: "78%", sub: "Stable" },
    { label: "Avg. Readiness", val: "81%", sub: "+3% improved" },
    { label: "Certificates", val: "526", sub: "84 pending" },
    { label: "Interviews", val: "1,904", sub: "+142 today" },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
              College Dashboard
            </h1>
            <Badge variant="blue">KJ SOMAIYA CAMPUS</Badge>
          </div>
          <p className="text-xs text-brand-muted">
            Monitor student progress, assessments and placement readiness across your institution.
          </p>
        </div>

        <PrimaryButton variant="primary" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
          Download Full Audit
        </PrimaryButton>
      </div>

      {/* 6 Top Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {stats.map((s, idx) => (
          <GlassCard key={idx} variant="white" className="p-4 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</span>
            <p className="font-display font-extrabold text-2xl text-brand-dark">{s.val}</p>
            <span className="text-[10px] font-semibold text-emerald-600">{s.sub}</span>
          </GlassCard>
        ))}
      </div>

      {/* Placement Readiness & College Insights AI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Placement Readiness Gauge */}
        <div className="lg:col-span-7">
          <GlassCard variant="white" className="p-8 space-y-6">
            <h3 className="font-display font-bold text-lg text-brand-dark">Placement Readiness</h3>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-brand-blue"
                    strokeDasharray="65, 100"
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-display font-extrabold text-3xl text-brand-dark">65%</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase">INDUSTRY READY</span>
                </div>
              </div>

              <div className="space-y-3 flex-1 text-xs w-full">
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>Placement Ready</span>
                    <span className="text-brand-blue">65%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>Needs Improvement</span>
                    <span className="text-amber-600">22%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "22%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>In Progress</span>
                    <span className="text-slate-500">13%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 rounded-full" style={{ width: "13%" }} />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* College Insights AI */}
        <div className="lg:col-span-5">
          <GlassCard variant="dark" className="p-8 space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-lime" />
                <h3 className="font-display font-bold text-lg text-white">College Insights AI</h3>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                  <span>Engineering Dept shows 15% higher ATS scores this month.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                  <span>Python & SQL modules are the most engaged technical tracks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                  <span>Suggested Action: English verbal scores are lagging by 8%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                  <span>Predictive: 240 more students expected to reach 'Ready' by Week 12.</span>
                </li>
              </ul>
            </div>

            <PrimaryButton variant="lime" fullWidth size="md">
              Download Full Audit
            </PrimaryButton>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
