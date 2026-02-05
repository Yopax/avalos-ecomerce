'use client';

import { BRANDS, Brand } from '@/types';

interface SneakersCategoryProps {
  selectedBrand: string;
  onSelectBrand: (brandId: string) => void;
}

export default function SneakersCategory({
  selectedBrand,
  onSelectBrand,
}: SneakersCategoryProps) {
  return (
    <div className="sticky top-15 z-40 bg-white py-3 border-b">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 min-w-max">
          {BRANDS.map((brand: Brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                selectedBrand === brand.id
                  ? 'bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
