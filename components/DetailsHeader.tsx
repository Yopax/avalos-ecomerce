'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft, ShoppingCart } from 'lucide-react';

interface DetailsHeaderProps {
  title?: string;
}

export default function DetailsHeader({ title = 'Details' }: DetailsHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Botón retroceder */}
        <button
          onClick={() => router.back()}
          className="p-2 -ml-2 rounded-xl hover:bg-gray-100 transition-colors"
          aria-label="Volver"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Título */}
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>

        {/* Carrito */}
        <button
          className="p-2 -mr-2 rounded-xl hover:bg-gray-100 transition-colors relative"
          aria-label="Carrito"
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-purple-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </header>
  );
}
