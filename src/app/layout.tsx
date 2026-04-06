import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "משה ונטורה | רישוי עסקים",
  description:
    "ייעוץ וליווי מקצועי לרישוי עסקים מול העירייה, כיבוי אש, משטרה, משרד הבריאות ואיכות הסביבה. הנדסאי בניין ותברואן מוסמך.",
  keywords: "רישוי עסקים, ייעוץ עסקי, תברואה, הנדסאי בניין, עירייה, כיבוי אש",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
