"use client";

// ─────────────────────────────────────────────
// THEME C — Romantic Blush
// Warm rose · lavender · dusty tones
// Intimate, feminine, dreamy, emotional
// ─────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const WEDDING_DATE = new Date("2026-10-22T15:30:00");
function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Rose palette
const R = {
  bg: "#FDF0EE",
  bgAlt: "#FAF6F3",
  bgDark: "#F5ECE8",
  rose: "#C9A09A",
  roseDark: "#A97A74",
  roseLight: "#E4C5C1",
  lavender: "#C5B8D8",
  text: "#4A3040",
  textMid: "#7A6070",
  textLight: "#B09AA8",
};

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

// ─── Floral SVG (minimal petal) ───────────────
function PetalDivider({ color = R.rose }: { color?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: color, opacity: 0.3 }} />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C10 2 14 6 14 10C14 14 10 18 10 18C10 18 6 14 6 10C6 6 10 2 10 2Z"
          fill={color} fillOpacity="0.5" />
        <path d="M2 10C2 10 6 6 10 6C14 6 18 10 18 10C18 10 14 14 10 14C6 14 2 10 2 10Z"
          fill={color} fillOpacity="0.3" />
        <circle cx="10" cy="10" r="2" fill={color} fillOpacity="0.7" />
      </svg>
      <div className="flex-1 max-w-[80px] h-px" style={{ backgroundColor: color, opacity: 0.3 }} />
    </div>
  );
}

function RoseDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${R.roseLight})` }} />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 18 8 20 12C22 16 20 22 14 24C8 22 6 16 8 12C10 8 14 4 14 4Z" fill={R.roseLight} />
        <path d="M4 14C4 14 8 10 12 10C16 10 20 12 24 14C20 16 16 18 12 18C8 18 4 14 4 14Z" fill={R.lavender} fillOpacity="0.5" />
        <circle cx="14" cy="14" r="3" fill={R.rose} fillOpacity="0.6" />
      </svg>
      <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${R.roseLight})` }} />
    </div>
  );
}

