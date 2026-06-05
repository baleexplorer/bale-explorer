import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/data/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-bg rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] no-underline"
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-bg-hover to-bg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-text group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-text-muted text-sm mb-4 leading-relaxed line-clamp-2">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent border border-accent/20 rounded-full"
              style={{ background: 'rgba(196,163,90,0.1)' }}
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
