"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import { MOCK_QUESTIONS, Question } from "@/lib/mockData";
import { Search, Plus, Upload, Filter, Trash2, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

export default function QuestionBankPage() {
  const [activeCategory, setActiveCategory] = useState("Aptitude");
  const [questions, setQuestions] = useState<Question[]>(MOCK_QUESTIONS);
  const [search, setSearch] = useState("");

  const toggleStatus = (id: string) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, status: !q.status } : q))
    );
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            AI Question Bank Management
          </h1>
          <p className="text-xs text-brand-muted">
            Manage question content, difficulty tags, and automated skill mapping.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <PrimaryButton variant="secondary" size="sm" icon={<Upload className="w-3.5 h-3.5" />}>
            Bulk Upload
          </PrimaryButton>
          <PrimaryButton variant="primary" size="sm" icon={<Plus className="w-3.5 h-3.5" />}>
            New Question
          </PrimaryButton>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex border-b border-brand-border overflow-x-auto gap-2">
        {["Aptitude", "English", "Psychometric", "Technical", "HR"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={clsx(
              "px-6 py-3 text-xs font-bold transition-all whitespace-nowrap border-b-2",
              activeCategory === cat
                ? "border-brand-blue text-brand-blue"
                : "border-transparent text-slate-500 hover:text-brand-dark"
            )}
          >
            {cat} Assessment
          </button>
        ))}
      </div>

      {/* Filter Options Bar */}
      <GlassCard variant="white" className="p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold uppercase text-[10px]">Difficulty:</span>
            <select className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-brand-dark">
              <option>All</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold uppercase text-[10px]">Tech Stack:</span>
            <select className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-brand-dark">
              <option>Any</option>
              <option>React</option>
              <option>Python</option>
              <option>SQL</option>
            </select>
          </div>
        </div>

        <button className="text-xs font-semibold text-slate-400 hover:text-brand-blue">
          Clear Filters
        </button>
      </GlassCard>

      {/* Question Table */}
      <GlassCard variant="white" className="p-6 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3 w-10">
                  <input type="checkbox" className="rounded text-brand-blue" />
                </th>
                <th className="p-3">QUESTION CONTENT</th>
                <th className="p-3">TYPE</th>
                <th className="p-3">TOPIC</th>
                <th className="p-3">DIFFICULTY</th>
                <th className="p-3">SKILLS</th>
                <th className="p-3">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {questions.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50">
                  <td className="p-3">
                    <input type="checkbox" className="rounded text-brand-blue" />
                  </td>
                  <td className="p-3 font-semibold text-brand-dark max-w-xs truncate">
                    {q.content}
                  </td>
                  <td className="p-3 font-mono text-slate-500">{q.type}</td>
                  <td className="p-3">
                    <Badge variant="soft">{q.topic}</Badge>
                  </td>
                  <td className="p-3">
                    <Badge
                      variant={
                        q.difficulty === "EASY"
                          ? "success"
                          : q.difficulty === "MEDIUM"
                          ? "warning"
                          : "error"
                      }
                    >
                      {q.difficulty}
                    </Badge>
                  </td>
                  <td className="p-3 text-slate-500 font-medium">
                    {q.skills.join(", ")}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleStatus(q.id)}
                      className={clsx(
                        "w-10 h-5 rounded-full p-0.5 transition-colors relative",
                        q.status ? "bg-emerald-500" : "bg-slate-300"
                      )}
                    >
                      <span
                        className={clsx(
                          "w-4 h-4 rounded-full bg-white block transition-transform",
                          q.status ? "translate-x-5" : "translate-x-0"
                        )}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center text-xs text-slate-500 pt-4 border-t border-slate-100">
          <span>Showing 1 - 25 of 1,420 questions</span>
          <div className="flex gap-1 font-bold">
            <button className="w-7 h-7 rounded bg-brand-blue text-white">1</button>
            <button className="w-7 h-7 rounded hover:bg-slate-100">2</button>
            <button className="w-7 h-7 rounded hover:bg-slate-100">3</button>
            <span className="px-1">...</span>
            <button className="w-7 h-7 rounded hover:bg-slate-100">57</button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
