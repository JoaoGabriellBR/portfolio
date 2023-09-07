import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: '400' })

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
      <body className={`${raleway.className} bg-neutral-950 text-white tracking-wide`}>{children}</body>
    </html>
  )
}
