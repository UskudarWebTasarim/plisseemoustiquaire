'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function Gallery() {
  const { t } = useTranslation();

  const images = [
    { id: 1, title: 'Moustiquaire Plissée Baie Vitree', category: 'Baie Vitree' },
    { id: 2, title: 'Moustiquaire Plissée Fenêtre', category: 'Fenêtre' },
    { id: 3, title: 'Moustiquaire Plissée Porte-Fenêtre', category: 'Porte-Fenêtre' },
    { id: 4, title: 'Installation Professionnelle', category: 'Installation' },
    { id: 5, title: 'Moustiquaire Plissée Blanche', category: 'Couleur' },
    { id: 6, title: 'Moustiquaire Plissée Grise', category: 'Couleur' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.category}</p>
              </div>
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm mt-2">{t('gallery.imagePlaceholder')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
