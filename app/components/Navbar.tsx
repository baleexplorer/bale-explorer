import Link from 'next/link';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border" style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="brand text-xl font-bold tracking-tight text-text no-underline">
          Bale<span className="text-accent">.</span>Explorer
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              href="/"
              className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline transition-colors hover:text-text"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/etalase"
              className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline transition-colors hover:text-text"
            >
              Etalase
            </Link>
          </li>
          <li>
            <Link
              href="/tentang"
              className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline transition-colors hover:text-text"
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline transition-colors hover:text-text"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/kontak"
              className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline transition-colors hover:text-text"
            >
              Kontak
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
