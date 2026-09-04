import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Services } from '@/components/Services'
import { Results } from '@/components/Results'
import { Industries } from '@/components/Industries'
import { Projects } from '@/components/Projects'
import { Process } from '@/components/Process'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Industries />
        <Projects />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
      </main>
    </>
  )
}
