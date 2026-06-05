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
    'Calm. Explore. Experience. Kaos dan apparel outdoor yang nyaman dipakai di gunung maupun di kota.',
  alternates: {
    canonical: '/',
  },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bale Explorer',
  url: 'https://baleexplorer.com',
  logo: 'https://baleexplorer.com/images/logo.png',
  sameAs: [
    'https://instagram.com/bale.explorer',
    'https://wa.me/6281234567890',
  ],
};

export default function HomePage() {
  return (
      <>
        <JsonLd data={organizationLd} />
        <main>
        <Hero />

        <section className="py-24 px-6" style={{ background: 'var(--bg-card)' }}>
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="block text-xs uppercase tracking-widest text-accent mb-4">Tentang Kami</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore more. Feel Home.</h2>
                <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
                  Bale Explorer lahir dari kecintaan kami terhadap alam dan petualangan. Setiap desain menggambarkan semangat menjelajah — dari puncak gunung hingga sudut kota.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <About />
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 px-6" id="etalase">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-accent mb-4">Etalase</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-2">Koleksi Terbaru</h2>
                  <p className="text-text-muted">Pilih desain yang sesuai dengan semangat petualanganmu.</p>
                </div>
                <Link
                  href="/etalase"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors no-underline text-sm font-medium"
                >
                  Lihat Semua <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ProductGrid limit={3} />
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(196,163,90,0.06) 0%, transparent 70%)',
              }}
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="block text-xs uppercase tracking-widest text-accent mb-4">Hubungi Kami</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Siap untuk petualangan berikutnya?</h2>
              <p className="text-text-muted mb-10 text-lg">
                Pesan langsung via WhatsApp atau cek update terbaru di Instagram kami.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://wa.me/6281234567890?text=Halo%20Bale%20Explorer,%20saya%20mau%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg rounded-full font-semibold text-sm uppercase tracking-wide transition-all hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(196,163,90,0.2)] no-underline"
                >
                  <MessageCircle size={18} />
                  Chat WhatsApp
                </Link>
                <Link
                  href="https://instagram.com/bale.explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text border border-border rounded-full font-semibold text-sm uppercase tracking-wide transition-all hover:border-accent hover:text-accent hover:bg-accent/5 no-underline"
                >
                  <Instagram size={18} />
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
