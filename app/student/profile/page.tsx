"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import {
  User,
  GraduationCap,
  Briefcase,
  FileText,
  Shield,
  Edit,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Upload,
  Eye,
  RefreshCw,
  LogOut,
  Trash2,
} from "lucide-react";
import { clsx } from "clsx";

export default function StudentProfilePage() {
  const [activeTab, setActiveTab] = useState("resume");
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [reminders, setReminders] = useState(true);

  const menuItems = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "academic", label: "Academic", icon: GraduationCap },
    { id: "professional", label: "Professional", icon: Briefcase },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="space-y-1">
        <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
          My Profile
        </h1>
        <p className="text-xs text-brand-muted">
          Manage your personal information, academic details, resume and account preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Navigation Menu */}
        <div className="lg:col-span-3 space-y-2">
          <GlassCard variant="white" className="p-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={clsx(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all",
                    isActive
                      ? "bg-brand-blue-light text-brand-blue font-bold shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </GlassCard>
        </div>

        {/* Center Main Profile Details */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main User Card Header */}
          <GlassCard variant="white" className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                alt="Alex Johnson"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-brand-blue/20"
              />
              <div className="space-y-1 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="font-display font-bold text-2xl text-brand-dark">Alex Johnson</h2>
                  <PrimaryButton variant="primary" size="sm" icon={<Edit className="w-3.5 h-3.5" />}>
                    Edit Profile
                  </PrimaryButton>
                </div>
                <p className="text-xs text-brand-muted">alex.johnson@prepwise.edu</p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-brand-blue" /> +1 (555) 012-3456
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" /> Mumbai, MH
                  </span>
                </div>
                <Badge variant="lime" className="mt-2">Status: Graduate (Class of 2025)</Badge>
              </div>
            </div>
          </GlassCard>

          {/* Academic Information */}
          <GlassCard variant="white" className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-display font-bold text-base text-brand-dark">Academic Information</h3>
              <button className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1">
                <Edit className="w-3 h-3" /> Edit
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-bold uppercase text-[10px]">COLLEGE / UNIVERSITY</span>
                <p className="font-semibold text-brand-dark mt-0.5">KJ Somaiya College of Engineering</p>
              </div>
              <div>
                <span className="text-slate-400 font-bold uppercase text-[10px]">DEGREE</span>
                <p className="font-semibold text-brand-dark mt-0.5">B.Tech Computer Engineering</p>
              </div>
              <div>
                <span className="text-slate-400 font-bold uppercase text-[10px]">GRADUATION</span>
                <p className="font-semibold text-brand-dark mt-0.5">2025</p>
              </div>
              <div>
                <span className="text-slate-400 font-bold uppercase text-[10px]">CGPA</span>
                <p className="font-semibold text-brand-dark mt-0.5">9.2 / 10.0</p>
              </div>
            </div>
          </GlassCard>

          {/* Professional Profile */}
          <GlassCard variant="white" className="p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-brand-dark">Professional Profile</h3>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">TOP SKILLS</span>
              <div className="flex flex-wrap gap-2">
                {["React", "Python", "SQL", "Project Management"].map((sk) => (
                  <Badge key={sk} variant="blue">{sk}</Badge>
                ))}
                <button className="px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200">
                  + Add Skill
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">FEATURED PROJECTS</span>
              <div className="p-3 bg-slate-50 rounded-2xl text-xs space-y-1">
                <h5 className="font-bold text-brand-dark">AI-Powered Study Assistant</h5>
                <p className="text-slate-500">
                  Developed a personalized LLM-based tutor that adapts to student learning styles.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">LINKS & PORTFOLIOS</span>
              <div className="flex gap-2">
                <button className="px-3 py-2 text-xs font-semibold rounded-xl border border-brand-border flex items-center gap-1.5 hover:bg-slate-50">
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" /> LinkedIn
                </button>
                <button className="px-3 py-2 text-xs font-semibold rounded-xl border border-brand-border flex items-center gap-1.5 hover:bg-slate-50">
                  <Github className="w-3.5 h-3.5 text-slate-800" /> GitHub
                </button>
                <button className="px-3 py-2 text-xs font-semibold rounded-xl border border-brand-border flex items-center gap-1.5 hover:bg-slate-50">
                  <Globe className="w-3.5 h-3.5 text-brand-blue" /> Portfolio
                </button>
              </div>
            </div>
          </GlassCard>

          {/* Resume Management Container */}
          <GlassCard variant="white" className="p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-brand-dark">Resume Management</h3>

            <div className="p-4 bg-brand-soft/20 rounded-2xl border border-brand-soft flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-brand-blue" />
                <div>
                  <h5 className="font-bold text-xs text-brand-dark">Alex_Johnson_Resume_2024.pdf</h5>
                  <p className="text-[10px] text-slate-400">Uploaded May 15, 2024 • 245 KB</p>
                </div>
              </div>
              <Badge variant="success">ATS SCORE: 85/100</Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              <PrimaryButton variant="primary" size="sm" icon={<Upload className="w-3.5 h-3.5" />}>
                Upload New
              </PrimaryButton>
              <PrimaryButton variant="secondary" size="sm" icon={<Eye className="w-3.5 h-3.5" />}>
                Preview
              </PrimaryButton>
              <Link href="/student/ats-analysis">
                <PrimaryButton variant="outline" size="sm" icon={<RefreshCw className="w-3.5 h-3.5" />}>
                  Run ATS Scan
                </PrimaryButton>
              </Link>
            </div>
          </GlassCard>

          {/* Security & Notifications */}
          <GlassCard variant="white" className="p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-brand-dark">Account & Security</h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-brand-dark">Email Notifications</h5>
                  <p className="text-[11px] text-slate-400">Receive weekly preparation tips and job matches.</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailNotifs}
                  onChange={() => setEmailNotifs(!emailNotifs)}
                  className="w-4 h-4 text-brand-blue accent-brand-blue"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div>
                  <h5 className="font-bold text-brand-dark">Interview Reminders</h5>
                  <p className="text-[11px] text-slate-400">Get notified 15 minutes before your AI mock sessions.</p>
                </div>
                <input
                  type="checkbox"
                  checked={reminders}
                  onChange={() => setReminders(!reminders)}
                  className="w-4 h-4 text-brand-blue accent-brand-blue"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-wrap justify-between items-center border-t border-slate-100 gap-4">
              <button className="text-xs font-bold text-rose-600 hover:underline flex items-center gap-1">
                <Trash2 className="w-3.5 h-3.5" /> Delete Account
              </button>

              <Link href="/login">
                <button className="text-xs font-bold text-slate-600 hover:text-brand-dark flex items-center gap-1">
                  <LogOut className="w-3.5 h-3.5" /> Logout
                </button>
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Placement Readiness Summary Panel */}
        <div className="lg:col-span-3 space-y-6">
          <GlassCard variant="white" className="p-6 text-center space-y-4">
            <h4 className="font-display font-bold text-sm text-brand-dark">Placement Summary</h4>

            <div className="w-24 h-24 rounded-full bg-brand-blue text-white mx-auto font-display font-extrabold text-2xl flex flex-col items-center justify-center shadow-glow">
              <span>82%</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-brand-lime">READY</span>
            </div>

            <p className="text-xs text-slate-500">Overall Readiness Score</p>

            <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
              <div className="flex justify-between">
                <span>Assessments</span>
                <span className="font-bold text-brand-blue">5 / 6</span>
              </div>
              <div className="flex justify-between">
                <span>Interview Score</span>
                <span className="font-bold text-brand-blue">84%</span>
              </div>
              <div className="flex justify-between">
                <span>Certification</span>
                <Badge variant="lime">UNLOCKED</Badge>
              </div>
            </div>

            <Link href="/student/progress">
              <PrimaryButton variant="secondary" size="sm" fullWidth>
                View Performance History
              </PrimaryButton>
            </Link>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
