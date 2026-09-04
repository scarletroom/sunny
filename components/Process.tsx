import { ArrowRight, Compass, Hammer, Rocket, Sparkles } from 'lucide-react'

const steps = [
  { number: '01', title: 'Discover', description: 'We map the opportunity, users, constraints, and success signals before a single screen is designed.', icon: Compass, tone: 'cyan' },
  { number: '02', title: 'Design', description: 'We turn the strategy into a clear system of flows, interfaces, and decisions your team can trust.', icon: Sparkles, tone: 'blue' },
  { number: '03', title: 'Build', description: 'We engineer the product in focused milestones, with clean code, visible progress, and rigorous QA.', icon: Hammer, tone: 'purple' },
  { number: '04', title: 'Launch', description: 'We ship with confidence, measure what matters, and stay close as the product grows in the real world.', icon: Rocket, tone: 'green' },
]

export function Process() {
  return (
    <section id="process" className="process-section" aria-labelledby="process-title">
      <div className="page-shell">
        <div className="section-heading process-heading">
          <p className="eyebrow">How we work</p>
          <h2 id="process-title">A Proven <span className="text-gradient">4-Step Process</span></h2>
          <p>Transparent milestones, thoughtful decisions, and momentum from the first conversation to launch day.</p>
        </div>
        <div className="process-timeline">
          {steps.map(({ number, title, description, icon: Icon, tone }, index) => (
            <div className={`process-step process-step-${tone}`} key={title}>
              <div className="process-node-wrap">
                <div className="process-node"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></div>
                {index < steps.length - 1 && <span className="process-connector" aria-hidden="true"><i /></span>}
              </div>
              <div className="process-copy">
                <p className="process-number">{number}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              {index < steps.length - 1 && <ArrowRight className="process-arrow" size={18} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
