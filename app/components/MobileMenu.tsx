'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-text hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-border" style={{ background: 'var(--bg)' }}>
          <ul className="flex flex-col p-6 gap-4 list-none">
            <li>
              <Link
                href="/"
                className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline block py-2"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/etalase"
                className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline block py-2"
                onClick={() => setIsOpen(false)}
              >
                Etalase
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline block py-2"
                onClick={() => setIsOpen(false)}
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline block py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/kontak"
                className="text-text-muted text-sm font-medium uppercase tracking-widest no-underline block py-2"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
