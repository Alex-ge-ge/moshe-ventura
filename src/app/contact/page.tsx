import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A6B] to-[#2a5298] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">צור קשר</h1>
          <p className="text-blue-100 text-lg">
            מלא את הטופס ונחזור אליך תוך 24 שעות — ללא עלות וללא התחייבות
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#1B3A6B]">פרטי התקשרות</h2>

            <div className="space-y-4">
              <a
                href="tel:054-589-2059"
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#C9A227] transition-colors"
              >
                <div className="w-10 h-10 bg-[#1B3A6B] rounded-lg flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-500">טלפון</p>
                  <p className="font-bold text-[#1B3A6B]">054-589-2059</p>
                </div>
              </a>

              <a
                href="mailto:moshevantura@gmail.com"
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#C9A227] transition-colors"
              >
                <div className="w-10 h-10 bg-[#1B3A6B] rounded-lg flex items-center justify-center text-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-gray-500">אימייל</p>
                  <p className="font-bold text-[#1B3A6B] text-sm">moshevantura@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#1B3A6B] rounded-lg flex items-center justify-center text-xl">
                  ⏰
                </div>
                <div>
                  <p className="text-xs text-gray-500">שעות פעילות</p>
                  <p className="font-bold text-[#1B3A6B] text-sm">א׳–ה׳ | 08:00–18:00</p>
                </div>
              </div>
            </div>

            <div className="bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-xl p-4">
              <p className="text-sm text-[#1B3A6B] font-semibold mb-1">💡 שים לב</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                הייעוץ הראשוני הוא חינם לחלוטין. לאחר הבנת הצרכים שלך נשלח הצעת מחיר מפורטת.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
