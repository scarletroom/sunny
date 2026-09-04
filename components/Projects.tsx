import { ArrowUpRight, BarChart3, BriefcaseBusiness, Building2, GraduationCap, HeartPulse, Landmark, Truck } from 'lucide-react'

const projects = [
  { name: 'FinFlow', category: 'FINTECH PLATFORM', description: 'A treasury command center that helps finance teams forecast cash, spot risk, and move faster.', tags: ['Next.js', 'Postgres', 'Charts'], accent: 'cyan', icon: Landmark, metric: '$2.4M', metricLabel: 'managed volume' },
  { name: 'MedConnect', category: 'HEALTHCARE OPERATIONS', description: 'A calmer way for clinics to coordinate care, appointments, and patient follow-up in one place.', tags: ['React', 'Node.js', 'HIPAA-ready'], accent: 'green', icon: HeartPulse, metric: '18k', metricLabel: 'care records' },
  { name: 'MarketHub', category: 'RETAIL ANALYTICS', description: 'Inventory intelligence for multi-location retailers that turns daily signals into clear action.', tags: ['TypeScript', 'SQL', 'Realtime'], accent: 'purple', icon: BarChart3, metric: '+32%', metricLabel: 'conversion lift' },
  { name: 'FleetTrack', category: 'LOGISTICS CONTROL', description: 'Live fleet visibility for operators who need fewer blind spots between dispatch and delivery.', tags: ['Maps', 'Edge APIs', 'Mobile'], accent: 'blue', icon: Truck, metric: '96.8%', metricLabel: 'on-time rate' },
  { name: 'EduCore', category: 'EDUCATION SUITE', description: 'A focused learning workspace that connects curriculum, progress, and the people supporting it.', tags: ['Next.js', 'AI workflows', 'SaaS'], accent: 'cyan', icon: GraduationCap, metric: '4.7x', metricLabel: 'faster reporting' },
  { name: 'BusinessOS', category: 'OPERATIONS SYSTEM', description: 'A unified operating layer for teams ready to replace spreadsheet sprawl with useful software.', tags: ['React', 'Automation', 'Cloud'], accent: 'green', icon: BriefcaseBusiness, metric: '11 hrs', metricLabel: 'saved / week' },
]

function DashboardPreview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`project-preview preview-${project.accent}`} aria-hidden="true">
      <div className="mockup-topbar"><span className="mockup-dots"><i /><i /><i /></span><span className="mockup-route">/ dashboard / overview</span><span className="mockup-signal" /></div>
      <div className="mockup-body">
        <div className="mockup-sidebar"><span /><span /><span /><span /><span /></div>
        <div className="mockup-content"><div className="mockup-heading"><span /><b /><b /></div><div className="mockup-kpis"><span /><span /><span /></div><div className="mockup-chart"><span className="chart-line" /><span className="chart-line chart-line-two" /><i /><i /><i /><i /><i /></div></div>
      </div>
    </div>
  )
}

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon
  return <article className={`project-card project-card-${project.accent}`}>
    <DashboardPreview project={project} />
    <div className="project-card-body">
      <div className="project-card-heading"><div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div><div className="project-icon"><Icon size={16} strokeWidth={1.8} /></div></div>
      <p className="project-description">{project.description}</p>
      <div className="project-card-bottom"><ul className="project-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><div className="project-result"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div></div>
      <a className="project-link" href="#contact">View Project <ArrowUpRight size={14} /></a>
    </div>
  </article>
}

export function Projects() {
  return <section id="work" className="projects-section"><div className="page-shell"><div className="section-heading"><p className="eyebrow">Selected projects</p><h2>Software that makes <span className="text-gradient">complexity useful.</span></h2><p>A selection of focused systems built for teams that care about clarity, momentum, and measurable outcomes.</p></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></div></section>
}
