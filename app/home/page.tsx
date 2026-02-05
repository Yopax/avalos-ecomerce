'use client';

import { useState, useEffect, useCallback } from 'react';
import { Header, Footer, Search, SneakersCategory, ProductList } from '@/components';
import { Product } from '@/types';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      if (selectedBrand !== 'all') {
        params.append('brand', selectedBrand);
      }

      if (searchQuery) {
        params.append('search', searchQuery);
      }

      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedBrand, searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSelectBrand = (brandId: string) => {
    setSelectedBrand(brandId);
    setSearchQuery(''); // Limpiar búsqueda al cambiar de categoría
  };

  return (
    <div className="min-h-screen  mx-6.25">
      <Header />
      <Search onSearch={handleSearch} userName="Grace" />
      <SneakersCategory
        selectedBrand={selectedBrand}
        onSelectBrand={handleSelectBrand}
      />
      <ProductList products={products} loading={loading} />
      <Footer />
    </div>
  );
}
