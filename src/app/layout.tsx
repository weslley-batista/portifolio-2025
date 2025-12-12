import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weslley Batista - Desenvolvedor Full Stack',
  description: 'Portfólio de Weslley Batista, desenvolvedor full stack especializado em React, Next.js e Node.js.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'next.js', 'node.js', 'typescript'],
  authors: [{ name: 'Weslley Batista' }],
  openGraph: {
    title: 'Weslley Batista - Desenvolvedor Full Stack',
    description: 'Portfólio profissional de desenvolvedor full stack',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
