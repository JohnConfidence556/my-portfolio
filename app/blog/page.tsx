import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/container'
import { PageHeader } from '@/components/page-header'
import { posts } from '@/lib/content'

export const metadata: Metadata = { title: 'Blog — John Confidence Bello' }

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        label="Blog"
        title="Blog & writing"
        description="Long-form projects and notes on Python, AI engineering and what I’m learning. More to come."
      />
      <Container className="grid gap-6 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.href} className="flex flex-col gap-4 border border-border p-6">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="border border-border px-2 py-1">{post.source}</span>
              <span className="text-accent">{post.status}</span>
            </div>
            <h2 className="text-xl font-medium tracking-tight">{post.title}</h2>
            <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">{post.description}</p>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Read on {post.source}
              <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          </article>
        ))}
      </Container>
    </main>
  )
}