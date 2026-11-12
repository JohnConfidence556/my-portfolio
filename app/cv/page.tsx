import type { Metadata } from 'next'
import { Download, ExternalLink } from 'lucide-react'
import { Container } from '@/components/container'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = { title: 'CV — John Confidence Bello' }

const CV_PATH = '/John_Confidence_Bello_CV.pdf'

export default function CvPage() {
  return (
    <main>
      <PageHeader
        label="Curriculum vitae"
        title="John Confidence Bello"
        description="AI/ML engineer. Read the CV here or download a copy."
      />
      <Container className="py-10 md:py-14">
        <div className="mb-6 flex flex-wrap gap-3">
          <a
            href={CV_PATH}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground"
          >
            <ExternalLink aria-hidden className="size-4" />
            Open in new tab
          </a>
          <a
            href={CV_PATH}
            download
            className="inline-flex items-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Download aria-hidden className="size-4" />
            Download
          </a>
        </div>
        <object data={CV_PATH} type="application/pdf" className="h-[80vh] w-full border border-border">
          <p className="p-6 text-muted-foreground">
            Your browser can’t show the PDF here.{' '}
            <a href={CV_PATH} target="_blank" rel="noreferrer" className="underline">
              Open it in a new tab
            </a>
            .
          </p>
        </object>
      </Container>
    </main>
  )
}