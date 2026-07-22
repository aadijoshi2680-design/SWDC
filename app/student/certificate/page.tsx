"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import {
  Award,
  Download,
  Share2,
  Printer,
  CheckCircle2,
  QrCode,
  ArrowRight,
  ShieldCheck,
  Linkedin,
  Copy,
  ExternalLink,
} from "lucide-react";

export default function CertificatePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://prepwise.ai/verify/PW-2026-000123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header Banner */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <Badge variant="lime" dot className="px-4 py-1">
          CERTIFICATE UNLOCKED
        </Badge>
        <h1 className="font-display text-4xl font-bold text-brand-dark tracking-tight">
          Placement Ready Certificate
        </h1>
        <p className="text-xs text-brand-muted">
          Congratulations! You have successfully completed the PrepWise AI Placement Readiness Program.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Certificate Preview Display */}
        <div className="lg:col-span-8 space-y-6">
          <GlassCard variant="white" className="p-8 sm:p-12 border-4 border-slate-100 shadow-2xl relative space-y-8 text-center overflow-hidden">
            {/* Elegant Corner Borders */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-500" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-500" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500" />

            <div className="space-y-2">
              <span className="font-display font-bold text-xl text-brand-blue tracking-tight">
                PrepWise AI
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-widest uppercase">
                CERTIFICATE
              </h2>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                OF COMPLETION
              </p>
            </div>

            <div className="space-y-2 py-2">
              <span className="text-xs italic text-slate-500">This is to certify that</span>
              <h3 className="font-display font-extrabold text-3xl text-brand-dark underline decoration-brand-blue underline-offset-8">
                Alex Johnson
              </h3>
            </div>

            <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
              has successfully achieved the proficiency standards of the <br />
              <strong className="text-brand-dark font-bold">Placement Readiness Program</strong> <br />
              demonstrating excellence in technical, analytical, and professional communication domains.
            </p>

            {/* Official Seal and Signatures */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200 text-xs">
              <div className="text-left space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">UNIQUE ID</span>
                <span className="font-mono font-bold text-brand-dark">PW-2026-000123</span>
              </div>

              {/* Gold Official Emblem */}
              <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-400 flex flex-col items-center justify-center text-[10px] font-bold text-amber-700 shadow-md shrink-0">
                <ShieldCheck className="w-6 h-6 text-amber-500" />
                <span>OFFICIAL</span>
              </div>

              <div className="text-right space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">PROGRAM DIRECTOR</span>
                <span className="font-semibold text-brand-dark">Dr. Robert Chen</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-4 border-t border-slate-100">
              <span>ISSUE DATE: 15 July 2026</span>
              <span>VALIDITY: LIFETIME</span>
              <span className="flex items-center gap-1 font-semibold text-brand-blue">
                <QrCode className="w-4 h-4" /> SCAN TO VERIFY
              </span>
            </div>
          </GlassCard>

          {/* Status Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <GlassCard variant="white" className="p-4 text-center space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">STATUS</span>
              <div className="flex items-center justify-center gap-1 font-bold text-xs text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified
              </div>
            </GlassCard>

            <GlassCard variant="white" className="p-4 text-center space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">CERTIFICATE ID</span>
              <p className="font-mono font-bold text-xs text-brand-dark">PW-2026-000123</p>
            </GlassCard>

            <GlassCard variant="white" className="p-4 text-center space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">ISSUE DATE</span>
              <p className="font-semibold text-xs text-brand-dark">15 July 2026</p>
            </GlassCard>

            <GlassCard variant="white" className="p-4 text-center space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">VALIDITY</span>
              <p className="font-semibold text-xs text-brand-dark">Lifetime</p>
            </GlassCard>
          </div>
        </div>

        {/* Right Column: Actions & Verification */}
        <div className="lg:col-span-4 space-y-6">
          {/* Main Action Button */}
          <GlassCard variant="white" className="p-6 space-y-4">
            <PrimaryButton variant="primary" fullWidth size="lg" icon={<Download className="w-4 h-4" />}>
              Download Certificate
            </PrimaryButton>

            <div className="grid grid-cols-3 gap-2">
              <button className="py-2 px-3 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" /> Verify
              </button>
              <button className="py-2 px-3 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center gap-1">
                <Share2 className="w-3.5 h-3.5 text-brand-blue" /> Share
              </button>
              <button className="py-2 px-3 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center gap-1">
                <Printer className="w-3.5 h-3.5 text-brand-blue" /> Print
              </button>
            </div>
          </GlassCard>

          {/* Modules Completed Checklist */}
          <GlassCard variant="white" className="p-6 space-y-3">
            <h4 className="font-display font-bold text-sm text-brand-dark">Modules Completed</h4>
            <div className="space-y-2 text-xs">
              {[
                "Aptitude Mastery",
                "Business English",
                "Psychometric Evaluation",
                "Resume/ATS Optimization",
                "AI Interview Simulation",
                "Final Readiness Evaluation",
              ].map((m, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Verification Link Box */}
          <GlassCard variant="soft" className="p-5 space-y-2 text-xs">
            <h4 className="font-bold text-brand-dark">Public Verification</h4>
            <p className="text-[11px] text-slate-500">
              Verify Link: <code className="text-brand-blue font-bold">prepwise.ai/verify/PW-2026-000123</code>
            </p>
          </GlassCard>

          {/* Share Achievement Buttons */}
          <GlassCard variant="white" className="p-6 space-y-3">
            <h4 className="font-display font-bold text-sm text-brand-dark">Share Achievement</h4>
            <div className="space-y-2">
              <button className="w-full py-2.5 px-4 text-xs font-bold rounded-xl border border-brand-border hover:bg-slate-50 flex items-center justify-center gap-2 text-slate-700">
                <Linkedin className="w-4 h-4 text-blue-600" /> Share on LinkedIn
              </button>
              <button
                onClick={handleCopyLink}
                className="w-full py-2.5 px-4 text-xs font-bold rounded-xl border border-brand-border hover:bg-slate-50 flex items-center justify-center gap-2 text-slate-700"
              >
                <Copy className="w-4 h-4 text-slate-400" />
                {copied ? "Copied to Clipboard!" : "Copy Verification Link"}
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
