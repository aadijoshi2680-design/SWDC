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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-genz-yellow border-2 border-genz-dark text-genz-dark text-xs font-black shadow-retro-hard">
              <Sparkles className="w-4 h-4 text-genz-dark animate-spin" />
              <span>THE COOL WAY TO CRACK PLACEMENTS</span>
              <span className="bg-genz-orange text-white text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">
                VINTAGE v2.0
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-genz-dark leading-[1.08]">
              Level Up Your Skills. <br />
              <span className="bg-genz-yellow text-genz-dark px-2 rounded-lg border-2 border-genz-dark inline-block shadow-retro-hard my-1">
                Crack Placements.
              </span> <br />
              <span className="text-genz-blue">Ace Every AI Interview.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-xl font-semibold leading-relaxed">
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
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border-2 border-genz-dark shadow-[2px_2px_0px_#121318]">
                <Flame className="w-4 h-4 text-genz-orange" />
                <span>15,000+ Active Learners</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-genz-pink/40 border-2 border-genz-dark shadow-[2px_2px_0px_#121318]">
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

      {/* Feature Cards Section */}
      <section id="features" className="py-24 px-6 bg-white border-y-2 border-genz-dark">
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
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <GlassCard
                  key={i}
                  variant="white"
                  className={`p-7 space-y-5 border-2 ${f.accent} group hover:-translate-y-2 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-genz-dark text-genz-yellow border-2 border-genz-dark flex items-center justify-center shadow-retro-hard group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={f.badgeColor} size="sm">
                      {f.badge}
                    </Badge>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-genz-dark">{f.title}</h3>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed">{f.desc}</p>
                  
                  <div className="pt-2">
                    <Link href={f.link}>
                      <PrimaryButton variant={f.badgeColor} size="sm" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
                        Explore Module
                      </PrimaryButton>
                    </Link>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Horizontal Roadmap Section */}
      <section id="how-it-works" className="py-24 px-6 bg-genz-yellow/20 border-b-2 border-genz-dark">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <Badge variant="yellow" size="md">
              PLACEMENT ROADMAP
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-genz-dark">
              From Zero To Placement Certified
            </h2>
            <p className="text-sm font-semibold text-slate-700">
              Follow our clear step-by-step roadmap to master every phase of campus recruitment.
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 overflow-x-auto pb-6 pt-3 px-2">
            {roadmapSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[110px] text-center gap-3 shrink-0">
                <div
                  className={`w-12 h-12 rounded-2xl ${step.bg} border-2 border-genz-dark text-genz-dark font-black text-base flex items-center justify-center shadow-retro-hard hover:scale-110 transition-transform`}
                >
                  0{idx + 1}
                </div>
                <span className="text-xs font-bold text-genz-dark">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Mock Interview Showcase Section */}
      <section className="py-24 px-6 bg-genz-dark text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="pink" size="md">
              LIVE MOCK INTERVIEWS
            </Badge>
            <h2 className="font-display text-3xl sm:text-5xl font-black leading-tight">
              Real-Time AI Technical & <br />
              <span className="text-genz-yellow">HR Speech Evaluation</span>
            </h2>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Practice mock interviews powered by advanced speech AI. Get instant scoring on speaking pace, confidence, keyword usage, and technical depth.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-genz-surface p-4 rounded-2xl border-2 border-slate-700">
                <Bot className="w-6 h-6 text-genz-yellow shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white">Adaptive Question Engine</h5>
                  <p className="text-xs text-slate-400">Questions adapt dynamically to your answers and chosen domain (Data Structures, Web, ML, HR).</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-genz-surface p-4 rounded-2xl border-2 border-slate-700">
                <Zap className="w-6 h-6 text-genz-orange shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white">Instant Speech Analytics</h5>
                  <p className="text-xs text-slate-400">Receive immediate feedback on filler words, pitch clarity, and structural response quality.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/student/interview">
                <PrimaryButton variant="orange" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Start AI Interview Session
                </PrimaryButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Live Audio / Video Call UI Card */}
            <div className="bg-slate-900 rounded-[28px] border-4 border-genz-yellow p-6 shadow-[10px_10px_0px_#FFA4BF] space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-genz-blue text-white font-black flex items-center justify-center">
                    AI
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Senior Tech Interviewer Bot</h4>
                    <p className="text-xs text-emerald-400 font-semibold">● Active Session • 03:42</p>
                  </div>
                </div>
                <Badge variant="yellow" size="sm">
                  AUDIO RECORDING
                </Badge>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-genz-pink font-bold">
                  <MessageSquare className="w-4 h-4" />
                  <span>AI Prompt:</span>
                </div>
                <p className="text-slate-300 italic">
                  "Explain how you would handle race conditions in a high-concurrency Node.js microservice architecture."
                </p>
              </div>

              <div className="bg-genz-surface p-4 rounded-2xl border border-slate-700 space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Live Speech Clarity</span>
                  <span className="text-genz-green">89% - Excellent</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-genz-green rounded-full" style={{ width: "89%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-24 px-6 bg-genz-cream border-b-2 border-genz-dark">
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
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border-2 border-genz-dark shadow-[3px_3px_0px_#121318]">
                <ShieldCheck className="w-5 h-5 text-genz-green shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-genz-dark">Cryptographic Verification</h5>
                  <p className="text-xs text-slate-600 font-medium">Unique hash key stored securely for instant employer authentication.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border-2 border-genz-dark shadow-[3px_3px_0px_#121318]">
                <Award className="w-5 h-5 text-genz-orange shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-black text-genz-dark">QR Code Badge</h5>
                  <p className="text-xs text-slate-600 font-medium">Recruiters scan the QR code on your resume to view full assessment transcripts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <GlassCard variant="white" className="p-8 border-4 border-genz-dark text-center space-y-5 shadow-[10px_10px_0px_#00A56B]">
              <div className="inline-block bg-genz-yellow text-genz-dark font-black text-[11px] px-3 py-1 rounded-full border border-genz-dark">
                OFFICIAL CERTIFICATE OF MASTERY
              </div>
              <h3 className="font-display font-black text-2xl text-genz-dark">Aaditya Johnson</h3>
              <p className="text-xs font-semibold text-slate-600">
                demonstrated top-tier performance in <br />
                <span className="font-bold text-genz-dark">Full-Stack Technical Aptitude & English Fluency</span>
              </p>

              <div className="p-4 bg-genz-cream rounded-2xl border-2 border-genz-dark flex items-center justify-between text-left">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Verification Code</span>
                  <p className="font-mono font-bold text-xs text-genz-blue">PW-2026-VINTAGE-9981</p>
                </div>
                <div className="w-10 h-10 bg-genz-dark rounded-lg text-white font-mono text-[10px] font-bold flex items-center justify-center">
                  QR
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Delivering Job Ready Developers - Infinite Company Logos Marquee Slider */}
      <section id="colleges" className="py-24 px-6 bg-white border-b-2 border-genz-dark overflow-hidden relative">
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
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-white border-2 border-genz-dark shadow-[3.5px_3.5px_0px_#121318] hover:bg-genz-yellow hover:scale-105 transition-all duration-200 cursor-pointer shrink-0"
                >
                  {c.render()}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Row 2 (Moving Right) */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-white border-2 border-genz-dark shadow-[3.5px_3.5px_0px_#121318] hover:bg-genz-pink hover:scale-105 transition-all duration-200 cursor-pointer shrink-0"
                >
                  {c.render()}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-6 bg-genz-cream">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-3xl font-black text-center text-genz-dark">
            Got Questions? We Got Answers.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-genz-dark shadow-retro-hard overflow-hidden cursor-pointer transition-transform hover:-translate-y-0.5"
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
                  <div className="px-5 pb-5 text-xs text-slate-700 font-semibold leading-relaxed border-t-2 border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <footer className="bg-genz-dark py-14 px-6 text-white text-center space-y-6 border-t-4 border-genz-orange">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="font-display font-black text-2xl text-genz-yellow">PrepWise AI</span>
            <Badge variant="pink" size="sm">GEN Z VINTAGE</Badge>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            Empowering students with smart learning tools, AI mock interviews, and placement analytics.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-bold text-slate-300">
            {["GOOGLE", "MICROSOFT", "AMAZON", "APPLE", "ADOBE", "INTEL", "ORACLE", "ACCENTURE", "TCS"].map(
              (c, i) => (
                <span key={i} className="hover:text-genz-yellow transition-colors">
                  {c}
                </span>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
