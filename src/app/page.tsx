'use client';

import Link from 'next/link';
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
        <section id="inicio" className="relative h-screen flex items-center justify-center bg-brand-beige pt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center mb-8">
              <span className="font-display text-5xl tracking-wide text-brand-dark">AFETO</span>
              <span className="font-handwriting text-3xl text-brand-accent">artesanal</span>
            </div>
            <p className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto">
              Artesanato feito com amor e dedicação para tornar seus momentos ainda mais especiais
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link 
                href="/catalogo"
                className="bg-brand-accent text-brand-light px-8 py-4 rounded-full hover:bg-brand-dark transition-all flex items-center justify-center gap-3 text-lg"
              >
                <HiOutlineCube className="text-2xl" />
                Ver Catálogo
              </Link>
              <a 
                href="https://www.instagram.com/oafetoartesanal/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4405F] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 text-lg"
              >
                <FaInstagram className="text-2xl" />
                Siga no Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-24 bg-brand-light">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-brand-dark text-center mb-12">Sobre Nós</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-brand-muted mb-6">
                Afeto Artesanal nasceu do amor pelo artesanato e da vontade de criar peças únicas e especiais.
                Cada produto é feito à mão, com dedicação e carinho, pensando em trazer mais afeto para o seu dia a dia.
              </p>
              <p className="text-lg text-brand-muted">
                Trabalhamos com produtos personalizados, para tornar cada momento ainda mais especial.
                Seja para decorar sua casa ou presentear alguém querido, temos a peça perfeita para você.
              </p>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-24 bg-brand-beige">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl text-brand-dark mb-4">Entre em Contato</h2>
            <p className="font-handwriting text-2xl text-brand-accent mb-12">
              Faça sua encomenda personalizada
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-lg mx-auto">
              <a 
                href="https://www.instagram.com/oafetoartesanal/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4405F] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 text-lg"
              >
                <FaInstagram className="text-2xl" />
                Instagram
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5583988356953"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
