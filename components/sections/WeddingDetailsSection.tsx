"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface DetailCard {
  type: string;
  title: string;
  time: string;
  venue: string;
  address: string;
  note?: string;
  icon: React.ReactNode;
}

const ChurchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2V8M14 4H18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M8 14V30H24V14L16 8L8 14Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <rect x="13" y="20" width="6" height="10" stroke="currentColor" strokeWidth="1.2" />
    <path d="M12 16H20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const DinnerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4V14C8 17.3 10.7 20 14 20V28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 4H14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M11 4V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M22 4C22 4 24 8 24 14C24 17.3 21.3 20 18 20V28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 28H20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const details: DetailCard[] = [
  {
    type: "Ceremony",
    title: "Holy Matrimony",
    time: "3:30 PM",
    venue: "[Church / Ceremony Venue]",
    address: "[Address, City]",
    note: "Please arrive by 3:00 PM",
    icon: <ChurchIcon />,
  },
  {
    type: "Reception",
    title: "Dinner & Celebration",
    time: "6:00 PM",
    venue: "[Reception Venue]",
    address: "[Address, City]",
    note: "Cocktail hour to follow ceremony",
    icon: <DinnerIcon />,
  },
];

function DetailCard({ detail, delay }: { detail: DetailCard; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative bg-white border border-beige-dark/50 p-10 md:p-14 text-center shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
    >
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-sage/30 transition-all duration-500 group-hover:border-sage/60" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-sage/30 transition-all duration-500 group-hover:border-sage/60" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-sage/30 transition-all duration-500 group-hover:border-sage/60" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-sage/30 transition-all duration-500 group-hover:border-sage/60" />

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-beige/80 text-sage mb-8 mx-auto">
        {detail.icon}
      </div>

      {/* Type label */}
      <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-sage mb-4">
        {detail.type}
      </p>

      {/* Title */}
      <h3 className="font-serif font-light italic text-[#3a3530] text-2xl md:text-3xl mb-6 leading-snug">
        {detail.title}
      </h3>

      {/* Divider */}
      <div className="w-8 h-px bg-sage/30 mx-auto mb-6" />

      {/* Time */}
      <p className="font-serif text-[#3a3530] text-3xl font-light mb-6 tracking-widest"
        style={{ letterSpacing: "0.1em" }}>
        {detail.time}
      </p>

      {/* Venue */}
      <p className="font-serif font-light text-[#3a3530]/80 text-lg mb-1">
        {detail.venue}
      </p>
      <p className="font-serif italic font-light text-[#3a3530]/45 text-base mb-8">
        {detail.address}
      </p>

      {/* Note */}
      {detail.note && (
        <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-sage/70">
          {detail.note}
        </p>
      )}
    </motion.div>
  );
}

export function WeddingDetailsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="details" className="relative py-28 md:py-36 bg-beige overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-beige to-parchment/80 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>The Wedding Day</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif font-light italic text-[#3a3530] mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            October 22, 2026
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic font-light text-[#3a3530]/50 text-lg max-w-md mx-auto"
          >
            Join us for a day filled with love, joy, and unforgettable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <FloralDecoration variant="divider" color="#8FAF87" opacity={0.45} className="mt-10" />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {details.map((detail, i) => (
            <DetailCard key={detail.type} detail={detail} delay={i * 0.15} />
          ))}
        </div>

        {/* Map note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-14 font-sans text-[10px] tracking-[0.3em] uppercase text-[#3a3530]/30"
        >
          Directions & Accommodation details will be shared closer to the date
        </motion.p>
      </div>
    </section>
  );
}
