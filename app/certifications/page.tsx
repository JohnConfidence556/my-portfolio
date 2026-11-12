import type { Metadata } from 'next'
import { Award } from 'lucide-react'
import { Container } from '@/components/container'
import { PageHeader } from '@/components/page-header'
import { learning } from '@/lib/content'

export const metadata: Metadata = { title: 'Certifications — John Confidence Bello' }

export default function CertificationsPage() {
  return (
    <main>
      <PageHeader
        label="More"
        title="Certifications & trainings"
        description="Programs and courses I’ve taken to build my AI and data skills."
      />
      <Container className="grid gap-4 py-12 md:grid-cols-2 md:py-16">
        {learning.map((item) => (
          <article key={item.title} className="flex gap-4 border border-border p-5">
            <span className="flex size-10 shrink-0 items-center justify-center bg-accent/10 text-accent">
              <Award aria-hidden className="size-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-medium leading-snug">{item.title}</h2>
              <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
            </div>
          </article>
        ))}
      </Container>
    </main>
  )
}