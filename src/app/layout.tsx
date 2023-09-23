import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
      <Head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID});
        `}
        </Script>
      </Head>
      <body
        className={`${poppins.className} bg-neutral-950 text-white tracking-wide`}
      >
        {children}
      </body>
    </html>
  );
}
