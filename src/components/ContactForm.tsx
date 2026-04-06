"use client";

import { useState } from "react";

const businessTypes = [
  "מסעדה / בית קפה",
  "מוסך",
  "מחסן / לוגיסטיקה",
  "מפעל / תעשייה",
  "מרכול / מכולת",
  "אחר",
];

const glassCard = {
  background: "linear-gradient(145deg, rgba(201,162,39,0.07) 0%, rgba(201,162,39,0.02) 100%)",
};

const inputClass =
  "w-full bg-[#0a1828] border border-[#C9A227]/20 rounded-lg px-4 py-2.5 text-sm text-[#C9A227] placeholder-[#C9A227]/30 focus:outline-none focus:border-[#C9A227]/60 focus:ring-1 focus:ring-[#C9A227]/30 transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business_type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", business_type: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#C9A227]/20 p-10 text-center" style={glassCard}>
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-extrabold text-[#C9A227] mb-2">הפנייה נשלחה!</h3>
        <p className="text-[#C9A227]/60 leading-relaxed">
          קיבלנו את פנייתך ונחזור אליך בהקדם האפשרי — בדרך כלל תוך 24 שעות.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[#C9A227]/50 underline hover:text-[#C9A227] transition-colors"
        >
          שלח פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#C9A227]/15 p-6 space-y-5"
      style={glassCard}
    >
      <h2 className="text-xl font-bold text-[#C9A227]">שלח לנו פנייה</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#C9A227]/70 mb-1">
            שם מלא <span className="text-red-400">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="ישראל ישראלי"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#C9A227]/70 mb-1">
            טלפון <span className="text-red-400">*</span>
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            type="tel"
            placeholder="050-000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#C9A227]/70 mb-1">אימייל</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="example@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#C9A227]/70 mb-1">סוג העסק</label>
        <select
          name="business_type"
          value={form.business_type}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">-- בחר סוג עסק --</option>
          {businessTypes.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#C9A227]/70 mb-1">פרט את הצורך שלך</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="ספר לנו על העסק שלך ומה אתה צריך..."
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">שגיאה בשליחת הטופס. אנא נסה שוב.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#C9A227]/10 hover:bg-[#C9A227]/20 disabled:opacity-50 border border-[#C9A227]/40 hover:border-[#C9A227]/70 text-[#C9A227] font-bold py-3 rounded-full text-base transition-all"
      >
        {status === "loading" ? "שולח..." : "שלח פנייה"}
      </button>

      <p className="text-xs text-[#C9A227]/35 text-center">
        הייעוץ הראשוני חינם. נחזור אליך תוך 24 שעות.
      </p>
    </form>
  );
}
