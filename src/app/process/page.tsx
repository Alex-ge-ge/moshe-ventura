import Link from "next/link";

const gradientText = {
  background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const glassCard = {
  background: "linear-gradient(145deg, rgba(201,162,39,0.07) 0%, rgba(201,162,39,0.02) 100%)",
};

const steps = [
  {
    num: "01",
    title: "ייעוץ ראשוני — חינם",
    duration: "יום 1",
    icon: "🤝",
    desc: "שיחת היכרות בה נבין את הצרכים הספציפיים של העסק שלך. נבדוק מה נדרש לפי סוג העסק, מיקום, ורשויות רלוונטיות. הייעוץ הראשוני ללא עלות וללא התחייבות.",
    points: ["הבנת סוג העסק ומיקומו", "זיהוי כל הרשויות הרלוונטיות", "הערכת זמן ועלויות", "קבלת הצעת מחיר מותאמת"],
  },
  {
    num: "02",
    title: "הכנת תוכנית העסק",
    duration: "2-3 שבועות",
    icon: "📐",
    desc: "הכנת כל המסמכים הנדרשים לקבלת רישיון עסק: תוכנית אדריכלית, תוכנית תברואה, מפרטים טכניים וכל מה שכל רשות דורשת.",
    points: ["תוכנית אדריכלית מדויקת", "מסמכי הגשה לכל רשות", "בדיקה מוקדמת מול הרשויות"],
  },
  {
    num: "03",
    title: "הגשה וליווי מול הרשויות",
    duration: "2-16 שבועות",
    icon: "📬",
    desc: "הגשת הבקשה לעירייה וניהול מלא של התהליך מולה ומול כל הגורמים: כיבוי אש, משטרה, משרד הבריאות, איכות הסביבה ומשרד העבודה. אתה לא צריך לדעת כלום — משה מנהל הכל.",
    points: ["הגשה לעירייה ומעקב שוטף", "מול כל הגורמים הרלוונטיים", "ביקורות עם פקח בריאות", "טיפול בכל דחייה או בקשת השלמה"],
  },
  {
    num: "04",
    title: "קבלת הרישיון ותשלום יתרה",
    duration: "סיום התהליך",
    icon: "🏆",
    desc: "קבלת רישיון העסק — סיום מוצלח של התהליך.",
    points: ["קבלת הרישיון הסופי", "תשלום יתרת השכר", "זמינות לשאלות עתידיות"],
  },
];

export default function ProcessPage() {
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
          <h1 className="text-4xl font-extrabold mb-4" style={gradientText}>תהליך העבודה</h1>
          <p className="text-[#C9A227]/55 text-lg">4 שלבים ברורים מהפנייה הראשונה ועד לרישיון בידיים</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute right-7 top-full w-0.5 h-6 bg-[#C9A227]/20 z-10" />
              )}
              <div className="rounded-2xl p-6 border border-[#C9A227]/15 flex gap-5" style={glassCard}>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border border-[#C9A227]/40 text-[#C9A227] font-extrabold text-xl flex items-center justify-center"
                    style={{ background: "rgba(201,162,39,0.1)" }}
                  >
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start mb-2">
                    <h3 className="text-xl font-bold text-[#C9A227] flex items-center gap-2">
                      <span>{step.icon}</span> {step.title}
                    </h3>
                  </div>
                  <p className="text-[#C9A227]/55 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-[#C9A227]/65">
                        <span className="text-[#C9A227]">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-6 text-center" style={gradientText}>שאלות נפוצות</h2>
          <div className="space-y-4">
            {[
              { q: "כמה זמן לוקח לקבל רישיון עסק?", a: "תלוי בסוג העסק ובעומס הרשויות. בממוצע 3 חודשים ויותר. עסקים מורכבים יותר עשויים לקחת ארוך יותר." },
              { q: "מה קורה אם הרשות דוחה את הבקשה?", a: "טיפול בדחייה הוא חלק מהשירות. משה ינתח את הסיבות, יתקן ויגיש מחדש — ללא עלות נוספת." },
              { q: "האם ניתן לפנות גם אם העסק כבר פועל?", a: "בהחלט. משה עובד גם עם עסקים קיימים שנתקלו בבעיה מול הרשויות או שרישיונם פג." },
            ].map((item) => (
              <div key={item.q} className="rounded-xl p-5 border border-[#C9A227]/15" style={glassCard}>
                <p className="font-bold text-[#C9A227] mb-2">{item.q}</p>
                <p className="text-[#C9A227]/55 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact"
              className="inline-block bg-[#C9A227]/10 hover:bg-[#C9A227]/20 border border-[#C9A227]/40 hover:border-[#C9A227]/70 text-[#C9A227] font-bold px-8 py-4 rounded-full text-lg transition-all"
            >
              התחל תהליך עכשיו
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
