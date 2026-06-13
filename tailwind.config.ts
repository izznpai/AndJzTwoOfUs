import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#8FAF87",
          light: "#A8C5A0",
          dark: "#6D8C65",
          muted: "#C8D9C4",
        },
        "dusty-blue": {
          DEFAULT: "#7B9BAC",
          light: "#9AB5C3",
          muted: "#C0D3DC",
        },
        "powder-blue": {
          DEFAULT: "#B0C8D4",
          light: "#CDE0E8",
        },
        beige: {
          DEFAULT: "#F2EDE4",
          dark: "#E8E0D4",
          deep: "#D8CDBF",
        },
        "soft-gray": {
          DEFAULT: "#C8C8C8",
          light: "#E8E8E8",
        },
        lavender: {
          DEFAULT: "#C5B8D8",
          light: "#D8CEEA",
          muted: "#E4DDEF",
        },
        cream: "#FAF7F2",
        parchment: "#F5F0E8",
        "warm-white": "#FEFCF9",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        script: ["var(--font-great-vibes)", "Great Vibes", "cursive"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
        "11xl": ["12rem", { lineHeight: "1" }],
        "display": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05" }],
        "display-sm": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.1" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "section": "7rem",
      },
      letterSpacing: {
        "ultra": "0.3em",
        "wide-sm": "0.15em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sage-gradient": "linear-gradient(135deg, #C8D9C4 0%, #A8C5A0 100%)",
        "beige-gradient": "linear-gradient(180deg, #FAF7F2 0%, #F2EDE4 100%)",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "petal-fall": "petalFall 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(1deg)" },
          "66%": { transform: "translateY(-4px) rotate(-1deg)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(60px) rotate(180deg)", opacity: "0" },
        },
      },
      boxShadow: {
        "card": "0 4px 30px rgba(143, 175, 135, 0.08), 0 1px 8px rgba(0,0,0,0.04)",
        "card-hover": "0 12px 50px rgba(143, 175, 135, 0.15), 0 4px 16px rgba(0,0,0,0.06)",
        "elegant": "0 2px 20px rgba(0,0,0,0.06)",
        "hero": "0 25px 80px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        "xl2": "1.25rem",
        "2xl2": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
