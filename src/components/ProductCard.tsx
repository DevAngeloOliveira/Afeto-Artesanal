import Image from 'next/image';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        {product.category === 'buque-borboleta' ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-brand-beige/20">
            <p className="text-brand-accent font-handwriting text-xl mb-2">Seja o Primeiro!</p>
            <p className="text-brand-muted text-sm">
              Eternize ainda mais sua forma de carinho sendo o primeiro a pedir este modelo único de buquê
            </p>
          </div>
        ) : (
          <Image
            src={product.image || ''}
            alt={product.name}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">R$ {product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-brand-accent text-white px-4 py-2 rounded-full hover:bg-brand-dark transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
} 