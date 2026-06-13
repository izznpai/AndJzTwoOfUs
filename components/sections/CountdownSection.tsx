"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

const WEDDING_DATE = new Date("2026-10-22T15:30:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label, delay }: { value: number; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center"
    >
      {/* Number */}
      <motion.span
        key={value}
        initial={{ opacity: 0.6, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-serif font-light leading-none text-[#FAF7F2]"
        style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)", letterSpacing: "-0.02em" }}
      >
        {String(value).padStart(2, "0")}
      </motion.span>

      {/* Hairline */}
      <div className="w-6 h-px bg-[#8FAF87]/50 mt-5 mb-4" />

      {/* Label */}
      <p
        className="font-sans uppercase tracking-[0.45em] text-[#FAF7F2]/35"
        style={{ fontSize: "8px" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
      style={{ backgroundColor: "#2C3D2E" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Faint botanical side accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <FloralDecoration variant="branch-left" color="#FAF7F2" opacity={1} />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <FloralDecoration variant="branch-right" color="#FAF7F2" opacity={1} />
      </div>

      <div className="relative z-10 container-narrow text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="font-sans text-[8px] tracking-[0.55em] uppercase text-[#FAF7F2]/30 mb-8"
        >
          The Big Day Is Coming
        </motion.p>

        {/* Script heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-script text-[3rem] md:text-[4.5rem] text-[#FAF7F2]/80 leading-none mb-4"
        >
          Andi &amp; Jz
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif italic font-light text-[#FAF7F2]/35 text-base mb-14"
        >
          until we say &ldquo;I do&rdquo;
        </motion.p>

        {/* Floral divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mb-16"
        >
          <FloralDecoration variant="divider" color="#8FAF87" opacity={0.35} />
        </motion.div>

        {/* Units */}
        <div className="flex items-start justify-center gap-8 md:gap-14 lg:gap-20">
          {units.map(({ value, label }, i) => (
            <Unit key={label} value={value} label={label} delay={0.1 + i * 0.08} />
          ))}
        </div>

        {/* Date stamp */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-16 font-sans text-[8px] tracking-[0.4em] uppercase text-[#FAF7F2]/20"
        >
          October 22, 2026 · 3:30 PM
        </motion.p>
      </div>
    </section>
  );
}
