'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductFilter from '../../components/ProductFilter';
import Cart from '../../components/Cart';
import { products } from '../../data/products';
import { Product } from '../../types/Product';

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

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedAdditionals, setSelectedAdditionals] = useState<Additional[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
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

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos do catálogo.');
    window.open(
      `https://api.whatsapp.com/send/?phone=5583988356953&text=${message}`,
      '_blank'
    );
  };

  return (
    <>
      <Header cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      <main className="min-h-screen bg-gradient-to-b from-brand-beige to-brand-light pt-20">
        {/* Botão do Carrinho Flutuante */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-brand-accent text-brand-light w-16 h-16 rounded-full shadow-lg hover:bg-brand-dark transition-all flex items-center justify-center z-40 group"
        >
          <div className="relative">
            <FiShoppingCart className="text-2xl group-hover:scale-110 transition-transform" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-dark text-brand-light text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>
        </button>

        {/* Carrinho */}
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

        {/* Título da Página */}
        <section className="relative py-16 overflow-hidden">
          {/* Elementos Decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-beige rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-beige rounded-full opacity-50 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl text-brand-dark mb-6">
                Nossos Produtos
                <span className="block font-handwriting text-brand-accent mt-2">feitos com amor</span>
              </h1>
              <p className="text-lg text-brand-muted/90 mb-8 font-light">
                Cada peça é única e feita especialmente para você
              </p>
              <button
                onClick={handleWhatsAppContact}
                className="bg-white text-[#25D366] border-2 border-[#25D366] px-8 py-4 rounded-full hover:bg-[#25D366] hover:text-white transition-all inline-flex items-center gap-3 text-lg group"
              >
                <FaWhatsapp className="text-2xl transition-transform group-hover:scale-110" />
                <span>Tire suas dúvidas</span>
              </button>
            </div>
          </div>
        </section>

        {/* Filtro e Produtos */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <ProductFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                  <Link href={`/produto/${product.id}`} className="block">
                    <div className="relative pt-[100%] bg-brand-beige/20">
                      {product.category === 'buque-borboleta' ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                          <p className="text-brand-accent font-handwriting text-2xl mb-4">Seja o Primeiro!</p>
                          <p className="text-brand-muted/80 text-lg font-light">
                            Eternize ainda mais sua forma de carinho sendo o primeiro a pedir este modelo único de buquê
                          </p>
                        </div>
                      ) : (
                        <div className="absolute inset-0">
                          <Image
                            src={product.image || ''}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            priority={product.id === 'buque-eterno-1'}
                          />
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-8">
                    <Link href={`/produto/${product.id}`} className="block group-hover:text-brand-accent transition-colors">
                      <h3 className="font-display text-2xl text-brand-dark mb-3">{product.name}</h3>
                    </Link>
                    <p className="text-brand-muted/80 mb-6 font-light">{product.description}</p>
                    
                    {product.details && (
                      <div className="mb-6 space-y-2">
                        {product.details.size && (
                          <p className="text-brand-accent/90 font-light">
                            Tamanho: {product.details.size}
                          </p>
                        )}
                        {product.details.quantity && (
                          <p className="text-brand-accent/90 font-light">
                            Quantidade: {product.details.quantity} {product.category === 'buque-eterno' ? 'Rosas' : 'Borboletas'}
                          </p>
                        )}
                        {product.details.additionalInfo && (
                          <p className="text-brand-muted/70 text-sm italic">
                            {product.details.additionalInfo}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-display text-brand-dark">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/produto/${product.id}`}
                          className="text-brand-accent hover:text-brand-dark transition-colors"
                        >
                          Ver Detalhes
                        </Link>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-brand-accent/90 text-brand-light px-6 py-3 rounded-full hover:bg-brand-accent transition-all flex items-center gap-2 group"
                        >
                          <FiShoppingCart className="text-xl transition-transform group-hover:scale-110" />
                          <span>Adicionar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="text-center text-brand-muted mt-12 font-light text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
            )}
          </div>
        </section>

        {/* Informações Adicionais */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-brand-light to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl text-brand-dark mb-8">Informações Importantes</h2>
              <div className="space-y-4 text-lg text-brand-muted/90 font-light">
                <p>
                  Todos os nossos produtos são feitos artesanalmente com muito carinho e dedicação.
                </p>
                <p>
                  Os prazos de entrega e disponibilidade podem variar de acordo com a demanda.
                </p>
                <p className="text-brand-accent">
                  Entre em contato para mais informações sobre personalização e encomendas especiais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 