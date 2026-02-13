import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'id' | 'zh' | 'ar' | 'es' | 'fr' | 'de' | 'ru' | 'ja' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (path: string) => {
    const keys = path.split('.');
    
    // Get current language object or fallback to English
    let current: any = translations[language] || translations['en'];
    
    // Traverse the object
    for (const key of keys) {
      if (current[key] === undefined) {
        // If key not found in current language, try English fallback
        let fallback: any = translations['en'];
        for (const k of keys) {
            fallback = fallback?.[k];
        }
        return fallback || path;
      }
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};