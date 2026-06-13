"use client";

interface FloralDecorationProps {
  className?: string;
  variant?: "corner-tl" | "corner-tr" | "corner-bl" | "corner-br" | "divider" | "wreath" | "branch-left" | "branch-right" | "small";
  color?: string;
  opacity?: number;
}

export function FloralDecoration({
  className = "",
  variant = "divider",
  color = "#8FAF87",
  opacity = 0.7,
}: FloralDecorationProps) {
  const style = { color, opacity };

  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center ${className}`} style={style}>
        <svg width="260" height="28" viewBox="0 0 260 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="14" x2="100" y2="14" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
          <path d="M108 14 C110 8, 116 6, 120 10 C122 12, 124 8, 126 6 C128 4, 132 6, 130 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="130" cy="14" r="2.5" fill="currentColor" fillOpacity="0.8" />
          <path d="M130 14 C132 8, 136 6, 140 10 C142 12, 144 8, 146 6 C148 4, 152 6, 150 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="108" cy="14" r="1.5" fill="currentColor" fillOpacity="0.5" />
          <circle cx="152" cy="14" r="1.5" fill="currentColor" fillOpacity="0.5" />
          <line x1="160" y1="14" x2="260" y2="14" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
        </svg>
      </div>
    );
  }

  if (variant === "wreath") {
    return (
      <div className={`flex items-center justify-center ${className}`} style={style}>
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left branch */}
          <path d="M30 90 C35 70, 45 55, 55 45" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M38 78 C34 68, 28 62, 22 60" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="20" cy="58" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(-20 20 58)" />
          <path d="M44 68 C40 60, 32 56, 26 56" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="24" cy="55" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(-10 24 55)" />
          <path d="M50 58 C44 52, 38 48, 32 48" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="30" cy="47" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(5 30 47)" />
          {/* Top branch */}
          <path d="M55 45 C70 35, 90 30, 110 35" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M72 34 C70 26, 66 20, 60 18" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="58" cy="16" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(-70 58 16)" />
          <path d="M88 30 C88 22, 86 16, 82 12" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="80" cy="10" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(-80 80 10)" />
          {/* Right branch */}
          <path d="M110 35 C120 43, 130 58, 132 72" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M126 48 C134 44, 140 40, 142 34" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="144" cy="32" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(20 144 32)" />
          <path d="M131 60 C138 54, 146 52, 150 46" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="152" cy="44" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(10 152 44)" />
          {/* Bottom right */}
          <path d="M132 72 C132 85, 128 100, 118 112" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M134 86 C142 84, 148 80, 152 74" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="154" cy="72" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(-30 154 72)" />
          {/* Bottom branch */}
          <path d="M118 112 C104 125, 80 132, 60 128" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M100 128 C100 136, 96 142, 90 144" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="90" cy="146" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(-80 90 146)" />
          <path d="M80 132 C78 140, 74 146, 68 148" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="66" cy="150" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(-60 66 150)" />
          {/* Bottom left */}
          <path d="M60 128 C48 122, 36 108, 30 90" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M48 118 C42 126, 34 130, 28 128" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="26" cy="128" rx="5" ry="3" fill="currentColor" fillOpacity="0.4" transform="rotate(60 26 128)" />
          {/* Small flowers */}
          <circle cx="55" cy="44" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="110" cy="35" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="132" cy="72" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="118" cy="112" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="60" cy="128" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="30" cy="90" r="3" fill="currentColor" fillOpacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === "corner-tl") {
    return (
      <div className={`${className}`} style={style}>
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 C10 60, 30 90, 60 100" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M10 10 C50 10, 80 30, 100 60" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M20 30 C14 26, 10 20, 8 14" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="6" cy="12" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.5" transform="rotate(-45 6 12)" />
          <path d="M30 50 C22 46, 16 38, 14 30" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="12" cy="28" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.5" transform="rotate(-30 12 28)" />
          <path d="M40 20 C36 14, 28 10, 22 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="20" cy="10" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.5" transform="rotate(-10 20 10)" />
          <path d="M62 20 C58 12, 50 8, 44 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="42" cy="10" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.5" transform="rotate(10 42 10)" />
          <circle cx="10" cy="10" r="3" fill="currentColor" fillOpacity="0.7" />
          <circle cx="40" cy="42" r="2" fill="currentColor" fillOpacity="0.4" />
          <circle cx="65" cy="25" r="2" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>
    );
  }

  if (variant === "corner-tr") {
    return (
      <div className={`${className}`} style={style}>
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M170 10 C170 60, 150 90, 120 100" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M170 10 C130 10, 100 30, 80 60" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M160 30 C166 26, 170 20, 172 14" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="174" cy="12" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.5" transform="rotate(45 174 12)" />
          <path d="M150 50 C158 46, 164 38, 166 30" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="168" cy="28" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.5" transform="rotate(30 168 28)" />
          <path d="M140 20 C144 14, 152 10, 158 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="160" cy="10" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.5" transform="rotate(10 160 10)" />
          <path d="M118 20 C122 12, 130 8, 136 10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="138" cy="10" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.5" transform="rotate(-10 138 10)" />
          <circle cx="170" cy="10" r="3" fill="currentColor" fillOpacity="0.7" />
          <circle cx="140" cy="42" r="2" fill="currentColor" fillOpacity="0.4" />
          <circle cx="115" cy="25" r="2" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>
    );
  }

  if (variant === "branch-left") {
    return (
      <div className={`${className}`} style={style}>
        <svg width="120" height="320" viewBox="0 0 120 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 0 C70 50, 50 100, 40 160 C30 220, 35 270, 50 320" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M72 40 C60 36, 44 30, 30 28" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="25" cy="27" rx="8" ry="4.5" fill="currentColor" fillOpacity="0.35" transform="rotate(-20 25 27)" />
          <path d="M65 80 C52 74, 36 70, 20 72" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="15" cy="72" rx="8" ry="4.5" fill="currentColor" fillOpacity="0.35" transform="rotate(-5 15 72)" />
          <path d="M55 120 C42 112, 26 110, 10 116" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="5" cy="118" rx="8" ry="4.5" fill="currentColor" fillOpacity="0.35" transform="rotate(10 5 118)" />
          <path d="M46 165 C32 155, 16 154, 2 162" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="0" cy="163" rx="7" ry="4" fill="currentColor" fillOpacity="0.35" transform="rotate(15 0 163)" />
          <path d="M42 210 C30 202, 16 202, 4 212" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="2" cy="214" rx="7" ry="4" fill="currentColor" fillOpacity="0.35" transform="rotate(20 2 214)" />
          <circle cx="30" cy="27" r="2.5" fill="currentColor" fillOpacity="0.6" />
          <circle cx="15" cy="71" r="2.5" fill="currentColor" fillOpacity="0.6" />
          <circle cx="9" cy="116" r="2.5" fill="currentColor" fillOpacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === "branch-right") {
    return (
      <div className={`${className}`} style={style}>
        <svg width="120" height="320" viewBox="0 0 120 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 0 C50 50, 70 100, 80 160 C90 220, 85 270, 70 320" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M48 40 C60 36, 76 30, 90 28" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="95" cy="27" rx="8" ry="4.5" fill="currentColor" fillOpacity="0.35" transform="rotate(20 95 27)" />
          <path d="M55 80 C68 74, 84 70, 100 72" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="105" cy="72" rx="8" ry="4.5" fill="currentColor" fillOpacity="0.35" transform="rotate(5 105 72)" />
          <path d="M65 120 C78 112, 94 110, 110 116" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="115" cy="118" rx="8" ry="4.5" fill="currentColor" fillOpacity="0.35" transform="rotate(-10 115 118)" />
          <path d="M74 165 C88 155, 104 154, 118 162" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="120" cy="163" rx="7" ry="4" fill="currentColor" fillOpacity="0.35" transform="rotate(-15 120 163)" />
          <path d="M78 210 C90 202, 104 202, 116 212" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="118" cy="214" rx="7" ry="4" fill="currentColor" fillOpacity="0.35" transform="rotate(-20 118 214)" />
          <circle cx="90" cy="27" r="2.5" fill="currentColor" fillOpacity="0.6" />
          <circle cx="105" cy="71" r="2.5" fill="currentColor" fillOpacity="0.6" />
          <circle cx="111" cy="116" r="2.5" fill="currentColor" fillOpacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === "small") {
    return (
      <div className={`${className}`} style={style}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 30 C30 20, 26 12, 20 8" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M30 30 C30 20, 34 12, 40 8" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M30 30 C20 30, 12 26, 8 20" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M30 30 C40 30, 48 26, 52 20" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M30 30 C22 36, 16 44, 16 52" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M30 30 C38 36, 44 44, 44 52" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
          <circle cx="20" cy="7" r="3" fill="currentColor" fillOpacity="0.5" />
          <circle cx="40" cy="7" r="3" fill="currentColor" fillOpacity="0.5" />
          <circle cx="7" cy="20" r="3" fill="currentColor" fillOpacity="0.5" />
          <circle cx="53" cy="20" r="3" fill="currentColor" fillOpacity="0.5" />
          <circle cx="30" cy="30" r="4" fill="currentColor" fillOpacity="0.7" />
        </svg>
      </div>
    );
  }

  return null;
}

export function FloralBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-3 left-3 opacity-30">
        <FloralDecoration variant="corner-tl" color="#8FAF87" opacity={1} />
      </div>
      <div className="absolute top-3 right-3 opacity-30">
        <FloralDecoration variant="corner-tr" color="#8FAF87" opacity={1} />
      </div>
    </div>
  );
}
