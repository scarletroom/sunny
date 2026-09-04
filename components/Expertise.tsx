import { ArrowUpRight, Check, Code2, ShieldCheck } from 'lucide-react'

const capabilities = [
  { title: 'Product engineering', text: 'From first architecture decision to production release, we keep the build clear and maintainable.', icon: Code2 },
  { title: 'Systems thinking', text: 'We connect product, operations, and data so each improvement compounds across the business.', icon: ShieldCheck },
]

export function Expertise() {
  return (
    <section className="expertise-section" aria-labelledby="expertise-title">
      <div className="page-shell">
        <div className="section-heading expertise-heading">
          <p className="eyebrow">Expertise</p>
          <h2 id="expertise-title">Engineered with <span className="text-gradient">intent.</span></h2>
          <p>Strong software is more than a stack. It is the right decisions, made visible and carried through.</p>
        </div>
        <div className="expertise-grid">
          <div className="expertise-panel">
            <div className="expertise-panel-head"><span className="window-dots"><i /><i /><i /></span><span>sunny / principles.ts</span><span className="expertise-live">● synced</span></div>
            <div className="expertise-code">
              <p><span>01</span><b>const</b> <em>standard</em> = {'{'}</p>
              <p className="indent"><span>02</span>clarity: <strong>true</strong>,</p>
              <p className="indent"><span>03</span>quality: <strong>'non-negotiable'</strong>,</p>
              <p className="indent"><span>04</span>systems: <strong>'built to compound'</strong>,</p>
              <p><span>05</span>{'}'} <b>as const</b></p>
              <div className="expertise-rule" />
              <p className="expertise-output"><span>06</span><Check size={14} aria-hidden="true" /> Ready for the next iteration.</p>
            </div>
          </div>
          <div className="expertise-cards">
            {capabilities.map(({ title, text, icon: Icon }) => <article className="expertise-card" key={title}><span className="expertise-icon"><Icon size={18} aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="expertise-arrow" size={16} aria-hidden="true" /></article>)}
          </div>
        </div>
      </div>
    </section>
  )
}
