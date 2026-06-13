import { FloralDecoration } from "@/components/ui/FloralDecoration";

export function Footer() {
  return (
    <footer className="relative py-20 bg-[#3a3530] overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <FloralDecoration variant="divider" color="#8FAF87" opacity={0.3} className="mb-12" />

        <p className="font-script text-5xl text-white/80 mb-4">
          Andi & Jz
        </p>

        <p className="font-sans text-[9px] tracking-[0.45em] uppercase text-white/30 mb-8">
          AndJzTheTwoOfUs
        </p>

        <p className="font-serif italic font-light text-white/40 text-base mb-12">
          October 22, 2026 · 3:30 PM
        </p>

        <FloralDecoration variant="divider" color="#8FAF87" opacity={0.15} className="mb-8" />

        <p className="font-serif italic font-light text-white/20 text-sm">
          A celebration of love, laughter, and happily ever after.
        </p>

        <p className="font-sans text-[8px] tracking-[0.2em] uppercase text-white/15 mt-10">
          © 2026 AndJzTheTwoOfUs · Made with love
        </p>
      </div>
    </footer>
  );
}
