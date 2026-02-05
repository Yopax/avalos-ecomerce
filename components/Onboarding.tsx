'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
  const [fadeOut, setFadeOut] = useState(false);  // Added setFadeOut to the destructuring
  const [isVisible, setIsVisible] = useState(false);

  // Fade in al montar el componente
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Pequeño delay para asegurar que el componente esté montado

    return () => clearTimeout(timer);
  }, []);

    const router = useRouter();
   useEffect(() => {
     const fadeTimer = setTimeout(() => {
       setFadeOut(true);
     }, 4000);
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
      className={`fixed inset-0  z-100 transition-opacity duration-3000 ${
        fadeOut ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-8'
      }`}
    >
      {/* Imagen de fondo con zoom */}
      <div
        className="absolute inset-0 bg-cover "
        style={{
          backgroundImage: "url('/images/bg-onboarding.png')",
        }}
      />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">

        {/* Nombre de la empresa */}
        <h1 className="text-[70px] letra  items-center  flex md:text-6xl font-bold text-white tracking-[0.64px] h-14 animate-fade-in">
          Avalos
        </h1>

        {/* Slogan */}
        <p className="text-white leading-5 shadow-2xl text-sm md:text-xl font-semibold tracking-[0.8px] animate-fade-in-delay">
          Special footwear for everyday use
        </p>
      </div>
    </div>
  );
}
