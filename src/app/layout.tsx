import type { Metadata } from "next";
import { Poppins, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial']
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
  fallback: ['Georgia', 'serif']
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
  fallback: ['cursive']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afeto-artesanal.vercel.app'),
  title: "Afeto Artesanal | Artesanato Personalizado",
  description: "Artesanato feito com amor e dedicação. Buquês eternos, decoração e presentes personalizados.",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png",
      }
    ],
    shortcut: ["/images/logo.png"],
    apple: [
      {
        url: "/images/logo.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Afeto Artesanal | Artesanato Personalizado",
    description: "Artesanato feito com amor e dedicação. Buquês eternos, decoração e presentes personalizados.",
    url: "https://afeto-artesanal.vercel.app",
    siteName: "Afeto Artesanal",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Afeto Artesanal Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Afeto Artesanal | Artesanato Personalizado",
    description: "Artesanato feito com amor e dedicação. Buquês eternos, decoração e presentes personalizados.",
    images: ["/images/logo.png"],
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://afeto-artesanal.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
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
