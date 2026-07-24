"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Award,
  BarChart3,
  Bot,
  FileCheck,
  ChevronDown,
  ShieldCheck,
  Building2,
  Zap,
  Users,
  Tv,
  Gamepad2,
  GraduationCap,
  Flame,
  Check,
  Brain,
  MessageSquare,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeQuizOption, setActiveQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: "Aptitude & Reasoning",
      desc: "Master quantitative logic, spatial reasoning & data interpretation with step-by-step video solutions.",
      badge: "POPULAR",
      badgeColor: "yellow" as const,
      link: "/student/assessments",
      accent: "border-genz-yellow",
    },
    {
      icon: MessageSquare,
      title: "English & Fluency AI",
      desc: "Instant feedback on grammar, corporate vocab, speaking pace, and vocabulary confidence score.",
      badge: "HOT",
      badgeColor: "pink" as const,
      link: "/student/assessments",
      accent: "border-genz-pink",
    },
    {
      icon: Bot,
      title: "AI Mock Interviews",
      desc: "Interactive live technical & HR mock interviews with real-time feedback report card.",
      badge: "AI-POWERED",
      badgeColor: "blue" as const,
      link: "/student/interview",
      accent: "border-genz-blue",
    },
    {
      icon: FileCheck,
      title: "Resume ATS Matcher",
      desc: "Scan your resume against top tech company job descriptions and boost keyword density.",
      badge: "VERIFIED",
      badgeColor: "green" as const,
      link: "/student/ats-analysis",
      accent: "border-genz-green",
    },
  ];

  const quizQuestion = {
    question: "If 6 coders can write 18 microservices in 3 days, how many microservices can 10 coders write in 5 days?",
    options: ["30 Microservices", "50 Microservices", "45 Microservices", "60 Microservices"],
    correct: 1,
  };

  const roadmapSteps = [
    { label: "Sign Up", bg: "bg-genz-yellow" },
    { label: "Aptitude Assessment", bg: "bg-genz-orange" },
    { label: "English Fluency", bg: "bg-genz-pink" },
    { label: "AI Tech Interview", bg: "bg-genz-blue" },
    { label: "HR Behavioral", bg: "bg-genz-green" },
    { label: "Resume ATS Score", bg: "bg-genz-yellow" },
    { label: "Verified Badge", bg: "bg-genz-orange" },
  ];

  const faqs = [
    {
      q: "What makes PrepWise AI's Gen Z Vintage style unique for learning?",
      a: "We combine retro arcade game-like interactive practice challenges with real-world AI placement analytics. It keeps study sessions high-energy, fun, and ultra-effective.",
    },
    {
      q: "How does the AI mock interview evaluation work?",
      a: "Our AI engine analyzes your voice pitch, grammar accuracy, keyword density, and technical correctness to deliver an instant diagnostic report with actionable tips.",
    },
    {
      q: "Are the placement certificates verifiable by recruiters?",
      a: "Yes! Every certificate issued carries a unique cryptographic ID and tamper-proof QR code that employers can instantly verify on our public verification portal.",
    },
    {
      q: "Can I practice assessments on mobile devices?",
      a: "Absolutely. The platform is 100% responsive and optimized for practice sessions on any smartphone, tablet, or desktop screen.",
    },
  ];

  return (
    <div className="min-h-screen bg-genz-cream text-genz-dark flex flex-col font-sans selection:bg-genz-yellow selection:text-genz-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* Retro Blobs & Background Flares */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[350px] bg-genz-yellow/25 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-genz-pink/25 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-60 left-10 w-72 h-72 bg-genz-orange/20 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Top Sticker Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-genz-yellow/85 border border-white/60 text-genz-dark text-xs font-black shadow-lg shadow-genz-yellow/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-genz-dark animate-spin" />
              <span>THE COOL WAY TO CRACK PLACEMENTS</span>
              <span className="bg-genz-orange/90 text-white text-[10px] px-2 py-0.5 rounded-md font-bold uppercase backdrop-blur-sm">
                VINTAGE v2.0
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-genz-dark leading-[1.12]">
              Level Up Your Skills. <br />
              <span className="bg-genz-yellow/90 text-genz-dark px-3 py-0.5 rounded-xl border border-white/50 inline-block shadow-lg shadow-genz-yellow/25 backdrop-blur-md my-1">
                Crack Placements.
              </span> <br />
              <span className="text-genz-blue">Ace Every AI Interview.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 max-w-lg font-semibold leading-relaxed">
              PrepWise AI combines retro arcade learning energy with cutting-edge AI evaluations: aptitude drills, English communication scoring, live mock interviews, and ATS resume verification.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/signup">
                <PrimaryButton variant="orange" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Start Learning Now
                </PrimaryButton>
              </Link>
              <Link href="/student/dashboard">
                <PrimaryButton variant="blue" size="lg" icon={<Gamepad2 className="w-5 h-5" />}>
                  Try Demo Arcade
                </PrimaryButton>
              </Link>
            </div>

            {/* Quick stats pills */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-bold">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-md shadow-slate-900/5">
                <Flame className="w-4 h-4 text-genz-orange" />
                <span>15,000+ Active Learners</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-genz-pink/35 backdrop-blur-md border border-white/80 shadow-md shadow-genz-pink/15">
                <Trophy className="w-4 h-4 text-genz-dark" />
                <span>94.8% Placement Pass Rate</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Brain Video (No starting zoom animation, 2% reduced size) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl lg:max-w-2xl rounded-3xl overflow-hidden">
              <video
                src="/brain.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain rounded-3xl scale-[1.08]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Trust & Social Proof Statistics Section */}
      <section className="py-12 px-6 bg-white/30 border-y border-white/60 backdrop-blur-md relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
            {[
              { label: "Active Students Enrolled", val: "15,000+", icon: Users, color: "text-genz-yellow", bg: "bg-genz-yellow/15", border: "border-genz-yellow/30" },
              { label: "AI Mock Interviews", val: "50,000+", icon: Bot, color: "text-genz-blue", bg: "bg-genz-blue/15", border: "border-genz-blue/30" },
              { label: "ATS Resume Analyses", val: "85,000+", icon: FileCheck, color: "text-genz-green", bg: "bg-genz-green/15", border: "border-genz-green/30" },
              { label: "Placement Pass Rate", val: "94.8%", icon: Trophy, color: "text-genz-pink", bg: "bg-genz-pink/15", border: "border-genz-pink/30" },
              { label: "Partner Colleges", val: "120+", icon: GraduationCap, color: "text-genz-orange", bg: "bg-genz-orange/15", border: "border-genz-orange/30" },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white/70 backdrop-blur-xl p-5 rounded-3xl border border-white/80 shadow-lg shadow-slate-900/5 flex flex-col justify-between space-y-3 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-genz-dark tracking-tight">{stat.val}</span>
                    <div className={`w-9 h-9 rounded-full ${stat.bg} ${stat.color} ${stat.border} border flex items-center justify-center backdrop-blur-sm shadow-sm`}>
                      <StatIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-slate-600 leading-snug">{stat.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards Section with Interactive Product Previews */}
      <section id="features" className="py-24 px-6 bg-white/40 border-b border-white/60 relative backdrop-blur-md">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="pink" size="md">
              POWERFUL LEARNING TRACKS
            </Badge>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-genz-dark">
              Built For Serious Results. <br />
              <span className="text-genz-orange">Styled For Gen Z.</span>
            </h2>
            <p className="text-sm font-semibold text-slate-600">
              Interactive, gamified preparation modules designed to maximize your assessment scores and mock interview performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {/* Module 1: Aptitude & Reasoning with Interactive Mini Quiz */}
            <GlassCard
              variant="white"
              className="p-6 space-y-5 border border-white/80 group hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-genz-dark/90 text-genz-yellow border border-white/20 flex items-center justify-center shadow-lg shadow-black/15 backdrop-blur-md group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <Badge variant="yellow" size="sm">
                    POPULAR
                  </Badge>
                </div>

                <h3 className="font-display font-extrabold text-xl text-genz-dark">Aptitude & Reasoning</h3>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  Master quantitative logic, spatial reasoning & data interpretation with video solutions.
                </p>

                {/* Interactive Mini Quiz Preview */}
                <div className="bg-genz-cream/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-bold text-genz-dark">
                    <span>Quick Drill</span>
                    <span className="text-genz-orange font-mono">Q. 6 Coders / 18 Services</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    {[
                      { text: "30 Serv", isCorrect: false },
                      { text: "50 Serv", isCorrect: true },
                      { text: "45 Serv", isCorrect: false },
                      { text: "60 Serv", isCorrect: false },
                    ].map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => {
                          setActiveQuizOption(oIdx);
                          setQuizSubmitted(true);
                        }}
                        className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold border transition-all text-center ${
                          activeQuizOption === oIdx
                            ? opt.isCorrect
                              ? "bg-genz-green text-white border-genz-green shadow-sm"
                              : "bg-rose-500 text-white border-rose-500 shadow-sm"
                            : "bg-white/80 text-genz-dark border-slate-200/80 hover:bg-genz-yellow/20"
                        }`}
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/student/assessments">
                  <PrimaryButton variant="yellow" size="sm" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Module
                  </PrimaryButton>
                </Link>
              </div>
            </GlassCard>

            {/* Module 2: English & Fluency AI with Speech Score Meter */}
            <GlassCard
              variant="white"
              className="p-6 space-y-5 border border-white/80 group hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-genz-dark/90 text-genz-pink border border-white/20 flex items-center justify-center shadow-lg shadow-black/15 backdrop-blur-md group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <Badge variant="pink" size="sm">
                    HOT
                  </Badge>
                </div>

                <h3 className="font-display font-extrabold text-xl text-genz-dark">English & Fluency AI</h3>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  Instant feedback on grammar, corporate vocab, speaking pace, and confidence score.
                </p>

                {/* Speech Score Mini Meter */}
                <div className="bg-genz-pink/15 backdrop-blur-md p-3.5 rounded-2xl border border-genz-pink/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-genz-dark text-[11px]">
                    <span>Fluency Score</span>
                    <span className="text-genz-pink font-extrabold">94 / 100</span>
                  </div>
                  <div className="w-full h-2 bg-white/80 rounded-full overflow-hidden">
                    <div className="h-full bg-genz-pink rounded-full" style={{ width: "94%" }} />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-600 font-semibold pt-0.5">
                    <span>Pace: 145 wpm</span>
                    <span>Fillers: &lt;1%</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/student/assessments">
                  <PrimaryButton variant="pink" size="sm" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Module
                  </PrimaryButton>
                </Link>
              </div>
            </GlassCard>

            {/* Module 3: AI Mock Interviews with Waveform Simulator */}
            <GlassCard
              variant="white"
              className="p-6 space-y-5 border border-white/80 group hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-genz-dark/90 text-genz-blue border border-white/20 flex items-center justify-center shadow-lg shadow-black/15 backdrop-blur-md group-hover:scale-110 transition-transform">
                    <Bot className="w-6 h-6" />
                  </div>
                  <Badge variant="blue" size="sm">
                    AI-POWERED
                  </Badge>
                </div>

                <h3 className="font-display font-extrabold text-xl text-genz-dark">AI Mock Interviews</h3>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  Interactive live technical & HR mock interviews with real-time feedback report card.
                </p>

                {/* Live Waveform Indicator */}
                <div className="bg-genz-blue/15 backdrop-blur-md p-3.5 rounded-2xl border border-genz-blue/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-genz-dark text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-genz-blue animate-ping" /> Live Audio
                    </span>
                    <span className="text-genz-blue font-extrabold">Active</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 h-6 bg-white/70 rounded-xl px-2">
                    <div className="w-1 bg-genz-blue rounded-full animate-audio-bar-1" />
                    <div className="w-1 bg-genz-blue rounded-full animate-audio-bar-2" />
                    <div className="w-1 bg-genz-blue rounded-full animate-audio-bar-3" />
                    <div className="w-1 bg-genz-blue rounded-full animate-audio-bar-4" />
                    <div className="w-1 bg-genz-blue rounded-full animate-audio-bar-5" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/student/interview">
                  <PrimaryButton variant="blue" size="sm" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Module
                  </PrimaryButton>
                </Link>
              </div>
            </GlassCard>

            {/* Module 4: Resume ATS Matcher with Keyword Scanner */}
            <GlassCard
              variant="white"
              className="p-6 space-y-5 border border-white/80 group hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-genz-dark/90 text-genz-green border border-white/20 flex items-center justify-center shadow-lg shadow-black/15 backdrop-blur-md group-hover:scale-110 transition-transform">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <Badge variant="green" size="sm">
                    VERIFIED
                  </Badge>
                </div>

                <h3 className="font-display font-extrabold text-xl text-genz-dark">Resume ATS Matcher</h3>
                <p className="text-xs font-medium text-slate-600 leading-relaxed">
                  Scan your resume against top tech company job descriptions and boost keyword density.
                </p>

                {/* ATS Matcher Mini Preview */}
                <div className="bg-genz-green/15 backdrop-blur-md p-3.5 rounded-2xl border border-genz-green/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-genz-dark text-[11px]">
                    <span>ATS Match Score</span>
                    <span className="text-genz-green font-extrabold">98.4% Match</span>
                  </div>
                  <div className="w-full h-2 bg-white/80 rounded-full overflow-hidden">
                    <div className="h-full bg-genz-green rounded-full" style={{ width: "98%" }} />
                  </div>
                  <div className="flex items-center gap-1 pt-0.5 text-[10px] text-slate-600 font-semibold">
                    <span className="bg-white/80 px-1.5 py-0.5 rounded text-genz-dark font-bold">React</span>
                    <span className="bg-white/80 px-1.5 py-0.5 rounded text-genz-dark font-bold">Node</span>
                    <span className="bg-white/80 px-1.5 py-0.5 rounded text-genz-dark font-bold">AWS</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/student/ats-analysis">
                  <PrimaryButton variant="green" size="sm" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Module
                  </PrimaryButton>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Horizontal Connected Animated Roadmap Section */}
      <section id="how-it-works" className="py-24 px-6 bg-genz-yellow/10 border-b border-white/50 relative overflow-hidden backdrop-blur-sm">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="yellow" size="md">
              PLACEMENT ROADMAP
            </Badge>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-genz-dark tracking-tight">
              From Zero To Placement Certified
            </h2>
            <p className="text-sm font-semibold text-slate-700">
              Follow our clear step-by-step roadmap to master every phase of campus recruitment.
            </p>
          </div>

          {/* Interactive Connected Roadmap Track with Wavy SVG Path */}
          <div className="relative pt-6 pb-6">
            {/* Animated SVG Wavy Path Line (Drawn slowly on scroll) */}
            <svg
              className="absolute top-2 left-0 right-0 w-full h-28 pointer-events-none hidden md:block overflow-visible z-0"
              viewBox="0 0 1200 100"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="roadmapWavyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FE6622" />
                  <stop offset="25%" stopColor="#FEBE0F" />
                  <stop offset="50%" stopColor="#FFA4BF" />
                  <stop offset="75%" stopColor="#4580B2" />
                  <stop offset="100%" stopColor="#00A56B" />
                </linearGradient>
              </defs>

              {/* Background Guide Line */}
              <path
                d="M 50 50 C 150 10, 230 90, 350 50 C 470 10, 550 90, 670 50 C 790 10, 870 90, 990 50 C 1090 10, 1140 90, 1180 50"
                stroke="rgba(18, 19, 24, 0.12)"
                strokeWidth="6"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />

              {/* Animated Drawing Wavy Line */}
              <motion.path
                d="M 50 50 C 150 10, 230 90, 350 50 C 470 10, 550 90, 670 50 C 790 10, 870 90, 990 50 C 1090 10, 1140 90, 1180 50"
                stroke="url(#roadmapWavyGrad)"
                strokeWidth="7"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3.2, ease: "easeInOut" }}
              />
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 relative z-10">
              {roadmapSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.35 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col items-center text-center space-y-3.5 group cursor-pointer"
                >
                  {/* Circular Frosted Glass Node Shape */}
                  <div
                    className={`w-15 h-15 rounded-full ${step.bg}/90 backdrop-blur-md border border-white/60 text-genz-dark font-black text-lg flex items-center justify-center shadow-lg shadow-black/10 group-hover:scale-110 transition-all duration-300 relative`}
                  >
                    <span>0{idx + 1}</span>
                    {/* Glass Pin */}
                    <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white/90 border border-white/60 shadow-sm" />
                  </div>

                  {/* Step Label Card */}
                  <div className="w-full p-3.5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-md shadow-black/5 group-hover:shadow-xl group-hover:bg-white/90 transition-all duration-300">
                    <span className="text-xs font-black text-genz-dark leading-snug block">
                      {step.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Mock Interview Showcase Section */}
      <section className="py-24 px-6 bg-genz-cream/60 border-b border-white/50 relative overflow-hidden backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="pink" size="md">
              LIVE MOCK INTERVIEWS
            </Badge>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-genz-dark leading-tight">
              Real-Time AI Technical & <br />
              <span className="text-genz-orange">HR Speech Evaluation</span>
            </h2>
            <p className="text-sm text-slate-700 font-semibold leading-relaxed">
              Practice mock interviews powered by advanced speech AI. Get instant scoring on speaking pace, confidence, keyword usage, and technical depth directly on your laptop.
            </p>

            {/* Spacious Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-xl shadow-slate-900/5 flex flex-col justify-between space-y-4 hover:shadow-2xl hover:bg-white/85 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-genz-yellow/90 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-md shadow-genz-yellow/20">
                  <Bot className="w-6 h-6 text-genz-dark" />
                </div>
                <div className="space-y-2">
                  <h5 className="text-base font-black text-genz-dark">Adaptive Question Engine</h5>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                    Questions adapt dynamically to your response depth across Data Structures, Web, ML, & HR.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-xl shadow-slate-900/5 flex flex-col justify-between space-y-4 hover:shadow-2xl hover:bg-white/85 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-genz-pink/90 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-md shadow-genz-pink/20">
                  <Zap className="w-6 h-6 text-genz-dark" />
                </div>
                <div className="space-y-2">
                  <h5 className="text-base font-black text-genz-dark">Instant Speech Analytics</h5>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                    Real-time analysis on filler words, pitch clarity, speaking pace, & response quality.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="pt-2">
              <Link href="/student/interview">
                <PrimaryButton variant="orange" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Start AI Interview Session
                </PrimaryButton>
              </Link>
            </div>
          </div>

          {/* Right Column: Dark Gen Z Laptop Computer Mockup with Baccha Vid.mp4 Inside */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-lg">
              {/* Dark Laptop Display Top Frame */}
              <div className="bg-genz-dark rounded-t-3xl p-3 sm:p-4 border-4 border-genz-dark shadow-2xl relative">
                {/* Laptop Web Camera Dot */}
                <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-2 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Display Screen containing Baccha Vid.mp4 */}
                <div className="bg-black text-white rounded-2xl overflow-hidden border-2 border-slate-800 shadow-sm relative aspect-[16/10] flex items-center justify-center">
                  <video
                    src="/bacchavid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Subtle Translucent Overlay Header Badge for AI Session */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-black tracking-wide">LIVE AI SESSION</span>
                    </div>
                    <div className="bg-genz-orange backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-black border border-white/20 shadow-lg">
                      REC ⏺
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Laptop Keyboard Base */}
              <div className="w-[108%] -ml-[4%] h-5 bg-genz-dark rounded-b-2xl border-x-4 border-b-4 border-genz-dark shadow-[6px_6px_0px_#FE6622] relative flex justify-center items-top">
                <div className="w-16 sm:w-20 h-1.5 bg-slate-800 border border-slate-700 rounded-b-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-24 px-6 bg-genz-cream/80 border-b border-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="green" size="md">
              VERIFIED CREDENTIAL
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-genz-dark">
              Earn Industry Recognized <br />
              <span className="text-genz-green">Placement Certificates</span>
            </h2>
            <p className="text-sm font-semibold text-slate-700 leading-relaxed">
              Showcase tamper-proof credentials with live QR code verification on LinkedIn and directly to hiring recruiters.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/80 shadow-lg shadow-slate-900/5 hover:scale-[1.01] transition-transform">
                <ShieldCheck className="w-5 h-5 text-genz-green shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-genz-dark">Cryptographic Verification</h5>
                  <p className="text-xs text-slate-600 font-medium">Unique hash key stored securely for instant employer authentication.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/80 shadow-lg shadow-slate-900/5 hover:scale-[1.01] transition-transform">
                <Award className="w-5 h-5 text-genz-orange shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-genz-dark">QR Code Badge</h5>
                  <p className="text-xs text-slate-600 font-medium">Recruiters scan the QR code on your resume to view full assessment transcripts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <GlassCard variant="white" className="p-8 border border-white/80 text-center space-y-5 shadow-2xl shadow-genz-green/15 glass-shimmer">
              <div className="inline-block bg-genz-yellow/85 backdrop-blur-md text-genz-dark font-black text-[11px] px-3.5 py-1 rounded-full border border-white/60 shadow-sm">
                OFFICIAL CERTIFICATE OF MASTERY
              </div>
              <h3 className="font-display font-black text-2xl text-genz-dark">Aaditya Johnson</h3>
              <p className="text-xs font-semibold text-slate-600">
                demonstrated top-tier performance in <br />
                <span className="font-bold text-genz-dark">Full-Stack Technical Aptitude & English Fluency</span>
              </p>

              <div className="p-4 bg-genz-cream/80 backdrop-blur-md rounded-2xl border border-white/60 flex items-center justify-between text-left shadow-sm group hover:shadow-md transition-all">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Verification Code</span>
                  <p className="font-mono font-bold text-xs text-genz-blue">PW-2026-VINTAGE-9981</p>
                </div>
                <div className="w-10 h-10 bg-genz-dark/90 rounded-xl text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-genz-orange transition-all">
                  QR
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Delivering Job Ready Developers - Infinite Company Logos Marquee Slider */}
      <section id="colleges" className="py-24 px-6 bg-white/50 border-b border-white/50 overflow-hidden relative backdrop-blur-sm">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="orange" size="md">
              JOB READY GRADUATES
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-genz-dark tracking-tight">
              Delivering Job Ready Developers
            </h2>
            <p className="text-sm font-semibold text-slate-600">
              Companies where our course graduates and students are working
            </p>
          </div>

          {/* Marquee Row 1 (Moving Left) */}
          <div className="relative w-full overflow-hidden py-3">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex items-center gap-6 whitespace-nowrap w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25,
              }}
            >
              {[
                { name: "Apple", render: () => <span className="font-sans font-black text-xl text-slate-900 flex items-center gap-1.5"><span className="text-2xl leading-none"></span> Apple</span> },
                { name: "Netflix", render: () => <span className="font-black text-xl text-[#E50914] tracking-wider">NETFLIX</span> },
                { name: "LinkedIn", render: () => <span className="font-bold text-lg text-slate-900 flex items-center gap-1">Linked<span className="bg-[#0A66C2] text-white px-1.5 py-0.5 rounded text-xs font-black">in</span></span> },
                { name: "Amazon", render: () => <span className="font-extrabold text-xl text-slate-900 flex items-center gap-1">amazon<span className="text-genz-orange text-sm font-black">↗</span></span> },
                { name: "Microsoft", render: () => <span className="font-bold text-lg text-slate-800 flex items-center gap-2"><span className="grid grid-cols-2 gap-0.5 w-4 h-4"><span className="bg-[#F25022] w-1.5 h-1.5"></span><span className="bg-[#7FBA00] w-1.5 h-1.5"></span><span className="bg-[#00A4EF] w-1.5 h-1.5"></span><span className="bg-[#FFB900] w-1.5 h-1.5"></span></span>Microsoft</span> },
                { name: "Oracle", render: () => <span className="font-black text-xl text-[#F80000] tracking-widest">ORACLE</span> },
                { name: "Dell", render: () => <span className="font-black text-xl text-[#0076CE] tracking-widest">DELL</span> },
                { name: "X", render: () => <span className="font-black text-2xl text-slate-900">𝕏</span> },
                { name: "Google", render: () => <span className="font-black text-xl text-slate-900"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span> },
                { name: "Meta", render: () => <span className="font-extrabold text-xl text-[#0668E1]">∞ Meta</span> },
              ].concat([
                { name: "Apple", render: () => <span className="font-sans font-black text-xl text-slate-900 flex items-center gap-1.5"><span className="text-2xl leading-none"></span> Apple</span> },
                { name: "Netflix", render: () => <span className="font-black text-xl text-[#E50914] tracking-wider">NETFLIX</span> },
                { name: "LinkedIn", render: () => <span className="font-bold text-lg text-slate-900 flex items-center gap-1">Linked<span className="bg-[#0A66C2] text-white px-1.5 py-0.5 rounded text-xs font-black">in</span></span> },
                { name: "Amazon", render: () => <span className="font-extrabold text-xl text-slate-900 flex items-center gap-1">amazon<span className="text-genz-orange text-sm font-black">↗</span></span> },
                { name: "Microsoft", render: () => <span className="font-bold text-lg text-slate-800 flex items-center gap-2"><span className="grid grid-cols-2 gap-0.5 w-4 h-4"><span className="bg-[#F25022] w-1.5 h-1.5"></span><span className="bg-[#7FBA00] w-1.5 h-1.5"></span><span className="bg-[#00A4EF] w-1.5 h-1.5"></span><span className="bg-[#FFB900] w-1.5 h-1.5"></span></span>Microsoft</span> },
                { name: "Oracle", render: () => <span className="font-black text-xl text-[#F80000] tracking-widest">ORACLE</span> },
                { name: "Dell", render: () => <span className="font-black text-xl text-[#0076CE] tracking-widest">DELL</span> },
                { name: "X", render: () => <span className="font-black text-2xl text-slate-900">𝕏</span> },
                { name: "Google", render: () => <span className="font-black text-xl text-slate-900"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span> },
                { name: "Meta", render: () => <span className="font-extrabold text-xl text-[#0668E1]">∞ Meta</span> },
              ]).map((c, i) => (
                <div
                  key={i}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-md shadow-slate-900/5 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer shrink-0"
                >
                  {c.render()}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Row 2 (Moving Right) */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex items-center gap-6 whitespace-nowrap w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 28,
              }}
            >
              {[
                { name: "Adobe", render: () => <span className="font-black text-xl text-[#FF0000] tracking-wide">Adobe</span> },
                { name: "Uber", render: () => <span className="font-black text-xl text-slate-900 tracking-tight">Uber</span> },
                { name: "Spotify", render: () => <span className="font-bold text-lg text-[#1DB954] flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#1DB954]" /> Spotify</span> },
                { name: "Nvidia", render: () => <span className="font-black text-xl text-[#76B900] tracking-wide">NVIDIA</span> },
                { name: "Salesforce", render: () => <span className="font-bold text-lg text-[#00A1E0] flex items-center gap-1">☁️ salesforce</span> },
                { name: "Intel", render: () => <span className="font-extrabold text-xl text-[#0068B5] tracking-wide">intel</span> },
                { name: "Stripe", render: () => <span className="font-black text-xl text-[#635BFF]">stripe</span> },
                { name: "Airbnb", render: () => <span className="font-extrabold text-xl text-[#FF5A5F]">airbnb</span> },
                { name: "Cisco", render: () => <span className="font-black text-xl text-[#049FD9] tracking-wider">CISCO</span> },
                { name: "Atlassian", render: () => <span className="font-bold text-lg text-[#0052CC] tracking-wider">ATLASSIAN</span> },
              ].concat([
                { name: "Adobe", render: () => <span className="font-black text-xl text-[#FF0000] tracking-wide">Adobe</span> },
                { name: "Uber", render: () => <span className="font-black text-xl text-slate-900 tracking-tight">Uber</span> },
                { name: "Spotify", render: () => <span className="font-bold text-lg text-[#1DB954] flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#1DB954]" /> Spotify</span> },
                { name: "Nvidia", render: () => <span className="font-black text-xl text-[#76B900] tracking-wide">NVIDIA</span> },
                { name: "Salesforce", render: () => <span className="font-bold text-lg text-[#00A1E0] flex items-center gap-1">☁️ salesforce</span> },
                { name: "Intel", render: () => <span className="font-extrabold text-xl text-[#0068B5] tracking-wide">intel</span> },
                { name: "Stripe", render: () => <span className="font-black text-xl text-[#635BFF]">stripe</span> },
                { name: "Airbnb", render: () => <span className="font-extrabold text-xl text-[#FF5A5F]">airbnb</span> },
                { name: "Cisco", render: () => <span className="font-black text-xl text-[#049FD9] tracking-wider">CISCO</span> },
                { name: "Atlassian", render: () => <span className="font-bold text-lg text-[#0052CC] tracking-wider">ATLASSIAN</span> },
              ]).map((c, i) => (
                <div
                  key={i}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-md shadow-slate-900/5 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer shrink-0"
                >
                  {c.render()}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-6 bg-genz-cream/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-3xl font-black text-center text-genz-dark">
            Got Questions? We Got Answers.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/80 shadow-md shadow-slate-900/5 overflow-hidden cursor-pointer transition-all hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="p-5 flex items-center justify-between font-extrabold text-sm text-genz-dark">
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-genz-dark transition-transform ${
                      openFaq === idx ? "rotate-180 text-genz-orange" : ""
                    }`}
                  />
                </div>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-700 font-semibold leading-relaxed border-t border-slate-100/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Placement Journey - Pre-Footer Banner with Student Character */}
      <section className="pt-20 pb-0 px-6 bg-gradient-to-r from-genz-yellow/20 via-genz-pink/15 to-genz-blue/15 border-t border-white/50 relative overflow-hidden backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-6 space-y-6 pb-16">
            <Badge variant="orange" size="md">
              START PREPARING TODAY
            </Badge>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-genz-dark tracking-tight leading-tight">
              Start Your Placement Journey <br />
              <span className="text-genz-orange">With PrepWise AI</span>
            </h2>
            <p className="text-base font-semibold text-slate-700 max-w-xl leading-relaxed">
              Join thousands mastering aptitude, cracking real-world technical problems, acing AI mock interviews, and earning verifiable placement certification.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/signup">
                <PrimaryButton variant="orange" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Level Up Your Skills Now
                </PrimaryButton>
              </Link>
            </div>
          </div>

          {/* Right Column: Student Character with Glass Floating Badges */}
          <div className="lg:col-span-6 flex justify-center items-end self-end z-10 -mb-1 relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex items-end justify-center w-full"
            >
              {/* Floating Badge 1 (Pink): Outer Left Area */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-4, -1, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-12 -left-4 sm:-left-12 z-20 bg-genz-pink/90 backdrop-blur-xl text-genz-dark font-black text-xs px-4 py-2 rounded-full border border-white/60 shadow-lg shadow-genz-pink/20 flex items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer whitespace-nowrap"
              >
                <span>⭐</span>
                <span>98.4% ATS SCORE</span>
              </motion.div>

              {/* Floating Badge 2 (Yellow): Upper Right Area */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [4, 1, 4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.4 }}
                className="absolute -top-6 -right-2 sm:-right-8 z-20 bg-genz-yellow/90 backdrop-blur-xl text-genz-dark font-black text-xs px-4 py-2 rounded-full border border-white/60 shadow-lg shadow-genz-yellow/20 flex items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer whitespace-nowrap"
              >
                <span>🚀</span>
                <span>LEVEL 99 CODER</span>
              </motion.div>

              {/* Floating Badge 3 (Green): Lower Right Area */}
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [-5, -2, -5] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-20 -right-6 sm:-right-16 z-20 bg-genz-green/90 backdrop-blur-xl text-white font-black text-xs px-4 py-2 rounded-full border border-white/40 shadow-lg shadow-genz-green/20 flex items-center gap-1.5 hover:scale-110 transition-transform cursor-pointer whitespace-nowrap"
              >
                <span>✅</span>
                <span>PLACEMENT VERIFIED</span>
              </motion.div>

              {/* Transparent Kid Character Image */}
              <img
                src="/baccha2_nobg.png"
                alt="Placement Ready Student Coder"
                className="w-full max-w-md sm:max-w-lg h-auto max-h-[440px] object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(18,19,24,0.12)] hover:scale-[1.03] transition-transform duration-300 relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Gen Z Multi-Column Footer */}
      <footer className="bg-genz-dark/95 backdrop-blur-2xl text-white pt-20 pb-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
            {/* Column 1: Brand & Contact Info */}
            <div className="lg:col-span-1 space-y-5">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-genz-yellow/90 backdrop-blur-md border border-white/40 text-genz-dark flex items-center justify-center font-extrabold text-xl shadow-lg shadow-genz-yellow/25">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl text-white tracking-tight leading-none">
                    PrepWise <span className="text-genz-pink">AI</span>
                  </span>
                  <span className="text-[10px] text-genz-yellow font-bold tracking-widest uppercase mt-0.5">
                    KJ Somaiya Campus
                  </span>
                </div>
              </Link>

              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Bizzhub Workspaces, MSR North Tower, KJ Somaiya College of Engineering Campus, Vidyavihar East, Mumbai 400077.
              </p>

              <div className="space-y-1.5 text-xs text-slate-300 font-semibold">
                <p>Email: <a href="mailto:support@prepwise.ai" className="text-genz-yellow hover:underline">support@prepwise.ai</a></p>
                <p>Phone: <a href="tel:+919820012345" className="text-genz-yellow hover:underline">+91 98200 12345</a></p>
              </div>

              <div className="pt-2 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Find us online</span>
                <div className="flex items-center gap-2.5">
                  {["YT", "𝕏", "IN", "FB", "IG", "M"].map((s, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700 text-genz-yellow font-black text-xs flex items-center justify-center hover:bg-genz-orange hover:text-white hover:border-transparent transition-all cursor-pointer shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: ROADMAPS */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-sm text-genz-yellow tracking-wider uppercase">ROADMAPS</h4>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li><Link href="/student/assessments" className="hover:text-genz-pink transition-colors">Aptitude & Reasoning</Link></li>
                <li><Link href="/student/assessments" className="hover:text-genz-pink transition-colors">Verbal & English Fluency</Link></li>
                <li><Link href="/student/assessments" className="hover:text-genz-pink transition-colors">Data Structures & Algorithms</Link></li>
                <li><Link href="/student/assessments" className="hover:text-genz-pink transition-colors">Full Stack Engineering</Link></li>
                <li><Link href="/student/assessments" className="hover:text-genz-pink transition-colors">Competitive Programming</Link></li>
                <li><Link href="/student/assessments" className="hover:text-genz-pink transition-colors">System Design Basics</Link></li>
                <li><Link href="/student/assessments" className="hover:text-genz-pink transition-colors">More Roadmaps →</Link></li>
              </ul>
            </div>

            {/* Column 3: CAREER PATHS */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-sm text-genz-yellow tracking-wider uppercase">CAREER PATHS</h4>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">React JS Developer</Link></li>
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">Full Stack Developer</Link></li>
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">SQL Data Analyst</Link></li>
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">Frontend Engineer</Link></li>
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">Java Backend Developer</Link></li>
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">Python Data Science</Link></li>
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">Machine Learning Engineer</Link></li>
              </ul>
            </div>

            {/* Column 4: AI EVALUATIONS */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-sm text-genz-yellow tracking-wider uppercase">AI EVALUATIONS</h4>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">AI Tech Interview Bot</Link></li>
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">HR Behavioral Interviewer</Link></li>
                <li><Link href="/student/interview" className="hover:text-genz-pink transition-colors">Speech Clarity Analytics</Link></li>
                <li><Link href="/student/ats-analysis" className="hover:text-genz-pink transition-colors">Resume ATS Matcher</Link></li>
                <li><Link href="/student/certificate" className="hover:text-genz-pink transition-colors">QR Cryptographic Verification</Link></li>
                <li><Link href="/student/dashboard" className="hover:text-genz-pink transition-colors">Student Placement Matrix</Link></li>
              </ul>
            </div>

            {/* Column 5: COMPANY & HELP */}
            <div className="space-y-4">
              <h4 className="font-display font-black text-sm text-genz-yellow tracking-wider uppercase">COMPANY</h4>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li><Link href="/" className="hover:text-genz-pink transition-colors">About PrepWise AI</Link></li>
                <li><Link href="#colleges" className="hover:text-genz-pink transition-colors">For Colleges & TPO</Link></li>
                <li><Link href="/student/assessments" className="hover:text-genz-pink transition-colors">Placement Contests</Link></li>
                <li><Link href="/" className="hover:text-genz-pink transition-colors">Blogs & Placement Guides</Link></li>
                <li><Link href="#colleges" className="hover:text-genz-pink transition-colors">Hire From Us</Link></li>
                <li><Link href="/" className="hover:text-genz-pink transition-colors">Contact Us</Link></li>
                <li><Link href="/" className="hover:text-genz-pink transition-colors">Privacy Policy & Terms</Link></li>
                <li><Link href="/" className="hover:text-genz-pink transition-colors">Frequently Asked Questions</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar Footer Line */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <p>© 2026 PrepWise AI. Built for KJ Somaiya College of Engineering. All rights reserved.</p>
            <div className="flex items-center gap-6 text-[11px] font-bold text-slate-300 uppercase tracking-wider">
              {["GOOGLE", "MICROSOFT", "AMAZON", "APPLE", "NETFLIX", "ORACLE"].map((c, i) => (
                <span key={i} className="hover:text-genz-yellow transition-colors cursor-pointer">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
