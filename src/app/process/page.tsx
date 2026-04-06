import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "ייעוץ ראשוני — חינם",
    duration: "יום 1",
    icon: "🤝",
    desc: "שיחת היכרות בה נבין את הצרכים הספציפיים של העסק שלך. נבדוק מה נדרש לפי סוג העסק, מיקום, ורשויות רלוונטיות. הייעוץ הראשוני ללא עלות וללא התחייבות.",
    points: [
      "הבנת סוג העסק ומיקומו",
      "זיהוי כל הרשויות הרלוונטיות",
      "הערכת זמן ועלויות",
      "קבלת הצעת מחיר מותאמת",
    ],
  },
  {
    num: "02",
    title: "הכנת תוכנית העסק",
    duration: "שבועות 1-2",
    icon: "📐",
    desc: "הכנת כל המסמכים הנדרשים לקבלת רישיון עסק: תוכנית אדריכלית, תוכנית תברואה, מפרטים טכניים וכל מה שכל רשות דורשת.",
    points: [
      "תוכנית אדריכלית מדויקת",
      "תוכנית תברואה ובטיחות",
      "מסמכי הגשה לכל רשות",
      "בדיקה מוקדמת מול הרשויות",
    ],
  },
  {
    num: "03",
    title: "הגשה וליווי מול הרשויות",
    duration: "2-8 שבועות",
    icon: "📬",
    desc: "הגשת הבקשה לעירייה וניהול מלא של התהליך מולה ומול כל הגורמים: כיבוי אש, משטרה, משרד הבריאות ואיכות הסביבה. אתה לא צריך לדעת כלום — משה מנהל הכל.",
    points: [
      "הגשה לעירייה ומעקב שוטף",
      "ניהול הסדנות מול כיבוי אש",
      "ביקורות עם פקח בריאות",
      "טיפול בכל דחייה או בקשת השלמה",
    ],
  },
  {
    num: "04",
    title: "קבלת הרישיון ותשלום יתרה",
    duration: "קבלת הרישיון",
    icon: "🏆",
    desc: "עם קבלת רישיון העסק — אתה פתוח לפעול! רק בשלב הזה משולמת יתרת 70% מהשכר. כן — 70% רק אחרי שהצלחנו.",
    points: [
      "קבלת הרישיון הסופי",
      "תשלום יתרת השכר",
      "הסבר על חידוש שנתי",
      "זמינות לשאלות עתידיות",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">תהליך העבודה</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            4 שלבים ברורים מהפנייה הראשונה ועד לרישיון בידיים
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-7 top-full w-0.5 h-8 bg-[#C9A227]/40 z-10" />
              )}

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex gap-5">
                {/* Step number circle */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#1B3A6B] text-[#C9A227] font-extrabold text-xl flex items-center justify-center">
                    {step.num}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold text-[#1B3A6B] flex items-center gap-2">
                      <span>{step.icon}</span> {step.title}
                    </h3>
                    <span className="bg-[#C9A227]/15 text-[#a07d1a] text-xs font-semibold px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#C9A227] font-bold">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ-style section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1B3A6B] mb-6 text-center">
            שאלות נפוצות
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "כמה זמן לוקח לקבל רישיון עסק?",
                a: "תלוי בסוג העסק ובעומס הרשויות. בממוצע 4-12 שבועות. עסקים מורכבים יותר עשויים לקחת ארוך יותר.",
              },
              {
                q: "מה קורה אם הרשות דוחה את הבקשה?",
                a: "טיפול בדחייה הוא חלק מהשירות. משה ינתח את הסיבות, יתקן ויגיש מחדש — ללא עלות נוספת.",
              },
              {
                q: "האם ניתן לפנות גם אם העסק כבר פועל?",
                a: "בהחלט. משה עובד גם עם עסקים קיימים שנתקלו בבעיה מול הרשויות או שרישיונם פג.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="border border-gray-200 rounded-xl p-5"
              >
                <p className="font-bold text-[#1B3A6B] mb-2">{item.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-[#C9A227] hover:bg-[#e6c547] text-[#1B3A6B] font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              התחל תהליך עכשיו
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
