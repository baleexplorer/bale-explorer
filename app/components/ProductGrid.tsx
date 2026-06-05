'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { products } from '@/lib/data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ 
  limit, 
  horizontal = false 
}: { 
  limit?: number; 
  horizontal?: boolean 
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidthRef = useRef(300); // default, akan di-measure
  const gapRef = useRef(16);
  const currentTranslateRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const displayProducts = limit ? products.slice(0, limit) : products;
  const loopedProducts = [...displayProducts, ...displayProducts, ...displayProducts];
  const offset = displayProducts.length;

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('[data-card]') as HTMLElement | null;
    if (card) {
      cardWidthRef.current = card.getBoundingClientRect().width;
    }
    const style = window.getComputedStyle(trackRef.current);
    gapRef.current = parseFloat(style.gap) || 16;
  }, []);

  const setPosition = useCallback((translate: number, animate: boolean) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = animate 
      ? 'transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)' 
      : 'none';
    trackRef.current.style.transform = `translateX(${-translate}px)`;
    currentTranslateRef.current = translate;
  }, []);

  // Init position
  useEffect(() => {
    if (!horizontal || displayProducts.length <= 1) return;
    
    const init = () => {
      measure();
      const stepPx = cardWidthRef.current + gapRef.current;
      const startTranslate = offset * stepPx;
      setPosition(startTranslate, false);
      setCurrentIndex(0);
    };
    
    const raf = requestAnimationFrame(init);
    return () => cancelAnimationFrame(raf);
  }, [horizontal, displayProducts.length, offset, measure, setPosition]);

  // Auto-scroll timer
  useEffect(() => {
    if (!horizontal || displayProducts.length <= 1) return;

    const step = () => {
      if (!trackRef.current || isPausedRef.current) return;
      
      const stepPx = cardWidthRef.current + gapRef.current;
      const current = currentTranslateRef.current;
      const next = current + stepPx;
      const maxTranslate = (offset + displayProducts.length) * stepPx;

      if (next >= maxTranslate) {
        // Reset ke awal tanpa animasi (infinite loop illusion)
        setPosition(offset * stepPx, false);
      } else {
        setPosition(next, true);
      }

      const realIdx = Math.round(currentTranslateRef.current / stepPx) % displayProducts.length;
      setCurrentIndex(realIdx);
    };

    timerRef.current = setInterval(step, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [horizontal, displayProducts.length, offset]); // ← hapus isPaused!

  // Resize handler
  useEffect(() => {
    if (!horizontal) return;
    
    const handleResize = () => {
      measure();
      const stepPx = cardWidthRef.current + gapRef.current;
      const target = (offset + currentIndex) * stepPx;
      setPosition(target, false);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [horizontal, measure, setPosition, offset, currentIndex]);

  const handleMouseEnter = () => { isPausedRef.current = true; };
  const handleMouseLeave = () => { isPausedRef.current = false; };

  const handleCardClick = (idx: number) => {
    isPausedRef.current = true;
    setTimeout(() => { isPausedRef.current = false; }, 8000);
    
    const stepPx = cardWidthRef.current + gapRef.current;
    const target = (offset + idx) * stepPx;
    setPosition(target, true);
    setCurrentIndex(idx);
  };

  if (horizontal) {
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="overflow-hidden pl-6 pr-6">
          <div
            ref={trackRef}
            className="flex gap-4"
            style={{ willChange: 'transform' }}
          >
            {loopedProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                data-card
                className="flex-shrink-0"
                style={{ width: '300px' }}
              >
                <div 
                  onClick={() => handleCardClick(idx % displayProducts.length)} 
                  style={{ cursor: 'pointer' }}
                >
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Optional: dot indicator */}
        
       
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