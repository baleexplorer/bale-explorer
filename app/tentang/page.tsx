import { Metadata } from 'next';
import JsonLd from '@/app/components/JsonLd';
import About from '@/app/components/About';
import ScrollReveal from '@/app/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Tentang',
  description: 'Cerita di balik Bale Explorer — brand apparel outdoor yang lahir dari kecintaan terhadap alam.',
  alternates: {
    canonical: '/tentang',
  },
};

const aboutPageLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Tentang Bale Explorer',
  description: 'Brand apparel outdoor yang lahir dari kecintaan terhadap alam dan petualangan.',
  url: 'https://baleexplorer.com/tentang',
};

export default function TentangPage() {
  return (
    <>
      <JsonLd data={aboutPageLd} />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="block text-xs uppercase tracking-widest text-accent mb-4">Tentang Kami</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore more. Feel Home.</h1>
              <p className="text-text-muted max-w-3xl mx-auto text-lg leading-relaxed">
                Bale Explorer lahir dari kecintaan kami terhadap alam dan petualangan. Setiap desain menggambarkan
                semangat menjelajah — dari puncak gunung hingga sudut kota. Kami percaya bahwa pakaian outdoor
                tak harus terbatas di jalur pendakian, tapi bisa jadi bagian dari gaya hidup sehari-hari.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <About />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl border border-border bg-bg-card">
                <h3 className="text-xl font-bold mb-3">Visi Kami</h3>
                <p className="text-text-muted leading-relaxed">
                  Menjadi brand apparel outdoor lokal yang diakglobal, tetap berakar pada nilai-nilai petualangan
                  dan kenyamanan sehari-hari.
                </p>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-bg-card">
                <h3 className="text-xl font-bold mb-3">Misi Kami</h3>
                <p className="text-text-muted leading-relaxed">
                  Menghadirkan produk berkualitas dengan desain yang bermakna, mendukung komunitas outdoor
                  Indonesia, dan menjaga lingkungan.
                </p>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-bg-card">
                <h3 className="text-xl font-bold mb-3">Nilai Kami</h3>
                <p className="text-text-muted leading-relaxed">
                  Calm, Explore, Experience. Kami percaya petualangan tidak harus keras — ia bisa lembut,
                  reflektif, dan untuk semua orang.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
