import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const siteUrl = 'https://josuecastro.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Josue Castro — Desarrollador Fullstack',
  description:
    'Portfolio de desarrollo fullstack. Laravel, React, Docker, TypeScript y más.',
  keywords: ['fullstack', 'desarrollador', 'portfolio', 'react', 'laravel', 'typescript', 'josue castro'],
  authors: [{ name: 'Josue Castro' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Josue Castro',
    title: 'Josue Castro — Desarrollador Fullstack',
    description:
      'Portfolio de desarrollo fullstack. Laravel, React, Docker, TypeScript y más.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Josue Castro — Desarrollador Fullstack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josue Castro — Desarrollador Fullstack',
    description:
      'Portfolio de desarrollo fullstack. Laravel, React, Docker, TypeScript y más.',
    images: ['/og.png'],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={montserrat.className}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
