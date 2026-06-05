import { products } from '@/lib/data/products';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProductGrid({ limit }: { limit?: number }) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
