import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transformez votre entreprise',
    'hero.subtitle': 'avec l\'automatisation de l\'IA',
    'hero.description': 'Systèmes d\'IA personnalisés pour les entreprises prêtes à réduire leurs coûts, à rationaliser leurs opérations et à évoluer rapidement.',
    'hero.cta.primary': 'Démarrer maintenant',
    'hero.cta.secondary': 'En savoir plus',
    
    // Company
    'company.name': 'BossoTech',
    
    // Common
    'common.get_started': 'Commencer',
    'common.learn_more': 'En savoir plus',
    'common.contact_us': 'Nous contacter',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transform your business',
    'hero.subtitle': 'with AI automation',
    'hero.description': 'Custom AI systems for businesses ready to reduce costs, streamline operations, and scale rapidly.',
    'hero.cta.primary': 'Get Started Now',
    'hero.cta.secondary': 'Learn More',
    
    // Company
    'company.name': 'BossoTech',
    
    // Common
    'common.get_started': 'Get Started',
    'common.learn_more': 'Learn More',
    'common.contact_us': 'Contact Us',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Transformieren Sie Ihr Unternehmen',
    'hero.subtitle': 'mit KI-Automatisierung',
    'hero.description': 'Maßgeschneiderte KI-Systeme für Unternehmen, die bereit sind, Kosten zu senken, Abläufe zu optimieren und schnell zu wachsen.',
    'hero.cta.primary': 'Jetzt starten',
    'hero.cta.secondary': 'Mehr erfahren',
    
    // Company
    'company.name': 'BossoTech',
    
    // Common
    'common.get_started': 'Loslegen',
    'common.learn_more': 'Mehr erfahren',
    'common.contact_us': 'Kontakt aufnehmen',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};