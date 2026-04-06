import ContactForm from "@/components/ContactForm";

const gradientText = {
  background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const glassCard = {
  background: "linear-gradient(145deg, rgba(201,162,39,0.07) 0%, rgba(201,162,39,0.02) 100%)",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0d1f3c] min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundSize: "60px 60px",
            backgroundImage: "linear-gradient(to right, rgba(201,162,39,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.05) 1px, transparent 1px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4" style={gradientText}>צור קשר</h1>
          <p className="text-[#C9A227]/55 text-lg">
            מלא את הטופס ונחזור אליך תוך 24 שעות — ללא עלות וללא התחייבות
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#C9A227]">פרטי התקשרות</h2>

            <a href="tel:054-589-2059"
              className="flex items-center gap-3 rounded-xl p-4 border border-[#C9A227]/15 hover:border-[#C9A227]/40 transition-colors"
              style={glassCard}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl border border-[#C9A227]/20"
                style={{ background: "rgba(201,162,39,0.1)" }}
              >📞</div>
              <div>
                <p className="text-xs text-[#C9A227]/50">טלפון</p>
                <p className="font-bold text-[#C9A227]">054-589-2059</p>
              </div>
            </a>

            <a href="mailto:moshevantura@gmail.com"
              className="flex items-center gap-3 rounded-xl p-4 border border-[#C9A227]/15 hover:border-[#C9A227]/40 transition-colors"
              style={glassCard}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl border border-[#C9A227]/20"
                style={{ background: "rgba(201,162,39,0.1)" }}
              >✉️</div>
              <div>
                <p className="text-xs text-[#C9A227]/50">אימייל</p>
                <p className="font-bold text-[#C9A227] text-sm">moshevantura@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-xl p-4 border border-[#C9A227]/15"
              style={glassCard}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl border border-[#C9A227]/20"
                style={{ background: "rgba(201,162,39,0.1)" }}
              >⏰</div>
              <div>
                <p className="text-xs text-[#C9A227]/50">שעות פעילות</p>
                <p className="font-bold text-[#C9A227] text-sm">א׳–ה׳ | 08:00–18:00</p>
                <p className="font-bold text-[#C9A227] text-sm">יום ו׳ | 08:00–13:00</p>
              </div>
            </div>

            <div className="rounded-xl p-4 border border-[#C9A227]/20" style={glassCard}>
              <p className="text-sm text-[#C9A227] font-semibold mb-1">💡 שים לב</p>
              <p className="text-xs text-[#C9A227]/55 leading-relaxed">
                הייעוץ הראשוני הוא חינם לחלוטין. לאחר הבנת הצרכים שלך נשלח הצעת מחיר מפורטת.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
