"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Clock, ShieldCheck, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { clsx } from "clsx";

export default function PsychometricTestPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(8);
  const [likertValue, setLikertValue] = useState<number | null>(3); // 3 = Agree

  const likertOptions = [
    { label: "Strongly Disagree", val: 0 },
    { label: "Disagree", val: 1 },
    { label: "Neutral", val: 2 },
    { label: "Agree", val: 3 },
    { label: "Strongly Agree", val: 4 },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans">
      <header className="bg-white border-b border-brand-border px-8 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg text-brand-dark">PrepWise AI</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-semibold text-slate-600">Assessment: <strong className="text-brand-dark">Psychometric Assessment</strong></span>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-xs font-bold text-slate-700">Question 8 / 30</div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-mono text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-brand-blue" />
            <span>12 min</span>
          </div>
          <Link href="/student/assessments">
            <PrimaryButton variant="secondary" size="sm" icon={<LogOut className="w-3.5 h-3.5" />}>
              Exit Assessment
            </PrimaryButton>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-3xl font-bold text-brand-dark">Psychometric Assessment</h2>
          <p className="text-xs text-brand-muted">
            There are no right or wrong answers. Respond honestly based on how you naturally think, communicate and work.
          </p>

          <div className="flex justify-between items-center text-xs font-mono pt-2">
            <span className="text-slate-500 uppercase tracking-wider">CURRENT COMPLETION</span>
            <span className="font-bold text-brand-dark">27% Overall</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-brand-blue rounded-full" style={{ width: "27%" }} />
          </div>
        </div>

        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-xs text-emerald-800">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Your responses are strictly confidential and will only be used to generate your personalized leadership profile for PrepWise AI coaching insights.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <GlassCard variant="white" className="p-8 md:p-12 space-y-8 min-h-[360px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs">
                <Badge variant="blue">LEADERSHIP</Badge>
                <span className="font-mono text-slate-400">Q8 / 30</span>
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-brand-dark leading-relaxed text-center">
                "I enjoy taking responsibility for leading group discussions and making important decisions."
              </h3>

              {/* 5 Likert Scale Radio Selector */}
              <div className="grid grid-cols-5 gap-4 py-4 text-center">
                {likertOptions.map((opt) => {
                  const isSelected = likertValue === opt.val;
                  return (
                    <div
                      key={opt.val}
                      onClick={() => setLikertValue(opt.val)}
                      className="flex flex-col items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={clsx(
                          "w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center",
                          isSelected
                            ? "bg-brand-blue border-brand-blue ring-4 ring-brand-blue/20 scale-110"
                            : "border-slate-300 bg-white group-hover:border-brand-blue"
                        )}
                      >
                        {isSelected && <span className="w-4 h-4 rounded-full bg-white" />}
                      </div>
                      <span
                        className={clsx(
                          "text-xs transition-colors font-medium",
                          isSelected ? "font-bold text-brand-blue" : "text-slate-500"
                        )}
                      >
                        {opt.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </GlassCard>

            <div className="flex items-center justify-between">
              <PrimaryButton
                variant="secondary"
                size="md"
                onClick={() => setCurrentQ(Math.max(1, currentQ - 1))}
                icon={<ChevronLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                Back
              </PrimaryButton>

              <PrimaryButton
                variant="primary"
                size="md"
                onClick={() => router.push("/student/assessments/results")}
                icon={<ChevronRight className="w-4 h-4" />}
              >
                Next
              </PrimaryButton>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <GlassCard variant="white" className="p-6 space-y-6">
              <h4 className="font-display font-bold text-sm text-brand-dark">Progress Summary</h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-blue-light p-4 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">COMPLETED</span>
                  <p className="font-display font-extrabold text-2xl text-brand-blue mt-1">08</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">REMAINING</span>
                  <p className="font-display font-extrabold text-2xl text-slate-700 mt-1">22</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>Question Navigator</span>
                  <span className="text-slate-400 text-[11px]">30 Questions Total</span>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {Array.from({ length: 30 }).map((_, idx) => {
                    const qNum = idx + 1;
                    const isAns = qNum <= 8;
                    const isCurrent = qNum === currentQ;
                    return (
                      <button
                        key={qNum}
                        onClick={() => setCurrentQ(qNum)}
                        className={clsx(
                          "h-8 rounded-xl font-bold text-xs transition-all",
                          isCurrent
                            ? "ring-2 ring-brand-blue bg-white text-brand-blue border border-brand-blue"
                            : isAns
                            ? "bg-brand-blue text-white"
                            : "bg-slate-100 text-slate-400"
                        )}
                      >
                        {qNum}
                      </button>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}
