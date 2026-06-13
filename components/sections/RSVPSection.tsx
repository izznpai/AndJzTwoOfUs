"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

export function RSVPSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="rsvp"
      className="relative py-36 md:py-48 overflow-hidden"
      ref={ref}
    >
      {/* Rich atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8FAF87]/30 via-[#B0C8D4]/25 to-[#C5B8D8]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F2EDE4]/60 via-transparent to-[#F2EDE4]/40" />

      {/* Background florals */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-12 top-1/4 opacity-10 hidden lg:block"
      >
        <FloralDecoration variant="branch-left" color="#8FAF87" opacity={1} className="scale-150" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -right-12 top-1/4 opacity-10 hidden lg:block"
      >
        <FloralDecoration variant="branch-right" color="#8FAF87" opacity={1} className="scale-150" />
      </motion.div>

      <div className="container-narrow text-center relative z-10">
        {/* Wreath */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <FloralDecoration variant="wreath" color="#8FAF87" opacity={0.45} />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-[10px] tracking-[0.45em] uppercase text-sage mb-8"
        >
          You are warmly invited
        </motion.p>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2
            className="font-serif font-light italic text-[#3a3530] mb-6 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Will you join us?
          </h2>
        </motion.div>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-script text-4xl md:text-5xl text-sage mb-10"
        >
          Andi & Jz
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <FloralDecoration variant="divider" color="#8FAF87" opacity={0.45} className="mb-10" />
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif italic font-light text-[#3a3530]/60 text-lg md:text-xl leading-loose mb-4 max-w-xl mx-auto"
        >
          Your presence is the greatest gift.
          Please let us know you&apos;ll be celebrating with us.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#3a3530]/35 mb-16"
        >
          Kindly RSVP by September 1, 2026
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#rsvp-form"
            className="
              inline-flex items-center gap-3 px-14 py-5
              bg-sage text-white font-sans text-[10px] tracking-[0.35em] uppercase
              transition-all duration-500 hover:bg-sage-dark hover:scale-[1.02]
              shadow-card hover:shadow-card-hover
            "
          >
            I Will Attend
          </a>

          <a
            href="#rsvp-form"
            className="
              inline-flex items-center gap-3 px-14 py-5
              bg-transparent text-[#3a3530]/70 border border-beige-deep font-sans text-[10px] tracking-[0.35em] uppercase
              transition-all duration-500 hover:border-[#3a3530]/40 hover:text-[#3a3530]
              backdrop-blur-sm
            "
          >
            Regretfully Decline
          </a>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 font-serif italic font-light text-[#3a3530]/35 text-sm"
        >
          For questions, reach us at{" "}
          <a
            href="mailto:eisenluna11@gmail.com"
            className="text-sage hover:text-sage-dark transition-colors underline underline-offset-4"
          >
            eisenluna11@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
