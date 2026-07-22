"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import {
  Building2,
  Users,
  Zap,
  CheckCircle2,
  Bot,
  Award,
  BarChart3,
  Activity,
  Plus,
  FileSpreadsheet,
  Download,
  Filter,
  MoreVertical,
} from "lucide-react";

export default function AdminOverviewDashboard() {
  const metrics = [
    { label: "TOTAL COLLEGES", val: "126", sub: "+12% this month", icon: Building2 },
    { label: "REGISTERED STUDENTS", val: "18,542", sub: "+2.4k new users", icon: Users },
    { label: "ACTIVE TODAY", val: "5,820", sub: "Real-time monitoring", icon: Zap },
    { label: "ASSESSMENTS COMPLETED", val: "52,304", sub: "+15% avg score", icon: CheckCircle2 },
    { label: "AI INTERVIEWS", val: "14,210", sub: "98% satisfaction", icon: Bot },
    { label: "CERTIFICATES ISSUED", val: "8,904", sub: "Verified on chain", icon: Award },
    { label: "PLATFORM READINESS", val: "81%", sub: "TARGET 90%", icon: BarChart3 },
    { label: "SYSTEM UPTIME", val: "99.98%", sub: "Healthy", icon: Activity },
  ];

  const recentRegistrations = [
    { name: "Saurabh Kumar", inst: "IIT Bombay", plan: "PREMIUM", time: "Oct 24, 09:45", status: "Verified" },
    { name: "Rohan Adani", inst: "BITS Pilani", plan: "INSTITUTIONAL", time: "Oct 24, 09:12", status: "Verified" },
    { name: "Priya Singh", inst: "SRM University", plan: "FREE", time: "Oct 24, 08:55", status: "Pending" },
    { name: "Ananya Kapoor", inst: "VIT Vellore", plan: "PREMIUM", time: "Oct 24, 08:30", status: "Verified" },
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Page Title & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            Admin Overview
          </h1>
          <p className="text-xs text-brand-muted">
            Platform state as of October 24, 2023, 10:42 AM
          </p>
        </div>

        <div className="flex items-center gap-3">
          <PrimaryButton variant="secondary" size="sm" icon={<Filter className="w-3.5 h-3.5" />}>
            Filters
          </PrimaryButton>
          <PrimaryButton variant="outline" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
            Export PDF
          </PrimaryButton>
        </div>
      </div>

      {/* 8 Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <GlassCard key={idx} variant="white" className="p-5 space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-bold uppercase tracking-wider">{m.label}</span>
                <Icon className="w-4 h-4 text-brand-blue" />
              </div>
              <p className="font-display font-extrabold text-2xl text-brand-dark">{m.val}</p>
              <p className="text-[10px] font-semibold text-emerald-600">{m.sub}</p>
            </GlassCard>
          );
        })}
      </div>

      {/* Main Grid: Activity Chart & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Daily User Activity Chart Mockup */}
        <div className="lg:col-span-8 space-y-6">
          <GlassCard variant="white" className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-base text-brand-dark">Daily User Activity</h3>
                <p className="text-xs text-slate-400">
                  Comparison between direct logins and assessment starts
                </p>
              </div>
              <Badge variant="soft">Last 30 Days</Badge>
            </div>

            {/* Mock Chart Area */}
            <div className="h-64 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
              <div className="flex justify-between text-[11px] font-mono text-slate-400 border-b border-slate-200 pb-2">
                <span>API Requests Volume & User Activity</span>
                <span className="font-bold text-brand-blue">Peak: 885K / day</span>
              </div>

              {/* Simulated Wave Line Graphic */}
              <div className="flex-1 flex items-end justify-between gap-2 pt-6">
                {[30, 45, 60, 40, 75, 90, 85, 65, 70, 95, 80, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-brand-blue/20 hover:bg-brand-blue rounded-t-lg transition-all h-full flex items-end">
                    <div
                      className="w-full bg-brand-blue rounded-t-lg"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-brand-blue" />
                  <span>Active Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-brand-lime-dark" />
                  <span>Assessments</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Side: Quick Actions & System Health */}
        <div className="lg:col-span-4 space-y-6">
          <GlassCard variant="white" className="p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-brand-dark">Quick Actions</h3>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/admin/users">
                <div className="p-4 bg-slate-50 hover:bg-brand-blue-light rounded-2xl border border-slate-200 text-center space-y-1 cursor-pointer transition-colors">
                  <Users className="w-5 h-5 text-brand-blue mx-auto" />
                  <span className="text-xs font-bold text-brand-dark block">Add User</span>
                </div>
              </Link>

              <Link href="/admin/question-bank">
                <div className="p-4 bg-slate-50 hover:bg-brand-blue-light rounded-2xl border border-slate-200 text-center space-y-1 cursor-pointer transition-colors">
                  <Plus className="w-5 h-5 text-brand-blue mx-auto" />
                  <span className="text-xs font-bold text-brand-dark block">New Question</span>
                </div>
              </Link>

              <Link href="/admin/analytics">
                <div className="p-4 bg-slate-50 hover:bg-brand-blue-light rounded-2xl border border-slate-200 text-center space-y-1 cursor-pointer transition-colors">
                  <FileSpreadsheet className="w-5 h-5 text-brand-blue mx-auto" />
                  <span className="text-xs font-bold text-brand-dark block">Gen Report</span>
                </div>
              </Link>

              <Link href="/admin/settings">
                <div className="p-4 bg-slate-50 hover:bg-brand-blue-light rounded-2xl border border-slate-200 text-center space-y-1 cursor-pointer transition-colors">
                  <Zap className="w-5 h-5 text-brand-blue mx-auto" />
                  <span className="text-xs font-bold text-brand-dark block">Bulk Update</span>
                </div>
              </Link>
            </div>
          </GlassCard>

          <GlassCard variant="white" className="p-6 space-y-3">
            <h3 className="font-display font-bold text-base text-brand-dark">System Health</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Core API
                </span>
                <span className="font-mono text-slate-500">12ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> AI Model Engine
                </span>
                <span className="font-mono text-slate-500">240ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> CDN Distribution
                </span>
                <span className="font-mono text-slate-500">98ms</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Recent User Registrations Table */}
      <GlassCard variant="white" className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-bold text-base text-brand-dark">Recent User Registrations</h3>
            <p className="text-xs text-slate-400">A live feed of student onboarding across all partner institutions.</p>
          </div>
          <Link href="/admin/users" className="text-xs font-bold text-brand-blue hover:underline">
            View All Users
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3 rounded-l-xl">STUDENT NAME</th>
                <th className="p-3">INSTITUTION</th>
                <th className="p-3">PLAN TYPE</th>
                <th className="p-3">JOINED AT</th>
                <th className="p-3">STATUS</th>
                <th className="p-3 rounded-r-xl">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentRegistrations.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-brand-dark">{row.name}</td>
                  <td className="p-3 text-slate-600">{row.inst}</td>
                  <td className="p-3">
                    <Badge variant={row.plan === "PREMIUM" ? "lime" : "blue"}>{row.plan}</Badge>
                  </td>
                  <td className="p-3 font-mono text-slate-500">{row.time}</td>
                  <td className="p-3">
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> {row.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="p-1 hover:bg-slate-200 rounded">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
