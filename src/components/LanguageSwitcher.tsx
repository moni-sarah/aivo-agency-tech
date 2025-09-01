import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'fr' as Language, label: 'FR', flag: '🇫🇷' },
  { code: 'en' as Language, label: 'EN', flag: '🇺🇸' },
  { code: 'de' as Language, label: 'DE', flag: '🇩🇪' },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={cn(
            'h-8 px-2 text-sm font-medium transition-smooth',
            language === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          )}
        >
          <span className="mr-1 text-xs">{lang.flag}</span>
          {lang.label}
        </Button>
      ))}
    </div>
  );
};