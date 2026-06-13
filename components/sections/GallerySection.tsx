"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { SectionLabel } from "@/components/ui/SectionLabel";

const galleryItems = [
  {
    id: 1,
    gradient: "linear-gradient(135deg, #C8D9C4 0%, #8FAF87 100%)",
    size: "large",
    aspect: "aspect-[3/4]",
    label: "Engagement Photo",
  },
  {
    id: 2,
    gradient: "linear-gradient(135deg, #C5B8D8 0%, #B0C8D4 100%)",
    size: "small",
    aspect: "aspect-square",
    label: "Add Photo",
  },
  {
    id: 3,
    gradient: "linear-gradient(135deg, #F2EDE4 0%, #D8CDBF 100%)",
    size: "small",
    aspect: "aspect-square",
    label: "Add Photo",
  },
  {
    id: 4,
    gradient: "linear-gradient(135deg, #7B9BAC 0%, #B0C8D4 100%)",
    size: "medium",
    aspect: "aspect-[4/3]",
    label: "Engagement Photo",
  },
  {
    id: 5,
    gradient: "linear-gradient(135deg, #A8C5A0 0%, #C8D9C4 100%)",
    size: "medium",
    aspect: "aspect-[4/3]",
    label: "Add Photo",
  },
  {
    id: 6,
    gradient: "linear-gradient(135deg, #D8CEEA 0%, #C5B8D8 100%)",
    size: "large",
    aspect: "aspect-[3/4]",
    label: "Engagement Photo",
  },
];

function GalleryItem({ item, delay }: { item: (typeof galleryItems)[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative overflow-hidden ${item.aspect} cursor-pointer`}
    >
      {/* Photo placeholder */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: item.gradient }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#3a3530]/0 group-hover:bg-[#3a3530]/15 transition-all duration-500" />

      {/* Label overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
        <FloralDecoration variant="small" color="#8FAF87" opacity={0.6} />
        <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#3a3530]/50">
          {item.label}
        </p>
      </div>

      {/* View hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="bg-white/85 backdrop-blur-sm px-6 py-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#3a3530]/60">
            View
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-parchment overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-beige/50 via-parchment to-beige/30 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Our Moments</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif font-light italic text-[#3a3530] mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            A Glimpse of Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic font-light text-[#3a3530]/50 text-lg"
          >
            Memories captured, love immortalised.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <FloralDecoration variant="divider" color="#8FAF87" opacity={0.4} className="mt-10" />
          </motion.div>
        </div>

        {/* Gallery Grid — editorial layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
          {/* Row 1: large + 2 small */}
          <div className="col-span-1 md:col-span-2 row-span-2">
            <GalleryItem item={galleryItems[0]} delay={0.1} />
          </div>
          <div className="col-span-1">
            <GalleryItem item={galleryItems[1]} delay={0.2} />
          </div>
          <div className="col-span-1">
            <GalleryItem item={galleryItems[2]} delay={0.25} />
          </div>

          {/* Row 2: spans */}
          <div className="col-span-1 md:col-span-2">
            <GalleryItem item={galleryItems[3]} delay={0.3} />
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <div className="col-span-1 md:col-span-2">
            <GalleryItem item={galleryItems[4]} delay={0.35} />
          </div>
          <div className="col-span-1">
            <GalleryItem item={galleryItems[5]} delay={0.4} />
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#gallery-full"
            className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.35em] uppercase text-sage border-b border-sage/40 pb-1 hover:border-sage transition-colors duration-300"
          >
            View Full Gallery
            <span className="text-base leading-none">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
