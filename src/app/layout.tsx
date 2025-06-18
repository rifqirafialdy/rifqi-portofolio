import type { Metadata } from 'next';
import './globals.css';
import { IBM_Plex_Sans, DotGothic16 } from 'next/font/google';
import Header from './components/Header';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm',
});

const dotGothic = DotGothic16({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dot',
});

export const metadata: Metadata = {
  title: 'My Zine-Inspired Portfolio',
  description: 'A storytelling-focused personal site built with Next.js & Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${dotGothic.variable}`}>
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
