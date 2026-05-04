'use client';

import { useState, useEffect } from 'react';
import { translations } from './translations';
import type { Language } from '@/types/language';

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'fr' || savedLang === 'tr') {
      setLanguage(savedLang);
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { t, language };
}
