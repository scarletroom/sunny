import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  MoreHorizontal,
  PackageCheck,
  ShoppingBag,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Industry {
  name: string
  note: string
  icon: LucideIcon
  accent: 'cyan' | 'blue' | 'purple' | 'green'
}

const industries: Industry[] = [
  { name: 'Finance', note: 'Clearer decisions', icon: Landmark, accent: 'cyan' },
  { name: 'Healthcare', note: 'Better connected care', icon: HeartPulse, accent: 'green' },
  { name: 'Retail', note: 'Experiences that convert', icon: ShoppingBag, accent: 'purple' },
  { name: 'Logistics', note: 'Operations in motion', icon: PackageCheck, accent: 'blue' },
  { name: 'Education', note: 'Learning, simplified', icon: GraduationCap, accent: 'cyan' },
  { name: 'Real Estate', note: 'Property made discoverable', icon: Building2, accent: 'purple' },
  { name: 'Manufacturing', note: 'Less friction, more output', icon: Factory, accent: 'green' },
  { name: 'Professional Services', note: 'Expertise at scale', icon: MoreHorizontal, accent: 'blue' },
]

export function Industries() {
  return (
    <section className="industries-section" id="industries" aria-labelledby="industries-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Where we work</p>
          <h2 id="industries-title">Built for the way your <span className="text-gradient">industry moves.</span></h2>
          <p>Domain context makes better software. We learn the constraints, language, and moments that matter in your world.</p>
        </div>
        <div className="industries-grid">
          {industries.map((industry) => <IndustryCard key={industry.name} industry={industry} />)}
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon
  return (
    <a className={`industry-card industry-card-${industry.accent}`} href="#contact">
      <span className="industry-icon"><Icon aria-hidden="true" size={20} strokeWidth={1.7} /></span>
      <span className="industry-copy"><strong>{industry.name}</strong><small>{industry.note}</small></span>
      <span className="industry-arrow" aria-hidden="true">↗</span>
    </a>
  )
}
