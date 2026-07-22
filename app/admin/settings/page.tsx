"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import {
  Settings,
  Shield,
  Lock,
  Upload,
  CheckCircle2,
  Save,
  Sliders,
  Award,
  Key,
} from "lucide-react";

export default function PlatformSettingsPage() {
  const [sso, setSso] = useState(true);
  const [emailVerify, setEmailVerify] = useState(true);
  const [qrCode, setQrCode] = useState(true);
  const [strictness, setStrictness] = useState(65);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 font-sans pb-24">
      <div>
        <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
          Platform Settings
        </h1>
        <p className="text-xs text-brand-muted">
          Manage your PrepWise AI instance configuration, authentication protocols, and administrative security preferences.
        </p>
      </div>

      {/* General Settings */}
      <GlassCard variant="white" className="p-6 space-y-6">
        <h3 className="font-display font-bold text-base text-brand-dark border-b border-slate-100 pb-3">
          General Settings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase">PLATFORM NAME</label>
            <input
              type="text"
              defaultValue="PrepWise AI"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase">INSTITUTION</label>
            <input
              type="text"
              defaultValue="KJ Somaiya College of Engineering"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
        </div>
      </GlassCard>

      {/* Authentication */}
      <GlassCard variant="white" className="p-6 space-y-6">
        <h3 className="font-display font-bold text-base text-brand-dark border-b border-slate-100 pb-3">
          Authentication Protocols
        </h3>

        <div className="space-y-4 text-xs">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div>
              <h5 className="font-bold text-brand-dark">Google Single Sign-On (SSO)</h5>
              <p className="text-slate-400">Allow login via organizational Google Workspace accounts.</p>
            </div>
            <input
              type="checkbox"
              checked={sso}
              onChange={() => setSso(!sso)}
              className="w-5 h-5 text-brand-blue accent-brand-blue"
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div>
              <h5 className="font-bold text-brand-dark">Email Verification</h5>
              <p className="text-slate-400">Require email confirmation for all new registrations.</p>
            </div>
            <input
              type="checkbox"
              checked={emailVerify}
              onChange={() => setEmailVerify(!emailVerify)}
              className="w-5 h-5 text-brand-blue accent-brand-blue"
            />
          </div>
        </div>
      </GlassCard>

      {/* AI Interview Strictness Configuration */}
      <GlassCard variant="white" className="p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-display font-bold text-base text-brand-dark flex items-center gap-2">
            <Sliders className="w-4 h-4 text-brand-blue" /> AI Interview Strictness
          </h3>
          <Badge variant="blue">{strictness}% Strictness</Badge>
        </div>

        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="100"
            value={strictness}
            onChange={(e) => setStrictness(Number(e.target.value))}
            className="w-full text-brand-blue accent-brand-blue"
          />
          <div className="flex justify-between text-[11px] font-semibold text-slate-400">
            <span>Conversational</span>
            <span>Balanced</span>
            <span>Strict / Academic</span>
          </div>
        </div>
      </GlassCard>

      {/* Security & Audit Logs */}
      <GlassCard variant="white" className="p-6 space-y-6">
        <h3 className="font-display font-bold text-base text-brand-dark border-b border-slate-100 pb-3">
          Security & Audit Logs
        </h3>

        <div className="space-y-2 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
            <div>
              <span className="font-bold text-brand-dark">Platform Config Changed</span>
              <p className="text-[10px] text-slate-400">ADMIN: alex.chen@prepwise.ai</p>
            </div>
            <span className="text-[10px] text-slate-400">2 mins ago</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
            <div>
              <span className="font-bold text-brand-dark">New Certificate Template Uploaded</span>
              <p className="text-[10px] text-slate-400">ADMIN: sarah.miller@prepwise.ai</p>
            </div>
            <span className="text-[10px] text-slate-400">45 mins ago</span>
          </div>
        </div>
      </GlassCard>

      {/* Sticky Save Changes Bar */}
      <div className="fixed bottom-0 left-64 right-0 bg-white/90 backdrop-blur-md border-t border-brand-border py-4 px-8 z-40 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">
          {saved ? "✓ Changes saved successfully!" : "Last saved today at 14:32 PM"}
        </span>

        <div className="flex gap-3">
          <PrimaryButton variant="ghost" size="sm">
            Discard Changes
          </PrimaryButton>
          <PrimaryButton variant="primary" size="sm" onClick={handleSave} icon={<Save className="w-3.5 h-3.5" />}>
            Save All Changes
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
