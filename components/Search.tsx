'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SearchProps {
  onSearch: (query: string) => void;
  userName?: string;
}

export default function Search({ onSearch, userName = 'Usuario' }: SearchProps) {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition =
        window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'es-ES';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        onSearch(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Tu navegador no soporta búsqueda por voz');
    }
  };

  return (
    <div className="">
      {/* Saludo */}
      <p className="text-black font-medium text-base">Hello,</p>
      <h2 className="text-2xl font-bold text-black mt-1.25 mb-5.75 letra">
        What are you looking for today?
      </h2>

      {/* Barra de búsqueda */}
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center border border-[#bababa] rounded-[15px] px-[9.5px] py-[10.5px] gap-3">
          <Image 
            src="/icons/search.svg"
            alt="Search Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent font-light outline-none text-[#BABABA] placeholder-[#BABABA]"
          />
          <button
            type="button"
            onClick={handleVoiceSearch}
            className={`p-1 rounded-full transition-colors ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'text-gray-400 hover:text-purple-600'
            }`}
            aria-label="Búsqueda por voz"
          >
            <Image 
            src="/icons/mic.svg"
            alt="Mic Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          </button>
        </div>
      </form>
    </div>
  );
}

// Declaración de tipos para Web Speech API
declare global {
  interface Window {
    webkitSpeechRecognition: new () => SpeechRecognition;
    SpeechRecognition: new () => SpeechRecognition;
  }

  interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    onstart: () => void;
    onresult: (event: SpeechRecognitionEvent) => void;
    onend: () => void;
    onerror: () => void;
    start: () => void;
    stop: () => void;
  }

  interface SpeechRecognitionEvent {
    results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult;
  }

  interface SpeechRecognitionResult {
    [index: number]: SpeechRecognitionAlternative;
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }
}
