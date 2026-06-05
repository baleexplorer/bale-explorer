'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Terjadi kesalahan!</h2>
        <p className="text-text-muted mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-bg rounded-full font-semibold text-sm uppercase tracking-wide border-none cursor-pointer hover:bg-accent-hover transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
