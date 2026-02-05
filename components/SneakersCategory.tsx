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
    <div className="pt-12.5">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max">
          {BRANDS.map((brand: Brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand.id)}
              className={`px-3.75 py-[2.5px] rounded-[30px] transition-all whitespace-nowrap ${
                selectedBrand === brand.id
                  ? 'bg-[#FFDF20] leading-5 tracking-[0.2px] text-sm text-white font-normal'
                  : 'bg-white leading-5 tracking-[0.2px] text-sm text-[#7F7F7F] font-normal'
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
