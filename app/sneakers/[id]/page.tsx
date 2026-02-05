'use client';

import { useState, useEffect, use } from 'react';
import { DetailsHeader, SneakersCardDetail, SneakersDescription, WhatsAppButton } from '@/components';
import { Product } from '@/types';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function SneakersDetailsPage({ params }: PageProps) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <DetailsHeader />
        <div className="px-4 py-8">
          <div className="h-64 bg-gray-100 rounded-3xl animate-pulse" />
          <div className="mt-6 space-y-4">
            <div className="h-6 bg-gray-100 rounded-lg w-1/3 animate-pulse" />
            <div className="h-8 bg-gray-100 rounded-lg w-2/3 animate-pulse" />
            <div className="h-4 bg-gray-100 rounded-lg w-1/4 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white">
        <DetailsHeader />
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <p className="text-gray-500 text-lg">{error || 'Producto no encontrado'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      <DetailsHeader />
      <SneakersCardDetail product={product} />
      <SneakersDescription product={product} />
      <WhatsAppButton product={product} />
    </div>
  );
}
