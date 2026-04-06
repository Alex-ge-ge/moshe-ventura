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
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-extrabold text-[#1B3A6B] mb-2">הפנייה נשלחה!</h3>
        <p className="text-gray-600 leading-relaxed">
          קיבלנו את פנייתך ונחזור אליך בהקדם האפשרי — בדרך כלל תוך 24 שעות.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[#1B3A6B] underline hover:text-[#C9A227] transition-colors"
        >
          שלח פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5"
    >
      <h2 className="text-xl font-bold text-[#1B3A6B]">שלח לנו פנייה</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            שם מלא <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="ישראל ישראלי"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            טלפון <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            type="tel"
            placeholder="050-000-0000"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          אימייל
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="example@email.com"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors"
        />
      </div>

      {/* Business type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          סוג העסק
        </label>
        <select
          name="business_type"
          value={form.business_type}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors bg-white"
        >
          <option value="">-- בחר סוג עסק --</option>
          {businessTypes.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          פרט את הצורך שלך
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="ספר לנו על העסק שלך ומה אתה צריך..."
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B] transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">שגיאה בשליחת הטופס. אנא נסה שוב.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#C9A227] hover:bg-[#e6c547] disabled:opacity-60 text-[#1B3A6B] font-bold py-3 rounded-xl text-base transition-all"
      >
        {status === "loading" ? "שולח..." : "שלח פנייה"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        הייעוץ הראשוני חינם. נחזור אליך תוך 24 שעות.
      </p>
    </form>
  );
}
