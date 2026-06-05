import { Metadata } from 'next';
import { products } from '@/lib/data/products';
import ProductCard from '@/app/components/ProductCard';
import JsonLd from '@/app/components/JsonLd';

export const metadata: Metadata = {
  title: 'Etalase',
  description: 'Koleksi lengkap kaos dan apparel outdoor Bale Explorer.',
  alternates: {
    canonical: '/etalase',
  },
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((product, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    url: `https://baleexplorer.com/produk/${product.slug}`,
    name: product.name,
  })),
};

export default function EtalasePage() {
  return (
    <>
      <JsonLd data={itemListLd} />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="block text-xs uppercase tracking-widest text-accent mb-4">Etalase</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Koleksi Terbaru</h1>
            <p className="text-text-muted text-lg max-w-2xl">
              Pilih desain yang sesuai dengan semangat petualanganmu. Semua produk menggunakan bahan 100% cotton combed 30s.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
