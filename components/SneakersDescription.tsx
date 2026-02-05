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
    <div className="mt-4">
      {/* Descripción */}
      <div>
        <h3 className="text-base font-semibold text-black mb-2">Description</h3>
        <p className="text-black text-xs font-medium leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Tallas */}
      <div className="mt-4">
        <h3 className="text-base font-semibold text-black mb-2">Select Size</h3>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 rounded-xl font-medium text-sm transition-all ${
                selectedSize === size
                  ? 'bg-[#ffdf20] text-white shadow'
                  : 'border border-gray-200 text-black hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colores */}
      <div className="mt-4">
        <h3 className="text-base font-semibold text-black mb-2">Select Color</h3>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                selectedColor === color
                  ? 'bg-[#ffdf20] text-white shadow'
                  : 'border border-gray-200 text-black hover:bg-gray-200'
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
          className={`w-2.5 animate-pulse h-2.5 rounded-full ${
            product.stock > 0 ? 'bg-[#ffdf20]' : 'bg-red-500'
          }`}
        />
        <span className="text-xs text-black">
          {product.stock > 0
            ? `${product.stock} unidades disponibles`
            : 'Agotado'}
        </span>
      </div>
    </div>
  );
}
