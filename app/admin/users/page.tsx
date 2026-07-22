"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import { Search, Filter, Download, MoreVertical, Shield, Trash2, Ban } from "lucide-react";

export default function UserManagementPage() {
  const [search, setSearch] = useState("");

  const users = [
    {
      name: "Jane Doe",
      email: "jane.doe@university.edu",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      role: "Student",
      interviews: "12 / 16 Completed",
      progress: 75,
      status: "Active",
    },
    {
      name: "Marcus Sterling",
      email: "m.sterling@techcorp.io",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      role: "Professional",
      interviews: "2 / 8 Completed",
      progress: 25,
      status: "Suspended",
    },
    {
      name: "Rahul Sharma",
      email: "rahul.sharma@kjsieit.edu",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      role: "Student",
      interviews: "14 / 16 Completed",
      progress: 88,
      status: "Active",
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-brand-dark tracking-tight">
            User Management
          </h1>
          <p className="text-xs text-brand-muted">
            Manage user privileges, status, and track academic progress.
          </p>
        </div>

        <PrimaryButton variant="primary" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
          Export Users
        </PrimaryButton>
      </div>

      {/* Filter Controls */}
      <GlassCard variant="white" className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">ROLE</label>
            <select className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue">
              <option>All Roles</option>
              <option>Student</option>
              <option>Faculty / Admin</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">STATUS</label>
            <select className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue">
              <option>All Status</option>
              <option>Active</option>
              <option>Suspended</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">ADVANCED SEARCH</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ID, Email, or Full Name..."
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-input focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <PrimaryButton variant="primary" size="sm" icon={<Filter className="w-3.5 h-3.5" />}>
                Filter
              </PrimaryButton>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* User Table Card */}
      <GlassCard variant="white" className="p-6 space-y-4">
        <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-100">
          <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
            <input type="checkbox" className="rounded text-brand-blue accent-brand-blue" />
            <span>Select All (1,248 users)</span>
          </label>

          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs font-semibold text-amber-700 hover:bg-amber-50 rounded-lg">
              Bulk Suspend
            </button>
            <button className="px-3 py-1 text-xs font-semibold text-rose-700 hover:bg-rose-50 rounded-lg">
              Bulk Delete
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">USER</th>
                <th className="p-3">ROLE</th>
                <th className="p-3">INTERVIEWS</th>
                <th className="p-3">STATUS</th>
                <th className="p-3">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((u, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <span className="font-bold text-brand-dark block">{u.name}</span>
                        <span className="text-[10px] text-slate-400">{u.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <Badge variant={u.role === "Student" ? "blue" : "soft"}>{u.role}</Badge>
                  </td>
                  <td className="p-3">
                    <div className="space-y-1 w-36">
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-blue rounded-full" style={{ width: `${u.progress}%` }} />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono block">{u.interviews}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={`font-bold ${u.status === "Active" ? "text-emerald-600" : "text-rose-600"}`}>
                      ● {u.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="p-1 hover:bg-slate-200 rounded">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
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
