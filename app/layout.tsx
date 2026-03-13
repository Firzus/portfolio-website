import '../styles/globals.css'

import { Syne, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { env } from '@/env'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-syne',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: 'Lilian Prieu | Full-Stack & Game Developer',
  description:
    'Portfolio of Lilian Prieu — full-stack & game developer. Web projects with React and Next.js, game dev with Unity and Unreal Engine.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lilian Prieu | Full-Stack & Game Developer',
    description:
      'Portfolio of Lilian Prieu — full-stack & game developer. Web projects with React and Next.js, game dev with Unity and Unreal Engine.',
    url: '/',
    siteName: 'Lilian Prieu Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lilian Prieu | Full-Stack & Game Developer',
    description:
      'Portfolio of Lilian Prieu — full-stack & game developer. Web projects with React and Next.js, game dev with Unity and Unreal Engine.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <head>
        <Analytics />
      </head>
      <body className="font-(family-name:--font-outfit)">
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  )
}
