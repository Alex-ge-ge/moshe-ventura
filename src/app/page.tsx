import Link from "next/link";

const authorities = [
  { icon: "🏛️", name: "עירייה" },
  { icon: "🚒", name: "כיבוי אש" },
  { icon: "👮", name: "משטרה" },
  { icon: "🏥", name: "משרד הבריאות" },
  { icon: "🌿", name: "איכות הסביבה" },
];

const businessTypes = [
  "מסעדות ובתי קפה",
  "מוסכים ומוסדות",
  "מחסנים ולוגיסטיקה",
  "מפעלים ותעשייה",
  "מרכולים ומכולות",
  "מספרות וקוסמטיקה",
  "מרפאות וקליניקות",
  "ועוד כל סוג עסק",
];

const steps = [
  {
    num: "01",
    title: "ייעוץ ראשוני חינם",
    desc: "בודקים את המצב שלך ומגדירים מה נדרש",
  },
  {
    num: "02",
    title: "הכנת תוכנית עסק",
    desc: "הכנת כל המסמכים הנדרשים לרישיון",
  },
  {
    num: "03",
    title: "הגשה וליווי",
    desc: "הגשה לעירייה וליווי מול כל הרשויות",
  },
  {
    num: "04",
    title: "קבלת הרישיון",
    desc: "מקבלים את הרישיון — ורק אז משלמים את היתרה",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1B3A6B] via-[#2a5298] to-[#1B3A6B] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#e6c547] text-sm font-semibold px-4 py-1 rounded-full mb-6">
            הנדסאי בניין | תברואן מוסמך
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            רישוי עסקים בלי כאב ראש
            <br />
            <span className="text-[#C9A227]">משה ונטורה מטפל בשבילך</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            קיבלת סירוב מהעירייה? אין לך זמן לרוץ בין הרשויות?<br />
            משה ינהל עבורך את כל התהליך — מהתוכנית ועד קבלת הרישיון.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#C9A227] hover:bg-[#e6c547] text-[#1B3A6B] font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
            >
              קבל ייעוץ חינם עכשיו
            </Link>
            <Link
              href="/process"
              className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-xl text-lg transition-all"
            >
              איך זה עובד?
            </Link>
          </div>
        </div>
      </section>

      {/* AUTHORITIES STRIP */}
      <section className="bg-[#0d1f3c] py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#C9A227] text-sm font-semibold mb-4">
            ניהול מול כל הרשויות
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {authorities.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm"
              >
                <span>{a.icon}</span>
                <span>{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MOSHE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-[#1B3A6B] mb-12">
            למה לבחור במשה ונטורה?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "מומחיות בלתי מתפשרת",
                desc: "הנדסאי בניין ותברואן מוסמך עם ידע מעמיק בדרישות כל רשות ורשות.",
              },
              {
                icon: "💼",
                title: "אתה לא צריך לזוז",
                desc: "משה מנהל הכל בשמך — כתיבה, הגשה, מעקב, ותשובות לרשויות.",
              },
              {
                icon: "✅",
                title: "תשלום לאחר הצלחה",
                desc: "70% מהשכר משולמים רק לאחר קבלת הרישיון.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS MINI */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-[#1B3A6B] mb-12">
            4 שלבים לרישיון העסק שלך
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1B3A6B] text-[#C9A227] font-extrabold text-xl flex items-center justify-center mx-auto mb-3">
                  {s.num}
                </div>
                <h3 className="font-bold text-[#1B3A6B] mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/process"
              className="text-[#1B3A6B] font-semibold hover:text-[#C9A227] transition-colors underline underline-offset-4"
            >
              קרא עוד על תהליך העבודה ←
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="py-16 px-4 bg-[#e8f0f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] mb-4">
            לכל סוג עסק
          </h2>
          <p className="text-gray-600 mb-8">
            משה עובד עם עסקים מכל הסקטורים וכל שלבי הרישוי
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b) => (
              <span
                key={b}
                className="bg-white border border-[#1B3A6B]/20 text-[#1B3A6B] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#C9A227] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] mb-4">
            מוכן להתחיל? מלא פנייה עכשיו
          </h2>
          <p className="text-[#1B3A6B]/80 mb-8 text-lg">
            ייעוץ ראשוני חינם, ללא התחייבות. נחזור אליך תוך 24 שעות.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B3A6B] hover:bg-[#0d1f3c] text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-lg"
          >
            שלח פנייה עכשיו
          </Link>
        </div>
      </section>
    </div>
  );
}
