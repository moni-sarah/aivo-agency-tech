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
    
    // About Section
    'about.title': 'À propos de nous',
    'about.story': 'Chez BossoTech, tout a commencé par une conviction forte : l\'intelligence artificielle peut libérer les professionnels des tâches répétitives pour qu\'ils se concentrent sur ce qui crée de la valeur — la relation client, la stratégie et le développement.',
    'about.founding': 'Fondée par une passionnée de technologie et enthousiaste en intelligence artificielle, BossoTech s\'est donné pour mission de rendre l\'automatisation accessible, efficace et réellement utile, quel que soit le secteur d\'activité.',
    'about.challenges': 'Face aux défis du quotidien – surcharge de travail, gestion des demandes, manque de temps – nous avons créé des agents IA sur mesure capables de répondre automatiquement aux clients, de gérer les rendez-vous, de filtrer les appels ou d\'assister dans des processus métiers variés.',
    'about.today': 'Aujourd\'hui, BossoTech accompagne des entreprises suisses de différentes tailles et secteurs, avec des solutions fiables, évolutives et faciles à intégrer.',
    'about.promise': '🎯 Notre promesse : mettre la puissance de l\'IA au service de vos objectifs concrets, avec un accompagnement humain et local à chaque étape',
    
    // Vision & Mission
    'vision.title': 'Notre Vision',
    'vision.text': 'Nous envisageons un avenir où l\'IA s\'intègre de manière transparente aux processus commerciaux, créant une valeur durable et un avantage concurrentiel',
    'mission.title': 'Notre Mission',
    'mission.text': 'Notre mission est de donner aux entreprises les moyens d\'agir grâce à des technologies d\'IA innovantes qui stimulent la croissance et l\'efficacité',
    
    // Solutions Section
    'solutions.title': 'Nos Solutions d\'Automatisation',
    'solutions.intro': 'Nous créons des solutions d\'automatisation intelligentes basées sur l\'IA pour aider les entreprises à :',
    'solutions.benefit1': 'améliorer leur service client,',
    'solutions.benefit2': 'réduire les tâches manuelles répétitives,',
    'solutions.benefit3': 'gagner en efficacité opérationnelle.',
    'solutions.custom': 'Nos agents IA sont personnalisés pour s\'adapter aux besoins spécifiques de chaque client, quel que soit leur secteur d\'activité',
    
    // Case Studies
    'case_studies.title': 'Études de Cas',
    'case_studies.subtitle': 'Découvrez comment nos solutions transforment les entreprises',
    
    // Contact Section
    'contact.badge': 'Contactez-nous',
    'contact.title': 'Prêt à transformer votre entreprise ?',
    'contact.subtitle': 'Parlons de vos défis et découvrons comment l\'IA peut révolutionner votre activité',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.phone': 'Téléphone',
    'contact.form.phone.placeholder': '+41 XX XXX XX XX',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre.email@exemple.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Décrivez votre projet ou vos besoins en automatisation IA...',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.info.title': 'Informations de contact',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.location': 'Localisation',
    'contact.cta.title': 'Consultation gratuite',
    'contact.cta.description': 'Profitez d\'une consultation gratuite de 30 minutes pour découvrir comment l\'IA peut transformer votre business.',
    'contact.cta.button': 'Réserver maintenant',
    
    // Common
    'common.get_started': 'Commencer',
    'common.learn_more': 'En savoir plus',
    'common.contact_us': 'Nous contacter',
    'common.join_today': 'Rejoignez-nous aujourd\'hui',
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
    
    // About Section
    'about.title': 'About Us',
    'about.story': 'At BossoTech, it all started with a strong conviction: artificial intelligence can free professionals from repetitive tasks so they can focus on what creates value — customer relationships, strategy and development.',
    'about.founding': 'Founded by a technology enthusiast passionate about artificial intelligence, BossoTech has made it its mission to make automation accessible, efficient and truly useful, regardless of the sector of activity.',
    'about.challenges': 'Faced with daily challenges – work overload, request management, lack of time – we have created custom AI agents capable of automatically responding to customers, managing appointments, filtering calls or assisting in various business processes.',
    'about.today': 'Today, BossoTech supports Swiss companies of different sizes and sectors, with reliable, scalable and easy-to-integrate solutions.',
    'about.promise': '🎯 Our promise: put the power of AI at the service of your concrete objectives, with human and local support at every step',
    
    // Vision & Mission
    'vision.title': 'Our Vision',
    'vision.text': 'We envision a future where AI seamlessly integrates into business processes, creating lasting value and competitive advantage',
    'mission.title': 'Our Mission',
    'mission.text': 'Our mission is to empower businesses through innovative AI technologies that drive growth and efficiency',
    
    // Solutions Section
    'solutions.title': 'Our Automation Solutions',
    'solutions.intro': 'We create intelligent AI-based automation solutions to help businesses:',
    'solutions.benefit1': 'improve their customer service,',
    'solutions.benefit2': 'reduce repetitive manual tasks,',
    'solutions.benefit3': 'gain operational efficiency.',
    'solutions.custom': 'Our AI agents are customized to adapt to the specific needs of each client, regardless of their sector of activity',
    
    // Case Studies
    'case_studies.title': 'Case Studies',
    'case_studies.subtitle': 'Discover how our solutions transform businesses',
    
    // Contact Section
    'contact.badge': 'Contact Us',
    'contact.title': 'Ready to transform your business?',
    'contact.subtitle': 'Let\'s talk about your challenges and discover how AI can revolutionize your activity',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+41 XX XXX XX XX',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Describe your project or AI automation needs...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.cta.title': 'Free Consultation',
    'contact.cta.description': 'Take advantage of a free 30-minute consultation to discover how AI can transform your business.',
    'contact.cta.button': 'Book Now',
    
    // Common
    'common.get_started': 'Get Started',
    'common.learn_more': 'Learn More',
    'common.contact_us': 'Contact Us',
    'common.join_today': 'Join Us Today',
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
    
    // About Section
    'about.title': 'Über uns',
    'about.story': 'Bei BossoTech begann alles mit einer starken Überzeugung: Künstliche Intelligenz kann Fachkräfte von repetitiven Aufgaben befreien, damit sie sich auf wertschöpfende Tätigkeiten konzentrieren können — Kundenbeziehungen, Strategie und Entwicklung.',
    'about.founding': 'Gegründet von einer Technologie-Enthusiastin und KI-Begeisterten hat sich BossoTech zur Mission gemacht, Automatisierung zugänglich, effizient und wirklich nützlich zu machen, unabhängig vom Tätigkeitsbereich.',
    'about.challenges': 'Angesichts der täglichen Herausforderungen – Arbeitsüberlastung, Anfragenmanagement, Zeitmangel – haben wir maßgeschneiderte KI-Agenten entwickelt, die automatisch auf Kunden antworten, Termine verwalten, Anrufe filtern oder bei verschiedenen Geschäftsprozessen unterstützen können.',
    'about.today': 'Heute unterstützt BossoTech Schweizer Unternehmen verschiedener Größen und Branchen mit zuverlässigen, skalierbaren und einfach zu integrierenden Lösungen.',
    'about.promise': '🎯 Unser Versprechen: Die Macht der KI in den Dienst Ihrer konkreten Ziele zu stellen, mit menschlicher und lokaler Betreuung bei jedem Schritt',
    
    // Vision & Mission
    'vision.title': 'Unsere Vision',
    'vision.text': 'Wir stellen uns eine Zukunft vor, in der KI nahtlos in Geschäftsprozesse integriert wird und nachhaltigen Wert sowie Wettbewerbsvorteile schafft',
    'mission.title': 'Unsere Mission',
    'mission.text': 'Unsere Mission ist es, Unternehmen durch innovative KI-Technologien zu stärken, die Wachstum und Effizienz fördern',
    
    // Solutions Section
    'solutions.title': 'Unsere Automatisierungslösungen',
    'solutions.intro': 'Wir entwickeln intelligente KI-basierte Automatisierungslösungen, um Unternehmen dabei zu helfen:',
    'solutions.benefit1': 'ihren Kundenservice zu verbessern,',
    'solutions.benefit2': 'repetitive manuelle Aufgaben zu reduzieren,',
    'solutions.benefit3': 'operative Effizienz zu gewinnen.',
    'solutions.custom': 'Unsere KI-Agenten sind individuell angepasst, um sich an die spezifischen Bedürfnisse jedes Kunden anzupassen, unabhängig von ihrem Tätigkeitsbereich',
    
    // Case Studies
    'case_studies.title': 'Fallstudien',
    'case_studies.subtitle': 'Entdecken Sie, wie unsere Lösungen Unternehmen transformieren',
    
    // Contact Section
    'contact.badge': 'Kontakt',
    'contact.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'contact.subtitle': 'Lassen Sie uns über Ihre Herausforderungen sprechen und entdecken, wie KI Ihre Aktivität revolutionieren kann',
    'contact.form.title': 'Senden Sie uns eine Nachricht',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.name.placeholder': 'Ihr Name',
    'contact.form.phone': 'Telefon',
    'contact.form.phone.placeholder': '+41 XX XXX XX XX',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'ihre.email@beispiel.com',
    'contact.form.message': 'Nachricht',
    'contact.form.message.placeholder': 'Beschreiben Sie Ihr Projekt oder Ihre KI-Automatisierungsbedürfnisse...',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.info.title': 'Kontaktinformationen',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-Mail',
    'contact.info.location': 'Standort',
    'contact.cta.title': 'Kostenlose Beratung',
    'contact.cta.description': 'Nutzen Sie eine kostenlose 30-minütige Beratung, um zu entdecken, wie KI Ihr Unternehmen transformieren kann.',
    'contact.cta.button': 'Jetzt buchen',
    
    // Common
    'common.get_started': 'Loslegen',
    'common.learn_more': 'Mehr erfahren',
    'common.contact_us': 'Kontakt aufnehmen',
    'common.join_today': 'Heute beitreten',
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