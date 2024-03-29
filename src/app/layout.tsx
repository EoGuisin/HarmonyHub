import type { Metadata } from 'next'
import { Paytone_One } from 'next/font/google'
import './globals.css'

const paytoneOne = Paytone_One({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Harmony Hub',
  description: 'Generated by Guilherme Augusto',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={paytoneOne.className}>{children}</body>
    </html>
  )
}
