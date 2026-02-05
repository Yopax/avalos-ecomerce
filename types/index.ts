// Tipos compartidos para la aplicación

export interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  category: string;
  sizes: number[];
  colors: string[];
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
}

export const BRANDS: Brand[] = [
  { id: 'all', name: 'All' },
  { id: 'nike', name: 'Nike' },
  { id: 'adidas', name: 'Adidas' },
  { id: 'puma', name: 'Puma' },
  { id: 'reebok', name: 'Reebok' },
  { id: 'new-balance', name: 'New Balance' },
  { id: 'converse', name: 'Converse' },
  { id: 'vans', name: 'Vans' },
];
