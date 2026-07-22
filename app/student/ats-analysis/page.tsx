"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import {
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Eye,
  RefreshCw,
  Search,
} from "lucide-react";

export default function ResumeAtsPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [score, setScore] = useState(85);

  const handleRunAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setScore(88);
      setAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <Badge variant="blue">AI RESUME OPTIMIZER</Badge>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            Resume ATS Analysis & Keyword Matching
          </h1>
          <p className="text-xs text-brand-muted">
            Benchmark your resume against enterprise ATS parser algorithms to increase interview callback rates.
          </p>
        </div>

        <PrimaryButton
          variant="primary"
          size="md"
          onClick={handleRunAnalysis}
          disabled={analyzing}
          icon={<RefreshCw className={`w-4 h-4 ${analyzing ? "animate-spin" : ""}`} />}
        >
          {analyzing ? "Scanning Resume..." : "Run ATS Scan"}
        </PrimaryButton>
      </div>

      {/* Main Resume Card & Score Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Uploaded Resume Details */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard variant="white" className="p-6 space-y-6">
            <h3 className="font-display font-bold text-base text-brand-dark">Active Resume File</h3>

            <div className="p-4 bg-brand-soft/20 rounded-2xl border border-brand-soft flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-xs text-brand-dark truncate">
                  Alex_Johnson_Resume_2024.pdf
                </h4>
                <p className="text-[10px] text-slate-500">Uploaded Oct 15, 2024 • 245 KB</p>
              </div>
              <Badge variant="success">Parsed</Badge>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <PrimaryButton variant="secondary" size="sm" icon={<Eye className="w-3.5 h-3.5" />}>
                Preview
              </PrimaryButton>
              <PrimaryButton variant="outline" size="sm" icon={<Upload className="w-3.5 h-3.5" />}>
                Re-upload
              </PrimaryButton>
            </div>

            <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold uppercase text-[10px]">Target Role Match</span>
                <Badge variant="lime">Software Engineer</Badge>
              </div>
              <p className="text-xs text-slate-300">
                Your resume matches 85% of requirements for Junior Software Engineer and Full Stack Developer positions.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Score Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard variant="white" className="p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">ATS MATCH SCORE</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-5xl text-brand-blue">{score}</span>
                  <span className="text-sm text-slate-400">/ 100</span>
                </div>
              </div>

              <div className="text-right">
                <Badge variant="lime" size="md">OPTIMIZED FOR TOP RECRUITERS</Badge>
              </div>
            </div>

            {/* Keyword Match Tabs */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-brand-dark">Detected Skills & Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Python", "SQL", "Project Management", "Data Structures", "Git", "REST APIs", "TypeScript"].map(
                  (kw) => (
                    <span
                      key={kw}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {kw}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="font-display font-bold text-sm text-brand-dark">Missing Industry Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {["Kubernetes", "GraphQL", "System Design", "Microservices"].map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full text-xs font-semibold flex items-center gap-1.5"
                  >
                    <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Section Breakdown */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="font-display font-bold text-sm text-brand-dark">Structure & Format Checks</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between">
                  <span>Contact Info & Links</span>
                  <span className="font-bold text-emerald-600">✓ Pass</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between">
                  <span>Action Verbs Count</span>
                  <span className="font-bold text-emerald-600">✓ Pass (24)</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between">
                  <span>ATS Text Parsing</span>
                  <span className="font-bold text-emerald-600">✓ 100% Clean</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between">
                  <span>Quantified Metrics</span>
                  <span className="font-bold text-amber-600">⚠ Needs Improvement</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
