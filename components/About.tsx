import { ArrowUpRight, Braces, Check, Cpu, Layers3, LifeBuoy, Terminal } from 'lucide-react'

const capabilities = [
  { icon: Cpu, title: 'Modern Engineering', text: 'Clean, deliberate systems built with tools that move the web forward.', accent: 'cyan' },
  { icon: Braces, title: 'Business-Focused Solutions', text: 'Technology shaped around the decisions, workflows, and outcomes that matter.', accent: 'blue' },
  { icon: Layers3, title: 'Scalable Architecture', text: 'A foundation that stays dependable as your team, traffic, and ambitions grow.', accent: 'purple' },
  { icon: LifeBuoy, title: 'Long-Term Support', text: 'A steady technical partner beyond launch, ready for the next iteration.', accent: 'green' },
]

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="page-shell">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">About the studio</p>
            <h2 id="about-title">A Software Partner Built for the <span className="text-gradient">Digital Future</span></h2>
            <p className="about-lede">Sunny Software Solutions helps ambitious teams turn complex ideas into calm, capable digital products.</p>
            <p className="about-body">We pair thoughtful product thinking with hands-on engineering to create software that is clear to use, resilient in production, and ready for what comes next. Our work sits at the intersection of business clarity and technical craft.</p>
            <a className="about-link" href="#contact">Meet your technical partner <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>

          <div className="about-visual" aria-label="Code-inspired architecture visual">
            <div className="about-code-card">
              <div className="about-code-bar"><span className="window-dots"><i /><i /><i /></span><span>sunny / architecture.ts</span><span className="about-live"><i /> stable</span></div>
              <div className="about-code-body">
                <div className="about-code-line"><span>01</span><b>const</b> <em>future</em> = <strong>build</strong>({`{`}</div>
                <div className="about-code-line indent"><span>02</span> clarity: <mark>true</mark>,</div>
                <div className="about-code-line indent"><span>03</span> systems: <mark>&apos;resilient&apos;</mark>,</div>
                <div className="about-code-line indent"><span>04</span> growth: <mark>&apos;ready&apos;</mark>,</div>
                <div className="about-code-line"><span>05</span>{`}`})</div>
                <div className="about-code-divider" />
                <div className="about-code-line output"><span>06</span><Check size={13} aria-hidden="true" /> shipped with intention</div>
              </div>
              <div className="about-code-footer"><Terminal size={13} aria-hidden="true" /> <span>systems online</span><span>3 layers connected</span></div>
            </div>
            <div className="about-orbit about-orbit-one" />
            <div className="about-orbit about-orbit-two" />
            <div className="about-visual-label about-label-top">01 / strategy → system</div>
            <div className="about-visual-label about-label-bottom">deploy with confidence</div>
          </div>
        </div>

        <div className="capabilities-grid" aria-label="Studio capabilities">
          {capabilities.map(({ icon: Icon, title, text, accent }) => (
            <article key={title} className={`capability-card capability-${accent}`}>
              <div className="capability-icon"><Icon size={17} aria-hidden="true" /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
