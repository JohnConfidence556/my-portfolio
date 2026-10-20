import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Container, grid } from '@/components/container'
import { Portrait } from '@/components/portrait'
import { contact } from '@/lib/content'

const focus = ['Azure',
  'Machine Learning',
  'Generative AI',
  'RAG & AI Agents',
  'Computer Vision',
  'FastAPI',
]

const socials = [
  { href: contact.github, label: 'GitHub', Icon: GithubIcon },
  { href: contact.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
]

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [background-position:-1px_-1px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-background/75" />

      <Container className="relative">
        <div className={`${grid} items-center gap-y-14 py-14 md:min-h-[calc(100svh-5rem)] md:py-20`}>
          <div className="order-2 col-span-4 flex flex-col md:order-1 md:col-span-7">
            <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.28em] text-accent">
              <span aria-hidden className="h-px w-10 bg-accent md:w-14" />
              AI / ML Engineer <span aria-hidden>·</span> Nigeria
            </p>

            <h1
              id="hero-title"
              className="mt-7 text-[clamp(3.25rem,6.6vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.04em]"
            >
              John Confidence <span className="text-accent">Bello</span>
            </h1>

            <p className="mt-8 max-w-[34ch] text-pretty text-2xl font-medium leading-[1.2] tracking-tight md:mt-10 md:text-[2rem]">
              I’m an AI/ML Engineer, I build practical AI systems that turn data and models into useful applications.
            </p>

            <p className="mt-5 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              I work across Machine learning, Generative AI, Agents and Computer Vision, building everything from 
              predictive models and RAG pipelines to AI-powered applications and APIs.
              My focus is on taking AI projects beyond experimentation into functional and deployable systems.
            </p>

            <ul aria-label="Focus areas" className="mt-8 flex flex-wrap gap-2">
              {focus.map((item) => (
                <li
                  key={item}
                  className="border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex h-13 items-center gap-3 bg-accent px-7 text-[0.9375rem] font-medium text-accent-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                View projects
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-13 items-center gap-3 border border-foreground bg-background px-7 text-[0.9375rem] font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <Mail aria-hidden className="size-4" />
                Get in touch
              </a>

              <ul className="ml-1 flex items-center gap-1 sm:ml-3">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-accent"
                    >
                      <Icon className="size-5" />
                      <span className="sr-only">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 col-span-4 mx-auto w-full max-w-sm pl-3 md:order-2 md:col-span-5 md:col-start-8 md:max-w-none md:pl-5 lg:col-span-4 lg:col-start-9">
            <Portrait />
          </div>
        </div>
      </Container>
    </section>
  )
}
