import { Metadata } from 'next';
import ProductCard from '@/app/components/ProductCard';
import { products } from '@/lib/data/products';

export const metadata: Metadata = {
  title: '404 — Halaman Tidak Ditemukan',
  description: 'Halaman yang kamu cari tidak ditemukan.',
};

export default function NotFound() {
  return (
    <>
    <main className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
          <p className="text-text-muted text-lg mb-8">Halaman yang kamu cari tidak ditemukan.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
