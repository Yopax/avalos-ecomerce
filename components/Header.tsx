'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between py-6.25">
        {/* Logo */}
        <Link href="/home" className="flex w-8.5 h-8.5 rounded-full border text-center items-center gap-2">
          <p className='w-full font-bold'>A</p>
        </Link>

        {/* Nombre de la empresa */}
        <Link href="/home">
          <h1 className="text-xl letra font-bold text-black">
            Avalos
          </h1>
        </Link>

        {/* Menú hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menú"
        >
          <Image
            src="/icons/menu-variant.svg"
            alt="Menú"
            width={24}
            height={24}
            className={`w-6 h-6 text-gray-700 ${isMenuOpen ? 'rotate-90' : ''} transition-transform duration-200`}
          />
        </button>
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <ul className="py-2">
            <li>
              <Link
                href="/home"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
