"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

export function InvitationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const lines = [
    { text: "Together with their families", style: "font-sans text-[10px] tracking-[0.35em] uppercase text-[#3a3530]/50 mb-10", delay: 0.1 },
    { text: "Andi & Jz", style: "font-script text-[4rem] md:text-[5.5rem] text-[#3a3530] leading-none mb-8", delay: 0.2 },
    {
      text: "request the honour of your presence",
      style: "font-serif italic font-light text-xl md:text-2xl text-[#3a3530]/70 mb-2",
      delay: 0.3,
    },
    {
      text: "at the celebration of their marriage",
      style: "font-serif italic font-light text-xl md:text-2xl text-[#3a3530]/70 mb-12",
      delay: 0.35,
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-warm-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-parchment/50 via-warm-white to-cream/40 pointer-events-none" />

      <div className="relative z-10 px-6">
        {/* Invitation card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto relative"
        >
          {/* Card border */}
          <div className="relative bg-white border border-beige-dark/50 shadow-elegant px-10 md:px-20 py-16 md:py-24 text-center">
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-sage/30" />
            <div className="absolute top-3 right-3 w-10 h-10 border-t border-r border-sage/30" />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-b border-l border-sage/30" />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-sage/30" />

            {/* Double border inner */}
            <div className="absolute inset-6 border border-beige-dark/25 pointer-events-none" />

            {/* Top Floral */}
            <FloralDecoration variant="wreath" color="#8FAF87" opacity={0.35} className="mb-6" />

            {/* Text lines */}
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: line.delay, ease: [0.25, 0.1, 0.25, 1] }}
                className={line.style}
              >
                {line.text}
              </motion.p>
            ))}

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-12 h-px bg-sage/40 mx-auto mb-10"
            />

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <p className="font-serif font-light text-[#3a3530] text-2xl md:text-3xl tracking-widest mb-2"
                style={{ letterSpacing: "0.12em" }}>
                Saturday
              </p>
              <p className="font-serif italic font-light text-[#3a3530]/70 text-xl md:text-2xl mb-1">
                the twenty-second of October
              </p>
              <p className="font-serif italic font-light text-[#3a3530]/70 text-xl md:text-2xl mb-10">
                Two thousand and twenty-six
              </p>
            </motion.div>

            {/* Time */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mb-10"
            >
              <p className="font-serif font-light text-[#3a3530] text-xl tracking-widest mb-1"
                style={{ letterSpacing: "0.12em" }}>
                at half past three in the afternoon
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="w-12 h-px bg-sage/40 mx-auto mb-10"
            />

            {/* Location placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#3a3530]/40 mb-2">
                Ceremony Venue
              </p>
              <p className="font-serif font-light text-[#3a3530] text-xl mb-1">
                [Venue Name]
              </p>
              <p className="font-serif italic font-light text-[#3a3530]/50 text-base">
                [City, Philippines]
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="w-8 h-px bg-sage/30 mx-auto my-10"
            />

            {/* Reception note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="font-serif italic font-light text-[#3a3530]/50 text-base"
            >
              Reception to immediately follow
            </motion.p>

            {/* Bottom Floral */}
            <FloralDecoration variant="divider" color="#8FAF87" opacity={0.3} className="mt-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
