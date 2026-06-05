'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils/formatPrice';

export default function ProductCard({ product }: { product: Product }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = product.images;

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="group bg-bg rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:border-accent hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-bg-hover to-bg flex items-center justify-center flex-shrink-0">
        <Image
          key={`${product.id}-${currentIndex}`}
          src={images[currentIndex]}
          alt={`${product.name} - ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-accent' : 'w-1.5 bg-text/30'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={`/produk/${product.slug}`}
            className="px-5 py-2.5 bg-accent text-bg text-sm font-semibold rounded-full transition-transform duration-300 translate-y-2 group-hover:translate-y-0 no-underline"
          >
            Lihat Detail
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider text-accent border border-accent/20 rounded-full mb-3 w-fit" style={{ background: 'rgba(196,163,90,0.1)' }}>
          {product.tag}
        </span>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-text-muted text-sm mb-4 leading-relaxed line-clamp-3">{product.description}</p>
        <div className="font-grotesk text-xl font-bold text-accent">
          {formatPrice(product.price)}
        </div>
      </div>
    </div>
  );
}
