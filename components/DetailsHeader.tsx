"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface DetailsHeaderProps {
  title?: string;
}

export default function DetailsHeader({
  title = "Detalles",
}: DetailsHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between py-6.25">
        {/* Botón retroceder */}
        <button
          onClick={() => router.back()}
          className="p-2 -ml-2 rounded-xl hover:bg-gray-100 transition-colors"
          aria-label="Volver"
        >
          <Image
            src="/icons/chevron-left.svg"
            alt="Volver"
            width={24}
            height={24}
            className="w-6 h-6 text-gray-700"
          />
        </button>

        {/* Título */}
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>

        {/* Carrito */}
        <button
          className="p-2 -mr-2 rounded-xl hover:bg-gray-100 transition-colors relative"
          aria-label="Carrito"
        >
          <Image
            src="/icons/shopping-cart.svg"
            alt="Carrito"
            width={24}
            height={24}
            className="w-6 h-6 text-gray-700"
          />
        </button>
      </div>
    </header>
  );
}
