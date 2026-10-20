import Image from 'next/image'
import { portrait } from '@/lib/content'

export function Portrait() {
  return (
    <figure className="relative pb-4 pl-0 pr-4 pt-4 md:pb-5 md:pr-5 md:pt-5">
      <span
        aria-hidden
        className="absolute left-[-0.75rem] top-0 size-24 border border-foreground/70 md:left-[-1.25rem] md:size-32"
      />
      <span aria-hidden className="absolute bottom-0 left-6 right-0 top-10 bg-accent md:left-8 md:top-14" />

      <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
        {portrait.src ? (
          <Image
            src={portrait.src || '/placeholder.svg'}
            alt={portrait.alt}
            fill
            priority
            sizes="(min-width: 768px) 38vw, 80vw"
            className="scale-[1.12] object-cover object-[51%_30%]"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-4">
            <span className="label">Portrait to be added</span>
          </div>
        )}
        <span aria-hidden className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
      </div>
    </figure>
  )
}
