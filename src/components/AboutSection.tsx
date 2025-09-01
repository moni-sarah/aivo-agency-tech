import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p className="text-xl font-medium text-foreground">
              {t('about.story')}
            </p>
            
            <p>{t('about.founding')}</p>
            
            <p>{t('about.challenges')}</p>
            
            <p>{t('about.today')}</p>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-lg font-medium text-foreground">
                {t('about.promise')}
              </p>
            </div>
          </div>
          
          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {t('vision.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('vision.text')}
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                {t('mission.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('mission.text')}
              </p>
            </div>
          </div>
          
          {/* Solutions Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              {t('solutions.title')}
            </h3>
            
            <p className="text-lg mb-6 text-center text-muted-foreground">
              {t('solutions.intro')}
            </p>
            
            <div className="space-y-3 mb-6">
              <p className="text-lg text-foreground flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></span>
                {t('solutions.benefit1')}
              </p>
              <p className="text-lg text-foreground flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-4 flex-shrink-0"></span>
                {t('solutions.benefit2')}
              </p>
              <p className="text-lg text-foreground flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0"></span>
                {t('solutions.benefit3')}
              </p>
            </div>
            
            <p className="text-muted-foreground mb-8 text-center">
              {t('solutions.custom')}
            </p>
            
            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                {t('common.join_today')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};