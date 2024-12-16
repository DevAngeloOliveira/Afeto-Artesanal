'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineCube } from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-brand-beige to-brand-light pt-20 overflow-hidden">
          {/* Elementos Decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Elemento Superior Esquerdo */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-beige rounded-full opacity-50 blur-3xl"></div>
            {/* Elemento Inferior Direito */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-beige rounded-full opacity-50 blur-3xl"></div>
            {/* Folhas Decorativas */}
            <div className="absolute top-0 left-0 w-64 h-64">
              <svg viewBox="0 0 200 200" className="w-full h-full text-brand-accent/10">
                <path d="M30,90 Q50,50 70,90 T110,90" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M40,100 Q60,60 80,100 T120,100" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 transform rotate-180">
              <svg viewBox="0 0 200 200" className="w-full h-full text-brand-accent/10">
                <path d="M30,90 Q50,50 70,90 T110,90" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M40,100 Q60,60 80,100 T120,100" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Lado Esquerdo - Texto */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-brand-dark mb-6">
                    Artesanato com
                    <span className="block font-handwriting text-brand-accent mt-2">amor e dedicação</span>
                  </h1>
                  <p className="text-lg md:text-xl text-brand-muted/90 mb-8 font-light">
                    Transformamos momentos especiais em lembranças eternas através de peças artesanais únicas
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link 
                      href="/catalogo"
                      className="bg-brand-accent text-brand-light px-8 py-4 rounded-full hover:bg-brand-dark transition-all flex items-center justify-center gap-3 text-lg group"
                    >
                      <HiOutlineCube className="text-2xl transition-transform group-hover:scale-110" />
                      Ver Catálogo
                    </Link>
                    <a 
                      href="https://www.instagram.com/oafetoartesanal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#E4405F] border-2 border-[#E4405F] px-8 py-4 rounded-full hover:bg-[#E4405F] hover:text-white transition-all flex items-center justify-center gap-3 text-lg group"
                    >
                      <FaInstagram className="text-2xl transition-transform group-hover:scale-110" />
                      Siga no Instagram
                    </a>
                  </div>
                </div>

                {/* Lado Direito - Logo */}
                <div className="flex-1 relative">
                  <div className="relative w-full aspect-square max-w-lg mx-auto">
                    <Image
                      src="/images/logo.png"
                      alt="Afeto Artesanal"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-brand-light to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-brand-beige/30 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl text-brand-dark mb-6">Sobre Nós</h2>
              <div className="space-y-6 text-lg text-brand-muted/90 font-light leading-relaxed">
                <p>
                  O Afeto Artesanal nasceu do amor pelo artesanato e da vontade de criar peças únicas e especiais.
                  Cada produto é feito à mão, com dedicação e carinho, pensando em trazer mais afeto para o seu dia a dia.
                </p>
                <p>
                  Trabalhamos com produtos personalizados, para tornar cada momento ainda mais especial.
                  Seja para decorar sua casa ou presentear alguém querido, temos a peça perfeita para você.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section className="py-24 bg-brand-beige relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-4xl text-brand-dark mb-3">Entre em Contato</h2>
              <p className="font-handwriting text-2xl text-brand-accent mb-12">
                Faça sua encomenda personalizada
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://www.instagram.com/oafetoartesanal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#E4405F] border-2 border-[#E4405F] px-8 py-4 rounded-full hover:bg-[#E4405F] hover:text-white transition-all flex items-center justify-center gap-3 text-lg group"
                >
                  <FaInstagram className="text-2xl transition-transform group-hover:scale-110" />
                  Instagram
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5583988356953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#25D366] border-2 border-[#25D366] px-8 py-4 rounded-full hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-3 text-lg group"
                >
                  <FaWhatsapp className="text-2xl transition-transform group-hover:scale-110" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
