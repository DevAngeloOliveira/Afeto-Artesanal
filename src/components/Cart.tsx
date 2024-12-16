import { Product } from '../types/Product';
import { FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

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
      
      // Seção de Adicionais
      `${selectedAdditionals.length > 0 ? '\n\n*🎀 ADICIONAIS SELECIONADOS:*\n' + 
        selectedAdditionals
          .map((item) => {
            const quantity = item.quantity || 1;
            return `• ${quantity}x ${item.name}\n   ↳ Valor unitário: R$ ${item.price.toFixed(2)}\n   ↳ Subtotal: R$ ${(item.price * quantity).toFixed(2)}`;
          })
          .join('\n\n')
        : ''}` +
      
      // Resumo do Pedido
      `\n\n*💫 RESUMO DO PEDIDO:*\n` +
      `📦 Produtos: R$ ${subtotal.toFixed(2)}` +
      `${selectedAdditionals.length > 0 ? '\n🎀 Adicionais: R$ ' + additionalsTotal.toFixed(2) : ''}` +
      `\n💝 *Total do Pedido: R$ ${total.toFixed(2)}*` +
      
      // Informações Adicionais
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-brand-dark">Seu Carrinho</h2>
          <button
            onClick={onClose}
            className="text-brand-muted hover:text-brand-dark transition-colors p-1"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-brand-muted mb-4">Seu carrinho está vazio</p>
              <p className="text-brand-accent text-sm">Adicione produtos para fazer seu pedido</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-brand-beige p-4 rounded-lg"
                  >
                    <div className="relative w-20 h-20">
                      {item.category === 'buque-borboleta' ? (
                        <div className="w-full h-full flex items-center justify-center bg-brand-beige/50 rounded-md">
                          <span className="text-brand-accent text-sm text-center px-2">Buquê de Borboleta</span>
                        </div>
                      ) : (
                        <Image
                          src={item.image || ''}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover rounded-md"
                          loading="eager"
                          quality={75}
                          unoptimized={false}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-brand-dark">{item.name}</h3>
                      <p className="text-sm text-brand-accent">
                        R$ {item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center text-brand-accent hover:text-brand-dark border border-brand-accent/20 rounded-full hover:bg-brand-beige transition-colors"
                        >
                          <FiMinus />
                        </button>
                        <span className="px-2 min-w-[2rem] text-center text-brand-dark">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-brand-accent hover:text-brand-dark border border-brand-accent/20 rounded-full hover:bg-brand-beige transition-colors"
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-brand-muted hover:text-brand-accent transition-colors p-2"
                      title="Remover item"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Adicionais */}
              <div className="border-t border-brand-beige pt-6 mb-6">
                <h3 className="font-semibold text-brand-dark mb-4">Adicionais</h3>
                <div className="space-y-3">
                  {additionals.map((additional) => {
                    const isSelected = selectedAdditionals.some(item => item.id === additional.id);
                    const selectedItem = selectedAdditionals.find(item => item.id === additional.id);

                    return (
                      <div key={additional.id} className="flex items-center justify-between p-3 bg-brand-beige/30 rounded-lg">
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
                              className="w-6 h-6 flex items-center justify-center text-brand-accent hover:text-brand-dark border border-brand-accent/20 rounded-full hover:bg-brand-beige transition-colors"
                            >
                              <FiMinus className="text-sm" />
                            </button>
                            <span className="px-2 min-w-[1.5rem] text-center text-brand-dark text-sm">
                              {selectedItem?.quantity || 1}
                            </span>
                            <button
                              onClick={() => onAdditionalQuantity(additional.id, (selectedItem?.quantity || 1) + 1)}
                              className="w-6 h-6 flex items-center justify-center text-brand-accent hover:text-brand-dark border border-brand-accent/20 rounded-full hover:bg-brand-beige transition-colors"
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
            </>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-brand-beige">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-brand-muted">Subtotal</span>
              <span className="text-brand-dark">R$ {subtotal.toFixed(2)}</span>
            </div>
            {selectedAdditionals.length > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-brand-muted">Adicionais</span>
                <span className="text-brand-dark">R$ {additionalsTotal.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-brand-dark">Total do Pedido</span>
              <span className="text-brand-dark">R$ {total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleWhatsAppCheckout}
            disabled={items.length === 0}
            className="w-full bg-brand-accent text-brand-light py-3 rounded-full hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            <span>Finalizar Pedido via WhatsApp</span>
            {items.length > 0 && <span>({items.length} {items.length === 1 ? 'item' : 'itens'})</span>}
          </button>
          <p className="text-sm text-brand-muted text-center mt-4">
            Ao finalizar, você será redirecionado para o WhatsApp para confirmar seu pedido
          </p>
        </div>
      </div>
    </div>
  );
} 