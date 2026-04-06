import Image from "next/image";
import Link from "next/link";

const credentials = [
  { icon: "🏗️", title: "הנדסאי בניין מוסמך", desc: "ידע טכני מעמיק בתכנון ובנייה" },
  { icon: "🧪", title: "תברואן מוסמך", desc: "מוסמך לאישורי בריאות ותברואה" },
  { icon: "📜", title: "ניסיון עשיר", desc: "ליווי מאות עסקים מתחומים שונים" },
  { icon: "🤝", title: "ניסיון רב בעבודה מול רשויות מקומיות", desc: "היכרות מעמיקה עם הליכי הרישוי" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">אודות משה ונטורה</h1>
          <p className="text-blue-100 text-lg">
            הנדסאי בניין ותברואן מוסמך — מומחה רישוי עסקים
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#C9A227] rounded-2xl transform rotate-2 scale-105 opacity-20" />
              <Image
                src="/moshe.jpg"
                alt="משה ונטורה"
                width={380}
                height={480}
                className="relative rounded-2xl shadow-2xl object-cover"
                priority
              />
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1B3A6B] text-white rounded-xl px-4 py-3 shadow-lg text-center">
                <p className="text-[#C9A227] font-bold text-sm">הנדסאי בניין</p>
                <p className="text-xs text-white/80">תברואן מוסמך</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#1B3A6B] mb-6">
              שלום, אני משה ונטורה
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                אני עוסק בתחום רישוי העסקים כבר שנים רבות, ומתמחה בניהול התהליך הבירוקרטי
                המורכב מול כל הרשויות הרלוונטיות — עירייה, כיבוי אש, משטרה, משרד הבריאות
                ואיכות הסביבה.
              </p>
              <p>
                כהנדסאי בניין מוסמך ותברואן, יש לי את הידע הטכני המקצועי להכין תוכניות
                עסק מדויקות שעומדות בכל הדרישות — ואת הניסיון לנווט בין הרשויות בצורה
                יעילה.
              </p>
              <p>
                לא משנה אם אתה פותח עסק חדש או שנתקלת בבעיה עם הרשויות — אני מנהל
                את הכל בשמך כך שתוכל להתרכז בניהול העסק עצמו.
              </p>
              <p className="font-semibold text-[#1B3A6B]">
                המודל שלי פשוט: 30% מקדמה — ו-70% רק כשיש רישיון.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#C9A227] hover:bg-[#e6c547] text-[#1B3A6B] font-bold px-6 py-3 rounded-xl transition-all"
              >
                דבר עם משה
              </Link>
              <a
                href="tel:054-589-2059"
                className="border-2 border-[#1B3A6B] text-[#1B3A6B] font-bold px-6 py-3 rounded-xl hover:bg-[#1B3A6B] hover:text-white transition-all"
              >
                📞 054-589-2059
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center text-[#1B3A6B] mb-8">
            מה מביא משה לשולחן?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-[#1B3A6B] text-sm mb-1">{c.title}</h3>
                <p className="text-gray-500 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
