'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { products } from '@/lib/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ limit, horizontal = false }: { limit?: number; horizontal?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayProducts = limit ? products.slice(0, limit) : products;

  const allItems = [
    ...displayProducts.slice(-1),
    ...displayProducts,
    ...displayProducts.slice(0, 1),
  ];

  const getRealIndex = useCallback(
    (idx: number) => {
      if (idx === 0) return displayProducts.length - 1;
      if (idx > displayProducts.length) return 0;
      return idx - 1;
    },
    [displayProducts.length]
  );

  const goToReal = useCallback(
    (idx: number) => {
      if (!scrollRef.current) return;
      const cards = scrollRef.current.querySelectorAll('[data-card]');
      const cardsArr = Array.from(cards);
      const target = cardsArr.find((card) => {
        const index = parseInt(card.getAttribute('data-index') || '0', 10);
        return getRealIndex(index) === idx;
      });
      if (target) {
        target.scrollIntoView({ behavior: 'instant', inline: 'start', block: 'nearest' });
      }
    },
    [getRealIndex]
  );

  useEffect(() => {
    if (!horizontal || displayProducts.length <= 1 || !scrollRef.current) return;

    setCurrentIndex(1);

    const container = scrollRef.current;
    const cards = container.querySelectorAll('[data-card]');
    if (cards[1]) {
      cards[1].scrollIntoView({ behavior: 'instant', inline: 'start', block: 'nearest' });
    }

    const timer = setInterval(() => {
      if (isPaused) return;
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next > displayProducts.length) {
          setTimeout(() => goToReal(0), 50);
          return 1;
        }
        return next;
      });
    }, 2800);

    return () => clearInterval(timer);
  }, [horizontal, displayProducts.length, isPaused, goToReal]);

  useEffect(() => {
    if (!horizontal || !scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll('[data-card]');
    const cardsArr = Array.from(cards);
    const target = cardsArr.find((card) => {
      const index = parseInt(card.getAttribute('data-index') || '0', 10);
      return getRealIndex(index) === currentIndex;
    });
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  }, [currentIndex, horizontal, getRealIndex]);

  if (horizontal) {
    return (
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-6 pr-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {allItems.map((product, idx) => (
          <div
            key={`${product.slug}-${idx}`}
            data-card
            data-index={idx}
            className="snap-start flex-shrink-0"
            style={{ width: '300px', scrollSnapAlign: 'start' }}
          >
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
