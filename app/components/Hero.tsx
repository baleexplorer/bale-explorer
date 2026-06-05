import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, rgba(196,163,90,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(196,163,90,0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <span className="inline-block px-4 py-2 border border-border rounded-full text-xs uppercase tracking-widest text-accent mb-8" style={{ background: 'rgba(196,163,90,0.08)' }}>
          Mountain & Outdoor Inspired
        </span>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Built for the <span className="text-accent">wild</span>,<br />
          made for everyday.
        </h1>

        <p className="text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Calm. Explore. Experience. Kaos dan apparel outdoor yang nyaman dipakai di gunung maupun di kota.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {['Calm', 'Explore', 'Experience'].map((value) => (
            <div key={value} className="flex items-center gap-2 text-sm text-text-muted uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {value}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/etalase"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg rounded-full font-semibold text-sm uppercase tracking-wide transition-all hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(196,163,90,0.2)] no-underline"
          >
            Lihat Etalase
            <ArrowRight size={16} />
          </Link>
          <Link
            href="https://instagram.com/bale.explorer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-text border border-border rounded-full font-semibold text-sm uppercase tracking-wide transition-all hover:border-accent hover:text-accent hover:bg-accent/5 no-underline"
          >
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
