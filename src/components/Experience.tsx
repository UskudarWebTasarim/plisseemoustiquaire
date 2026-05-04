'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function Experience() {
  const { t } = useTranslation();

  const stats = [
    { key: 'years', label: 'yearsLabel' },
    { key: 'clients', label: 'clientsLabel' },
    { key: 'countries', label: 'countriesLabel' },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                {t(`experience.${stat.key}`)}
              </div>
              <div className="text-lg text-gray-300">
                {t(`experience.${stat.label}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
