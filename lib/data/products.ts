export interface Product {
  id: string;
  slug: string;
  name: string;
  tag: 'T-Shirt' | 'Accessories';
  description: string;
  price: number;
  images: string[];
  whatsappMessage: string;
  details?: string;
  relatedPosts?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'borneo-indonesian-culture',
    name: 'Borneo Indonesian Culture',
    tag: 'T-Shirt',
    description: 'Desain klasik untuk para petualang sejati. Nyaman dipakai di mana saja.',
    price: 149000,
    images: [
      '/images/products/borneo-indonesian-culture-1.png',
      '/images/products/borneo-indonesian-culture-2.jpeg',
    ],
    whatsappMessage:
      'Halo Bale Explorer, saya mau order Borneo Indonesian Culture',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['tips-mendaki-gunung-pemula', 'perbedaan-cotton-combed'],
  },
  {
    id: '2',
    slug: 'yoshinoya',
    name: 'Yoshinoya',
    tag: 'T-Shirt',
    description: 'Perjalanan ke puncak dimulai dari langkah pertama. Desain inspiratif.',
    price: 149000,
    images: [
      '/images/products/yoshinoya.jpeg',
    ],
    whatsappMessage:
      'Halo Bale Explorer, saya mau order Yoshinoya',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['tips-mendaki-gunung-pemula'],
  },
  {
    id: '3',
    slug: 'the-mountain',
    name: 'The Mountain',
    tag: 'T-Shirt',
    description: 'Untuk kamu yang selalu siap menjelajah setiap sudut bumi.',
    price: 149000,
    images: [
      '/images/products/the-mountain.jpeg',
      '/images/products/the-mountain-2.jpeg',
    ],
    whatsappMessage: 'Halo Bale Explorer, saya mau order The Mountain',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['tips-mendaki-gunung-pemula', 'perbedaan-cotton-combed'],
  },
  {
    id: '4',
    slug: 'borneo-explorer',
    name: 'Borneo Explorer',
    tag: 'T-Shirt',
    description: 'Desain lokal dengan sentuhan humor dan semangat komunitas.',
    price: 149000,
    images: [
      '/images/products/borneo-explorer.jpeg',
    ],
    whatsappMessage: 'Halo Bale Explorer, saya mau order Borneo Explorer',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['perbedaan-cotton-combed'],
  },
  {
    id: '5',
    slug: 'the-hikers',
    name: 'The Hikers',
    tag: 'T-Shirt',
    description: 'Logo signature brand kami. Simple, bold, dan timeless.',
    price: 139000,
    images: [
      '/images/products/the-hikers.png',
    ],
    whatsappMessage: 'Halo Bale Explorer, saya mau order The Hikers',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['perbedaan-cotton-combed'],
  },
  {
    id: '6',
    slug: 'indonesia',
    name: 'Indonesia',
    tag: 'T-Shirt',
    description: 'Bangga menjadi bangsa Indonesia.',
    price: 149000,
    images: [
      '/images/products/indonesia.jpeg',
      '/images/products/indonesia-2.png',
    ],
    whatsappMessage: 'Halo Bale Explorer, saya mau order Indonesia',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['tips-mendaki-gunung-pemula'],
  },
  {
    id: '7',
    slug: 'kita-ke-sana',
    name: 'Kita Ke Sana',
    tag: 'T-Shirt',
    description: 'Desain lokal dengan semangat petualangan bersama.',
    price: 149000,
    images: [
      '/images/products/kita-ke-sana.png',
    ],
    whatsappMessage: 'Halo Bale Explorer, saya mau order Kita Ke Sana',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['tips-mendaki-gunung-pemula'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug));
}
