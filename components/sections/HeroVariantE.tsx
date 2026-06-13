"use client";

// Hero Variant E — Vogue Column
// Narrow typographic column on the far left. Photo fills the remaining 80% of the screen.
// Text reads top-to-bottom like a magazine spine. Very editorial, very Korean wedding.

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

export function HeroVariantE() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full flex overflow-hidden"
    >
      {/* ── Full bleed photo (behind everything) ── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/Hero4.png"
          alt="Andi and Jz"
          fill
          priority
          quality={100}
          className="object-cover object-right"
          sizes="100vw"
          style={{ willChange: "auto" }}
        />
        {/* Dark overlay — heavier on left to contrast the column */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3a3530]/80 via-[#3a3530]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a3530]/40 via-transparent to-transparent" />
      </motion.div>

      {/* ── Left column ── */}
      <div className="relative z-10 flex flex-col justify-between
                      w-[200px] md:w-[240px] lg:w-[280px] flex-shrink-0
                      px-8 md:px-10 py-16 md:py-20 min-h-screen">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          <p className="font-sans text-[8px] tracking-[0.45em] uppercase text-white/40">
            AndJzTheTwoOfUs
          </p>
          <div className="w-6 h-px bg-sage/60" />
          <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-white/40">
            October 22, 2026
          </p>
        </motion.div>

        {/* Middle — Vertical names */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="flex flex-col items-start gap-0"
        >
          <h1 className="font-script text-[3.8rem] md:text-[5rem] text-white leading-none"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
            Andi
          </h1>
          <p className="font-serif italic text-white/30 text-2xl font-light ml-2 my-1">
            &amp;
          </p>
          <h1 className="font-script text-[3.8rem] md:text-[5rem] text-white leading-none"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
            Jz
          </h1>

          <div className="mt-8 mb-6">
            <FloralDecoration variant="small" color="#ffffff" opacity={0.35} />
          </div>

          <p className="font-serif italic font-light text-white/55 text-sm leading-relaxed">
            A celebration<br />of love &amp; laughter
          </p>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex flex-col gap-5"
        >
          <a href="#rsvp"
            className="inline-flex items-center gap-2 font-sans text-[8px] tracking-[0.35em] uppercase
                       text-white/70 border-b border-white/25 pb-0.5 w-fit
                       hover:text-white hover:border-white/60 transition-all duration-300">
            RSVP →
          </a>
          <p className="font-sans text-[8px] tracking-[0.2em] uppercase text-white/25">
            3:30 PM
          </p>
        </motion.div>
      </div>

      {/* ── Bottom right caption ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="absolute bottom-10 right-10 z-10 text-right hidden md:block"
      >
        <p className="font-serif italic font-light text-white/40 text-sm">
          happily ever after
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-[200px] md:left-[240px] lg:left-[280px]
                   -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
