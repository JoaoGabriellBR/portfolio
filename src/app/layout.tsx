import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'João Gabriel Silva | Desenvolvedor Full Stack',
  description: 'Criado por João Gabriel Silva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white tracking-wide`}>{children}</body>
    </html>
  )
}
