import { Product } from '../types/Product';
import { FiX, FiPlus, FiMinus, FiTrash2, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface CartItem extends Product {
  quantity: number;
}

interface Additional {
  id: string;
  name: string;
  price: number;
  selected?: boolean;
  quantity?: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  additionals: Additional[];
  selectedAdditionals: Additional[];
  onAdditionalToggle: (additional: Additional) => void;
  onAdditionalQuantity: (additionalId: string, quantity: number) => void;
}

export default function Cart({ 
  isOpen, 
  onClose, 
  items, 
  onRemoveItem, 
  onUpdateQuantity,
  additionals,
  selectedAdditionals,
  onAdditionalToggle,
  onAdditionalQuantity
}: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const additionalsTotal = selectedAdditionals.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const total = subtotal + additionalsTotal;

  const handleWhatsAppCheckout = () => {
    const message = `*🌹 Novo Pedido - Afeto Artesanal*\n\n` +
      `Olá! Gostaria de fazer um pedido:\n\n` +
      `*📋 ITENS DO PEDIDO:*\n${items
        .map((item) => `• ${item.quantity}x ${item.name}\n   ↳ Valor unitário: R$ ${item.price.toFixed(2)}\n   ↳ Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}`)
        .join('\n\n')}` +
      
      `${selectedAdditionals.length > 0 ? '\n\n*🎀 ADICIONAIS SELECIONADOS:*\n' + 
        selectedAdditionals
          .map((item) => {
            const quantity = item.quantity || 1;
            return `• ${quantity}x ${item.name}\n   ↳ Valor unitário: R$ ${item.price.toFixed(2)}\n   ↳ Subtotal: R$ ${(item.price * quantity).toFixed(2)}`;
          })
          .join('\n\n')
        : ''}` +
      
      `\n\n*💫 RESUMO DO PEDIDO:*\n` +
      `📦 Produtos: R$ ${subtotal.toFixed(2)}` +
      `${selectedAdditionals.length > 0 ? '\n🎀 Adicionais: R$ ' + additionalsTotal.toFixed(2) : ''}` +
      `\n💝 *Total do Pedido: R$ ${total.toFixed(2)}*` +
      
      `\n\n*ℹ️ INFORMAÇÕES IMPORTANTES:*\n` +
      `• Todos os produtos são feitos artesanalmente com muito carinho\n` +
      `• O prazo de produção será informado após a confirmação do pedido\n` +
      `• Para confirmar o pedido, é necessário um sinal de 50%\n` +
      `• Formas de pagamento: PIX, cartão ou transferência bancária\n\n` +
      `Aguardo a confirmação do pedido para iniciar a produção com todo carinho! 🌹`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send/?phone=5583988356953&text=${encodedMessage}`,
      '_blank'
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-brand-accent/10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-display text-brand-dark">Seu Carrinho</h2>
            <button
              onClick={onClose}
              className="text-brand-muted hover:text-brand-dark transition-colors p-1 rounded-full hover:bg-brand-beige/10"
            >
              <FiX className="text-xl" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-beige/30 flex items-center justify-center mb-4">
                <FiTrash2 className="text-2xl text-brand-accent/50" />
              </div>
              <p className="text-brand-muted mb-4">Seu carrinho está vazio</p>
              <Link
                href="/catalogo"
                className="text-brand-accent hover:text-brand-dark transition-colors flex items-center gap-2 group"
                onClick={onClose}
              >
                Ver Catálogo
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {/* Produtos */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-brand-beige/10 rounded-xl group"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-brand-beige/20 flex-shrink-0">
                      {item.category === 'buque-borboleta' ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-brand-accent text-sm text-center px-2">Buquê de Borboleta</span>
                        </div>
                      ) : (
                        <Image
                          src={item.image || ''}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-brand-dark group-hover:text-brand-accent transition-colors">
                            <Link href={`/produto/${item.id}`} onClick={onClose}>
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-brand-accent">
                            R$ {item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-brand-muted hover:text-brand-accent transition-colors p-1"
                          title="Remover item"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-6 h-6 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
                        >
                          <FiMinus className="text-sm" />
                        </button>
                        <span className="w-8 text-center text-brand-dark">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
                        >
                          <FiPlus className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Adicionais */}
              <div className="border-t border-brand-accent/10 pt-6">
                <h3 className="font-display text-lg text-brand-dark mb-4">Adicionais</h3>
                <div className="space-y-3">
                  {additionals.map((additional) => {
                    const isSelected = selectedAdditionals.some(item => item.id === additional.id);
                    const selectedItem = selectedAdditionals.find(item => item.id === additional.id);

                    return (
                      <div
                        key={additional.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-brand-beige/10 border border-brand-accent/10"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => onAdditionalToggle(additional)}
                            className="w-4 h-4 text-brand-accent rounded border-brand-accent/30 focus:ring-brand-accent"
                          />
                          <div>
                            <p className="text-brand-dark">{additional.name}</p>
                            <p className="text-sm text-brand-accent">R$ {additional.price.toFixed(2)}</p>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onAdditionalQuantity(additional.id, (selectedItem?.quantity || 1) - 1)}
                              className="w-6 h-6 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
                            >
                              <FiMinus className="text-sm" />
                            </button>
                            <span className="w-6 text-center text-brand-dark text-sm">
                              {selectedItem?.quantity || 1}
                            </span>
                            <button
                              onClick={() => onAdditionalQuantity(additional.id, (selectedItem?.quantity || 1) + 1)}
                              className="w-6 h-6 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
                            >
                              <FiPlus className="text-sm" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-accent/10 p-6">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-brand-muted">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              {selectedAdditionals.length > 0 && (
                <div className="flex justify-between items-center text-brand-muted">
                  <span>Adicionais</span>
                  <span>R$ {additionalsTotal.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-lg font-display text-brand-dark pt-3 border-t border-brand-accent/10">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-brand-accent text-brand-light py-4 rounded-full hover:bg-brand-dark transition-all flex items-center justify-center gap-3 text-lg group"
            >
              <FaWhatsapp className="text-xl transition-transform group-hover:scale-110" />
              <span>Finalizar Pedido</span>
              <span className="text-sm">({items.length} {items.length === 1 ? 'item' : 'itens'})</span>
            </button>
            <p className="text-sm text-brand-muted text-center mt-4">
              Ao finalizar, você será redirecionado para o WhatsApp para confirmar seu pedido
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 