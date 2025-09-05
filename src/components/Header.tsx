import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-h3 font-bold text-gradient">
                  {t('company.name')}
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  {t('company.subtitle')}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#services" 
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.services')}
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button 
              variant="default"
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant"
            >
              {t('common.contact_us')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};