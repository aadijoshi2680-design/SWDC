"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Clock, Flag, ChevronLeft, ChevronRight, LogOut, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

export default function AptitudeTestPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(12);
  const [selectedOption, setSelectedOption] = useState<number | null>(1); // Option B selected
  const [flagged, setFlagged] = useState<number[]>([8, 13, 17]);
  const [answered, setAnswered] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12]);

  const options = ["45 km/h", "60 km/h", "55 km/h", "70 km/h"];

  const toggleFlag = () => {
    if (flagged.includes(currentQ)) {
      setFlagged(flagged.filter((q) => q !== currentQ));
    } else {
      setFlagged([...flagged, currentQ]);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans">
      {/* Test Top Navigation Bar */}
      <header className="bg-white border-b border-brand-border px-8 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg text-brand-dark">PrepWise AI</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-semibold text-slate-600">Assessment: <strong className="text-brand-dark">Aptitude Test</strong></span>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-xs">
            <span className="text-slate-400 font-medium uppercase tracking-wider block text-[10px]">PROGRESS</span>
            <span className="font-bold text-brand-dark">Question {currentQ} / 40</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full font-mono text-xs font-bold border border-rose-200">
            <Clock className="w-3.5 h-3.5" />
            <span>31:42</span>
          </div>

          <Link href="/student/assessments">
            <PrimaryButton variant="secondary" size="sm" icon={<LogOut className="w-3.5 h-3.5" />}>
              Exit Test
            </PrimaryButton>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-6">
        {/* Test Subheader & Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <h2 className="font-display text-2xl font-bold text-brand-dark">Aptitude Assessment</h2>
            <span className="font-bold text-brand-blue">30% Completed</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-brand-blue rounded-full" style={{ width: "30%" }} />
          </div>
        </div>

        {/* Test Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Question Panel */}
          <div className="lg:col-span-8 space-y-6">
            <GlassCard variant="white" className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                  QUESTION {currentQ}
                </span>
                <div className="flex items-center gap-2">
                  <Badge variant="soft">Logical Reasoning</Badge>
                  <Badge variant="outline">Intermediate</Badge>
                </div>
              </div>

              <h3 className="font-display font-semibold text-lg text-brand-dark leading-relaxed">
                A train travels 240 km in 4 hours. What is its average speed?
              </h3>

              {/* MCQ Options */}
              <div className="space-y-3 pt-2">
                {options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const letter = String.fromCharCode(65 + idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedOption(idx)}
                      className={clsx(
                        "p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between",
                        isSelected
                          ? "bg-brand-blue/5 border-brand-blue text-brand-dark font-semibold shadow-sm"
                          : "bg-white border-brand-border hover:border-slate-300 text-slate-700"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={clsx(
                            "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs",
                            isSelected
                              ? "bg-brand-blue text-white"
                              : "bg-slate-100 text-slate-600"
                          )}
                        >
                          {letter}
                        </span>
                        <span className="text-sm">{opt}</span>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-brand-blue" />}
                    </div>
                  );
                })}
              </div>
            </GlassCard>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <PrimaryButton
                variant="secondary"
                size="md"
                disabled={currentQ === 1}
                onClick={() => setCurrentQ(Math.max(1, currentQ - 1))}
                icon={<ChevronLeft className="w-4 h-4" />}
                iconPosition="left"
              >
                Previous
              </PrimaryButton>

              <PrimaryButton
                variant={flagged.includes(currentQ) ? "lime" : "outline"}
                size="md"
                onClick={toggleFlag}
                icon={<Flag className="w-4 h-4" />}
              >
                {flagged.includes(currentQ) ? "Flagged" : "Flag for Review"}
              </PrimaryButton>

              <PrimaryButton
                variant="primary"
                size="md"
                onClick={() => {
                  if (currentQ < 40) setCurrentQ(currentQ + 1);
                  else router.push("/student/assessments/results");
                }}
                icon={<ChevronRight className="w-4 h-4" />}
              >
                Next
              </PrimaryButton>
            </div>
          </div>

          {/* Right Question Navigator Side Panel */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard variant="white" className="p-6 space-y-6">
              <h4 className="font-display font-bold text-xs text-brand-dark uppercase tracking-wider">
                QUESTION NAVIGATOR
              </h4>

              {/* 40 Grid buttons */}
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 40 }).map((_, idx) => {
                  const qNum = idx + 1;
                  const isCurrent = qNum === currentQ;
                  const isAns = answered.includes(qNum);
                  const isFlag = flagged.includes(qNum);

                  return (
                    <button
                      key={qNum}
                      onClick={() => setCurrentQ(qNum)}
                      className={clsx(
                        "h-9 rounded-xl font-bold text-xs transition-all flex items-center justify-center relative",
                        isCurrent
                          ? "ring-2 ring-brand-blue font-extrabold bg-white text-brand-blue border border-brand-blue"
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

              {/* Grid Legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-brand-blue" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded border-2 border-brand-blue bg-white" />
                  <span>Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-amber-400" />
                  <span>Flagged</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-slate-100" />
                  <span>Not Visited</span>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="bg-slate-50 p-4 rounded-2xl space-y-2 text-xs border border-slate-200">
                <div className="font-bold text-brand-dark uppercase tracking-wider text-[10px]">SUMMARY</div>
                <div className="flex justify-between">
                  <span>Answered</span>
                  <span className="font-bold text-brand-blue">{answered.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Remaining</span>
                  <span className="font-bold text-slate-600">{40 - answered.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Flagged</span>
                  <span className="font-bold text-amber-600">{flagged.length}</span>
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
