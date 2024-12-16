import { Product } from '../types/Product';

export const products: Product[] = [
  // Buquê Eterno (Cetim)
  {
    id: 'buque-eterno-1',
    name: 'Rosa Única',
    description: 'Buquê Eterno em Cetim com Rosa Única',
    price: 12.00,
    image: '/images/1-rosa.jpeg',
    category: 'buque-eterno',
    details: {
      size: 'Único',
      quantity: 1,
      additionalInfo: 'Não incluso chocolates, ursinhos, borboletas 3D, cartões e polaróides'
    }
  },
  {
    id: 'buque-eterno-2',
    name: 'Buquê 3 Rosas',
    description: 'Buquê Eterno em Cetim com 3 Rosas',
    price: 30.00,
    image: '/images/3-rosas.jpeg',
    category: 'buque-eterno',
    details: {
      size: 'P',
      quantity: 3,
      additionalInfo: 'Não incluso chocolates, ursinhos, borboletas 3D, cartões e polaróides'
    }
  },
  {
    id: 'buque-eterno-3',
    name: 'Buquê 7 Rosas',
    description: 'Buquê Eterno em Cetim com 7 Rosas',
    price: 50.00,
    image: '/images/7-rosas.jpeg',
    category: 'buque-eterno',
    details: {
      size: 'M',
      quantity: 7,
      additionalInfo: 'Não incluso chocolates, ursinhos, borboletas 3D, cartões e polaróides'
    }
  },
  {
    id: 'buque-eterno-4',
    name: 'Buquê 12 Rosas',
    description: 'Buquê Eterno em Cetim com 12 Rosas',
    price: 80.00,
    image: '/images/12-rosas.jpeg',
    category: 'buque-eterno',
    details: {
      size: 'G',
      quantity: 12,
      additionalInfo: 'Não incluso chocolates, ursinhos, borboletas 3D, cartões e polaróides'
    }
  },
  {
    id: 'buque-eterno-5',
    name: 'Buquê 20 Rosas',
    description: 'Buquê Eterno em Cetim com 20 Rosas',
    price: 140.00,
    image: '/images/20-rosas.jpeg',
    category: 'buque-eterno',
    details: {
      size: 'GG',
      quantity: 20,
      additionalInfo: 'Não incluso chocolates, ursinhos, borboletas 3D, cartões e polaróides'
    }
  },

  // Variações Especiais
  {
    id: 'buque-eterno-especial-1',
    name: 'Buquê 3 Rosas com Perfume',
    description: 'Buquê Eterno em Cetim com 3 Rosas e Perfume',
    price: 45.00,
    image: '/images/3-rosas-perfuminho.jpeg',
    category: 'buque-eterno',
    details: {
      size: 'P',
      quantity: 3,
      additionalInfo: 'Inclui perfume. Não incluso chocolates, ursinhos, borboletas 3D, cartões e polaróides'
    }
  },
  {
    id: 'buque-eterno-especial-2',
    name: 'Buquê 3 Rosas com Ursinho',
    description: 'Buquê Eterno em Cetim com 3 Rosas e Ursinho',
    price: 50.00,
    image: '/images/3-rosas-ursinho.jpeg',
    category: 'buque-eterno',
    details: {
      size: 'P',
      quantity: 3,
      additionalInfo: 'Inclui ursinho. Não incluso chocolates, borboletas 3D, cartões e polaróides'
    }
  },

  // Buquê de Borboleta
  {
    id: 'buque-borboleta-1',
    name: 'Buquê 40 Borboletas',
    description: 'Buquê decorativo com 40 Borboletas',
    price: 60.00,
    category: 'buque-borboleta',
    details: {
      quantity: 40
    }
  },
  {
    id: 'buque-borboleta-2',
    name: 'Buquê 50 Borboletas',
    description: 'Buquê decorativo com 50 Borboletas',
    price: 70.00,
    category: 'buque-borboleta',
    details: {
      quantity: 50
    }
  },
  {
    id: 'buque-borboleta-3',
    name: 'Buquê 60 Borboletas',
    description: 'Buquê decorativo com 60 Borboletas',
    price: 80.00,
    category: 'buque-borboleta',
    details: {
      quantity: 60
    }
  },
  {
    id: 'buque-borboleta-4',
    name: 'Buquê 100 Borboletas',
    description: 'Buquê decorativo com 100 Borboletas',
    price: 130.00,
    category: 'buque-borboleta',
    details: {
      quantity: 100
    }
  }
]; 