import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Josue Castro — Fullstack Developer',
  description:
    'Portfolio de desarrollo fullstack. Next.js, Python, Docker, TypeScript y más.',
  keywords: ['fullstack', 'developer', 'portfolio', 'next.js', 'typescript', 'josue castro'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={montserrat.className}>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}