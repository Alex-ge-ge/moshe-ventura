import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0d1f3c] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <Logo size={44} />
              <div>
                <p className="font-bold text-lg leading-none">משה ונטורה</p>
                <p className="text-[#C9A227] text-sm">רישוי עסקים</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              הנדסאי בניין ותברואן מוסמך. ליווי מקצועי מלא לרישוי עסקים מול כל הרשויות.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-[#C9A227] mb-3">ניווט מהיר</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                ["דף הבית", "/"],
                ["שירותים", "/services"],
                ["תהליך העבודה", "/process"],
                ["אודות", "/about"],
                ["צור קשר", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#C9A227] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[#C9A227] mb-3">צור קשר</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:054-589-2059" className="hover:text-[#C9A227] transition-colors">
                  054-589-2059
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:moshevantura@gmail.com" className="hover:text-[#C9A227] transition-colors">
                  moshevantura@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>א׳–ה׳ | 08:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} משה ונטורה — רישוי עסקים. כל הזכויות שמורות.</p>
          <p>הנדסאי בניין | תברואן מוסמך</p>
        </div>
      </div>
    </footer>
  );
}
