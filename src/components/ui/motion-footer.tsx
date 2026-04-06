"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// STYLES
// -------------------------------------------------------------------------
const STYLES = `
@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.8; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); }
  15%, 45% { transform: scale(1.3); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(201,162,39,0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(201,162,39,0.06) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(201,162,39,0.12) 0%,
    rgba(27,58,107,0.18) 40%,
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, rgba(201,162,39,0.08) 0%, rgba(201,162,39,0.03) 100%);
  box-shadow:
    0 10px 30px -10px rgba(0,0,0,0.4),
    inset 0 1px 1px rgba(201,162,39,0.15),
    inset 0 -1px 2px rgba(0,0,0,0.3);
  border: 1px solid rgba(201,162,39,0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, rgba(201,162,39,0.18) 0%, rgba(201,162,39,0.08) 100%);
  border-color: rgba(201,162,39,0.5);
  box-shadow:
    0 20px 40px -10px rgba(0,0,0,0.5),
    inset 0 1px 1px rgba(201,162,39,0.3);
  color: #C9A227;
}

.footer-giant-bg-text {
  font-size: 22vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(201,162,39,0.08);
  background: linear-gradient(180deg, rgba(201,162,39,0.12) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
  font-family: 'Assistant', sans-serif;
}

.footer-text-glow {
  background: linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 24px rgba(201,162,39,0.25));
}

.cinematic-footer-wrapper {
  font-family: 'Assistant', sans-serif;
  direction: rtl;
}
`;

// -------------------------------------------------------------------------
// MAGNETIC BUTTON
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(element, {
            x: x * 0.35,
            y: y * 0.35,
            rotationX: -y * 0.12,
            rotationY: x * 0.12,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };
        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };
        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// MARQUEE CONTENT — Hebrew, adapted for business licensing
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center gap-10 px-8 whitespace-nowrap">
    <span>רישוי עסקים מקצועי</span>
    <span className="text-[#C9A227]/50">✦</span>
    <span>ליווי מול כל הרשויות</span>
    <span className="text-[#C9A227]/50">✦</span>
    <span>הנדסאי בניין מוסמך</span>
    <span className="text-[#C9A227]/50">✦</span>
    <span>תברואן מוסמך</span>
    <span className="text-[#C9A227]/50">✦</span>
    <span>תשלום רק לאחר קבלת הרישיון</span>
    <span className="text-[#C9A227]/50">✦</span>
  </div>
);

// -------------------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------------------
export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.85, opacity: 0 },
        {
          y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div ref={wrapperRef}>
        <footer className="cinematic-footer-wrapper relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#0d1f3c] text-[#C9A227]">

          {/* Aurora glow */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          {/* Grid */}
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            רישוי
          </div>

          {/* Marquee */}
          <div className="absolute top-10 left-0 w-full overflow-hidden border-y border-[#C9A227]/15 bg-[#0d1f3c]/70 backdrop-blur-md py-3 z-10 -rotate-1 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-widest text-[#C9A227]/60 uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-5xl md:text-8xl font-black footer-text-glow tracking-tight mb-12 text-center"
            >
              מוכן להתחיל?
            </h2>

            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Primary CTA buttons */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton
                  as="a"
                  href="/contact"
                  className="footer-glass-pill px-10 py-5 rounded-full text-[#C9A227] font-bold text-sm md:text-base flex items-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  שלח פנייה עכשיו
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="tel:054-589-2059"
                  className="footer-glass-pill px-10 py-5 rounded-full text-[#C9A227] font-bold text-sm md:text-base flex items-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  054-589-2059
                </MagneticButton>
              </div>

              {/* Secondary nav links */}
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {[
                  { label: "שירותים", href: "/services" },
                  { label: "תהליך העבודה", href: "/process" },
                  { label: "אודות", href: "/about" },
                ].map((link) => (
                  <MagneticButton
                    key={link.href}
                    as="a"
                    href={link.href}
                    className="footer-glass-pill px-6 py-3 rounded-full text-[#C9A227]/60 font-medium text-xs md:text-sm hover:text-[#C9A227]"
                  >
                    {link.label}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <div className="text-[#C9A227]/40 text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © {new Date().getFullYear()} משה ונטורה — רישוי עסקים. כל הזכויות שמורות.
            </div>

            {/* Badge */}
            <div className="footer-glass-pill px-5 py-2.5 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default">
              <span className="text-[#C9A227]/50 text-[10px] font-bold uppercase tracking-widest">הנדסאי בניין</span>
              <span className="animate-footer-heartbeat text-sm text-[#C9A227]">★</span>
              <span className="text-[#C9A227]/50 text-[10px] font-bold uppercase tracking-widest">תברואן מוסמך</span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full footer-glass-pill flex items-center justify-center text-[#C9A227]/60 hover:text-[#C9A227] group order-3"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
