"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  BarChart2,
  FileCheck,
  Brain,
  ChevronRight,
  Target,
  Zap,
} from "lucide-react";

export default function StudentDashboardPage() {
  return (
    <div className="space-y-8 font-sans">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue">
            <span>Good Morning, Aaditya</span>
            <span>👋</span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-brand-dark">
            Welcome back to PrepWise AI
          </h1>
          <p className="text-xs text-brand-muted">
            Your placement preparation journey is 65% complete. Focus on your upcoming psychometric assessment.
          </p>
        </div>

        {/* Readiness Gauge Hero Card */}
        <GlassCard variant="white" className="p-6 md:w-[380px] shrink-0 border-brand-blue/20">
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Circular Gauge mockup */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-brand-blue"
                  strokeDasharray="65, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-display font-extrabold text-xl text-brand-dark">65%</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Complete</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-display font-bold text-base text-brand-dark">4 of 6</span>
              <p className="text-xs text-slate-500">Modules Completed</p>
              <Link href="/student/assessments">
                <PrimaryButton variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Continue
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* 4 Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard variant="white" className="p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold">Assessments Completed</span>
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
          </div>
          <p className="font-display font-extrabold text-2xl text-brand-dark">4 / 6</p>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold">Avg Score</span>
            <BarChart2 className="w-4 h-4 text-brand-blue" />
          </div>
          <p className="font-display font-extrabold text-2xl text-brand-dark">81%</p>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold">ATS Resume Score</span>
            <FileCheck className="w-4 h-4 text-brand-blue" />
          </div>
          <p className="font-display font-extrabold text-2xl text-brand-dark">74 / 100</p>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold">Interview Readiness</span>
            <Zap className="w-4 h-4 text-brand-lime-dark" />
          </div>
          <p className="font-display font-extrabold text-2xl text-amber-600">Intermediate</p>
        </GlassCard>
      </div>

      {/* AI Recommendation Banner */}
      <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs font-medium text-brand-dark">
            <span className="font-bold text-brand-blue">AI Recommendation:</span> Complete Resume & ATS Analysis before starting your Technical Mock Interview.
          </p>
        </div>
        <Link href="/student/ats-analysis">
          <PrimaryButton variant="primary" size="sm">
            Start Now
          </PrimaryButton>
        </Link>
      </div>

      {/* Main Dashboard Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (Continue Learning & Modules) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Continue Learning Feature Box */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg text-brand-dark">Continue Learning</h3>
              <Link href="/student/assessments" className="text-xs font-bold text-brand-blue hover:underline">
                View All Modules
              </Link>
            </div>

            <GlassCard variant="white" className="p-6 border-l-4 border-l-brand-blue flex flex-col md:flex-row items-center gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <Badge variant="blue">MODULE 3</Badge>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 18 min remaining
                  </span>
                </div>
                <h4 className="font-display font-bold text-xl text-brand-dark">
                  Psychometric Assessment
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Evaluate your cognitive abilities, personality traits, and problem-solving styles as required by top consulting and tech firms.
                </p>
                <Link href="/student/assessments/psychometric">
                  <PrimaryButton variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Continue Assessment
                  </PrimaryButton>
                </Link>
              </div>

              <div className="w-full md:w-56 h-36 rounded-2xl bg-brand-soft/40 border border-brand-soft overflow-hidden flex items-center justify-center p-3 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80"
                  alt="Psychometric Assessment"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </GlassCard>
          </div>

          {/* Placement Modules Grid */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-brand-dark">Placement Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassCard variant="white" className="p-5 space-y-3">
                <Badge variant="success">COMPLETED</Badge>
                <h5 className="font-bold text-sm text-brand-dark">Quantitative Aptitude</h5>
                <Link href="/student/assessments">
                  <PrimaryButton variant="secondary" size="sm" fullWidth>
                    Review Results
                  </PrimaryButton>
                </Link>
              </GlassCard>

              <GlassCard variant="white" className="p-5 space-y-3">
                <Badge variant="success">COMPLETED</Badge>
                <h5 className="font-bold text-sm text-brand-dark">English Communication</h5>
                <Link href="/student/assessments">
                  <PrimaryButton variant="secondary" size="sm" fullWidth>
                    Review Results
                  </PrimaryButton>
                </Link>
              </GlassCard>

              <GlassCard variant="white" className="p-5 space-y-3 border-brand-blue">
                <Badge variant="lime">IN PROGRESS</Badge>
                <h5 className="font-bold text-sm text-brand-dark">Psychometric Evaluation</h5>
                <Link href="/student/assessments/psychometric">
                  <PrimaryButton variant="primary" size="sm" fullWidth>
                    Continue
                  </PrimaryButton>
                </Link>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Right Column (Certification Status & Activity) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Certification Status Box */}
          <GlassCard variant="white" className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-sm text-brand-dark">Certification Status</h4>
              <Award className="w-5 h-5 text-amber-500" />
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-brand-lime text-brand-dark font-bold text-xs flex items-center justify-center">
                4/6
              </div>
              <div>
                <h5 className="font-bold text-xs text-brand-dark">Elite Ready Certificate</h5>
                <p className="text-[11px] text-slate-500">2 modules pending</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Aptitude & Reasoning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Communication Skills</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-4 h-4 rounded-full border border-slate-300" />
                <span>Technical Interview Round</span>
              </div>
            </div>

            <Link href="/student/certificate">
              <PrimaryButton variant="secondary" size="sm" fullWidth>
                View Certificate Requirements
              </PrimaryButton>
            </Link>
          </GlassCard>

          {/* Recent Activity Box */}
          <GlassCard variant="white" className="p-6 space-y-4">
            <h4 className="font-display font-bold text-sm text-brand-dark">Recent Activity</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-brand-dark">Psychometric Assessment Started</p>
                  <p className="text-[10px] text-slate-400">TODAY, 10:45 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-brand-dark">Completed English Assessment</p>
                  <p className="text-[10px] text-slate-400">YESTERDAY</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-brand-dark">Resume Uploaded & Scanned</p>
                  <p className="text-[10px] text-slate-400">2 DAYS AGO</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* CTA Box */}
          <div className="bg-brand-dark text-white p-6 rounded-card space-y-3">
            <h4 className="font-display font-bold text-base">You're Almost Placement Ready</h4>
            <p className="text-xs text-slate-300">
              Unlock your 'Elite Ready' certificate and share it directly with top recruiters.
            </p>
            <Link href="/student/certificate">
              <PrimaryButton variant="lime" size="sm" fullWidth>
                Continue Journey
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Placement Journey Roadmap Footer */}
      <GlassCard variant="white" className="p-6 space-y-4">
        <h4 className="font-display font-bold text-sm text-brand-dark">Placement Journey Roadmap</h4>
        <div className="flex items-center justify-between overflow-x-auto pb-2 gap-2 text-center text-xs">
          {[
            { title: "Aptitude", done: true },
            { title: "English", done: true },
            { title: "Psychometric", current: true },
            { title: "Resume & ATS" },
            { title: "Technical" },
            { title: "HR Round" },
            { title: "Certificate" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[80px]">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-1 ${
                  item.done
                    ? "bg-brand-blue text-white"
                    : item.current
                    ? "bg-brand-lime text-brand-dark ring-4 ring-brand-lime/30"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {item.done ? "✓" : idx + 1}
              </div>
              <span className={`text-[11px] font-medium ${item.current ? "text-brand-blue font-bold" : "text-slate-500"}`}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
