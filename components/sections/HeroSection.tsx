"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroVariantA } from "./HeroVariantA";
import { HeroVariantE } from "./HeroVariantE";

export function HeroSection() {
  const [active, setActive] = useState<"A" | "E">("E");

  useEffect(() => {
    setActive(window.innerWidth >= 768 ? "A" : "E");
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {active === "A" ? (
          <motion.div
            key="A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroVariantA />
          </motion.div>
        ) : (
          <motion.div
            key="E"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroVariantE />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle pill */}
      <div className="absolute bottom-10 right-8 z-50 flex items-center gap-px bg-black/20 backdrop-blur-sm p-0.5">
        {(["A", "E"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setActive(v)}
            className={`px-4 py-2 font-sans text-[9px] tracking-[0.3em] uppercase transition-all duration-300 ${
              active === v
                ? "bg-white/90 text-[#3a3530]"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
