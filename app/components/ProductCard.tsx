import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils/formatPrice';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-bg rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:border-accent hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-bg-hover to-bg flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={`/produk/${product.slug}`}
            className="px-5 py-2.5 bg-accent text-bg text-sm font-semibold rounded-full transition-transform duration-300 translate-y-2 group-hover:translate-y-0 no-underline"
          >
            Lihat Detail
          </Link>
        </div>
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider text-accent border border-accent/20 rounded-full mb-3" style={{ background: 'rgba(196,163,90,0.1)' }}>
          {product.tag}
        </span>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-text-muted text-sm mb-4 leading-relaxed">{product.description}</p>
        <div className="font-grotesk text-xl font-bold text-accent">
          {formatPrice(product.price)}
        </div>
      </div>
    </div>
  );
}
