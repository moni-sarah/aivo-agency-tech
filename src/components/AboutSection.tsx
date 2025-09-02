import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle } from 'lucide-react';
import aboutAiAutomation from '@/assets/about-ai-automation.jpg';
import aboutBusinessTransformation from '@/assets/about-business-transformation.jpg';
import aboutSwissExpertise from '@/assets/about-swiss-expertise.jpg';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with animation */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-scale-in">
              <Sparkles className="w-4 h-4" />
              À propos de nous
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              {t('about.title')}
            </h2>
          </div>
          
          {/* Main story section with hero image */}
          <div className="mb-20 animate-fade-in-delay-1">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-card p-8 rounded-2xl border border-border shadow-elegant hover:shadow-glow transition-all duration-500 group">
                  <p className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {t('about.story')}
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                  <p className="text-muted-foreground leading-relaxed">{t('about.founding')}</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <img 
                  src={aboutAiAutomation} 
                  alt="AI Automation Concept" 
                  className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-elegant group-hover:shadow-glow transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Business transformation section */}
          <div className="mb-20 animate-fade-in-delay-2">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <img 
                  src={aboutBusinessTransformation} 
                  alt="Business Transformation" 
                  className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-elegant group-hover:shadow-glow transition-all duration-500"
                />
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <div className="bg-card p-6 rounded-xl border border-border hover:border-secondary/30 transition-all duration-300">
                  <p className="text-muted-foreground leading-relaxed">{t('about.challenges')}</p>
                </div>
                
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/20">
                  <p className="text-muted-foreground mb-6">{t('about.today')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Swiss expertise with image background */}
          <div className="mb-20 animate-fade-in-delay-3">
            <div className="relative rounded-3xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${aboutSwissExpertise})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/90" />
            </div>
          </div>
          
          {/* Solutions Section with enhanced design */}
          <div className="bg-gradient-to-br from-card via-card/95 to-primary/5 p-10 rounded-3xl border border-border shadow-elegant hover:shadow-glow transition-all duration-700 animate-scale-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('solutions.title')}
              </h3>
              
              <p className="text-xl mb-8 text-center text-muted-foreground">
                {t('solutions.intro')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{t('solutions.benefit1')}</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{t('solutions.benefit2')}</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{t('solutions.benefit3')}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
                {t('solutions.custom')}
              </p>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    {t('common.join_today')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};