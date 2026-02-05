'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Product } from '@/types';

interface SneakersCardDetailProps {
  product: Product;
}

export default function SneakersCardDetail({ product }: SneakersCardDetailProps) {
  return (
    <div className="px-4">
      {/* Imagen del producto */}
      <div className="relative h-64 bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Información del producto */}
      <div className="mt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-purple-600 font-medium uppercase tracking-wide">
              {product.brand}
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {product.name}
            </h2>
          </div>
          <p className="text-2xl font-bold text-purple-600">
            ${product.price}
          </p>
        </div>

        {/* Estrellas de rating */}
        <div className="flex items-center gap-1 mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                star <= Math.round(product.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({product.rating})
          </span>
        </div>
      </div>
    </div>
  );
}
