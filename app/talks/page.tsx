import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/container'
import { PageHeader } from '@/components/page-header'
import { talks } from '@/lib/content'

export const metadata: Metadata = { title: 'Talks — John Confidence Bello' }

export default function TalksPage() {
  return (
    <main>
      <PageHeader
        label="Talks"
        title="Spotlight talks"
        description="Panels, workshops and public speaking."
      />
      <Container className="flex flex-col gap-6 py-12 md:py-16">
        {talks.map((talk) => (
          <article key={talk.title} className="flex flex-col gap-4 border border-border p-6 md:p-8">
            <p className="font-mono text-xs text-accent">
              {talk.event} · {talk.date}
            </p>
            <h2 className="text-pretty text-2xl font-medium tracking-tight md:text-3xl">{talk.title}</h2>
            <p className="text-sm text-muted-foreground">{talk.format}</p>
            <p className="text-pretty leading-relaxed text-muted-foreground">{talk.description}</p>
            <ul className="flex flex-wrap gap-1.5">
              {talk.tags.map((tag) => (
                <li key={tag} className="border border-border px-2 py-1 font-mono text-xs">
                  {tag}
                </li>
              ))}
            </ul>
            {talk.links.length > 0 && (
              <ul className="flex flex-wrap gap-3 pt-2">
                {talk.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </Container>
    </main>
  )
}