"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/sneakers/${product._id}`} className="block">
      <div className="bg-white rounded-2xl overflow-hidden">
        {/* Imagen del producto */}
        <div className="relative h-37.5  w-full bg-linear-to-br from-gray-50 to-gray-100 rounded-tl-2xl rounded-tr-2xl flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain"
            
          />
        </div>

        {/* Descripción del producto */}
        <div className="py-3 px-3 border border-gray-200 rounded-bl-2xl rounded-br-2xl">
          <h3 className=" text-black truncate">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mt-2">
            <p className="text-xs font-bold text-black">
              ${product.price}
            </p>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#ffc120] text-yellow-400" />
              <span className="text-xs text-black">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
