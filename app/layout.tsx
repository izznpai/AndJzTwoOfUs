import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AndJzTheTwoOfUs | Andi & Jz — October 22, 2026",
  description:
    "Join us as we celebrate the marriage of Andi & Jz on October 22, 2026. A celebration of love, laughter, and happily ever after.",
  openGraph: {
    title: "Andi & Jz — AndJzTheTwoOfUs",
    description: "A celebration of love, laughter, and happily ever after. October 22, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
