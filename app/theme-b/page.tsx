"use client";

// ─────────────────────────────────────────────
// THEME B — Modern Editorial
// Pure white • bold typography • photo-forward
// Clean lines, no botanicals, magazine feel
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

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

// ─── Theme Switcher ──────────────────────────
function ThemeSwitcher() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1
                    bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-2 py-2 shadow-lg">
      <Link href="/" className="px-4 py-1.5 rounded-full font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-700 transition-colors">A · Garden</Link>
      <span className="px-4 py-1.5 rounded-full font-sans text-[9px] tracking-[0.2em] uppercase bg-gray-900 text-white">B · Editorial</span>
      <Link href="/theme-c" className="px-4 py-1.5 rounded-full font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-700 transition-colors">C · Blush</Link>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex">
      {/* Photo fills right 65% */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image src="/Hero4.png" alt="Andi and Jz" fill priority quality={100}
          className="object-cover object-right" sizes="100vw" style={{ willChange: "auto" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
      </motion.div>

      {/* Left text block */}
      <div className="relative z-10 flex flex-col justify-center max-w-lg pl-10 md:pl-20 lg:pl-28 pr-6 py-24">
        <motion.p {...f(0.1)} className="font-sans text-[9px] tracking-[0.5em] uppercase text-gray-400 mb-10">
          AndJzTheTwoOfUs · October 22, 2026
        </motion.p>

        <motion.div {...f(0.2)}>
          <div className="w-12 h-px bg-gray-900 mb-10" />
        </motion.div>

        <motion.h1 {...f(0.28)} className="font-serif font-light text-gray-900 mb-0 leading-[0.9]"
          style={{ fontSize: "clamp(4.5rem, 10vw, 8rem)" }}>
          Andi
        </motion.h1>
        <motion.p {...f(0.34)} className="font-serif italic text-gray-300 text-3xl font-light my-2"
          style={{ letterSpacing: "0.1em" }}>&amp;</motion.p>
        <motion.h1 {...f(0.4)} className="font-serif font-light text-gray-900 leading-[0.9] mb-10"
          style={{ fontSize: "clamp(4.5rem, 10vw, 8rem)" }}>
          Jz
        </motion.h1>

        <motion.div {...f(0.46)} className="w-12 h-px bg-gray-200 mb-10" />

        <motion.p {...f(0.52)} className="font-serif italic font-light text-gray-400 text-lg leading-loose mb-12">
          A celebration of love, laughter,<br />and happily ever after.
        </motion.p>

        <motion.a {...f(0.58)} href="#rsvp"
          className="inline-flex items-center gap-3 w-fit px-10 py-4 bg-gray-900 text-white
                     font-sans text-[9px] tracking-[0.35em] uppercase
                     hover:bg-gray-700 transition-colors duration-300">
          Confirm Attendance
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-10 left-10 md:left-20 lg:left-28 z-10 flex items-center gap-4">
        <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-px bg-gray-300" />
        <p className="font-sans text-[8px] tracking-[0.35em] uppercase text-gray-300">Scroll</p>
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
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-28 md:py-36 bg-white border-t border-gray-100" ref={ref}>
      <div className="max-w-5xl mx-auto px-8 md:px-14">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-gray-400 text-center mb-5">
          Counting down to the big day
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light text-gray-900 text-center mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          October 22, 2026
        </motion.h2>

        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {units.map((u, i) => (
            <motion.div key={u.label}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col items-center">
              <div className="w-full border-t-2 border-gray-900 pt-6 mb-3">
                <motion.p key={u.value} initial={{ opacity: 0.5, y: -6 }} animate={{ opacity: 1, y: 0 }}
                  className="font-serif font-light text-gray-900 text-center"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1 }}>
                  {String(u.value).padStart(2, "0")}
                </motion.p>
              </div>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-gray-400">{u.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Invitation ───────────────────────────────
function Invitation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-28 md:py-36 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-2xl mx-auto px-8 text-center">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-gray-400 mb-12">
          You are cordially invited
        </motion.p>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-16 h-px bg-gray-900 mx-auto mb-12" />

        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif italic font-light text-gray-500 text-lg mb-4">
          Together with their families
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.22 }}
          className="font-script text-[5rem] md:text-[6.5rem] text-gray-900 leading-none mb-10">
          Andi & Jz
        </motion.h2>

        {["request the honour of your presence", "at the celebration of their marriage"].map((line, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.08 }}
            className="font-serif italic font-light text-gray-500 text-xl mb-2">
            {line}
          </motion.p>
        ))}

        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.48 }}
          className="w-8 h-px bg-gray-200 mx-auto my-10" />

        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.55 }}>
          <p className="font-serif font-light text-gray-900 text-2xl tracking-widest mb-2">Saturday, October 22, 2026</p>
          <p className="font-serif italic font-light text-gray-400 text-lg mb-8">at half past three in the afternoon</p>
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gray-400">[Venue Name] · [City, Philippines]</p>
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
    { label: "How We Met", title: "Two paths, one beginning", body: "It was an ordinary day that turned into something extraordinary. Two paths crossed in the most unexpected way, and in that moment, something shifted — a quiet knowing that this was the beginning of something beautiful.", gradient: "linear-gradient(135deg, #C8D9C4 0%, #A8C5A0 40%, #B0C8D4 100%)" },
    { label: "The Proposal", title: "A question asked with a full heart", body: "Under a sky full of stars, surrounded by the gentle scent of flowers and the warmth of a perfect evening, a ring was offered and forever began. With tears of joy and a resounding yes, their greatest adventure started.", gradient: "linear-gradient(135deg, #C5B8D8 0%, #D8CEEA 40%, #B0C8D4 100%)" },
  ];

  return (
    <section id="story" className="bg-white" ref={ref}>
      <div className="py-28 md:py-32 px-8 md:px-14 text-center">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-gray-400 mb-5">
          Chapter One
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light text-gray-900" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          Our Story
        </motion.h2>
      </div>

      {stories.map((s, i) => (
        <motion.div key={s.label}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`grid grid-cols-1 md:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}>
          <div className={`relative aspect-[4/3] md:aspect-auto min-h-[400px] ${i % 2 === 1 ? "md:order-2" : ""}`}
            style={{ background: s.gradient }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#3a3530]/25">Add your photo</p>
            </div>
          </div>
          <div className={`flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 bg-white
                          ${i % 2 === 1 ? "md:order-1" : ""}`}>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gray-400 mb-6">{s.label}</p>
            <div className="w-8 h-px bg-gray-900 mb-8" />
            <h3 className="font-serif font-light text-gray-900 mb-8" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              {s.title}
            </h3>
            <p className="font-serif italic font-light text-gray-400 leading-loose text-lg">{s.body}</p>
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
    <section id="details" className="py-28 md:py-36 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-5xl mx-auto px-8 md:px-14">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-gray-400 text-center mb-5">
          The Wedding Day
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light text-gray-900 text-center mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          October 22, 2026
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
          {cards.map((c, i) => (
            <motion.div key={c.type}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
              className="bg-white p-14 md:p-16">
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gray-400 mb-8">{c.type}</p>
              <div className="w-8 h-px bg-gray-900 mb-8" />
              <p className="font-serif font-light text-gray-900 mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>{c.time}</p>
              <p className="font-serif font-light text-gray-900 text-xl mb-1">{c.title}</p>
              <p className="font-serif italic font-light text-gray-400 text-base mb-1">{c.venue}</p>
              <p className="font-serif italic font-light text-gray-300 text-sm mb-8">{c.address}</p>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-gray-300">{c.note}</p>
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
    <section className="py-28 md:py-36 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-8 md:px-14">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-gray-400 text-center mb-5">
          Attire Guide
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light text-gray-900 text-center mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Dress to Celebrate
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic font-light text-gray-400 text-center text-lg mb-16 max-w-lg mx-auto leading-loose">
          Formal garden party attire in soft, pastel tones.
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
          {colors.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07 }}>
              <div className="aspect-[2/3] mb-3" style={{ backgroundColor: c.hex, border: c.border ? "1px solid #D8CDBF" : "none" }} />
              <p className="font-sans text-[8px] tracking-[0.15em] uppercase text-gray-500 text-center">{c.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
          {[{ l: "Encouraged", i: ["Pastels & soft tones", "Florals & lace", "Garden party elegance"] },
            { l: "Please Avoid", i: ["White or ivory", "All-black formal", "Neon or bold brights"] }].map((g) => (
            <div key={g.l}>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-gray-400 mb-5">{g.l}</p>
              <ul className="space-y-2">
                {g.i.map((item) => (
                  <li key={item} className="font-serif italic font-light text-gray-500 text-base flex items-center gap-3">
                    <span className="w-3 h-px bg-gray-200 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
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
    { g: "linear-gradient(135deg,#C8D9C4,#8FAF87)", span: "col-span-2 row-span-2" },
    { g: "linear-gradient(135deg,#C5B8D8,#B0C8D4)", span: "" },
    { g: "linear-gradient(135deg,#F2EDE4,#D8CDBF)", span: "" },
    { g: "linear-gradient(135deg,#7B9BAC,#B0C8D4)", span: "col-span-2" },
    { g: "linear-gradient(135deg,#D8CEEA,#C5B8D8)", span: "" },
  ];
  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 md:px-14">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-gray-400 text-center mb-5">
          Our Moments
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light text-gray-900 text-center mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          A Glimpse of Us
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-3 gap-2 h-[600px] md:h-[700px]">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`group overflow-hidden ${item.span}`}
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
    <section id="rsvp" className="py-36 md:py-48 bg-gray-900" ref={ref}>
      <div className="max-w-2xl mx-auto px-8 text-center">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.45em] uppercase text-gray-500 mb-8">
          You are warmly invited
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-script text-[4rem] md:text-[5.5rem] text-white leading-none mb-6">
          Andi & Jz
        </motion.h2>
        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-12 h-px bg-gray-700 mx-auto mb-10" />
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif italic font-light text-gray-400 text-xl leading-loose mb-4">
          Will you join us?
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-14">
          Kindly RSVP by September 1, 2026
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="px-14 py-4 bg-white text-gray-900 font-sans text-[9px] tracking-[0.35em] uppercase hover:bg-gray-100 transition-colors w-full sm:w-auto text-center">
            I Will Attend
          </a>
          <a href="#" className="px-14 py-4 border border-gray-700 text-gray-500 font-sans text-[9px] tracking-[0.35em] uppercase hover:border-gray-500 transition-colors w-full sm:w-auto text-center">
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
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-8 md:px-14 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gray-400 mb-6">Quick Links</p>
          {["Our Story", "Details", "Dress Guide", "Gallery", "RSVP"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="block font-serif italic font-light text-gray-500 text-base mb-2 hover:text-gray-900 transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="text-center">
          <h2 className="font-script text-4xl text-gray-900 mb-2">Andi & Jz</h2>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gray-300 mb-6">AndJzTheTwoOfUs</p>
          <div className="w-8 h-px bg-gray-100 mx-auto mb-6" />
          <p className="font-serif italic font-light text-gray-400 text-sm leading-loose">
            A celebration of love, laughter,<br />and happily ever after.
          </p>
        </div>
        <div className="md:text-right">
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gray-400 mb-6">Wedding Details</p>
          {[["Date", "Saturday, October 22, 2026"], ["Time", "3:30 in the Afternoon"], ["Venue", "[Venue Name]"]].map(([l, v]) => (
            <div key={l} className="mb-4">
              <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-gray-300 mb-0.5">{l}</p>
              <p className="font-serif font-light text-gray-600 text-sm">{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-gray-300">© 2026 AndJzTheTwoOfUs</p>
        <p className="font-serif italic font-light text-gray-300 text-sm">Made with love ♡</p>
        <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-gray-300">eisenluna11@gmail.com</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────
export default function ThemeB() {
  return (
    <main className="relative overflow-x-hidden bg-white">
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
