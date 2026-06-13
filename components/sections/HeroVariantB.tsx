"use client";

// Hero Variant B — Editorial Split
// Left: soft cream panel with all text. Right: full-height photo.
// Feels like a luxury Korean wedding magazine spread.

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function HeroVariantB() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden"
    >
      {/* ── Left panel: text ── */}
      <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left
                      w-full md:w-[46%] lg:w-[42%]
                      bg-[#FAF7F2] px-10 md:px-14 lg:px-20
                      py-28 md:py-0 min-h-[60vh] md:min-h-screen
                      order-2 md:order-1">

        {/* Subtle dot grid background */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #8FAF87 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

        {/* Corner botanical — top left */}
        <div className="absolute top-6 left-6 opacity-25">
          <FloralDecoration variant="corner-tl" color="#8FAF87" opacity={1} />
        </div>

        <div className="relative z-10 max-w-sm md:max-w-none">
          {/* Eyebrow */}
          <motion.p {...fadeUp(0.2)}
            className="font-sans text-[9px] tracking-[0.45em] uppercase text-sage mb-7">
            Together with their families
          </motion.p>

          {/* Thin rule */}
          <motion.div {...fadeUp(0.28)}
            className="w-10 h-px bg-beige-deep mb-7 mx-auto md:mx-0" />

          {/* Names */}
          <motion.div {...fadeUp(0.35)}>
            <h1 className="font-script text-[4.5rem] md:text-[5rem] lg:text-[6rem] text-[#3a3530] leading-none mb-1">
              Andi
            </h1>
          </motion.div>
          <motion.div {...fadeUp(0.42)}>
            <p className="font-serif italic text-[#3a3530]/30 text-2xl font-light mb-1"
              style={{ letterSpacing: "0.15em" }}>
              &amp;
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.48)}>
            <h1 className="font-script text-[4.5rem] md:text-[5rem] lg:text-[6rem] text-[#3a3530] leading-none mb-8">
              Jz
            </h1>
          </motion.div>

          {/* Floral divider */}
          <motion.div {...fadeUp(0.54)} className="mb-8 flex md:justify-start justify-center">
            <FloralDecoration variant="divider" color="#8FAF87" opacity={0.5}
              className="!w-auto scale-75 origin-left" />
          </motion.div>

          {/* Date block */}
          <motion.div {...fadeUp(0.6)} className="mb-2">
            <p className="font-serif font-light text-[#3a3530] text-xl tracking-widest"
              style={{ letterSpacing: "0.14em" }}>
              October 22, 2026
            </p>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#3a3530]/35 mt-2">
              3:30 in the Afternoon
            </p>
          </motion.div>

          {/* Description */}
          <motion.p {...fadeUp(0.66)}
            className="font-serif italic font-light text-[#3a3530]/50 text-base leading-loose mt-6 mb-10">
            A celebration of love, laughter,
            <br />and happily ever after.
          </motion.p>

          {/* RSVP */}
          <motion.div {...fadeUp(0.72)}>
            <a href="#rsvp"
              className="inline-flex items-center gap-3 px-10 py-4 bg-sage text-white
                         font-sans text-[9px] tracking-[0.35em] uppercase
                         transition-all duration-500 hover:bg-sage-dark hover:scale-[1.02] shadow-card">
              Confirm Attendance
            </a>
          </motion.div>

          {/* Brand */}
          <motion.p {...fadeUp(0.78)}
            className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#3a3530]/20 mt-10">
            AndJzTheTwoOfUs
          </motion.p>
        </div>
      </div>

      {/* ── Right panel: photo ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full md:w-[54%] lg:w-[58%] min-h-[55vh] md:min-h-screen order-1 md:order-2"
      >
        <Image
          src="/Hero4.png"
          alt="Andi and Jz"
          fill
          priority
          quality={100}
          className="object-cover object-right"
          sizes="(max-width: 768px) 100vw, 58vw"
          style={{ willChange: "auto" }}
        />
        {/* Soft left-edge fade to blend into cream panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/60 via-transparent to-transparent
                        pointer-events-none hidden md:block" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/30 via-transparent to-transparent
                        pointer-events-none" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2
                   md:left-[23%]"
      >
        <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#3a3530]/25">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#3a3530]/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}
