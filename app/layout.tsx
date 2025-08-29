import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OXYGENmase - Ultra Instinct Mode: ON ⚡',
  description: 'Elite game reverser specializing in tools & cheats, reverse engineering, and advanced hacking techniques. Ultra Instinct Mode: ON ⚡',
  keywords: ['Game Reversing', 'Tools & Cheats', 'Reverse Engineering', 'Hacking', 'Anti-Cheat Bypass', 'Exploit Development'],
  authors: [{ name: 'OXYGENmase' }],
  creator: 'OXYGENmase',
      openGraph: {
      title: 'OXYGENmase - Ultra Instinct Mode: ON ⚡',
    description: 'Elite game reverser specializing in tools & cheats, reverse engineering, and advanced hacking techniques. Ultra Instinct Mode: ON ⚡',
    url: 'https://ultra-instinct-hacker.vercel.app',
    siteName: 'OXYGENmase - Ultra Instinct Hacker',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OXYGENmase - Ultra Instinct Mode: ON ⚡',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
      twitter: {
      card: 'summary_large_image',
      title: 'OXYGENmase - Ultra Instinct Mode: ON ⚡',
    description: 'Elite game reverser specializing in tools & cheats, reverse engineering, and advanced hacking techniques. Ultra Instinct Mode: ON ⚡',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
