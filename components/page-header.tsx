import { Container } from '@/components/container'

export function PageHeader({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <div className="border-b border-border py-16 md:py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{label}</p>
        <h1 className="mt-4 text-pretty text-4xl font-medium tracking-[-0.03em] md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      </Container>
    </div>
  )
}