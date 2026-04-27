import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations, LANGUAGES } from '../i18n/translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'alawi.lang';
const DEFAULT_LANG = 'DE';

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANG;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;
    return DEFAULT_LANG;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang.toLowerCase();
    }
  }, [lang]);

  const setLang = useCallback((nextLang) => {
    if (translations[nextLang]) setLangState(nextLang);
  }, []);

  const t = translations[lang] || translations[DEFAULT_LANG];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
