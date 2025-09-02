import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';

export const CaseStudiesSection = () => {
  const { t } = useLanguage();
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);

  // Placeholder case studies - can be expanded with real data
  const caseStudies = [
    {
      id: 1,
      company: "E-commerce Suisse",
      industry: "Retail",
      challenge: "Gestion automatisée des commandes",
      solution: "Agent IA pour traitement des commandes",
      results: "+40% efficacité",
      details: {
        description: "Une plateforme e-commerce suisse cherchait à automatiser le traitement de ses commandes pour réduire les erreurs et améliorer l'efficacité.",
        implementation: "Nous avons développé un agent IA capable de traiter automatiquement les commandes, vérifier les stocks, et coordonner avec les systèmes de livraison.",
        timeline: "3 mois",
        technologies: ["IA conversationnelle", "Intégration API", "Automatisation des processus"],
        impact: "Réduction de 40% du temps de traitement des commandes et diminution de 65% des erreurs de traitement."
      }
    },
    {
      id: 2,
      company: "Cabinet Médical",
      industry: "Santé",
      challenge: "Prise de rendez-vous automatisée",
      solution: "Assistant IA pour la planification",
      results: "-60% temps admin",
      details: {
        description: "Un cabinet médical souhaitait automatiser la prise de rendez-vous pour libérer du temps pour les soins aux patients.",
        implementation: "Création d'un assistant IA capable de gérer les rendez-vous, rappels et confirmations de manière autonome.",
        timeline: "2 mois",
        technologies: ["Traitement du langage naturel", "Intégration calendrier", "Notifications automatiques"],
        impact: "Réduction de 60% du temps administratif et amélioration de 45% de la satisfaction des patients."
      }
    },
    {
      id: 3,
      company: "Startup Tech",
      industry: "Technologie",
      challenge: "Support client 24/7",
      solution: "Chatbot IA multilingue",
      results: "+80% satisfaction client",
      details: {
        description: "Une startup technologique avait besoin d'un support client disponible 24/7 sans augmenter ses coûts de personnel.",
        implementation: "Déploiement d'un chatbot IA multilingue capable de résoudre 85% des demandes client de niveau 1.",
        timeline: "4 mois",
        technologies: ["IA multilingue", "Base de connaissances", "Intégration CRM"],
        impact: "Augmentation de 80% de la satisfaction client et réduction de 70% du volume de tickets de support."
      }
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
                  <Button 
                    onClick={() => setSelectedStudy(study)}
                    variant="outline" 
                    size="sm"
                    className="w-full"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Voir les détails
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Demander une consultation
            </Button>
          </div>
        </div>

        {/* Case Study Details Modal */}
        <Dialog open={!!selectedStudy} onOpenChange={() => setSelectedStudy(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedStudy && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-foreground">
                    Étude de cas: {selectedStudy.company}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {selectedStudy.industry}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 border-green-200">
                      {selectedStudy.results}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Description du projet</h4>
                        <p className="text-muted-foreground">{selectedStudy.details.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Implémentation</h4>
                        <p className="text-muted-foreground">{selectedStudy.details.implementation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Durée du projet</h4>
                        <p className="text-muted-foreground">{selectedStudy.details.timeline}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Technologies utilisées</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedStudy.details.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-accent/20 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Impact et résultats</h4>
                    <p className="text-muted-foreground">{selectedStudy.details.impact}</p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};