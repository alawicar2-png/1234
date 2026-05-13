import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Alawi Cars | Fahrzeugpflege, Autoaufbereitung & Mobiler Service Schweiz',
  description: 'Professionelle Fahrzeugpflege, Autoaufbereitung, Ölwechsel, Bremsenservice, Reifenwechsel und Autotransport in der Schweiz. Mobiler Reinigungsservice im Raum Zürich, Winterthur und 50km Umkreis. Car Detailing, Mobile Car Wash, Oil Change, Brake Repair, Tire Service, Car Transport Europe.',
  keywords: [
    // German keywords
    'Fahrzeugpflege', 'Autoaufbereitung', 'Mobiler Reinigungsservice', 'Ölwechsel', 'Bremsenservice', 
    'Reifenwechsel', 'Autotransport Schweiz', 'Auto Detailing Zürich', 'Autopflege Winterthur',
    'Keramikversiegelung', 'Lackaufbereitung', 'Alawi Cars', 'Autoservice Schweiz',
    // English keywords
    'Car Detailing', 'Mobile Car Wash', 'Oil Change', 'Brake Repair', 'Tire Service', 
    'Car Transport Europe', 'Auto Service Switzerland', 'Vehicle Care Near Me',
    // French keywords
    'Nettoyage auto', 'Entretien véhicule', 'Service mobile', 'Transport voiture Suisse',
    'Detailing automobile', 'Lavage auto mobile',
    // Italian keywords
    'Pulizia auto', 'Cura veicolo', 'Servizio mobile', 'Trasporto auto Svizzera',
    'Detailing auto', 'Lavaggio auto mobile',
    // Arabic transliterated keywords
    'Tantheef sayarat', 'Khadamat sayarat', 'Naql sayarat',
    // Local SEO
    'Mobile service Switzerland', 'Autoservice in meiner Nähe', 'Service near me'
  ].join(', '),
  openGraph: {
    title: 'Alawi Cars | Exklusive Fahrzeugpflege & Autoservice Schweiz',
    description: 'Professionelle Fahrzeugpflege, Autoaufbereitung, Ölwechsel, Bremsenservice, Reifenwechsel und Autotransport. Mobiler Service im Raum Zürich/Winterthur.',
    url: 'https://www.alawicars.ch',
    siteName: 'Alawi Cars',
    locale: 'de_CH',
    alternateLocale: ['en_US', 'fr_CH', 'it_CH'],
    type: 'website',
    images: [
      {
        url: '/images/alawi-cars-logo.png',
        width: 1200,
        height: 630,
        alt: 'Alawi Cars - Exklusive Fahrzeugpflege & Autoservice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alawi Cars | Fahrzeugpflege & Autoservice Schweiz',
    description: 'Professionelle Fahrzeugpflege, Autoaufbereitung, Ölwechsel, Bremsenservice und Autotransport in der Schweiz.',
    images: ['/images/alawi-cars-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.alawicars.ch',
    languages: {
      'de-CH': 'https://www.alawicars.ch',
      'en': 'https://www.alawicars.ch',
      'fr-CH': 'https://www.alawicars.ch',
      'it-CH': 'https://www.alawicars.ch',
    },
  },
  icons: {
    icon: [
      {
        url: '/images/alawi-cars-logo.png',
        sizes: '32x32',
      },
      {
        url: '/images/alawi-cars-logo.png',
        sizes: '192x192',
      },
    ],
    apple: '/images/alawi-cars-logo.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'CH-ZH',
    'geo.placename': 'Zürich, Winterthur',
    'geo.position': '47.3769;8.5417',
    'ICBM': '47.3769, 8.5417',
  },
}

// Structured data for Local Business SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Alawi Cars',
  description: 'Professionelle Fahrzeugpflege, Autoaufbereitung, Ölwechsel, Bremsenservice, Reifenwechsel und Autotransport in der Schweiz.',
  url: 'https://www.alawicars.ch',
  telephone: '+41762944702',
  email: 'info@alawicars.ch',
  image: 'https://www.alawicars.ch/images/alawi-cars-logo.png',
  logo: 'https://www.alawicars.ch/images/alawi-cars-logo.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CH',
    addressRegion: 'Zürich',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.3769,
    longitude: 8.5417,
  },
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.3769,
        longitude: 8.5417,
      },
      geoRadius: '50000', // 50km radius
    },
    {
      '@type': 'Place',
      name: 'Zürich',
    },
    {
      '@type': 'Place',
      name: 'Winterthur',
    },
    {
      '@type': 'Country',
      name: 'Switzerland',
    },
  ],
  serviceType: [
    'Car Detailing',
    'Fahrzeugpflege',
    'Autoaufbereitung',
    'Mobile Car Wash',
    'Mobiler Reinigungsservice',
    'Oil Change',
    'Ölwechsel',
    'Brake Service',
    'Bremsenservice',
    'Tire Service',
    'Reifenwechsel',
    'Car Transport',
    'Autotransport',
    'Nettoyage auto',
    'Pulizia auto',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Car Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Autoaufbereitung & Pflege / Car Detailing & Care',
          description: 'Professional interior and exterior cleaning for a flawless finish and lasting protection.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ölwechsel & Service / Oil Change & Service',
          description: 'Professional oil change and precise maintenance for maximum engine life.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bremsenservice / Brake Service',
          description: 'Safety without compromise: Expert inspection and replacement of brake pads and discs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reifenwechsel / Tire Service',
          description: 'Seasonal wheel change for summer and winter tires.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fahrzeugtransport / Car Transport',
          description: 'Exclusive and punctual transport of your vehicle from A to B.',
        },
      },
    ],
  },
  sameAs: [
    'https://www.instagram.com/alawicars.ch',
    'https://www.tiktok.com/@alawi_cars.ch',
    'https://youtube.com/@alawicars',
    'https://www.facebook.com/share/1Crw5BTKTv/',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    description: 'Termine nach Vereinbarung / By appointment',
  },
  availableLanguage: ['German', 'English', 'French', 'Italian', 'Arabic'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Hidden SEO keywords for multi-language support */}
        <meta name="keywords" lang="de" content="Fahrzeugpflege, Autoaufbereitung, Mobiler Reinigungsservice, Ölwechsel, Bremsenservice, Reifenwechsel, Autotransport Schweiz" />
        <meta name="keywords" lang="en" content="Car Detailing, Mobile Car Wash, Oil Change, Brake Repair, Tire Service, Car Transport Europe" />
        <meta name="keywords" lang="fr" content="Nettoyage auto, Entretien véhicule, Vidange, Service freins, Changement pneus, Transport voiture Suisse" />
        <meta name="keywords" lang="it" content="Pulizia auto, Cura veicolo, Cambio olio, Servizio freni, Cambio gomme, Trasporto auto Svizzera" />
        <meta name="keywords" lang="ar" content="تنظيف سيارات, خدمات سيارات, نقل سيارات" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
