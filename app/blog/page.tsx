import { Metadata } from 'next';
import { getBlogPosts, getBlogPostsByTag } from '@/lib/data/blog';
import BlogCard from '@/app/components/BlogCard';
import ScrollReveal from '@/app/components/ScrollReveal';
import JsonLd from '@/app/components/JsonLd';

interface Props {
  searchParams: Promise<{ tag?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const tag = params.tag;

  return {
    title: tag ? `Blog: ${tag}` : 'Blog',
    description: 'Artikel seputar outdoor, hiking, dan gaya hidup petualangan.',
    alternates: {
      canonical: tag ? `/blog?tag=${tag}` : '/blog',
    },
  };
}

const blogListingLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Bale Explorer Blog',
  description: 'Artikel seputar outdoor, hiking, dan gaya hidup petualangan.',
  url: 'https://baleexplorer.com/blog',
};

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const tag = params.tag;
  const posts = tag ? getBlogPostsByTag(tag) : getBlogPosts();

  return (
    <>
      <JsonLd data={blogListingLd} />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <span className="block text-xs uppercase tracking-widest text-accent mb-4">Blog</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {tag ? `Tag: ${tag}` : 'Artikel & Cerita'}
              </h1>
              <p className="text-text-muted text-lg max-w-2xl">
                Tips, cerita, dan wawasan seputar outdoor, hiking, dan gaya hidup petualangan.
              </p>
            </div>
          </ScrollReveal>

          {posts.length === 0 ? (
            <p className="text-text-muted">Belum ada artikel untuk tag ini.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
