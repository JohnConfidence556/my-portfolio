'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Container } from '@/components/container'
import { contact } from '@/lib/content'

const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#method', label: 'Method' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/talks', label: 'Talks' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'CV' },
]

const more = [
  { href: '/certifications', label: 'Certifications' },
  { href: '/volunteering', label: 'Volunteering' },
]

const contactItem = { href: '/#contact', label: 'Contact' }
const mobileItems = [...nav, ...more, contactItem]

const linkClass = 'text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground'

export function SiteHeader() {
  const [moreOpen, setMoreOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => {
    setMoreOpen(false)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" onClick={close} className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex size-9 items-center justify-center bg-accent font-mono text-xs font-medium tracking-tight text-accent-foreground md:size-10"
          >
            JB
          </span>
          <span className="text-base font-semibold tracking-tight md:text-lg">John Bello</span>
        </Link>

        <div className="flex items-center gap-6 xl:gap-8">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((open) => !open)}
                  aria-expanded={moreOpen}
                  className={`${linkClass} inline-flex items-center gap-1`}
                >
                  More
                  <ChevronDown
                    aria-hidden
                    className={`size-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {moreOpen && (
                  <ul className="absolute right-0 top-full mt-4 min-w-48 border border-border bg-background p-2 shadow-lg">
                    {more.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="block px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href={contactItem.href} onClick={close} className={linkClass}>
                  {contactItem.label}
                </Link>
              </li>
            </ul>
          </nav>

          <span aria-hidden className="hidden h-8 w-px bg-border lg:block" />

          <a
            href={`mailto:${contact.email}`}
            className="text-sm font-medium underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Email me
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden"
          >
            {menuOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <Container>
            <ul className="flex flex-col py-2">
              {mobileItems.map((item) => (
                <li key={item.href} className="border-b border-border last:border-0">
                  <Link href={item.href} onClick={close} className="block py-3 text-base">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  )
}