import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils/formatPrice';
import { MessageCircle } from 'lucide-react';
import JsonLd from '@/app/components/JsonLd';
import ProductCard from '@/app/components/ProductCard';
import ProductImageSlider from '@/app/components/ProductImageSlider';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Produk Tidak Ditemukan' };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/produk/${slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const productLd = (product: typeof products[0]) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: `https://baleexplorer.com${product.images[0]}`,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'IDR',
    price: product.price,
    availability: 'https://schema.org/InStock',
    url: `https://baleexplorer.com/produk/${product.slug}`,
  },
});

export default async function ProdukPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.tag === product.tag && p.slug !== product.slug)
    .slice(0, 3);

  const whatsappLink = `https://wa.me/6281234567890?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <>
      <JsonLd data={productLd(product)} />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-8 text-sm text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors no-underline text-text-muted">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/etalase" className="hover:text-accent transition-colors no-underline text-text-muted">Etalase</Link>
            <span className="mx-2">/</span>
            <span className="text-text">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductImageSlider images={product.images} name={product.name} />
            <div className="flex flex-col">
              <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider text-accent border border-accent/20 rounded-full mb-4 w-fit" style={{ background: 'rgba(196,163,90,0.1)' }}>
                {product.tag}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-text-muted text-lg leading-relaxed mb-6">{product.description}</p>

              {product.details && (
                <div className="mb-8 p-6 rounded-xl border border-border bg-bg-card">
                  <h3 className="font-semibold mb-2">Detail Produk</h3>
                  <p className="text-text-muted leading-relaxed">{product.details}</p>
                </div>
              )}

              <div className="font-grotesk text-3xl font-bold text-accent mb-8">
                {formatPrice(product.price)}
              </div>

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-bg rounded-full font-semibold text-sm uppercase tracking-wide transition-all hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(196,163,90,0.2)] no-underline"
              >
                <MessageCircle size={18} />
                Pesan via WhatsApp
              </Link>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Produk Terkait</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
