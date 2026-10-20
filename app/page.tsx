import { Method } from '@/components/about'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'
import { Work } from '@/components/work'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <Method />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </>
  )
}
