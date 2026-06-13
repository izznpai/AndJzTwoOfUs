"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";
import { SectionLabel } from "@/components/ui/SectionLabel";

const palette = [
  {
    name: "Sage Green",
    hex: "#8FAF87",
    bg: "bg-[#8FAF87]",
    textColor: "text-white",
    description: "Soft and botanical",
  },
  {
    name: "Dusty Blue",
    hex: "#7B9BAC",
    bg: "bg-[#7B9BAC]",
    textColor: "text-white",
    description: "Cool and serene",
  },
  {
    name: "Powder Blue",
    hex: "#B0C8D4",
    bg: "bg-[#B0C8D4]",
    textColor: "text-[#3a3530]",
    description: "Soft and airy",
  },
  {
    name: "Light Beige",
    hex: "#F2EDE4",
    bg: "bg-[#F2EDE4]",
    textColor: "text-[#3a3530]",
    description: "Warm and neutral",
    border: true,
  },
  {
    name: "Soft Gray",
    hex: "#C8C8C8",
    bg: "bg-[#C8C8C8]",
    textColor: "text-[#3a3530]",
    description: "Subtle and refined",
  },
  {
    name: "Lavender",
    hex: "#C5B8D8",
    bg: "bg-[#C5B8D8]",
    textColor: "text-[#3a3530]",
    description: "Romantic and soft",
  },
];

const guidelines = [
  { label: "Encouraged", items: ["Pastels & soft tones", "Florals & lace", "Garden party elegance"] },
  { label: "Please Avoid", items: ["White or ivory", "All-black formal", "Neon or bold brights"] },
];

export function DressGuideSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-muted/20 via-white to-powder-blue/10 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Attire Guide</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif font-light italic text-[#3a3530] mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Dress to Celebrate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic font-light text-[#3a3530]/55 text-lg max-w-lg mx-auto leading-relaxed"
          >
            We invite you to dress in soft, garden-inspired tones that complement
            our spring palette. Formal garden party attire is kindly requested.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <FloralDecoration variant="divider" color="#8FAF87" opacity={0.4} className="mt-10" />
          </motion.div>
        </div>

        {/* Color Palette */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-sage text-center mb-10"
          >
            Wedding Color Palette
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {palette.map((color, i) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group flex flex-col items-center"
              >
                {/* Swatch */}
                <div
                  className={`
                    w-full aspect-[3/4] ${color.bg} mb-4
                    transition-transform duration-500 group-hover:scale-[1.03]
                    shadow-sm
                    ${color.border ? "border border-beige-dark" : ""}
                  `}
                >
                  {/* Inner content */}
                  <div className="h-full flex flex-col justify-end p-3">
                    <p className={`font-sans text-[9px] tracking-[0.15em] ${color.textColor} opacity-60`}>
                      {color.hex}
                    </p>
                  </div>
                </div>

                <p className="font-serif font-light text-[#3a3530] text-sm text-center mb-1">
                  {color.name}
                </p>
                <p className="font-sans text-[9px] tracking-[0.1em] text-[#3a3530]/40 text-center">
                  {color.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dress image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl mx-auto mb-20"
        >
          <div
            className="w-full aspect-[16/7] relative overflow-hidden border border-beige-dark/40"
            style={{
              background: "linear-gradient(135deg, #C8D9C4 0%, #D8CEEA 40%, #B0C8D4 70%, #F2EDE4 100%)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <FloralDecoration variant="wreath" color="#8FAF87" opacity={0.3} />
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#3a3530]/25">
                Dress Guide Image
              </p>
            </div>
          </div>
          {/* Caption */}
          <p className="text-center mt-5 font-serif italic font-light text-[#3a3530]/40 text-sm">
            Formal Garden Party Attire
          </p>
        </motion.div>

        {/* Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {guidelines.map((guide, i) => (
            <motion.div
              key={guide.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-sage mb-5">
                {guide.label}
              </p>
              <ul className="space-y-2">
                {guide.items.map((item) => (
                  <li key={item} className="font-serif italic font-light text-[#3a3530]/65 text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
