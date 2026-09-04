import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { AmbientScene } from '../components/AmbientScene'

export const metadata: Metadata = {
  title: 'Sunny Software Solutions — Build what’s next.',
  description: 'Sunny Software Solutions is an AI-native software studio for ambitious teams building what’s next.',
  generator: 'Sunny Software Solutions',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#05070d',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="antialiased">
        <AmbientScene />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
