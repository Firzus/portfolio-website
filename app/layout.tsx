import 'react-vertical-timeline-component/style.min.css'
import '../styles/globals.css'

import { Syne, Outfit } from 'next/font/google'

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
  title: 'Prieu Lilian | Full-Stack & Game Developer Portfolio',
  description:
    'Dive into the works of Lilian, a French comp-sci student specializing in web and video game development. My portfolio highlights versatility in Unity, Unreal Engine, React, and Figma, with a track record of precision and leadership on diverse projects.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <head />
      <body className="font-(family-name:--font-outfit)">
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  )
}
