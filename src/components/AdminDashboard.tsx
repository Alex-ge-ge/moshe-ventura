"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import type { Lead } from "@/lib/db";

const statusLabels: Record<Lead["status"], string> = {
  new: "חדש",
  in_progress: "בטיפול",
  done: "טופל",
};

const statusColors: Record<Lead["status"], string> = {
  new: "bg-blue-900/40 text-blue-300 border border-blue-500/30",
  in_progress: "bg-yellow-900/40 text-yellow-300 border border-yellow-500/30",
  done: "bg-green-900/40 text-green-300 border border-green-500/30",
};

const glassCard = {
  background: "linear-gradient(145deg, rgba(201,162,39,0.07) 0%, rgba(201,162,39,0.02) 100%)",
};

export default function AdminDashboard({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [filter, setFilter] = useState<"all" | Lead["status"]>("all");
  const [updating, setUpdating] = useState<number | null>(null);
  const router = useRouter();

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  async function updateStatus(id: number, status: Lead["status"]) {
    setUpdating(id);
    const res = await fetch("/api/admin/leads/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    }
    setUpdating(null);
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  const counts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    in_progress: leads.filter((l) => l.status === "in_progress").length,
    done: leads.filter((l) => l.status === "done").length,
  };

  return (
    <div className="min-h-screen bg-[#0d1f3c]" dir="rtl"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(201,162,39,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      {/* Top bar */}
      <header className="bg-[#0a1828]/90 backdrop-blur-md border-b border-[#C9A227]/15 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <div>
            <p className="font-bold text-sm text-[#C9A227] leading-none">פאנל ניהול</p>
            <p className="text-[#C9A227]/40 text-xs">משה ונטורה | רישוי עסקים</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-[#C9A227]/50 hover:text-[#C9A227] transition-colors"
        >
          יציאה ←
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { key: "all", label: "סה״כ פניות", border: "border-t-[#C9A227]/60" },
            { key: "new", label: "חדשות", border: "border-t-blue-400/60" },
            { key: "in_progress", label: "בטיפול", border: "border-t-yellow-400/60" },
            { key: "done", label: "טופלו", border: "border-t-green-400/60" },
          ].map((s) => (
            <button
              key={s.key}
              onClick={() => setFilter(s.key as typeof filter)}
              className={`rounded-xl p-4 text-center border-t-4 border border-[#C9A227]/10 ${s.border} transition-all hover:border-[#C9A227]/30 ${filter === s.key ? "ring-1 ring-[#C9A227]/40" : ""}`}
              style={glassCard}
            >
              <p className="text-3xl font-extrabold text-[#C9A227]">
                {counts[s.key as keyof typeof counts]}
              </p>
              <p className="text-sm text-[#C9A227]/50 mt-1">{s.label}</p>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-[#C9A227]/15 overflow-hidden" style={glassCard}>
          <div className="px-6 py-4 border-b border-[#C9A227]/10 flex items-center justify-between">
            <h2 className="font-bold text-[#C9A227]">
              פניות {filter !== "all" ? `— ${statusLabels[filter as Lead["status"]]}` : ""}
            </h2>
            <span className="text-sm text-[#C9A227]/40">{filtered.length} פניות</span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center text-[#C9A227]/40">
              <p className="text-4xl mb-2">📭</p>
              <p>אין פניות להצגה</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-[#C9A227]/10 text-[#C9A227]/40 text-xs uppercase">
                  <tr>
                    {["שם", "טלפון", "אימייל", "סוג עסק", "הודעה", "תאריך", "סטטוס"].map((h) => (
                      <th key={h} className="text-right px-4 py-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C9A227]/05">
                  {filtered.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#C9A227]/03 transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#C9A227] whitespace-nowrap">{lead.name}</td>
                      <td className="px-4 py-3">
                        <a href={`tel:${lead.phone}`} className="text-[#C9A227]/70 hover:text-[#C9A227] transition-colors font-medium">
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-[#C9A227]/60">
                        {lead.email
                          ? <a href={`mailto:${lead.email}`} className="hover:text-[#C9A227] transition-colors">{lead.email}</a>
                          : <span className="text-[#C9A227]/20">—</span>}
                      </td>
                      <td className="px-4 py-3 text-[#C9A227]/60 whitespace-nowrap">
                        {lead.business_type || <span className="text-[#C9A227]/20">—</span>}
                      </td>
                      <td className="px-4 py-3 text-[#C9A227]/50 max-w-xs">
                        {lead.message
                          ? <span className="line-clamp-2">{lead.message}</span>
                          : <span className="text-[#C9A227]/20">—</span>}
                      </td>
                      <td className="px-4 py-3 text-[#C9A227]/40 whitespace-nowrap text-xs">
                        {new Date(lead.created_at).toLocaleString("he-IL", {
                          day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={lead.status}
                          disabled={updating === lead.id}
                          onChange={(e) => updateStatus(lead.id, e.target.value as Lead["status"])}
                          className={`text-xs font-semibold px-2 py-1 rounded-full cursor-pointer bg-transparent ${statusColors[lead.status]}`}
                        >
                          <option value="new">חדש</option>
                          <option value="in_progress">בטיפול</option>
                          <option value="done">טופל</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
