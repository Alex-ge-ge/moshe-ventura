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
  new: "bg-blue-100 text-blue-800",
  in_progress: "bg-yellow-100 text-yellow-800",
  done: "bg-green-100 text-green-800",
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
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status } : l))
      );
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
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Top bar */}
      <header className="bg-[#1B3A6B] text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <div>
            <p className="font-bold text-sm leading-none">פאנל ניהול</p>
            <p className="text-[#C9A227] text-xs">משה ונטורה | רישוי עסקים</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          יציאה ←
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { key: "all", label: "סה״כ פניות", color: "border-[#1B3A6B]" },
            { key: "new", label: "חדשות", color: "border-blue-500" },
            { key: "in_progress", label: "בטיפול", color: "border-yellow-500" },
            { key: "done", label: "טופלו", color: "border-green-500" },
          ].map((s) => (
            <button
              key={s.key}
              onClick={() => setFilter(s.key as typeof filter)}
              className={`bg-white rounded-xl p-4 text-center border-t-4 shadow-sm cursor-pointer transition-all hover:shadow-md ${
                filter === s.key ? "ring-2 ring-[#C9A227]" : ""
              } ${s.color}`}
            >
              <p className="text-3xl font-extrabold text-[#1B3A6B]">
                {counts[s.key as keyof typeof counts]}
              </p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </button>
          ))}
        </div>

        {/* Leads table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-[#1B3A6B]">
              פניות {filter !== "all" ? `— ${statusLabels[filter as Lead["status"]]}` : ""}
            </h2>
            <span className="text-sm text-gray-400">{filtered.length} פניות</span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-400">
              <p className="text-4xl mb-2">📭</p>
              <p>אין פניות להצגה</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                  <tr>
                    <th className="text-right px-4 py-3 font-semibold">שם</th>
                    <th className="text-right px-4 py-3 font-semibold">טלפון</th>
                    <th className="text-right px-4 py-3 font-semibold">אימייל</th>
                    <th className="text-right px-4 py-3 font-semibold">סוג עסק</th>
                    <th className="text-right px-4 py-3 font-semibold">הודעה</th>
                    <th className="text-right px-4 py-3 font-semibold">תאריך</th>
                    <th className="text-right px-4 py-3 font-semibold">סטטוס</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#1B3A6B] whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={`tel:${lead.phone}`}
                          className="text-[#1B3A6B] hover:text-[#C9A227] font-medium transition-colors"
                        >
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {lead.email ? (
                          <a href={`mailto:${lead.email}`} className="hover:text-[#C9A227] transition-colors">
                            {lead.email}
                          </a>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        {lead.business_type || <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-500 max-w-xs">
                        {lead.message ? (
                          <span className="line-clamp-2">{lead.message}</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">
                        {new Date(lead.created_at).toLocaleString("he-IL", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={lead.status}
                          disabled={updating === lead.id}
                          onChange={(e) =>
                            updateStatus(lead.id, e.target.value as Lead["status"])
                          }
                          className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${statusColors[lead.status]}`}
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
