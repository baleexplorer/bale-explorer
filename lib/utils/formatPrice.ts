import { Product, products } from '../data/products';

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
