import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const CaseStudiesSection = () => {
  const { t } = useLanguage();

  // Placeholder case studies - can be expanded with real data
  const caseStudies = [
    {
      id: 1,
      company: "E-commerce Suisse",
      industry: "Retail",
      challenge: "Gestion automatisée des commandes",
      solution: "Agent IA pour traitement des commandes",
      results: "+40% efficacité"
    },
    {
      id: 2,
      company: "Cabinet Médical",
      industry: "Santé",
      challenge: "Prise de rendez-vous automatisée",
      solution: "Assistant IA pour la planification",
      results: "-60% temps admin"
    },
    {
      id: 3,
      company: "Startup Tech",
      industry: "Technologie",
      challenge: "Support client 24/7",
      solution: "Chatbot IA multilingue",
      results: "+80% satisfaction client"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('case_studies.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('case_studies.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <Card key={study.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {study.industry}
                  </Badge>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {study.company.charAt(0)}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {study.company}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                    Défi
                  </h4>
                  <p className="text-foreground">
                    {study.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                    Solution
                  </h4>
                  <p className="text-foreground">
                    {study.solution}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Résultats</span>
                    <Badge className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 border-green-200">
                      {study.results}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Découvrez comment nous pouvons transformer votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Voir plus d'études de cas
            </button>
            <button className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-accent transition-colors">
              Demander une consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};