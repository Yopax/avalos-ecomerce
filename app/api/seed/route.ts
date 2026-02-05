import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

// Datos de ejemplo para poblar la base de datos
const seedProducts = [
  {
    name: 'Air Max 270',
    brand: 'Nike',
    price: 150,
    rating: 4.8,
    description: 'Las Nike Air Max 270 ofrecen la mayor bolsa de aire hasta la fecha para una comodidad durante todo el día. Diseñadas con un estilo lifestyle, combinan los mejores elementos de los modelos anteriores de Air Max para crear un calzado moderno y versátil.',
    image: 'https://placehold.co/400x400/f3f4f6/8b5cf6?text=Nike+Air+Max',
    category: 'Sneakers',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ['Negro', 'Blanco', 'Rojo'],
    stock: 15,
  },
  {
    name: 'Ultraboost 22',
    brand: 'Adidas',
    price: 180,
    rating: 4.9,
    description: 'Las Adidas Ultraboost 22 son las zapatillas de running más cómodas con tecnología BOOST que devuelve energía en cada paso. Perfectas para correr o para el uso diario con estilo.',
    image: 'https://placehold.co/400x400/f3f4f6/3b82f6?text=Adidas+Ultraboost',
    category: 'Sneakers',
    sizes: [39, 40, 41, 42, 43],
    colors: ['Negro', 'Blanco', 'Azul'],
    stock: 12,
  },
  {
    name: 'RS-X³ Puzzle',
    brand: 'Puma',
    price: 110,
    rating: 4.5,
    description: 'Las Puma RS-X³ Puzzle traen un diseño audaz con colores vibrantes. Sistema de amortiguación RS para máxima comodidad y estilo retro-futurista.',
    image: 'https://placehold.co/400x400/f3f4f6/ef4444?text=Puma+RS-X3',
    category: 'Sneakers',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ['Multicolor', 'Negro'],
    stock: 8,
  },
  {
    name: 'Classic Leather',
    brand: 'Reebok',
    price: 85,
    rating: 4.3,
    description: 'Las Reebok Classic Leather son un ícono del estilo urbano. Cuero suave y suela duradera para un look clásico que nunca pasa de moda.',
    image: 'https://placehold.co/400x400/f3f4f6/64748b?text=Reebok+Classic',
    category: 'Sneakers',
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ['Blanco', 'Negro', 'Gris'],
    stock: 20,
  },
  {
    name: '574 Core',
    brand: 'New Balance',
    price: 95,
    rating: 4.6,
    description: 'Las New Balance 574 son un clásico atemporal. Combinación perfecta de estilo retro y tecnología moderna ENCAP para mayor soporte y durabilidad.',
    image: 'https://placehold.co/400x400/f3f4f6/22c55e?text=NB+574',
    category: 'Sneakers',
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ['Gris', 'Azul', 'Verde'],
    stock: 18,
  },
  {
    name: 'Chuck Taylor All Star',
    brand: 'Converse',
    price: 65,
    rating: 4.7,
    description: 'Las Converse Chuck Taylor All Star son el calzado más icónico de todos los tiempos. Lienzo de alta calidad y suela de goma vulcanizada para un estilo atemporal.',
    image: 'https://placehold.co/400x400/f3f4f6/171717?text=Converse+Chuck',
    category: 'Sneakers',
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ['Negro', 'Blanco', 'Rojo', 'Azul'],
    stock: 25,
  },
  {
    name: 'Old Skool',
    brand: 'Vans',
    price: 70,
    rating: 4.5,
    description: 'Las Vans Old Skool son las zapatillas de skate más reconocidas del mundo. Lona y gamuza duraderas con la icónica raya lateral jazz stripe.',
    image: 'https://placehold.co/400x400/f3f4f6/dc2626?text=Vans+Old+Skool',
    category: 'Sneakers',
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ['Negro/Blanco', 'Todo Negro'],
    stock: 22,
  },
  {
    name: 'Air Jordan 1 Mid',
    brand: 'Nike',
    price: 125,
    rating: 4.9,
    description: 'Las Air Jordan 1 Mid son un ícono del basketball y la cultura sneaker. Cuero premium y colores clásicos que nunca pasan de moda.',
    image: 'https://placehold.co/400x400/f3f4f6/dc2626?text=Jordan+1+Mid',
    category: 'Sneakers',
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ['Rojo/Negro', 'Blanco/Negro', 'Chicago'],
    stock: 10,
  },
  {
    name: 'Forum Low',
    brand: 'Adidas',
    price: 100,
    rating: 4.4,
    description: 'Las Adidas Forum Low son un clásico del basketball de los 80s reinventado para hoy. Correa en el tobillo y diseño premium en cuero.',
    image: 'https://placehold.co/400x400/f3f4f6/3b82f6?text=Adidas+Forum',
    category: 'Sneakers',
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ['Blanco', 'Blanco/Azul'],
    stock: 14,
  },
  {
    name: 'Suede Classic',
    brand: 'Puma',
    price: 75,
    rating: 4.2,
    description: 'Las Puma Suede Classic son un ícono de la cultura hip-hop y streetwear desde 1968. Gamuza suave y suela de goma para un estilo vintage auténtico.',
    image: 'https://placehold.co/400x400/f3f4f6/1d4ed8?text=Puma+Suede',
    category: 'Sneakers',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ['Negro', 'Rojo', 'Azul'],
    stock: 16,
  },
];

export async function GET() {
  try {
    await dbConnect();

    // Verificar si ya hay productos
    const existingProducts = await Product.countDocuments();

    if (existingProducts > 0) {
      return NextResponse.json({
        message: 'La base de datos ya tiene productos',
        count: existingProducts,
      });
    }

    // Insertar productos de ejemplo
    const products = await Product.insertMany(seedProducts);

    return NextResponse.json({
      message: 'Base de datos poblada exitosamente',
      count: products.length,
      products,
    });
  } catch (error) {
    console.error('Error al poblar base de datos:', error);
    return NextResponse.json(
      { error: 'Error al poblar base de datos' },
      { status: 500 }
    );
  }
}
