"use client";

import { useRef } from "react";
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

export function HeroSection() {
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
        {/* Atmospheric gradient simulating golden hour garden */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8D9C4]/80 via-[#D8CDBF]/60 to-[#B0C8D4]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a3530]/50 via-[#3a3530]/10 to-transparent" />
        {/* Texture layer */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-radial-gradient" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(58,53,48,0.4) 100%)"
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
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Small eyebrow text */}
          <motion.p
            variants={stagger.item}
            className="font-sans text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-white/70 mb-8"
          >
            Together with their families
          </motion.p>

          {/* Divider line */}
          <motion.div
            variants={stagger.item}
            className="w-16 h-px bg-white/40 mb-8"
          />

          {/* Couple Names — Script */}
          <motion.div variants={stagger.item}>
            <h1 className="font-script text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] text-white leading-none tracking-wide mb-2"
              style={{ textShadow: "0 2px 40px rgba(0,0,0,0.2)" }}>
              Andi
            </h1>
          </motion.div>

          <motion.div variants={stagger.item}>
            <p className="font-serif italic text-white/60 text-2xl md:text-3xl font-light mb-2"
              style={{ letterSpacing: "0.15em" }}>
              &amp;
            </p>
          </motion.div>

          <motion.div variants={stagger.item}>
            <h1 className="font-script text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] text-white leading-none tracking-wide mb-10"
              style={{ textShadow: "0 2px 40px rgba(0,0,0,0.2)" }}>
              Jz
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={stagger.item}
            className="font-sans text-[9px] md:text-[10px] tracking-[0.45em] uppercase text-white/60 mb-10"
          >
            AndJzTheTwoOfUs
          </motion.p>

          {/* Floral Divider */}
          <motion.div variants={stagger.item}>
            <FloralDecoration variant="divider" color="#ffffff" opacity={0.5} />
          </motion.div>

          {/* Date & Time */}
          <motion.div variants={stagger.item} className="mt-8 mb-4">
            <p className="font-serif font-light text-white text-xl md:text-2xl tracking-widest"
              style={{ letterSpacing: "0.2em" }}>
              October 22, 2026
            </p>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50 mt-2">
              3:30 in the Afternoon
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={stagger.item}
            className="font-serif italic text-white/75 text-lg md:text-xl font-light mt-6 mb-12 max-w-md leading-relaxed"
            style={{ letterSpacing: "0.02em" }}
          >
            A celebration of love, laughter, and happily ever after.
          </motion.p>

          {/* RSVP Button */}
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
