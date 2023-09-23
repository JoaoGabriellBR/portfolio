import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Analytics from "@/components/Analytics";

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
      <body
        className={`${poppins.className} bg-neutral-950 text-white tracking-wide`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
