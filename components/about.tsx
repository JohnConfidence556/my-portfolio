import { Container, grid } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { principles } from '@/lib/content'

export function Method() {
  return (
    <section id="method" aria-labelledby="method-title" className="scroll-mt-14 py-20 md:py-28">
      <Container>
        <SectionHeading
          id="method-title"
          index="02"
          title="How I work"
          aside="A few habits that show up across everything I build, whatever the model or stack."
        />
        <ol className={`${grid} gap-y-12`}>
          {principles.map((p, i) => (
            <li key={p.title} className="col-span-4 flex flex-col gap-4 border-t border-border pt-5">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-pretty text-2xl font-medium leading-tight tracking-tight">{p.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
