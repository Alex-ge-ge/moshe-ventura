import Link from "next/link";

const glassCard = {
  background: "linear-gradient(145deg, rgba(201,162,39,0.07) 0%, rgba(201,162,39,0.02) 100%)",
};

const services = [
  {
    icon: "📋",
    title: "הכנת תוכנית עסק",
    desc: "הכנת תוכנית עסק מקיפה ומפורטת בהתאם לדרישות העירייה והרשויות הרלוונטיות.",
    includes: ["תרשים אדריכלי", "תוכנית תברואה", "תוכנית בטיחות אש", "בדיקת עמידה בתקנות"],
  },
  {
    icon: "🏛️",
    title: "הגשה לעירייה",
    desc: "הגשת הבקשה לרישיון עסק לעירייה, כולל כל הטפסים הנדרשים, ומעקב שוטף עד לקבלת הרישיון.",
    includes: ["מילוי כל הטפסים", "הגשה דיגיטלית ופיזית", "מעקב אחר הבקשה", "טיפול בהתנגדויות"],
  },
  {
    icon: "🚒",
    title: "כיבוי אש",
    desc: "ליווי מול פקוד כיבוי אש לקבלת אישור בטיחות. כולל הכנת תוכנית אש, הסדרת מטפים, גלאים ויציאות חירום.",
    includes: ["תוכנית בטיחות אש", "הסדרת ציוד כיבוי", "ליווי בביקורת", "קבלת אישור"],
  },
  {
    icon: "👮",
    title: "משטרה",
    desc: "טיפול בדרישות הרישוי מטעם המשטרה, הכולל בדיקות אבטחה ורישיונות לעסקים הדורשים אישור משטרתי.",
    includes: ["בקשת אישור משטרתי", "תכנון אבטחה", "מעקב ועדכון", "קבלת היתר"],
  },
  {
    icon: "🏥",
    title: "משרד הבריאות",
    desc: "ליווי מול משרד הבריאות לקבלת אישורים תברואתיים. רלוונטי במיוחד למסעדות, מאפיות, מטבחים תעשייתיים.",
    includes: ["תוכנית תברואה מפורטת", "ביקורת תברואן"],
  },
  {
    icon: "👷",
    title: "משרד העבודה",
    desc: "ליווי מול משרד העבודה בכל הנוגע לבטיחות במקום העבודה ודרישות תקנות העבודה.",
    includes: ["בטיחות עובדים", "תקינות חשמל", "בדיקות שמיעה", "עבודה בסביבה נקיה"],
  },
  {
    icon: "🌿",
    title: "איכות הסביבה",
    desc: "טיפול בדרישות המשרד לאיכות הסביבה — רלוונטי למפעלים, מוסכים, כבסיות ועסקים עם פליטות.",
    includes: ["בדיקת פליטות", "תוכנית ניהול פסולת", "דרישות רעש", "קבלת היתר סביבתי"],
  },
];

const gradientText = {
  background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export default function ServicesPage() {
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
          <h1 className="text-4xl font-extrabold mb-4" style={gradientText}>השירותים שלנו</h1>
          <p className="text-[#C9A227]/55 text-lg leading-relaxed">
            ליווי מקיף מקצה לקצה — מהכנת התוכנית ועד קבלת הרישיון, מול כל הרשויות
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 border border-[#C9A227]/15" style={glassCard}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{s.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#C9A227]">{s.title}</h3>
                  <p className="text-[#C9A227]/55 text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <ul className="space-y-1 border-t border-[#C9A227]/10 pt-4">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#C9A227]/70">
                    <span className="text-[#C9A227] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl p-8 text-center border border-[#C9A227]/20" style={glassCard}>
          <h2 className="text-2xl font-extrabold mb-4" style={gradientText}>מחיר שמשתלם</h2>
          <p className="text-[#C9A227]/60 leading-relaxed mb-6">
            המחיר נקבע לפי הצרכים הספציפיים של העסק שלך.<br />
            <strong className="text-[#C9A227]">30% מקדמה בתחילת התהליך — 70% רק לאחר קבלת הרישיון.</strong>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A227]/10 hover:bg-[#C9A227]/20 border border-[#C9A227]/40 hover:border-[#C9A227]/70 text-[#C9A227] font-bold px-8 py-3 rounded-full transition-all"
          >
            קבל הצעת מחיר חינם
          </Link>
        </div>
      </section>
    </div>
  );
}
