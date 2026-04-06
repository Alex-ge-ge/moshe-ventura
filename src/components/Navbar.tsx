"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/services", label: "שירותים" },
  { href: "/process", label: "תהליך העבודה" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#0d1f3c]/90 backdrop-blur-md border-b border-[#C9A227]/15 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={40} />
          <div className="text-right leading-tight">
            <p className="text-[#C9A227] font-bold text-base leading-none">משה ונטורה</p>
            <p className="text-[#C9A227]/50 text-xs font-medium">רישוי עסקים</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === link.href
                  ? "bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30"
                  : "text-[#C9A227]/60 hover:text-[#C9A227] hover:bg-[#C9A227]/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:block bg-[#C9A227]/10 hover:bg-[#C9A227]/20 border border-[#C9A227]/40 hover:border-[#C9A227]/70 text-[#C9A227] font-bold px-5 py-2 rounded-full text-sm transition-all backdrop-blur-sm"
        >
          קבל ייעוץ חינם
        </Link>

        <button
          className="md:hidden text-[#C9A227] p-2"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1f3c] border-t border-[#C9A227]/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-semibold border-b border-[#C9A227]/05 ${
                pathname === link.href ? "text-[#C9A227]" : "text-[#C9A227]/50 hover:text-[#C9A227]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mx-4 my-3 bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] font-bold px-4 py-2 rounded-full text-center text-sm"
          >
            קבל ייעוץ חינם
          </Link>
        </div>
      )}
    </header>
  );
}
