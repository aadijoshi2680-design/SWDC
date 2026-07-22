"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp, CheckCircle2, Award, ArrowRight, Building2, Zap } from "lucide-react";

export default function PlacementProgressPage() {
  const companyMatches = [
    { name: "TCS Ninja / Digital", match: 94, status: "High Fit" },
    { name: "Infosys Specialist Programmer", match: 92, status: "High Fit" },
    { name: "Capgemini Analyst", match: 90, status: "High Fit" },
    { name: "Accenture SDE", match: 88, status: "Good Fit" },
    { name: "Amazon SDE-1", match: 82, status: "Good Fit" },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <Badge variant="blue">CAMPUS PLACEMENT READINESS</Badge>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            Placement Progress & Skill Matrix
          </h1>
          <p className="text-xs text-brand-muted">
            Track your preparation trajectory across all assessment domains and company matching criteria.
          </p>
        </div>

        <Link href="/student/certificate">
          <PrimaryButton variant="primary" size="sm" icon={<Award className="w-4 h-4" />}>
            Download Certificate
          </PrimaryButton>
        </Link>
      </div>

      {/* Main Readiness Gauge */}
      <GlassCard variant="white" className="p-8 border-2 border-brand-blue/30 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-brand-blue text-white font-display font-extrabold text-3xl flex items-center justify-center shadow-glow">
              84%
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">OVERALL PLACEMENT READINESS</span>
              <h2 className="font-display font-bold text-2xl text-brand-dark">Industry Ready • Tier 1 Fit</h2>
              <p className="text-xs text-slate-500">You have unlocked 5 of 6 placement preparation modules.</p>
            </div>
          </div>

          <Badge variant="lime" size="md">ELITE READY BADGE UNLOCKED</Badge>
        </div>
      </GlassCard>

      {/* Company Fit Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <GlassCard variant="white" className="p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-brand-dark flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-blue" /> Target Company Predictive Match
            </h3>

            <div className="space-y-3">
              {companyMatches.map((co, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-brand-dark">{co.name}</h5>
                    <span className="text-[10px] text-slate-400">{co.status}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-sm text-brand-blue">{co.match}% Match</span>
                    <Badge variant={co.match > 90 ? "success" : "blue"}>Eligible</Badge>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <GlassCard variant="dark" className="p-6 space-y-4">
            <h3 className="font-display font-bold text-base">Next Recommended Action</h3>
            <p className="text-xs text-slate-300">
              Schedule your final technical HR mock session to increase your Amazon SDE-1 match score to 90%+.
            </p>

            <Link href="/student/interview">
              <PrimaryButton variant="lime" fullWidth size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Start Technical Mock Session
              </PrimaryButton>
            </Link>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
