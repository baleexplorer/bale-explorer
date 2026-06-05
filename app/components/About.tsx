import { products } from '@/lib/data/products';
import ProductCard from './ProductCard';

export default function About() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      <span className="block text-xs uppercase tracking-widest text-accent mb-6">Tentang Kami</span>

      <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        Explore more. Feel Home.
      </h2>

      <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed mb-16">
        Bale Explorer lahir dari kecintaan kami terhadap alam dan petualangan. Setiap desain
        menggambarkan semangat menjelajah — dari puncak gunung hingga sudut kota. Kami
        percaya bahwa pakaian outdoor tak harus terbatas di jalur pendakian, tapi bisa jadi
        bagian dari gaya hidup sehari-hari.
      </p>

      <div className="flex flex-wrap justify-center gap-12">
        <div className="text-center">
          <span className="block font-grotesk text-4xl font-bold text-accent">16+</span>
          <span className="text-sm text-text-muted uppercase tracking-widest mt-1 block">Desain</span>
        </div>
        <div className="text-center">
          <span className="block font-grotesk text-4xl font-bold text-accent">100%</span>
          <span className="text-sm text-text-muted uppercase tracking-widest mt-1 block">Cotton</span>
        </div>
        <div className="text-center">
          <span className="block font-grotesk text-4xl font-bold text-accent">Local</span>
          <span className="text-sm text-text-muted uppercase tracking-widest mt-1 block">Brand</span>
        </div>
      </div>
    </section>
  );
}
