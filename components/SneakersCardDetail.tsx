"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types";

interface SneakersCardDetailProps {
  product: Product;
}

export default function SneakersCardDetail({
  product,
}: SneakersCardDetailProps) {
  return (
    <div className="">
      {/* Imagen del producto */}
      <div className="relative h-64 bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Información del producto */}
      <div className="mt-2">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-black">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Estrellas de rating */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-[#ffdf20]">${product.price}</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= Math.round(product.rating)
                    ? "fill-[#ffc120] text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
