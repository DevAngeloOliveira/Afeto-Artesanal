import { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

export default function Header({ cartItemsCount = 0, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-brand-beige/95 backdrop-blur-sm z-50 border-b border-brand-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center">
            <div className="relative w-20 h-12">
              <Image
                src="/images/logo.png"
                alt="Afeto Artesanal"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-brand-dark hover:text-brand-accent transition-colors text-sm">
              Início
            </Link>
            <Link href="/catalogo" className="text-brand-dark hover:text-brand-accent transition-colors text-sm">
              Produtos
            </Link>
            <Link href="/#sobre" className="text-brand-dark hover:text-brand-accent transition-colors text-sm">
              Sobre
            </Link>
            <Link href="/#contato" className="text-brand-dark hover:text-brand-accent transition-colors text-sm">
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative bg-transparent border border-brand-accent/20 text-brand-dark px-3 py-1.5 rounded-full hover:bg-brand-accent hover:text-brand-light transition-colors flex items-center gap-2 text-sm"
            >
              <FiShoppingCart className="text-lg" />
              <span className="hidden sm:inline">Carrinho</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-accent text-brand-light w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <a 
              href="https://www.instagram.com/oafetoartesanal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-transparent border border-brand-accent/20 text-brand-dark px-3 py-1.5 rounded-full hover:bg-brand-accent hover:text-brand-light transition-colors text-sm"
            >
              <FaInstagram className="text-lg" />
              <span>Instagram</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-brand-dark hover:text-brand-accent transition-colors text-xl"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-accent/10">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-brand-dark hover:text-brand-accent transition-colors px-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/catalogo"
                className="text-brand-dark hover:text-brand-accent transition-colors px-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/#sobre"
                className="text-brand-dark hover:text-brand-accent transition-colors px-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/#contato"
                className="text-brand-dark hover:text-brand-accent transition-colors px-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <a 
                href="https://www.instagram.com/oafetoartesanal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:text-brand-accent transition-colors px-2 flex items-center gap-2 text-sm"
              >
                <FaInstagram className="text-lg" /> Instagram
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5583988356953"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:text-brand-accent transition-colors px-2 flex items-center gap-2 text-sm"
              >
                <FaWhatsapp className="text-lg" /> WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 