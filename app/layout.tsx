import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alawicars.ch'),
  title: {
    default: 'Alawicars.ch – Exklusive Fahrzeugpflege & Autoservice',
    template: '%s | Alawicars.ch',
  },
  description: 'Schweizer Präzision trifft auf Luxus Detailing. Exklusive Fahrzeugpflege und Autoservice für höchste Ansprüche in der Schweiz.',
  keywords: [
    'Auto Detailing',
    'Fahrzeugpflege',
    'Autopflege Schweiz',
    'Luxus Detailing',
    'Keramikversiegelung',
    'Lackaufbereitung',
    'Alawi Cars',
    'Autoaufbereitung',
    'Car Detailing Schweiz',
    'Premium Autopflege',
  ],
  authors: [{ name: 'Alawi Cars' }],
  creator: 'Alawi Cars',
  publisher: 'Alawi Cars',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.alawicars.ch',
    languages: {
      'de-CH': 'https://www.alawicars.ch',
      'en-CH': 'https://www.alawicars.ch',
      'fr-CH': 'https://www.alawicars.ch',
      'it-CH': 'https://www.alawicars.ch',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    alternateLocale: ['en_CH', 'fr_CH', 'it_CH'],
    url: 'https://www.alawicars.ch',
    siteName: 'Alawi Cars',
    title: 'Alawicars.ch – Exklusive Fahrzeugpflege & Autoservice',
    description: 'Schweizer Präzision trifft auf Luxus Detailing. Exklusive Fahrzeugpflege und Autoservice für höchste Ansprüche.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alawi Cars - Swiss Detailing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alawicars.ch – Exklusive Fahrzeugpflege & Autoservice',
    description: 'Schweizer Präzision trifft auf Luxus Detailing. Exklusive Fahrzeugpflege und Autoservice für höchste Ansprüche.',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

// JSON-LD Schema for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': 'https://www.alawicars.ch/#organization',
  name: 'Alawi Cars',
  alternateName: 'Alawicars',
  description: 'Exklusive Fahrzeugpflege und Autoservice in der Schweiz. Professionelles Auto Detailing, Ölwechsel, Bremsenservice und mehr.',
  url: 'https://www.alawicars.ch',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.alawicars.ch/logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://www.alawicars.ch/og-image.jpg',
  telephone: '+41 78 XXX XX XX', // Replace with actual phone number
  email: 'info@alawicars.ch', // Replace with actual email
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Musterstrasse 1', // Replace with actual address
    addressLocality: 'Zürich', // Replace with actual city
    postalCode: '8000', // Replace with actual postal code
    addressCountry: 'CH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.3769, // Replace with actual coordinates
    longitude: 8.5417, // Replace with actual coordinates
  },
  areaServed: {
    '@type': 'Country',
    name: 'Switzerland',
  },
  priceRange: '$$',
  currenciesAccepted: 'CHF',
  paymentAccepted: 'Cash, Credit Card, TWINT',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    // Add social media links here
    // 'https://www.facebook.com/alawicars',
    // 'https://www.instagram.com/alawicars',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dienstleistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Autoaufbereitung & Pflege',
          description: 'Professionelle Innen- und Aussenreinigung für ein makelloses Finish.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ölwechsel & Service',
          description: 'Fachgerechter Ölwechsel und präzise Wartung.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bremsenservice',
          description: 'Fachmännische Kontrolle und Austausch von Bremsbelägen und Scheiben.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Radwechsel',
          description: 'Saisonaler Radwechsel für Sommer- und Winterreifen.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Autohandel & Vermittlung',
          description: 'An- und Verkauf von Fahrzeugen mit erstklassiger Beratung.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fahrzeugtransport',
          description: 'Exklusiver und pünktlicher Transport Ihres Fahrzeugs.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
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
