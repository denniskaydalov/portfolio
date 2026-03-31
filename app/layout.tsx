import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dennis Kaydalov Portfolio',
  description: 'Created by Dennis Kaydalov',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#0a0a0a' }} suppressHydrationWarning>
      <body suppressHydrationWarning style={{ backgroundColor: '#0a0a0a' }}>{children}</body>
    </html>
  )
}
