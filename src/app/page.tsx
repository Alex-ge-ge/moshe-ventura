import Link from "next/link";

const authorities = [
  { icon: "🏛️", name: "עירייה" },
  { icon: "🚒", name: "כיבוי אש" },
  { icon: "👮", name: "משטרה" },
  { icon: "🏥", name: "משרד הבריאות" },
  { icon: "🌿", name: "איכות הסביבה" },
  { icon: "👷", name: "משרד העבודה" },
];

const businessTypes = [
  "מסעדות ובתי קפה",
  "מוסכים",
  "מחסנים ולוגיסטיקה",
  "מפעלים ותעשייה",
  "מרכולים ומכולות",
  "ועוד כל סוג עסק",
];

const steps = [
  { num: "01", title: "ייעוץ ראשוני חינם", desc: "בודקים את המצב שלך ומגדירים מה נדרש" },
  { num: "02", title: "הכנת תוכנית העסק", desc: "הכנת כל המסמכים הנדרשים לרישיון" },
  { num: "03", title: "הגשה וליווי", desc: "הגשה לעירייה וליווי מול כל הרשויות" },
  { num: "04", title: "קבלת הרישיון", desc: "מקבלים את הרישיון — ורק אז משלמים את היתרה" },
];

export default function HomePage() {
  return (
    <div className="bg-[#0d1f3c]">

      {/* HERO */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundSize: "60px 60px",
            backgroundImage: "linear-gradient(to right, rgba(201,162,39,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.05) 1px, transparent 1px)",
          }}
        />
        {/* Aurora */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] rounded-full blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,162,39,0.1) 0%, rgba(27,58,107,0.15) 50%, transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227]/80 text-sm font-semibold px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
            הנדסאי בניין | תברואן מוסמך
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{
              background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            רישוי עסקים בלי כאב ראש
            <br />
            משה ונטורה מטפל בשבילך
          </h1>
          <p className="text-lg md:text-xl text-[#C9A227]/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            קיבלת סירוב מהעירייה? אין לך זמן לרוץ בין הרשויות?<br />
            משה ינהל עבורך את כל התהליך — מהתוכנית ועד קבלת הרישיון.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#C9A227]/10 hover:bg-[#C9A227]/20 border border-[#C9A227]/40 hover:border-[#C9A227]/80 text-[#C9A227] font-bold px-8 py-4 rounded-full text-lg transition-all backdrop-blur-sm shadow-lg"
            >
              קבל ייעוץ חינם עכשיו
            </Link>
            <Link
              href="/process"
              className="border border-[#C9A227]/20 hover:border-[#C9A227]/40 text-[#C9A227]/60 hover:text-[#C9A227] px-8 py-4 rounded-full text-lg transition-all"
            >
              איך זה עובד?
            </Link>
          </div>
        </div>
      </section>

      {/* AUTHORITIES STRIP */}
      <section className="border-y border-[#C9A227]/10 py-6 px-4 bg-[#0a1828]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#C9A227]/50 text-xs font-bold tracking-widest uppercase mb-4">
            ניהול מול כל הרשויות
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {authorities.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-2 bg-[#C9A227]/05 border border-[#C9A227]/15 rounded-full px-4 py-2 text-[#C9A227]/70 text-sm backdrop-blur-sm"
              >
                <span>{a.icon}</span>
                <span>{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MOSHE */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12"
            style={{
              background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            למה לבחור במשה ונטורה?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "מומחיות בלתי מתפשרת", desc: "הנדסאי בניין ותברואן מוסמך עם ידע מעמיק בדרישות כל רשות ורשות." },
              { icon: "💼", title: "אתה לא צריך לזוז", desc: "משה מנהל הכל בשמך — כתיבה, הגשה, מעקב, ותשובות לרשויות." },
              { icon: "✅", title: "תשלום לאחר הצלחה", desc: "70% מהשכר משולמים רק לאחר קבלת הרישיון." },
            ].map((card) => (
              <div key={card.title}
                className="rounded-2xl p-6 text-center border border-[#C9A227]/15 backdrop-blur-sm"
                style={{ background: "linear-gradient(145deg, rgba(201,162,39,0.07) 0%, rgba(201,162,39,0.02) 100%)" }}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#C9A227] mb-2">{card.title}</h3>
                <p className="text-[#C9A227]/55 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS MINI */}
      <section className="py-16 px-4 bg-[#0a1828]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12"
            style={{
              background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            4 שלבים לרישיון העסק שלך
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border border-[#C9A227]/40 text-[#C9A227] font-extrabold text-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(201,162,39,0.1)" }}
                >
                  {s.num}
                </div>
                <h3 className="font-bold text-[#C9A227] mb-1 text-sm">{s.title}</h3>
                <p className="text-[#C9A227]/50 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/process" className="text-[#C9A227]/60 hover:text-[#C9A227] transition-colors text-sm font-semibold underline underline-offset-4">
              קרא עוד על תהליך העבודה ←
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            לכל סוג עסק
          </h2>
          <p className="text-[#C9A227]/50 mb-8 text-sm">משה עובד עם עסקים מכל הסקטורים וכל שלבי הרישוי</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b) => (
              <span key={b}
                className="border border-[#C9A227]/20 text-[#C9A227]/70 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(201,162,39,0.06)" }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
