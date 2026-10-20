import { cn } from '@/lib/utils'

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12', className)}>{children}</div>
}

export const grid = 'grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-6'
