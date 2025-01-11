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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
