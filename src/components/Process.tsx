'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    {
      key: 'step1',
      number: '01',
    },
    {
      key: 'step2',
      number: '02',
    },
    {
      key: 'step3',
      number: '03',
    },
    {
      key: 'step4',
      number: '04',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            {t('process.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className="relative group"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {t(`process.${step.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`process.${step.key}.description`)}
                </p>
              </div>

              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-3 right-0 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
