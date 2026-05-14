import type { Metadata } from 'next'
import { Montserrat, Forum } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const forum = Forum({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-forum',
})

export const metadata: Metadata = {
  title: 'Josue Castro — Fullstack Developer',
  description:
    'Portfolio de desarrollo fullstack. Laravel, React, Docker, TypeScript y más.',
  keywords: ['fullstack', 'developer', 'portfolio', 'react', 'laravel', 'typescript', 'josue castro'],
  icons: {
    icon: '/favicon.svg',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${montserrat.className} ${forum.variable}`}>
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