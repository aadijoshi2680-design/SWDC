"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Clock, Flag, ChevronLeft, ChevronRight, LogOut, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

export default function EnglishTestPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(8);
  const [selectedOption, setSelectedOption] = useState<number | null>(2);
  const [flagged, setFlagged] = useState<number[]>([4, 10]);

  const options = [
    "She don't like coffee",
    "She doesn't likes coffee",
    "She doesn't like coffee",
    "She not likes coffee",
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans">
      <header className="bg-white border-b border-brand-border px-8 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg text-brand-dark">PrepWise AI</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-semibold text-slate-600">Assessment: <strong className="text-brand-dark">English Assessment</strong></span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-mono text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-brand-blue" />
            <span>24:04</span>
          </div>

          <div className="text-xs font-bold text-slate-700">Question 8 / 35</div>

          <Link href="/student/assessments">
            <PrimaryButton variant="secondary" size="sm" icon={<LogOut className="w-3.5 h-3.5" />}>
              Exit Assessment
            </PrimaryButton>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <h2 className="font-display text-2xl text-brand-dark">English Assessment</h2>
            <span className="text-brand-blue">23% COMPLETE</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-brand-blue rounded-full" style={{ width: "23%" }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <GlassCard variant="white" className="p-8 space-y-6">
              <Badge variant="blue">GRAMMAR MULTIPLE CHOICE</Badge>

              <h3 className="font-display font-semibold text-lg text-brand-dark leading-relaxed">
                Identify the grammatically correct sentence from the options provided below.
              </h3>

              <div className="space-y-3 pt-2">
                {options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedOption(idx)}
                      className={clsx(
                        "p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between",
                        isSelected
                          ? "bg-brand-blue/5 border-brand-blue font-semibold text-brand-dark"
                          : "bg-white border-brand-border text-slate-700 hover:border-slate-300"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={clsx(
                            "w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold",
                            isSelected
                              ? "bg-brand-blue text-white border-brand-blue"
                              : "border-slate-300 bg-white"
                          )}
                        >
                          {isSelected && "✓"}
                        </span>
                        <span className="text-sm">{opt}</span>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-brand-blue" />}
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
                Previous
              </PrimaryButton>

              <PrimaryButton
                variant="outline"
                size="md"
                onClick={() => setFlagged([...flagged, currentQ])}
                icon={<Flag className="w-4 h-4" />}
              >
                Flag for Review
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
              <h4 className="font-display font-bold text-xs text-brand-dark uppercase tracking-wider">
                QUESTION NAVIGATOR
              </h4>

              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 35 }).map((_, idx) => {
                  const qNum = idx + 1;
                  const isCurrent = qNum === currentQ;
                  const isAns = qNum <= 8;
                  const isFlag = flagged.includes(qNum);

                  return (
                    <button
                      key={qNum}
                      onClick={() => setCurrentQ(qNum)}
                      className={clsx(
                        "h-9 rounded-xl font-bold text-xs transition-all flex items-center justify-center",
                        isCurrent
                          ? "ring-2 ring-brand-blue bg-white text-brand-blue border border-brand-blue"
                          : isAns
                          ? "bg-brand-blue text-white"
                          : isFlag
                          ? "bg-amber-400 text-brand-dark"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      )}
                    >
                      {qNum}
                    </button>
                  );
                })}
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl space-y-2 text-xs border border-slate-200">
                <div className="font-bold text-brand-dark uppercase text-[10px]">Summary</div>
                <div className="flex justify-between">
                  <span>Answered Questions</span>
                  <span className="font-bold text-brand-blue">08</span>
                </div>
                <div className="flex justify-between">
                  <span>Questions Remaining</span>
                  <span className="font-bold text-slate-600">27</span>
                </div>
                <div className="flex justify-between">
                  <span>Flagged for Review</span>
                  <span className="font-bold text-amber-600">02</span>
                </div>
              </div>
            </GlassCard>

            <div className="flex items-center justify-center gap-2 p-3 bg-emerald-50 text-emerald-700 rounded-2xl text-xs font-semibold border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Answers Saved Automatically</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
