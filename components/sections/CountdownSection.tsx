"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { SectionLabel } from "@/components/ui/SectionLabel";

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

function CountdownUnit({ value, label, delay }: { value: number; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center"
    >
      <div className="relative group">
        {/* Card */}
        <div className="
          relative overflow-hidden
          w-[90px] h-[100px] md:w-[130px] md:h-[140px] lg:w-[160px] lg:h-[170px]
          bg-white/80 backdrop-blur-sm
          border border-beige-dark/60
          flex items-center justify-center
          shadow-card
          transition-all duration-500 group-hover:shadow-card-hover group-hover:scale-[1.02]
        ">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

          <motion.span
            key={value}
            initial={{ y: -10, opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-serif font-light text-[#3a3530] leading-none select-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </div>

        {/* Corner accents */}
        <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t border-l border-sage/40" />
        <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t border-r border-sage/40" />
        <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b border-l border-sage/40" />
        <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b border-r border-sage/40" />
      </div>

      <p className="font-sans text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-sage mt-5">
        {label}
      </p>
    </motion.div>
  );
}

export function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 md:py-36 bg-parchment overflow-hidden" ref={sectionRef}>
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige/50 via-parchment to-beige/30 pointer-events-none" />

      {/* Side botanical decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-15 hidden lg:block">
        <FloralDecoration variant="branch-left" color="#8FAF87" opacity={1} />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 hidden lg:block">
        <FloralDecoration variant="branch-right" color="#8FAF87" opacity={1} />
      </div>

      <div className="container-narrow text-center relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>The Big Day Is Coming</SectionLabel>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif font-light italic text-[#3a3530] mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          Counting Down Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic text-[#3a3530]/50 text-lg mb-14 font-light"
        >
          until we say &ldquo;I do&rdquo;
        </motion.p>

        <FloralDecoration variant="divider" color="#8FAF87" opacity={0.5} className="mb-14" />

        {/* Countdown units */}
        <div className="flex items-start justify-center gap-4 md:gap-8 lg:gap-12">
          <CountdownUnit value={time.days} label="Days" delay={0.1} />

          <div className="font-serif text-3xl md:text-5xl text-sage/40 mt-8 md:mt-12 font-light select-none">
            ·
          </div>

          <CountdownUnit value={time.hours} label="Hours" delay={0.2} />

          <div className="font-serif text-3xl md:text-5xl text-sage/40 mt-8 md:mt-12 font-light select-none">
            ·
          </div>

          <CountdownUnit value={time.minutes} label="Minutes" delay={0.3} />

          <div className="font-serif text-3xl md:text-5xl text-sage/40 mt-8 md:mt-12 font-light select-none">
            ·
          </div>

          <CountdownUnit value={time.seconds} label="Seconds" delay={0.4} />
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#3a3530]/30 mt-14"
        >
          October 22, 2026 · 3:30 PM
        </motion.p>
      </div>
    </section>
  );
}
