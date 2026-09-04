import { ArrowUpRight, CircleCheck } from 'lucide-react'

const outcomes = [
  { value: '42%', label: 'faster delivery', detail: 'Average reduction in time from approved idea to production release.', accent: 'cyan' },
  { value: '3.6×', label: 'more qualified leads', detail: 'A clearer digital experience turns attention into meaningful conversations.', accent: 'blue' },
  { value: '18 hrs', label: 'saved per week', detail: 'Automations remove repetitive handoffs so teams can focus on higher-value work.', accent: 'green' },
  { value: '99.9%', label: 'platform uptime', detail: 'Reliable foundations keep customer-facing systems ready when demand arrives.', accent: 'purple' },
]

const signals = ['Measured before launch', 'Built for adoption', 'Designed to compound']

export function Results() {
  return (
    <section className="results-section" id="results" aria-labelledby="results-title">
      <div className="page-shell">
        <div className="results-intro">
          <div>
            <p className="eyebrow">The signal</p>
            <h2 id="results-title">Good work should show up in the <span className="text-gradient">numbers.</span></h2>
          </div>
          <p>We pair thoughtful software with the metrics that matter—so progress is visible to your team, your customers, and your bottom line.</p>
        </div>
        <div className="outcomes-grid">
          {outcomes.map((outcome) => (
            <article className={`outcome-card outcome-card-${outcome.accent}`} key={outcome.value}>
              <p className="outcome-value">{outcome.value}</p>
              <h3>{outcome.label}</h3>
              <p className="outcome-detail">{outcome.detail}</p>
            </article>
          ))}
        </div>
        <div className="results-footer">
          <div className="signal-list" aria-label="Our approach">
            {signals.map((signal) => <span key={signal}><CircleCheck aria-hidden="true" size={14} />{signal}</span>)}
          </div>
          <a className="results-link" href="#contact">See how we measure impact <ArrowUpRight aria-hidden="true" size={15} /></a>
        </div>
      </div>
    </section>
  )
}
