"use client";
import { Product } from "@/types";
import Image from "next/image";

interface WhatsAppButtonProps {
  product: Product;
}

export default function WhatsAppButton({ product }: WhatsAppButtonProps) {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";

  const handleBuyClick = () => {
    // Template del mensaje para WhatsApp
    const message = `¡Hola! 👋

Me interesa el siguiente producto:

🏷️ *${product.name}*
👟 Marca: ${product.brand}
💰 Precio: $${product.price}

¿Podrían darme más información sobre disponibilidad y formas de pago?

¡Gracias!`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // URL de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-transparent flex items-center justify-center p-4 mb-5 safe-area-bottom">
      <button
        onClick={handleBuyClick}
        disabled={product.stock === 0}
        className={`w-[94%] py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-3 transition-all ${
          product.stock > 0 ? "bg-[#ffdf20]" : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        <Image
          src="/icons/whasat-icon.png"
          alt="Carrito"
          width={24}
          height={24}
          className="w-6 h-6 text-gray-700"
        />
        <span>
          {product.stock > 0 ? "Comprar por WhatsApp" : "Producto Agotado"}
        </span>
      </button>
    </div>
  );
}
