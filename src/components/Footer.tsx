import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            {t('contact.info.title')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t('contact.info.phone')}</h4>
                <p className="text-muted-foreground">+41 XX XXX XX XX</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t('contact.info.email')}</h4>
                <p className="text-muted-foreground">support@aiagency.com</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t('contact.info.location')}</h4>
                <p className="text-muted-foreground">Suisse</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 aivo agency. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};