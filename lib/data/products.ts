export interface Product {
  id: string;
  slug: string;
  name: string;
  tag: 'T-Shirt' | 'Accessories';
  description: string;
  price: number;
  image: string;
  whatsappMessage: string;
  details?: string;
  relatedPosts?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'born-to-explore',
    name: 'Born To Explore',
    tag: 'T-Shirt',
    description: 'Desain klasik untuk para petualang sejati. Nyaman dipakai di mana saja.',
    price: 149000,
    image: '/images/products/born-to-explore.jpg',
    whatsappMessage:
      'Halo Bale Explorer, saya mau order Born To Explore',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['tips-mendaki-gunung-pemula', 'perbedaan-cotton-combed'],
  },
  {
    id: '2',
    slug: 'summit-journey',
    name: 'Summit Journey',
    tag: 'T-Shirt',
    description: 'Perjalanan ke puncak dimulai dari langkah pertama. Desain inspiratif.',
    price: 149000,
    image: '/images/products/summit-journey.jpg',
    whatsappMessage:
      'Halo Bale Explorer, saya mau order Summit Journey',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['tips-mendaki-gunung-pemula'],
  },
  {
    id: '3',
    slug: 'hikers',
    name: 'Hikers',
    tag: 'T-Shirt',
    description: 'Untuk kamu yang selalu siap menjelajah setiap sudut bumi.',
    price: 149000,
    image: '/images/products/hikers.jpg',
    whatsappMessage: 'Halo Bale Explorer, saya mau order Hikers',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['tips-mendaki-gunung-pemula', 'perbedaan-cotton-combed'],
  },
  {
    id: '4',
    slug: 'kita-ke-bawa',
    name: 'Kita Ke Bawa',
    tag: 'T-Shirt',
    description: 'Desain lokal dengan sentuhan humor dan semangat komunitas.',
    price: 149000,
    image: '/images/products/kita-ke-bawa.jpg',
    whatsappMessage: 'Halo Bale Explorer, saya mau order Kita Ke Bawa',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['perbedaan-cotton-combed'],
  },
  {
    id: '5',
    slug: 'bale-explorer-logo',
    name: 'Bale Explorer Logo',
    tag: 'T-Shirt',
    description: 'Logo signature brand kami. Simple, bold, dan timeless.',
    price: 139000,
    image: '/images/products/bale-explorer-logo.jpg',
    whatsappMessage: 'Halo Bale Explorer, saya mau order Bale Explorer Logo',
    details:
      'Bahan 100% cotton combed 30s. Nyaman, breathable, dan awet. Tersedia dalam ukuran S, M, L, XL, XXL.',
    relatedPosts: ['perbedaan-cotton-combed'],
  },
  {
    id: '6',
    slug: 'bucket-hat',
    name: 'Bucket Hat',
    tag: 'Accessories',
    description: 'Pelindung sempurna untuk petualangan di bawah terik matahari.',
    price: 99000,
    image: '/images/products/bucket-hat.jpg',
    whatsappMessage: 'Halo Bale Explorer, saya mau order Bucket Hat',
    details:
      'Bucket hat dengan bahan polyester quick-dry. Ringkas, mudah dibawa, dan cocok untuk aktivitas outdoor.',
    relatedPosts: ['tips-mendaki-gunung-pemula'],
  },
];
