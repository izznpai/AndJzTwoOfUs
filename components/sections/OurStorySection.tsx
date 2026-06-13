"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { SectionLabel } from "@/components/ui/SectionLabel";

function PhotoPlaceholder({
  className = "",
  gradient,
  label,
}: {
  className?: string;
  gradient: string;
  label: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradient }}
    >
      {/* Placeholder overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <FloralDecoration variant="small" color="#8FAF87" opacity={0.4} />
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#3a3530]/30">
          {label}
        </p>
      </div>
    </div>
  );
}

function StoryBlock({
  label,
  title,
  body,
  photoGradient,
  photoLabel,
  reverse = false,
  delay = 0,
}: {
  label: string;
  title: string;
  body: string;
  photoGradient: string;

  photoLabel: string;
  reverse?: boolean;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 items-stretch mb-0 md:mb-0`}
    >
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={`relative ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        <PhotoPlaceholder
          className="w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[400px]"
          gradient={photoGradient}
          label={photoLabel}
        />
        {/* Floating label badge */}
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 shadow-elegant">
          <p className="font-serif italic text-[#3a3530] text-base font-light">{label}</p>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, delay: delay + 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className={`flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16 md:py-20 bg-cream ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <SectionLabel>{label}</SectionLabel>

        <h3
          className="font-serif font-light italic text-[#3a3530] mb-8 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          {title}
        </h3>

        <div className="w-10 h-px bg-sage/50 mb-8" />

        <p className="font-serif font-light text-[#3a3530]/65 leading-loose text-lg">
          {body}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
          className="mt-10"
        >
          <FloralDecoration variant="small" color="#8FAF87" opacity={0.5} className="justify-start" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function OurStorySection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="story" className="relative overflow-hidden">
      {/* Section header */}
      <div className="relative bg-beige py-24 md:py-32 text-center px-6" ref={titleRef}>
        {/* Background botanical */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/50 via-beige to-beige/80 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative z-10"
        >
          <SectionLabel>Chapter One</SectionLabel>

          <h2
            className="font-serif font-light italic text-[#3a3530] mb-6 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Our Story
          </h2>

          <p className="font-serif italic font-light text-[#3a3530]/50 text-xl max-w-lg mx-auto leading-relaxed">
            Every love story is beautiful, but ours is our favourite.
          </p>

          <FloralDecoration variant="divider" color="#8FAF87" opacity={0.4} className="mt-10" />
        </motion.div>
      </div>

      {/* Story blocks */}
      <StoryBlock
        label="How We Met"
        title="When the universe conspired to bring two hearts together"
        body="It was an ordinary day that turned into something extraordinary. Two paths crossed in the most unexpected way, and in that moment, something shifted — a quiet knowing that this was the beginning of something beautiful. Andi and Jz found in each other not just a partner, but a home."
        photoGradient="linear-gradient(135deg, #C8D9C4 0%, #A8C5A0 40%, #B0C8D4 100%)"
        photoLabel="Add your photo here"
        reverse={false}
        delay={0.1}
      />

      <StoryBlock
        label="The Proposal"
        title="A question asked with trembling hands and a full heart"
        body="Under a sky full of stars, surrounded by the gentle scent of flowers and the warmth of a perfect evening, Jz knelt down with a ring and a heart full of promises. With tears of joy and a resounding yes, Andi said yes to forever. And so their greatest adventure began."
        photoGradient="linear-gradient(135deg, #C5B8D8 0%, #D8CEEA 40%, #B0C8D4 100%)"
        photoLabel="Add your photo here"
        reverse={true}
        delay={0.15}
      />
    </section>
  );
}
