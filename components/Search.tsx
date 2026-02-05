'use client';

import { useState } from 'react';
import { Search as SearchIcon, Mic } from 'lucide-react';

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
    <div className="px-4 py-4">
      {/* Saludo */}
      <p className="text-gray-500 text-sm">Hello, {userName}</p>
      <h2 className="text-xl font-semibold text-gray-900 mt-1 mb-4">
        What are you looking for today?
      </h2>

      {/* Barra de búsqueda */}
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3 gap-3">
          <SearchIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
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
            <Mic className="w-5 h-5" />
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
