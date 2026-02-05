'use client';

import { MessageCircle } from 'lucide-react';
import { Product } from '@/types';

interface WhatsAppButtonProps {
  product: Product;
}

export default function WhatsAppButton({ product }: WhatsAppButtonProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '51999999999';

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
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 safe-area-bottom">
      <button
        onClick={handleBuyClick}
        disabled={product.stock === 0}
        className={`w-full py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-3 transition-all ${
          product.stock > 0
            ? 'bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-200 active:scale-[0.98]'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        <MessageCircle className="w-5 h-5" />
        <span>{product.stock > 0 ? 'Comprar por WhatsApp' : 'Producto Agotado'}</span>
      </button>
    </div>
  );
}
