import type { Metadata } from 'next'
import { Urbanist, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Urbanist — clean geometric sans for all body/UI text
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

// Space Grotesk — display font for section headers, hero title, footer
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'VM Design — UI/UX Design',
  description: 'Everything on purpose. UI/UX Design studio.',
  generator: 'v0.app',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
