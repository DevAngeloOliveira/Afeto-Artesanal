import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-display text-xl mb-4">Afeto Artesanal</h3>
            <p className="text-brand-light/80 mb-4">
              Artesanato feito com amor e dedicação para tornar seus momentos ainda mais especiais.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-display text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brand-light/80 hover:text-brand-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-brand-light/80 hover:text-brand-accent transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-brand-light/80 hover:text-brand-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-brand-light/80 hover:text-brand-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-xl mb-4">Contato</h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/oafetoartesanal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-light/80 hover:text-brand-accent transition-colors"
              >
                <FaInstagram />
                <span>@oafetoartesanal</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5583988356953"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-light/80 hover:text-brand-accent transition-colors"
              >
                <FaWhatsapp />
                <span>(83) 98835-6953</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-light/10 mt-8 pt-8 text-center">
          <p className="text-brand-light/60 mb-4">&copy; {new Date().getFullYear()} Afeto Artesanal. Todos os direitos reservados.</p>
          <div className="flex items-center justify-center gap-2 text-brand-light/60">
            <span>Desenvolvido por</span>
            <span className="font-medium">Angelo Oliveira</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/http_angelo.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors"
                title="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a 
                href="https://github.com/DevAngeloOliveira/DevAngeloOliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors"
                title="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 