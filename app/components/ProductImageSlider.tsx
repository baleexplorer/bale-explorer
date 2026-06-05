'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProductImageSlider({ images, name }: { images: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden bg-bg-card border border-border">
      <Image
        key={`${name}-${currentIndex}`}
        src={images[currentIndex]}
        alt={`${name} - ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
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
    </div>
  );
}
