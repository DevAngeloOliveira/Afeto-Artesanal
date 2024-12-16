import { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface HeaderProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

export default function Header({ cartItemsCount = 0, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-brand-light/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-start">
              <span className="font-display text-2xl tracking-wide text-brand-dark">AFETO</span>
              <span className="font-handwriting text-xl text-brand-accent">artesanal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-brand-dark hover:text-brand-accent transition-colors">Início</a>
            <a href="#produtos" className="text-brand-dark hover:text-brand-accent transition-colors">Produtos</a>
            <a href="#sobre" className="text-brand-dark hover:text-brand-accent transition-colors">Sobre</a>
            <a href="#contato" className="text-brand-dark hover:text-brand-accent transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative bg-brand-beige text-brand-dark px-4 py-2 rounded-full hover:bg-brand-accent hover:text-brand-light transition-colors flex items-center gap-2"
            >
              <FiShoppingCart className="text-lg" />
              <span>Carrinho</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-accent text-brand-light w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <a 
              href="https://www.instagram.com/oafetoartesanal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-brand-accent text-brand-light px-4 py-2 rounded-full hover:bg-brand-dark transition-colors"
            >
              <FaInstagram className="text-lg" />
              <span>Instagram</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-brand-dark hover:text-brand-accent transition-colors text-2xl"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-brand-beige">
            <nav className="flex flex-col gap-4">
              <a 
                href="#inicio" 
                className="text-brand-dark hover:text-brand-accent transition-colors px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#produtos" 
                className="text-brand-dark hover:text-brand-accent transition-colors px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#sobre" 
                className="text-brand-dark hover:text-brand-accent transition-colors px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#contato" 
                className="text-brand-dark hover:text-brand-accent transition-colors px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
              <a 
                href="https://www.instagram.com/oafetoartesanal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:text-brand-accent transition-colors px-2 flex items-center gap-2"
              >
                <FaInstagram className="text-lg" /> Instagram
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5583988356953"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:text-brand-accent transition-colors px-2 flex items-center gap-2"
              >
                <FaWhatsapp className="text-lg" /> WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 