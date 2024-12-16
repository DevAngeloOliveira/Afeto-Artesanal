import type { Metadata } from "next";
import { Poppins, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"],
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
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-brand-light text-brand-dark`}
        style={{
          '--font-sans': poppins.style.fontFamily,
          '--font-display': montserrat.style.fontFamily,
          '--font-handwriting': dancingScript.style.fontFamily,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  )
}
