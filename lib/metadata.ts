/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL('https://baleexplorer.com'),
  title: {
    default: 'Bale Explorer — Built for the wild, made for everyday',
    template: '%s | Bale Explorer',
  },
  description:
    'Calm. Explore. Experience. Kaos dan apparel outdoor yang nyaman dipakai di gunung maupun di kota.',
  keywords: ['bale explorer', 'outdoor', 'apparel', 'tshirt', 'adventure', 'indonesia'],
  authors: [{ name: 'Bale Explorer' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://baleexplorer.com',
    siteName: 'Bale Explorer',
    title: 'Bale Explorer — Built for the wild, made for everyday',
    description:
      'Calm. Explore. Experience. Kaos dan apparel outdoor yang nyaman dipakai di gunung maupun di kota.',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Bale Explorer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bale Explorer — Built for the wild, made for everyday',
    description:
      'Calm. Explore. Experience. Kaos dan apparel outdoor yang nyaman dipakai di gunung maupun di kota.',
    images: ['/images/og.jpg'],
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
  alternates: {
    canonical: '/',
  },
};
