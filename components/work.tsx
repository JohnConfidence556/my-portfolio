import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/container'
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
          aside="A selection of some of my AI and machine learning projects."
          dark
        />
        <div className="mt-12 flex flex-col gap-20 md:mt-16 md:gap-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const live = project.links.find((link) => link.label === 'Live app')
  const host = live ? new URL(live.href).host : null
  
  return (
    <article
      className={`flex flex-col gap-8 md:items-center md:gap-14 ${flip ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {project.image && (
        <div className="md:w-7/12">
          <div className="overflow-hidden rounded-lg border border-border bg-[#0f0f0f] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border px-3 py-2">
              <span aria-hidden className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span aria-hidden className="size-2.5 rounded-full bg-[#febc2e]" />
              <span aria-hidden className="size-2.5 rounded-full bg-[#28c840]" />
              {host && (
                <span className="ml-3 truncate rounded bg-white/5 px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {host}
                </span>
              )}
            </div>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={1920}
              height={877}
              sizes="(min-width: 768px) 58vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      )}

      <div className={`flex flex-col gap-4 ${project.image ? 'md:w-5/12' : 'md:w-full'}`}>
        <p className="font-mono text-xs text-accent">{project.index}</p>
        <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">{project.name}</h3>
        <p className="font-medium text-accent">{project.kind}</p>
        <p className="text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li key={s} className="rounded border border-border px-2 py-1 font-mono text-xs">
              {s}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-3 pt-2">
          {project.links.map((link) => {
            const primary = link.label === 'Live app'
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded px-4 py-2 text-sm font-medium transition-colors ${
                    primary ? 'bg-accent text-black hover:opacity-90' : 'border border-border hover:border-white'
                  }`}
                >
                  {link.label}
                  <ArrowUpRight aria-hidden className="size-3.5" />
                  <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}