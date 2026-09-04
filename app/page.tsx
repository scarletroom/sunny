import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Services } from '@/components/Services'
import { Results } from '@/components/Results'
import { Industries } from '@/components/Industries'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Industries />
      </main>
    </>
  )
}
