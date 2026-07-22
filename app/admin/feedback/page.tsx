"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import { MOCK_TICKETS, Ticket } from "@/lib/mockData";
import {
  MessageSquare,
  Search,
  CheckCircle2,
  Send,
  Paperclip,
  Smile,
  Star,
  Clock,
} from "lucide-react";
import { clsx } from "clsx";

export default function FeedbackSupportPage() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket>(MOCK_TICKETS[0]);
  const [replyText, setReplyText] = useState("");

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Badge variant="blue">SUPPORT DESK</Badge>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            Feedback & Support Tickets
          </h1>
          <p className="text-xs text-brand-muted">
            Manage student support inquiries, feature requests, and system feedback.
          </p>
        </div>

        <PrimaryButton variant="primary" size="sm" icon={<MessageSquare className="w-3.5 h-3.5" />}>
          New Support Ticket
        </PrimaryButton>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">OPEN TICKETS</span>
          <p className="font-display font-extrabold text-3xl text-brand-dark">124</p>
          <span className="text-[10px] font-semibold text-rose-600">+12%</span>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">RESOLVED TODAY</span>
          <p className="font-display font-extrabold text-3xl text-emerald-600">42</p>
          <span className="text-[10px] font-semibold text-emerald-600">Active</span>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">AVG RESPONSE TIME</span>
          <p className="font-display font-extrabold text-3xl text-brand-blue">14m</p>
          <span className="text-[10px] font-semibold text-emerald-600">-5m faster</span>
        </GlassCard>

        <GlassCard variant="white" className="p-5 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">CSAT RATING</span>
          <p className="font-display font-extrabold text-3xl text-amber-500">4.9 / 5</p>
          <span className="text-[10px] font-semibold text-amber-600">Top Rated</span>
        </GlassCard>
      </div>

      {/* Ticket Management Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Ticket List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex border-b border-brand-border gap-2">
            <button className="px-4 py-2 text-xs font-bold border-b-2 border-brand-blue text-brand-blue">
              New
            </button>
            <button className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-brand-dark">
              In Progress
            </button>
            <button className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-brand-dark">
              Resolved
            </button>
          </div>

          <div className="space-y-3">
            {MOCK_TICKETS.map((t) => {
              const isSelected = selectedTicket.id === t.id;
              return (
                <GlassCard
                  key={t.id}
                  variant={isSelected ? "white" : "white"}
                  onClick={() => setSelectedTicket(t)}
                  className={clsx(
                    "p-5 cursor-pointer space-y-3 transition-all border-l-4",
                    isSelected
                      ? "border-l-brand-blue shadow-md bg-brand-blue-light/30"
                      : "border-l-transparent hover:border-slate-300"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={t.avatar} alt={t.user} className="w-7 h-7 rounded-full object-cover" />
                      <div>
                        <span className="font-bold text-xs text-brand-dark">{t.user}</span>
                        <span className="text-[10px] text-slate-400 block">Ticket #{t.id} • {t.time}</span>
                      </div>
                    </div>
                    <Badge variant={t.priority === "Urgent" ? "error" : "warning"}>
                      {t.priority}
                    </Badge>
                  </div>

                  <h4 className="font-bold text-xs text-brand-dark">{t.subject}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">{t.message}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Right Column: Ticket Thread Panel */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard variant="white" className="p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono text-slate-400 font-bold">TICKET #{selectedTicket.id}</span>
                <h3 className="font-display font-bold text-lg text-brand-dark">{selectedTicket.subject}</h3>
              </div>
              <PrimaryButton variant="primary" size="sm" icon={<CheckCircle2 className="w-3.5 h-3.5" />}>
                Mark Resolved
              </PrimaryButton>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="text-slate-400 font-bold uppercase text-[10px]">PRIORITY:</span>
              <Badge variant={selectedTicket.priority === "Urgent" ? "error" : "warning"}>
                {selectedTicket.priority}
              </Badge>

              <span className="text-slate-400 font-bold uppercase text-[10px] ml-4">STATUS:</span>
              <Badge variant="blue">{selectedTicket.status}</Badge>
            </div>

            {/* Conversation Messages */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <img src={selectedTicket.avatar} alt={selectedTicket.user} className="w-8 h-8 rounded-full object-cover shrink-0" />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-dark">{selectedTicket.user}</span>
                    <span className="text-[10px] text-slate-400">12:42 PM</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{selectedTicket.message}</p>
                </div>
              </div>

              <div className="p-3 bg-amber-50 text-amber-800 rounded-2xl border border-amber-200 text-xs italic">
                🔒 Internal Note: Checking server logs for User ID 8823.
              </div>

              <div className="flex gap-3 bg-brand-blue-light/60 p-4 rounded-2xl border border-brand-blue/20 text-xs text-brand-dark">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center shrink-0">
                  A
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-brand-dark block">Admin Support</span>
                  <p>
                    Hello Alex, I'm looking into this right now. It seems our AI analysis engine is experiencing high load. I've manually prioritized your report generation.
                  </p>
                </div>
              </div>
            </div>

            {/* Reply Input Box */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <textarea
                rows={3}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply here..."
                className="w-full p-4 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-400">
                  <button className="p-1.5 hover:bg-slate-100 rounded-lg">
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-slate-100 rounded-lg">
                    <Smile className="w-4 h-4" />
                  </button>
                </div>

                <PrimaryButton variant="primary" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
                  Send Reply
                </PrimaryButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
