'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductFilter from '../../components/ProductFilter';
import Cart from '../../components/Cart';
import { products } from '../../data/products';
import { Product } from '../../types/Product';
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
      <Header />
      <main className="min-h-screen pt-24 bg-brand-light">
        {/* Botão do Carrinho Flutuante */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-brand-accent text-brand-light w-16 h-16 rounded-full shadow-lg hover:bg-brand-dark transition-colors flex items-center justify-center z-40"
        >
          <div className="relative">
            <FiShoppingCart className="text-2xl" />
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
        <section className="py-12 bg-brand-beige">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl text-brand-dark mb-4">Catálogo</h1>
            <p className="font-handwriting text-2xl text-brand-accent mb-8">
              Conheça nossos produtos
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 mx-auto"
            >
              <FaWhatsapp className="text-xl" />
              <span>Tire suas dúvidas</span>
            </button>
          </div>
        </section>

        {/* Filtro e Produtos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ProductFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="relative pt-[100%]">
                    <div className="absolute inset-0 bg-brand-beige/20">
                      {product.category === 'buque-borboleta' ? (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                          <p className="text-brand-accent font-handwriting text-xl mb-2">Seja o Primeiro!</p>
                          <p className="text-brand-muted text-sm">
                            Eternize ainda mais sua forma de carinho sendo o primeiro a pedir este modelo único de buquê
                          </p>
                        </div>
                      ) : (
                        <div className="w-full h-full relative">
                          <Image
                            src={product.image || ''}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            priority={product.id === 'buque-eterno-1'}
                            loading={product.id === 'buque-eterno-1' ? 'eager' : 'lazy'}
                            quality={75}
                            unoptimized={false}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-brand-dark mb-2">{product.name}</h3>
                    <p className="text-brand-muted mb-4">{product.description}</p>
                    
                    {product.details && (
                      <div className="mb-4 text-sm">
                        {product.details.size && (
                          <p className="text-brand-accent">
                            Tamanho: {product.details.size}
                          </p>
                        )}
                        {product.details.quantity && (
                          <p className="text-brand-accent">
                            Quantidade: {product.details.quantity} {product.category === 'buque-eterno' ? 'Rosas' : 'Borboletas'}
                          </p>
                        )}
                        {product.details.additionalInfo && (
                          <p className="text-brand-muted text-xs mt-2 italic">
                            {product.details.additionalInfo}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-brand-dark">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-brand-accent text-brand-light px-4 py-2 rounded-full hover:bg-brand-dark transition-colors flex items-center gap-2"
                      >
                        <FiShoppingCart />
                        <span>Adicionar</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="text-center text-brand-muted mt-8">
                Nenhum produto encontrado nesta categoria.
              </p>
            )}
          </div>
        </section>

        {/* Informações Adicionais */}
        <section className="py-16 bg-brand-beige">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl text-brand-dark mb-6">Informações Importantes</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-brand-muted mb-4">
                Todos os nossos produtos são feitos artesanalmente com muito carinho e dedicação.
              </p>
              <p className="text-brand-muted mb-4">
                Os prazos de entrega e disponibilidade podem variar de acordo com a demanda.
              </p>
              <p className="text-brand-accent">
                Entre em contato para mais informações sobre personalização e encomendas especiais.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 