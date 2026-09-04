import type { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'
import { SiteFooter, SunnyBot } from '@/components/FinalSections'

export function InternalPage({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="internal-page">
        <section className="internal-hero">
          <div className="page-shell">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
      <SunnyBot />
    </>
  )
}

export function PageBand({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`internal-band ${className}`}><div className="page-shell">{children}</div></section>
}
