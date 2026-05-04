import type { Metadata } from "next";
import "./globals.css";
import Popup from "@/components/Popup";

export const metadata: Metadata = {
  title: "Plissee Moustiquaire: Protection Anti-Insectes Premium",
  description: "Plissee Moustiquaire Design Élégant. Protection Totale Contre Insectes Volants. Commandez Votre Solution Premium Pour Une Protection Durable.",
  keywords: "moustiquaire plissée france, plisse sineklik fransa, fransa plise perde, moustiquaire plissée paris, moustiquaire, plisse perde, jaluzi perde, protection insectes, store fenêtre, moustiquaire fenêtre, rideau plissé, anti-moustique, protection insecte fenêtre, moustiquaire plissée livraison france",
  openGraph: {
    title: "Plissee Moustiquaire: Protection Anti-Insectes Premium",
    description: "Plissee Moustiquaire Design Élégant. Protection Totale Contre Insectes Volants. Commandez Votre Solution Premium Pour Une Protection Durable.",
    type: "website",
    locale: "fr_FR",
    url: "https://fenetresystems.com",
    siteName: "Plisse Moustiquaire",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plissee Moustiquaire: Protection Anti-Insectes Premium",
    description: "Plissee Moustiquaire Design Élégant. Protection Totale Contre Insectes Volants. Commandez Votre Solution Premium Pour Une Protection Durable.",
  },
  alternates: {
    canonical: "https://plisseemoustiquaire.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Moustiquaire Plissée France',
    description: 'Moustiquaire plissée de haute qualité pour fenêtres et portes-fenêtres en France. Protection anti-insectes premium avec livraison dans toute la France (Paris, Lyon, Marseille, Bordeaux, Toulouse).',
    url: 'https://plisseemoustiquaire.fr',
    telephone: '+90 540 336 3873',
    email: 'info@fenetresystems.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Avenue des Champs-Élysées',
      addressLocality: 'Paris',
      postalCode: '75008',
      addressCountry: 'FR',
    },
    areaServed: ['France', 'Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse'],
    sameAs: [
      'https://www.facebook.com/FenetreSystems/',
      'https://www.instagram.com/fenetresystems/',
      'https://x.com/FenetreSystems',
      'https://www.linkedin.com/company/fenetresystems/',
      'https://tr.pinterest.com/fenetresystems/',
      'https://www.youtube.com/@FenetreSystems',
    ],
    priceRange: '€€',
    openingHours: 'Mo-Su 00:00-23:59',
  };

  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Popup />
        {children}
      </body>
    </html>
  );
}
