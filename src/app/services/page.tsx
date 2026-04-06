import Link from "next/link";

const services = [
  {
    icon: "📋",
    title: "הכנת תוכנית עסק",
    desc: "הכנת תוכנית עסק מקיפה ומפורטת בהתאם לדרישות העירייה והרשויות הרלוונטיות. התוכנית כוללת תרשים אדריכלי, תוכנית תברואה, בטיחות אש ועוד.",
    includes: ["תרשים אדריכלי", "תוכנית תברואה", "תוכנית בטיחות אש", "בדיקת עמידה בתקנות"],
  },
  {
    icon: "🏛️",
    title: "הגשה לעירייה",
    desc: "הגשת הבקשה לרישיון עסק לעירייה, כולל כל הטפסים הנדרשים, ומעקב שוטף אחר ההליך עד לקבלת הרישיון.",
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
    desc: "טיפול בדרישות הרישוי מטעם המשטרה, הכולל בדיקות אבטחה, רישיונות לעסקים הדורשים אישור משטרתי.",
    includes: ["בקשת אישור משטרתי", "תכנון אבטחה", "מעקב ועדכון", "קבלת היתר"],
  },
  {
    icon: "🏥",
    title: "משרד הבריאות",
    desc: "ליווי מול משרד הבריאות לקבלת אישורים תברואתיים. רלוונטי במיוחד למסעדות, מאפיות, מטבחים תעשייתיים.",
    includes: ["תוכנית תברואה מפורטת", "ביקורת תברואן", "אישורי עובדים", "קבלת תעודת כשרות תברואתית"],
  },
  {
    icon: "🌿",
    title: "איכות הסביבה",
    desc: "טיפול בדרישות המשרד לאיכות הסביבה — רלוונטי למפעלים, מוסכים, כבסיות ועסקים עם פליטות.",
    includes: ["בדיקת פליטות", "תוכנית ניהול פסולת", "דרישות רעש", "קבלת היתר סביבתי"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">השירותים שלנו</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            ליווי מקיף מקצה לקצה — מהכנת התוכנית ועד קבלת הרישיון, מול כל הרשויות
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{s.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A6B]">{s.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto bg-[#e8f0f7] border border-[#1B3A6B]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#1B3A6B] mb-4">מחיר שמשתלם</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            המחיר נקבע לפי הצרכים הספציפיים של העסק שלך. אנחנו מאמינים בהוגנות:
            <br />
            <strong>30% מקדמה בתחילת התהליך — 70% רק לאחר קבלת הרישיון.</strong>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A227] hover:bg-[#e6c547] text-[#1B3A6B] font-bold px-8 py-3 rounded-xl transition-all"
          >
            קבל הצעת מחיר חינם
          </Link>
        </div>
      </section>
    </div>
  );
}
