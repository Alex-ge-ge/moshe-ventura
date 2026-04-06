import Link from "next/link";
import { Building2, Flame, Shield, HeartPulse, Leaf, HardHat, CheckCircle2, ArrowLeft, Target, Briefcase, CreditCard, LucideIcon } from "lucide-react";
import { EtherealBeamsHero } from "@/components/ui/ethereal-beams";
import { SplineScene } from "@/components/ui/splite";

const authorities = [
  { icon: Building2, name: "עירייה" },
  { icon: Flame, name: "כיבוי אש" },
  { icon: Shield, name: "משטרה" },
  { icon: HeartPulse, name: "משרד הבריאות" },
  { icon: Leaf, name: "איכות הסביבה" },
  { icon: HardHat, name: "משרד העבודה" },
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
  { num: "04", title: "קבלת הרישיון", desc: "מקבלים את הרישיון" },
];

const whyCards: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "מומחיות בלתי מתפשרת",
    desc: "הנדסאי בניין ותברואן מוסמך עם ידע מעמיק בדרישות כל רשות ורשות.",
  },
  {
    icon: Briefcase,
    title: "אתה לא צריך לזוז",
    desc: "משה מנהל הכל בשמך — כתיבה, הגשה, מעקב, ותשובות לרשויות.",
  },
  {
    icon: CreditCard,
    title: "תשלום הדרגתי",
    desc: "התשלום לפי קצב ההתקדמות.",
  },
];

const gradientText = {
  background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.6) 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const glassCard = {
  background: "linear-gradient(145deg, rgba(201,162,39,0.07) 0%, rgba(201,162,39,0.02) 100%)",
};

export default function HomePage() {
  return (
    <div className="bg-[#0d1f3c]">

      {/* HERO */}
      <EtherealBeamsHero>
        <div className="relative z-10 flex flex-row h-full min-h-[680px] max-w-7xl mx-auto px-4">
          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundSize: "60px 60px",
              backgroundImage: "linear-gradient(to right, rgba(201,162,39,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.04) 1px, transparent 1px)",
            }}
          />
          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-center py-8 min-w-0">
            <div className="inline-block bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227]/80 text-sm font-semibold px-4 py-1 rounded-full mb-6 backdrop-blur-sm w-fit">
              הנדסאי בניין | תברואן מוסמך
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={gradientText}>
              רישוי עסקים בלי כאב ראש
              <br />
              משה ונטורה מטפל בשבילך
            </h1>
            <p className="text-[#C9A227]/60 max-w-md mb-8 leading-relaxed text-base md:text-lg">
              קיבלת סירוב מהעירייה? אין לך זמן לרוץ בין הרשויות?<br />
              משה ינהל עבורך את כל התהליך — מהתוכנית ועד קבלת הרישיון.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="bg-[#C9A227]/10 hover:bg-[#C9A227]/20 border border-[#C9A227]/40 hover:border-[#C9A227]/80 text-[#C9A227] font-bold px-8 py-4 rounded-full text-base transition-all backdrop-blur-sm shadow-lg w-fit"
              >
                קבל ייעוץ חינם עכשיו
              </Link>
              <Link href="/process"
                className="border border-[#C9A227]/20 hover:border-[#C9A227]/40 text-[#C9A227]/60 hover:text-[#C9A227] px-8 py-4 rounded-full text-base transition-all flex items-center gap-2 w-fit"
              >
                איך זה עובד? <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right — Spline 3D robot */}
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </EtherealBeamsHero>

      {/* AUTHORITIES STRIP */}
      <section className="border-y border-[#C9A227]/10 py-6 px-4 bg-[#0a1828]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#C9A227]/40 text-xs font-bold tracking-widest uppercase mb-5">
            ניהול מול כל הרשויות
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {authorities.map(({ icon: Icon, name }) => (
              <div key={name}
                className="flex items-center gap-2 border border-[#C9A227]/15 rounded-full px-4 py-2 text-[#C9A227]/70 text-sm backdrop-blur-sm"
                style={{ background: "rgba(201,162,39,0.04)" }}
              >
                <Icon className="w-4 h-4 text-[#C9A227]/50" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MOSHE */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={gradientText}>
            למה לבחור במשה ונטורה?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div key={card.title} className="rounded-2xl p-6 text-center border border-[#C9A227]/15" style={glassCard}>
                <div className="w-14 h-14 rounded-xl border border-[#C9A227]/30 flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(201,162,39,0.08)" }}>
                  <card.icon className="w-7 h-7 text-[#C9A227]" />
                </div>
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
          <h2 className="text-3xl font-extrabold text-center mb-12" style={gradientText}>
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
            <Link href="/process" className="text-[#C9A227]/60 hover:text-[#C9A227] transition-colors text-sm font-semibold underline underline-offset-4 inline-flex items-center gap-1">
              קרא עוד על תהליך העבודה <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={gradientText}>לכל סוג עסק</h2>
          <p className="text-[#C9A227]/50 mb-8 text-sm">משה עובד עם עסקים מכל הסקטורים וכל שלבי הרישוי</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b) => (
              <span key={b}
                className="border border-[#C9A227]/20 text-[#C9A227]/70 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                style={{ background: "rgba(201,162,39,0.06)" }}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]/50" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
