import type { Metadata } from 'next';
import { Figtree, Google_Sans_Flex, Playfair_Display } from 'next/font/google';

import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import './globals.css';

// Body text
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

// Display / UI headings
const googleSansFlex = Google_Sans_Flex({
  subsets: ['latin'],
  variable: '--font-google-sans',
});

// Serif headings
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Ivy Studio',
  description: 'Ivy Studio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${googleSansFlex.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
