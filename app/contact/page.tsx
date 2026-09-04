import { InternalPage, PageBand } from '@/components/InternalPage'
import { Contact } from '@/components/FinalSections'

export default function ContactPage() {
  return <InternalPage eyebrow="Start a conversation" title="Let’s build something useful" description="Bring us the challenge, the rough idea, or the system that has outgrown its current shape. We’ll help map the next right step."><PageBand><Contact /></PageBand></InternalPage>
}
