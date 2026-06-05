import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/data/blog';
import JsonLd from '@/app/components/JsonLd';
import ScrollReveal from '@/app/components/ScrollReveal';
import { Calendar, Tag } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Artikel Tidak Ditemukan' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://baleexplorer.com${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bale Explorer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://baleexplorer.com/images/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://baleexplorer.com/blog/${post.slug}`,
    },
  };

  const faqLd = post.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <ScrollReveal>
            <nav className="mb-8 text-sm text-text-muted">
              <Link href="/blog" className="hover:text-accent transition-colors no-underline text-text-muted">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-text">{post.title}</span>
            </nav>
          </ScrollReveal>

          <ScrollReveal>
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
              <p className="text-text-muted text-lg mb-6">{post.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Tag size={14} />
                  {post.tags.join(', ')}
                </span>
              </div>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-invert max-w-none">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-border">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="text-text-muted leading-relaxed space-y-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-text [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-text [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-muted"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </ScrollReveal>

          {post.faq.length > 0 && (
            <ScrollReveal delay={0.15}>
              <div className="mt-16 p-8 rounded-2xl border border-border bg-bg-card">
                <h2 className="text-2xl font-bold mb-6">FAQ — Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faq.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold mb-2">{item.question}</h3>
                      <p className="text-text-muted leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.2}>
            <div className="mt-16 pt-8 border-t border-border">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors no-underline text-sm font-medium"
              >
                ← Kembali ke Blog
              </Link>
            </div>
          </ScrollReveal>
        </article>
      </main>
    </>
  );
}
