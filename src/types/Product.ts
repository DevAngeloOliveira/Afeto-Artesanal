export type ProductCategory = 'buque-eterno' | 'buque-borboleta';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: ProductCategory;
  details?: {
    size?: string;
    quantity?: number;
    additionalInfo?: string;
  };
} 