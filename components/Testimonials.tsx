import { Quote } from 'lucide-react'

const testimonials = [
  { quote: 'Sunny turned a complex internal workflow into a product our team actually enjoys using. The difference was visible in the first week.', name: 'Maya Chen', role: 'COO, Northstar Labs', accent: 'cyan' },
  { quote: 'They brought engineering discipline and commercial clarity to the same room. We launched with confidence, not compromises.', name: 'Andre Williams', role: 'Founder, Arcwell', accent: 'purple' },
  { quote: 'The team stayed thoughtful after launch, catching edge cases and helping us scale without turning every improvement into a rebuild.', name: 'Priya Nair', role: 'VP Product, Fieldnote', accent: 'green' },
]

export function Testimonials() {
  return <section id="testimonials" className="testimonials-section"><div className="page-shell"><div className="section-heading"><p className="eyebrow">Client signal</p><h2>Built with care. <span className="text-gradient">Trusted in practice.</span></h2><p>Original products, measurable progress, and partnerships that continue well beyond launch.</p></div><div className="testimonials-grid">{testimonials.map((item) => <article className={`testimonial-card testimonial-card-${item.accent}`} key={item.name}><Quote aria-hidden="true" className="testimonial-quote" size={24} /><p className="testimonial-copy">{item.quote}</p><footer><span className="testimonial-avatar" aria-hidden="true">{item.name.split(' ').map((part) => part[0]).join('')}</span><span><strong>{item.name}</strong><small>{item.role}</small></span></footer></article>)}</div></div></section>
}
