import { Metadata } from 'next';
import ContactForm from '@/app/components/ContactForm';
import ScrollReveal from '@/app/components/ScrollReveal';
import { MessageCircle, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/app/components/JsonLd';

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi Bale Explorer untuk order atau kerja sama.',
  alternates: {
    canonical: '/kontak',
  },
};

const contactLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontak Bale Explorer',
  description: 'Hubungi Bale Explorer untuk order atau kerja sama.',
  url: 'https://baleexplorer.com/kontak',
};

export default function KontakPage() {
  return (
    <>
      <JsonLd data={contactLd} />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="block text-xs uppercase tracking-widest text-accent mb-4">Hubungi Kami</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Siap untuk petualangan berikutnya?</h1>
              <p className="text-text-muted max-w-xl mx-auto text-lg leading-relaxed">
                Pesan langsung via WhatsApp atau isi form di bawah ini. Kami akan segera merespon.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <ScrollReveal className="lg:col-span-3">
              <div className="p-8 rounded-2xl border border-border bg-bg-card">
                <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-bg-card">
                <h3 className="font-semibold mb-4">Atau langsung chat via</h3>
                <div className="space-y-4">
                  <Link
                    href="https://wa.me/6281234567890?text=Halo%20Bale%20Explorer,%20saya%20mau%20order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-accent transition-colors no-underline group"
                  >
                    <div className="p-2 rounded-full bg-accent/10 text-accent">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-accent transition-colors">WhatsApp</div>
                      <div className="text-sm text-text-muted">+62 812-3456-7890</div>
                    </div>
                  </Link>

                  <Link
                    href="https://instagram.com/bale.explorer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-accent transition-colors no-underline group"
                  >
                    <div className="p-2 rounded-full bg-accent/10 text-accent">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-accent transition-colors">Instagram</div>
                      <div className="text-sm text-text-muted">@bale.explorer</div>
                    </div>
                  </Link>

                  <Link
                    href="mailto:hello@baleexplorer.com"
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-accent transition-colors no-underline group"
                  >
                    <div className="p-2 rounded-full bg-accent/10 text-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-accent transition-colors">Email</div>
                      <div className="text-sm text-text-muted">hello@baleexplorer.com</div>
                    </div>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </>
  );
}
