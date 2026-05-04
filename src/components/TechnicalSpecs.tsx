'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function TechnicalSpecs() {
  const { t } = useTranslation();

  const specs = [
    {
      key: 'spec1',
      title: 'Épaisseur de la Toile',
      value: '0.35mm',
      description: 'Toile polyester haute densité renforcée',
    },
    {
      key: 'spec2',
      title: 'Taille de la Maille',
      value: '18 x 16 mesh',
      description: 'Protection optimale contre tous les insectes',
    },
    {
      key: 'spec3',
      title: 'Matériau du Cadre',
      value: 'Aluminium 6063',
      description: 'Extrusion aluminium de qualité aérospatiale',
    },
    {
      key: 'spec4',
      title: 'Résistance au Vent',
      value: 'Classe 4',
      description: 'Testé jusqu\'à 120 km/h',
    },
    {
      key: 'spec5',
      title: 'Garantie',
      value: '2 ans',
      description: 'Garantie pièces et main-d\'œuvre',
    },
    {
      key: 'spec6',
      title: 'Certification',
      value: 'CE',
      description: 'Conforme aux normes européennes',
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('specs.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            {t('specs.subtitle')}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">{spec.title}</h3>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary mb-2">{spec.value}</p>
              <p className="text-sm text-gray-400">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
