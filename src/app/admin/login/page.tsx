"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("סיסמה שגויה. נסה שוב.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1f3c] flex items-center justify-center px-4"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(201,162,39,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="rounded-2xl w-full max-w-sm p-8 border border-[#C9A227]/20"
        style={{ background: "linear-gradient(145deg, rgba(201,162,39,0.08) 0%, rgba(201,162,39,0.02) 100%)" }}
      >
        <div className="flex flex-col items-center mb-8">
          <Logo size={56} />
          <h1 className="text-xl font-extrabold text-[#C9A227] mt-3">כניסת מנהל</h1>
          <p className="text-[#C9A227]/40 text-sm mt-1">משה ונטורה | רישוי עסקים</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#C9A227]/70 mb-1">סיסמה</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="הכנס סיסמה"
              className="w-full bg-[#0a1828] border border-[#C9A227]/20 rounded-lg px-4 py-3 text-sm text-[#C9A227] placeholder-[#C9A227]/30 focus:outline-none focus:border-[#C9A227]/60 focus:ring-1 focus:ring-[#C9A227]/30 transition-colors"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C9A227]/10 hover:bg-[#C9A227]/20 disabled:opacity-50 border border-[#C9A227]/40 hover:border-[#C9A227]/70 text-[#C9A227] font-bold py-3 rounded-full transition-all"
          >
            {loading ? "מתחבר..." : "כניסה"}
          </button>
        </form>
      </div>
    </div>
  );
}
