import { InternalPage, PageBand } from '@/components/InternalPage'
import { FAQ } from '@/components/FAQ'

export default function FAQPage() {
  return <InternalPage eyebrow="FAQ" title="Clear answers before we build" description="A few practical answers about collaboration, timelines, custom software, and the support that follows launch."><PageBand><FAQ /></PageBand></InternalPage>
}
