'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function Markets() {
  const { t } = useTranslation();

  const countries = [
    { key: 'france', flag: '🇫🇷' },
    { key: 'germany', flag: '🇩🇪' },
    { key: 'netherlands', flag: '🇳🇱' },
    { key: 'belgium', flag: '🇧🇪' },
    { key: 'austria', flag: '🇦🇹' },
    { key: 'switzerland', flag: '🇨🇭' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            {t('markets.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            {t('markets.subtitle')}
          </p>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 leading-relaxed text-center">
            {t('markets.description')}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {countries.map((country) => (
            <div
              key={country.key}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{country.flag}</div>
              <div className="text-sm font-semibold text-secondary">
                {t(`markets.countries.${country.key}`)}
              </div>
            </div>
          ))}
        </div>

        {/* Other Countries */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-xl px-8 py-4 shadow-md">
            <span className="text-secondary font-medium">
              {t('markets.countries.other')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
