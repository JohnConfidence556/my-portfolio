import { grid } from '@/components/container'

export function SectionHeading({
  id,
  index,
  title,
  aside,
  dark = false,
}: {
  id: string
  index: string
  title: string
  aside?: string
  dark?: boolean
}) {
  return (
    <div
        className={`${grid} gap-y-4 border-t ${
          dark ? 'border-white/30' : 'border-foreground'
        } pb-10 pt-4 md:pb-16`}
      >
      <p className={`label col-span-4 md:col-span-1 ${dark ? 'text-[#F06423]' : ''}`}>
        {index}
      </p>


      <h2 id={id} className="col-span-4 text-5xl font-medium tracking-[-0.035em] md:col-span-7 md:text-7xl">
        {title}
      </h2>
      {aside ? (
        <p
          className={`col-span-4 text-pretty leading-relaxed md:col-span-4 md:col-start-9 md:pt-3 ${
            dark ? 'text-white/65' : 'text-muted-foreground'
          }`}
        >
          {aside}
        </p>
      ) : null}
    </div>
  )
}
