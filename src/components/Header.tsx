'use client';

import { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';
import type { Language } from '@/types/language';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-secondary leading-tight">
                Moustiquaire
              </h1>
              <p className="text-xs text-primary font-medium">Plissée</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#hero"
              className="text-secondary hover:text-primary transition-colors font-medium text-sm"
            >
              {t('header.home')}
            </Link>
            <Link
              href="#products"
              className="text-secondary hover:text-primary transition-colors font-medium text-sm"
            >
              {t('header.products')}
            </Link>
            <Link
              href="#about"
              className="text-secondary hover:text-primary transition-colors font-medium text-sm"
            >
              {t('header.about')}
            </Link>
            <Link
              href="#contact"
              className="text-secondary hover:text-primary transition-colors font-medium text-sm"
            >
              {t('header.contact')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4 mb-4">
              <Link
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors font-medium"
              >
                {t('header.home')}
              </Link>
              <Link
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors font-medium"
              >
                {t('header.products')}
              </Link>
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors font-medium"
              >
                {t('header.about')}
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-secondary hover:text-primary transition-colors font-medium"
              >
                {t('header.contact')}
              </Link>
            </nav>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
