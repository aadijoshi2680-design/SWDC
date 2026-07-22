"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { UploadCloud, FileText, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export default function OnboardingStep3Page() {
  const router = useRouter();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Branding */}
        <div className="md:col-span-5 hidden md:block">
          <div className="relative rounded-[28px] overflow-hidden shadow-floating group h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
              alt="PrepWise Resume Scanner"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/50 to-transparent flex flex-col justify-end p-8 text-white space-y-3">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 space-y-2">
                <h4 className="font-display font-bold text-lg">Step 3: Finalize Your Profile</h4>
                <p className="text-xs text-slate-300">
                  We're almost there. Your resume is the blueprint for your custom learning path.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Step 3 Form */}
        <div className="md:col-span-7">
          <GlassCard variant="white" className="p-8 sm:p-10 space-y-6">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-brand-blue uppercase tracking-wider">ONBOARDING PROGRESS</span>
              <span className="font-semibold text-slate-400">Step 3 of 3</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-brand-blue rounded-full" style={{ width: "100%" }} />
            </div>

            <div className="space-y-1">
              <h2 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
                Upload Your Resume
              </h2>
              <p className="text-xs text-brand-muted leading-relaxed">
                Your resume helps PrepWise AI personalize interview questions, identify missing skills, evaluate ATS compatibility, and recommend the most relevant practice content.
              </p>
            </div>

            {/* Drag and Drop Container */}
            <label className="block relative cursor-pointer border-2 border-dashed border-brand-blue/30 hover:border-brand-blue bg-brand-blue/5 hover:bg-brand-blue/10 p-8 rounded-card text-center space-y-3 transition-all">
              <input type="file" accept=".pdf,.docx" onChange={handleFileChange} className="hidden" />
              <div className="w-14 h-14 rounded-2xl bg-white text-brand-blue mx-auto flex items-center justify-center shadow-md">
                <UploadCloud className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <p className="font-display font-bold text-sm text-brand-dark">
                  {uploadedFile ? uploadedFile.name : "Drag & drop your file here"}
                </p>
                <p className="text-xs text-brand-muted">
                  {uploadedFile ? `${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB` : "or click to browse from your computer"}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2">
                <Badge variant="soft">PDF, DOCX</Badge>
                <Badge variant="soft">MAX 10 MB</Badge>
              </div>
            </label>

            {/* Security note */}
            <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600">
              <Shield className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <span>
                Your resume is securely stored and is only used to personalize your placement preparation experience.
              </span>
            </div>

            <PrimaryButton
              variant="primary"
              fullWidth
              size="lg"
              onClick={() => router.push("/student/dashboard")}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Dashboard
            </PrimaryButton>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
