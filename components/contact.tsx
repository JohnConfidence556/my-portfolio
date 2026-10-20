import { ArrowUpRight } from 'lucide-react'
import { Container, grid } from '@/components/container'
import { contact } from '@/lib/content'

const links = [
  { label: 'GitHub', href: contact.github },
  { label: 'LinkedIn', href: contact.linkedin },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-14 bg-foreground text-background">
      <Container className="pb-10 pt-20 md:pt-28">
        <div className={`${grid} gap-y-6`}>
          <p className="label col-span-4 !text-background/60 md:col-span-1">05</p>
          <h2 id="contact-title" className="col-span-4 text-pretty text-3xl font-medium leading-tight tracking-tight md:col-span-7 md:text-4xl">
            Working on something where the model has to be useful, not just accurate? I&apos;d like to hear about it.
          </h2>
        </div>

        <a
          href={`mailto:${contact.email}`}
          className="group mt-16 flex items-end justify-between gap-4 border-b border-background/25 pb-4 transition-colors hover:border-accent md:mt-24"
        >
          <span className="break-all text-[clamp(1.5rem,7vw,7.25rem)] font-medium leading-none tracking-[-0.04em] transition-colors group-hover:text-accent">
            {contact.email}
          </span>
          <ArrowUpRight aria-hidden className="mb-1 size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:size-10" />
        </a>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium underline decoration-background/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {l.label}
                  <ArrowUpRight aria-hidden className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#top" className="label !text-background/60 hover:!text-background">
            Back to top
          </a>
        </div>

        <footer className="mt-20 flex flex-col justify-between gap-2 border-t border-background/15 pt-6 md:flex-row">
          <p className="label !text-background/50">John Confidence Bello</p>
          <p className="label !text-background/50">AI/ML Engineer</p>
        </footer>
      </Container>
    </section>
  )
}
