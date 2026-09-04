import {
  Bot,
  Cloud,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  Smartphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: LucideIcon
  accent: 'cyan' | 'blue' | 'green' | 'purple' | 'amber'
  tags: string[]
}

const services: Service[] = [
  { title: 'Custom Software Development', description: 'Purpose-built platforms that turn complex operations into clear, reliable workflows.', icon: Code2, accent: 'cyan', tags: ['Web apps', 'APIs', 'Dashboards'] },
  { title: 'Web Development', description: 'Fast, conversion-ready websites engineered for a confident first impression.', icon: Globe2, accent: 'blue', tags: ['Next.js', 'SEO', 'CMS'] },
  { title: 'Mobile App Development', description: 'Focused mobile experiences that feel native, useful, and effortless to use.', icon: Smartphone, accent: 'amber', tags: ['iOS', 'Android', 'React Native'] },
  { title: 'Business Automation', description: 'Connect the tools you already use and remove repetitive work from the day.', icon: Gauge, accent: 'green', tags: ['Workflows', 'Integrations', 'RPA'] },
  { title: 'AI & Intelligent Solutions', description: 'Practical AI features that help teams search, decide, create, and move faster.', icon: Bot, accent: 'purple', tags: ['AI agents', 'RAG', 'Automation'] },
  { title: 'Cloud Solutions', description: 'Secure, observable cloud foundations built to scale with your ambition.', icon: Cloud, accent: 'cyan', tags: ['AWS', 'Infrastructure', 'DevOps'] },
  { title: 'Digital Transformation', description: 'A clear path from disconnected systems to a modern, measurable operation.', icon: Layers3, accent: 'blue', tags: ['Strategy', 'Systems', 'Enablement'] },
]

export function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2 id="services-title">Everything you need to <span className="text-gradient">move forward.</span></h2>
          <p>From the first sketch to the systems that run your business, we bring strategy, design, and engineering into one focused team.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className={`service-card service-card-${service.accent}`}>
      <div className="service-card-top">
        <div className="service-icon"><Icon aria-hidden="true" size={19} strokeWidth={1.8} /></div>
        <span className="service-index">{String(services.indexOf(service) + 1).padStart(2, '0')}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="service-tags" aria-label={`${service.title} specialties`}>
        {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <a className="service-link" href="#contact">Explore service <span aria-hidden="true">↗</span></a>
    </article>
  )
}
