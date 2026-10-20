import { Container, grid } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { education, experience, learning } from '@/lib/content'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-14 py-20 md:py-28">
      <Container>
        <SectionHeading
          id="experience-title"
          index="03"
          title="Experience"
          aside="From a mechanical engineering degree to leading AI products and teams. The log, newest first."
        />

        <ol className="border-t border-border">
          {experience.map((item) => (
            <li key={item.org} className={`${grid} gap-y-3 border-b border-border py-8`}>
              <p className="label col-span-4 md:col-span-3 md:pt-1.5">{item.period}</p>
              <div className="col-span-4 flex flex-col gap-0.5">
                <h3 className="text-xl font-medium tracking-tight">{item.role}</h3>
                <p className="text-muted-foreground">{item.org}</p>
              </div>
              <p className="col-span-4 text-pretty leading-relaxed text-muted-foreground md:col-span-5">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className={`${grid} mt-16 gap-y-10`}>
          <div className="col-span-4 flex flex-col gap-4 md:col-span-5 md:col-start-4">
            <h3 className="label">Education</h3>
            {education.map((e) => (
              <div key={e.title} className="flex flex-col gap-1 border-t border-border pt-4">
                <p className="font-medium">{e.title}</p>
                <p className="text-sm text-muted-foreground">
                  {e.org}, {e.period}
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-4 flex flex-col gap-4">
            <h3 className="label">Programmes</h3>
            <ul className="flex flex-col">
              {learning.map((l) => (
                <li key={l.title} className="flex flex-col gap-1 border-t border-border py-3">
                  <span className="text-sm">{l.title}</span>
                  <span className="label">{l.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
