import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://baleexplorer.com'),
  title: {
    default: 'Bale Explorer — Built for the wild, made for everyday',
    template: '%s | Bale Explorer',
  },
  description:
    'Brand outdoor asli Kalimantan. Kaos dan apparel outdoor yang nyaman dipakai di gunung maupun di kota.',
  keywords: [
    'brand outdoor Kalimantan',
    'kaos hiking Pontianak',
    'apparel outdoor Kalbar',
    'baju outdoor Singkawang',
    'brand lokal Kalimantan',
    'kaos outdoor',
    'Bale Explorer',
  ],
  authors: [{ name: 'Bale Explorer' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://baleexplorer.com',
    siteName: 'Bale Explorer',
    title: 'Bale Explorer — Built for the wild, made for everyday',
    description:
      'Brand outdoor asli Kalimantan. Kaos & apparel untuk petualang sejati.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bale Explorer - Brand Outdoor Asli Kalimantan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bale Explorer — Built for the wild, made for everyday',
    description:
      'Brand outdoor asli Kalimantan. Kaos & apparel untuk petualang sejati.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://baleexplorer.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-inter antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
