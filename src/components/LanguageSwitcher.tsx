'use client';

import { useState, useEffect } from 'react';
import type { Language } from '@/types/language';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'fr' || savedLang === 'tr') {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleSetLanguage('fr')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
          language === 'fr'
            ? 'bg-primary text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        aria-label="Français"
      >
        <span className="text-lg">🇫🇷</span>
        <span className="text-sm font-medium">FR</span>
      </button>
      <button
        onClick={() => handleSetLanguage('tr')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
          language === 'tr'
            ? 'bg-primary text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        aria-label="Türkçe"
      >
        <span className="text-lg">🇹🇷</span>
        <span className="text-sm font-medium">TR</span>
      </button>
    </div>
  );
}
