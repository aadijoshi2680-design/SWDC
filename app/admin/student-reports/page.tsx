"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import { MOCK_STUDENTS, StudentRecord } from "@/lib/mockData";
import { X, Mail, Phone, CheckCircle2, Sparkles, Filter, ChevronRight } from "lucide-react";

export default function StudentReportsPage() {
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(MOCK_STUDENTS[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <div className="relative space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            Student Reports
          </h1>
          <p className="text-xs text-brand-muted">
            Monitor every student's placement preparation journey.
          </p>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">STUDENTS ABOVE 80%</span>
          <p className="font-display font-extrabold text-3xl text-emerald-600">412</p>
        </GlassCard>
        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">STUDENTS BELOW 50%</span>
          <p className="font-display font-extrabold text-3xl text-rose-600">12</p>
        </GlassCard>
        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">CERTIFICATES ISSUED</span>
          <p className="font-display font-extrabold text-3xl text-brand-blue">526</p>
        </GlassCard>
      </div>

      {/* Main Student List Table */}
      <GlassCard variant="white" className="p-6 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">STUDENT</th>
                <th className="p-3">DEPARTMENT</th>
                <th className="p-3">YEAR</th>
                <th className="p-3">APTITUDE</th>
                <th className="p-3">ENGLISH</th>
                <th className="p-3">READINESS</th>
                <th className="p-3">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_STUDENTS.map((st) => (
                <tr
                  key={st.id}
                  onClick={() => {
                    setSelectedStudent(st);
                    setIsDrawerOpen(true);
                  }}
                  className="hover:bg-brand-blue-light/50 cursor-pointer transition-colors"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img src={st.avatar} alt={st.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <span className="font-bold text-brand-dark block">{st.name}</span>
                        <span className="text-[10px] text-slate-400">{st.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-slate-600">{st.department}</td>
                  <td className="p-3 font-semibold text-slate-600">{st.year}</td>
                  <td className="p-3 font-bold text-emerald-600">{st.aptitudeScore}%</td>
                  <td className="p-3 font-bold text-emerald-600">{st.englishScore}%</td>
                  <td className="p-3">
                    <Badge variant={st.readinessScore > 80 ? "lime" : "blue"}>
                      {st.readinessScore}% Ready
                    </Badge>
                  </td>
                  <td className="p-3">
                    <button className="p-1 hover:bg-slate-200 rounded text-brand-blue font-bold flex items-center gap-1">
                      Details <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Slide-over Drawer for Student Detail (20.png reference) */}
      {isDrawerOpen && selectedStudent && (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-brand-border shadow-2xl p-6 overflow-y-auto space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="font-display font-bold text-lg text-brand-dark">Student Detail</h3>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-slate-400 hover:text-brand-dark rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center space-y-2">
            <img
              src={selectedStudent.avatar}
              alt={selectedStudent.name}
              className="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-brand-blue/20"
            />
            <h4 className="font-display font-bold text-xl text-brand-dark">{selectedStudent.name}</h4>
            <p className="text-xs text-slate-500">
              {selectedStudent.id} | {selectedStudent.department}
            </p>

            <div className="flex justify-center gap-2 pt-2">
              <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">
                <Mail className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Assessment Summary Progress Bars */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">ASSESSMENT SUMMARY</h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Aptitude</span>
                  <span className="text-brand-blue">{selectedStudent.aptitudeScore}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue rounded-full" style={{ width: `${selectedStudent.aptitudeScore}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>English Proficiency</span>
                  <span className="text-brand-blue">{selectedStudent.englishScore}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue rounded-full" style={{ width: `${selectedStudent.englishScore}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold mb-1">
                  <span>Psychometric</span>
                  <span className="text-brand-blue">{selectedStudent.psychometricScore}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue rounded-full" style={{ width: `${selectedStudent.psychometricScore}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights Card */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-xs text-emerald-900">
            <div className="flex items-center gap-1.5 font-bold">
              <Sparkles className="w-4 h-4 text-emerald-600" /> AI INSIGHTS
            </div>
            <p>
              Student exhibits strong logical reasoning and verbal clarity. High potential for Tier-1 campus placements.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
