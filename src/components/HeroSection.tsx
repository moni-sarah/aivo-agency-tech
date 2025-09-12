import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-ai-tech.jpg';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  const automationTexts = [
    "Automate Your Contention",
    "Automate your business", 
    "Automate your video",
    "Automate your Support",
    "Automate your system",
    "Automate your sales",
    "Automate your content",
    "Automate your socials"
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % automationTexts.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [automationTexts.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium transition-all duration-300 ease-in-out">
              {automationTexts[currentTextIndex]}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero text-white mb-6">
            {t('hero.title')}
            <br />
            <span className="text-gradient bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-body-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-glow font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('https://calendly.com/aivo-ai-agency/30min?back=1&month=2025-09', '_blank')}
            >
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/70">Réduction des coûts</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">Support dédié</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};