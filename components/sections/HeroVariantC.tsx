"use client";

// Hero Variant C — Framed Portrait
// Photo displayed as a tall centered portrait card with a soft gradient backdrop.
// Text sits above and below the frame. Feels like a fine-art wedding invitation.

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function HeroVariantC() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-20"
    >
      {/* Atmospheric background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8E4DC] via-[#F2EDE4] to-[#D8CDBF]" />
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(ellipse at 30% 60%, rgba(143,175,135,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(176,200,212,0.12) 0%, transparent 60%)",
          }} />
      </motion.div>

      {/* Side botanical branches */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block pointer-events-none">
        <FloralDecoration variant="branch-left" color="#8FAF87" opacity={1} />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block pointer-events-none">
        <FloralDecoration variant="branch-right" color="#8FAF87" opacity={1} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center w-full px-6">

        {/* Top text */}
        <motion.p {...fadeUp(0.2)}
          className="font-sans text-[9px] tracking-[0.5em] uppercase text-sage mb-5">
          Together with their families
        </motion.p>

        <motion.div {...fadeUp(0.28)}>
          <h1 className="font-script text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#3a3530] leading-none text-center mb-1">
            Andi <span className="font-serif italic text-[#3a3530]/30 text-3xl md:text-4xl font-light">&amp;</span> Jz
          </h1>
        </motion.div>

        <motion.p {...fadeUp(0.35)}
          className="font-serif italic font-light text-[#3a3530]/45 text-lg mb-8 text-center">
          A celebration of love, laughter, and happily ever after.
        </motion.p>

        {/* ── Photo frame ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mb-8"
        >
          {/* Outer shadow frame */}
          <div className="absolute -inset-3 bg-white/60 shadow-[0_8px_60px_rgba(0,0,0,0.1)]" />

          {/* White mat border */}
          <div className="relative bg-white p-3 md:p-4 shadow-elegant">
            {/* Inner border */}
            <div className="absolute inset-3 border border-beige-dark/40 pointer-events-none z-10" />

            {/* Photo */}
            <div className="relative w-[78vw] max-w-[420px] md:max-w-[500px] aspect-[4/5] overflow-hidden">
              <Image
                src="/Hero4.png"
                alt="Andi and Jz"
                fill
                priority
                quality={100}
                className="object-cover object-right"
                sizes="(max-width: 768px) 80vw, 500px"
                style={{ willChange: "auto" }}
              />
              {/* Subtle warm tone overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F2EDE4]/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating date badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -right-4 md:-right-8 bottom-10 bg-white px-5 py-4 shadow-elegant border-l-2 border-sage"
          >
            <p className="font-sans text-[8px] tracking-[0.35em] uppercase text-sage mb-1">
              Save the date
            </p>
            <p className="font-serif font-light text-[#3a3530] text-base leading-none">
              Oct 22, 2026
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom text */}
        <motion.div {...fadeUp(0.7)} className="text-center mb-6">
          <FloralDecoration variant="divider" color="#8FAF87" opacity={0.4} className="mb-6" />
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#3a3530]/35">
            3:30 in the Afternoon · October 22, 2026
          </p>
        </motion.div>

        {/* RSVP */}
        <motion.div {...fadeUp(0.8)}>
          <a href="#rsvp"
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#3a3530]/25 text-[#3a3530]/70
                       font-sans text-[9px] tracking-[0.35em] uppercase
                       transition-all duration-500 hover:border-sage hover:text-sage backdrop-blur-sm">
            Confirm Attendance
          </a>
        </motion.div>

        <motion.p {...fadeUp(0.88)}
          className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#3a3530]/20 mt-8">
          AndJzTheTwoOfUs
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#3a3530]/25 to-transparent"
        />
      </motion.div>
    </section>
  );
}
