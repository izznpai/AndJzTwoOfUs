"use client";

import Link from "next/link";

export function ThemeSwitcher({ active }: { active: "a" | "b" | "c" }) {
  const themes = [
    { id: "a", label: "A · Garden", href: "/" },
    { id: "b", label: "B · Editorial", href: "/theme-b" },
    { id: "c", label: "C · Blush", href: "/theme-c" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1
                    bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-2 py-2 shadow-lg">
      {themes.map((t) =>
        t.id === active ? (
          <span key={t.id}
            className="px-4 py-1.5 rounded-full font-sans text-[9px] tracking-[0.2em] uppercase bg-[#8FAF87] text-white">
            {t.label}
          </span>
        ) : (
          <Link key={t.id} href={t.href}
            className="px-4 py-1.5 rounded-full font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 hover:text-gray-700 transition-colors">
            {t.label}
          </Link>
        )
      )}
    </div>
  );
}
