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
  title: {
    default: 'Alawi Cars | Exklusive Fahrzeugpflege & Autoservice Schweiz',
    template: '%s | Alawi Cars'
  },
  description: 'Alawi Cars - Ihr Spezialist für exklusive Fahrzeugpflege in der Schweiz. Professionelles Auto Detailing, Keramikversiegelung, Lackaufbereitung, Ölwechsel und Bremsenservice. Schweizer Präzision für Ihr Fahrzeug.',
  keywords: 'Alawi Cars, alawicars, Alawicars.ch, Auto Detailing Schweiz, Fahrzeugpflege, Autopflege, Luxus Detailing, Keramikversiegelung, Lackaufbereitung, Ölwechsel, Bremsenservice, Autoservice Schweiz',
  authors: [{ name: 'Alawi Cars' }],
  creator: 'Alawi Cars',
  publisher: 'Alawi Cars',
  metadataBase: new URL('https://www.alawicars.ch'),
  alternates: {
    canonical: 'https://www.alawicars.ch',
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://www.alawicars.ch',
    siteName: 'Alawi Cars',
    title: 'Alawi Cars | Exklusive Fahrzeugpflege & Autoservice Schweiz',
    description: 'Alawi Cars - Ihr Spezialist für exklusive Fahrzeugpflege in der Schweiz. Professionelles Auto Detailing, Keramikversiegelung und mehr.',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Alawi Cars - Exklusive Fahrzeugpflege',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alawi Cars | Exklusive Fahrzeugpflege Schweiz',
    description: 'Professionelles Auto Detailing und Fahrzeugpflege in der Schweiz.',
    images: ['/images/logo.jpeg'],
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
