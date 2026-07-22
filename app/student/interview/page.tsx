"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Clock,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  PhoneOff,
  LogOut,
  Sparkles,
  Maximize2,
  Settings,
  MessageSquare,
} from "lucide-react";
import { clsx } from "clsx";

export default function AiInterviewPage() {
  const router = useRouter();
  const [micActive, setMicActive] = useState(true);
  const [cameraActive, setCameraActive] = useState(true);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(2); // Q3 of 10

  const questions = [
    "Tell me about yourself and your background in Computer Engineering.",
    "What is the difference between SQL and NoSQL databases?",
    "Explain the difference between Stack and Queue and provide one real-world application of each.",
    "How do you handle rate-limiting in high-concurrency microservices?",
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans">
      {/* Interview Top Navigation Bar */}
      <header className="bg-white border-b border-brand-border px-8 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg text-brand-dark">PrepWise AI</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-semibold text-slate-600">Interview Session</span>
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 bg-rose-100 text-rose-700 font-bold text-[10px] rounded-full animate-pulse">
            <span className="w-2 h-2 rounded-full bg-rose-600" /> REC
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full font-mono text-xs font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>27:14</span>
          </div>

          <button className="p-2 text-slate-500 hover:text-brand-dark rounded-xl hover:bg-slate-100">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="p-2 text-slate-500 hover:text-brand-dark rounded-xl hover:bg-slate-100">
            <Settings className="w-4 h-4" />
          </button>

          <Link href="/student/dashboard">
            <PrimaryButton variant="secondary" size="sm" icon={<LogOut className="w-3.5 h-3.5" />}>
              Exit Interview
            </PrimaryButton>
          </Link>
        </div>
      </header>

      {/* Main Session Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: AI Video Stream & Question Container */}
          <div className="lg:col-span-8 space-y-6">
            {/* AI Avatar Video Feed */}
            <div className="relative rounded-[28px] overflow-hidden bg-slate-950 aspect-video shadow-2xl border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=80"
                alt="AI Interviewer"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Status Badges Overlay */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold rounded-full flex items-center gap-1.5 border border-white/10">
                  <Video className="w-3.5 h-3.5 text-emerald-400" /> CAMERA ACTIVE
                </span>
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold rounded-full flex items-center gap-1.5 border border-white/10">
                  <Mic className="w-3.5 h-3.5 text-emerald-400" /> MIC ACTIVE
                </span>
              </div>

              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[11px] font-bold rounded-full flex items-center gap-1.5 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> STRONG CONNECTION
                </span>
              </div>

              <div className="absolute bottom-4 left-4 text-white/40 text-[10px] font-mono tracking-widest uppercase">
                PREPWISE AI LIVE
              </div>
            </div>

            {/* Current Question Stem Card */}
            <GlassCard variant="white" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  QUESTION {currentQuestionIdx + 1} OF 10
                </span>
                <button className="flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline">
                  <RotateCcw className="w-3.5 h-3.5" /> Replay Question
                </button>
              </div>
              <div className="text-xs text-brand-muted font-medium">
                Technical Interview • Data Structures
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-dark leading-relaxed">
                {questions[currentQuestionIdx]}
              </h3>
            </GlassCard>
          </div>

          {/* Right Column: Live Transcript Panel */}
          <div className="lg:col-span-4 h-[600px] flex flex-col">
            <GlassCard variant="white" className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="font-display font-bold text-sm text-brand-dark flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-blue" /> Live Transcript
                </h4>
                <Badge variant="soft">AUTO-GEN</Badge>
              </div>

              {/* Transcript Speech Bubbles */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-xs leading-relaxed">
                <div className="text-slate-400 italic text-[11px]">[System]: Question started...</div>

                <div className="p-4 bg-brand-blue-light/60 rounded-2xl border border-brand-blue/20 text-brand-dark space-y-2">
                  <p>
                    I think Stack follows the LIFO principle, which stands for Last-In-First-Out. A common real-world example would be a stack of plates in a cafeteria where you pick the one placed last.
                  </p>
                  <p>
                    On the other hand, a Queue follows FIFO, or First-In-First-Out. Think of people standing in a line at a movie theater ticket counter ... the first person gets served first.
                  </p>
                </div>
              </div>

              {/* Live Listening Status */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Listening...</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>

      {/* Bottom Floating Control Bar */}
      <footer className="sticky bottom-0 z-40 bg-white/90 backdrop-blur-md border-t border-brand-border py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMicActive(!micActive)}
              className={clsx(
                "w-11 h-11 rounded-full flex items-center justify-center transition-colors",
                micActive ? "bg-slate-100 text-brand-dark hover:bg-slate-200" : "bg-rose-100 text-rose-600"
              )}
            >
              {micActive ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setCameraActive(!cameraActive)}
              className={clsx(
                "w-11 h-11 rounded-full flex items-center justify-center transition-colors",
                cameraActive ? "bg-slate-100 text-brand-dark hover:bg-slate-200" : "bg-rose-100 text-rose-600"
              )}
            >
              {cameraActive ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <PrimaryButton
              variant="secondary"
              size="md"
              disabled={currentQuestionIdx === 0}
              onClick={() => setCurrentQuestionIdx(Math.max(0, currentQuestionIdx - 1))}
              icon={<ChevronLeft className="w-4 h-4" />}
              iconPosition="left"
            >
              Previous
            </PrimaryButton>

            <PrimaryButton
              variant="primary"
              size="md"
              onClick={() => {
                if (currentQuestionIdx < questions.length - 1) {
                  setCurrentQuestionIdx(currentQuestionIdx + 1);
                } else {
                  router.push("/student/interview/report");
                }
              }}
              icon={<ChevronRight className="w-4 h-4" />}
            >
              Next Question
            </PrimaryButton>
          </div>

          <PrimaryButton
            variant="outline"
            size="md"
            onClick={() => router.push("/student/interview/report")}
            className="text-rose-600 border-rose-200 hover:bg-rose-50"
            icon={<PhoneOff className="w-4 h-4" />}
          >
            End Interview
          </PrimaryButton>
        </div>
      </footer>
    </div>
  );
}
