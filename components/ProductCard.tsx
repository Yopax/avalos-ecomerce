'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/sneakers/${product._id}`} className="block">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        {/* Imagen del producto */}
        <div className="relative h-36 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Descripción del producto */}
        <div className="p-3">
          <p className="text-xs text-purple-600 font-medium uppercase tracking-wide">
            {product.brand}
          </p>
          <h3 className="text-sm font-semibold text-gray-900 mt-1 truncate">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mt-2">
            <p className="text-base font-bold text-gray-900">
              ${product.price}
            </p>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-500">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
