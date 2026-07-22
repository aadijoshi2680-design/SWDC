"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import { Download, TrendingUp, BarChart2, Activity, Calendar, ArrowRight } from "lucide-react";

export default function AnalyticsReportsPage() {
  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            Analytics & System Overview
          </h1>
          <p className="text-xs text-brand-muted">
            Real-time performance metrics and user engagement trends.
          </p>
        </div>

        <div className="flex gap-3">
          <PrimaryButton variant="secondary" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
            CSV Export
          </PrimaryButton>
          <PrimaryButton variant="primary" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
            Export Report
          </PrimaryButton>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">TOTAL SIGNUPS</span>
          <p className="font-display font-extrabold text-3xl text-brand-dark">18,542</p>
          <span className="text-[10px] font-semibold text-emerald-600">+12% vs LW</span>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">ASSESSMENTS COMPLETED</span>
          <p className="font-display font-extrabold text-3xl text-brand-dark">52,304</p>
          <span className="text-[10px] font-semibold text-emerald-600">+8% vs LW</span>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">CERTIFICATES ISSUED</span>
          <p className="font-display font-extrabold text-3xl text-brand-dark">8,904</p>
          <span className="text-[10px] font-semibold text-emerald-600">+15% vs LW</span>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">AVG. PLACEMENT SCORE</span>
          <p className="font-display font-extrabold text-3xl text-brand-blue">84%</p>
          <span className="text-[10px] font-semibold text-brand-blue">High Intensity</span>
        </GlassCard>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <GlassCard variant="white" className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-display font-bold text-base text-brand-dark">Growth & Engagement</h3>
              <Badge variant="soft">Monthly Trend</Badge>
            </div>

            <div className="h-56 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div className="flex-1 flex items-end justify-between gap-3 pt-4">
                {[20, 35, 45, 60, 75, 90, 85, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-brand-blue/30 rounded-t-lg transition-all" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-3 border-t border-slate-200">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-4">
          <GlassCard variant="white" className="p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-brand-dark">Activity Heatmap</h3>
            <div className="grid grid-cols-7 gap-1.5 pt-2">
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-6 rounded ${
                    i % 3 === 0
                      ? "bg-brand-blue"
                      : i % 2 === 0
                      ? "bg-brand-blue/40"
                      : "bg-slate-100"
                  }`}
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Tables Row: Most Difficult & Most Skipped */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard variant="white" className="p-6 space-y-4">
          <h3 className="font-display font-bold text-base text-brand-dark">Most Difficult Questions</h3>
          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
              <div>
                <span className="font-mono text-slate-400">#DSA-8921</span>
                <p className="font-bold text-brand-dark">Red-Black Tree Balancing</p>
              </div>
              <span className="font-bold text-rose-600">14.2% Acc</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
              <div>
                <span className="font-mono text-slate-400">#SYS-3301</span>
                <p className="font-bold text-brand-dark">Microservices Consistency</p>
              </div>
              <span className="font-bold text-rose-600">18.5% Acc</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard variant="white" className="p-6 space-y-4">
          <h3 className="font-display font-bold text-base text-brand-dark">Most Skipped Questions</h3>
          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
              <div>
                <Badge variant="error">EXPERT</Badge>
                <p className="font-bold text-brand-dark mt-1">Recursive Tree Traversal</p>
              </div>
              <span className="font-bold text-amber-600">48.2% Skip</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
              <div>
                <Badge variant="warning">HARD</Badge>
                <p className="font-bold text-brand-dark mt-1">Graph Theory: Dijkstra</p>
              </div>
              <span className="font-bold text-amber-600">42.5% Skip</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
