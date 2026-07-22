"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowRight,
  Brain,
  MessageSquare,
  Award,
  Sparkles,
  BarChart3,
} from "lucide-react";

export default function AssessmentCenterPage() {
  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            Assessment Center
          </h1>
          <p className="text-xs text-brand-muted">
            Complete assessments to strengthen your aptitude, communication and workplace readiness before interviews.
          </p>
        </div>

        <GlassCard variant="white" className="p-4 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs flex items-center justify-center">
            50%
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">OVERALL PROGRESS</span>
            <p className="font-display font-extrabold text-sm text-brand-dark">3 / 6 Completed</p>
          </div>
        </GlassCard>
      </div>

      {/* Featured Assessment Card */}
      <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-r from-brand-dark via-slate-900 to-brand-blue text-white p-8 md:p-10 space-y-4 shadow-xl">
        <Badge variant="lime">FEATURED ASSESSMENT</Badge>
        <h2 className="font-display font-bold text-2xl md:text-3xl">Psychometric Assessment</h2>
        <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
          Understand your workplace behaviour, communication style and decision-making patterns through standardized cognitive evaluations.
        </p>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-200 pt-2">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-lime" /> 20 Minutes
          </span>
          <span className="flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-brand-lime" /> Easy
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-brand-lime" /> 30 Questions
          </span>
        </div>

        <div className="pt-2">
          <Link href="/student/assessments/psychometric">
            <PrimaryButton variant="lime" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Continue Assessment
            </PrimaryButton>
          </Link>
        </div>
      </div>

      {/* 3 Core Assessment Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard variant="white" className="p-6 space-y-4 border-slate-200">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <Badge variant="success">Completed</Badge>
          </div>

          <h3 className="font-display font-bold text-lg text-brand-dark">Aptitude Assessment</h3>
          <p className="text-xs text-brand-muted">Quantitative, Logical, Verbal, Data.</p>

          <div className="text-xs font-mono text-slate-500">
            45m • 40 Qs • Intermediate
          </div>

          <Link href="/student/assessments/results">
            <PrimaryButton variant="secondary" size="sm" fullWidth icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Review Results
            </PrimaryButton>
          </Link>
        </GlassCard>

        <GlassCard variant="white" className="p-6 space-y-4 border-slate-200">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <Badge variant="success">Completed</Badge>
          </div>

          <h3 className="font-display font-bold text-lg text-brand-dark">English Assessment</h3>
          <p className="text-xs text-brand-muted">Grammar, Vocabulary, Reading, Communication.</p>

          <div className="text-xs font-mono text-slate-500">
            30m • 35 Qs • Beginner
          </div>

          <Link href="/student/assessments/results">
            <PrimaryButton variant="secondary" size="sm" fullWidth icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Review Results
            </PrimaryButton>
          </Link>
        </GlassCard>

        <GlassCard variant="white" className="p-6 space-y-4 border-2 border-brand-blue">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-brand-lime/30 text-brand-dark flex items-center justify-center font-bold">
              <Brain className="w-5 h-5" />
            </div>
            <Badge variant="blue">Not Started</Badge>
          </div>

          <h3 className="font-display font-bold text-lg text-brand-dark">Psychometric Assessment</h3>
          <p className="text-xs text-brand-muted">Leadership, Personality, Behaviour.</p>

          <div className="text-xs font-mono text-slate-500">
            20m • 30 Qs • Easy
          </div>

          <Link href="/student/assessments/psychometric">
            <PrimaryButton variant="primary" size="sm" fullWidth icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Start Assessment
            </PrimaryButton>
          </Link>
        </GlassCard>
      </div>

      {/* Assessment Journey Timeline */}
      <GlassCard variant="white" className="p-6 text-center space-y-4">
        <h4 className="font-display font-bold text-base text-brand-dark">Your Assessment Journey</h4>
        <div className="flex items-center justify-center gap-6 max-w-xl mx-auto py-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <span className="text-xs font-semibold text-brand-dark">Aptitude</span>
          </div>
          <div className="w-12 h-0.5 bg-emerald-500" />
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <span className="text-xs font-semibold text-brand-dark">English</span>
          </div>
          <div className="w-12 h-0.5 bg-brand-blue" />
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold">
              ●
            </div>
            <span className="text-xs font-bold text-brand-blue">Psychometric</span>
          </div>
          <div className="w-12 h-0.5 bg-slate-200" />
          <div className="flex flex-col items-center gap-1 opacity-50">
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">
              🔒
            </div>
            <span className="text-xs font-medium text-slate-500">Interview Ready</span>
          </div>
        </div>
      </GlassCard>

      {/* Strategy Feature Cards & Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard variant="white" className="p-5 space-y-2">
            <Sparkles className="w-5 h-5 text-brand-blue" />
            <h5 className="font-bold text-sm text-brand-dark">Improve Problem Solving</h5>
            <p className="text-xs text-brand-muted">Master complex logic and analytical patterns.</p>
          </GlassCard>
          <GlassCard variant="white" className="p-5 space-y-2">
            <MessageSquare className="w-5 h-5 text-brand-blue" />
            <h5 className="font-bold text-sm text-brand-dark">Enhance Communication</h5>
            <p className="text-xs text-brand-muted">Polish your verbal and written fluency for corporates.</p>
          </GlassCard>
          <GlassCard variant="white" className="p-5 space-y-2">
            <Award className="w-5 h-5 text-brand-blue" />
            <h5 className="font-bold text-sm text-brand-dark">Become Placement Ready</h5>
            <p className="text-xs text-brand-muted">Get the 'Certified' badge for your resume.</p>
          </GlassCard>
        </div>

        <div className="lg:col-span-4">
          <GlassCard variant="dark" className="p-6 space-y-4">
            <h4 className="font-display font-bold text-base">Performance Snapshot</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Avg Score</span>
                <span className="font-bold text-brand-lime text-base">81%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Completed</span>
                <span className="font-bold text-white text-base">2 / 3</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Avg Time</span>
                <span className="font-bold text-white text-base">38m</span>
              </div>
              <div className="pt-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  YOUR BEST SUBJECT
                </span>
                <p className="font-bold text-white mt-0.5">Logical Reasoning</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
