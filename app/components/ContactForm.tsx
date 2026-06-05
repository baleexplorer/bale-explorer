'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function ContactForm() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [orderProduk, setOrderProduk] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama, email, pesan, orderProduk }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ success: false, message: data.message || 'Terjadi kesalahan.' });
      } else {
        setStatus({ success: true, message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.' });
        setNama('');
        setEmail('');
        setPesan('');
        setOrderProduk(false);
      }
    } catch {
      setStatus({ success: false, message: 'Terjadi kesalahan jaringan. Coba lagi nanti.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} className="space-y-6">
        {status && (
          <div
            className={`flex items-start gap-3 p-4 rounded-xl border ${
              status.success
                ? 'border-green-500/30 bg-green-500/10 text-green-400'
                : 'border-red-500/30 bg-red-500/10 text-red-400'
            }`}
          >
            {status.success ? <CheckCircle2 size={20} className="mt-0.5 shrink-0" /> : <AlertCircle size={20} className="mt-0.5 shrink-0" />}
            <p className="text-sm leading-relaxed">{status.message}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nama" className="block text-sm font-medium mb-2">
              Nama <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              className="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
              placeholder="Nama kamu"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
              placeholder="email@contoh.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="pesan" className="block text-sm font-medium mb-2">
            Pesan / Order Detail <span className="text-accent">*</span>
          </label>
          <textarea
            id="pesan"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            rows={6}
            required
            className="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-y"
            placeholder="Tulis pesan atau detail order kamu..."
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="orderProduk"
            checked={orderProduk}
            onChange={(e) => setOrderProduk(e.target.checked)}
            className="w-4 h-4 rounded border-border bg-bg-card accent-accent"
          />
          <label htmlFor="orderProduk" className="text-sm text-text-muted">
            Saya mau order produk
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-bg py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(196,163,90,0.2)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2 border-none cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Mengirim...
            </>
          ) : (
            'Kirim Pesan'
          )}
        </button>
      </form>
    </ScrollReveal>
  );
}
