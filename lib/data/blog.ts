import fs from 'fs';
import path from 'path';

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  author: string;
  faq: { question: string; answer: string }[];
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'content/blog');

function unquote(value: string): string {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(raw: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const lines = raw.split('\n');
  let currentList: string[] | null = null;
  let inFaq = false;
  let faqItems: { question: string; answer: string }[] = [];
  let faqItem: { question: string; answer: string } | null = null;
  let currentFaqField: 'question' | 'answer' | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (inFaq) {
      if (trimmed.startsWith('- question:')) {
        if (currentFaqField === 'answer' && faqItem && faqItem.question && faqItem.answer) {
          faqItems.push(faqItem);
        }
        faqItem = { question: unquote(trimmed.slice('- question:'.length)), answer: '' };
        currentFaqField = 'question';
        continue;
      }
      if (trimmed.startsWith('- answer:') && currentFaqField === 'question' && faqItem) {
        faqItem.answer = unquote(trimmed.slice('- answer:'.length));
        currentFaqField = 'answer';
        continue;
      }
      if (currentFaqField === 'answer' && trimmed && !trimmed.startsWith('-')) {
        if (faqItem) {
          faqItem.answer = faqItem.answer ? `${faqItem.answer}\n${trimmed}` : trimmed;
        }
        continue;
      }
      if (trimmed === '' || trimmed.startsWith('#')) {
        if (currentFaqField === 'answer' && faqItem && faqItem.question && faqItem.answer) {
          faqItems.push(faqItem);
        }
        inFaq = false;
        currentFaqField = null;
        faqItem = null;
        if (faqItems.length > 0) {
          result.faq = faqItems;
        }
        faqItems = [];
      }
      continue;
    }

    if (trimmed.startsWith('faq:')) {
      inFaq = true;
      faqItems = [];
      faqItem = null;
      currentFaqField = null;
      continue;
    }

    if (trimmed.startsWith('- ') && currentList) {
      currentList.push(unquote(trimmed.slice(2)));
      continue;
    }

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    if (key === 'tags') {
      currentList = [];
      result[key] = currentList;
      currentList.push(unquote(value));
      continue;
    }

    if (key === 'faq') {
      inFaq = true;
      faqItems = [];
      faqItem = null;
      currentFaqField = null;
      currentList = null;
      continue;
    }

    result[key] = unquote(value);
    currentList = null;
  }

  if (inFaq && currentFaqField === 'answer' && faqItem && faqItem.question && faqItem.answer) {
    faqItems.push(faqItem);
  }
  if (faqItems.length > 0) {
    result.faq = faqItems;
  }

  return result;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory).filter((file) => file.endsWith('.mdx'));
  const posts: BlogPost[] = files
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/);

      const frontmatter = frontmatterMatch ? parseFrontmatter(frontmatterMatch[1]) : {};

      return {
        title: (frontmatter.title as string) || file.replace(/\.mdx$/, ''),
        slug: (frontmatter.slug as string) || file.replace(/\.mdx$/, ''),
        description: (frontmatter.description as string) || '',
        date: (frontmatter.date as string) || new Date().toISOString(),
        tags: (frontmatter.tags as string[]) || [],
        image: (frontmatter.image as string) || '/images/blog/default.jpg',
        author: (frontmatter.author as string) || 'Bale Explorer',
        faq: (frontmatter.faq as BlogPost['faq']) || [],
        content: source.replace(/^---\n[\s\S]*?\n---\n/, ''),
      };
    })
    .filter((post) => post.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getBlogPosts().filter((post) => post.tags.includes(tag));
}
