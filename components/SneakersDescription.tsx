'use client';

import { useState } from 'react';
import { Product } from '@/types';

interface SneakersDescriptionProps {
  product: Product;
}

export default function SneakersDescription({ product }: SneakersDescriptionProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="px-4 mt-6">
      {/* Descripción */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Tallas */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-xl font-medium text-sm transition-all ${
                selectedSize === size
                  ? 'bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colores */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color</h3>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                selectedColor === color
                  ? 'bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Disponibilidad */}
      <div className="mt-6 flex items-center gap-2">
        <div
          className={`w-2.5 h-2.5 rounded-full ${
            product.stock > 0 ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
        <span className="text-sm text-gray-600">
          {product.stock > 0
            ? `${product.stock} unidades disponibles`
            : 'Agotado'}
        </span>
      </div>
    </div>
  );
}
