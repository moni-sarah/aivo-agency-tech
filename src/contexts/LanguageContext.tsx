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
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions d\'IA sur mesure pour votre entreprise',
    'services.automation.title': 'Automatisation Autonome',
    'services.automation.description': 'Aucune saisie requise. Ces automatisations fonctionnent de manière autonome, quotidiennement, hebdomadairement ou selon des déclencheurs. De l\'analyse des données à la génération de rapports, en passant par l\'envoi de factures ou l\'intégration de clients.',
    'services.apps.title': 'Applications d\'IA Personnalisées',
    'services.apps.description': 'Nous créons des applications d\'IA conçues pour accomplir des tâches précises. Que ce soit pour gérer votre contenu, répondre aux commentaires, automatiser vos conversations ou prendre en charge des actions ciblées, votre application d\'IA travaille pour vous. Elle rédige, planifie, engage vos prospects et optimise votre présence en ligne.',
    'services.integration.title': 'Intégration IA Avancée',
    'services.integration.description': 'Configuration d\'intégration IA, framework d\'intégration API et optimisation de modèles d\'IA. Nous connectons vos systèmes existants avec des solutions d\'IA de pointe pour maximiser votre efficacité opérationnelle.',
    
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
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Custom AI solutions for your business',
    'services.automation.title': 'Autonomous Automation',
    'services.automation.description': 'No input required. These automations work autonomously, daily, weekly or based on triggers. From data analysis to report generation, including invoice sending or client integration.',
    'services.apps.title': 'Custom AI Applications',
    'services.apps.description': 'We create AI applications designed to accomplish specific tasks. Whether it\'s managing your content, responding to comments, automating your conversations, or handling targeted actions, your AI application works for you. It writes, plans, engages your prospects and optimizes your online presence.',
    'services.integration.title': 'Advanced AI Integration',
    'services.integration.description': 'AI Integration Setup, API Integration Framework and AI model fine-tuning. We connect your existing systems with cutting-edge AI solutions to maximize your operational efficiency.',
    
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
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Maßgeschneiderte KI-Lösungen für Ihr Unternehmen',
    'services.automation.title': 'Autonome Automatisierung',
    'services.automation.description': 'Keine Eingabe erforderlich. Diese Automatisierungen funktionieren autonom, täglich, wöchentlich oder basierend auf Auslösern. Von der Datenanalyse bis zur Berichtserstellung, einschließlich Rechnungsversand oder Kundenintegration.',
    'services.apps.title': 'Benutzerdefinierte KI-Anwendungen',
    'services.apps.description': 'Wir erstellen KI-Anwendungen, die darauf ausgelegt sind, spezifische Aufgaben zu erfüllen. Ob es darum geht, Ihre Inhalte zu verwalten, auf Kommentare zu antworten, Ihre Gespräche zu automatisieren oder gezielte Aktionen zu übernehmen, Ihre KI-Anwendung arbeitet für Sie.',
    'services.integration.title': 'Erweiterte KI-Integration',
    'services.integration.description': 'KI-Integrations-Setup, API-Integrations-Framework und KI-Modell-Feinabstimmung. Wir verbinden Ihre bestehenden Systeme mit modernsten KI-Lösungen, um Ihre operative Effizienz zu maximieren.',
    
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