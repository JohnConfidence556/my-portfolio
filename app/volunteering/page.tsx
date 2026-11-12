import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { PageHeader } from '@/components/page-header'
import { volunteering } from '@/lib/content'

export const metadata: Metadata = { title: 'Volunteering — John Confidence Bello' }

export default function VolunteeringPage() {
  return (
    <main>
      <PageHeader
        label="More"
        title="Volunteering & community"
        description="Communities I help run alongside my engineering work."
      />
      <Container className="flex flex-col py-12 md:py-16">
        {volunteering.map((item) => (
          <article
            key={item.community}
            className="grid gap-2 border-t border-border py-8 last:border-b md:grid-cols-12 md:gap-6"
          >
            <p className="font-mono text-xs text-muted-foreground md:col-span-2">{item.period}</p>
            <div className="md:col-span-4">
              <h2 className="text-xl font-medium tracking-tight">{item.community}</h2>
              <p className="text-accent">{item.role}</p>
            </div>
            <p className="text-pretty leading-relaxed text-muted-foreground md:col-span-6">{item.body}</p>
          </article>
        ))}
      </Container>
    </main>
  )
}