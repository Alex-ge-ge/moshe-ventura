import Image from "next/image";
import Link from "next/link";
import { HardHat, FlaskConical, ScrollText, Users } from "lucide-react";

const gradientText = {
  background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const glassCard = {
  background: "linear-gradient(145deg, rgba(201,162,39,0.07) 0%, rgba(201,162,39,0.02) 100%)",
};

const credentials = [
  { icon: HardHat, title: "הנדסאי בניין מוסמך", desc: "ידע טכני מעמיק בתכנון ובנייה" },
  { icon: FlaskConical, title: "תברואן מוסמך", desc: "מוסמך לאישורי בריאות ותברואה" },
  { icon: ScrollText, title: "ניסיון עשיר", desc: "ליווי מאות עסקים מתחומים שונים" },
  { icon: Users, title: "ניסיון רב מול רשויות", desc: "היכרות מעמיקה עם הליכי הרישוי" },
];

export default function AboutPage() {
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
          <h1 className="text-4xl font-extrabold mb-4" style={gradientText}>אודות משה ונטורה</h1>
          <p className="text-[#C9A227]/55 text-lg">הנדסאי בניין ותברואן מוסמך — מומחה רישוי עסקים</p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl transform rotate-2 scale-105 opacity-30 border border-[#C9A227]/30"
                style={{ background: "rgba(201,162,39,0.08)" }}
              />
              <Image
                src="/moshe.jpg"
                alt="משה ונטורה"
                width={380}
                height={480}
                className="relative rounded-2xl shadow-2xl object-cover border border-[#C9A227]/20"
                priority
              />
              <div className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 shadow-lg text-center border border-[#C9A227]/30"
                style={glassCard}
              >
                <p className="text-[#C9A227] font-bold text-sm">הנדסאי בניין</p>
                <p className="text-xs text-[#C9A227]/60">תברואן מוסמך</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6" style={gradientText}>שלום, אני משה ונטורה</h2>
            <div className="space-y-4 text-[#C9A227]/65 leading-relaxed text-sm">
              <p>
                אני עוסק בתחום רישוי העסקים כבר שנים רבות, ומתמחה בניהול התהליך הבירוקרטי
                המורכב מול כל הרשויות הרלוונטיות — עירייה, כיבוי אש, משטרה, משרד הבריאות,
                משרד העבודה ואיכות הסביבה.
              </p>
              <p>
                כהנדסאי בניין מוסמך ותברואן, יש לי את הידע הטכני המקצועי להכין תוכניות
                עסק מדויקות שעומדות בכל הדרישות — ואת הניסיון לנווט בין הרשויות בצורה יעילה.
              </p>
              <p>
                לא משנה אם אתה פותח עסק חדש או שנתקלת בבעיה עם הרשויות — אני מנהל
                את הכל בשמך כך שתוכל להתרכז בניהול העסק עצמו.
              </p>
              <p className="font-semibold text-[#C9A227]">
                המודל שלי פשוט: 30% מקדמה — ו-70% רק כשיש רישיון.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact"
                className="bg-[#C9A227]/10 hover:bg-[#C9A227]/20 border border-[#C9A227]/40 hover:border-[#C9A227]/70 text-[#C9A227] font-bold px-6 py-3 rounded-full transition-all"
              >
                דבר עם משה
              </Link>
              <a href="tel:054-589-2059"
                className="border border-[#C9A227]/25 text-[#C9A227]/70 font-bold px-6 py-3 rounded-full hover:border-[#C9A227]/50 hover:text-[#C9A227] transition-all"
              >
                054-589-2059
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-14 px-4 bg-[#0a1828]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8" style={gradientText}>
            מה מביא משה לשולחן?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {credentials.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-xl p-5 text-center border border-[#C9A227]/15" style={glassCard}>
                  <div className="w-12 h-12 rounded-xl border border-[#C9A227]/20 flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(201,162,39,0.08)" }}
                  >
                    <Icon className="w-6 h-6 text-[#C9A227]" />
                  </div>
                  <h3 className="font-bold text-[#C9A227] text-sm mb-1">{c.title}</h3>
                  <p className="text-[#C9A227]/50 text-xs">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
