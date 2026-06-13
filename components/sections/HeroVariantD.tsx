"use client";

// Hero Variant D — Cinematic Letterbox
// Cream bars top & bottom hold the text. The photo fills the wide middle band.
// Feels like a film still from a romantic movie.

import Image from "next/image";
import { motion } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function HeroVariantD() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#FAF7F2]">

      {/* ── Top cream bar ── */}
      <div className="relative z-10 flex flex-col items-center justify-end px-6 pt-16 pb-8 md:pt-20 md:pb-10
                      bg-[#FAF7F2] flex-shrink-0">
        <motion.p {...f(0.15)}
          className="font-sans text-[9px] tracking-[0.5em] uppercase text-sage mb-5">
          AndJzTheTwoOfUs
        </motion.p>

        <motion.h1 {...f(0.25)}
          className="font-script text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-[#3a3530] leading-none text-center">
          Andi <span className="font-serif italic text-[#3a3530]/25 text-3xl md:text-4xl font-light">&amp;</span> Jz
        </motion.h1>

        <motion.div {...f(0.35)} className="mt-5">
          <FloralDecoration variant="divider" color="#8FAF87" opacity={0.45} />
        </motion.div>
      </div>

      {/* ── Wide photo band ── */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.96 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative flex-1 min-h-[45vh] md:min-h-[52vh] w-full mx-auto"
        style={{ maxWidth: "100%" }}
      >
        <Image
          src="/Hero4.png"
          alt="Andi and Jz"
          fill
          priority
          quality={100}
          className="object-cover object-right-top"
          sizes="100vw"
          style={{ willChange: "auto" }}
        />
        {/* Edge fades to blend into cream bars */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/40 via-transparent to-[#FAF7F2]/40 pointer-events-none" />
      </motion.div>

      {/* ── Bottom cream bar ── */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between
                      gap-6 md:gap-0 px-10 md:px-16 lg:px-24 pt-8 pb-14 md:pt-10 md:pb-16
                      bg-[#FAF7F2] flex-shrink-0">

        {/* Left: Date */}
        <motion.div {...f(0.55)} className="text-center md:text-left">
          <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-[#3a3530]/35 mb-1">
            The Wedding Day
          </p>
          <p className="font-serif font-light text-[#3a3530] text-xl tracking-widest"
            style={{ letterSpacing: "0.12em" }}>
            October 22, 2026
          </p>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#3a3530]/35 mt-1">
            3:30 in the Afternoon
          </p>
        </motion.div>

        {/* Center: Floral */}
        <motion.div {...f(0.6)} className="hidden md:block">
          <FloralDecoration variant="small" color="#8FAF87" opacity={0.4} />
        </motion.div>

        {/* Right: Description + CTA */}
        <motion.div {...f(0.65)} className="text-center md:text-right">
          <p className="font-serif italic font-light text-[#3a3530]/45 text-sm mb-5 leading-loose">
            A celebration of love, laughter,<br />and happily ever after.
          </p>
          <a href="#rsvp"
            className="inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.35em] uppercase
                       text-sage border-b border-sage/40 pb-0.5 hover:border-sage transition-colors duration-300">
            Confirm Attendance →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
