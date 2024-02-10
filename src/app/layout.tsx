import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local'

const poppins = Poppins({ subsets: ["latin"], weight: "400", variable: '--font-poppins' });
const letric = localFont({ src: './public/Letric.otf', variable: '--font-letric', });

export const metadata: Metadata = {
  title: "João Gabriel Silva | Desenvolvedor Full Stack",
  description: "Criado por João Gabriel Silva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${letric.variable} bg-neutral-950 text-white tracking-wide`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
