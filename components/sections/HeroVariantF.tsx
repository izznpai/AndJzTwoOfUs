"use client";

// Hero Variant F — Giant Typography
// Oversized "Andi & Jz" fills the screen. Photo sits inside a cutout window.
// Text is the design. Feels like a luxury brand campaign.

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

export function HeroVariantF() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-[#F2EDE4] flex flex-col"
    >
      {/* ── Top navigation bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-20 flex items-center justify-between px-8 md:px-14 pt-10 pb-0 flex-shrink-0"
      >
        <p className="font-sans text-[8px] tracking-[0.45em] uppercase text-[#3a3530]/35">
          October 22, 2026
        </p>
        <p className="font-sans text-[8px] tracking-[0.45em] uppercase text-[#3a3530]/35 hidden md:block">
          3:30 in the Afternoon
        </p>
        <a href="#rsvp"
          className="font-sans text-[8px] tracking-[0.35em] uppercase text-sage
                     border-b border-sage/40 pb-px hover:border-sage transition-colors duration-300">
          RSVP →
        </a>
      </motion.div>

      {/* ── Main body ── */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center
                      gap-0 px-8 md:px-14 lg:px-20 py-10">

        {/* Left: Huge name block */}
        <div className="flex flex-col items-start justify-center flex-shrink-0 md:w-1/2 lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-sans text-[8px] tracking-[0.45em] uppercase text-sage mb-6">
              Together with their families
            </p>

            <h1 className="font-script leading-[0.88] text-[#3a3530]"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}>
              Andi
            </h1>

            <div className="flex items-center gap-4 my-3 md:my-4">
              <div className="flex-1 h-px bg-beige-deep max-w-[80px]" />
              <p className="font-serif italic text-[#3a3530]/30 text-2xl font-light">&amp;</p>
              <div className="flex-1 h-px bg-beige-deep max-w-[80px]" />
            </div>

            <h1 className="font-script leading-[0.88] text-[#3a3530]"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}>
              Jz
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 md:mt-10"
          >
            <FloralDecoration variant="divider" color="#8FAF87" opacity={0.45} className="mb-7" />
            <p className="font-serif italic font-light text-[#3a3530]/50 text-base leading-loose mb-8">
              A celebration of love, laughter,<br />and happily ever after.
            </p>
            <a href="#rsvp"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#3a3530] text-white
                         font-sans text-[9px] tracking-[0.35em] uppercase
                         transition-all duration-500 hover:bg-sage hover:scale-[1.02] shadow-card">
              Confirm Attendance
            </a>
          </motion.div>
        </div>

        {/* Right: Photo with decorative frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative md:w-1/2 lg:w-[55%] flex justify-center md:justify-end mt-10 md:mt-0"
        >
          {/* Offset shadow block */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 w-full max-w-[340px] md:max-w-[420px] lg:max-w-[480px]
                          aspect-[3/4] bg-sage/15" />

          {/* Photo */}
          <div className="relative w-full max-w-[340px] md:max-w-[420px] lg:max-w-[480px] aspect-[3/4] overflow-hidden">
            <Image
              src="/Hero4.png"
              alt="Andi and Jz"
              fill
              priority
              quality={100}
              className="object-cover object-right"
              sizes="(max-width: 768px) 85vw, 480px"
              style={{ willChange: "auto" }}
            />
            {/* Warm tone wash */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F2EDE4]/25 to-transparent pointer-events-none" />
          </div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute -bottom-4 -left-2 md:-bottom-5 md:-left-4
                       bg-white px-5 py-3 shadow-card border-t-2 border-sage"
          >
            <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-sage mb-0.5">
              Save the Date
            </p>
            <p className="font-serif font-light text-[#3a3530] text-sm">
              Oct 22, 2026
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="relative z-10 flex items-center justify-center gap-8 px-8 pb-10 flex-shrink-0"
      >
        <div className="h-px flex-1 max-w-[120px] bg-beige-deep" />
        <p className="font-sans text-[8px] tracking-[0.45em] uppercase text-[#3a3530]/25">
          AndJzTheTwoOfUs
        </p>
        <div className="h-px flex-1 max-w-[120px] bg-beige-deep" />
      </motion.div>
    </section>
  );
}
