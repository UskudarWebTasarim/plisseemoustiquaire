export type Language = 'fr' | 'tr';

export interface Translations {
  [key: string]: string | Translations;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
