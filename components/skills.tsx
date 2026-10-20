import { Container, grid } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/lib/content'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-14 py-20 md:py-28">
      <Container>
        <SectionHeading id="skills-title" index="04" title="Toolkit" aside="Python first. These are the tools behind the projects above." />
        <dl className="border-t border-border">
          {skills.map((s, i) => (
            <div key={s.group} className={`${grid} gap-y-2 border-b border-border py-5`}>
              <dt className="col-span-4 flex items-baseline gap-4 md:col-span-3">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-medium">{s.group}</span>
              </dt>
              <dd className="col-span-4 text-pretty leading-relaxed text-muted-foreground md:col-span-8 md:col-start-5">
                {s.items.map((item, j) => (
                  <span key={item}>
                    <span className="text-foreground">{item}</span>
                    {j < s.items.length - 1 ? (
                      <span aria-hidden className="px-2 text-border">
                        /
                      </span>
                    ) : null}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
