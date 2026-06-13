"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { SectionLabel } from "@/components/ui/SectionLabel";

const photos = [
  { src: "/Gallery/1 (1).png", alt: "Andi and Jz" },
  { src: "/Gallery/1 (2).png", alt: "Andi and Jz" },
  { src: "/Gallery/1 (3).png", alt: "Andi and Jz" },
  { src: "/Gallery/1 (4).png", alt: "Andi and Jz" },
  { src: "/Gallery/1 (5).png", alt: "Andi and Jz" },
  { src: "/Gallery/1 (6).png", alt: "Andi and Jz" },
  { src: "/Gallery/1 (7).png", alt: "Andi and Jz" },
];

function GalleryPhoto({
  photo,
  delay,
  className = "",
}: {
  photo: (typeof photos)[0];
  delay: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        quality={90}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#3a3530]/0 group-hover:bg-[#3a3530]/20 transition-all duration-500" />
      {/* View hint */}
      <div className="absolute inset-0 flex items-end justify-start p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-white/80 border-b border-white/40 pb-px">
          View
        </span>
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

        {/* Editorial grid — desktop: 3 cols × 4 rows */}
        <div
          className="hidden md:grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "360px 360px 280px 280px",
          }}
        >
          {/* 1 — large portrait, top-left spanning 2 rows */}
          <GalleryPhoto
            photo={photos[0]}
            delay={0.05}
            className="[grid-column:1] [grid-row:1/3]"
          />
          {/* 2 — top right */}
          <GalleryPhoto
            photo={photos[1]}
            delay={0.1}
            className="[grid-column:2] [grid-row:1]"
          />
          {/* 3 — middle right */}
          <GalleryPhoto
            photo={photos[2]}
            delay={0.15}
            className="[grid-column:3] [grid-row:1]"
          />
          {/* 4 — second row middle */}
          <GalleryPhoto
            photo={photos[3]}
            delay={0.2}
            className="[grid-column:2] [grid-row:2]"
          />
          {/* 5 — second row right */}
          <GalleryPhoto
            photo={photos[4]}
            delay={0.25}
            className="[grid-column:3] [grid-row:2]"
          />
          {/* 6 — bottom left wide */}
          <GalleryPhoto
            photo={photos[5]}
            delay={0.3}
            className="[grid-column:1/3] [grid-row:3/5]"
          />
          {/* 7 — bottom right tall */}
          <GalleryPhoto
            photo={photos[6]}
            delay={0.35}
            className="[grid-column:3] [grid-row:3/5]"
          />
        </div>

        {/* Mobile: 2-col simple grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={85}
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
