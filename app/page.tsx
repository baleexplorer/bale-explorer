import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import ProductGrid from '@/app/components/ProductGrid';
import ScrollReveal from '@/app/components/ScrollReveal';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';

export const metadata: Metadata = {
  title: 'Bale Explorer — Built for the wild, made for everyday',
  description:
    'Calm. Explore. Experience. Kaos dan apparel outdoor asli Kalimantan yang nyaman dipakai di gunung maupun di kota. Brand outdoor pertama di Kalimantan.',
  keywords: [
    'brand outdoor Kalimantan',
    'kaos hiking Pontianak',
    'apparel outdoor Kalbar',
    'baju outdoor Singkawang',
    'brand lokal Kalimantan',
    'kaos outdoor',
    'Bale Explorer',
  ],
  alternates: {
    canonical: 'https://baleexplorer.com',
  },
  openGraph: {
    title: 'Bale Explorer — Built for the wild, made for everyday',
    description: 'Brand outdoor asli Kalimantan. Kaos & apparel untuk petualang sejati.',
    url: 'https://baleexplorer.com',
    siteName: 'Bale Explorer',
    images: [
      {
        url: 'https://baleexplorer.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bale Explorer - Brand Outdoor Asli Kalimantan',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bale Explorer — Built for the wild, made for everyday',
    description: 'Brand outdoor asli Kalimantan. Kaos & apparel untuk petualang sejati.',
    images: ['https://baleexplorer.com/images/og-image.jpg'],
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
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bale Explorer',
  alternateName: 'Bale',
  url: 'https://baleexplorer.com',
  logo: 'https://baleexplorer.com/images/bale_logo.png',
  image: 'https://baleexplorer.com/images/bale_logo_square.png',
  description:
    'Brand outdoor asli Kalimantan. Kaos dan apparel outdoor yang nyaman dipakai di gunung maupun di kota.',
  sameAs: [
    'https://instagram.com/bale.explorer',
    'https://wa.me/6281234567890',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Indonesian'],
    url: 'https://baleexplorer.com/kontak',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Kalimantan Barat',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Kalimantan Barat',
      addressCountry: 'ID',
    },
  },
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bale Explorer',
  url: 'https://baleexplorer.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://baleexplorer.com/etalase?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      
      <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
        <Hero />

        <section
          id="tentang"
          className="py-24 md:py-32 px-6"
          style={{ background: '#141414' }}
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <span
                  className="inline-block text-xs uppercase tracking-[0.2em] mb-4"
                  style={{ color: '#c4a35a' }}
                >
                  Tentang Kami
                </span>
                <h2
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f5f5f5' }}
                >
                  Explore more.
                  <br />
                  Feel Home.
                </h2>
                <p
                  className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                  style={{ color: '#888888' }}
                >
                  Bale Explorer lahir dari kecintaan kami terhadap alam dan petualangan.
                  Setiap desain menggambarkan semangat menjelajah — dari puncak gunung
                  hingga sudut kota. Kami percaya bahwa pakaian outdoor tak harus terbatas
                  di jalur pendakian, tapi bisa jadi bagian dari gaya hidup sehari-hari.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <About />
            </ScrollReveal>
          </div>
        </section>

        <section
          id="etalase"
          className="py-24 md:py-32 px-6"
          style={{ background: '#0a0a0a' }}
        >
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
                <div>
                  <span
                    className="inline-block text-xs uppercase tracking-[0.2em] mb-4"
                    style={{ color: '#c4a35a' }}
                  >
                    Etalase
                  </span>
                  <h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f5f5f5' }}
                  >
                    Koleksi Terbaru
                  </h2>
                  <p
                    className="text-base md:text-lg"
                    style={{ color: '#888888' }}
                  >
                    Pilih desain yang sesuai dengan semangat petualanganmu.
                  </p>
                </div>
                <Link
                  href="/etalase"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 no-underline group"
                  style={{ color: '#c4a35a' }}
                >
                  Lihat Semua
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ProductGrid horizontal limit={6} />
            </ScrollReveal>
          </div>
        </section>

        <section
          id="kontak"
          className="py-24 md:py-32 px-6 relative overflow-hidden"
          style={{ background: '#0a0a0a' }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-20"
              style={{
                background:
                  'radial-gradient(circle, rgba(196,163,90,0.15) 0%, transparent 70%)',
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span
                className="inline-block text-xs uppercase tracking-[0.2em] mb-4"
                style={{ color: '#c4a35a' }}
              >
                Hubungi Kami
              </span>
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f5f5f5' }}
              >
                Siap untuk petualangan
                <br />
                berikutnya?
              </h2>
              <p
                className="text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto"
                style={{ color: '#888888' }}
              >
                Pesan langsung via WhatsApp atau cek update terbaru di Instagram kami.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {/* WhatsApp CTA - hover pakai Tailwind group + CSS */}
                <Link
                  href="https://wa.me/6281234567890?text=Halo%20Bale%20Explorer,%20saya%20mau%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(196,163,90,0.25)] no-underline"
                  style={{
                    background: '#c4a35a',
                    color: '#0a0a0a',
                  }}
                >
                  <MessageCircle size={18} strokeWidth={2.5} />
                  Chat WhatsApp
                </Link>

                {/* Instagram CTA - hover pakai Tailwind group + CSS */}
                <Link
                  href="https://instagram.com/bale.explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 border no-underline hover:border-[#c4a35a] hover:text-[#c4a35a] hover:bg-[rgba(196,163,90,0.05)]"
                  style={{
                    background: 'transparent',
                    color: '#f5f5f5',
                    borderColor: '#2a2a2a',
                  }}
                >
                  <Instagram size={18} strokeWidth={2.5} />
                  @bale.explorer
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}