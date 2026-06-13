"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
  },
};

export function HeroVariantA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a3530]/60 via-[#3a3530]/20 to-[#3a3530]/30" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(58,53,48,0.35) 100%)"
        }} />
      </motion.div>

      {/* Floating floral corners */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-10 opacity-60"
      >
        <FloralDecoration variant="corner-tl" color="#ffffff" opacity={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-8 right-8 md:top-12 md:right-12 z-10 opacity-60"
      >
        <FloralDecoration variant="corner-tr" color="#ffffff" opacity={1} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pb-28"
      >
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={stagger.item}
            className="font-sans text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-white/70 mb-8"
          >
            Together with their families
          </motion.p>

          <motion.div variants={stagger.item} className="w-16 h-px bg-white/40 mb-8" />

          <motion.div variants={stagger.item}>
            <h1
              className="font-script text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] text-white leading-none tracking-wide mb-2"
              style={{ textShadow: "0 2px 40px rgba(0,0,0,0.2)" }}
            >
              Andi
            </h1>
          </motion.div>

          <motion.div variants={stagger.item}>
            <p className="font-serif italic text-white/60 text-2xl md:text-3xl font-light mb-2" style={{ letterSpacing: "0.15em" }}>
              &amp;
            </p>
          </motion.div>

          <motion.div variants={stagger.item}>
            <h1
              className="font-script text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] text-white leading-none tracking-wide mb-10"
              style={{ textShadow: "0 2px 40px rgba(0,0,0,0.2)" }}
            >
              Jz
            </h1>
          </motion.div>

          <motion.p
            variants={stagger.item}
            className="font-sans text-[9px] md:text-[10px] tracking-[0.45em] uppercase text-white/60 mb-10"
          >
            AndJzTheTwoOfUs
          </motion.p>

          <motion.div variants={stagger.item}>
            <FloralDecoration variant="divider" color="#ffffff" opacity={0.5} />
          </motion.div>

          <motion.div variants={stagger.item} className="mt-8 mb-4">
            <p className="font-serif font-light text-white text-xl md:text-2xl tracking-widest" style={{ letterSpacing: "0.2em" }}>
              October 22, 2026
            </p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50 mt-2">
              3:30 in the Afternoon
            </p>
          </motion.div>

          <motion.p
            variants={stagger.item}
            className="font-serif italic text-white/75 text-lg md:text-xl font-light mt-6 mb-12 max-w-md leading-relaxed"
            style={{ letterSpacing: "0.02em" }}
          >
            A celebration of love, laughter, and happily ever after.
          </motion.p>

          <motion.div variants={stagger.item}>
            <a
              href="#rsvp"
              className="inline-flex items-center gap-3 px-10 py-4 border border-white/60 text-white font-sans text-[10px] tracking-[0.35em] uppercase transition-all duration-500 hover:bg-white/15 hover:border-white hover:scale-[1.02] backdrop-blur-sm"
            >
              Confirm Attendance
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/40">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