// ─── Theme Switcher ──────────────────────────
function ThemeSwitcher() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1
                    bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-2 py-2 shadow-lg">
      <Link href="/" className="px-4 py-1.5 rounded-full font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-700 transition-colors">A · Garden</Link>
      <Link href="/theme-b" className="px-4 py-1.5 rounded-full font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-700 transition-colors">B · Editorial</Link>
      <span className="px-4 py-1.5 rounded-full font-sans text-[9px] tracking-[0.2em] uppercase text-white" style={{ backgroundColor: R.rose }}>C · Blush</span>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image src="/Hero4.png" alt="Andi and Jz" fill priority quality={100}
          className="object-cover object-right" sizes="100vw" style={{ willChange: "auto" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${R.bg}CC, rgba(253,240,238,0.55) 40%, rgba(253,240,238,0.2))` }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(74,48,64,0.35) 100%)" }} />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        <motion.p {...f(0.2)} className="font-sans text-[9px] tracking-[0.5em] uppercase mb-7"
          style={{ color: `${R.roseLight}CC` }}>
          Together with their families
        </motion.p>

        <motion.div {...f(0.28)} className="mb-2">
          <div className="h-px w-12 mx-auto mb-7" style={{ backgroundColor: `${R.roseLight}80` }} />
        </motion.div>

        <motion.h1 {...f(0.35)} className="font-script leading-none mb-2"
          style={{ fontSize: "clamp(5rem, 12vw, 10rem)", color: "white", textShadow: "0 2px 40px rgba(74,48,64,0.3)" }}>
          Andi
        </motion.h1>
        <motion.p {...f(0.41)} className="font-serif italic font-light text-2xl mb-2"
          style={{ color: `${R.roseLight}90`, letterSpacing: "0.15em" }}>&amp;</motion.p>
        <motion.h1 {...f(0.47)} className="font-script leading-none mb-10"
          style={{ fontSize: "clamp(5rem, 12vw, 10rem)", color: "white", textShadow: "0 2px 40px rgba(74,48,64,0.3)" }}>
          Jz
        </motion.h1>

        <motion.div {...f(0.53)}><PetalDivider color="white" /></motion.div>

        <motion.p {...f(0.59)} className="font-sans text-[9px] tracking-[0.4em] uppercase mt-6 mb-2"
          style={{ color: `${R.roseLight}99` }}>
          AndJzTheTwoOfUs
        </motion.p>
        <motion.p {...f(0.64)} className="font-serif italic font-light text-xl mb-2" style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.12em" }}>
          October 22, 2026 · 3:30 PM
        </motion.p>
        <motion.p {...f(0.69)} className="font-serif italic font-light text-lg mb-12 leading-loose max-w-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}>
          A celebration of love, laughter, and happily ever after.
        </motion.p>

        <motion.a {...f(0.74)} href="#rsvp"
          className="inline-flex items-center gap-3 px-12 py-4 border font-sans text-[9px] tracking-[0.35em] uppercase transition-all duration-500 backdrop-blur-sm hover:scale-[1.02]"
          style={{ borderColor: `${R.roseLight}80`, color: "white" }}>
          Confirm Attendance
        </motion.a>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10" style={{ background: `linear-gradient(to bottom, ${R.roseLight}80, transparent)` }} />
      </motion.div>
    </section>
  );
}

// ─── Countdown ────────────────────────────────
function Countdown() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => { const t = setInterval(() => setTime(getTimeLeft()), 1000); return () => clearInterval(t); }, []);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const units = [
    { value: time.days, label: "Days" }, { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" }, { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-28 md:py-36" style={{ background: R.bgAlt }} ref={ref}>
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase mb-5" style={{ color: R.rose }}>
          The Big Day Is Coming
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light italic mb-3" style={{ color: R.text, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Counting Down Together
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif italic font-light text-lg mb-12" style={{ color: R.textLight }}>
          until we say &ldquo;I do&rdquo;
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
          <RoseDivider />
        </motion.div>

        <div className="flex items-start justify-center gap-4 md:gap-10 mt-10">
          {units.map((u, i) => (
            <motion.div key={u.label} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden mb-4 shadow-sm"
                style={{ background: "white", border: `1px solid ${R.roseLight}60`, padding: "1.5rem 1.2rem" }}>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: `linear-gradient(to bottom, white, ${R.bg}40)` }} />
                <motion.p key={u.value} initial={{ y: -8, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }}
                  className="font-serif font-light relative z-10" style={{ color: R.text, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1 }}>
                  {String(u.value).padStart(2, "0")}
                </motion.p>
              </div>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase" style={{ color: R.rose }}>{u.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.7 }}
          className="font-sans text-[9px] tracking-[0.3em] uppercase mt-14" style={{ color: R.textLight }}>
          October 22, 2026 · 3:30 PM
        </motion.p>
      </div>
    </section>
  );
}

// ─── Invitation ───────────────────────────────
function Invitation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-28 md:py-36" style={{ background: R.bg }} ref={ref}>
      <div className="max-w-xl mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative text-center p-12 md:p-16"
          style={{ background: "white", border: `1px solid ${R.roseLight}50`, boxShadow: `0 8px 60px ${R.rose}15` }}>
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l" style={{ borderColor: `${R.roseLight}60` }} />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r" style={{ borderColor: `${R.roseLight}60` }} />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l" style={{ borderColor: `${R.roseLight}60` }} />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r" style={{ borderColor: `${R.roseLight}60` }} />

          <p className="font-sans text-[9px] tracking-[0.45em] uppercase mb-8" style={{ color: R.rose }}>Together with their families</p>

          <h2 className="font-script leading-none mb-8" style={{ color: R.text, fontSize: "clamp(3.5rem, 8vw, 5.5rem)" }}>
            Andi & Jz
          </h2>

          <PetalDivider color={R.rose} />

          <div className="mt-8 space-y-2">
            {["request the honour of your presence", "at the celebration of their marriage"].map((l, i) => (
              <p key={i} className="font-serif italic font-light text-lg" style={{ color: R.textMid }}>{l}</p>
            ))}
          </div>

          <RoseDivider />

          <p className="font-serif font-light text-xl mb-1" style={{ color: R.text, letterSpacing: "0.1em" }}>Saturday, October 22, 2026</p>
          <p className="font-serif italic font-light text-lg mb-6" style={{ color: R.textMid }}>at half past three in the afternoon</p>

          <PetalDivider color={R.lavender} />

          <div className="mt-8">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: R.rose }}>Ceremony Venue</p>
            <p className="font-serif font-light text-lg mb-1" style={{ color: R.text }}>[Venue Name]</p>
            <p className="font-serif italic font-light text-base" style={{ color: R.textLight }}>[City, Philippines]</p>
          </div>

          <p className="font-serif italic font-light text-base mt-8" style={{ color: R.textLight }}>
            Reception to immediately follow
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Our Story ────────────────────────────────
function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const stories = [
    { label: "How We Met", title: "When the universe conspired to bring two hearts together", body: "It was an ordinary day that turned into something extraordinary. Two paths crossed in the most unexpected way, and in that moment, something shifted — a quiet knowing that this was the beginning of something beautiful.", gradient: `linear-gradient(135deg, ${R.roseLight}60, ${R.lavender}60)` },
    { label: "The Proposal", title: "A question asked with trembling hands and a full heart", body: "Under a sky full of stars, surrounded by the gentle scent of flowers and the warmth of a perfect evening, a ring was offered and forever began. With tears of joy and a resounding yes, their greatest adventure started.", gradient: `linear-gradient(135deg, ${R.lavender}60, #B0C8D480)` },
  ];
  return (
    <section id="story" style={{ background: R.bgAlt }}>
      <div className="py-28 md:py-32 text-center px-8" ref={ref}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase mb-5" style={{ color: R.rose }}>
          Chapter One
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light italic mb-4" style={{ color: R.text, fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          Our Story
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic font-light text-lg max-w-sm mx-auto" style={{ color: R.textLight }}>
          Every love story is beautiful, but ours is our favourite.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.25 }}>
          <RoseDivider />
        </motion.div>
      </div>

      {stories.map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`grid grid-cols-1 md:grid-cols-2`}>
          <div className={`relative aspect-[4/3] md:aspect-auto min-h-[400px] ${i % 2 === 1 ? "md:order-2" : ""}`}
            style={{ background: s.gradient }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 5C20 5 28 13 28 20C28 27 20 35 20 35C20 35 12 27 12 20C12 13 20 5 20 5Z" fill={R.rose} fillOpacity="0.3" />
                <path d="M5 20C5 20 13 12 20 12C27 12 35 20 35 20C35 20 27 28 20 28C13 28 5 20 5 20Z" fill={R.lavender} fillOpacity="0.3" />
                <circle cx="20" cy="20" r="4" fill={R.rose} fillOpacity="0.5" />
              </svg>
              <p className="font-sans text-[8px] tracking-[0.3em] uppercase" style={{ color: `${R.text}40` }}>Add your photo</p>
            </div>
          </div>
          <div className={`flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 ${i % 2 === 1 ? "md:order-1" : ""}`}
            style={{ background: i % 2 === 0 ? "white" : R.bg }}>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase mb-6" style={{ color: R.rose }}>{s.label}</p>
            <h3 className="font-serif font-light italic mb-8 leading-snug" style={{ color: R.text, fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>{s.title}</h3>
            <div className="w-8 h-px mb-8" style={{ backgroundColor: R.roseLight }} />
            <p className="font-serif italic font-light leading-loose text-lg" style={{ color: R.textMid }}>{s.body}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

// ─── Details ──────────────────────────────────
function Details() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cards = [
    { type: "Ceremony", title: "Holy Matrimony", time: "3:30 PM", venue: "[Church / Ceremony Venue]", address: "[Address, City]", note: "Please arrive by 3:00 PM" },
    { type: "Reception", title: "Dinner & Celebration", time: "6:00 PM", venue: "[Reception Venue]", address: "[Address, City]", note: "Cocktail hour to follow" },
  ];
  return (
    <section id="details" className="py-28 md:py-36" style={{ background: R.bg }} ref={ref}>
      <div className="max-w-4xl mx-auto px-8">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-center mb-5" style={{ color: R.rose }}>
          The Wedding Day
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light italic text-center mb-6" style={{ color: R.text, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          October 22, 2026
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
          <RoseDivider />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {cards.map((c, i) => (
            <motion.div key={c.type} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12 }}
              className="relative p-10 md:p-12 text-center rounded-2xl"
              style={{ background: "white", border: `1px solid ${R.roseLight}50`, boxShadow: `0 4px 40px ${R.rose}10` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 mx-auto"
                style={{ background: R.bg }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke={R.rose} strokeWidth="1.2" />
                  <path d="M12 8V12L15 15" stroke={R.rose} strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase mb-4" style={{ color: R.rose }}>{c.type}</p>
              <p className="font-serif font-light mb-4" style={{ color: R.text, fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>{c.time}</p>
              <p className="font-serif font-light text-xl mb-1" style={{ color: R.text }}>{c.title}</p>
              <p className="font-serif italic font-light text-base mb-1" style={{ color: R.textMid }}>{c.venue}</p>
              <p className="font-serif italic font-light text-sm mb-6" style={{ color: R.textLight }}>{c.address}</p>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase" style={{ color: R.roseLight }}>{c.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Dress Guide ──────────────────────────────
function DressGuide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const colors = [
    { name: "Sage Green", hex: "#8FAF87" }, { name: "Dusty Blue", hex: "#7B9BAC" },
    { name: "Powder Blue", hex: "#B0C8D4" }, { name: "Light Beige", hex: "#F2EDE4", border: true },
    { name: "Soft Gray", hex: "#C8C8C8" }, { name: "Lavender", hex: "#C5B8D8" },
  ];
  return (
    <section className="py-28 md:py-36" style={{ background: R.bgAlt }} ref={ref}>
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase mb-5" style={{ color: R.rose }}>
          Attire Guide
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light italic mb-5" style={{ color: R.text, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Dress to Celebrate
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif italic font-light text-lg mb-4 max-w-md mx-auto leading-loose" style={{ color: R.textLight }}>
          Formal garden party attire. Soft pastels warmly welcomed.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
          <RoseDivider />
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4 mb-16">
          {colors.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}>
              <div className="aspect-[2/3] rounded-xl mb-3 shadow-sm"
                style={{ backgroundColor: c.hex, border: c.border ? `1px solid ${R.roseLight}` : "none" }} />
              <p className="font-sans text-[8px] tracking-[0.1em] uppercase" style={{ color: R.textLight }}>{c.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
          {[{ l: "Encouraged", i: ["Pastels & soft tones", "Florals & lace", "Garden elegance"] },
            { l: "Please Avoid", i: ["White or ivory", "All-black formal", "Neon or brights"] }].map((g) => (
            <div key={g.l} className="text-center">
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: R.rose }}>{g.l}</p>
              {g.i.map((item) => (
                <p key={item} className="font-serif italic font-light text-base mb-2" style={{ color: R.textMid }}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────
function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const items = [
    { g: `linear-gradient(135deg,${R.roseLight},${R.lavender})`, span: "col-span-2 row-span-2" },
    { g: `linear-gradient(135deg,${R.lavender},#B0C8D4)`, span: "" },
    { g: `linear-gradient(135deg,${R.bg},${R.roseLight})`, span: "" },
    { g: `linear-gradient(135deg,#C5B8D8,${R.roseLight})`, span: "col-span-2" },
    { g: `linear-gradient(135deg,${R.roseLight},#D8CEEA)`, span: "" },
  ];
  return (
    <section id="gallery" className="py-28 md:py-36" style={{ background: R.bg }} ref={ref}>
      <div className="max-w-5xl mx-auto px-8">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-center mb-5" style={{ color: R.rose }}>
          Our Moments
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light italic text-center mb-16" style={{ color: R.text, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          A Glimpse of Us
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-3 gap-3 h-[600px] md:h-[700px]">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className={`group overflow-hidden rounded-xl ${item.span}`}
              style={{ background: item.g }}>
              <div className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                style={{ background: item.g }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── RSVP ─────────────────────────────────────
function RSVP() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="rsvp" className="py-36 md:py-48 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${R.bg} 0%, ${R.bgDark} 50%, ${R.lavender}30 100%)` }} />
      <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }} className="mb-8">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
            <path d="M40 10C40 10 56 26 56 40C56 54 40 70 40 70C40 70 24 54 24 40C24 26 40 10 40 10Z" fill={R.roseLight} fillOpacity="0.6" />
            <path d="M10 40C10 40 26 24 40 24C54 24 70 40 70 40C70 40 54 56 40 56C26 56 10 40 10 40Z" fill={R.lavender} fillOpacity="0.4" />
            <circle cx="40" cy="40" r="8" fill={R.rose} fillOpacity="0.5" />
          </svg>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase mb-6" style={{ color: R.rose }}>
          You are warmly invited
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script leading-none mb-6" style={{ color: R.text, fontSize: "clamp(3rem, 8vw, 6rem)" }}>
          Will you join us?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-script mb-8" style={{ color: R.rose, fontSize: "2.5rem" }}>
          Andi & Jz
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.35 }}>
          <RoseDivider />
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif italic font-light text-xl leading-loose mb-4" style={{ color: R.textMid }}>
          Your presence is the greatest gift.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.48 }}
          className="font-sans text-[9px] tracking-[0.3em] uppercase mb-14" style={{ color: R.textLight }}>
          Kindly RSVP by September 1, 2026
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="px-14 py-4 rounded-full font-sans text-[9px] tracking-[0.35em] uppercase text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] w-full sm:w-auto text-center shadow-md"
            style={{ backgroundColor: R.rose }}>
            I Will Attend
          </a>
          <a href="#" className="px-14 py-4 rounded-full font-sans text-[9px] tracking-[0.35em] uppercase transition-all duration-300 border w-full sm:w-auto text-center"
            style={{ borderColor: `${R.roseLight}80`, color: R.textLight }}>
            Regretfully Decline
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: R.bgDark }}>
      <div className="max-w-6xl mx-auto px-8 md:px-14 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase mb-6" style={{ color: R.rose }}>Quick Links</p>
          {["Our Story", "Details", "Dress Guide", "Gallery", "RSVP"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="flex items-center gap-2 font-serif italic font-light text-base mb-2.5 transition-colors group"
              style={{ color: R.textMid }}>
              <span className="w-3 h-px flex-shrink-0 transition-colors" style={{ backgroundColor: R.roseLight }} />
              {l}
            </a>
          ))}
        </div>
        <div className="text-center">
          <h2 className="font-script mb-2" style={{ color: R.text, fontSize: "3rem" }}>Andi & Jz</h2>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase mb-6" style={{ color: R.rose }}>AndJzTheTwoOfUs</p>
          <PetalDivider color={R.rose} />
          <p className="font-serif italic font-light text-sm leading-loose mt-4" style={{ color: R.textLight }}>
            A celebration of love, laughter,<br />and happily ever after.
          </p>
        </div>
        <div className="md:text-right">
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase mb-6" style={{ color: R.rose }}>Wedding Details</p>
          {[["Date", "Saturday, October 22, 2026"], ["Time", "3:30 in the Afternoon"], ["Venue", "[Venue Name]"]].map(([l, v]) => (
            <div key={l} className="mb-4">
              <p className="font-sans text-[8px] tracking-[0.25em] uppercase mb-0.5" style={{ color: R.textLight }}>{l}</p>
              <p className="font-serif font-light text-sm" style={{ color: R.textMid }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderColor: `${R.roseLight}40` }}>
        <p className="font-sans text-[8px] tracking-[0.25em] uppercase" style={{ color: R.textLight }}>© 2026 AndJzTheTwoOfUs</p>
        <p className="font-serif italic font-light text-sm" style={{ color: R.roseLight }}>Made with love ♡</p>
        <p className="font-sans text-[8px] tracking-[0.25em] uppercase" style={{ color: R.textLight }}>eisenluna11@gmail.com</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────
export default function ThemeC() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Countdown />
      <Invitation />
      <OurStory />
      <Details />
      <DressGuide />
      <Gallery />
      <RSVP />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}
