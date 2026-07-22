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
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    {
      icon: BookOpen,
      title: "Aptitude & Reasoning",
      desc: "Master logical, quantitative, and verbal reasoning with industry-standard test patterns and detailed solutions.",
      link: "/student/assessments",
    },
    {
      icon: Sparkles,
      title: "English Assessment",
      desc: "Improve your professional vocabulary, verbal fluency, and business communication clarity with detailed feedback.",
      link: "/student/assessments",
    },
    {
      icon: Bot,
      title: "AI Mock Interviews",
      desc: "Real-time mock interviews with adaptive speech evaluation, live transcription, and comprehensive behavioral scoring.",
      link: "/student/interview",
    },
    {
      icon: FileCheck,
      title: "Resume & ATS Analysis",
      desc: "Optimize your resume against actual job descriptions and increase your ATS ranking score instantly.",
      link: "/student/ats-analysis",
    },
  ];

  const roadmapSteps = [
    { label: "Registration", active: true },
    { label: "Aptitude Test", active: true },
    { label: "English Assmt", active: true },
    { label: "Psychometric", active: true },
    { label: "AI Technical", active: true },
    { label: "AI HR Interview", active: true },
    { label: "Resume Upload", active: true },
    { label: "ATS Analysis", active: true },
    { label: "Dashboard", active: true },
  ];

  const faqs = [
    {
      q: "How does the AI interview feedback work?",
      a: "Our AI evaluates technical depth, grammar, speaking pace, key terminology usage, and confidence level to provide an instant, detailed feedback report after every mock session.",
    },
    {
      q: "Is the PrepWise certificate recognized by top recruiters?",
      a: "Yes! Every certificate issued carries a unique cryptographic ID and tamper-proof QR code that employers can instantly verify on our public verification portal.",
    },
    {
      q: "Can I retake the assessments if my score is low?",
      a: "Absolutely. Students can retake practice modules and AI mock interviews unlimited times to improve their placement readiness score.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Decorative Circles & Blobs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-soft/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-lime/20 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Built for KJ Somaiya College of Engineering</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.1]">
              Prepare for Placements. <br />
              <span className="text-brand-blue">Prove Your Skills.</span> <br />
              Earn Industry-Ready Certification.
            </h1>

            <p className="text-base sm:text-lg text-brand-muted max-w-xl font-normal leading-relaxed">
              PrepWise AI is an intelligent placement preparation platform that combines aptitude assessments, English communication analysis, AI-powered mock interviews, resume ATS optimization, and verifiable certification into one seamless learning experience.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/signup">
                <PrimaryButton variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Start Preparing
                </PrimaryButton>
              </Link>
              <Link href="/student/dashboard">
                <PrimaryButton variant="secondary" size="lg">
                  Explore Platform
                </PrimaryButton>
              </Link>
            </div>
          </motion.div>

          {/* Right Column Floating Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 space-y-4">
              {/* Floating Pill Badges */}
              <div className="flex flex-wrap gap-2 justify-end">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-brand-border text-xs font-semibold text-brand-dark flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-blue" /> Aptitude
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-brand-border text-xs font-semibold text-brand-dark flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-lime" /> English
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-brand-border text-xs font-semibold text-brand-dark flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500" /> AI Interview
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-brand-border text-xs font-semibold text-brand-dark flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Resume + ATS
                </span>
              </div>

              {/* Main Glass Widget Preview */}
              <GlassCard variant="glass" className="p-6 border-white/80 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-lg text-brand-dark">Aaditya Johnson</h4>
                    <p className="text-xs text-brand-muted">B.Tech - Computer Engineering</p>
                  </div>
                  <Badge variant="lime" dot>
                    GOLD CERTIFIED
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/80 p-3.5 rounded-2xl border border-slate-100">
                    <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">ATS Score</span>
                    <p className="font-display font-extrabold text-2xl text-brand-blue mt-0.5">88 / 100</p>
                  </div>
                  <div className="bg-white/80 p-3.5 rounded-2xl border border-slate-100">
                    <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Readiness</span>
                    <p className="font-display font-extrabold text-2xl text-emerald-600 mt-0.5">92% Ready</p>
                  </div>
                </div>

                {/* Skill Matrix bars */}
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span>Aptitude Mastery</span>
                    <span className="font-bold text-brand-blue">94%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: "94%" }} />
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                    <span>Communication</span>
                    <span className="font-bold text-brand-blue">86%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: "86%" }} />
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features" className="py-20 px-6 bg-white border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <Badge variant="blue">Everything You Need</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
              Everything You Need To Get Placement Ready
            </h2>
            <p className="text-sm text-brand-muted">
              Structured learning tracks engineered to elevate your aptitude, communication, and technical interview skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <GlassCard
                  key={i}
                  variant="white"
                  className="p-7 space-y-4 hover:border-brand-blue/30 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-brand-dark">{f.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{f.desc}</p>
                  <Link
                    href={f.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline pt-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Horizontal Roadmap Section */}
      <section id="how-it-works" className="py-20 px-6 bg-brand-soft/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Your Professional Journey
            </h2>
            <p className="text-sm text-brand-muted">
              A comprehensive roadmap from registration to verified placement excellence.
            </p>
          </div>

          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 pt-2">
            {roadmapSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[90px] text-center gap-2 shrink-0">
                <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-blue font-bold text-xs shadow-sm hover:border-brand-blue transition-colors">
                  {idx + 1}
                </div>
                <span className="text-[11px] font-medium text-slate-700">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligent Tracking Dashboard Mockup */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-8 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Intelligent Tracking Dashboard
          </h2>

          <div className="p-3 bg-slate-900 rounded-[32px] shadow-2xl overflow-hidden border border-slate-800">
            <div className="bg-brand-bg rounded-[24px] p-6 text-left space-y-6">
              <div className="flex items-center justify-between border-b border-brand-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                    AJ
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark">Alex Johnson</h4>
                    <p className="text-xs text-brand-muted">B.Tech • Computer Science</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="lime">ATS SCORE: 88/100</Badge>
                  <Badge variant="blue">GOLD CERTIFIED</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-brand-border">
                  <h5 className="text-xs font-bold text-slate-500 mb-3">Weekly Readiness</h5>
                  <div className="h-32 flex items-end justify-between gap-3 pt-4">
                    {[40, 55, 65, 80, 92].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-brand-blue rounded-t-lg transition-all"
                          style={{ height: `${h}%` }}
                        />
                        <span className="text-[10px] text-slate-400">W{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-brand-border space-y-3">
                  <h5 className="text-xs font-bold text-slate-500">Skill Matrix</h5>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Aptitude</span>
                      <span className="font-bold text-brand-blue">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Communication</span>
                      <span className="font-bold text-brand-blue">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Technical</span>
                      <span className="font-bold text-brand-blue">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>HR Readiness</span>
                      <span className="font-bold text-brand-blue">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become Placement Certified */}
      <section id="certification" className="py-20 px-6 bg-brand-soft/30 border-t border-brand-border/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="blue">Official Credential</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark">
              Become Placement Certified
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Our certifications represent a verified analysis of your cognitive abilities, communication skills, and technical aptitude through rigorous AI-driven evaluations.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-brand-border">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-brand-dark">Secure Verification</h5>
                  <p className="text-xs text-brand-muted">
                    Each certificate is stored on our secure ledger for tamper-proof verification.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-brand-border">
                <Zap className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-brand-dark">QR Enabled</h5>
                  <p className="text-xs text-brand-muted">
                    Instantly verifiable by employers through a simple QR scan during interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <GlassCard variant="white" className="p-8 border-2 border-brand-blue/20 shadow-2xl text-center space-y-4">
              <div className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                CERTIFICATE OF EXCELLENCE
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-dark">Alex Johnson</h3>
              <p className="text-xs text-slate-500">
                has successfully demonstrated industry-level proficiency in <br />
                <span className="font-semibold text-brand-dark">Full Stack Engineering & Soft Skills</span>
              </p>
              <div className="pt-4 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-100">
                <span>VERIFICATION ID: PW-AI-2026-9981-XC</span>
                <span className="font-bold text-brand-blue">KJ SOMAIYA CERTIFIED</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Empowering Institutions stats */}
      <section id="colleges" className="py-20 px-6 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Empowering Educational Institutions
            </h2>
            <p className="text-sm text-brand-muted">
              Streamlining placement preparation for modern universities.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: "95%", label: "STUDENT SUCCESS", sub: "Increase in placement percentage" },
              { val: "3x", label: "READINESS SPEED", sub: "Faster skill acquisition" },
              { val: "100%", label: "DETAILED REPORTS", sub: "Individual performance analytics" },
              { val: "Live", label: "PLACEMENT ANALYTICS", sub: "Real-time TPO tracking" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-brand-soft/20 p-6 rounded-card border border-brand-soft/60 space-y-2">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue">
                  {stat.val}
                </span>
                <div className="text-xs font-bold text-brand-dark tracking-wider">{stat.label}</div>
                <p className="text-[11px] text-brand-muted">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6 bg-brand-bg">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-3xl font-bold text-center text-brand-dark">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-border overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="p-5 flex items-center justify-between font-semibold text-sm text-brand-dark">
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </div>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-brand-muted leading-relaxed border-t border-slate-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners Footer Banner */}
      <div className="bg-brand-dark py-12 px-6 text-white text-center space-y-6">
        <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-400">
          Built for Modern Placements & Trusted by Industry Leaders
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
          {["GOOGLE", "MICROSOFT", "AMAZON", "APPLE", "ADOBE", "INTEL", "ORACLE", "ACCENTURE", "INFOSYS", "TCS"].map(
            (c, i) => (
              <span key={i} className="hover:text-brand-lime transition-colors">
                {c}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
