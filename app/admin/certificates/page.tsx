"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import { MOCK_CERTIFICATES } from "@/lib/mockData";
import {
  Award,
  UploadCloud,
  QrCode,
  CheckCircle2,
  RefreshCw,
  Download,
  Filter,
  ShieldCheck,
} from "lucide-react";

export default function CertificateManagementPage() {
  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Badge variant="blue">CREDENTIALING SUITE</Badge>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            Certificate & Credentials Management
          </h1>
          <p className="text-xs text-brand-muted">
            Issue, verify, and manage professional certifications with cryptographic integrity.
          </p>
        </div>

        <div className="flex gap-3">
          <PrimaryButton variant="secondary" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
            Export CSV
          </PrimaryButton>
          <PrimaryButton variant="primary" size="sm" icon={<Award className="w-3.5 h-3.5" />}>
            Generate Certificate
          </PrimaryButton>
        </div>
      </div>

      {/* Top Configuration & Live Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Config Box */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard variant="white" className="p-6 space-y-5">
            <h3 className="font-display font-bold text-base text-brand-dark">Certificate Configuration</h3>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase">AUTHORIZED SIGNATURE</label>
              <div className="p-4 border-2 border-dashed border-slate-200 rounded-2xl text-center space-y-1 hover:border-brand-blue cursor-pointer bg-slate-50">
                <UploadCloud className="w-5 h-5 text-brand-blue mx-auto" />
                <p className="text-xs font-semibold text-brand-dark">Drop signature PNG or click to upload</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
              <div>
                <h5 className="font-bold text-brand-dark">QR Verification</h5>
                <p className="text-[10px] text-slate-400">Embed unique validation link</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-brand-blue accent-brand-blue" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase">ID SERIAL FORMAT</label>
              <input
                type="text"
                defaultValue="PW-CERT-{YYYY}-{SEQ}"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-input font-mono"
              />
            </div>

            <PrimaryButton variant="primary" fullWidth size="md">
              Save Configuration
            </PrimaryButton>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4">
            <GlassCard variant="white" className="p-5 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">TOTAL ISSUED</span>
              <p className="font-display font-extrabold text-3xl text-brand-blue mt-1">1,284</p>
            </GlassCard>
            <GlassCard variant="white" className="p-5 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">PENDING</span>
              <p className="font-display font-extrabold text-3xl text-amber-600 mt-1">42</p>
            </GlassCard>
          </div>
        </div>

        {/* Live Template Preview */}
        <div className="lg:col-span-7">
          <GlassCard variant="white" className="p-8 border-4 border-slate-100 shadow-xl space-y-6 text-center">
            <Badge variant="soft">DYNAMIC TEMPLATE PREVIEW</Badge>

            <div className="p-8 bg-slate-900 text-white rounded-2xl border border-emerald-500/30 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                CERTIFICATE OF EXCELLENCE
              </span>
              <h3 className="font-display font-bold text-2xl">Jane S. Alexander</h3>
              <p className="text-xs text-slate-300">
                has successfully completed the comprehensive certification for the <br />
                <span className="font-bold text-white">Full-Stack Engineering FastTrack</span>
              </p>

              <div className="flex justify-between items-center text-[10px] pt-4 border-t border-slate-800 text-slate-400 font-mono">
                <span>AUTHORIZED: Dr. Robert Chen</span>
                <span>ID: PW-2024-99821</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Registry Table */}
      <GlassCard variant="white" className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-display font-bold text-base text-brand-dark">Registry of Certificates</h3>
          <Badge variant="lime">LIVE DATA</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">CERTIFICATE ID</th>
                <th className="p-3">RECIPIENT NAME</th>
                <th className="p-3">PROGRAM</th>
                <th className="p-3">ISSUE DATE</th>
                <th className="p-3">STATUS</th>
                <th className="p-3">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_CERTIFICATES.map((cert) => (
                <tr key={cert.id} className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-brand-blue">{cert.id}</td>
                  <td className="p-3 font-bold text-brand-dark">{cert.recipientName}</td>
                  <td className="p-3 text-slate-600">{cert.program}</td>
                  <td className="p-3 font-mono text-slate-500">{cert.issueDate}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        cert.status === "VERIFIED"
                          ? "success"
                          : cert.status === "PENDING"
                          ? "warning"
                          : "error"
                      }
                    >
                      {cert.status}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <button className="p-1 text-slate-400 hover:text-brand-blue">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
