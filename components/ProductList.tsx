'use client';

import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  loading?: boolean;
}

export default function ProductList({ products, loading }: ProductListProps) {
  if (loading) {
    return (
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-3xl h-52 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <p className="text-gray-500">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className="py-5 pb-12">
      <div className="grid grid-cols-2 gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
