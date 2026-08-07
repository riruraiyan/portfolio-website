/*import type { Metadata } from 'next'
import { generateSiteMetadata } from '@/lib/metadata'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  return generateSiteMetadata()
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}*/

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { generateSiteMetadata } from '@/lib/metadata'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  return generateSiteMetadata()
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}