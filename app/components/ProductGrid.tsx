'use client';

import { useRef, useEffect, useState } from 'react';
import { products } from '@/lib/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ limit, horizontal = false }: { limit?: number; horizontal?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const displayProducts = limit ? products.slice(0, limit) : products;

  useEffect(() => {
    if (!horizontal || !scrollRef.current || displayProducts.length <= 1) return;

    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.7;

    const timer = setInterval(() => {
      if (isPaused) return;
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [horizontal, displayProducts.length, isPaused]);

  if (horizontal) {
    return (
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {displayProducts.map((product) => (
          <div key={product.id} className="snap-start flex-shrink-0" style={{ width: 'min(85vw, 380px)' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
