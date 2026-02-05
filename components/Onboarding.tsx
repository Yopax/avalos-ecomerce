'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Después de 4 segundos, iniciar el fadeout
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Después de 5 segundos, navegar al Home
    const navigateTimer = setTimeout(() => {
      router.push('/home');
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [router]);

  return (
    <div
      className={`fixed inset-0 z-100 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/onboarding-bg.svg')",
        }}
      />

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        {/* Logo animado */}
        <div className="mb-6 animate-bounce-slow">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/20">
            <span className="text-4xl">👟</span>
          </div>
        </div>

        {/* Nombre de la empresa */}
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider mb-4 animate-fade-in">
          AVALOS
        </h1>

        {/* Slogan */}
        <p className="text-white/80 text-lg md:text-xl font-light tracking-wide animate-fade-in-delay">
          Special footwear for everyday use
        </p>

        {/* Indicador de carga */}
        <div className="mt-12 flex gap-2">
          <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
          <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-100" />
          <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
}
