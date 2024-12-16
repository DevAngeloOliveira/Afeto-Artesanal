import type { Metadata } from "next";
import { Poppins, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afeto Artesanal | Artesanato Personalizado",
  description: "Artesanato feito com amor e dedicação. Amigurumis, decoração e presentes personalizados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${montserrat.variable} ${dancingScript.variable}`}>
      <body className="font-sans bg-brand-light text-brand-dark">
        {children}
      </body>
    </html>
  )
}
