import { ArrowUpRight, Plus } from 'lucide-react'
import { Container, grid } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { projects, type Project } from '@/lib/content'

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-14 bg-[#171717] py-20 text-white md:py-28">
      <Container>
        <SectionHeading
          id="work-title"
          index="01"
          title="Selected work"
          aside="Three projects, each written up the same way: what it does, how it was built, what the numbers say, and where they stop."
          dark
        />
        <div className="border-t border-border">
          {projects.map((project, i) => (
            <ProjectEntry key={project.name} project={project} defaultOpen={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function ProjectEntry({ project, defaultOpen }: { project: Project; defaultOpen: boolean }) {
  return (
    <details open={defaultOpen} className="group border-b border-border">
      <summary className="flex cursor-pointer list-none items-start gap-4 py-6 md:grid md:grid-cols-12 md:items-baseline md:gap-x-6 md:py-8">
        <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-accent group-open:text-accent md:col-span-1">
          {project.index}
        </span>
        <span className="flex flex-1 flex-col gap-1 md:col-span-6">
          <span className="text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl">{project.name}</span>
          <span className="text-sm text-muted-foreground md:hidden">{project.kind}</span>
        </span>
        <span className="hidden text-muted-foreground md:col-span-4 md:block">{project.kind}</span>
        <span className="flex size-9 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-foreground md:col-span-1 md:justify-self-end md:self-center">
          <Plus aria-hidden className="size-4 transition-transform duration-300 group-open:rotate-45" />
          <span className="sr-only">Toggle details for {project.name}</span>
        </span>
      </summary>

      <div className={`${grid} gap-y-10 pb-12 md:pb-16`}>
        <div className="col-span-4 flex flex-col gap-8 md:col-span-6 md:col-start-2">
          <div className="flex flex-col gap-3">
            <p className="text-pretty text-2xl font-medium leading-tight tracking-tight md:text-3xl">{project.title}</p>
            <p className="text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="label">Approach</h3>
            <ol className="flex flex-col">
              {project.details.map((detail, i) => (
                <li key={i} className="flex gap-4 border-t border-border py-4 leading-relaxed">
                  <span className="font-mono text-xs text-muted-foreground pt-1">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-pretty">{detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-8 md:col-span-4 md:col-start-9">
          <div className="flex flex-col gap-4">
            <h3 className="label">Result</h3>
            <dl className="flex flex-col">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-4 border-t border-border py-3">
                  <dt className="label">{m.label}</dt>
                  <dd className="text-2xl font-medium tabular-nums tracking-tight md:text-3xl">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-3 border-l-2 border-accent pl-4">
            <h3 className="label">Limits</h3>
            <p className="text-pretty leading-relaxed">{project.note}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="label">Stack</h3>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s} className="border border-border px-2 py-1 font-mono text-xs">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-medium underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden className="size-3.5" />
                  <span className="sr-only">for {project.name} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  )
}
