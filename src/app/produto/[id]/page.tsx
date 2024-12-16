'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiShoppingCart } from 'react-icons/fi';
import { products } from '../../../data/products';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Cart from '../../../components/Cart';
import { Product } from '../../../types/Product';

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

const additionals: Additional[] = [
  { id: 'polaroid', name: 'Polaróides (3 unidades)', price: 15.00 },
  { id: 'glitter', name: 'Adicional Glitter', price: 4.00 },
  { id: 'bear', name: 'Ursinho', price: 20.00 },
  { id: 'led', name: 'LED', price: 10.00 },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedAdditionals, setSelectedAdditionals] = useState<Additional[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-beige">
        <div className="text-center">
          <h1 className="text-3xl font-display text-brand-dark mb-4">Produto não encontrado</h1>
          <Link 
            href="/catalogo"
            className="text-brand-accent hover:text-brand-dark transition-colors"
          >
            Voltar para o catálogo
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleAdditionalToggle = (additional: Additional) => {
    setSelectedAdditionals(prev => {
      const exists = prev.find(item => item.id === additional.id);
      if (exists) {
        return prev.filter(item => item.id !== additional.id);
      }
      return [...prev, { ...additional, quantity: 1 }];
    });
  };

  const handleAdditionalQuantity = (additionalId: string, quantity: number) => {
    if (quantity === 0) {
      setSelectedAdditionals(prev => prev.filter(item => item.id !== additionalId));
      return;
    }
    setSelectedAdditionals(prev =>
      prev.map(item =>
        item.id === additionalId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <>
      <Header cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      <main className="min-h-screen bg-gradient-to-b from-brand-beige to-brand-light pt-20">
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          additionals={additionals}
          selectedAdditionals={selectedAdditionals}
          onAdditionalToggle={handleAdditionalToggle}
          onAdditionalQuantity={handleAdditionalQuantity}
        />

        <div className="container mx-auto px-4 py-12">
          {/* Botão Voltar */}
          <button
            onClick={() => router.back()}
            className="mb-8 text-brand-dark hover:text-brand-accent transition-colors flex items-center gap-2 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Voltar
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Imagem do Produto */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-brand-beige/20">
                {product.category === 'buque-borboleta' ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-brand-accent font-handwriting text-3xl mb-4">Seja o Primeiro!</p>
                    <p className="text-brand-muted/80 text-xl font-light">
                      Eternize ainda mais sua forma de carinho sendo o primeiro a pedir este modelo único de buquê
                    </p>
                  </div>
                ) : (
                  <Image
                    src={product.image || ''}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>

              {/* Informações do Produto */}
              <div className="flex flex-col">
                <h1 className="text-4xl font-display text-brand-dark mb-4">{product.name}</h1>
                <p className="text-xl text-brand-muted/80 mb-6 font-light">{product.description}</p>

                {product.details && (
                  <div className="space-y-3 mb-8">
                    {product.details.size && (
                      <p className="text-brand-accent/90 font-light text-lg">
                        Tamanho: {product.details.size}
                      </p>
                    )}
                    {product.details.quantity && (
                      <p className="text-brand-accent/90 font-light text-lg">
                        Quantidade: {product.details.quantity} {product.category === 'buque-eterno' ? 'Rosas' : 'Borboletas'}
                      </p>
                    )}
                    {product.details.additionalInfo && (
                      <p className="text-brand-muted/70 italic">
                        {product.details.additionalInfo}
                      </p>
                    )}
                  </div>
                )}

                {/* Adicionais */}
                <div className="mb-8">
                  <h3 className="text-xl font-display text-brand-dark mb-4">Adicionais</h3>
                  <div className="space-y-3">
                    {additionals.map(additional => (
                      <div
                        key={additional.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-brand-beige/10 border border-brand-accent/10"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedAdditionals.some(item => item.id === additional.id)}
                            onChange={() => handleAdditionalToggle(additional)}
                            className="w-4 h-4 text-brand-accent rounded border-brand-accent/30 focus:ring-brand-accent"
                          />
                          <div>
                            <p className="text-brand-dark">{additional.name}</p>
                            <p className="text-sm text-brand-accent">+ R$ {additional.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantidade e Preço */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-brand-dark">Quantidade:</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg text-brand-dark w-8 text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span className="text-3xl font-display text-brand-dark">
                      R$ {(product.price * quantity).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-brand-accent text-brand-light py-4 rounded-full hover:bg-brand-dark transition-all flex items-center justify-center gap-3 text-lg group"
                  >
                    <FiShoppingCart className="text-xl transition-transform group-hover:scale-110" />
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 