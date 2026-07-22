"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Check, Link as LinkIcon, Code, Globe } from "lucide-react";
import { clsx } from "clsx";

export default function OnboardingStep2Page() {
  const router = useRouter();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "Python",
    "JavaScript",
    "React",
    "Git",
  ]);

  const availableSkills = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React",
    "Node",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "HTML",
    "CSS",
    "Communication",
    "Leadership",
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Image Branding */}
        <div className="md:col-span-5 hidden md:block">
          <div className="relative rounded-[28px] overflow-hidden shadow-floating group h-[640px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
              alt="PrepWise Interview Prep"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent flex flex-col justify-end p-8 text-white space-y-2">
              <span className="px-3 py-1 bg-brand-lime text-brand-dark font-bold text-[11px] rounded-full w-fit uppercase">
                ACADEMIC EXCELLENCE
              </span>
              <h3 className="font-display font-bold text-xl leading-snug">
                Personalized AI Assessment & Career Target Matching
              </h3>
            </div>
          </div>
        </div>

        {/* Right Step 2 Form */}
        <div className="md:col-span-7">
          <GlassCard variant="white" className="p-8 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-brand-blue uppercase tracking-wider">STEP 2 OF 3</span>
              <span className="font-semibold text-slate-400">66% Complete</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-blue rounded-full" style={{ width: "66%" }} />
            </div>

            <div className="space-y-1">
              <h2 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
                Tell us more about yourself
              </h2>
              <p className="text-xs text-brand-muted">
                This information helps us personalize your AI interview and resume analysis.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  CAREER GOAL *
                </label>
                <select className="w-full px-3.5 py-3 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue">
                  <option>Software Engineer (SDE I)</option>
                  <option>Full Stack Web Developer</option>
                  <option>Data Scientist / ML Engineer</option>
                  <option>Product Manager</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  SKILLS KNOWN *
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableSkills.map((skill) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={clsx(
                          "px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200",
                          isSelected
                            ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                        )}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    INTERVIEW LANGUAGE *
                  </label>
                  <select className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue">
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    PREPARATION LEVEL *
                  </label>
                  <select className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue">
                    <option>Intermediate</option>
                    <option>Beginner</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-brand-border">
                <h4 className="text-xs font-bold text-brand-dark">Professional Links (Optional)</h4>
                <div className="space-y-2">
                  <div className="relative">
                    <LinkIcon className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="LinkedIn Profile URL"
                      className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div className="relative">
                    <Code className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="GitHub Profile URL"
                      className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Portfolio Website URL"
                      className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-brand-border rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <PrimaryButton
                  variant="primary"
                  size="lg"
                  onClick={() => router.push("/signup/step-3")}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Continue
                </PrimaryButton>
                <Link href="/signup">
                  <PrimaryButton variant="ghost" size="lg">
                    Back
                  </PrimaryButton>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
