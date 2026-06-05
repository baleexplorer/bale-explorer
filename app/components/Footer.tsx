import Link from 'next/link';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 text-center">
      <div className="brand text-2xl font-bold mb-3 inline-block">
        Bale<span className="text-accent">.</span>Explorer
      </div>
      <p className="text-text-muted text-sm mb-8">Built for the wild, made for everyday.</p>

      <div className="flex justify-center gap-8 mb-8">
        <Link
          href="https://instagram.com/bale.explorer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors no-underline flex items-center gap-2 text-sm"
        >
          <Instagram size={16} />
          Instagram
        </Link>
        <Link
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors no-underline flex items-center gap-2 text-sm"
        >
          <MessageCircle size={16} />
          WhatsApp
        </Link>
        <Link
          href="mailto:hello@baleexplorer.com"
          className="text-text-muted hover:text-accent transition-colors no-underline flex items-center gap-2 text-sm"
        >
          <Mail size={16} />
          Email
        </Link>
      </div>

      <p className="text-text-muted text-xs">© 2026 Bale Explorer. All rights reserved.</p>
    </footer>
  );
}
