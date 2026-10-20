import { Container } from '@/components/container'
import { contact } from '@/lib/content'

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#method', label: 'Method' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex size-9 items-center justify-center bg-accent font-mono text-xs font-medium tracking-tight text-accent-foreground md:size-10"
          >
            JB
          </span>
          <span className="text-base font-semibold tracking-tight md:text-lg">John Bello</span>
        </a>

        <div className="flex items-center gap-8">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <span aria-hidden className="hidden h-8 w-px bg-border md:block" />
          <a
            href={`mailto:${contact.email}`}
            className="text-sm font-medium underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Email me
          </a>
        </div>
      </Container>
    </header>
  )
}
