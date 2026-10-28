import type { Metadata } from "next";
import {Cormorant_Garamond, Geist_Mono, Cormorant} from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Librarium",
  description: "Organize sua biblioteca pessoal com a seriedade que ela merece. Cadastre obras, autores e PDFs — e compartilhe com quem quiser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistMono.variable} ${cormorantGaramond.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
