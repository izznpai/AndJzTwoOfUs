interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <p
      className={`font-sans text-[10px] tracking-[0.35em] uppercase font-medium mb-6 ${
        light ? "text-white/60" : "text-sage"
      } ${className}`}
    >
      {children}
    </p>
  );
}
